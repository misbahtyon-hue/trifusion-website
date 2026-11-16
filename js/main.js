/* =============================================================
   Trifusion Bionova Medika — Global Scripts
   Navbar, mobile menu, scroll reveal, count-up animations
   ============================================================= */
(function () {
  "use strict";

  /* ---------- 1. Header shrink on scroll ---------- */
  const header = document.querySelector(".header");
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 24);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- 2. Mobile navigation ---------- */
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav");
  const backdrop = document.querySelector(".nav-backdrop");

  function closeMenu() {
    if (!nav) return;
    nav.classList.remove("open");
    burger && burger.classList.remove("open");
    backdrop && backdrop.classList.remove("show");
    document.body.style.overflow = "";
  }

  if (burger && nav) {
    burger.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      burger.classList.toggle("open", isOpen);
      backdrop && backdrop.classList.toggle("show", isOpen);
      document.body.style.overflow = isOpen ? "hidden" : "";
    });
  }
  backdrop && backdrop.addEventListener("click", closeMenu);
  nav && nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  /* ---------- 2b. Products Mega Menu ---------- */
  buildMegaMenu();

  function buildMegaMenu() {
    const data = window.TF_DATA;
    if (!data || !nav) return;

    const productLink = nav.querySelector('.nav__link[href="products.html"]');
    if (!productLink) return;
    const li = productLink.closest("li");
    if (!li) return;

    const { CATEGORIES, CATEGORY_LABELS, PRODUCTS } = data;
    // Types only (exclude the "all" entry)
    const types = CATEGORIES.filter((c) => c.id !== "all");
    if (!types.length) return;

    li.classList.add("nav__item--mega");

    // Caret indicator on the Products link
    const caret =
      '<svg class="nav__caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>';
    productLink.insertAdjacentHTML("beforeend", " " + caret);

    const arrow =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';

    // Left column — category buttons
    const catsHTML = types
      .map((c) => {
        const count = PRODUCTS.filter((p) => p.category === c.id).length;
        return `<a class="mega__cat" href="products.html?category=${c.id}" data-cat="${c.id}">
          <span>${c.label}</span>
          <span class="mega__cat-count">${count} ${arrow}</span>
        </a>`;
      })
      .join("");

    // Build the panel shell
    const mega = document.createElement("div");
    mega.className = "mega";
    mega.innerHTML = `
      <div class="mega__cats">${catsHTML}</div>
      <div class="mega__panel">
        <div class="mega__panel-head" id="megaHead"></div>
        <div class="mega__products" id="megaProducts"></div>
        <div class="mega__footer">
          <a href="products.html">View Full Catalog ${arrow}</a>
        </div>
      </div>`;
    li.appendChild(mega);

    const headEl = mega.querySelector("#megaHead");
    const productsEl = mega.querySelector("#megaProducts");
    const panelEl = mega.querySelector(".mega__panel");
    const catEls = mega.querySelectorAll(".mega__cat");

    let currentCat = null;
    let swapTimer = null;

    function paint(catId) {
      catEls.forEach((el) => el.classList.toggle("active", el.dataset.cat === catId));
      headEl.textContent = CATEGORY_LABELS[catId] || "Products";
      const items = PRODUCTS.filter((p) => p.category === catId).slice(0, 6);
      productsEl.innerHTML = items
        .map(
          (p, i) => `
        <a class="mega__product" href="product-detail.html?id=${encodeURIComponent(p.id)}" style="animation-delay:${i * 55}ms">
          <img class="mega__product-thumb" src="${p.image}" alt="${p.name}" loading="lazy">
          <span class="mega__product-info">
            <span class="mega__product-name">${p.name}</span>
            <span class="mega__product-cat">${CATEGORY_LABELS[p.category] || ""}</span>
          </span>
        </a>`
        )
        .join("");
    }

    function renderCategory(catId, immediate) {
      if (catId === currentCat) return;
      clearTimeout(swapTimer);

      // Reduced motion or first paint — swap instantly
      if (immediate || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        currentCat = catId;
        paint(catId);
        return;
      }

      // Cross-fade: fade current out, swap, fade new in
      panelEl.classList.add("swapping");
      swapTimer = setTimeout(() => {
        currentCat = catId;
        paint(catId);
        // next frame removes the swapping class so the new content animates in
        requestAnimationFrame(() => panelEl.classList.remove("swapping"));
      }, 180);
    }

    // Default to first category (instant); switch with cross-fade on hover/focus
    renderCategory(types[0].id, true);
    catEls.forEach((el) => {
      el.addEventListener("mouseenter", () => renderCategory(el.dataset.cat));
      el.addEventListener("focus", () => renderCategory(el.dataset.cat));
    });

    /* Hover intent — open with a small delay, close with a grace period
       so moving the cursor toward the products doesn't snap it shut. */
    const isMobile = () => window.matchMedia("(max-width: 900px)").matches;
    const OPEN_DELAY = 120;   // ms before opening
    const CLOSE_DELAY = 320;  // ms grace before closing
    let openTimer = null;
    let closeTimer = null;

    function openMega() {
      if (isMobile()) return;
      clearTimeout(closeTimer);
      openTimer = setTimeout(() => li.classList.add("open"), OPEN_DELAY);
    }
    function closeMega() {
      if (isMobile()) return;
      clearTimeout(openTimer);
      closeTimer = setTimeout(() => li.classList.remove("open"), CLOSE_DELAY);
    }

    // Open when entering the trigger or the panel; close when leaving either,
    // but the grace timer keeps it open while crossing the gap between them.
    li.addEventListener("mouseenter", openMega);
    li.addEventListener("mouseleave", closeMega);
    mega.addEventListener("mouseenter", () => clearTimeout(closeTimer));
    mega.addEventListener("mouseleave", closeMega);

    // Keyboard: open on focus within, close when focus leaves
    li.addEventListener("focusin", () => { if (!isMobile()) li.classList.add("open"); });
    li.addEventListener("focusout", (e) => {
      if (isMobile()) return;
      if (!li.contains(e.relatedTarget)) li.classList.remove("open");
    });
    // Close on Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") li.classList.remove("open");
    });

    // Mobile: caret toggles the submenu without blocking the Products link.
    // Tapping the text navigates; tapping the caret expands the types inline.
    const caretEl = productLink.querySelector(".nav__caret");
    if (caretEl) {
      caretEl.addEventListener("click", (e) => {
        if (!isMobile()) return;
        e.preventDefault();
        e.stopPropagation();
        li.classList.toggle("open");
      });
    }
  }


  /* ---------- 3. Scroll reveal (Intersection Observer) ---------- */
  const revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealEls.length) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            // Trigger count-up if present inside revealed block
            entry.target.querySelectorAll("[data-count]").forEach(runCounter);
            if (entry.target.hasAttribute("data-count")) runCounter(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in"));
  }

  /* ---------- 4. Count-up animation ---------- */
  function runCounter(el) {
    if (el.dataset.counted) return;
    el.dataset.counted = "true";
    const target = parseFloat(el.getAttribute("data-count"));
    const suffix = el.getAttribute("data-suffix") || "";
    const decimals = (el.getAttribute("data-count").split(".")[1] || "").length;
    const duration = 1600;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      const value = target * eased;
      el.textContent = value.toFixed(decimals) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target.toFixed(decimals) + suffix;
    }
    requestAnimationFrame(tick);
  }

  // Observe standalone counters that aren't wrapped in reveal blocks
  const standaloneCounters = document.querySelectorAll("[data-count]");
  if ("IntersectionObserver" in window && standaloneCounters.length) {
    const cObs = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runCounter(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    standaloneCounters.forEach((el) => cObs.observe(el));
  }

  /* ---------- 5. Footer year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- 6. Active nav link by current page ---------- */
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav__link").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === path) link.classList.add("active");
  });
})();

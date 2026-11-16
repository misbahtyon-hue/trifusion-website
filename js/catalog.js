/* =============================================================
   Trifusion Bionova Medika — Product Catalog
   Filter by category, live search, pagination, empty state
   ============================================================= */
(function () {
  "use strict";

  const data = window.TF_DATA;
  if (!data) return;

  const { CATEGORIES, CATEGORY_LABELS, PRODUCTS } = data;

  const PER_PAGE = 9;
  let activeCategory = "all";
  let searchTerm = "";
  let currentPage = 1;

  const els = {
    filters: document.getElementById("filters"),
    search: document.getElementById("search"),
    grid: document.getElementById("productGrid"),
    empty: document.getElementById("emptyState"),
    count: document.getElementById("resultCount"),
    pagination: document.getElementById("pagination"),
    resetBtn: document.getElementById("resetFilters")
  };

  /* ---------- Icons ---------- */
  const arrowIcon =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';
  const chevronLeft =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>';
  const chevronRight =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>';

  /* Per-category glyphs (shown when no real product photo is set) */
  const CATEGORY_ICONS = {
    imaging:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="12" cy="12" r="4"/><line x1="12" y1="3" x2="12" y2="7"/></svg>',
    monitoring:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="14" rx="2"/><path d="M5 11h3l1.5-3 2 6 1.5-3h3"/><line x1="8" y1="22" x2="16" y2="22"/><line x1="12" y1="18" x2="12" y2="22"/></svg>',
    surgical:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 3.5l6 6L9 21l-6-6z"/><line x1="14" y1="9" x2="9" y2="14"/><circle cx="6.5" cy="17.5" r="0.5" fill="currentColor"/></svg>',
    laboratory:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3"/><line x1="7" y1="16" x2="17" y2="16"/></svg>',
    digital:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18"/><path d="M9 7h6M10.5 7v-1M13.5 7v-1"/></svg>'
  };
  const buildingIcon =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>';

  function isPlaceholder(src) {
    return !src || /placeholder/i.test(src);
  }

  /* AKL/regulatory badge — only show when registered */
  function aklBadge(p) {
    if (!p.akl) return "";
    const isReg = /akl/i.test(p.akl) && !/process/i.test(p.akl);
    if (!isReg) return "";
    return `<span class="product-card__akl" title="Registered medical device (Izin Edar Alkes)">${p.akl}</span>`;
  }

  /* ---------- Build filter buttons ---------- */
  function renderFilters() {
    els.filters.innerHTML = CATEGORIES.map(
      (cat) =>
        `<button class="filter-btn${cat.id === activeCategory ? " active" : ""}" data-cat="${cat.id}">${cat.label}</button>`
    ).join("");

    els.filters.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeCategory = btn.dataset.cat;
        currentPage = 1;
        els.filters.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        render();
      });
    });
  }

  /* ---------- Filtering logic ---------- */
  function getFiltered() {
    return PRODUCTS.filter((p) => {
      const matchCat = activeCategory === "all" || p.category === activeCategory;
      const term = searchTerm.trim().toLowerCase();
      const matchSearch =
        !term ||
        p.name.toLowerCase().includes(term) ||
        p.short.toLowerCase().includes(term) ||
        (p.brand || "").toLowerCase().includes(term) ||
        (CATEGORY_LABELS[p.category] || "").toLowerCase().includes(term);
      return matchCat && matchSearch;
    });
  }

  /* ---------- Card template ---------- */
  function cardHTML(p, idx) {
    const href = `product-detail.html?id=${encodeURIComponent(p.id)}`;
    const num = String(idx + 1).padStart(2, "0");

    // Media: real photo if provided, otherwise a branded blueprint tile with category glyph
    const media = isPlaceholder(p.image)
      ? `<span class="product-card__glyph">${CATEGORY_ICONS[p.category] || buildingIcon}</span>`
      : `<img src="${p.image}" alt="${p.name}" loading="lazy">`;

    // Spec preview: first two specs from the product
    const specEntries = Object.entries(p.specs || {}).slice(0, 2);
    const specs = specEntries.length
      ? `<div class="product-card__specs">${specEntries
          .map(([k, v]) => `<div class="product-card__spec"><span class="k">${k}</span><span class="v">${v}</span></div>`)
          .join("")}</div>`
      : "";

    return `
      <article class="product-card" data-reveal>
        <a href="${href}">
          <div class="product-card__media">
            <span class="product-card__index">${num}</span>
            ${aklBadge(p)}
            ${media}
            <span class="product-card__cat">${CATEGORY_LABELS[p.category] || p.category}</span>
          </div>
          <div class="product-card__body">
            ${p.brand ? `<span class="product-card__brand">${p.brand}</span>` : ""}
            <h3>${p.name}</h3>
            <p>${p.short}</p>
            ${specs}
            <span class="product-card__link">View Detail ${arrowIcon}</span>
          </div>
        </a>
      </article>`;
  }

  /* ---------- Pagination ---------- */
  function renderPagination(totalPages) {
    if (totalPages <= 1) {
      els.pagination.innerHTML = "";
      return;
    }
    let html = `<button data-page="prev" ${currentPage === 1 ? "disabled" : ""} aria-label="Previous page">${chevronLeft}</button>`;
    for (let i = 1; i <= totalPages; i++) {
      html += `<button data-page="${i}" class="${i === currentPage ? "active" : ""}">${i}</button>`;
    }
    html += `<button data-page="next" ${currentPage === totalPages ? "disabled" : ""} aria-label="Next page">${chevronRight}</button>`;
    els.pagination.innerHTML = html;

    els.pagination.querySelectorAll("button[data-page]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const val = btn.dataset.page;
        if (val === "prev" && currentPage > 1) currentPage--;
        else if (val === "next" && currentPage < totalPages) currentPage++;
        else if (val !== "prev" && val !== "next") currentPage = parseInt(val, 10);
        render();
        const top = document.getElementById("catalog");
        if (top) window.scrollTo({ top: top.offsetTop - 90, behavior: "smooth" });
      });
    });
  }

  /* ---------- Reveal newly rendered cards ---------- */
  function revealCards() {
    const cards = els.grid.querySelectorAll("[data-reveal]");
    if ("IntersectionObserver" in window) {
      const obs = new IntersectionObserver(
        (entries, o) => {
          entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
              setTimeout(() => entry.target.classList.add("in"), i * 60);
              o.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      cards.forEach((c) => obs.observe(c));
    } else {
      cards.forEach((c) => c.classList.add("in"));
    }
  }

  /* ---------- Main render ---------- */
  function render() {
    const filtered = getFiltered();
    const total = filtered.length;
    const totalPages = Math.ceil(total / PER_PAGE);
    if (currentPage > totalPages) currentPage = totalPages || 1;

    if (total === 0) {
      els.grid.innerHTML = "";
      els.grid.style.display = "none";
      els.empty.classList.add("show");
      els.pagination.innerHTML = "";
      els.count.innerHTML = "No products found";
      return;
    }

    els.empty.classList.remove("show");
    els.grid.style.display = "";

    const start = (currentPage - 1) * PER_PAGE;
    const pageItems = filtered.slice(start, start + PER_PAGE);

    els.count.innerHTML = `Showing <strong>${start + 1}–${start + pageItems.length}</strong> of <strong>${total}</strong> products`;
    els.grid.innerHTML = pageItems.map((p, i) => cardHTML(p, start + i)).join("");
    renderPagination(totalPages);
    revealCards();
  }

  /* ---------- Search input (debounced) ---------- */
  let searchTimer;
  if (els.search) {
    els.search.addEventListener("input", (e) => {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => {
        searchTerm = e.target.value;
        currentPage = 1;
        render();
      }, 200);
    });
  }

  /* ---------- Reset from empty state ---------- */
  if (els.resetBtn) {
    els.resetBtn.addEventListener("click", () => {
      activeCategory = "all";
      searchTerm = "";
      currentPage = 1;
      if (els.search) els.search.value = "";
      renderFilters();
      render();
    });
  }

  /* ---------- Init: respect ?category= from URL ---------- */
  const params = new URLSearchParams(location.search);
  const urlCat = params.get("category");
  if (urlCat && CATEGORIES.some((c) => c.id === urlCat)) activeCategory = urlCat;

  renderFilters();
  render();
})();

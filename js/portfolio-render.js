/* =============================================================
   Trifusion Bionova Medika — Project Portfolio Renderer
   Stats, category filters, animated project cards
   ============================================================= */
(function () {
  "use strict";

  const data = window.TF_PORTFOLIO;
  const root = document.getElementById("portfolioRoot");
  if (!data || !root) return;

  const { PORTFOLIO, PORTFOLIO_TYPES, PORTFOLIO_TYPE_LABELS } = data;

  let activeType = "all";

  const els = {
    stats: document.getElementById("pfStats"),
    filters: document.getElementById("pfFilters"),
    count: document.getElementById("pfCount"),
    grid: document.getElementById("pfGrid")
  };

  const buildingIcon =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"/><path d="M9 9v.01M9 12v.01M9 15v.01M9 18v.01"/></svg>';

  /* ---------- Stats (computed from data) ---------- */
  function buildStats() {
    const total = PORTFOLIO.length;
    const hospitals = new Set(PORTFOLIO.map((p) => p.hospital)).size;
    const years = PORTFOLIO.map((p) => p.year);
    const span = Math.max(...years) - Math.min(...years) + 1;
    const ok = PORTFOLIO.filter((p) => p.type === "operating").length;

    const stats = [
      { num: total, suffix: "+", label: "Projects Delivered" },
      { num: hospitals, suffix: "+", label: "Healthcare Facilities" },
      { num: span, suffix: " yrs", label: "Track Record" },
      { num: ok, suffix: "+", label: "Operating Theaters" }
    ];

    els.stats.innerHTML = stats
      .map(
        (s) => `
      <div class="portfolio-stat">
        <div class="num"><span data-count="${s.num}" data-suffix="${s.suffix}">0</span></div>
        <div class="label">${s.label}</div>
      </div>`
      )
      .join("");
  }

  /* ---------- Filters ---------- */
  function buildFilters() {
    els.filters.innerHTML = PORTFOLIO_TYPES.map((t) => {
      const n = t.id === "all" ? PORTFOLIO.length : PORTFOLIO.filter((p) => p.type === t.id).length;
      if (t.id !== "all" && n === 0) return "";
      return `<button class="filter-btn${t.id === activeType ? " active" : ""}" data-type="${t.id}">${t.label}</button>`;
    }).join("");

    els.filters.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeType = btn.dataset.type;
        els.filters.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        renderGrid();
      });
    });
  }

  /* ---------- Grid ---------- */
  function renderGrid() {
    const items = PORTFOLIO.filter((p) => activeType === "all" || p.type === activeType).sort(
      (a, b) => b.year - a.year
    );

    els.count.innerHTML = `Showing <strong>${items.length}</strong> ${
      activeType === "all" ? "projects" : PORTFOLIO_TYPE_LABELS[activeType].toLowerCase() + " projects"
    }`;

    els.grid.innerHTML = items
      .map(
        (p, i) => `
      <article class="pf-card" style="animation-delay:${Math.min(i, 12) * 45}ms">
        <div class="pf-card__top">
          <span class="pf-card__cat">${PORTFOLIO_TYPE_LABELS[p.type] || p.type}</span>
          <span class="pf-card__year">${p.year}</span>
        </div>
        <h3 class="pf-card__hospital">${p.hospital}</h3>
        <p class="pf-card__desc">${p.desc}</p>
        <div class="pf-card__client">${buildingIcon} ${p.client}</div>
      </article>`
      )
      .join("");
  }

  /* ---------- Count-up for stats (reuse pattern) ---------- */
  function runStatCounters() {
    const counters = els.stats.querySelectorAll("[data-count]");
    if (!("IntersectionObserver" in window)) {
      counters.forEach((el) => (el.textContent = el.getAttribute("data-count") + (el.getAttribute("data-suffix") || "")));
      return;
    }
    const obs = new IntersectionObserver(
      (entries, o) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseFloat(el.getAttribute("data-count"));
          const suffix = el.getAttribute("data-suffix") || "";
          const dur = 1400;
          const start = performance.now();
          (function tick(now) {
            const prog = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - prog, 3);
            el.textContent = Math.round(target * eased) + suffix;
            if (prog < 1) requestAnimationFrame(tick);
            else el.textContent = target + suffix;
          })(start);
          o.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((el) => obs.observe(el));
  }

  buildStats();
  buildFilters();
  renderGrid();
  runStatCounters();
})();

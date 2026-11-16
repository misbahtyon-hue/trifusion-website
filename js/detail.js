/* =============================================================
   Trifusion Bionova Medika — Product Detail
   Reads ?id= from URL, renders product + related items
   ============================================================= */
(function () {
  "use strict";

  const data = window.TF_DATA;
  if (!data) return;

  const { CATEGORY_LABELS, PRODUCTS } = data;
  const root = document.getElementById("detailRoot");
  if (!root) return;

  const arrowIcon =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';
  const backIcon =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>';
  const checkIcon =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';

  /* Per-category glyphs for related-product cards without a real photo */
  const CATEGORY_ICONS = {
    imaging:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="12" cy="12" r="4"/><line x1="12" y1="3" x2="12" y2="7"/></svg>',
    monitoring:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="14" rx="2"/><path d="M5 11h3l1.5-3 2 6 1.5-3h3"/><line x1="8" y1="22" x2="16" y2="22"/><line x1="12" y1="18" x2="12" y2="22"/></svg>',
    surgical:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 3.5l6 6L9 21l-6-6z"/><line x1="14" y1="9" x2="9" y2="14"/></svg>',
    laboratory:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3"/><line x1="7" y1="16" x2="17" y2="16"/></svg>',
    digital:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M9 7h6M10.5 7v-1M13.5 7v-1"/></svg>'
  };
  const fallbackGlyph =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>';
  const isPlaceholder = (src) => !src || /placeholder/i.test(src);
  const relMedia = (p) =>
    isPlaceholder(p.image)
      ? `<span class="product-card__glyph">${CATEGORY_ICONS[p.category] || fallbackGlyph}</span>`
      : `<img src="${p.image}" alt="${p.name}" loading="lazy">`;

  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const product = PRODUCTS.find((p) => p.id === id);

  /* ---------- Not found state ---------- */
  if (!product) {
    root.innerHTML = `
      <div class="container detail-missing page-fade">
        <h2>Product not found</h2>
        <p>The product you're looking for doesn't exist or may have been moved.</p>
        <a class="btn btn--dark" href="products.html">${backIcon} Back to Catalog</a>
      </div>`;
    return;
  }

  document.title = `${product.name} — Trifusion Bionova Medika`;

  /* ---------- Features ---------- */
  const featuresHTML = (product.features || [])
    .map(
      (f) =>
        `<li><span class="check">${checkIcon}</span><span><strong>${f}</strong></span></li>`
    )
    .join("");

  /* ---------- Specs ---------- */
  const specsHTML = Object.entries(product.specs || {})
    .map(([k, v]) => `<div class="row"><span class="k">${k}</span><span class="v">${v}</span></div>`)
    .join("");

  /* ---------- Main detail markup ---------- */
  root.innerHTML = `
    <div class="container page-fade">
      <a class="detail__back" href="products.html">${backIcon} Back to Catalog</a>
      <div class="detail__grid">
        <div class="detail__media" data-reveal="left">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="detail__content" data-reveal="right">
          <div class="detail__meta">
            <span class="detail__cat">${CATEGORY_LABELS[product.category] || product.category}</span>
            ${product.brand ? `<span class="detail__brand">${product.brand}</span>` : ""}
            ${product.akl ? `<span class="detail__akl${/process/i.test(product.akl) ? " is-process" : ""}">${/process/i.test(product.akl) ? "Izin Edar: On Process" : "Izin Edar: " + product.akl}</span>` : ""}
          </div>
          <h1 class="detail__title">${product.name}</h1>
          <p class="detail__desc">${product.description}</p>

          ${featuresHTML ? `<div class="detail__features"><h4>Key Features</h4><ul>${featuresHTML}</ul></div>` : ""}
          ${specsHTML ? `<div class="detail__specs">${specsHTML}</div>` : ""}

          <div class="detail__cta">
            <div>
              <div class="t">Interested in this product?</div>
              <div class="s">Get pricing, availability and technical consultation from our team.</div>
            </div>
            <a class="btn btn--primary" href="contact.html?product=${encodeURIComponent(product.id)}">Request Quote ${arrowIcon}</a>
          </div>
        </div>
      </div>
    </div>`;

  /* ---------- Related products (same category) ---------- */
  const related = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);
  const relatedRoot = document.getElementById("relatedRoot");
  if (relatedRoot && related.length) {
    relatedRoot.innerHTML = `
      <div class="container">
        <div class="section-head" data-reveal>
          <span class="eyebrow">More Solutions</span>
          <h2 class="section-title">Related Products</h2>
        </div>
        <div class="product-grid">
          ${related
            .map(
              (p) => `
            <article class="product-card" data-reveal>
              <a href="product-detail.html?id=${encodeURIComponent(p.id)}">
                <div class="product-card__media">
                  ${relMedia(p)}
                  <span class="product-card__cat">${CATEGORY_LABELS[p.category] || p.category}</span>
                </div>
                <div class="product-card__body">
                  <h3>${p.name}</h3>
                  <p>${p.short}</p>
                  <span class="product-card__link">View Detail ${arrowIcon}</span>
                </div>
              </a>
            </article>`
            )
            .join("")}
        </div>
      </div>`;
  }

  /* ---------- Trigger reveals for injected content ---------- */
  const revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    const obs = new IntersectionObserver(
      (entries, o) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            o.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    revealEls.forEach((el) => obs.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in"));
  }
})();

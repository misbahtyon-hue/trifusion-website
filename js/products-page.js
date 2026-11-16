/* =============================================================
   Trifusion Bionova Medika — Halaman Produk
   Merender katalog dari window.TF_DATA (js/products.js).
   Satu sumber data untuk: tab kategori, kartu produk, filter brand,
   pencarian, pagination, dan angka ringkasan.
   Muat SETELAH js/products.js.
   ============================================================= */
(function () {
  'use strict';

  var PER_PAGE = 9;

  var els = {
    nav: document.getElementById('catNav'),
    grid: document.getElementById('productGrid'),
    pager: document.getElementById('pagination'),
    count: document.getElementById('resultCount'),
    search: document.getElementById('searchInput'),
    brands: document.getElementById('brandList'),
    reset: document.getElementById('resetFilters'),
    main: document.getElementById('catalogMain')
  };
  if (!els.grid) return;

  var data = window.TF_DATA;
  if (!data || !Array.isArray(data.PRODUCTS)) {
    els.grid.innerHTML =
      '<p class="catalog-empty">Katalog belum dapat dimuat. Silakan muat ulang halaman atau ' +
      '<a href="contact.html">hubungi kami</a>.</p>';
    return;
  }

  var PRODUCTS = data.PRODUCTS;
  var CATEGORIES = data.CATEGORIES || [{ id: 'all', label: 'Semua Produk' }];
  var LABELS = data.CATEGORY_LABELS || {};

  /* ---------- Helpers ---------- */
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function pad(n) { return n < 10 ? '0' + n : String(n); }
  function brandsOf(p) {
    return String(p.brand || '').split('/').map(function (b) { return b.trim(); }).filter(Boolean);
  }
  function regInfo(p) {
    var v = String(p.akl || '').toLowerCase();
    if (v === 'akl') return { label: 'AKL', mod: 'akl' };
    if (v === 'akd') return { label: 'AKD', mod: 'akd' };
    return { label: 'Dalam Proses', mod: 'proc' };
  }
  function keySpecs(p) {
    var skip = { 'Brand': 1, 'Reg. Status (AKL)': 1 };
    return Object.keys(p.specs || {}).filter(function (k) { return !skip[k]; }).slice(0, 2)
      .map(function (k) { return { k: k, v: p.specs[k] }; });
  }

  var INDEX = {};
  PRODUCTS.forEach(function (p, i) { INDEX[p.id] = i + 1; });

  var ICON_PATHS = {
    all: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',
    ultrasound: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M6 10h3l1.5-3 3 6 1.5-3h3"/><path d="M8 21h8M12 17v4"/>',
    ventilator: '<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/>',
    anesthesia: '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>',
    monitoring: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
    gynob: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>'
  };
  function icon(id) {
    var p = ICON_PATHS[id] || ICON_PATHS.all;
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + p + '</svg>';
  }
  var ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
    'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';

  /* ---------- State ---------- */
  var state = { cat: 'all', brand: 'all', q: '', page: 1 };

  (function readUrl() {
    try {
      var c = new URLSearchParams(window.location.search).get('category');
      if (c && CATEGORIES.some(function (x) { return x.id === c; })) state.cat = c;
    } catch (e) { /* abaikan */ }
  })();

  function syncUrl() {
    try {
      var u = new URL(window.location.href);
      if (state.cat === 'all') u.searchParams.delete('category');
      else u.searchParams.set('category', state.cat);
      window.history.replaceState(null, '', u.pathname + u.search + u.hash);
    } catch (e) { /* file:// atau browser lama: lewati */ }
  }

  /* ---------- Filtering ---------- */
  function matchesBase(p) {
    if (state.cat !== 'all' && p.category !== state.cat) return false;
    if (state.q) {
      var hay = (p.name + ' ' + p.brand + ' ' + (LABELS[p.category] || '')).toLowerCase();
      if (hay.indexOf(state.q) === -1) return false;
    }
    return true;
  }
  function getFiltered() {
    return PRODUCTS.filter(function (p) {
      return matchesBase(p) && (state.brand === 'all' || brandsOf(p).indexOf(state.brand) !== -1);
    });
  }

  /* ---------- Render: tab kategori (sekali) ---------- */
  function buildTabs() {
    if (!els.nav) return;
    els.nav.innerHTML = CATEGORIES.map(function (c) {
      return '<button type="button" class="cat-nav__item" data-cat="' + esc(c.id) + '" aria-pressed="false">' +
        '<span class="cat-nav__icon">' + icon(c.id) + '</span>' +
        '<span class="cat-nav__label">' + esc(c.id === 'all' ? 'Semua Produk' : c.label) + '</span></button>';
    }).join('');
  }
  function updateTabs() {
    if (!els.nav) return;
    Array.prototype.forEach.call(els.nav.querySelectorAll('[data-cat]'), function (b) {
      var on = b.getAttribute('data-cat') === state.cat;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }

  /* ---------- Render: filter brand ---------- */
  function renderBrands() {
    if (!els.brands) return;
    var counts = {}, order = [], total = 0;
    PRODUCTS.forEach(function (p) {
      brandsOf(p).forEach(function (b) { if (!(b in counts)) { counts[b] = 0; order.push(b); } });
    });
    PRODUCTS.filter(matchesBase).forEach(function (p) {
      total++;
      brandsOf(p).forEach(function (b) { counts[b]++; });
    });
    function item(key, label, n) {
      var on = state.brand === key;
      return '<li><button type="button" class="brand-list__btn' + (on ? ' is-active' : '') +
        '" data-brand="' + esc(key) + '" aria-pressed="' + on + '"><span>' + esc(label) +
        '</span><span class="brand-list__n">' + n + '</span></button></li>';
    }
    var html = item('all', 'Semua Brand', total);
    order.forEach(function (b) {
      if (counts[b] > 0 || state.brand === b) html += item(b, b, counts[b]);
    });
    els.brands.innerHTML = html;
  }

  /* ---------- Render: kartu ---------- */
  function cardHtml(p) {
    var reg = regInfo(p);
    var detail = 'product-detail.html?id=' + encodeURIComponent(p.id);
    var quote = 'contact.html?produk=' + encodeURIComponent(p.id);
    var catLabel = LABELS[p.category] || '';
    var specs = keySpecs(p).map(function (s) {
      return '<div class="pcard__spec"><dt>' + esc(s.k) + '</dt><dd>' + esc(s.v) + '</dd></div>';
    }).join('');

    return '<article class="pcard">' +
      '<a class="pcard__media" href="' + detail + '" tabindex="-1" aria-hidden="true">' +
        '<span class="pcard__reg pcard__reg--' + reg.mod + '">' + esc(reg.label) + '</span>' +
        '<span class="pcard__index">' + pad(INDEX[p.id]) + '</span>' +
        '<img src="' + esc(encodeURI(p.image || '')) + '" alt="" loading="lazy">' +
        (catLabel ? '<span class="pcard__cat">' + esc(catLabel) + '</span>' : '') +
      '</a>' +
      '<div class="pcard__body">' +
        '<span class="pcard__brand">' + esc(p.brand) + '</span>' +
        '<h3><a href="' + detail + '">' + esc(p.name) + '</a></h3>' +
        '<p>' + esc(p.short) + '</p>' +
        (specs ? '<dl class="pcard__specs">' + specs + '</dl>' : '') +
        '<div class="pcard__actions">' +
          '<a class="pcard__link" href="' + detail + '">Lihat Detail ' + ARROW + '</a>' +
          '<a class="pcard__quote" href="' + quote + '">Minta Penawaran</a>' +
        '</div>' +
      '</div>' +
    '</article>';
  }

  /* ---------- Render: pagination ---------- */
  function pageList(cur, total) {
    var out = [], i;
    if (total <= 7) { for (i = 1; i <= total; i++) out.push(i); return out; }
    var s = Math.max(2, cur - 1), e = Math.min(total - 1, cur + 1);
    out.push(1);
    if (s > 2) out.push('…');
    for (i = s; i <= e; i++) out.push(i);
    if (e < total - 1) out.push('…');
    out.push(total);
    return out;
  }
  function renderPager(cur, total) {
    if (!els.pager) return;
    if (total <= 1) { els.pager.innerHTML = ''; return; }
    var chev = function (d) {
      return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="' + d + '"/></svg>';
    };
    var html = '<button type="button" data-page="' + (cur - 1) + '" aria-label="Halaman sebelumnya"' +
      (cur === 1 ? ' disabled' : '') + '>' + chev('M15 18l-6-6 6-6') + '</button>';
    pageList(cur, total).forEach(function (n) {
      if (n === '…') { html += '<span class="pagination__gap" aria-hidden="true">…</span>'; return; }
      html += '<button type="button" data-page="' + n + '"' +
        (n === cur ? ' class="active" aria-current="page"' : '') + ' aria-label="Halaman ' + n + '">' + n + '</button>';
    });
    html += '<button type="button" data-page="' + (cur + 1) + '" aria-label="Halaman berikutnya"' +
      (cur === total ? ' disabled' : '') + '>' + chev('M9 18l6-6-6-6') + '</button>';
    els.pager.innerHTML = html;
  }

  /* ---------- Render utama ---------- */
  function isDefault() {
    return state.cat === 'all' && state.brand === 'all' && !state.q;
  }
  function render() {
    var list = getFiltered();
    var total = list.length;
    var pages = Math.max(1, Math.ceil(total / PER_PAGE));
    if (state.page > pages) state.page = pages;
    if (state.page < 1) state.page = 1;
    var start = (state.page - 1) * PER_PAGE;
    var slice = list.slice(start, start + PER_PAGE);

    if (!total) {
      els.grid.innerHTML = '<div class="catalog-empty">' +
        '<h3>Produk tidak ditemukan</h3>' +
        '<p>Coba kata kunci lain, atau tampilkan semua produk.</p>' +
        '<button type="button" class="catalog-empty__btn" data-reset>Reset filter</button></div>';
    } else {
      els.grid.innerHTML = slice.map(cardHtml).join('');
    }

    if (els.count) {
      els.count.textContent = total
        ? 'Menampilkan ' + (start + 1) + '–' + (start + slice.length) + ' dari ' + total + ' produk'
        : '0 produk';
    }
    if (els.reset) els.reset.hidden = isDefault();

    updateTabs();
    renderBrands();
    renderPager(state.page, pages);
    syncUrl();
  }

  /* ---------- Ringkasan angka ---------- */
  function renderStats() {
    var aklCount = PRODUCTS.filter(function (p) { return regInfo(p).mod === 'akl'; }).length;
    var seen = {};
    PRODUCTS.forEach(function (p) { brandsOf(p).forEach(function (b) { seen[b] = 1; }); });
    var vals = { akl: aklCount, brand: Object.keys(seen).length, product: PRODUCTS.length };
    Array.prototype.forEach.call(document.querySelectorAll('[data-stat]'), function (el) {
      var key = el.getAttribute('data-stat');
      var label = el.getAttribute('data-label') || '';
      if (key in vals) el.textContent = vals[key] + ' ' + label;
    });
  }

  /* ---------- Events ---------- */
  function resetAll() {
    state.cat = 'all'; state.brand = 'all'; state.q = ''; state.page = 1;
    if (els.search) els.search.value = '';
    render();
  }

  if (els.nav) els.nav.addEventListener('click', function (e) {
    var b = e.target.closest('[data-cat]');
    if (!b) return;
    state.cat = b.getAttribute('data-cat');
    state.brand = 'all';
    state.page = 1;
    render();
  });

  if (els.brands) els.brands.addEventListener('click', function (e) {
    var b = e.target.closest('[data-brand]');
    if (!b) return;
    state.brand = b.getAttribute('data-brand');
    state.page = 1;
    render();
  });

  if (els.pager) els.pager.addEventListener('click', function (e) {
    var b = e.target.closest('[data-page]');
    if (!b || b.disabled) return;
    state.page = parseInt(b.getAttribute('data-page'), 10) || 1;
    render();
    if (els.main && els.main.scrollIntoView) els.main.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  if (els.reset) els.reset.addEventListener('click', resetAll);
  els.grid.addEventListener('click', function (e) {
    if (e.target.closest('[data-reset]')) resetAll();
  });

  if (els.search) {
    var timer;
    els.search.addEventListener('input', function () {
      clearTimeout(timer);
      timer = setTimeout(function () {
        state.q = els.search.value.trim().toLowerCase();
        state.brand = 'all';
        state.page = 1;
        render();
      }, 150);
    });
  }

  /* Foto yang gagal dimuat -> placeholder, bukan ikon rusak */
  els.grid.addEventListener('error', function (e) {
    var t = e.target;
    if (t && t.tagName === 'IMG' && t.parentNode) t.parentNode.classList.add('is-missing');
  }, true);

  /* ---------- Init ---------- */
  buildTabs();
  renderStats();
  render();
})();

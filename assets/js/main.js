/* =========================================================
   ALENGKA HOME LIVING — Interaksi
   ========================================================= */
(function () {
  'use strict';

  var WA_NUMBER = '6288985099829';
  var PAGE_SIZE = 8;
  var CAT_LABEL = {
    kursi: 'Kursi & Stool',
    bangku: 'Bangku & Meja Panjang',
    meja: 'Meja',
    set: 'Set Meja & Kursi'
  };
  var products = window.ALENGKA_PRODUCTS || [];

  var $ = function (s, ctx) { return (ctx || document).querySelector(s); };
  var $$ = function (s, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(s)); };

  var rupiah = function (n) { return 'Rp' + n.toLocaleString('id-ID'); };
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };
  var waLink = function (text) { return 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(text); };

  /* ---------- Header: efek saat scroll ---------- */
  var header = $('#header');
  var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 40); };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Tombol WA melayang tidak menutupi footer ---------- */
  var waFloat = $('.wa-float');
  var footerEl = $('.footer');
  var liftFloat = function () {
    var over = window.innerHeight - footerEl.getBoundingClientRect().top;
    waFloat.style.setProperty('--lift', over > 0 ? -over + 'px' : '0px');
  };
  liftFloat();
  window.addEventListener('scroll', liftFloat, { passive: true });
  window.addEventListener('resize', liftFloat);

  /* ---------- Menu mobile ---------- */
  var burger = $('#burger');
  var nav = $('#nav');
  var menuScrollY = 0;
  var setMenu = function (open) {
    menuScrollY = window.scrollY;
    nav.classList.toggle('is-open', open);
    burger.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
    document.body.classList.toggle('menu-open', open);
  };
  burger.addEventListener('click', function () { setMenu(!nav.classList.contains('is-open')); });
  document.addEventListener('click', function (e) {
    if (nav.classList.contains('is-open') && !e.target.closest('#nav, #burger')) setMenu(false);
  });
  window.addEventListener('scroll', function () {
    if (nav.classList.contains('is-open') && Math.abs(window.scrollY - menuScrollY) > 60) setMenu(false);
  }, { passive: true });

  /* ---------- Scroll tepat ke section (tidak tertutup header) ---------- */
  var HEADER_H = 68; // tinggi header saat sudah di-scroll
  var targetTop = function (el) {
    return el.id === 'beranda' ? 0 : Math.round(el.getBoundingClientRect().top + window.scrollY - HEADER_H + 1);
  };
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    var hash = a.getAttribute('href');
    var el = hash.length > 1 && document.querySelector(hash);
    if (!el) return;
    e.preventDefault();
    if (nav.classList.contains('is-open')) setMenu(false);
    window.scrollTo({ top: targetTop(el), behavior: 'smooth' });
    if (history.replaceState) history.replaceState(null, '', hash);
  });

  /* ---------- Menu aktif sesuai section yang terlihat ---------- */
  var links = $$('.nav__link');
  var spySections = ['beranda', 'keunggulan', 'katalog', 'cara-pesan', 'kontak']
    .map(function (id) { return document.getElementById(id); }).filter(Boolean);
  var updateActive = function () {
    var line = window.scrollY + HEADER_H + window.innerHeight * 0.3;
    var current = spySections[0];
    spySections.forEach(function (s) { if (s.offsetTop <= line) current = s; });
    // di dasar halaman, aktifkan section terakhir
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) current = spySections[spySections.length - 1];
    links.forEach(function (l) { l.classList.toggle('is-active', l.getAttribute('href') === '#' + current.id); });
  };
  updateActive();
  window.addEventListener('scroll', updateActive, { passive: true });
  window.addEventListener('resize', updateActive);

  /* ---------- Animasi reveal ---------- */
  var revealObs = 'IntersectionObserver' in window ? new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }) : null;
  $$('.reveal').forEach(function (el) {
    if (revealObs) revealObs.observe(el); else el.classList.add('is-visible');
  });

  /* ---------- Katalog produk ---------- */
  var grid = $('#products');
  var moreBtn = $('#loadMore');
  var tabs = $$('.tab');
  var state = { cat: 'kursi', shown: PAGE_SIZE };

  var priceHTML = function (p) {
    if (p.price == null) return '<p class="card__price card__price--ask"><small>Harga</small>Hubungi Kami</p>';
    return '<p class="card__price"><small>' + (p.from ? 'Mulai dari' : (p.oldPrice ? 'Harga Promo' : 'Harga')) + '</small>' +
      rupiah(p.price) + (p.oldPrice ? '<del>' + rupiah(p.oldPrice) + '</del>' : '') + '</p>';
  };

  products.forEach(function (p, i) { p.id = i; });

  var waMsg = function (p) {
    return 'Halo Alengka Home Living, saya tertarik dengan produk *' + p.name + '*' +
      (p.price != null ? ' (' + (p.from ? 'mulai ' : '') + rupiah(p.price) + ')' : '') +
      '. Boleh minta info ukuran, warna, dan ketersediaannya?';
  };

  var cardHTML = function (p, i) {
    var msg = waMsg(p);
    return '' +
      '<article class="card" style="--i:' + (i % PAGE_SIZE) + '">' +
        '<button class="card__open" data-open="' + p.id + '" aria-label="Lihat detail ' + esc(p.name) + '"></button>' +
        '<div class="card__media" data-placeholder="' + esc(p.name) + '">' +
          '<img src="' + esc(p.img) + '" alt="' + esc(p.name) + ' | Alengka Home Living" loading="lazy" decoding="async" width="600" height="690">' +
        '</div>' +
        '<div class="card__body">' +
          '<h3 class="card__title">' + esc(p.name) + '</h3>' +
          '<div class="card__foot">' +
            priceHTML(p) +
            '<a class="card__wa" href="' + waLink(msg) + '" target="_blank" rel="noopener" aria-label="Pesan ' + esc(p.name) + ' via WhatsApp" title="Pesan via WhatsApp">' +
              '<svg aria-hidden="true"><use href="#i-wa"/></svg>' +
            '</a>' +
          '</div>' +
        '</div>' +
      '</article>';
  };

  var render = function (append) {
    var list = products.filter(function (p) { return p.cat === state.cat; });
    var from = append ? state.shown - PAGE_SIZE : 0;
    var html = list.slice(from, state.shown).map(function (p, k) { return cardHTML(p, from + k); }).join('');
    if (append) grid.insertAdjacentHTML('beforeend', html); else grid.innerHTML = html;

    // Foto belum ada / gagal dimuat -> tampilkan placeholder elegan
    $$('.card__media img', grid).forEach(function (img) {
      if (img.dataset.bound) return;
      img.dataset.bound = '1';
      var fail = function () { img.parentNode.classList.add('is-missing'); };
      if (img.complete && img.naturalWidth === 0) fail(); else img.addEventListener('error', fail);
    });

    var left = list.length - state.shown;
    moreBtn.parentNode.hidden = left <= 0;
    moreBtn.textContent = 'Tampilkan Lebih Banyak (' + Math.max(left, 0) + ')';
  };

  var selectCat = function (cat) {
    state.cat = cat;
    state.shown = PAGE_SIZE;
    tabs.forEach(function (t) {
      var on = t.getAttribute('data-cat') === cat;
      t.classList.toggle('is-active', on);
      t.setAttribute('aria-selected', on);
      if (on && t.scrollIntoView && window.innerWidth < 600) t.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
    });
    render(false);
    var tabsBar = $('#tabs');
    if (tabsBar.classList.contains('is-stuck')) {
      window.scrollTo({ top: grid.getBoundingClientRect().top + window.scrollY - stickyOffset() - 16, behavior: 'smooth' });
    }
  };

  /* ---------- Filter kategori menempel saat scroll ---------- */
  var tabsEl = $('#tabs');
  var stickyOffset = function () { return tabsEl.offsetHeight + parseFloat(getComputedStyle(tabsEl).top); };
  var checkStuck = function () {
    var top = parseFloat(getComputedStyle(tabsEl).top);
    tabsEl.classList.toggle('is-stuck', tabsEl.getBoundingClientRect().top <= top + 1 && grid.getBoundingClientRect().bottom > top + tabsEl.offsetHeight);
  };
  window.addEventListener('scroll', checkStuck, { passive: true });
  window.addEventListener('resize', checkStuck);

  tabs.forEach(function (t) { t.addEventListener('click', function () { selectCat(t.getAttribute('data-cat')); }); });
  moreBtn.addEventListener('click', function () { state.shown += PAGE_SIZE; render(true); });
  $$('[data-goto]').forEach(function (a) {
    a.addEventListener('click', function () { selectCat(a.getAttribute('data-goto')); });
  });

  render(false);

  /* ---------- Detail produk ---------- */
  var pd = $('#productDetail');
  var pdCur = null;
  var pdPhoto = 0;
  var pdLastFocus = null;
  var photosOf = function (p) { return p.images && p.images.length ? p.images : [p.img]; };

  var showPhoto = function (i) {
    var photos = photosOf(pdCur);
    pdPhoto = (i + photos.length) % photos.length;
    var img = $('#pdImg');
    var media = $('#pdMedia');
    media.classList.remove('is-missing');
    img.onerror = function () { media.classList.add('is-missing'); };
    img.src = photos[pdPhoto];
    img.setAttribute('data-lightbox', photos[pdPhoto]);
    $('#pdCounter').textContent = (pdPhoto + 1) + ' / ' + photos.length;
  };

  var fillDetail = function (p) {
    pdCur = p;
    var img = $('#pdImg');
    var media = $('#pdMedia');
    var multi = photosOf(p).length > 1;
    media.setAttribute('data-placeholder', p.name);
    img.setAttribute('data-caption', p.name);
    img.alt = p.name + ' | Alengka Home Living';
    $('#pdPrev').hidden = !multi;
    $('#pdNext').hidden = !multi;
    $('#pdCounter').hidden = !multi;
    showPhoto(0);


    $('#pdCat').textContent = CAT_LABEL[p.cat];
    $('#pdTitle').textContent = p.name;
    $('#pdPrice').innerHTML = p.price == null
      ? '<small>Harga</small><strong class="is-ask">Hubungi Kami</strong>'
      : '<small>' + (p.from ? 'Mulai dari' : (p.oldPrice ? 'Harga Promo' : 'Harga')) + '</small>' +
        '<strong>' + rupiah(p.price) + '</strong>' + (p.oldPrice ? '<del>' + rupiah(p.oldPrice) + '</del>' : '');
    $('#pdSpecs').innerHTML = p.spec.split(/\s*·\s*/).map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('');
    $('#pdWa').href = waLink(waMsg(p));
    $('.pd__scroll', pd).scrollTop = 0;
  };

  var openDetail = function (p) {
    pdLastFocus = document.activeElement;
    fillDetail(p);
    pd.hidden = false;
    requestAnimationFrame(function () { pd.classList.add('is-open'); });
    document.body.style.overflow = 'hidden';
    $('.pd__close', pd).focus();
  };
  var closeDetail = function () {
    pd.classList.remove('is-open');
    document.body.style.overflow = '';
    setTimeout(function () { pd.hidden = true; }, 350);
    if (pdLastFocus) pdLastFocus.focus();
  };
  var stepPhoto = function (dir) {
    if (photosOf(pdCur).length < 2) return;
    var media = $('#pdMedia');
    media.classList.add('is-switching');
    setTimeout(function () { showPhoto(pdPhoto + dir); media.classList.remove('is-switching'); }, 180);
  };

  grid.addEventListener('click', function (e) {
    var b = e.target.closest('[data-open]');
    if (b) openDetail(products[+b.getAttribute('data-open')]);
  });
  pd.addEventListener('click', function (e) {
    if (e.target.closest('[data-pd-close]')) closeDetail();
  });
  $('#pdPrev').addEventListener('click', function () { stepPhoto(-1); });
  $('#pdNext').addEventListener('click', function () { stepPhoto(1); });

  /* ---------- Lightbox ---------- */
  var lb = $('#lightbox');
  var lbImg = $('#lightboxImg');
  var lbCap = $('#lightboxCap');
  var lastFocus = null;

  var openLb = function (src, cap) {
    lastFocus = document.activeElement;
    lbImg.src = src; lbImg.alt = cap || '';
    lbCap.textContent = cap || '';
    lb.hidden = false;
    requestAnimationFrame(function () { lb.classList.add('is-open'); });
    document.body.style.overflow = 'hidden';
    $('.lightbox__close', lb).focus();
  };
  var closeLb = function () {
    lb.classList.remove('is-open');
    document.body.style.overflow = pd.hidden ? '' : 'hidden';
    setTimeout(function () { lb.hidden = true; lbImg.src = ''; }, 300);
    if (lastFocus) lastFocus.focus();
  };

  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-lightbox]');
    if (!t || t.closest('.is-missing')) return;
    openLb(t.getAttribute('data-lightbox'), t.getAttribute('data-caption'));
  });
  lb.addEventListener('click', function (e) { if (e.target === lb || e.target.closest('.lightbox__close')) closeLb(); });
  document.addEventListener('keydown', function (e) {
    if (!pd.hidden && lb.hidden && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
      stepPhoto(e.key === 'ArrowLeft' ? -1 : 1);
      return;
    }
    if (e.key !== 'Escape') return;
    if (!lb.hidden) closeLb();
    else if (!pd.hidden) closeDetail();
    else if (nav.classList.contains('is-open')) setMenu(false);
  });
})();

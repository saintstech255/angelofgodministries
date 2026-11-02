/* Angels of God Ministries International — shared behaviour (vanilla JS) */
(function () {
  'use strict';
  var CFG = window.AOG_CONFIG || {}, DICT = window.AOG_I18N || { en: {}, sw: {} };
  var doc = document, root = doc.documentElement, page = doc.body.getAttribute('data-page') || 'home';
  var lang = 'en';
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var CATS = ['growth', 'faith', 'prayer', 'kingdom', 'angels', 'living', 'bible'];
  var TEACH = [['tc1', 'growth'], ['tc2', 'faith'], ['tc3', 'prayer'], ['tc4', 'kingdom'], ['tc5', 'angels'], ['tc6', 'living'], ['tc7', 'bible']];
  var LOGO = 'assets/logo/proposed-ministry-emblem.svg';
  var state = { q: '', cat: 'all', vcat: 'all' };

  function save(k, v, session) { try { (session ? sessionStorage : localStorage).setItem(k, v); } catch (e) {} }
  function read(k, session) { try { return (session ? sessionStorage : localStorage).getItem(k); } catch (e) { return null; } }
  function t(k) { var d = DICT[lang] || {}; return d[k] != null ? d[k] : (DICT.en[k] != null ? DICT.en[k] : k); }
  function el(tag, cls, text) { var e = doc.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function $(s, c) { return (c || doc).querySelector(s); }
  function $$(s, c) { return Array.prototype.slice.call((c || doc).querySelectorAll(s)); }

  /* ---------- language ---------- */
  function pickLang() {
    var m = /[?&]lang=(en|sw)/.exec(location.search);
    if (m) return m[1];
    var s = read('aog_lang');
    if (s === 'en' || s === 'sw') return s;
    return (navigator.language || '').toLowerCase().indexOf('sw') === 0 ? 'sw' : 'en';
  }
  function applyLang(l) {
    lang = l === 'sw' ? 'sw' : 'en';
    save('aog_lang', lang);
    root.lang = lang;
    $$('[data-i18n]').forEach(function (n) { n.textContent = t(n.getAttribute('data-i18n')); });
    $$('[data-i18n-ph]').forEach(function (n) { n.setAttribute('placeholder', t(n.getAttribute('data-i18n-ph'))); });
    $$('[data-i18n-aria]').forEach(function (n) { n.setAttribute('aria-label', t(n.getAttribute('data-i18n-aria'))); });
    $$('.lang button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang)); });
    doc.title = t('title.' + page) + ' | Angels of God Ministries International';
    renderAll();
  }

  /* ---------- dynamic renderers ---------- */
  function videos(cat) {
    return (CFG.videos || []).filter(function (v) { return v && v.id && (!cat || cat === 'all' || v.category === cat); });
  }
  function vtitle(v) { return (v.title && (v.title[lang] || v.title.en)) || ''; }
  function thumbCard(v) {
    var c = el('article', 'card'), th = el('button', 'thumb has-yt');
    th.type = 'button'; th.setAttribute('aria-label', t('v.play') + ': ' + vtitle(v));
    th.style.backgroundImage = 'url(https://i.ytimg.com/vi/' + encodeURIComponent(v.id) + '/hqdefault.jpg)';
    th.appendChild(el('span', 'play'));
    th.addEventListener('click', function () { play(th, v); });
    var b = el('div', 'card-b');
    b.appendChild(el('h3', '', vtitle(v)));
    if (v.category) b.appendChild(el('span', 'badge', t('cat.' + v.category)));
    c.appendChild(th); c.appendChild(b); return c;
  }
  function play(host, v) {
    var f = doc.createElement('iframe');
    f.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(v.id) + '?autoplay=1&rel=0';
    f.title = vtitle(v); f.allow = 'accelerometer; autoplay; encrypted-media; picture-in-picture; fullscreen'; f.allowFullscreen = true;
    f.style.cssText = 'width:100%;height:100%;border:0;position:absolute;inset:0';
    host.appendChild(f);
  }
  function renderVideoGrid(host, limit, cat) {
    host.textContent = '';
    var list = videos(cat);
    if (limit) list = list.slice(0, limit);
    if (!list.length) { host.appendChild(el('div', 'empty', t((CFG.videos || []).length ? 'v.none' : 'v.empty'))); host.classList.remove('cards'); return; }
    host.classList.add('cards');
    list.forEach(function (v) { host.appendChild(thumbCard(v)); });
  }
  function teachCard(tc, withBtn) {
    var c = el('article', 'card'), th = el('div', 'thumb');
    var wm = el('img', 'wm'); wm.src = LOGO; wm.alt = ''; th.appendChild(wm);
    var b = el('div', 'card-b');
    b.appendChild(el('span', 'badge', t('badge.sample')));
    b.appendChild(el('h3', '', t(tc[0] + '.t')));
    b.appendChild(el('p', '', t(tc[0] + '.d')));
    b.appendChild(el('span', 'muted', t('cat.' + tc[1])));
    var a = el('a', 'btn', t('btn.watch1')); a.href = 'watch.html'; b.appendChild(a);
    c.appendChild(th); c.appendChild(b); return c;
  }
  function renderTeach(host, limit) {
    host.textContent = '';
    var q = state.q.trim().toLowerCase();
    var list = TEACH.filter(function (tc) {
      var hay = (t(tc[0] + '.t') + ' ' + t(tc[0] + '.d') + ' ' + t('cat.' + tc[1])).toLowerCase();
      return (state.cat === 'all' || tc[1] === state.cat) && (!q || hay.indexOf(q) > -1);
    });
    if (limit) list = list.slice(0, limit);
    if (!list.length) { host.appendChild(el('div', 'empty', t('t.none'))); return; }
    list.forEach(function (tc) { host.appendChild(teachCard(tc)); });
  }
  function renderFeaturedVideo(host) {
    host.textContent = '';
    var v = videos().filter(function (x) { return x.featured; })[0] || videos()[0];
    if (!v) { host.className = 'empty'; host.appendChild(doc.createTextNode(t('v.empty'))); return; }
    host.className = 'player'; host.style.position = 'relative';
    var th = el('button', 'thumb has-yt'); th.type = 'button'; th.style.cssText = 'position:absolute;inset:0;height:100%;aspect-ratio:auto';
    th.style.backgroundImage = 'url(https://i.ytimg.com/vi/' + encodeURIComponent(v.id) + '/maxresdefault.jpg)';
    th.setAttribute('aria-label', t('v.play') + ': ' + vtitle(v)); th.appendChild(el('span', 'play'));
    th.addEventListener('click', function () { play(th, v); });
    host.appendChild(th);
  }
  function setLink(a, url) { if (url) { a.href = url; a.hidden = false; } else { a.hidden = true; } }
  function renderContact() {
    $$('[data-contact]').forEach(function (n) {
      var k = n.getAttribute('data-contact'), v = CFG[k]; n.textContent = '';
      if (!v) { n.className = 'muted-ph'; n.textContent = t('ph.value'); return; }
      n.className = '';
      if (k === 'whatsapp') { var a = el('a', '', '+' + v.replace(/\D/g, '')); a.href = 'https://wa.me/' + v.replace(/\D/g, ''); n.appendChild(a); }
      else if (k === 'email') { var m = el('a', '', v); m.href = 'mailto:' + v; n.appendChild(m); }
      else n.textContent = v;
    });
    var s = $('[data-social]');
    if (s) {
      s.textContent = '';
      [['YouTube', 'youtubeChannel'], ['Facebook', 'facebook'], ['Instagram', 'instagram'], ['TikTok', 'tiktok']].forEach(function (p) {
        var li = el('li');
        if (CFG[p[1]]) { var a = el('a', '', p[0]); a.href = CFG[p[1]]; a.target = '_blank'; a.rel = 'noopener'; li.appendChild(a); }
        else li.appendChild(el('span', '', p[0] + ' — ' + t('ph.value')));
        s.appendChild(li);
      });
    }
    $$('[data-yt]').forEach(function (a) { setLink(a, CFG.youtubeChannel); if (CFG.youtubeChannel) { a.target = '_blank'; a.rel = 'noopener'; } });
  }
  function renderAll() {
    $$('[data-render]').forEach(function (h) {
      var k = h.getAttribute('data-render');
      if (k === 'featured') renderTeach(h, 3);
      else if (k === 'teachings') renderTeach(h);
      else if (k === 'latest') renderVideoGrid(h, 3);
      else if (k === 'videos') renderVideoGrid(h, 0, state.vcat);
      else if (k === 'video-main') renderFeaturedVideo(h);
    });
    renderContact();
  }

  /* ---------- filters ---------- */
  function initFilters() {
    var s = $('#search');
    if (s) s.addEventListener('input', function () { state.q = s.value; renderAll(); });
    $$('.chips').forEach(function (g) {
      var key = g.getAttribute('data-filter');
      $$('.chip', g).forEach(function (b) {
        b.addEventListener('click', function () {
          state[key] = b.getAttribute('data-cat');
          $$('.chip', g).forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
          renderAll();
        });
      });
    });
  }

  /* ---------- forms (static: WhatsApp / mailto only when configured) ---------- */
  function initForms() {
    $$('form[data-form]').forEach(function (f) {
      var st = $('.status', f), type = f.getAttribute('data-form');
      function say(k, cls) { st.textContent = t(k); st.className = 'status ' + (cls || ''); st.setAttribute('data-k', k); }
      f.addEventListener('submit', function (e) {
        e.preventDefault();
        var d = {}; $$('input,textarea', f).forEach(function (i) { d[i.name] = i.value.trim(); });
        if (type === 'contact' && !d.name) return say('fm.name', 'err');
        if (d.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) return say('fm.email', 'err');
        if (!d.message) return say('fm.req', 'err');
        var head = type === 'prayer' ? 'Prayer request' : 'Website message';
        var text = head + '\n' + (d.name ? 'Name: ' + d.name + '\n' : '') + (d.email ? 'Email: ' + d.email + '\n' : '') + (d.contact ? 'Contact: ' + d.contact + '\n' : '') + '\n' + d.message;
        var wa = (CFG.whatsapp || '').replace(/\D/g, '');
        if (wa) { say('fm.wa', 'ok'); window.open('https://wa.me/' + wa + '?text=' + encodeURIComponent(text), '_blank', 'noopener'); }
        else if (CFG.email) { say('fm.mail', 'ok'); location.href = 'mailto:' + CFG.email + '?subject=' + encodeURIComponent(head) + '&body=' + encodeURIComponent(text); }
        else say('fm.nocfg', 'err');
      });
    });
  }

  /* ---------- optional real images (no broken images ever) ---------- */
  function initImages() {
    $$('[data-img]').forEach(function (n) {
      var src = n.getAttribute('data-img'), i = new Image();
      i.onload = function () { n.style.setProperty('--img', 'url("' + src + '")'); n.classList.add('has-img'); };
      i.src = src;
    });
  }

  /* ---------- navigation ---------- */
  function initNav() {
    var btn = $('.menu-btn'), nav = $('#nav');
    $$('.nav a').forEach(function (a) { if (a.getAttribute('data-page') === page) a.setAttribute('aria-current', 'page'); });
    if (btn) {
      var close = function () { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); };
      btn.addEventListener('click', function () { var o = nav.classList.toggle('open'); btn.setAttribute('aria-expanded', String(o)); });
      doc.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
      $$('.nav a').forEach(function (a) { a.addEventListener('click', close); });
    }
    $$('.lang button').forEach(function (b) { b.addEventListener('click', function () { applyLang(b.getAttribute('data-lang')); }); });
    if (!reduce) {
      doc.addEventListener('click', function (e) {
        var a = e.target.closest && e.target.closest('a[href]');
        if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || a.target) return;
        var h = a.getAttribute('href');
        if (!/^[a-z-]+\.html(#.*)?$/.test(h)) return;
        e.preventDefault(); doc.body.classList.add('leaving');
        setTimeout(function () { location.href = h; }, 230);
      });
      window.addEventListener('pageshow', function (e) { if (e.persisted) doc.body.classList.remove('leaving'); });
    }
  }

  /* ---------- reveals & parallax ---------- */
  function initReveal() {
    var items = $$('.rv');
    if (!('IntersectionObserver' in window) || reduce) { items.forEach(function (n) { n.classList.add('in'); }); return; }
    var io = new IntersectionObserver(function (es) { es.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } }); }, { threshold: .12 });
    items.forEach(function (n) { io.observe(n); });
  }
  function initParallax() {
    var n = $$('[data-par]'); if (!n.length || reduce) return;
    var tick = false;
    window.addEventListener('scroll', function () {
      if (tick) return; tick = true;
      requestAnimationFrame(function () { var y = window.scrollY; if (y < 1400) n.forEach(function (e) { e.style.transform = 'translate3d(0,' + (y * parseFloat(e.getAttribute('data-par'))).toFixed(1) + 'px,0)'; }); tick = false; });
    }, { passive: true });
  }

  /* ---------- cosmic stars & golden particles ---------- */
  function initStars() {
    var c = $('#stars'); if (!c || !c.getContext) return;
    var x = c.getContext('2d'), w, h, dpr = Math.min(window.devicePixelRatio || 1, 2), S = [], P = [], run = true;
    function size() {
      w = c.width = innerWidth * dpr; h = c.height = innerHeight * dpr;
      var n = Math.min(110, Math.round(innerWidth * innerHeight / (innerWidth < 700 ? 16000 : 12000)));
      S = []; for (var i = 0; i < n; i++) S.push({ x: Math.random() * w, y: Math.random() * h, r: (Math.random() * .9 + .3) * dpr, p: Math.random() * 6.28, s: Math.random() * .8 + .3 });
      P = []; for (var j = 0; j < (innerWidth < 700 ? 8 : 16); j++) P.push({ x: Math.random() * w, y: Math.random() * h, r: (Math.random() * 1.4 + .8) * dpr, v: (Math.random() * .12 + .04) * dpr });
    }
    function draw(t) {
      x.clearRect(0, 0, w, h);
      S.forEach(function (s) { var a = .25 + .4 * (.5 + .5 * Math.sin(t / 1600 * s.s + s.p)); x.fillStyle = 'rgba(246,244,240,' + a.toFixed(2) + ')'; x.beginPath(); x.arc(s.x, s.y, s.r, 0, 6.28); x.fill(); });
      P.forEach(function (p) { if (!reduce) { p.y -= p.v; if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; } } x.fillStyle = 'rgba(213,179,106,.35)'; x.shadowColor = 'rgba(213,179,106,.8)'; x.shadowBlur = 8 * dpr; x.beginPath(); x.arc(p.x, p.y, p.r, 0, 6.28); x.fill(); x.shadowBlur = 0; });
    }
    function loop(t) { if (run) draw(t); requestAnimationFrame(loop); }
    size(); draw(0);
    window.addEventListener('resize', function () { size(); if (reduce) draw(0); });
    if (!reduce) { doc.addEventListener('visibilitychange', function () { run = !doc.hidden; }); requestAnimationFrame(loop); }
  }

  /* ---------- welcome intro (index only, once per session) ---------- */
  function initIntro() {
    var i = $('#intro');
    if (!i || !root.classList.contains('show-intro')) return;
    save('aog_intro', '1', true);
    var done = function () { root.classList.remove('show-intro'); };
    setTimeout(done, 3800);
    $('.skip-intro', i).addEventListener('click', done);
  }

  /* ---------- start ---------- */
  initNav(); initFilters(); initForms(); initImages(); initReveal(); initParallax(); initStars(); initIntro();
  applyLang(pickLang());
})();


gsap.registerPlugin(ScrollTrigger);
const REDUCE = matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!REDUCE && window.Lenis) { const lenis = new Lenis({lerp: .09}); lenis.on('scroll', ScrollTrigger.update); gsap.ticker.add(t => lenis.raf(t * 1000)); gsap.ticker.lagSmoothing(0); }
const nav = document.querySelector('.nav');
ScrollTrigger.create({start: 80, end: 'max', onToggle: st => nav.classList.toggle('solid', st.isActive)});
const mb = document.querySelector('.nav .menu'), mn = document.getElementById('mnu');
mb.addEventListener('click', () => { const o = mn.hidden; mn.hidden = !o; mb.setAttribute('aria-expanded', o); mb.textContent = o ? 'Close' : 'Menu'; document.documentElement.style.overflow = o ? 'hidden' : ''; });
addEventListener('keydown', e => { if (e.key === 'Escape' && !mn.hidden) mb.click(); });
const mm = gsap.matchMedia();
mm.add({ok: '(prefers-reduced-motion: no-preference)', desk: '(min-width: 821px)'}, ctx => { const {ok, desk} = ctx.conditions; if (!ok) return;
  // hero intro
  if (document.querySelector('.hero')) { gsap.from('.hero .t > *', {y: 30, opacity: 0, stagger: .1, duration: 1, ease: 'expo.out'});
    gsap.from('.ptable .el', {opacity: 0, y: 18, stagger: {each: .04, from: 'random'}, duration: .8, ease: 'power3.out', delay: .2}); }
  // element zoom: copper tile grows into a full-screen scene
  const z = document.querySelector('.zoom'), cu = document.querySelector('.el.cu');
  if (z && cu) { const ph = z.querySelector('.ph');
    const ins = () => { const zr = z.getBoundingClientRect(), r = cu.getBoundingClientRect(); const dy = r.top - (document.querySelector('.hero').getBoundingClientRect().top) - document.querySelector('.hero').offsetHeight;
      return {t: Math.max(0, r.top - zr.top), l: r.left - zr.left, r: zr.right - r.right, b: Math.max(0, zr.bottom - r.bottom)}; };
    const tl = gsap.timeline({scrollTrigger: {trigger: z, start: 'top top', end: '+=160%', scrub: true, pin: true, invalidateOnRefresh: true}});
    const tileInset = () => { const s = Math.min(innerHeight * .34, 300), w = innerWidth, h = innerHeight; return `inset(${(h - s) / 2}px ${(w - s) / 2}px ${(h - s) / 2}px ${(w - s) / 2}px)`; };
    tl.fromTo(ph, {clipPath: tileInset}, {clipPath: 'inset(0px 0px 0px 0px)', ease: 'power2.inOut', duration: 1})
      .to(z.querySelector('.ztile'), {scale: 3.2, opacity: 0, ease: 'power2.in', duration: .45}, 0)
      .fromTo(ph.querySelector('img'), {scale: 1.6}, {scale: 1, ease: 'power2.out', duration: 1}, 0)
      .fromTo(z.querySelectorAll('.copy > *'), {y: 40, opacity: 0}, {y: 0, opacity: 1, stagger: .06, duration: .25}, .6).to({}, {duration: .25}); }
  // counters
  document.querySelectorAll('[data-count]').forEach(b => { const end = parseFloat(b.dataset.count), dec = (b.dataset.count.split('.')[1] || '').length, pre = b.dataset.pre || '', suf = b.dataset.suf || '', o = {v: 0};
    gsap.to(o, {v: end, duration: 1.6, ease: 'power3.out', scrollTrigger: {trigger: b, start: 'top 88%', once: true}, onUpdate: () => b.textContent = pre + o.v.toLocaleString('en-GB', {minimumFractionDigits: dec, maximumFractionDigits: dec}) + suf}); });
  // value chain: route draws, stages change
  const ch = document.querySelector('.chain');
  if (ch) { const imgs = ch.querySelectorAll('.stage img'), arts = ch.querySelectorAll('.txt article'), stops = ch.querySelectorAll('.stop'), prog = ch.querySelector('.prog'), n = imgs.length;
    const len = prog.getTotalLength(); gsap.set(prog, {strokeDasharray: len, strokeDashoffset: len});
    let cur = 0; const set = i => { if (i === cur) return; const prev = cur; cur = i;
      gsap.to(imgs[i], {opacity: 1, duration: .6, overwrite: true}); gsap.fromTo(imgs[i], {scale: 1.08}, {scale: 1, duration: 1.4, ease: 'power2.out'});
      imgs.forEach((m, k) => { if (k !== i) gsap.to(m, {opacity: 0, duration: .6, overwrite: true}); });
      arts.forEach((a, k) => gsap.to(a, {opacity: k === i ? 1 : 0, y: k === i ? 0 : (k < i ? -16 : 16), duration: .45, overwrite: true}));
      stops.forEach((s, k) => s.classList.toggle('on', k <= i)); };
    stops[0].classList.add('on');
    ScrollTrigger.create({trigger: ch, start: 'top top', end: '+=' + (n * 70) + '%', pin: true, scrub: true,
      onUpdate: st => { gsap.set(prog, {strokeDashoffset: len * (1 - st.progress)}); set(Math.min(n - 1, Math.floor(st.progress * n * .999 + .001 * 0 + (st.progress >= 1 ? 0 : 0)))); }}); }
  // words
  document.querySelectorAll('.words p').forEach(w => { if (!w.querySelector('span')) w.innerHTML = w.textContent.trim().split(/\s+/).map(t => `<span>${t}</span>`).join(' ');
    gsap.to(w.querySelectorAll('span'), {opacity: 1, stagger: .06, ease: 'none', scrollTrigger: {trigger: w, start: 'top 78%', end: 'bottom 55%', scrub: true}}); });
  // page hero parallax
  document.querySelectorAll('.phero img').forEach(im => gsap.fromTo(im, {scale: 1.12}, {scale: 1, ease: 'none', scrollTrigger: {trigger: im.parentElement, start: 'top top', end: 'bottom top', scrub: true}}));
  document.querySelectorAll('.band img').forEach(im => gsap.fromTo(im, {yPercent: -6}, {yPercent: 6, ease: 'none', scrollTrigger: {trigger: im.parentElement, start: 'top bottom', end: 'bottom top', scrub: true}}));
  // values stack: earlier cards recede
  const vc = gsap.utils.toArray('.vcard'); vc.forEach((c, i) => { if (i === vc.length - 1) return; gsap.to(c, {scale: .94, opacity: .45, ease: 'none', scrollTrigger: {trigger: vc[i + 1], start: 'top bottom', end: 'top 120px', scrub: true}}); });
  // trajectory chart draws
  const tj = document.querySelector('.traj');
  if (tj) { const line = tj.querySelector('.tline'), L = line.getTotalLength(), pts = tj.querySelectorAll('.pt'), area = tj.querySelector('.tarea'); gsap.set(line, {strokeDasharray: L, strokeDashoffset: L}); gsap.set(pts, {opacity: 0, y: 10}); gsap.set(area, {opacity: 0});
    const tl = gsap.timeline({scrollTrigger: {trigger: tj, start: 'top top', end: '+=180%', scrub: true, pin: true}});
    tl.to(line, {strokeDashoffset: 0, ease: 'none', duration: 1}).to(area, {opacity: .5, duration: .3}, .2);
    pts.forEach((p, i) => tl.to(p, {opacity: 1, y: 0, duration: .12}, +p.dataset.at)); }
  // generic reveal
  gsap.utils.toArray('.rv').forEach(el => gsap.from(el, {y: 40, opacity: 0, duration: 1, ease: 'expo.out', scrollTrigger: {trigger: el, start: 'top 88%'}}));
});
// commodity explorer (works with or without motion)
document.querySelectorAll('.cx').forEach(cx => { const imgs = cx.querySelectorAll('.stage img'), items = [...cx.querySelectorAll('.item')], t = cx.querySelector('.tile');
  const show = i => { const d = items[i].dataset; items.forEach((x, k) => x.classList.toggle('on', k === i)); imgs.forEach((m, k) => m.classList.toggle('on', k === i));
    t.querySelector('.n').textContent = d.n; t.querySelector('.s').textContent = d.s; t.querySelector('.nm').textContent = d.nm; };
  items.forEach((it, i) => ScrollTrigger.create({trigger: it, start: 'top 55%', end: 'bottom 55%', onToggle: st => st.isActive && show(i)})); show(0); });
if (REDUCE) { document.querySelectorAll('.words p span').forEach(s => s.style.opacity = 1); }
addEventListener('load', () => { ScrollTrigger.sort(); ScrollTrigger.refresh(); });

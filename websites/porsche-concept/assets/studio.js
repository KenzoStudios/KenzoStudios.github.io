
gsap.registerPlugin(ScrollTrigger);
const REDUCE = matchMedia('(prefers-reduced-motion: reduce)').matches;
document.documentElement.classList.toggle('rm', REDUCE);
if (!REDUCE && window.Lenis) {
  const lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 0.9 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(t => lenis.raf(t * 1000)); gsap.ticker.lagSmoothing(0);
  document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => { const t = document.querySelector(a.getAttribute('href')); if (t) { e.preventDefault(); lenis.scrollTo(t, { offset: 0 }); } }));
}
addEventListener('load', () => { ScrollTrigger.sort(); ScrollTrigger.refresh(); });

// menu
const mb = document.querySelector('.snav .menu'), mn = document.getElementById('mnu');
if (mb) mb.addEventListener('click', () => { const o = mn.hidden; mn.hidden = !o; mb.setAttribute('aria-expanded', o); mb.textContent = o ? 'Close' : 'Menu'; document.documentElement.style.overflow = o ? 'hidden' : ''; });
addEventListener('keydown', e => { if (e.key === 'Escape' && mn && !mn.hidden) mb.click(); });
const mm = gsap.matchMedia();
mm.add({ok: '(prefers-reduced-motion: no-preference)', desk: '(min-width: 821px)'}, ctx => { const {ok, desk} = ctx.conditions; if (!ok) return;
  // in DOM order
  document.querySelectorAll('.phero').forEach(h => {
    gsap.fromTo(h.querySelector('.img'), {scale: 1.9}, {scale: 1, ease: 'none', scrollTrigger: {trigger: h, start: 'top top', end: '+=110%', scrub: true, pin: true}});
    gsap.from(h.querySelector('h1'), {yPercent: 60, opacity: 0, duration: 1.3, ease: 'expo.out', delay: .15});
  });
  document.querySelectorAll('.words p').forEach(w => { if (!w.querySelector('span')) w.innerHTML = w.textContent.trim().split(/\s+/).map(t => `<span>${t}</span>`).join(' ');
    gsap.to(w.querySelectorAll('span'), {opacity: 1, stagger: .08, ease: 'none', scrollTrigger: {trigger: w, start: 'top 75%', end: 'bottom 55%', scrub: true}}); });
  document.querySelectorAll('.stat b[data-n]').forEach(b => { const n = parseFloat(b.dataset.n), dec = (b.dataset.n.split('.')[1] || '').length, o = {v: 0};
    gsap.to(o, {v: n, duration: 1.4, ease: 'power3.out', scrollTrigger: {trigger: b, start: 'top 90%', once: true}, onUpdate: () => b.textContent = o.v.toFixed(dec) + (b.dataset.u || '')}); });
  if (desk) document.querySelectorAll('.pan').forEach(p => { const tr = p.querySelector('.track'), d = () => Math.max(0, tr.scrollWidth - innerWidth);
    gsap.to(tr, {x: () => -d(), ease: 'none', scrollTrigger: {trigger: p, start: 'top top', end: () => '+=' + d(), scrub: 1, pin: true, invalidateOnRefresh: true}});
    p.querySelectorAll('.panel img').forEach(im => gsap.fromTo(im, {xPercent: -6}, {xPercent: 6, ease: 'none', scrollTrigger: {trigger: p, start: 'top top', end: () => '+=' + d(), scrub: true}})); });
  document.querySelectorAll('.lrow').forEach(r => {
    gsap.fromTo(r.querySelector('.car'), {xPercent: 55, opacity: 0}, {xPercent: 0, opacity: 1, ease: 'none', scrollTrigger: {trigger: r, start: 'top 90%', end: 'top 30%', scrub: true}});
    gsap.fromTo(r.querySelector('.big'), {xPercent: 10}, {xPercent: -25, ease: 'none', scrollTrigger: {trigger: r, start: 'top bottom', end: 'bottom top', scrub: true}}); });
  document.querySelectorAll('.reveal figure').forEach(f => {
    gsap.fromTo(f, {clipPath: 'inset(18% 12% 18% 12%)'}, {clipPath: 'inset(0% 0% 0% 0%)', ease: 'none', scrollTrigger: {trigger: f, start: 'top 95%', end: 'top 35%', scrub: true}});
    gsap.to(f.querySelector('img'), {scale: 1, ease: 'none', scrollTrigger: {trigger: f, start: 'top bottom', end: 'bottom top', scrub: true}}); });
  document.querySelectorAll('.cta').forEach(c => gsap.fromTo(c.querySelector('img'), {scale: 1.25}, {scale: 1, ease: 'none', scrollTrigger: {trigger: c, start: 'top bottom', end: 'bottom bottom', scrub: true}}));
});
// variant explorer: the list scrolls, the stage follows the active variant
document.querySelectorAll('.ex').forEach(ex => {
  const img = ex.querySelector('.car img'), ghost = ex.querySelector('.ghost'), items = [...ex.querySelectorAll('.v')];
  const f = k => ex.querySelector('[data-f="' + k + '"]'), link = ex.querySelector('.meta a');
  let cur = -1;
  const show = (i, instant) => { if (i === cur) return; const v = items[i], d = v.dataset, dir = i > cur ? 1 : -1; cur = i;
    items.forEach(x => x.classList.toggle('on', x === v));
    const swap = () => { img.src = d.cut; img.alt = d.name + ', side view'; ghost.textContent = d.short; };
    if (instant || REDUCE) swap(); else gsap.timeline().to(img, {xPercent: -30 * dir, opacity: 0, duration: .28, ease: 'power2.in'}).add(swap).fromTo(img, {xPercent: 30 * dir, opacity: 0}, {xPercent: 0, opacity: 1, duration: .55, ease: 'expo.out'});
    f('acc').textContent = d.acc || 'n/a'; f('pwr').textContent = d.ps || 'n/a'; f('kw').textContent = d.kw ? 'Power, ' + d.kw : 'Power'; f('top').textContent = d.top || 'n/a';
    ex.querySelector('.meta span').textContent = d.fuel + ', ' + d.drive.toLowerCase() + ' drive';
  };
  items.forEach((v, i) => { ScrollTrigger.create({trigger: v, start: 'top 55%', end: 'bottom 55%', onToggle: st => st.isActive && show(i)});
    v.addEventListener('click', e => { e.preventDefault(); show(i); }); v.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); show(i); } }); });
  show(0, true);
  ScrollTrigger.create({trigger: ex, start: 'top bottom', once: true, onEnter: () => items.forEach(v => { const i = new Image(); i.src = v.dataset.cut; })});
  ex.querySelectorAll('.filters button').forEach(b => b.addEventListener('click', () => {
    ex.querySelectorAll('.filters button').forEach(x => x.setAttribute('aria-pressed', x === b)); const q = b.dataset.q;
    items.forEach(v => v.hidden = !(q === 'all' || v.dataset.tags.includes(q)));
    const first = items.findIndex(v => !v.hidden); cur = -1; show(first); ScrollTrigger.refresh(); }));
});
// models page filter
document.querySelectorAll('.mfilters button').forEach(b => b.addEventListener('click', () => {
  document.querySelectorAll('.mfilters button').forEach(x => x.setAttribute('aria-pressed', x === b)); const q = b.dataset.q;
  document.querySelectorAll('.lrow').forEach(r => r.hidden = !(q === 'all' || r.dataset.tags.includes(q))); ScrollTrigger.refresh(); }));
ScrollTrigger.sort(); ScrollTrigger.refresh();

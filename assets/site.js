/* Renders the homepage and the section pages from assets/content.js.
   A page says which it is with <body data-section="games"> (section page) or no data-section (homepage).
   No need to edit this file to add content. */
(function () {
  const ROOT = new URL("..", document.currentScript.src).href;          // site root, with trailing slash
  const U = p => /^(https?:|mailto:|#)/.test(p) ? p : ROOT + String(p).replace(/^\//, "");
  const PAGE = document.body.dataset.section || "";                      // "" on the homepage
  const HOME_LIMIT = 5;

  const $ = s => document.querySelector(s);
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const ARROW = '<span class="go" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M7 17 17 7M9 7h8v8"/></svg></span>';
  const bySec = id => PROJECTS.filter(p => p.section === id);
  const count = n => String(n).padStart(2, "0");
  const sectionURL = id => U(id + "/");

  /* Links: hero, footer, year */
  const links = [
    SITE.github && { href: SITE.github, label: "GitHub", ext: true },
    SITE.linkedin && { href: SITE.linkedin, label: "LinkedIn", ext: true },
    SITE.email && { href: "mailto:" + SITE.email, label: SITE.email }
  ].filter(Boolean);
  const linkHTML = links.map(l => `<a href="${esc(l.href)}"${l.ext ? ' target="_blank" rel="noopener"' : ""}>${esc(l.label)}</a>`).join("");
  if ($("#hero-links")) $("#hero-links").innerHTML = linkHTML;
  if ($("#contact-links")) $("#contact-links").innerHTML = linkHTML;
  if ($("#year")) $("#year").textContent = new Date().getFullYear();

  /* Every "Contact" (the nav button and the big footer heading) opens LinkedIn when one is set */
  if (SITE.linkedin) {
    const cta = $(".cta");
    if (cta) { cta.href = SITE.linkedin; cta.target = "_blank"; cta.rel = "noopener"; }
    const h = $("#contact .contact h2");
    if (h) h.innerHTML = `<a href="${esc(SITE.linkedin)}" target="_blank" rel="noopener">${h.textContent}</a>`;
  }

  /* Nav: the homepage has section pills; section pages have a single Back button in their own markup */
  if (!PAGE) $("#pills").innerHTML = SECTIONS.map(s => `<li><a href="#${s.id}">${s.name}</a></li>`).join("");

  /* Tiles */
  /* A project can set coverFit: "contain" (and optionally coverBg: "#rrggbb") to show its whole cover
     instead of cropping it to fill the tile. Useful for slides and posters with text near the edges. */
  const media = p => {
    if (!p.cover) return `<span class="soon"></span>`;
    const contain = p.coverFit === "contain";
    const bg = contain && /^#[0-9a-f]{3,8}$/i.test(p.coverBg || "") ? ` style="background:${p.coverBg}"` : "";
    return `<span class="fr${contain ? " contain" : ""}"${bg}><img src="${esc(U(p.cover))}" alt="" loading="lazy" width="960" height="540"></span>`;
  };
  const projectTile = (p, size, withSummary) =>
    `<button type="button" class="tile ${size}" data-open="${esc(p.id)}" id="${esc(p.id)}"><span class="top"><span class="n">${esc(p.title)}</span><span class="c">${esc(p.tags?.[0] || "")}</span></span>${withSummary ? `<p>${esc(p.summary)}</p>` : ""}${media(p)}${ARROW}</button>`;
  const emptyTile = (s, size, label) =>
    `<div class="tile empty ${size}"><span class="top"><span class="n">${label}</span>${label === "In progress" ? '<span class="c">00</span>' : ""}</span><span class="soon">${esc(s.soon)}</span></div>`;
  const moreBar = (s, n) =>
    `<a class="morebar" href="${sectionURL(s.id)}"><span class="n">View more</span><span class="c">All ${n} ${s.name.toLowerCase()}</span>${ARROW}</a>`;

  /* Homepage section: the same grid as the section page, for the first five projects: one large tile and
     four small ones. When there are more than five, a slim View more bar sits under the grid and opens that
     section's own page. */
  function homeGrid(s) { return pageGrid(s, HOME_LIMIT); }
  const homeMore = s => { const n = bySec(s.id).length; return n > HOME_LIMIT ? moreBar(s, n) : ""; };

  /* Section page: every project, in groups of five. One big tile alternates left and right, and four
     small tiles fill a 2x2 beside it. A last group of four gets a "Next up" tile in the fifth slot, and a lone project gets one beside it,
     so the grid always closes without gaps. Groups of two use two large tiles. Groups of three put two side-by-side "row" tiles (text left, image
     right) beside the large one. */
  function pageGrid(s, limit) {
    const items = bySec(s.id).slice(0, limit || Infinity);
    if (!items.length) return emptyTile(s, "w4", "In progress");
    const html = items.map((p, i) => {
      const g = Math.floor(i / 5), k = i % 5, left = items.length - g * 5;
      if (left === 1) return projectTile(p, `w2 h2 xl${g % 2 ? " right" : ""}`, true);
      if (left === 2) return projectTile(p, k === 0 ? "w2 h2 xl" : "w2 h2", k === 0);
      if (left === 3) return projectTile(p, k === 0 ? `w2 h2 xl${g % 2 ? " right" : ""}` : "w2 row", k === 0);
      return projectTile(p, k === 0 ? `w2 h2 xl${g % 2 ? " right" : ""}` : "sm", k === 0);
    }).join("");
    const rest = items.length % 5;
    return rest === 4 ? html + emptyTile(s, "sm", "Next up") : rest === 1 ? html + emptyTile(s, "w2 tall", "Next up") : html;
  }

  if (!PAGE) {
    /* Home bento: Agents big, Games tall, Skills as a cobalt list, Websites wide */
    const HOME_SIZE = { agents: "w2 h2 xl", applications: "", games: "h2", presentations: "", skills: "w2 ink", websites: "w2" };
    $("#home-bento").innerHTML = SECTIONS.map((s, i) => {
      const items = bySec(s.id), size = HOME_SIZE[s.id] || "";
      const delay = `style="animation-delay:${(i * 0.06).toFixed(2)}s"`;
      const head = `<span class="top"><span class="n">${s.name}</span><span class="c">${count(items.length)}</span></span>`;
      if (size.includes("ink")) {
        const list = items.length
          ? items.slice(0, 4).map(p => `<li>${esc(p.title)}<span>${esc(p.tags?.[0] || "")}</span></li>`).join("")
          : `<li>In progress<span>Soon</span></li>`;
        return `<a class="tile ${size}" href="#${s.id}" ${delay}>${head}<ul>${list}</ul>${ARROW}</a>`;
      }
      const cover = items.find(p => p.cover);
      const m = cover ? media(cover) : `<span class="soon">In progress</span>`;
      return `<a class="tile ${size}" href="#${s.id}" ${delay}>${head}${m}${ARROW}</a>`;
    }).join("");

    $("#sections").innerHTML = SECTIONS.map(s => {
      const alias = s.alias ? `<span id="${s.alias}" aria-hidden="true"></span>` : "";
      return `<section class="sec" id="${s.id}" aria-labelledby="h-${s.id}">${alias}<div class="sh"><h2 id="h-${s.id}">${s.name}</h2><p>${esc(s.blurb)}</p></div><div class="bento">${homeGrid(s)}</div>${homeMore(s)}</section>`;
    }).join("");
  } else {
    const s = SECTIONS.find(x => x.id === PAGE);
    const n = bySec(s.id).length;
    document.title = `${s.name} | Kenzo Studios`;
    $("#page").innerHTML = `
      <section class="hero page-head" aria-labelledby="page-title">
        <h1 id="page-title"><span><em>${s.name}<b>.</b></em></span></h1>
        <div class="hx"><p>${esc(s.blurb)}</p><div class="links"><span>${count(n)} ${n === 1 ? "project" : "projects"}</span></div></div>
      </section>
      <div class="bento all">${pageGrid(s)}</div>`;
    /* Back (in the nav): return to exactly where the visitor was if they came from this site, otherwise go home */
    $(".back").addEventListener("click", e => {
      let fromHere = false;
      try { fromHere = document.referrer && new URL(document.referrer).origin === location.origin; } catch (_) {}
      if (fromHere && history.length > 1) { e.preventDefault(); history.back(); }
    });
  }

  /* Project panel */
  const panel = $("#panel");
  function openProject(id, push) {
    const p = PROJECTS.find(x => x.id === id);
    if (!p) return;
    const shots = (p.shots || []).map(s => ({ ...s, src: U(s.src) }));
    const first = shots[0] || { src: p.cover ? U(p.cover) : "", alt: p.title, cap: "" };
    panel.innerHTML = `
      <button class="close" type="button" aria-label="Close"><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></svg></button>
      <div class="pd">
        <div class="media">
          ${first.src ? `<img class="main" src="${esc(first.src)}" alt="${esc(first.alt)}" width="960" height="540">` : ""}
          ${shots.length > 1 ? `<div class="thumbs" role="group" aria-label="${esc(p.title)} screenshots">${shots.map((s, i) => `<button type="button" aria-pressed="${i === 0}" data-i="${i}"><img src="${esc(s.src)}" alt="" width="192" height="108" loading="lazy"></button>`).join("")}</div>` : ""}
          <p class="cap" aria-live="polite">${esc(first.cap || "")}</p>
        </div>
        <div class="info">
          ${p.tags ? `<div class="tags">${p.tags.map(t => `<span>${esc(t)}</span>`).join("")}</div>` : ""}
          <h3 id="pd-title">${esc(p.title)}${p.subtitle ? `<small>${esc(p.subtitle)}</small>` : ""}</h3>
          <p>${esc(p.body || p.summary)}</p>
          ${p.facts ? `<dl class="facts">${p.facts.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join("")}</dl>` : ""}
          ${p.actions ? `<div class="acts">${p.actions.map(a => `<a class="btn${a.primary ? " primary" : ""}" href="${esc(U(a.href))}" target="_blank" rel="noopener"><div><b>${esc(a.label)}</b>${a.note ? `<span>${esc(a.note)}</span>` : ""}</div><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg></a>`).join("")}</div>` : ""}
        </div>
        ${p.controls ? `<div class="controls"><h4>Controls</h4><ul>${p.controls.map(([keys, label]) => `<li>${keys.map(k => `<kbd>${esc(k)}</kbd>`).join("")} ${esc(label)}</li>`).join("")}</ul></div>` : ""}
      </div>`;
    const main = panel.querySelector(".main"), cap = panel.querySelector(".cap");
    panel.querySelectorAll(".thumbs button").forEach(b => b.addEventListener("click", () => {
      panel.querySelectorAll(".thumbs button").forEach(x => x.setAttribute("aria-pressed", x === b));
      const s = shots[+b.dataset.i]; main.src = s.src; main.alt = s.alt; cap.textContent = s.cap || "";
    }));
    panel.querySelector(".close").addEventListener("click", () => panel.close());
    if (!panel.open) panel.showModal();
    if (push) history.replaceState(null, "", "#" + id);
  }
  panel.addEventListener("close", () => {
    const p = PROJECTS.find(x => "#" + x.id === location.hash);
    if (p) history.replaceState(null, "", PAGE ? location.pathname : "#" + p.section);
  });
  panel.addEventListener("click", e => { if (e.target === panel) panel.close(); });
  document.addEventListener("click", e => { const t = e.target.closest("[data-open]"); if (t) openProject(t.dataset.open, true); });

  function fromHash() {
    const id = location.hash.slice(1);
    if (PROJECTS.some(p => p.id === id)) { document.getElementById(id)?.scrollIntoView({ block: "center" }); openProject(id, false); }
  }
  addEventListener("hashchange", fromHash);
  fromHash();

  /* A fresh visit to a section link (e.g. /#games) lands on that section once fonts settle.
     Back and forward keep the browser's own scroll position. */
  const navType = performance.getEntriesByType?.("navigation")[0]?.type;
  if (!PAGE && navType !== "back_forward") {
    const toSection = () => {
      const id = location.hash.slice(1);
      if (id && !PROJECTS.some(p => p.id === id)) document.getElementById(id)?.scrollIntoView({ behavior: "instant" });
    };
    toSection();
    document.fonts?.ready.then(toSection);
    addEventListener("load", toSection);
  }

  /* Highlight the nav pill for the section in view (homepage) */
  if (!PAGE && "IntersectionObserver" in window) {
    const pills = [...document.querySelectorAll("#pills a")];
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) pills.forEach(a => a.setAttribute("aria-current", a.getAttribute("href") === "#" + e.target.id));
    }), { rootMargin: "-35% 0px -60% 0px" });
    document.querySelectorAll(".hero, .sec").forEach(s => io.observe(s));
  }
})();

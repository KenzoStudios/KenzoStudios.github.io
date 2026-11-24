/* ============================================================
   CONTENT. Edit this file to update the whole site.
   - Leave a link empty ("") to hide it.
   - Add a project by adding an object to PROJECTS with a matching `section`.
     Newest first is a good habit: the homepage shows the first three of each
     section, and a "View more" tile opens that section's own page.
   - File paths (cover, shots, href) are relative to the site root,
     e.g. "games/echo/play.html". They work from every page.
   - Sections always show in alphabetical order.
   ============================================================ */
const SITE = {
  github: "https://github.com/KenzoStudios",
  linkedin: "",   // e.g. "https://www.linkedin.com/in/your-handle"
  email: ""       // e.g. "hello@yourdomain.com"
};

const SECTIONS = [
  { id: "agents",        name: "Agents",        blurb: "AI agents built with Claude Code, each with a recording of a real run and the source.", soon: "First agents land soon, each with a recording of a real task and a link to the code." },
  { id: "applications",  name: "Applications",  blurb: "Desktop apps for Mac and Windows, with demo videos and downloads.", soon: "Desktop apps are on their way, each with a short demo video and a download.", alias: "apps" },
  { id: "games",         name: "Games",         blurb: "Games that run in the browser. No download, no install.", soon: "More games are in production." },
  { id: "presentations", name: "Presentations", blurb: "Decks and talks you can page through in the browser.", soon: "Decks and talks are on their way." },
  { id: "skills",        name: "Skills",        blurb: "Claude skills written to automate design, writing and research work.", soon: "Skills are being written up with examples of what each one produces." },
  { id: "websites",      name: "Websites",      blurb: "Sites in HTML, CSS and JavaScript. Each one opens as a live page.", soon: "Sample websites are on their way, each one a live page you can click through." }
];

const PROJECTS = [
  {
    id: "iron-frontier", section: "games",
    title: "Iron Frontier", subtitle: "Legion Rising",
    summary: "A pixel-art roguelite run-and-gun with weapon fusions and a boss at the bottom of every zone.",
    body: "Fight down through sector after sector of the Legion's territory, pick up and fuse new guns as you go, and take on a boss at the bottom of each zone. Die and you start a fresh run, keeping the intel you collected to unlock more for next time.",
    tags: ["Game", "JavaScript", "WebGL", "Vite"],
    cover: "games/iron-frontier/shots/title.webp",
    shots: [
      { src: "games/iron-frontier/shots/title.webp",   alt: "Iron Frontier title screen: a soldier by a campfire on a desert ridge at sunset", cap: "Title screen. Every sprite, tile and font glyph is drawn in code." },
      { src: "games/iron-frontier/shots/range.webp",   alt: "Training range with targets and signposts explaining aim, reload and parry", cap: "The opening climb teaches each move on signposts: aim, reload, parry." },
      { src: "games/iron-frontier/shots/outpost.webp", alt: "The outpost hub: a lit bunker with a terminal and a field desk", cap: "The outpost is the hub between runs: terminal, field desk and trophy wall." },
      { src: "games/iron-frontier/shots/armoury.webp", alt: "The armoury: weapon racks and a map table outside the outpost", cap: "The armoury holds every gun you have found and what each one does." },
      { src: "games/iron-frontier/shots/firing.webp",  alt: "The soldier firing on the test range beside the armoury", cap: "Test any gun you own on the range before heading down." }
    ],
    facts: [
      ["Zones", "Ashen Zone, Black Jungle, The Drowned Works, Rust Spires, Iron Citadel"],
      ["Modes", "Full runs, a Daily Operation with a shared seed, and The Spiral (endless)"],
      ["Extras", "Weapon fusions and evolutions, a codex of enemies and lore, a trophy wall, rebindable keys, colour-blind palettes"],
      ["Plays on", "Keyboard and mouse, gamepad or touch screen"]
    ],
    actions: [
      { label: "Play from the start", note: "A fresh save, beginning with the tutorial climb.", href: "games/iron-frontier/play.html", primary: true },
      { label: "Play with everything unlocked", note: "Skips the tutorial and opens every upgrade, achievement and codex entry.", href: "games/iron-frontier/play-unlocked.html" }
    ],
    controls: [[["A","D"],"Move"],[["Space"],"Jump"],[["Mouse"],"Aim and fire"],[["Shift"],"Dash"],[["R"],"Reload"],[["F"],"Parry"],[["G"],"Throw"],[["E"],"Interact"]]
  },
  {
    id: "parasyte", section: "games",
    title: "Parasyte", subtitle: "Survive the outbreak",
    summary: "Top-down survival shooter against swarms of parasites that latch on and consume.",
    body: "An alien outbreak has left parasitic organisms that swarm, latch and consume. You are one of the people still shooting back. Each run starts with a sidearm alone; find the rest of your arsenal in the field, then kill a boss or survive ten waves for crate tokens to spend back at base.",
    tags: ["Game", "TypeScript", "Canvas 2D"],
    cover: "games/parasyte/shots/arena.webp",
    shots: [
      { src: "games/parasyte/shots/arena.webp",    alt: "Top-down view of the blacksite sublevel with green parasites closing in on the player", cap: "Wave one in the blacksite sublevel. Parasites close in from every side." },
      { src: "games/parasyte/shots/swarm.webp",    alt: "The player surrounded by a cluster of parasites on a grated floor", cap: "Get caught in a cluster and they latch on. Dodge to tear them off." },
      { src: "games/parasyte/shots/title.webp",    alt: "Parasyte base screen with the start button, controls and run modifiers", cap: "Base: start a run, pick run modifiers, spend tokens in the shop." },
      { src: "games/parasyte/shots/consumed.webp", alt: "Game over screen reading Consumed, with kills and time survived", cap: "Consumed. Every run ends with kills, time survived and wave reached." }
    ],
    facts: [
      ["Arenas", "Quarantine yard, subway platform, blacksite sublevel, desert basin, forward operating base"],
      ["Runs", "Start with a sidearm, find the rest, earn crate tokens from bosses or ten-wave survivals"],
      ["Extras", "Shop, collection, loadouts and unlockable run modifiers like Blackout, Infestation and Brittle"],
      ["Built with", "TypeScript and canvas 2D, no engine and no runtime dependencies"]
    ],
    actions: [
      { label: "Play Parasyte", note: "Runs in your browser. Keyboard and mouse.", href: "games/parasyte/play.html", primary: true }
    ],
    controls: [[["W","A","S","D"],"Move"],[["Mouse"],"Aim"],[["LMB"],"Fire"],[["RMB"],"Detonate"],[["R"],"Reload"],[["1-5"],"Weapons"],[["Space"],"Dodge and tear free"],[["Esc"],"End run"]]
  },
  {
    id: "echo", section: "games",
    title: "Echo", subtitle: "A game of listening in the dark",
    summary: "Lost in pitch-black caves, you see only by sonar, and every ping tells the blind things where you are.",
    body: "Each ping draws the cave walls for a moment, then the dark closes back in. The creatures down here are blind and hunt by sound alone, so every ping that shows you the way also gives you away. Collect echo shards, plant flares to light the rock for good, and creep past what you can't outrun as you descend deeper.",
    tags: ["Game", "JavaScript", "Canvas 2D", "Web Audio"],
    cover: "games/echo/shots/title.webp",
    shots: [
      { src: "games/echo/shots/title.webp",  alt: "Echo title screen: every sound you make is heard, with the controls list", cap: "Headphones recommended. Every sound in the game is synthesized live." },
      { src: "games/echo/shots/ping.webp",   alt: "A charged sonar ring expanding through a black cave, outlining the walls in cyan", cap: "A charged ping reaches further and draws more of the cave. It's also louder." },
      { src: "games/echo/shots/cavern.webp", alt: "Cyan cave walls revealed by sonar around the player at depth one", cap: "The walls fade a moment after each echo. Remember the shape." },
      { src: "games/echo/shots/paused.webp", alt: "Pause screen with depth, shard count, run seed and controls", cap: "Every run has a seed, so you can retry the exact same cave." }
    ],
    facts: [
      ["Creatures", "Crawlers skitter, Stalkers breathe, and Listeners shriek to alert everything nearby"],
      ["Runs", "Procedural, seeded caves that get harder with depth. Retry any seed."],
      ["Sound", "Fully synthesized spatial audio. Headphones recommended."],
      ["Built with", "One HTML file: JavaScript, canvas 2D and the Web Audio API"]
    ],
    actions: [
      { label: "Play Echo", note: "Runs in your browser. Keyboard and mouse, with headphones.", href: "games/echo/play.html", primary: true }
    ],
    controls: [[["W","A","S","D"],"Move"],[["Space"],"Ping, hold to charge"],[["RMB"],"Focused ping"],[["C"],"Creep"],[["F"],"Plant a flare"],[["Esc"],"Pause"],[["M"],"Mute"]]
  },
  {
    id: "tiny-tanks", section: "games",
    title: "Tiny Tanks", subtitle: "Two to four friends, one keyboard, one hill",
    summary: "Cartoon artillery for up to four players on one keyboard, with CPU opponents, an armory and destructible terrain.",
    body: "Take turns lobbing shells over the hill, judging angle, power and wind. Every crater changes the ground, so shooting the dirt under a tank can beat hitting it. Earn money each round, spend it in the armory on exotic weapons and gadgets, and fill any empty seats with CPU tanks.",
    tags: ["Game", "JavaScript", "Canvas 2D"],
    cover: "games/tiny-tanks/shots/title.webp",
    shots: [
      { src: "games/tiny-tanks/shots/title.webp",       alt: "Tiny Tanks title screen with the main menu and four player banks", cap: "Up to four players share one keyboard. Banks and records save automatically." },
      { src: "games/tiny-tanks/shots/direct-hit.webp",  alt: "Four tanks on a snowy hill, with a direct hit exploding on the purple tank", cap: "Direct hit. Every crater reshapes the hill for the next shot." },
      { src: "games/tiny-tanks/shots/supply-drop.webp", alt: "Player 4's turn banner with a supply drop falling onto the hill", cap: "Supply drops, wind and battlefield modifiers keep every round different." },
      { src: "games/tiny-tanks/shots/armory.webp",      alt: "The armory: a grid of weapons with prices, from rockets to earthquakes", cap: "The armory: over 20 weapons, plus utilities and upgrades." },
      { src: "games/tiny-tanks/shots/new-match.webp",   alt: "New match setup with player count, CPU levels, mode and rounds", cap: "Pick players, CPU difficulty, mode and number of rounds." }
    ],
    facts: [
      ["Players", "2 to 4 on one keyboard, with Easy, Normal and Hard CPU opponents"],
      ["Modes", "Classic, Arcade, Best of 5 and Chaos"],
      ["Arsenal", "Over 20 weapons, utilities like Decoy, and per-match upgrades"],
      ["Built with", "One HTML file, no dependencies"]
    ],
    actions: [
      { label: "Play Tiny Tanks", note: "Runs in your browser. Pass the keyboard around.", href: "games/tiny-tanks/play.html", primary: true }
    ],
    controls: [[["←","→"],"Aim"],[["↑","↓"],"Power"],[["Space","Enter"],"Fire"],[["[","]"],"Change weapon"],[["/"],"Utilities"],[[",","."],"Drive"]]
  },
  {
    id: "never-less-koenigsegg", section: "presentations",
    title: "Never Less.", subtitle: "A Koenigsegg strategy analysis",
    summary: "How Koenigsegg can grow to 200 cars a year without becoming less: a strategy deck for a Luxury Strategy course.",
    body: "Koenigsegg is building capacity for about 3.5 times its 2025 output. The deck weighs three ways to fill it: stay purely megacars, widen sideways, or go lower. It recommends widening sideways with Odin, an SUV built as a megacar and capped at a fifth of output, so the format changes but the excess never does.",
    tags: ["Deck", "Strategy", "HTML"],
    cover: "presentations/never-less-koenigsegg/shots/title.webp",
    shots: [
      { src: "presentations/never-less-koenigsegg/shots/title.webp",      alt: "Title slide: Never Less. A Koenigsegg strategy analysis, with a red Koenigsegg hypercar", cap: "Never Less. A Koenigsegg strategy analysis." },
      { src: "presentations/never-less-koenigsegg/shots/outsider.webp",   alt: "Timeline slide: the outsider that out-engineered, from 655 hp to 2,300 hp", cap: "The outsider that out-engineered: from 655 hp to 2,300 hp with no heritage to lean on." },
      { src: "presentations/never-less-koenigsegg/shots/league.webp",     alt: "Bar chart comparing Koenigsegg prices with other megacar makers", cap: "In a league of its own: priced beside Pagani and Bugatti, not Ferrari." },
      { src: "presentations/never-less-koenigsegg/shots/decision.webp",   alt: "Section slide: The Strategic Decision, with a dark Koenigsegg", cap: "The strategic decision." },
      { src: "presentations/never-less-koenigsegg/shots/three-ways.webp", alt: "Slide comparing three ways to grow: stay purely megacars, widen sideways, go lower", cap: "Three ways to grow, and what each one gives up." },
      { src: "presentations/never-less-koenigsegg/shots/odin.webp",       alt: "Concept slide: Koenigsegg Odin, a black megacar SUV", cap: "The recommendation: Koenigsegg Odin, a megacar first and an SUV second." }
    ],
    facts: [
      ["Question", "How to fill a planned 200 cars a year without diluting the brand"],
      ["Answer", "Widen sideways with a capped megacar SUV, never go lower"],
      ["Format", "26 slides with an appendix, speaker notes and a presenter window"],
      ["Built as", "A single HTML file that runs in the browser"]
    ],
    actions: [
      { label: "Open the deck", note: "About 20 MB, so it can take a few seconds to load.", href: "presentations/never-less-koenigsegg/", primary: true }
    ],
    controls: [[["→","Space"],"Next slide"],[["←"],"Previous slide"],[["F"],"Fullscreen"],[["N"],"Speaker notes"],[["P"],"Presenter window"],[["?"],"All controls"]]
  },
  {
    id: "mimsync-platform", section: "presentations",
    title: "MIMSync Platform", subtitle: "Strategy report: from pipeline to platform",
    summary: "A platform strategy that turns a health-sensor company's hardware into a two-sided marketplace of consumers and coaches.",
    body: "MIMS Inc. already sells metabolic sensors. This deck proposes MIMSync, a platform where each customer's data builds a Digital Twin that matches them with vetted coaches. It covers the value to consumers, coaches and the company, the competitive dynamics, a three-phase scale-up from consumers first to a US launch, the business model and governance, and a business case with a 20 to 24 month operational breakeven.",
    tags: ["Deck", "Platform strategy", "HTML"],
    cover: "presentations/mimsync-platform/shots/title.webp",
    shots: [
      { src: "presentations/mimsync-platform/shots/title.webp",          alt: "Title slide: MIMSync Platform, first iteration of MIMS' new digital strategy, with a phone showing a Digital Twin", cap: "MIMSync Platform: first iteration of MIMS' new digital strategy." },
      { src: "presentations/mimsync-platform/shots/how-it-works.webp",          alt: "How MIMSync works: data capture from devices into a Digital Twin, coach marketplace and insights", cap: "How MIMSync works: device data builds a Digital Twin that connects to coaches." },
      { src: "presentations/mimsync-platform/shots/value-proposition.webp",     alt: "Platform value proposition for consumers, professionals and the company", cap: "What each side of the platform gets." },
      { src: "presentations/mimsync-platform/shots/competitive-dynamics.webp",  alt: "Competitive dynamics with a positioning matrix of data insight against coach integration", cap: "Competitive dynamics: where MIMSync sits against other health platforms." },
      { src: "presentations/mimsync-platform/shots/scale-up.webp",              alt: "Scale-up strategy toolkit and the three phases", cap: "Three phases: consumers first, then marquee coaches, then commission and a US entry." },
      { src: "presentations/mimsync-platform/shots/business-case.webp",         alt: "Business case with breakeven milestones, a revenue and GTV chart and key assumptions", cap: "The business case: assumptions, breakeven and projections." }
    ],
    facts: [
      ["Question", "How a sensor maker becomes a two-sided platform"],
      ["Plan", "Consumers first, marquee coaches second, commission and a US entry third"],
      ["Numbers", "300,000 hardware users, operational breakeven in 20 to 24 months"],
      ["Format", "10 slides in one page that runs in the browser"]
    ],
    actions: [
      { label: "Open the deck", note: "About 14 MB, so it can take a few seconds to load.", href: "presentations/mimsync-platform/", primary: true }
    ],
    controls: [[["→"],"Next slide"],[["←"],"Previous slide"]]
  }
];

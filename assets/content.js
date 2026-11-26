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
    id: "job-hunter", section: "applications",
    title: "Job Hunter", subtitle: "A job search that runs itself",
    summary: "Finds roles every weekday, writes a cover letter in your own voice, picks the right CV and tracks every application. It runs on your own computer with Claude.",
    body: "Job Hunter is a job-search app that runs on your own computer, with Claude doing the searching and writing. Setup takes about 15 minutes: you add your details, your CVs, up to five cover letters you have written and the industries you want. Claude learns how you write, builds a profile of facts it may use, and schedules a search for weekday mornings. Each role comes with a fit score and the reasons for it, the pay and deadline, which CV to attach, a ready-made cover letter as PDF and Word, and an Apply link. A Chrome extension can fill application forms and attach your files, but it never presses Submit for you. This download is the shareable copy: the app with none of the author's personal data, ready for you to set up as your own.",
    tags: ["App", "Claude Code", "Chrome extension"],
    cover: "applications/job-hunter/shots/title.webp", coverFit: "contain", coverBg: "#0a0d18",
    shots: [
      { src: "applications/job-hunter/shots/title.webp",  alt: "Job Hunter title card beside an outline of the dashboard: a list of roles with fit rings and a detail view with an apply panel", cap: "Job Hunter: a job search that runs itself." },
      { src: "applications/job-hunter/shots/format.webp", alt: "Six cards describing each role: fit score, salary and deadline, the right CV, cover letter, autofill and tracking", cap: "What each role shows, and how autofill and tracking work." },
      { src: "applications/job-hunter/shots/setup.webp",  alt: "Three setup steps: open it in Claude, tell it about you, search every weekday", cap: "Set up in about 15 minutes, then type run any time." }
    ],
    facts: [
      ["Runs on", "Mac or Windows, through the Claude desktop app's Code tab"],
      ["Setup", "About 15 minutes: your details, CVs, up to five cover letters and the industries you want"],
      ["Each day", "A weekday search with a fit score, pay, deadline, CV choice and a cover letter for every role"],
      ["Autofill", "A Chrome extension fills forms and attaches files. It never submits for you."],
      ["Needs", "The Claude desktop app, and Google Chrome for autofill"],
      ["Privacy", "Runs on your computer. This copy ships with none of the author's personal data."]
    ],
    actions: [
      { label: "Download Job Hunter", note: "A 3.5 MB zip. Unzip it, open the folder in the Claude desktop app's Code tab and type run.", href: "applications/job-hunter/job-hunter.zip", primary: true }
    ]
  },
  {
    id: "sector-news-brief", section: "agents",
    title: "Sector News Brief", subtitle: "A daily market news agent",
    summary: "Drop one file into a Claude chat and it sets up a scheduled brief that researches your sectors and arrives every weekday morning.",
    body: "Sector News Brief is a one-step setup file. Give it to Claude, type \"set this up\", answer three questions (sectors, region, delivery time) and Claude creates a scheduled task that runs every weekday. Each run searches every sector separately, adds a search for the day's market calendar, opens every article to check its date, and writes a brief with an overview, three to five linked stories per sector and the day's data releases and earnings. It uses original sources such as Reuters, AP, the FT, regulators and central banks, never invents a link, and never gives investment advice.",
    tags: ["Agent", "Claude", "Scheduled task"],
    cover: "agents/sector-news-brief/shots/title.webp", coverFit: "contain", coverBg: "#0a0d18",
    shots: [
      { src: "agents/sector-news-brief/shots/title.webp",  alt: "Sector News Brief title card beside an outline of the brief: overview, banks, energy, tech and today's calendar", cap: "Sector News Brief: a daily market brief you set up once." },
      { src: "agents/sector-news-brief/shots/format.webp", alt: "Six cards describing the brief: overview, per-sector stories, calendar, 24-hour window, real sources and hard rules", cap: "What each brief contains, and the rules it follows." },
      { src: "agents/sector-news-brief/shots/setup.webp",  alt: "Three setup steps: drop the file in, answer three questions, it runs every weekday", cap: "One-step setup: drop it in a chat and say set this up." }
    ],
    facts: [
      ["Schedule", "Monday to Friday at the time you choose, 7:30 by default"],
      ["Sectors", "Banks, insurance, energy, tech, healthcare, real estate, consumer, industrials, crypto"],
      ["Regions", "UK, Europe, US or global"],
      ["Rules", "Every story links to an article it opened. No buy, sell or hold calls, price targets or predictions."],
      ["Needs", "A paid Claude plan for the daily schedule. On a free plan it can still write a brief on request."]
    ],
    actions: [
      { label: "Get the agent file", note: "A single Markdown file. Drop it into a Claude chat and type set this up.", href: "agents/sector-news-brief/sector-news-brief.md", primary: true }
    ]
  },
  {
    id: "inbox-heads-up", section: "agents",
    title: "Inbox Heads-Up", subtitle: "A morning email agent",
    summary: "Drop one file into a Claude chat and it sets up a weekday agent that triages your inbox, flags possible complaints and drafts routine replies. It never sends anything.",
    body: "Inbox Heads-Up is a one-step setup file for a morning email agent. Give it to Claude, type \"set this up\", and Claude checks your email connection, asks a few questions, learns your writing style from your recent sent mail and creates a scheduled task that runs every weekday. Each run sorts new email into urgent, needs reply, FYI and low value, flags anything that might count as a complaint under the FCA's DISP rules, saves drafts for routine replies in your own style, and tracks who is waiting on you and who you are waiting on. It never sends, forwards or deletes, never opens links or attachments, and treats email text as information rather than instructions.",
    tags: ["Agent", "Claude", "Scheduled task", "Email"],
    cover: "agents/inbox-heads-up/shots/title.webp", coverFit: "contain", coverBg: "#0a0d18",
    shots: [
      { src: "agents/inbox-heads-up/shots/title.webp",  alt: "Inbox Heads-Up title card beside an outline of the report: possible complaints, urgent, drafts, needs your reply and follow-ups", cap: "Inbox Heads-Up: a morning email agent." },
      { src: "agents/inbox-heads-up/shots/format.webp", alt: "Six cards describing the agent: triage, possible complaints, draft replies, follow-ups, safety rules and writing in your style", cap: "What it does each morning, and what it will never do." },
      { src: "agents/inbox-heads-up/shots/setup.webp",  alt: "Three setup steps: connect your email, answer a few questions, it runs every weekday", cap: "One-step setup: drop it in a chat and say set this up." }
    ],
    facts: [
      ["Schedule", "Monday to Friday at the time you choose, 7:30 by default, with a push notification"],
      ["Each run", "Triage, possible complaints, draft replies, and follow-ups in both directions"],
      ["Safety", "Drafts only. Never sends, forwards or deletes, and never opens links or attachments."],
      ["Needs", "A paid Claude plan and Gmail or Microsoft 365 connected. Check your firm allows connecting a work mailbox."]
    ],
    actions: [
      { label: "Get the agent file", note: "A single Markdown file. Drop it into a Claude chat and type set this up.", href: "agents/inbox-heads-up/inbox-heads-up.md", primary: true }
    ]
  },
  {
    id: "meeting-prep", section: "agents",
    title: "Meeting Prep", subtitle: "A briefing agent for external meetings",
    summary: "Drop one file into a Claude chat and it sets up an agent that reads your calendar, email and files, then briefs you on each external meeting, with an optional one-page PDF.",
    body: "Meeting Prep is a one-step setup file for a meeting briefing agent. Give it to Claude, type \"set this up\", and Claude checks your email and calendar connections, asks a few questions (files or emails only, a PDF or chat only, every weekday morning or on request) and creates the agent. For each external meeting it reads the invite, the last six months of email with the attendees and their company, any files in folders you approve, and recent public news about the company (never about individual people). Each brief covers the goal, key points to cover, areas to discuss, potential concerns, tough things the other side might say with how you could respond, who is in the room, and open promises on both sides. It never sends, changes or deletes anything, and the only file it writes is the PDF. The sample brief below uses made-up names and companies.",
    tags: ["Agent", "Claude", "Scheduled task", "PDF"],
    cover: "agents/meeting-prep/shots/title.webp", coverFit: "contain", coverBg: "#0a0d18",
    shots: [
      { src: "agents/meeting-prep/shots/title.webp",    alt: "Meeting Prep title card beside a one-page sample meeting brief for a Q4 portfolio review", cap: "Meeting Prep: a one-page brief before each external meeting." },
      { src: "agents/meeting-prep/shots/goal.webp",     alt: "Top of the sample brief: the goal for the meeting, key points to cover and areas to discuss", cap: "The goal, the key points to cover, and areas to discuss." },
      { src: "agents/meeting-prep/shots/concerns.webp", alt: "Sample brief: potential concerns, including an overdue reply and possible dissatisfaction, and tough things they might say with suggested responses", cap: "Concerns, and tough things they might say with how you could respond." },
      { src: "agents/meeting-prep/shots/people.webp",   alt: "Sample brief: who is in the room and the promises and open items with days open", cap: "Who is in the room, and the promises open on both sides." }
    ],
    facts: [
      ["Schedule", "Every weekday morning (7:30 by default) for that day's meetings, or on request: prep me for my meeting with X"],
      ["Reads", "Your calendar, six months of email with the attendees, and optionally files in folders you approve"],
      ["Brief", "Goal, key points, areas to discuss, concerns, tough questions with responses, who is in the room, open promises"],
      ["Output", "A brief in the chat, plus an optional one-page PDF"],
      ["Safety", "Never sends, replies, accepts, changes or deletes. Files are read-only. It never searches the web for individual people."],
      ["Needs", "A paid Claude plan, and email and calendar connected. File access also needs the Claude desktop app. Check your firm allows it."]
    ],
    actions: [
      { label: "Get the agent file", note: "A single Markdown file. Drop it into a Claude chat and type set this up.", href: "agents/meeting-prep/meeting-prep.md", primary: true },
      { label: "See a sample brief", note: "A one-page PDF with made-up names and companies.", href: "agents/meeting-prep/sample-meeting-brief.pdf" }
    ]
  },
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
    id: "audemars-piguet-lbo", section: "presentations",
    title: "Project Octagon", subtitle: "Audemars Piguet leveraged buyout",
    summary: "An investment committee deck for a proposed controlling stake in Audemars Piguet, with the founding families rolling over 30%.",
    body: "Project Octagon asks an investment committee to approve a non-binding offer for a controlling stake in Le Brassus' independent manufacture. It values the house at CHF 16.4bn (17.0x FY2026E EBITDA), funds it with CHF 5.8bn of debt and a CHF 7.9bn sponsor cheque, and leaves 30% of the equity with the founding families. The deck walks through the brand, ownership, collections, financials, valuation, returns, sensitivities and risks, and ends with the ask.",
    tags: ["Deck", "Private equity", "HTML"],
    cover: "presentations/audemars-piguet-lbo/shots/title.webp", coverFit: "contain", coverBg: "#000000",
    shots: [
      { src: "presentations/audemars-piguet-lbo/shots/title.webp",       alt: "Title slide: Project Octagon, a proposed acquisition of Audemars Piguet, over a close-up of a watch dial", cap: "Project Octagon: a proposed acquisition." },
      { src: "presentations/audemars-piguet-lbo/shots/at-a-glance.webp", alt: "Transaction at a glance: enterprise value, debt, equity, rollover, sponsor cheque and returns", cap: "The transaction at a glance." },
      { src: "presentations/audemars-piguet-lbo/shots/key-models.webp",  alt: "Key models: Royal Oak and related collections", cap: "Key models: concentration is the strength and the risk." },
      { src: "presentations/audemars-piguet-lbo/shots/revenue.webp",     alt: "Revenue trajectory chart with estimates and the sponsor plan", cap: "Revenue trajectory: estimates, then the sponsor plan." },
      { src: "presentations/audemars-piguet-lbo/shots/valuation.webp",   alt: "Valuation slide comparing multiples with a scarcity premium", cap: "Valuation: a scarcity premium, but not the seller's price." },
      { src: "presentations/audemars-piguet-lbo/shots/returns.webp",     alt: "Returns bridge showing a 14.8% base case and 17.5% sponsor plan IRR", cap: "Returns: 14.8% in the base case, 17.5% with the sponsor plan." },
      { src: "presentations/audemars-piguet-lbo/shots/the-ask.webp",     alt: "The ask of the Investment Committee", cap: "The ask of the Investment Committee." }
    ],
    facts: [
      ["Deal", "Controlling stake with a 30% founding-family rollover"],
      ["Price", "CHF 16.4bn enterprise value, 17.0x FY2026E EBITDA"],
      ["Returns", "14.8% IRR base case, 17.5% IRR and 2.24x MOIC with the sponsor plan"],
      ["Format", "35 slides in one page that runs in the browser"]
    ],
    actions: [
      { label: "Open the deck", note: "About 4 MB. Use the arrow keys to move through it.", href: "presentations/audemars-piguet-lbo/", primary: true }
    ],
    controls: [[["→"],"Next slide"],[["←"],"Previous slide"]]
  },
  {
    id: "never-less-koenigsegg", section: "presentations",
    title: "Never Less.", subtitle: "A Koenigsegg strategy analysis",
    summary: "How Koenigsegg can grow to 200 cars a year without becoming less: a strategy deck for a Luxury Strategy course.",
    body: "Koenigsegg is building capacity for about 3.5 times its 2025 output. The deck weighs three ways to fill it: stay purely megacars, widen sideways, or go lower. It recommends widening sideways with Odin, an SUV built as a megacar and capped at a fifth of output, so the format changes but the excess never does.",
    tags: ["Deck", "Strategy", "HTML"],
    cover: "presentations/never-less-koenigsegg/shots/title.webp", coverFit: "contain", coverBg: "#000000",
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
    cover: "presentations/mimsync-platform/shots/title.webp", coverFit: "contain", coverBg: "#132648",
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
  },
  {
    id: "ai-agents-on-claude", section: "presentations",
    title: "AI Agents on Claude", subtitle: "A field guide to building them",
    summary: "What agents are, where they work, how to build one on Claude, and where they still break, with sources for every claim.",
    body: "A 19-slide guide to AI agents built from Anthropic's own engineering posts and docs. It defines an agent as a model in a loop with tools, walks the spectrum from a single call to autonomous agents, compares the four ways to run one on Claude (Messages API, Agent SDK, Claude Code and Managed Agents), and covers tools, MCP, Skills, workflow patterns, multi-agent systems and context engineering. It closes with eight limits and how to mitigate them, safety and sandboxing, a ship checklist and a numbered source list.",
    tags: ["Deck", "AI agents", "HTML"],
    cover: "presentations/ai-agents-on-claude/shots/title.webp", coverFit: "contain", coverBg: "#0a1224",
    shots: [
      { src: "presentations/ai-agents-on-claude/shots/title.webp",             alt: "Title slide: AI agents on Claude, beside an animated think, act, look loop around a goal", cap: "AI agents on Claude: a field guide." },
      { src: "presentations/ai-agents-on-claude/shots/what-is-an-agent.webp",  alt: "Definition slide with the agent loop: think, act, observe, repeat until a stop condition", cap: "An agent is a model in a loop with tools." },
      { src: "presentations/ai-agents-on-claude/shots/claude-stack.webp",      alt: "Table comparing the Messages API, Agent SDK, Claude Code and Managed Agents", cap: "Four ways to run an agent on Claude." },
      { src: "presentations/ai-agents-on-claude/shots/workflow-patterns.webp", alt: "Five workflow patterns drawn as small diagrams, plus the step up to agents", cap: "Five workflow patterns cover most of the ground." },
      { src: "presentations/ai-agents-on-claude/shots/multi-agent.webp",       alt: "Lead agent with three subagents, three headline figures and four context engineering techniques", cap: "Multi-agent systems and context engineering." },
      { src: "presentations/ai-agents-on-claude/shots/limits.webp",            alt: "Eight limits of agents, each with a mitigation", cap: "Where agents still break, and what to do about it." }
    ],
    facts: [
      ["Question", "What is an agent, and how do you build one on Claude?"],
      ["Covers", "Loop, tools, MCP, Skills, workflows, multi-agent, context, evals, limits, safety"],
      ["Sources", "Ten Anthropic pages, numbered and linked on the last slide, plus photo credits"],
      ["Format", "19 slides in one self-contained page that runs in the browser"]
    ],
    actions: [
      { label: "Open the deck", note: "About 1.6 MB. Use the arrow keys to move through it, F for fullscreen.", href: "presentations/ai-agents-on-claude/", primary: true }
    ],
    controls: [[["→","Space"],"Next slide"],[["←"],"Previous slide"],[["F"],"Fullscreen"]]
  }
];

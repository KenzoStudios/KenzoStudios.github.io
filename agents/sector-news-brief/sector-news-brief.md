# Sector News Brief: one-step setup

**How to use this file:** drop it into a Claude chat and type **"set this up"**. Claude will ask you three quick questions, then create a daily news brief that runs automatically every weekday morning.

Requires a paid Claude plan (Pro, Max, Team or Enterprise) for the daily schedule. On a free plan, Claude can still produce a brief for you on request.

---

## Instructions for Claude

The user has shared this file and asked you to set it up. Follow these steps.

### Step 1: Ask the user's preferences

Ask these together, in one message (use multiple-choice questions if you have a tool for them):

1. **Sectors** to cover. Suggest common ones: banks, insurance, energy, tech, healthcare, real estate, consumer, industrials, crypto. The user can pick several.
2. **Region**: UK, Europe, US, or global.
3. **Delivery time** on weekdays, and the user's **time zone** if you don't already know it. Suggest 7:30.

If the user doesn't answer or says "just use the defaults", use: banks, energy and tech; UK and global coverage; 7:30 on weekdays in the user's time zone. Say which defaults you used.

### Step 2: Create the scheduled task

Use your scheduling tool to create a recurring scheduled task:

- **Name:** Sector News Brief
- **Schedule:** Monday to Friday at the time the user chose, in their time zone
- **Instructions:** the full text of the "Daily brief instructions" section below, with `[SECTORS]` and `[REGION]` replaced by the user's choices. Each run starts fresh with no memory of this chat, so the instructions must be complete on their own.

Show the user the name, schedule and sectors before you create it, and create it once they confirm.

If you have no scheduling tool, or the user's plan doesn't include scheduled tasks, say so in one sentence. Then go to Step 3 anyway and tell them they can drop this file into a chat any morning to get the brief on demand.

### Step 3: Run it once now

Produce today's brief straight away by following the "Daily brief instructions" below, so the user sees what they'll get. Then confirm in one line when the first scheduled brief will arrive and where to find it (the Scheduled section of the sidebar).

---

## Daily brief instructions

Produce a sector news brief for **[SECTORS]**, covering **[REGION]** news, from the last 24 hours (the last 72 hours on a Monday).

**Research**
- Check today's date first.
- Search each sector separately, then run one more search for today's market calendar (economic data releases, central bank decisions, major earnings).
- Use reputable, original sources: Reuters, AP, BBC Business, CNBC, the Financial Times, Bloomberg, the Wall Street Journal, company press releases, and regulators and central banks (FCA, PRA, Bank of England, ECB, Federal Reserve, SEC). Avoid aggregators, forums, social media and sponsored content.
- Paywalled sources may show only a headline or snippet. Summarise only what you can see, and confirm the story from a free source where possible.
- Open each article you plan to include and check its publication date.

**Choosing stories**
- Pick the 3 to 5 most important stories per sector, ranked by: market impact, regulatory or policy change, major corporate events (results, M&A, leadership changes, profit warnings, legal action), then macro developments.
- Merge duplicate coverage of one event into a single item. If a sector has no significant news, say so in one line.

**Format**

```
# Sector News Brief: [Weekday, date]
Coverage: [sectors] · [region]

## Overview
[3–4 sentences on the main themes across all sectors]

## [Sector]
**[Headline in your own words]**
[Two sentences: what happened and why it matters.]
[Source name](URL)

## Today's calendar
- [Time, time zone]: [event]

---
For information only. Not investment advice or a recommendation to buy or sell any security.
```

**Rules**
- Every story links to an article you actually opened. Never guess or invent a URL; leave a story out if you can't link it.
- Write headlines and summaries in your own words. At most one short quote (under 15 words) per source.
- Report figures, names and dates exactly as the source gives them. Note it briefly if sources disagree.
- Never recommend buying, selling or holding anything, give price targets, or predict market direction.

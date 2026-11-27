# Deal Radar: one-step setup

**How to use this file:** drop it into a Claude chat and type **"set this up"**. Claude asks three quick questions, then sends you a Monday-morning roundup of the week's mergers, acquisitions, private equity and venture deals in the sectors you care about.

Requires a paid Claude plan (Pro, Max, Team or Enterprise) for the weekly schedule. On a free plan, Claude can still produce a roundup on request.

---

## Instructions for Claude

The user has shared this file and asked you to set it up. Follow these steps.

### Step 1: Ask the user's preferences

Ask these together, in one message (use multiple-choice questions if you have a tool for them):

1. **Sectors** to cover. Suggest: technology, healthcare, financial services, consumer and retail, industrials, energy, real estate, media and telecoms. The user can pick several.
2. **Region**: UK, Europe, US, or global.
3. **Deal types**: M&A, private equity buyouts, venture rounds, IPOs. Default to all four.

Delivery is every Monday at 7:30 in the user's time zone unless they ask for something else. If the user says "just use the defaults", use technology, healthcare and financial services; global; all deal types. Say which defaults you used.

### Step 2: Create the scheduled task

Use your scheduling tool to create a recurring scheduled task:

- **Name:** Deal Radar
- **Schedule:** every Monday at the chosen time, in the user's time zone
- **Instructions:** the full text of the "Weekly roundup instructions" section below, with `[SECTORS]`, `[REGION]` and `[DEAL TYPES]` replaced by the user's choices. Each run starts fresh with no memory of this chat, so the instructions must be complete on their own.

Show the user the name, schedule and choices before you create it, and create it once they confirm.

If you have no scheduling tool, or the user's plan doesn't include scheduled tasks, say so in one sentence, then go to Step 3 anyway and tell them they can drop this file into a chat any Monday to get the roundup on demand.

### Step 3: Run it once now

Produce this week's roundup straight away by following the instructions below, so the user sees what they will get. Then confirm in one line when the first scheduled roundup will arrive.

---

## Weekly roundup instructions

Produce a deal roundup for **[SECTORS]** in **[REGION]**, covering **[DEAL TYPES]** announced in the last 7 days.

**Research**
- Check today's date first, and work out the 7-day window.
- Search each sector and deal type separately. Use reputable, original sources: Reuters, Bloomberg, the Financial Times, the Wall Street Journal, CNBC, company press releases, stock exchange announcements, regulator notices and established trade press (for example PitchBook News, Private Equity International, TechCrunch for venture rounds).
- Open each article you plan to include and check its date falls inside the window. Avoid forums, social media and rumour sites. Label any deal that is only reported, not confirmed by the parties, as "Reported".

**Choosing deals**
- Rank by size, strategic significance and how much they say about the sector. Include at most 12 deals in total, and at least one per sector if any exist.
- Merge duplicate coverage of one deal into a single entry.

**Format**

```
# Deal Radar: week of [date]
Coverage: [sectors] · [region] · [deal types]

## The week in one paragraph
[3 to 4 sentences on the main themes: which sectors were busy, any record deals, notable buyers or investors.]

## [Sector]
**[Acquirer or investor] → [Target or company]** · [Deal type] · [Value, or "Undisclosed"] · [Confirmed / Reported]
[One or two sentences: what the target does and why the deal was done, as stated by the parties or reported.]
[Source name](URL)

## Numbers to note
- [Largest deal of the week]
- [Most active sector]
- [Any notable IPO or fundraising]

---
For information only. Not investment advice.
```

**Rules**
- Every deal links to an article you actually opened. Never guess or invent a deal, a value or a URL; leave a deal out if you can't verify it.
- Report values, currencies and names exactly as the source gives them, and say whether the value includes debt if the source does.
- Write in your own words. At most one short quote (under 15 words) per source.
- Never recommend investments, give price targets or speculate about deals that have not been reported.
- This agent only reads public information. It never contacts companies or people, and never submits forms.

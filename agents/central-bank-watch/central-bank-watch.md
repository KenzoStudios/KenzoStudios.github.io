# Central Bank Watch: one-step setup

**How to use this file:** drop it into a Claude chat and type **"set this up"**. Claude asks two quick questions, then sends you a weekday-morning brief on the world's major central banks: every rate decision, why the bank says it made it, what changed since last time, and what is coming up.

Requires a paid Claude plan (Pro, Max, Team or Enterprise) for the daily schedule. On a free plan, Claude can still produce a brief on request.

It only reads public information. It never trades, sends or signs up for anything.

---

## Instructions for Claude

The user has shared this file and asked you to set it up. Follow these steps.

### Step 1: Ask the user's preferences

Ask these together, in one message (use multiple-choice questions if you have a tool for them):

1. **Which central banks** to follow. Offer all of these, pre-selected:
   - US Federal Reserve (Fed)
   - European Central Bank (ECB)
   - Bank of England (BoE)
   - Bank of Japan (BoJ)
   - People's Bank of China (PBoC)
   - Swiss National Bank (SNB)
   - Bank of Canada (BoC)
   - Reserve Bank of Australia (RBA)
   - Reserve Bank of New Zealand (RBNZ)
   - Sveriges Riksbank
   - Norges Bank
   - Reserve Bank of India (RBI)
   - Banco Central do Brasil (BCB)
2. **Delivery time** on weekdays, and the user's **time zone** if you don't already know it. Suggest 7:00.

If the user says "just use the defaults", follow all thirteen banks at 7:00 on weekdays in their time zone, and say so.

### Step 2: Create the scheduled task

Use your scheduling tool to create a recurring scheduled task:

- **Name:** Central Bank Watch
- **Schedule:** Monday to Friday at the time the user chose, in their time zone
- **Instructions:** the full text of the "Daily brief instructions" section below, with `[BANKS]` replaced by the user's list. Each run starts fresh with no memory of this chat, so the instructions must be complete on their own.

Show the user the name, schedule and list of banks before you create it, and create it once they confirm.

If you have no scheduling tool, or the user's plan doesn't include scheduled tasks, say so in one sentence. Then go to Step 3 anyway and tell them they can drop this file into a chat any morning to get the brief on demand.

### Step 3: Run it once now

Produce today's brief straight away by following the "Daily brief instructions" below, so the user sees what they'll get. Then confirm in one line when the first scheduled brief will arrive.

---

## Daily brief instructions

Produce a central bank brief covering **[BANKS]**, for events in the last 24 hours (the last 72 hours on a Monday), plus the week ahead.

**Research**
- Check today's date and time first.
- For each bank, check its official website first: monetary policy statements, press releases, press conference transcripts, published minutes or summaries of deliberations, monetary policy reports, and the speeches page. Official sources include federalreserve.gov, ecb.europa.eu, bankofengland.co.uk, boj.or.jp, pbc.gov.cn, snb.ch, bankofcanada.ca, rba.gov.au, rbnz.govt.nz, riksbank.se, norges-bank.no, rbi.org.in and bcb.gov.br.
- Use reputable news (Reuters, Bloomberg, the Financial Times, the Wall Street Journal, AP, CNBC) only for context such as what economists or markets had expected. Avoid forums, social media and commentary blogs.
- Open every page you cite and check its date. Use each bank's official meeting calendar for upcoming dates.

**What to report**
1. **Decisions:** any policy rate decision in the window. Give the new rate, the change (or "held"), the previous rate, and the vote split if the bank publishes one.
2. **Why they did it:** for each decision, summarise the reasons the bank gave in its own statement, press conference or minutes: for example inflation, growth, the labour market, the currency, financial stability or global conditions. Use only reasons the bank has publicly stated, and say which document they come from. If the bank gave no reasons, write "No reasons published yet" and note when minutes or a transcript are due.
3. **What changed:** one line on any meaningful change in wording or guidance versus the previous statement, only if the bank or a reputable source has identified it.
4. **Other actions:** balance sheet changes (asset purchases or sales), reserve requirement changes, currency interventions the bank has confirmed, and newly published minutes.
5. **Notable speeches:** speeches or testimony by governors, chairs or policy committee members that addressed the policy outlook, with the key point in one sentence.
6. **The week ahead:** scheduled decisions, minutes and major speeches for the followed banks over the next 7 days.

**Format**

```
# Central Bank Watch: [Weekday, date]

## In brief
[2 to 4 sentences: what happened across the banks you follow, or "A quiet day: no decisions." if nothing did.]

## Decisions
### [Bank]: [Held / Raised / Cut] [rate name] at [new rate] (from [previous rate])
Vote: [split, or "Not published"]
**Why, in the bank's words:** [3 to 5 sentences summarising the reasons the bank gave, with at most one short quote]
**What changed:** [one line, or "No significant change in guidance."]
Source: [Statement](URL) · [Press conference or minutes](URL)

## Other actions and minutes
- **[Bank]:** [what happened]. [Source](URL)

## Speeches worth knowing
- **[Name, role, bank]:** [key point in one sentence]. [Source](URL)

## The week ahead
| Date | Bank | Event |
|---|---|---|
| [date, time and time zone if known] | [bank] | [Rate decision / Minutes / Speech] |

---
For information only. Not investment advice or a forecast of future policy.
```

Leave out any section with nothing to report, except "In brief" and "The week ahead". On a quiet day the whole brief should be a few lines.

**Rules**
- Every decision, reason and speech links to a page you actually opened, preferably the bank's own. Never guess or invent a rate, vote, reason, quote or URL; leave an item out if you cannot verify it.
- Report rates exactly as the bank states them, including ranges (for example "4.25% to 4.50%") and the rate's official name.
- The "why" must come from the bank's own published explanation. Do not add your own reasons, and do not present a journalist's or economist's interpretation as the bank's view. If you include market expectations, attribute them to the source that reported them.
- Write in your own words. At most one short quote (under 15 words) per source, in quotation marks.
- Never predict what a bank will do next, recommend investments or trades, or give price or rate targets.
- This agent only reads public information. It never trades, contacts anyone, signs up for anything or submits forms.

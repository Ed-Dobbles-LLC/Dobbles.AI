# The AI Mistakes That Will Hurt You Aren't Technical. They're Managerial.

*March 31, 2026*

I'm not writing this from the outside looking in.

I've been leading enterprise analytics teams for 25 years — Diageo, H&R Block, SuperValu, Best Buy. I have a doctorate in driving adoption of advanced analytic tools. I now build production AI systems daily, alone, shipping things that used to require a team of engineers.

Last month I made a dozen mistakes building a production data product against a hard enterprise deadline. Total quantifiable waste: ~$2,300. I documented all of them. Here are the ones that should matter to you.

## 1. I designed the right architecture. A bad prompt bypassed it.

My pipeline needed to classify data at scale. I built it correctly — cheap, fast method first, expensive and accurate method as the fallback. That's the right design. Invert it and you're burning money on cases the cheap path handles fine.

The problem wasn't the architecture. It was the prompt. I gave Claude instructions vague enough that it skipped the cheap step entirely and routed everything through the expensive path. The two-step process I designed became a one-step process I didn't intend.

I ran it overnight. I woke up to $1,500 in AI spend.

*The executive translation: the architecture and the prompt are both part of the system. You can design the right process and a sloppy prompt will bypass it at runtime. Specificity isn't optional — it's the guardrail.*

## 2. I had to explicitly teach Claude when to act and when to stop and warn me.

I trust my human experts to make decisions in furtherance of an agreed outcome. I don't need them asking permission at every step — that's why I hired them. I extend the same operating model to Claude.

But I had to build it into a doctrine document explicitly. Mine covers three things: how Claude communicates risk, how it handles ambiguous instructions, and how it escalates before spending money. The rule is simple: unless it's a high-risk decision, just do it. If it is high-risk, stop — name it, tell me why, and make me decide.

Without that doctrine, Claude will either over-ask permission on routine decisions or quietly execute something consequential without flagging it. Neither is useful. The doctrine creates the operating contract.

*The executive translation: Claude has no judgment, no context, and no skin in the game unless you give it a framework. It will fill the void with something — just not necessarily what you'd want. The doctrine isn't a nice-to-have. It's the operating contract.*

## 3. Claude says things convincingly. It is sometimes just wrong.

This is the hardest thing to internalize for experienced people — because Claude sounds like someone who knows what they're talking about. The confidence is consistent regardless of the accuracy.

I've managed a lot of smart people over 25 years. Some of them were occasionally wrong, and I knew how to push back. Claude requires the same management instinct — except there are no tells. No hesitation, no hedging posture, no reading the room. It will deliver a factual error with the same tone as a correct answer.

You don't get to stop using your brain. You have to manage Claude the way you'd manage a brilliant analyst who occasionally just makes things up and doesn't know it.

*The executive translation: AI doesn't replace judgment. It requires it. The leaders who will get hurt are the ones who outsourced their skepticism along with their workload.*

## 4. I'm not a great product manager. So I built one.

I think in outcomes and big pictures. Details slip. That's not a new problem — it was a liability when I had 60-person teams too, and I managed around it then.

Solo, there's no one to catch what I miss. So I built an AI product manager that holds my goals, maintains my decision log, and tracks what I said I was going to do. It asks me the questions a good PM would ask. It doesn't let me move the goalposts without noticing.

This is the part most AI content gets wrong: the highest-leverage move isn't using AI to do things faster. It's using AI to compensate for your actual weaknesses.

*The executive translation: you know where you're weak. Build there first.*

## 5. I was using AI to build things. I wasn't using it to tell me what I was doing wrong.

At some point I stopped and asked Claude to review my last month of work with a specific instruction: not to help me. To critique me. The exact prompt was "think like a genius AI leader and tell me honestly what I'm getting wrong."

It returned five systemic problems I'd been too close to see — financial guardrails that reset on crash, ten simultaneous workstreams when three is the cognitive limit, no decision log so I was relitigating settled architectural calls from scratch every week.

None of that required genius. It required distance — and the right question.

*The executive translation: AI at the execution layer makes you faster. AI at the planning layer makes you smarter. Most people only use the first one.*

## 6. My guardrails failed exactly when I needed them most.

I built a budget tracker to prevent AI cost overruns. It initialized at zero on startup and didn't recover historical spend from the database. When a worker crashed and restarted, it thought it had a full budget — and spent accordingly.

The guardrail worked perfectly in normal conditions. It didn't exist under stress.

This isn't just a code problem. It's a governance problem. Any control mechanism — cost limits, quality checks, review processes — that resets or fails when the system is under pressure isn't a guardrail. It's a suggestion.

*The executive translation: design your controls for the crash, not the happy path. The happy path doesn't need guardrails.*

---

Total quantifiable waste: ~$2,300 on a contract worth significantly more. Under 3% of revenue. The business is fine.

But I'm a disciplined, experienced builder who spends more time in these tools than almost anyone writing about them — and I still made these mistakes.

AI removes the team dependency. It does not remove the discipline requirement.

*If you're building with AI at the enterprise level and want a peer conversation — message me.*

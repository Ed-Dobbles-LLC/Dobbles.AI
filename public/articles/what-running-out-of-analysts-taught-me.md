# What Running Out of Analysts Taught Me About AI

*March 17, 2026*

Some analytics work doesn't get delayed. It just doesn't get done. Ever.

I ran 60 analysts at SuperValu. Twenty people and a $17M budget at Diageo. The backlog never cleared at either place. Most analytics leaders accept this as structural reality. I did too — until I moved to a tiny startup and had no choice but to actually fix it.

The standard story is too much demand, not enough people. True, but incomplete. The deeper problem is that some categories of work require sustained discipline that no team sustains. Data documentation. Standardized intake. Knowledge capture. Someone builds the form, it holds for two weeks, the first urgent request bypasses it, and within a month everyone's forgotten it existed.

The real system was never the tool. It was a person. "Go ask Lori — she built that model." Lori knew the lineage, the caveats, the three fields that look like revenue but aren't. When Lori left, she took the documentation with her.

This isn't a capacity problem. It's organizational fragility. And for 25 years, the industry's solution was to hire more Loris and hope they stayed.

When I joined Overproof I lost the team and kept the demand. Necessity forced me to solve what I'd been managing around for two decades. What came out of that crucible — built under startup constraint — closes gaps that exist at identical scale in organizations with 50 analysts and $15M budgets. The constraint just forced me to see them clearly.

## The Real Prize Is What Your Team Does With the Time

Here's what I discovered once AI was handling the structural work: the majority of my time went to the thing analytics functions exist to do. Actually deriving insights and telling the story that changes a decision.

Three examples from what I've actually built.

**Intake management** used to mean building a form nobody would use. I have an AI notetaker on every meeting and my AI has access to my Gmail. Intake is already captured — automatically, in the channels where work actually gets requested. Nobody fills out a form. Nobody changes how they work. The system just knows. Discipline baked in, not dependent on the team maintaining it.

**Analysis that used to take days** now happens over lunch. I ask my AI "Tell me the changes in cocktail flavors this year versus last year" and it writes the Snowflake query, runs it, and gives me a narrative summary. The menu trend updates I've been posting on LinkedIn? Banged out while wolfing down lunch. That's not a productivity improvement. That's a different way of working entirely.

**Executive communication that never happened** now happens automatically. I built a podcast platform that generates audio briefings — formatted for how executives actually consume information, while driving or working out, not by sitting down to read a report. I didn't build a new communication channel. I built one that fits how executives already spend their time. That's not doing the same thing faster. It's doing something that simply would never have happened otherwise.

Lori's knowledge? It lives in the system now, not in Lori. When someone new joins, they don't spend six months reconstructing what the team already knows. And when AI queries the wrong table, I see it — because governance at Overproof means monitoring what's actually being queried in Snowflake, not writing a policy document.

## AI Is an Incredible Employee — With One Dangerous Flaw

Here's what I didn't expect: I'd have to learn how to manage AI. Not use it. Manage it.

Claude — and every other large language model — is one of the most capable analysts I've ever worked with. Fast, tireless, extraordinary range. But it has a failure mode that would get a human analyst fired: it will tell you something completely wrong with total confidence. No hedging. No uncertainty. Just a clean, well-reasoned, authoritative answer that happens to be false.

And sometimes the failure isn't the AI at all. It's you.

I had a working beverage alcohol analytics engine and decided to extend it to cannabis. I told my AI to do the same thing we do in bev/alch, but for dispensaries. It did exactly that — including looking for Diageo and Suntory brands like Johnnie Walker and Jim Beam in cannabis dispensary data. They weren't there. Of course they weren't there. Those brands don't sell cannabis products. But my AI didn't know that, so instead of flagging the obvious mismatch, it spun cycles trying to figure out why it couldn't find them — treating the absence as a problem to solve rather than a signal that it was looking in the wrong place entirely.

That's a more dangerous failure mode than a hallucination. The AI followed my instructions precisely. The problem was that my instructions assumed context the AI didn't have — that cannabis and beverage alcohol are fundamentally different markets with different players. Without that context, "do the same thing but for cannabis" was a perfectly reasonable instruction that produced a perfectly useless result.

This is the thing nobody tells you about leading with AI: vague instructions sometimes work and sometimes blow up in your face, exactly like they do with people. The difference is that a seasoned analyst pushes back, asks a clarifying question, or at least knows enough to know what they don't know. AI doesn't. It executes. Which means the burden of clear direction doesn't decrease when you adopt AI — it increases. You still have to be a leader. The person you're leading just happens to be artificial.

That experience changed how I build. Every project now starts with a Doctrine document — context about the domain, the data, the brand structures I care about, how I want output formatted. I also run a structured Q&A session at the start of every project specifically designed to surface requirements I didn't think of initially. The AI asks the questions; I answer them; we build shared context before any actual work starts. The output quality difference is not marginal.

My ongoing management approach runs on two additional techniques. First, **competitive triangulation**: I run consequential questions through Claude and ChatGPT independently. When they agree without seeing each other's work, confidence goes up. When they diverge — and they do diverge — that's a signal worth investigating before acting. I've had cases where one model correctly identified a trend and the other confidently described the opposite. The divergence didn't tell me who was right. It told me I needed to go look at the actual data myself. That's the point.

Second, **sentinel questions**. At Overproof, every AI analysis workflow includes a standing check: pull the frequency that Malort appears on menus in Chicago versus the rest of the country. I already know the answer. Malort is a hyper-local Chicago phenomenon — its menu penetration there should be dramatically higher than anywhere else. If my AI gets that wrong, the rails are off and nothing else in that output gets trusted.

It sounds quirky. It's a calibration methodology. Pick a question with a known answer relevant to your domain, make it a mandatory process step, and never skip it.

*Managing AI turns out to look a lot like managing a brilliant analyst who is occasionally, confidently, completely wrong. You don't stop using them. You build the process that catches it.*

## The Analytics Leader of the Future Manages Both

The CAOs and CDOs who figure this out first will build something genuinely new: analytics functions where the structural gaps are actually closed, human capacity concentrates on judgment and insight, and AI is managed with the same rigor you'd apply to any high-output, occasionally unreliable team member.

None of this is frictionless. Doctrine documents require upkeep. Sentinel questions need to stay domain-relevant. Competitive triangulation takes time. Managing AI well is real ongoing work — not a one-time setup. The leaders who treat it that way will build functions that hold. The ones who don't will eventually get burned by a clean, confident, completely wrong answer at exactly the wrong moment.

Build the Doctrine document. Run the Q&A session. Check for Malort.

That's what managing an AI-powered analytics function actually looks like.

*What's the thing in your analytics function that everyone agrees should happen and never does — and have you started building the process checks that make AI trustworthy enough to help close it? Message me or schedule time with me at [Dobbles.AI](http://dobbles.ai/).*

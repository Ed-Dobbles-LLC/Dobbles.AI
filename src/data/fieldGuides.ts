export interface FieldGuide {
  slug: string;
  num: string;
  title: string;
  shortTitle: string;
  date: string;
  subtitle: string;
  body: string;
}

export const FIELD_GUIDE_CSS = `
:root{--navy:#060A57;--coral:#DB5461;--cream:#F5F4ED;--ink:#0D0D0D;--sky:#3273DB;--cyan:#85E4FD;--gray:#6B7088;--offwhite:#F7FBFE;}
*{margin:0;padding:0;box-sizing:border-box;-webkit-font-smoothing:antialiased;}
body{font-family:'Montserrat',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#fff;color:var(--navy);line-height:1.65;}
.wrap{max-width:760px;margin:0 auto;padding:0 24px;}
.kick{font-weight:800;letter-spacing:.18em;text-transform:uppercase;font-size:13px;color:var(--coral);}
h1{font-weight:800;font-size:44px;line-height:1.06;letter-spacing:-.02em;margin:16px 0 0;color:var(--navy);}
h2{font-weight:800;font-size:28px;line-height:1.12;letter-spacing:-.01em;margin:56px 0 16px;color:var(--navy);}
h3{font-weight:700;font-size:20px;margin:30px 0 8px;color:var(--navy);}
p{font-size:17px;color:#33384F;margin:15px 0;}
.lede{font-size:21px;color:#4A4F66;margin-top:22px;}
strong{color:var(--navy);font-weight:700;}
em{font-style:italic;}
a{color:var(--sky);text-decoration:none;border-bottom:1px solid rgba(50,115,219,.35);}
header.hero{padding:72px 0 36px;border-bottom:1px solid #E2E1D6;}
.logo{display:flex;align-items:center;gap:12px;margin-bottom:26px;}
.bars{display:flex;align-items:flex-end;gap:4px;height:30px;}
.bars i{width:7px;background:var(--navy);display:block;border-radius:1px;}
.bars i:nth-child(1){height:12px;}.bars i:nth-child(2){height:19px;}.bars i:nth-child(3){height:26px;}.bars i:nth-child(4){height:30px;background:var(--coral);}
.logo .wm{font-weight:800;font-size:26px;letter-spacing:-.01em;color:var(--navy);}.logo .wm .dot{color:var(--coral);}
.fg-logo-link{text-decoration:none;border-bottom:none;display:inline-block;}
.promptcard{background:var(--navy);border-radius:14px;padding:26px 30px;margin:22px 0;position:relative;}
.promptcard .label{font-weight:800;letter-spacing:.14em;text-transform:uppercase;font-size:12px;color:var(--cyan);margin-bottom:14px;}
.promptcard pre{white-space:pre-wrap;word-wrap:break-word;font-family:'Montserrat',sans-serif;font-size:14.5px;line-height:1.6;color:var(--offwhite);margin:0;}
.copybtn{position:absolute;top:22px;right:22px;background:var(--coral);color:#fff;border:none;border-radius:8px;font-family:'Montserrat',sans-serif;font-weight:700;font-size:13px;padding:9px 16px;cursor:pointer;}
.copybtn.done{background:#00B98E;}
.step{display:flex;gap:18px;margin:20px 0;align-items:flex-start;}
.stepnum{font-weight:800;font-size:22px;color:var(--coral);min-width:32px;}
.limit{background:rgba(219,84,97,.07);border:1px solid rgba(219,84,97,.28);border-radius:12px;padding:22px 26px;margin:24px 0;}
.limit .t{font-weight:800;font-size:18px;color:var(--navy);margin-bottom:6px;}
.limit p{margin:0;font-size:16px;}
.cheatwrap{margin:64px 0 0;padding-top:8px;}
.cheatlabel{text-align:center;font-weight:800;letter-spacing:.16em;text-transform:uppercase;font-size:13px;color:var(--gray);margin-bottom:18px;}
.cheat{background:var(--cream);border-radius:18px;padding:48px 52px;border:1px solid #E2E1D6;}
.cheat .ctop{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px;}
.cheat .ctitle{text-align:right;}
.cheat .ctitle .ck{font-weight:800;letter-spacing:.16em;font-size:12px;color:var(--coral);text-transform:uppercase;}
.cheat .ctitle .ch{font-weight:800;font-size:24px;line-height:1.1;color:var(--navy);margin-top:4px;}
.cheat .crule{height:3px;background:var(--navy);margin:16px 0 20px;border-radius:2px;}
.cheat .cintro{font-size:15px;line-height:1.45;color:#33384F;margin-bottom:20px;}
.cheat .cintro b{color:var(--navy);}
.cheat .ckick{font-weight:800;letter-spacing:.1em;font-size:12px;color:var(--coral);text-transform:uppercase;margin:0 0 3px;}
.cheat .ckick .w{color:var(--navy);}
.cheat .csub{font-size:13px;color:var(--gray);margin-bottom:11px;}
.cheat .ccall{background:var(--navy);border-radius:10px;padding:18px 22px;margin-bottom:20px;}
.cheat .ccall .l{font-weight:800;letter-spacing:.12em;font-size:11px;color:var(--cyan);text-transform:uppercase;margin-bottom:9px;}
.cheat .ccall p{color:var(--offwhite);font-size:14px;line-height:1.5;margin:0;}
.cheat .ccall p b{color:#fff;}
.cheat .cgrid{display:flex;gap:12px;margin-bottom:20px;}
.cheat .ccol{flex:1;background:#fff;border:1.5px solid #E2E1D6;border-radius:10px;padding:16px 18px;}
.cheat .ccol.lim{border-left:5px solid var(--coral);}
.cheat .ccol .cn{font-weight:800;font-size:15px;color:var(--navy);margin-bottom:5px;}
.cheat .ccol .cn.coral{color:var(--coral);}
.cheat .ccol .cd{font-size:13px;line-height:1.4;color:#33384F;}
.cheat .ccol .cd b{color:var(--navy);}
.cheat .crow{display:flex;gap:16px;padding:10px 0;border-bottom:1px solid #DDDCCF;align-items:baseline;}
.cheat .crow:last-child{border-bottom:none;}
.cheat .crow .rn{font-weight:800;font-size:15px;color:var(--coral);min-width:170px;}
.cheat .crow .rd{font-size:14px;line-height:1.38;color:#33384F;}
.cheat .crow .rd b{color:var(--navy);}
.cheat .cwiden{font-size:14px;line-height:1.4;color:#33384F;margin:7px 0;}
.cheat .cwiden .a{color:var(--coral);font-weight:700;}.cheat .cwiden b{color:var(--navy);}
.cheat .cpay{text-align:center;border-top:2.5px solid var(--navy);border-bottom:2.5px solid var(--navy);padding:18px 0;margin:22px 0 0;}
.cheat .cpay .pk{font-weight:800;letter-spacing:.1em;font-size:11px;color:var(--gray);text-transform:uppercase;margin-bottom:6px;}
.cheat .cpay .pl{font-weight:800;font-size:23px;line-height:1.14;color:var(--navy);}
.cheat .cpay .pl .c{color:var(--coral);}
.cheat .cfoot{display:flex;justify-content:space-between;font-size:12px;color:var(--gray);margin-top:18px;}
.cheat .cfoot b{color:var(--navy);}.cheat .cfoot .nx b{color:var(--coral);}
.cheat .cfoot .nx a{color:var(--coral);border-bottom:none;}
footer.pgfoot{border-top:1px solid #E2E1D6;margin-top:56px;padding:32px 0 72px;font-size:14px;color:var(--gray);}
footer.pgfoot .wm{font-weight:800;color:var(--navy);}footer.pgfoot .wm .dot{color:var(--coral);}
footer.pgfoot .nx b{color:var(--coral);font-weight:700;}
footer.pgfoot .nx a{color:var(--coral);border-bottom:none;font-weight:700;}
@media(max-width:600px){h1{font-size:32px;}.cheat{padding:32px 20px;}.cheat .cgrid{flex-direction:column;}.cheat .ctop{flex-direction:column;gap:12px;}.cheat .ctitle{text-align:left;}}
`;

const LOGO = `<a href="/" class="fg-logo-link"><div class="logo"><div class="bars"><i></i><i></i><i></i><i></i></div><span class="wm">Dobbles<span class="dot">.AI</span></span></div></a>`;
const LOGO_PLAIN = `<div class="logo" style="margin:0"><div class="bars"><i></i><i></i><i></i><i></i></div><span class="wm">Dobbles<span class="dot">.AI</span></span></div>`;

const fg01Body = `<div class="wrap">
<header class="hero">${LOGO}<div class="kick">Field Guide 01 · Build Your First Skill</div>
<h1>Build Your First Skill</h1><p class="lede">Take the prompt-optimizer you'd normally paste every time, save it once, and make every prompt you write sharper — automatically, with nothing to paste. First in a series on crossing from asking AI to building with it.</p></header>

<h2>It's not the model. It's the question.</h2>
<p>You use AI like a smarter Google. Type a question, get an answer, move on. It's fine — but "fine" is the problem. The hype said this would change your work, and so far it's a faster search box.</p>
<p>Here's what nobody tells you. The same AI that gives you a generic answer will give you a sharp one — if you ask the right way. Most people never find out, because when the answer is weak, they blame the tool.</p>
<p>Some of you already do a version of this. You've got a favorite optimizer you fire up for the big questions. I did too — I kept one in ChatGPT for whenever the question really mattered. It worked. It was also a pain: a separate tool I had to leave my chat for, paste into, copy out of. So I used it for the big stuff and went back to lazy prompts for everything else. Exactly backwards.</p>
<p>The fix wasn't a better separate tool. It was building the optimizer into the AI I already use — so it runs on every prompt, automatically, with nothing to paste. That's a skill. And it's the easiest first thing you'll ever build.</p>

<h2>The five gaps that wreck a prompt</h2>
<p>A bad prompt isn't a dumb prompt — it's an underspecified one. You know what you want; the AI doesn't, so it fills the blanks with the most generic answer it has. The optimizer's only job is to fill those blanks first. There are exactly five.</p>
<p><strong>Goal</strong> — what you're actually trying to accomplish. Not "write an email" — "keep this client confident while owning a mistake." The outcome, not the surface task.</p>
<p><strong>Audience</strong> — who it's for and what they already know. An email to your boss and one to a new vendor are different documents.</p>
<p><strong>Format</strong> — paragraph, bullets, table, one-line Slack message, full memo. Leave it blank and you get whatever it defaults to — usually an essay you didn't want.</p>
<p><strong>Depth</strong> — quick take or deep work? "Three options, one line each" and "walk me through this" are different requests.</p>
<p><strong>Constraints</strong> — word count, tone, what to avoid, what to always include. The guardrails are where quality lives.</p>
<p>That's the entire theory. The optimizer fills these five so you don't have to.</p>

<h2>Make it permanent — the five-minute version</h2>
<p>This is the part that turns a prompt you paste into a skill that's always on. No code, about five minutes. You're saving the optimizer as a standing instruction the AI reads before every response. Each platform calls it something different. Verified June 2026; tools move, so if a button name changed, the concept hasn't.</p>
<div class="step"><div class="stepnum">C</div><div><h3 style="margin-top:0">Claude (free on every plan)</h3><p style="margin-top:2px">Click your initials (bottom-left) &rarr; Settings &rarr; Profile. Find "What personal preferences should Claude consider in responses?" Paste the optimizer. Save. Every new chat runs it.</p></div></div>
<div class="step"><div class="stepnum">G</div><div><h3 style="margin-top:0">ChatGPT (free on every plan)</h3><p style="margin-top:2px">Profile icon &rarr; Settings &rarr; Personalization &rarr; Custom Instructions. Paste it into "How would you like ChatGPT to respond?" (1,500-char limit — it fits). Save.</p></div></div>
<div class="step"><div class="stepnum">P</div><div><h3 style="margin-top:0">Perplexity (free on every plan)</h3><p style="margin-top:2px">Spaces &rarr; Create a Space. In Custom Instructions, paste the optimizer. Continue. Every thread in that Space is sharpened by default.</p></div></div>

<h3>The level-up: build it as a real Skill</h3>
<p>A saved setting is the easy win. The durable version is a named Skill — a reusable behavior the AI loads on its own. And you don't write a line: you ask for it. In Claude, turn it on once (Settings &rarr; Feature Previews &rarr; enable Code Execution, then Skills), then say: "Build me a Skill called Prompt Optimizer that does this:" and paste the instruction below. ChatGPT's version is a custom GPT; Perplexity's is the Space you already made.</p>

<div class="limit"><div class="t">The real move — bigger than the optimizer</div><p>You found a thing you kept re-explaining to AI, wrote it down once, and saved it so you never have to say it again. That's the whole pattern. The test is simple: if you've explained it to AI more than twice, stop explaining it and save it.</p></div>

<h3>The optimizer — paste this into any chat, or into a settings field</h3>
<div class="promptcard"><div class="label">The instruction</div><button class="copybtn">Copy</button><pre>You are my prompt optimizer. When I give you a rough request, do not answer it yet. First, rewrite it into a sharp, fully-specified prompt — fill in the goal, audience, format, depth, and any constraints you can infer, and flag the ones you can't. Show me the rewritten prompt. If anything important is genuinely unclear, ask me one or two quick questions. Once I approve, run it. Ready for my first request.</pre></div>

<div class="cheatwrap"><div class="cheatlabel">— Printable Cheat Sheet —</div>
<div class="cheat">
<div class="ctop">${LOGO_PLAIN}<div class="ctitle"><div class="ck">Field Guide 01 · Cheat Sheet</div><div class="ch">Build a Prompt Optimizer That Runs Automatically</div></div></div>
<div class="crule"></div>
<div class="cintro">It's not the model — it's the question. A weak prompt is an <b>underspecified</b> one: you know what you want, the AI doesn't, so it fills the blanks with its most generic answer. Three rungs: try it, save it to every chat, then build it as a real Skill.</div>
<div class="ckick">Rung 1 — Try it <span class="w">(copy into any chat — it's the whole optimizer)</span></div>
<div class="ccall"><div class="l">The instruction</div><p>You are my prompt optimizer. When I give you a rough request, don't answer it yet. First rewrite it into a sharp, fully-specified prompt — fill in the <b>goal, audience, format, depth, and constraints</b> you can infer, flag the ones you can't. Show me the rewrite. Ask one or two questions only if genuinely unclear. Once I approve, run it.</p></div>
<div class="ckick">The five gaps it fills</div>
<div class="cgrid">
<div class="ccol"><div class="cn">Goal</div><div class="cd">The outcome, not the surface task.</div></div>
<div class="ccol"><div class="cn">Audience</div><div class="cd">Who it's for and what they know.</div></div>
<div class="ccol"><div class="cn">Format</div><div class="cd">Bullets, table, memo — or you get an essay you didn't want.</div></div>
</div>
<div class="cgrid">
<div class="ccol"><div class="cn">Depth</div><div class="cd">Quick take or deep work? Different requests.</div></div>
<div class="ccol"><div class="cn">Constraints</div><div class="cd">Word count, tone, what to avoid. Where quality lives.</div></div>
<div class="ccol" style="background:transparent;border:none;"></div>
</div>
<div class="ckick">Rung 2 — Save it <span class="w">(paste once into settings; now it runs on every chat. ~5 min)</span></div>
<div class="cgrid">
<div class="ccol"><div class="cn coral">Claude</div><div class="cd">Initials &rarr; <b>Settings</b> &rarr; Profile &rarr; "personal preferences" field &rarr; paste &rarr; Save.</div></div>
<div class="ccol"><div class="cn coral">ChatGPT</div><div class="cd">Settings &rarr; <b>Personalization</b> &rarr; Custom Instructions &rarr; "how to respond" &rarr; Save.</div></div>
<div class="ccol"><div class="cn coral">Perplexity</div><div class="cd">Spaces &rarr; <b>Create a Space</b> &rarr; Custom Instructions &rarr; paste &rarr; Continue.</div></div>
</div>
<div class="ckick">Rung 3 — Build it as a real Skill <span class="w">(still no code)</span></div>
<div class="cwiden">Turn it on in Claude: Settings &rarr; <b>Feature Previews</b> &rarr; enable Code Execution, then Skills. Then say <b>"Build me a Skill called Prompt Optimizer that does this:"</b> and paste the instruction. Claude writes it, names it, saves it. (ChatGPT = custom GPT; Perplexity = the Space.)</div>
<div class="cpay"><div class="pk">The real move — bigger than the optimizer</div><div class="pl">If you've explained it to AI more than twice, <span class="c">stop explaining it and save it.</span></div></div>
<div class="cfoot"><span><b>Dobbles.AI</b> · The Geek That Can Speak · Verified June 2026 · v3.0</span><span class="nx">Next: <a href="/field-guide/tools-cut-to-fit"><b>build a workspace that knows one whole job cold.</b></a></span></div>
</div>
</div>
<footer class="pgfoot"><span class="wm">Dobbles<span class="dot">.AI</span></span> — The Geek That Can Speak · Verified June 2026 · v3.0 · Ed@Dobbles.AI<br>
<span class="nx">Next: <a href="/field-guide/tools-cut-to-fit"><b>build a workspace that knows one whole job cold.</b></a></span></footer>
</div>`;

const fg02Body = `<div class="wrap">
<header class="hero">${LOGO}<div class="kick">Field Guide 02 · Tools Cut to Fit</div>
<h1>Tools Cut to Fit: How to Build AI Skills for the Way You Actually Work</h1><p class="lede">No code. One weekend. A method you can copy. What a skill is, the five I run every day, and the exact way to build your own.</p></header>

<p>I've always wanted a Savile Row suit. Not a nice suit off the rack — a real one, cut to my body, by someone who measured me and nobody else. The difference isn't the fabric. It's that off-the-rack is built for the average of a thousand men, and bespoke is built for one.</p>
<p>Most people use AI off the rack. Same chat box, same generic prompt, same average-of-everyone output. I stopped doing that a while ago. I've been having my tools cut to fit — and the difference is the same difference.</p>
<p>This is the guide I promised. It's what a skill is, the five I run every day, and the exact method to build your own. No code anywhere in here. If you can write a memo, you can do this.</p>

<h2>A skill is procedural memory, not a prompt</h2>
<p>Here's the cleanest definition I've found. A skill is a set of instructions you write once and call by name — a standing rule the model loads and follows on its own, the same way every time.</p>
<p>A prompt is something you type and retype. A skill is something you write down once and never explain again. A prompt is a conversation. A skill is a policy.</p>
<p>The technical version, if you want it: a skill is a small folder with a plain-text file inside it (named SKILL.md). The file says what the skill is for and how the model should behave when it's relevant. The model reads the name and the one-line description, decides whether the skill applies, and pulls in the full instructions only when it needs them. You don't invoke it like a command. It shows up when it's useful, the way a good assistant knows which binder to grab.</p>
<p>If you've ever asked Claude to build you a slide deck, you've already used one — the document-creation feature is a skill running under the hood. You just didn't tailor it yourself. That's the only new part. You can now write your own.</p>

<h2>The five I run every day</h2>
<p>Every one of these exists because I kept hitting the same pain, then wrote the rule that made it stop. That's the whole pattern — find the thing you re-explain, re-do, or re-litigate, and write it down once.</p>
<p><strong>sounds-like-ed</strong> — a voice skill. It holds how I actually write — sentence rhythm, the words I won't use, how I open and close — and applies it to anything I draft. I built it because AI writing sounds like AI, and everyone can smell it now. Generic prose on my name costs me the one thing I'm selling.</p>
<p><strong>prompt-optimize</strong> — a skill that sharpens a rough ask before the model runs it. I type the messy version; it tightens it, then runs the better one. I built it because the separate optimizer I'd been using lived inside some GPT someone else built — so using it meant stopping to go find it. Now it's just there, every session, no detour.</p>
<p><strong>session-close / session-kickoff</strong> — a pair. One logs what shipped and what's next before I stop. The other reads it back when I sit down. I built them because the model forgets between sessions, and I was wasting the first fifteen minutes of every morning re-explaining where we'd left off.</p>
<p><strong>historian</strong> — a memory skill. It captures the load-bearing decisions and keeps one source of truth that every session reads at the start. I built it because I kept re-litigating calls I'd already made. Now: settled stays settled.</p>
<p><strong>pre-call-brief</strong> — a research skill. I feed it a name and a company, and I get the same sharp brief every time — who they are, what they need, my angle, the opener. I built it because my prep was inconsistent and ate a morning.</p>
<p>Notice the names. They are aggressively boring — historian, session-close, prompt-optimize. That's on purpose. You call a skill by its name, constantly, so the name has to be something you'll actually type without thinking. Name yours like you'll be saying it in a meeting. You might be.</p>

<h2>How to build one this weekend</h2>
<p>Here's the method. It's the same thing you'd do to onboard a sharp new hire — you're just writing the onboarding doc for a tool instead of a person.</p>
<p><strong>Pick the pain first.</strong> Don't start with "what skill should I build." Start with what you keep doing the hard way. The thing you re-explain every session. The format you rebuild from scratch every time. The mistake you've made twice. That's your first skill.</p>
<p><strong>Write down what "good" looks like.</strong> Open a blank document. Write, in plain language, how you'd explain the job to a smart person on their first day. What the task is. What a great result looks like. What to never do. Don't be clever — be specific. "Use my company's exact product names, never the abbreviations" beats "be accurate."</p>
<p><strong>Give it the three things it can't guess.</strong> Most bad output is the model missing context you forgot to give it. The facts (names, definitions, which source is the real one), the format (how you want the output shaped), and the rules (what it must never do). A new hire would ask for all three. The model won't ask — so you hand it over up front.</p>
<p><strong>Name it something you'll type.</strong> Boring and memorable beats clever. No swear words.</p>
<p><strong>Use it, then fix it.</strong> The first version will be 80% right. Use it for a week, notice where it drifts, and add the rule that fixes the drift. A skill is a living document. Mine all get sharper every month.</p>
<p>That's the entire method. Pick the pain, write down "good," hand over the context, name it, refine it. A weekend for the first one. Thirty minutes for the next.</p>

<h2>The one rule most people skip</h2>
<p>Build a way to catch the tool when it's wrong.</p>
<p>The dangerous thing about AI isn't that it fails — it's that it fails confidently. It will hand you a clean, well-reasoned, completely wrong answer with the exact same tone it uses for a correct one. No hedge, no tell. If you're not checking, you won't know.</p>
<p>So I build a check into the skills that matter. A known-answer question the tool has to get right before I trust anything else it says. Mine, for my data work, is a hyper-local one — a result I already know cold, so if the tool gets that wrong, I know the rails are off and I stop trusting the rest. Pick your own. Make it a required step. Never skip it. A skill that produces confident garbage faster is worse than no skill at all.</p>

<h2>This isn't a bet on one vendor</h2>
<p>The reflex objection: "this is a Claude thing." It isn't anymore. The skill format is an open standard now — the same skill runs in ChatGPT, Cursor, and a couple dozen other tools. You're not wiring yourself to one company. You're learning a way of working that the whole industry is converging on.</p>
<p>Worldwide, the number of people who've cut their own skill wouldn't fill two football stadiums. It's early. That's the opportunity.</p>

<div class="limit"><div class="t">The line that anchors all of it</div><p>The model is becoming abundant. The discipline around the model is becoming scarce. Skills are where you keep the discipline — cut to fit. Build the first one this weekend. Pick the pain, write down "good," hand over the context. Then send me what you made.</p></div>

<div class="cheatwrap"><div class="cheatlabel">— Printable Cheat Sheet —</div>
<div class="cheat">
<div class="ctop">${LOGO_PLAIN}<div class="ctitle"><div class="ck">Field Guide 02 · Cheat Sheet</div><div class="ch">Build AI Skills for the Way You Actually Work</div></div></div>
<div class="crule"></div>
<div class="cintro">Most people use AI <b>off the rack</b> — same chat box, same generic output. A skill is a tool <b>cut to fit</b>: instructions you write once and call by name, so the model loads it and behaves the same way every time. No code.</div>
<div class="ccall"><div class="l">What a skill actually is</div><p>A prompt is something you type and retype. <b>A skill is something you write down once and never explain again.</b> A prompt is a conversation. A skill is a policy.</p></div>
<div class="ckick">The five Ed runs every day</div>
<div class="crow"><div class="rn">sounds-like-ed</div><div class="rd">A <b>voice</b> skill — holds how Ed writes, applies it to any draft. Comes out like him, not the model.</div></div>
<div class="crow"><div class="rn">prompt-optimize</div><div class="rd">Sharpens a rough ask <b>before</b> the model runs it. No detour to a separate tool.</div></div>
<div class="crow"><div class="rn">session-close / kickoff</div><div class="rd">One <b>logs</b> what shipped; the other <b>reads it back</b> next session. Hands yesterday to today.</div></div>
<div class="crow"><div class="rn">historian</div><div class="rd">A <b>memory</b> skill — load-bearing decisions in one source of truth. Settled stays settled.</div></div>
<div class="crow"><div class="rn">pre-call-brief</div><div class="rd">A <b>research</b> skill — name + company in, the same sharp brief out, every time.</div></div>
<div class="ckick" style="margin-top:18px">How to build one this weekend</div>
<div class="cwiden"><span class="a">1.</span> <b>Pick the pain first</b> — what you keep doing the hard way.</div>
<div class="cwiden"><span class="a">2.</span> <b>Write down what "good" looks like</b> — like onboarding a new hire. Specific, not clever.</div>
<div class="cwiden"><span class="a">3.</span> <b>Give it the three things it can't guess</b> — the facts, the format, the rules.</div>
<div class="cwiden"><span class="a">4.</span> <b>Name it something you'll type</b> — boring and memorable. No swear words.</div>
<div class="cwiden"><span class="a">5.</span> <b>Use it, then fix it</b> — 80% right at first; add the rule that fixes each drift.</div>
<div class="ccall" style="margin-top:16px"><div class="l">The one rule most people skip</div><p>AI fails <b>confidently</b> — clean, well-reasoned, wrong, in the same tone as a correct answer. Build a known-answer check into the skills that matter. If it gets <b>that</b> wrong, the rails are off. Required step. Never skip it.</p></div>
<div class="cpay"><div class="pk">It isn't a bet on one vendor — the skill format is an open standard now</div><div class="pl">The model is becoming abundant. The discipline around the model is <span class="c">becoming scarce.</span></div></div>
<div class="cfoot"><span><b>Dobbles.AI</b> · The Geek That Can Speak · Verified June 2026 · v1.0</span><span class="nx">Next: <a href="/field-guide/what-is-a-project"><b>what an AI project actually is.</b></a></span></div>
</div>
</div>
<footer class="pgfoot"><span class="wm">Dobbles<span class="dot">.AI</span></span> — The Geek That Can Speak · Verified June 2026 · v1.0 · Ed@Dobbles.AI<br>
<span class="nx">Next: <a href="/field-guide/what-is-a-project"><b>what an AI project actually is.</b></a></span></footer>
</div>`;

const fg03Body = `<div class="wrap">
<header class="hero">${LOGO}<div class="kick">Field Guide 03 · What an AI Project Actually Is</div>
<h1>Every Recurring Task You Rebuild From Scratch Is a Project Waiting to Happen — A Job Hunt Is Just the Clearest One</h1><p class="lede">The job hunt is the clearest example of what an AI project actually is — a source, the things you use it for, and the limits that keep it honest. Here's the full piece, the setup, and the prompt that builds it.</p></header>

<p>Friends of mine at Diageo are going through job cuts right now. So I built them the thing I'd have wanted the last time the ground moved under me — not a resume template, a system. And in building it I realized it's the cleanest example I know of something most people get wrong about AI: what a project actually is, and why the good ones have a shape.</p>
<p>Most people only ever ask AI a question. They open a chat, paste the problem, take the answer, and start cold again next time. A project is the other thing — you teach the model a job once and it keeps it. But "saved context" undersells it, because the projects that actually work aren't just memory. They're governed. Every one worth building has the same three parts: a <strong>source</strong> (the one true thing everything else is built from), <strong>uses</strong> (the things you render from that source, again and again), and <strong>limits</strong> (the rules that keep the renders honest). Source, uses, limits. Get those three right and you've built something real. Get them vague and you've built a folder.</p>
<p>A job hunt makes all three impossible to ignore — which is exactly why it's the example.</p>

<h2>The source: one true thing, not three documents</h2>
<p>Most people treat the resume, the cover letter, and the interview answer as three separate writing jobs, re-excavating the same career history from a cold start each time. They aren't three jobs. They're three renders of one underlying thing — and almost nobody builds the thing.</p>
<p>The thing is a Career Story Bank. The distinction that does the work: a resume tells you <em>what</em> you did; the Bank tells you what you did, the situation you walked into, the move you specifically made, the number that moved, who noticed, and what it taught you. A resume is a render — the Action-and-Result lines, tightened, with everything else stripped for space. The stripped part is exactly what the other two documents run on. Throw it away to tighten a bullet and you'll reconstruct it later, badly, under pressure.</p>
<p>You don't write the Bank by hand. You make the AI interview you — role by role, asking for moments ("what was broken when you walked in?") instead of achievements ("list your accomplishments," which makes everyone blank, especially after a layoff). The accomplishment falls out of the story sideways. A good interview prompt also refuses to let the number go — "I don't have metrics" is almost never true, you've just never been forced to reconstruct it — and it builds the one line you'd never build yourself: a clean, truthful, unapologetic sentence for why you left, ready before an interviewer asks. Thirty minutes, once, and the source exists.</p>

<h2>The uses: extract once, deploy many</h2>
<p>With the source built, the uses are fast. Build the resume — render the Action and Result lines into tight bullets. Tailor the cover letter — pull the matching Situation-and-Lesson story for that job's pain point. And the one most people run backwards: match the job. The instinct is to read a posting and ask "how do I bend myself to fit this?" Invert it. Hand the AI the job description <em>and</em> the Bank and ask which of your actual stories map to the role's real requirements, and where's the honest gap you'd have to invent to cover. Strong overlap, chase it. Mostly gaps, skip it — or apply knowing exactly what's thin. That's triage, not spray-and-pray, and it tells the cover letter which stories to pull.</p>
<p>One source. Three uses. Minutes each, instead of hours re-deriving the same history from a blank page. You never re-excavate your own career again.</p>

<h2>The limits: the AI owns the phrasing, you own what's true</h2>
<p>Here's the part every "use AI for your job search" post skips, and it's the part that actually matters — because it's where the whole system lives or dies. The uses are convenience. The limits are the reason you can trust the output enough to send it.</p>
<p>Start with the limit the whole thing rests on. Ask a model to "make this resume stronger" and it leans toward embellishment — nudging an accurate "12%" toward "~15%," softening "helped lead" into "led," and, if you let it, padding in an impressive metric you never gave it. Researchers have a name for this — faithfulness hallucination — and the honest framing is that it's a documented tendency, not a guarantee. Sometimes the same model does the opposite and hedges your real numbers into mush. Either direction, it's editing your truth, and on a job hunt the cost of that edit isn't a clumsy sentence. It's the moment an interviewer asks you to walk through the number you don't actually have.</p>
<p>So the limit has to be bright, and it has to be set before the first bullet is written: <strong>every number traces back to the Bank. If it's not in the Bank, it doesn't go in the resume.</strong> When the model is tempted to make a story bigger than it was, it flags the temptation and you decide — keep it, kill it, or go find out whether it's true. The model is fast at the phrasing and useless at the truth. The truth stays yours. The phrasing is the AI's job. That split is the whole design — not a constraint bolted onto the system, but the thing that makes the system safe to use at all.</p>
<p>There's a second limit, quieter but real: the library is a curated shelf, not a storage closet. Once the Bank exists, the instinct is to pile in forty more files "so the AI has everything." It makes the project dumber. It drowns your best document in noise — and on some platforms, a crowded library shifts the model from reading your files in full to retrieving only the chunks it judges relevant, which means a thin, true Bank can quietly lose to a louder, longer file. On Claude, large projects automatically switch to that retrieval mode as project knowledge grows; its own help docs describe Claude searching for the most relevant pieces instead of loading every file whole. Perplexity is retrieval-first by design — it selectively extracts from long files rather than reading them word for word. Same failure mode, same fix: the Bank earns its place, almost nothing else does, and if a file doesn't change the output, it's noise — pull it.</p>
<p>Both limits are the same principle wearing two hats: <strong>AI doesn't replace your judgment — it requires it.</strong> The judgment about what's true, and about what belongs in front of the model, stays human. The AI is faster at the phrasing and worse than useless at the truth. That isn't a limitation you tolerate. It's the line you design the whole project around.</p>

<h2>Every project has this shape</h2>
<p>The resume is the most vivid example, not the only one. The same three parts run anything you rebuild from a cold start. The monthly board deck: source is the numbers plus last month's narrative; the limit is don't let it invent a trend that isn't in the data. The team's weekly reporting: source is the metric definitions; the limit is one agreed way to count, so the same question doesn't get answered two ways. The client memo: source is the engagement facts; the limit is nothing leaves the room that isn't true.</p>
<p>Source, uses, limits. Name all three and you've designed a real project instead of a folder you dump chats into. Skip the limits and you've built something that will eventually embarrass you — a deck that invented a trend, a report that counted two ways, a resume that rounded up. The job hunt just makes the stakes legible, because the cost of getting the limit wrong isn't an awkward slide. It's getting caught, in the one conversation you couldn't afford to lose.</p>

<h2>How to set it up — and the prompt that builds the source</h2>
<p>The Bank is the source. A project is where you keep it and render from it. Same move on every platform — a Project on Claude and ChatGPT, a Space on Perplexity.</p>
<div class="step"><div class="stepnum">1</div><div><h3 style="margin-top:0">Build the project</h3><p style="margin-top:2px">Open a Project (Claude / ChatGPT) or a Space (Perplexity). Name it for the job — "Job Search 2026," not "Stuff."</p></div></div>
<div class="step"><div class="stepnum">2</div><div><h3 style="margin-top:0">Run the interview, then drop the Bank in the files</h3><p style="margin-top:2px">Paste the prompt below into a chat, answer its questions, and take the Career Story Bank it hands you. Add that one document to the project's files. It's now the source of truth every chat carves from.</p></div></div>
<div class="step"><div class="stepnum">3</div><div><h3 style="margin-top:0">Render the three uses</h3><p style="margin-top:2px"><strong>Resume</strong> — "Using my Bank, draft resume bullets from the Action and Result lines." <strong>Match a job</strong> — paste a posting, ask which stories map to its real requirements and where the honest gap is. <strong>Cover letter</strong> — "Pull the Situation and Lesson that fits this job's pain point."</p></div></div>

<div class="limit"><div class="t">The limit that holds it together</div><p>The AI owns the phrasing. You own what's true. Every number traces back to the Bank — if it's not in the Bank, it doesn't go in the resume. AI doesn't replace your judgment about what's true. It requires it.</p></div>

<h3>The interview prompt — paste this into a fresh chat</h3>
<div class="promptcard"><div class="label">Build the source</div><button class="copybtn">Copy</button><pre>You're going to interview me to build my Career Story Bank — a structured record of my real accomplishments that I'll use to write my resume, cover letters, and prep for interviews. I was recently part of a layoff, so I'm building this from scratch and my head is full of years of work I haven't had to summarize before.

THE ONE RULE THAT MATTERS MOST: Ask exactly one question per message. If you ever put more than one question in a single message, you've broken the rule. This is a conversation, not a form. Wait for my answer before the next question.

WORK ROLE BY ROLE. Ask me to list my roles first, then go one at a time, most recent first.

DIG FOR STORIES, NOT "ACCOMPLISHMENTS." Ask about moments — "what was broken when you walked in?", "what did you fix that nobody asked you to?", "what were you known for?" Pull the accomplishment out of the story.

FOR EACH STORY, GET ME TO FIVE THINGS: the situation I found, what I specifically did, the number that moved, who noticed, what it taught me.

RESCUE ME ON NUMBERS. If I say "I don't have one," help me reconstruct a defensible estimate. Don't move on empty.

ONE SPECIAL PASS — THE LAYOFF. Near the end, help me build one clean, truthful, unapologetic line for why I left my last role.

AT THE END, hand me the whole Bank organized by role, each accomplishment as a block (Title, Situation, Action, Result, Recognition, Lesson), formatted so I can paste it into a project as my source-of-truth document.

Start by asking me to list my roles.</pre></div>

<div class="cheatwrap"><div class="cheatlabel">— Printable Cheat Sheet —</div>
<div class="cheat">
<div class="ctop">${LOGO_PLAIN}<div class="ctitle"><div class="ck">Field Guide 03 · Cheat Sheet</div><div class="ch">What an AI Project Actually Is</div></div></div>
<div class="crule"></div>
<div class="cintro">Most people only ever <b>ask</b> AI — start cold, every time. A project is the opposite: you teach it a job once and it keeps it. Every project worth building has the same three parts.</div>
<div class="cgrid">
<div class="ccol"><div class="cn coral">A Source</div><div class="cd">The one true thing everything else is built from.</div></div>
<div class="ccol"><div class="cn coral">Uses</div><div class="cd">The things you render from that source, again and again.</div></div>
<div class="ccol"><div class="cn coral">Limits</div><div class="cd">The rules that keep the renders honest.</div></div>
</div>
<div class="ckick">The Source <span class="w">— a Career Story Bank, not a resume</span></div>
<div class="csub">You don't write it. You make the AI interview you — one question at a time.</div>
<div class="ccall"><div class="l">Paste into a fresh chat</div><p>"Interview me to build my <b>Career Story Bank</b>. <b>One question at a time</b>, role by role. Ask about moments, not achievements. For each: the situation, what I did, <b>the number that moved</b>, who noticed, what it taught me. <b>Rescue me on the number</b> — don't move on empty. Hand me the whole Bank as STAR-style blocks."</p></div>
<div class="ckick">The Uses <span class="w">— extract once, deploy many</span></div>
<div class="cgrid">
<div class="ccol"><div class="cn">Build the resume</div><div class="cd">Action + Result lines, tightened — every one tracing to the Bank.</div></div>
<div class="ccol"><div class="cn">Match the job</div><div class="cd">Don't bend yourself to the posting. Ask which stories fit — and where's the gap.</div></div>
<div class="ccol"><div class="cn">Tailor the letter</div><div class="cd">Pull the matching Situation + Lesson for that job's pain point.</div></div>
</div>
<div class="ckick">The Limits <span class="w">— what keeps the renders honest</span></div>
<div class="cgrid">
<div class="ccol lim"><div class="cn">The AI owns the phrasing. You own what's true.</div><div class="cd">It leans toward embellishment — 12% becomes "~15%." So: <b>every number traces back to the Bank. If it's not in the Bank, it doesn't go in the resume.</b></div></div>
<div class="ccol lim"><div class="cn">A curated shelf, not a storage closet.</div><div class="cd">Forty extra files make the project dumber. <b>If a file doesn't change the output, it's noise. Pull it.</b></div></div>
</div>
<div class="ckick">The job hunt was just the door — every project has this shape</div>
<div class="cwiden"><span class="a">&rarr;</span> <b>The board deck</b> — source: the numbers + last month's narrative. Limit: don't let it invent a trend.</div>
<div class="cwiden"><span class="a">&rarr;</span> <b>The weekly reporting</b> — source: the definitions. Limit: one agreed way to count.</div>
<div class="cwiden"><span class="a">&rarr;</span> <b>The client memo</b> — source: the engagement facts. Limit: nothing leaves that isn't true.</div>
<div class="cpay"><div class="pk">Get the source, the uses, and the limits right — you've built a real project</div><div class="pl">AI doesn't replace your judgment <span class="c">— it requires it.</span></div></div>
<div class="cfoot"><span><b>Dobbles.AI</b> · The Geek That Can Speak · Verified June 2026 · v1.0</span><span class="nx">Full prompt at <b>dobbles.ai</b></span></div>
</div>
</div>
<footer class="pgfoot"><span class="wm">Dobbles<span class="dot">.AI</span></span> — The Geek That Can Speak · Verified June 2026 · v1.0 · Ed@Dobbles.AI<br>
<span class="nx">Next: <b>run a sharp prompt through deep research across two or three AIs to see where they disagree.</b></span></footer>
</div>`;

export const FIELD_GUIDES: FieldGuide[] = [
  {
    slug: "build-your-first-skill",
    num: "01",
    title: "Build Your First Skill",
    shortTitle: "Build Your First Skill",
    date: "June 2026",
    subtitle:
      "Take the prompt-optimizer you'd normally paste every time, save it once, and make every prompt you write sharper — automatically, with nothing to paste.",
    body: fg01Body,
  },
  {
    slug: "tools-cut-to-fit",
    num: "02",
    title: "Tools Cut to Fit: How to Build AI Skills for the Way You Actually Work",
    shortTitle: "Tools Cut to Fit",
    date: "June 2026",
    subtitle:
      "No code. One weekend. A method you can copy. What a skill is, the five I run every day, and the exact way to build your own.",
    body: fg02Body,
  },
  {
    slug: "what-is-a-project",
    num: "03",
    title: "Every Recurring Task You Rebuild From Scratch Is a Project Waiting to Happen",
    shortTitle: "What an AI Project Actually Is",
    date: "June 2026",
    subtitle:
      "The job hunt is the clearest example of what an AI project actually is — a source, the things you use it for, and the limits that keep it honest.",
    body: fg03Body,
  },
];

export function getFieldGuide(slug: string): FieldGuide | undefined {
  return FIELD_GUIDES.find((g) => g.slug === slug);
}

import { useOpenGraph } from "@/hooks/useOpenGraph";

/**
 * Mechanical port of the approved Dobbles.AI public-site spec (brief #1167).
 * Styles are scoped under `.dai-landing` so they cannot leak into the rest
 * of the app (hub, other routes). Montserrat + Plausible are already loaded
 * globally in index.html, so they are not re-injected here.
 */
export default function PublicLanding() {
  useOpenGraph({
    title: "Dobbles.AI — Ed Dobbles",
    description:
      "Ed Dobbles builds market-intelligence systems for categories where the data doesn't exist yet — and runs them with AI doing the work and judgment doing the deciding.",
    type: "website",
    url: "https://dobbles.ai/",
  });

  return (
    <div className="dai-landing">
      <style>{`
        .dai-landing{--navy:#060A57;--coral:#DB5461;--cream:#F5F4ED;--ink:#0D0D0D;--sky:#3273DB;--cyan:#85E4FD;--offwhite:#F7FBFE;--gray:#6B7088;}
        .dai-landing,.dai-landing *{margin:0;padding:0;box-sizing:border-box}
        html{scroll-behavior:smooth}
        .dai-landing{font-family:'Montserrat',sans-serif;font-weight:400;color:var(--ink);background:var(--offwhite);line-height:1.65;font-size:16px}
        .dai-landing a{color:var(--sky);text-decoration:none}
        .dai-landing a:focus-visible,.dai-landing button:focus-visible{outline:3px solid var(--cyan);outline-offset:3px}
        .dai-landing .dai-wrap{max-width:1080px;margin:0 auto;padding:0 28px}
        .dai-landing .dai-hero{background:var(--navy);color:var(--offwhite);min-height:88vh;display:flex;flex-direction:column}
        .dai-landing .dai-nav{display:flex;justify-content:space-between;align-items:center;padding:28px 0}
        .dai-landing .dai-lockup{display:flex;align-items:center;gap:10px;font-weight:700;font-size:18px;color:var(--offwhite);letter-spacing:.01em}
        .dai-landing .dai-lockup .dai-ai{color:var(--coral)}
        .dai-landing .dai-stack{display:flex;align-items:flex-end;gap:3px;height:20px}
        .dai-landing .dai-stack span{width:4px;background:var(--offwhite);border-radius:1px}
        .dai-landing .dai-stack span:nth-child(1){height:6px}
        .dai-landing .dai-stack span:nth-child(2){height:10px}
        .dai-landing .dai-stack span:nth-child(3){height:14px}
        .dai-landing .dai-stack span:nth-child(4){height:20px;background:var(--coral)}
        .dai-landing .dai-nav-links{display:flex;gap:28px;font-size:13px;font-weight:600;letter-spacing:.06em;text-transform:uppercase}
        .dai-landing .dai-nav-links a{color:var(--cyan)}
        .dai-landing .dai-hero-body{flex:1;display:flex;flex-direction:column;justify-content:center;padding:64px 0 88px}
        .dai-landing .dai-kicker{font-size:12px;font-weight:600;letter-spacing:.22em;text-transform:uppercase;color:var(--cyan);margin-bottom:26px}
        .dai-landing .dai-hero h1{font-weight:800;font-size:clamp(40px,6.2vw,72px);line-height:1.06;letter-spacing:-.015em;color:var(--offwhite);max-width:15ch}
        .dai-landing .dai-hero h1 em{font-style:normal;color:var(--coral)}
        .dai-landing p.dai-lede{margin-top:30px;max-width:56ch;font-size:18px;line-height:1.7;color:var(--offwhite);opacity:.92}
        .dai-landing .dai-hero-stack{display:flex;align-items:flex-end;gap:10px;height:120px;margin-bottom:44px}
        .dai-landing .dai-hero-stack i{display:block;width:16px;border-radius:2px;background:var(--offwhite);opacity:.9;transform-origin:bottom;animation:dai-rise .7s cubic-bezier(.2,.7,.2,1) both}
        .dai-landing .dai-hero-stack i:nth-child(1){height:34px;animation-delay:.1s}
        .dai-landing .dai-hero-stack i:nth-child(2){height:58px;animation-delay:.25s}
        .dai-landing .dai-hero-stack i:nth-child(3){height:84px;animation-delay:.4s}
        .dai-landing .dai-hero-stack i:nth-child(4){height:120px;background:var(--coral);opacity:1;animation-delay:.6s}
        @keyframes dai-rise{from{transform:scaleY(0)}to{transform:scaleY(1)}}
        @media (prefers-reduced-motion:reduce){.dai-landing .dai-hero-stack i{animation:none}}
        .dai-landing .dai-work{background:var(--cream);padding:96px 0}
        .dai-landing .dai-section-kicker{font-size:12px;font-weight:600;letter-spacing:.22em;text-transform:uppercase;color:var(--navy);margin-bottom:14px}
        .dai-landing .dai-work h2,.dai-landing .dai-about h2,.dai-landing .dai-writing h2{font-weight:800;font-size:clamp(28px,3.6vw,40px);color:var(--navy);letter-spacing:-.01em;margin-bottom:14px}
        .dai-landing .dai-work .dai-intro{max-width:60ch;color:var(--ink);margin-bottom:52px}
        .dai-landing .dai-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:26px}
        .dai-landing .dai-card{background:var(--offwhite);border:1px solid #E4E3DA;border-radius:10px;padding:34px 30px 30px;display:flex;flex-direction:column}
        .dai-landing .dai-card h3{font-weight:700;font-size:20px;color:var(--navy);margin-bottom:4px}
        .dai-landing .dai-card .dai-domain{font-size:12px;font-weight:600;letter-spacing:.05em;color:var(--gray);margin-bottom:16px}
        .dai-landing .dai-card p{font-size:14.5px;line-height:1.7;color:var(--ink);flex:1}
        .dai-landing .dai-card .dai-cta{margin-top:24px;font-weight:600;font-size:14px;color:var(--sky)}
        .dai-landing .dai-card .dai-cta:hover{text-decoration:underline}
        .dai-landing .dai-card .dai-tag{display:inline-block;font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--gray);border:1px solid #D8D7CE;border-radius:999px;padding:3px 10px;margin-bottom:14px;align-self:flex-start}
        .dai-landing .dai-about{background:var(--offwhite);padding:96px 0}
        .dai-landing .dai-about-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:start}
        .dai-landing .dai-about p{margin-bottom:18px;max-width:58ch}
        .dai-landing .dai-career{margin-top:8px;font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--gray)}
        .dai-landing .dai-principle{background:var(--navy);color:var(--offwhite);border-radius:10px;padding:36px 34px}
        .dai-landing .dai-principle .dai-pk{font-size:12px;font-weight:600;letter-spacing:.22em;text-transform:uppercase;color:var(--cyan);margin-bottom:16px}
        .dai-landing .dai-principle blockquote{font-weight:700;font-size:22px;line-height:1.45;color:var(--offwhite)}
        .dai-landing .dai-writing{background:var(--navy);color:var(--offwhite);padding:96px 0}
        .dai-landing .dai-writing h2{color:var(--offwhite)}
        .dai-landing .dai-writing .dai-section-kicker{color:var(--cyan)}
        .dai-landing .dai-writing p{max-width:58ch;opacity:.92;margin-bottom:34px}
        .dai-landing .dai-contact-row{display:flex;gap:18px;flex-wrap:wrap}
        .dai-landing .dai-btn{display:inline-block;font-weight:600;font-size:14px;padding:13px 26px;border-radius:6px;border:1.5px solid var(--cyan);color:var(--cyan)}
        .dai-landing .dai-btn:hover{background:rgba(133,228,253,.08)}
        .dai-landing .dai-btn.dai-primary{background:var(--coral);border-color:var(--coral);color:var(--offwhite)}
        .dai-landing .dai-btn.dai-primary:hover{filter:brightness(1.06)}
        .dai-landing .dai-footer{background:var(--navy);border-top:1px solid rgba(247,251,254,.14);padding:26px 0;color:var(--offwhite)}
        .dai-landing .dai-foot{display:flex;justify-content:space-between;align-items:center;font-size:12px;letter-spacing:.05em;opacity:.75}
        @media (max-width:840px){
          .dai-landing .dai-cards{grid-template-columns:1fr}
          .dai-landing .dai-about-grid{grid-template-columns:1fr}
          .dai-landing .dai-nav-links{display:none}
          .dai-landing .dai-hero{min-height:76vh}
        }
      `}</style>

      <header className="dai-hero">
        <div className="dai-wrap">
          <nav className="dai-nav" aria-label="Primary">
            <span className="dai-lockup" aria-label="Dobbles dot A I">
              <span className="dai-stack" aria-hidden="true"><span></span><span></span><span></span><span></span></span>
              Dobbles<span className="dai-ai">.AI</span>
            </span>
            <div className="dai-nav-links">
              <a href="#work">Work</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>
          </nav>
          <div className="dai-hero-body">
            <div className="dai-hero-stack" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
            <p className="dai-kicker">Ed Dobbles · Founder, Dobbles.AI</p>
            <h1>AI doesn't replace judgment. It <em>requires</em> it.</h1>
            <p className="dai-lede">I build market-intelligence systems for categories where the data doesn't exist yet — cannabis digital shelves, on-premise beverage menus. AI agents do the capture, the verification, and the shipping. I make the calls that matter.</p>
          </div>
        </div>
      </header>

      <section className="dai-work" id="work">
        <div className="dai-wrap">
          <p className="dai-section-kicker">The Work</p>
          <h2>Three lines. One operating system.</h2>
          <p className="dai-intro">Each product runs on the same discipline: locked panels, reproducible queries, and a certification gate a human still owns. If a number ships, it traces to a query.</p>
          <div className="dai-cards">
            <article className="dai-card">
              <span className="dai-tag">Product · Live</span>
              <h3>DispensaryIQ</h3>
              <p className="dai-domain">dispensaryintelligence.com</p>
              <p>Weekly digital-shelf intelligence for cannabis retail. Brand, product, price, and placement — captured from dispensary online menus across New York, Illinois, and New Jersey on a locked weekly panel, certified before it ships.</p>
              <a className="dai-cta" href="https://dispensaryintelligence.com">Visit DispensaryIQ →</a>
            </article>
            <article className="dai-card">
              <span className="dai-tag">Product · In build</span>
              <h3>MenuIntelligence</h3>
              <p className="dai-domain">menuintelligence.com</p>
              <p>On-premise menu intelligence for the beverage industry. What's on the menu, where, at what price — bar and restaurant menus captured and structured at market scale.</p>
              <a className="dai-cta" href="mailto:ed@dobbles.ai?subject=MenuIntelligence">Inquire →</a>
            </article>
            <article className="dai-card">
              <span className="dai-tag">Advisory</span>
              <h3>AI Operating Advisory</h3>
              <p className="dai-domain">dobbles.ai</p>
              <p>I run a one-person company that doesn't operate like one — AI agents execute, verify, and report; I decide. I advise operators and teams building the same: agent workflows, data pipelines, and the judgment layer that makes them trustworthy.</p>
              <a className="dai-cta" href="mailto:ed@dobbles.ai?subject=Advisory">Start a conversation →</a>
            </article>
          </div>
        </div>
      </section>

      <section className="dai-about" id="about">
        <div className="dai-wrap">
          <div className="dai-about-grid">
            <div>
              <p className="dai-section-kicker">About</p>
              <h2>Ed Dobbles</h2>
              <p>Twenty-five years running data and analytics organizations — Best Buy, SuperValu, H&amp;R Block, Diageo, Overproof. $300M+ in documented enterprise impact, budgets to $17M, teams to 60. The pattern across all of it: the analytics that matter are the ones an executive will actually act on.</p>
              <p>Dobbles.AI is what that career built toward — a one-person company that doesn't operate like one. Agents run the pipelines: capture, verification, shipping. Judgment stays human. That's not a limitation of the tools. It's the design.</p>
              <p>DBA, Rutgers. MS in Marketing Research, Wisconsin (A.C. Nielsen Center). BA, Michigan State. And two years as a volunteer EMT crew chief — the best training there is for making calm decisions with incomplete data.</p>
              <p className="dai-career">Diageo · H&amp;R Block · SuperValu · Best Buy · Overproof</p>
            </div>
            <aside className="dai-principle">
              <p className="dai-pk">Operating Principle</p>
              <blockquote>The pipelines run on autonomy. The numbers ship on judgment.</blockquote>
            </aside>
          </div>
        </div>
      </section>

      <section className="dai-writing" id="contact">
        <div className="dai-wrap">
          <p className="dai-section-kicker">Contact</p>
          <h2>Talk to me.</h2>
          <p>Product questions, advisory inquiries, or an argument about where AI belongs in your operation — email is fastest, or grab time on my calendar.</p>
          <div className="dai-contact-row">
            <a className="dai-btn dai-primary" href="mailto:ed@dobbles.ai">ed@dobbles.ai</a>
            <a className="dai-btn" href="https://calendar.app.google/Jdv3rCpQUJzviwqQ8">Book 30 minutes</a>
            <a className="dai-btn" href="https://calendar.app.google/9y8TUoUXSpobmtsa7">Book 1 hour</a>
            <a className="dai-btn" href="https://www.linkedin.com/in/ed-dobbles/">LinkedIn</a>
          </div>
        </div>
      </section>

      <footer className="dai-footer">
        <div className="dai-wrap dai-foot">
          <span>© 2026 Dobbles.AI LLC · Bloomington, MN</span>
          <span>Dobbles<span style={{ color: "var(--coral)" }}>.AI</span></span>
        </div>
      </footer>
    </div>
  );
}

import type { CSSProperties } from "react";

const links = {
  earlyAccess:
    "https://docs.google.com/forms/d/e/1FAIpQLScGM-v_mSg5SoTrNBwWrpXpF_W6tJH9nIqA9L_0vlGhhOxyKw/viewform",
  instagram: "https://www.instagram.com/glossandgit/",
  linkedin: "https://www.linkedin.com/company/glossandgit/",
  luma: "https://luma.com/ioqmv0zu",
};

const proofPoints = [
  { value: "400+", label: "women applied for the first Seattle gathering" },
  { value: "75", label: "attendees joined the rooftop launch event" },
  { value: "70+", label: "women showed up for the second in-person event" },
  { value: "5", label: "guests flew in from outside Seattle" },
];

const eventNotes = [
  "LinkedIn branding workshops for women building careers and thought leadership in tech.",
  "Curated rooms with founders, VPs, directors, engineers, creators, and AI builders.",
  "High-touch social experiences, from rooftop views to tea, pastries, and thoughtful details.",
];

const hostCards = [
  {
    name: "Anjali Viramgama",
    role: "Co-founder",
    accent: "AI, community, and personal brand systems",
  },
  {
    name: "Sundas Khalid",
    role: "Co-founder",
    accent: "Tech leadership, storytelling, and curated IRL spaces",
  },
];

function App() {
  return (
    <main>
      <section className="hero section-shell">
        <nav className="nav" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Gloss and Git home">
            <span className="brand-mark">G&amp;G</span>
            <span>Gloss &amp; Git</span>
          </a>
          <div className="nav-links">
            <a href="#why">Why</a>
            <a href="#events">Events</a>
            <a href="#hosts">Hosts</a>
          </div>
        </nav>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Seattle women in tech and AI</p>
            <h1>Where polished ambition meets real technical community.</h1>
            <p className="hero-lede">
              Gloss and Git is a highly curated circle for women shaping the
              future of technology, AI, leadership, and creative careers.
            </p>
            <div className="hero-actions" aria-label="Primary actions">
              <a className="button button-primary" href={links.earlyAccess} target="_blank" rel="noreferrer">
                Get early access
              </a>
              <a className="button button-secondary" href={links.instagram} target="_blank" rel="noreferrer">
                Follow on Instagram
              </a>
            </div>
          </div>

          <div className="hero-card" aria-label="Gloss and Git event preview">
            <div className="card-topline">
              <span>invite-only</span>
              <span>{"{ git push --gloss }"}</span>
            </div>
            <div className="orbital-card">
              <div className="glass-orb" />
              <p className="script-label">Gloss &amp; {"{git}"}</p>
              <h2>IRL rooms for women building what comes next.</h2>
              <p>
                Rooftop launches, branding workshops, AI conversations, and
                social spaces designed to feel warm, intentional, and rare.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="proof section-shell" aria-label="Community proof">
        {proofPoints.map((point) => (
          <article key={point.value}>
            <strong>{point.value}</strong>
            <span>{point.label}</span>
          </article>
        ))}
      </section>

      <section className="story section-shell" id="why">
        <div>
          <p className="eyebrow">Why it exists</p>
          <h2>Because women in tech deserve rooms that see the whole person.</h2>
        </div>
        <p>
          The community was built for ambitious women who want more than another
          panel or pitch fest. It creates a setting where career pivots, AI
          ideas, personal brands, compensation, creativity, and friendship can
          exist in the same conversation.
        </p>
      </section>

      <section className="events section-shell" id="events">
        <div className="section-heading">
          <p className="eyebrow">Event energy</p>
          <h2>High-caliber conversations, styled with care.</h2>
        </div>
        <div className="event-layout">
          <div className="event-panel">
            <p className="panel-kicker">Recent gatherings</p>
            <h3>Brand-building workshops, rooftop socials, and AI-focused community.</h3>
            <p>
              Gloss and Git blends tactical career programming with spaces that
              feel like a celebration: polished dress codes, memorable food,
              thoughtful photography, and a room curated for generous connection.
            </p>
            <a href={links.luma} target="_blank" rel="noreferrer">
              View past Luma event
            </a>
          </div>
          <div className="note-stack">
            {eventNotes.map((note, index) => (
              <article key={note} style={{ "--note-index": index } as CSSProperties}>
                <span>0{index + 1}</span>
                <p>{note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="hosts section-shell" id="hosts">
        <div className="section-heading">
          <p className="eyebrow">Hosted by</p>
          <h2>Built by founders with audience, taste, and technical fluency.</h2>
        </div>
        <div className="host-grid">
          {hostCards.map((host) => (
            <article className="host-card" key={host.name}>
              <span>{host.role}</span>
              <h3>{host.name}</h3>
              <p>{host.accent}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta section-shell">
        <div className="cta-card">
          <p className="eyebrow">Join the list</p>
          <h2>Be first to hear about the next Gloss and Git room.</h2>
          <p>
            Get early access to upcoming Seattle events, curated conversations,
            and community moments for women in tech and AI.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={links.earlyAccess} target="_blank" rel="noreferrer">
              Get early access
            </a>
            <a className="button button-secondary" href={links.linkedin} target="_blank" rel="noreferrer">
              Follow on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;

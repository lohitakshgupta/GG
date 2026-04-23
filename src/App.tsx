import { useState } from "react";

const links = {
  earlyAccess:
    "https://docs.google.com/forms/d/e/1FAIpQLScGM-v_mSg5SoTrNBwWrpXpF_W6tJH9nIqA9L_0vlGhhOxyKw/viewform",
  instagram: "https://www.instagram.com/glossandgit/",
  linkedin: "https://www.linkedin.com/company/glossandgit/",
  luma: "https://luma.com/ioqmv0zu",
};

const proofPoints = [
  { value: "400+", label: "applications for a room built with intention" },
  { value: "75", label: "women at the rooftop launch" },
  { value: "70+", label: "builders at the next IRL gathering" },
  { value: "5", label: "guests flew in to be there" },
];

const photoCards = [
  {
    className: "photo-card--rooftop",
    src: "/images/rooftop-group.jpg",
    alt: "Gloss and Git rooftop group photo with the Seattle skyline",
    kicker: "Rooftop launch",
    title: "A skyline room full of women building in tech.",
  },
  {
    className: "photo-card--workshop",
    src: "/images/workshop-speakers.jpg",
    alt: "Gloss and Git workshop speakers presenting",
    kicker: "Creative workshop",
    title: "Brand systems, AI tools, and career storytelling.",
  },
  {
    className: "photo-card--dessert",
    src: "/images/dessert-table.jpg",
    alt: "Gloss and Git dessert table with flowers and pastries",
    kicker: "Soiree details",
    title: "Macarons, florals, soft light, and thoughtful hosting.",
  },
];

const eventNotes = [
  "Come polished. Come curious. Come ready to meet the women you will text after the event.",
  "A room for engineers, AI builders, founders, creators, PMs, leaders, and career switchers.",
  "The vibe is equal parts LinkedIn strategy session, rooftop soiree, and group chat magic.",
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

type PhotoCardProps = {
  alt: string;
  className: string;
  kicker: string;
  src: string;
  title: string;
};

function PhotoCard({ alt, className, kicker, src, title }: PhotoCardProps) {
  const [isLoaded, setIsLoaded] = useState(true);

  return (
    <figure className={`photo-card ${className} ${isLoaded ? "" : "photo-card--fallback"}`}>
      {isLoaded ? <img src={src} alt={alt} onError={() => setIsLoaded(false)} /> : null}
      <figcaption>
        <span>{kicker}</span>
        <strong>{title}</strong>
      </figcaption>
    </figure>
  );
}

function App() {
  return (
    <main>
      <section className="hero" id="top">
        <nav className="nav section-shell" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Gloss and Git home">
            <span className="brand-mark">G&amp;G</span>
            <span>Gloss &amp; Git</span>
          </a>
          <div className="nav-links">
            <a href="#photos">Photos</a>
            <a href="#why">Why</a>
            <a href="#hosts">Hosts</a>
          </div>
        </nav>

        <div className="hero-grid section-shell">
          <div className="hero-copy">
            <p className="eyebrow">Seattle women in tech and AI</p>
            <h1>Pink skies. Sharp minds. Soft landing.</h1>
            <p className="hero-lede">
              Gloss and Git is the invite-worthy community where women in tech
              trade notes on AI, careers, content, leadership, and the kind of
              rooms that make ambition feel beautiful.
            </p>
            <div className="hero-actions" aria-label="Primary actions">
              <a className="button button-primary" href={links.earlyAccess} target="_blank" rel="noreferrer">
                Get early access
              </a>
              <a className="button button-secondary" href={links.instagram} target="_blank" rel="noreferrer">
                Follow the sparkle
              </a>
            </div>
          </div>

          <div className="hero-art" aria-label="Gloss and Git visual collage">
            <img className="brand-poster" src="/images/gloss-git-logo.jpg" alt="Gloss and Git pink checkerboard logo" />
            <div className="code-note">
              <span>git commit -m</span>
              <strong>"found my room"</strong>
            </div>
            <div className="floating-tag tag-ai">AI</div>
            <div className="floating-tag tag-tech">Tech</div>
            <div className="floating-tag tag-networking">Networking</div>
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

      <section className="photo-strip section-shell" id="photos">
        <div className="section-heading">
          <p className="eyebrow">The room</p>
          <h2>Part tech salon, part pink tablecloth dream.</h2>
        </div>
        <div className="photo-grid">
          {photoCards.map((card) => (
            <PhotoCard key={card.src} {...card} />
          ))}
        </div>
      </section>

      <section className="story section-shell" id="why">
        <div>
          <p className="eyebrow">Why it exists</p>
          <h2>Because technical women deserve community with taste.</h2>
        </div>
        <p>
          The community was built for ambitious women who want more than another
          panel or pitch fest. It makes space for career pivots, AI ideas,
          personal brands, compensation, creativity, confidence, and friendship
          in the same conversation.
        </p>
      </section>

      <section className="events section-shell">
        <div className="event-layout">
          <div className="event-panel">
            <p className="panel-kicker">Event energy</p>
            <h2>Soft visuals. Serious momentum.</h2>
            <p>
              Gloss and Git blends tactical programming with social spaces that
              feel like a celebration: polished dress codes, memorable bites,
              thoughtful photography, and a room curated for generous connection.
            </p>
            <a href={links.luma} target="_blank" rel="noreferrer">
              View the past Luma event
            </a>
          </div>
          <div className="note-stack">
            {eventNotes.map((note, index) => (
              <article key={note}>
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
          <h2>Your next favorite tech room might be pink.</h2>
          <p>
            Get early access to upcoming Seattle events, curated conversations,
            and community moments for women in tech and AI.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={links.earlyAccess} target="_blank" rel="noreferrer">
              Get early access
            </a>
            <a className="button button-secondary" href={links.linkedin} target="_blank" rel="noreferrer">
              <span className="linkedin-mark">in</span>
              Follow on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;

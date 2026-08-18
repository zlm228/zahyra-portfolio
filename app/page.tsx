import Image from "next/image";

const projects = [
  {
    number: "01",
    name: "Be1Space",
    type: "Product · Frontend · Accessibility",
    description: "A web app helping NYU students discover affordable, accessible study spaces across New York City.",
    contribution: "Built discovery, favorites, authentication, profiles, and location-based browsing with an accessibility-first approach.",
    stack: ["React", "Next.js", "Tailwind", "Supabase"],
    theme: "belspace",
    status: "Student product",
    href: "https://be1space.vercel.app/",
    image: "/projects/be1space.png",
    imageAlt: "Be1Space landing page with a starry navy background and Find Your Perfect Space headline",
  },
  {
    number: "02",
    name: "HVAC Margin Rescue",
    type: "Data · AI · Full stack",
    description: "A datathon project that surfaced financially at-risk HVAC projects and made complex margin data actionable.",
    contribution: "Connected AI analysis to the frontend and translated project data into clear risk signals for faster decision-making.",
    stack: ["Python", "FastAPI", "Azure AI", "React"],
    theme: "hvac",
    status: "Datathon project",
    href: "https://the-hvac-margin-rescue-challenge.vercel.app/",
    image: "/projects/hvac-margin-rescue.png",
    imageAlt: "MarginGuard dashboard showing HVAC project risk, critical projects, warnings, and average margin",
  },
  {
    number: "03",
    name: "Eclipse at JGM Innovation",
    type: "AI · UI/UX · Automation",
    description: "An internal AI-powered application developed during my internship at JGM Innovation.",
    contribution: "Contributed across UI/UX, prompt design, feature development, workflow automation, and chatbot experience improvements.",
    stack: ["Prompt design", "UI/UX", "Automation", "AI"],
    theme: "eclipse",
    status: "Internship experience",
    href: null,
    image: "/projects/eclipse.png",
    imageAlt: "JGM Eclipse sign-in interface with a soft blue and pink gradient surrounding a glass-like login card",
  },
];

const toolkit = [
  { category: "Languages", items: ["Python", "JavaScript", "TypeScript", "Java", "SQL"] },
  { category: "Build", items: ["React", "Next.js", "Tailwind CSS", "FastAPI", "REST APIs", "Supabase"] },
  { category: "Data & AI", items: ["pandas", "NumPy", "Matplotlib", "Azure AI", "Prompt engineering"] },
  { category: "Create & organize", items: ["Figma", "Git", "GitHub", "Google Apps Script", "Zapier"] },
];

function SectionHeading({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{children}</h2></div>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Zahyra Otero, home">zo.</a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#about">About</a><a href="#projects">Projects</a><a href="#toolkit">Toolkit</a><a href="#connect">Connect</a>
        </nav>
        <details className="mobile-nav">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            <a href="#about">About</a><a href="#projects">Projects</a><a href="#toolkit">Toolkit</a><a href="#connect">Connect</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="home">
        <div className="glow glow-one" aria-hidden="true" /><div className="glow glow-two" aria-hidden="true" />
        <span className="sparkle sparkle-one" aria-hidden="true">✦</span><span className="sparkle sparkle-two" aria-hidden="true">✦</span>
        <div className="hero-content">
          <p className="eyebrow">Hello, I&apos;m</p><h1>Zahyra Otero</h1>
          <p className="hero-kicker">Data · Product · Thoughtful Technology</p><div className="rule" />
          <p className="hero-meta">NYU · Data Science Major · Business Studies Minor · Class of 2028</p>
          <p className="hero-intro">I like turning everyday problems into useful technology that is easy and enjoyable to use.</p>
          <a className="button" href="#projects">Explore my work <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="section-inner"><SectionHeading eyebrow="Who I am">A little about me <span aria-hidden="true">✦</span></SectionHeading>
          <div className="about-grid">
            <div className="about-copy">
              <p>I&apos;m <strong>Zahyra</strong>, a first-generation Latina and Data Science student at <strong>New York University</strong> exploring the intersection of data, software, AI, and product. I&apos;m drawn to spaces where people with backgrounds like mine are still underrepresented—not only because I want a seat at the table, but because I want others like me to see themselves there too.</p>
              <p>I like turning problems I notice in everyday life into technology that makes things simpler, clearer, and more useful. I care about understanding who a problem affects and creating products that feel <em>accessible, intentional, and genuinely enjoyable to use.</em></p>
              <p>I&apos;m especially interested in consumer technology, beauty, entertainment, and fintech—industries that shape how people live, connect, and make decisions every day. I want to help build products and services that make those experiences more accessible, especially for people who have historically been overlooked.</p>
            </div>
            <div className="about-aside">
              <blockquote><p>“notice a problem → understand who it affects → build something useful”</p><cite>My approach</cite></blockquote>
              <div className="aside-note"><p className="eyebrow">Beyond the build ♡</p><p>Outside of coding, I love all things beauty and skincare, exploring NYC, and adding way too many cafés and restaurants to my list of places to try. I&apos;m always down to try a new cuisine, find a cute café with good pastries, or test a makeup or skincare product I&apos;ve been eyeing. I also love anything creative and aesthetically pleasing, which definitely finds its way into pretty much everything I do.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section projects" id="projects">
        <div className="section-inner"><SectionHeading eyebrow="What I've built">Projects &amp; experience <span aria-hidden="true">✦</span></SectionHeading>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <div className={`project-visual ${project.theme}`}>
                  <span className="project-number">{project.number}</span>
                  {project.image ? (
                    project.href ? (
                      <a className="project-image-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} live project`}>
                        <Image className="project-image" src={project.image} alt={project.imageAlt ?? ""} fill sizes="(max-width: 800px) 100vw, 42vw" />
                      </a>
                    ) : (
                      <div className="project-image-link project-image-static">
                        <Image className="project-image" src={project.image} alt={project.imageAlt ?? ""} fill sizes="(max-width: 800px) 100vw, 42vw" />
                      </div>
                    )
                  ) : (
                    <div className="visual-window" aria-hidden="true">
                      <div className="visual-top"><i /><i /><i /></div>
                      <div className="visual-body"><div className="visual-line wide"/><div className="visual-line"/><div className="visual-panels"><i/><i/><i/></div></div>
                    </div>
                  )}
                  <span className="visual-label">{project.status}</span>
                </div>
                <div className="project-content">
                  <p className="project-type">{project.type}</p><h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="contribution"><span>My contribution</span><p>{project.contribution}</p></div>
                  <ul className="tags" aria-label={`${project.name} technologies`}>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
                  {project.href && <a className="project-link" href={project.href} target="_blank" rel="noreferrer">View live project <span aria-hidden="true">↗</span></a>}
                </div>
                {project.theme === "eclipse" && (
                  <details className="interface-gallery">
                    <summary><span>Explore the interface</span><span aria-hidden="true">↓</span></summary>
                    <div className="interface-gallery-intro">
                      <p className="eyebrow">Selected interface moments</p>
                      <p>A closer look at the visual system, workspace hierarchy, and responsive themes I helped shape.</p>
                    </div>
                    <div className="interface-gallery-grid">
                      <figure>
                        <a href="/projects/eclipse.png" target="_blank" aria-label="Enlarge Eclipse authentication interface">
                          <Image src="/projects/eclipse.png" alt="JGM Eclipse authentication interface with a glass-like card on a soft blue and pink gradient" fill sizes="(max-width: 800px) 100vw, 33vw" />
                        </a>
                        <figcaption><span>01 — Authentication</span><p>A focused Microsoft sign-in flow that makes enterprise access feel calm and approachable.</p></figcaption>
                      </figure>
                      <figure>
                        <a href="/projects/eclipse-chat-light.png" target="_blank" aria-label="Enlarge Eclipse light workspace interface">
                          <Image src="/projects/eclipse-chat-light.png" alt="Eclipse chatbot workspace in light mode with conversation history, reusable commands, and messaging controls" fill sizes="(max-width: 800px) 100vw, 33vw" />
                        </a>
                        <figcaption><span>02 — Chat workspace</span><p>Conversation history, reusable commands, and core messaging controls organized into a clear workspace.</p></figcaption>
                      </figure>
                      <figure>
                        <a href="/projects/eclipse-chat-dark.png" target="_blank" aria-label="Enlarge Eclipse dark mode interface">
                          <Image src="/projects/eclipse-chat-dark.png" alt="Eclipse chatbot workspace in dark mode with restrained borders and clear visual hierarchy" fill sizes="(max-width: 800px) 100vw, 33vw" />
                        </a>
                        <figcaption><span>03 — Dark mode</span><p>A darker visual system with restrained borders, readable hierarchy, and consistent component states.</p></figcaption>
                      </figure>
                    </div>
                  </details>
                )}
              </article>
            ))}
            <article className="project-card coming-soon">
              <div><p className="eyebrow">In progress</p><h3>Something new is blooming…</h3><p>A personal data and product project is currently taking shape.</p></div><span aria-hidden="true">✦</span>
            </article>
          </div>
        </div>
      </section>

      <section className="section toolkit" id="toolkit">
        <div className="section-inner"><SectionHeading eyebrow="How I work">My toolkit</SectionHeading>
          <div className="toolkit-list">{toolkit.map((row) => <div className="toolkit-row" key={row.category}><h3>{row.category}</h3><ul className="tags">{row.items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}</div>
          <p className="toolkit-note">Always learning, always making the next version a little more thoughtful.</p>
        </div>
      </section>

      <footer className="connect" id="connect">
        <div className="footer-glow" aria-hidden="true" />
        <div className="connect-inner"><p className="eyebrow">Get in touch</p><h2>Let&apos;s make something<br/>useful and lovely.</h2>
          <p className="connect-copy">Open to learning, collaborating, internships, and building thoughtful things.</p>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/zahyra-otero/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            <a href="mailto:zlm228@nyu.edu">Email <span aria-hidden="true">→</span></a>
            <a href="https://github.com/zlm228" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
            <a href="/zahyra-otero-resume.pdf" target="_blank">Résumé <span aria-hidden="true">↗</span></a>
          </div>
          <p className="footer-note">Designed with intention, curiosity &amp; a little sparkle ✦ · © 2026 Zahyra Otero</p>
        </div>
      </footer>
    </main>
  );
}

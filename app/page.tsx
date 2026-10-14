import Image from "next/image";
import Link from "next/link";
import ScrollProgress from "./components/ScrollProgress";
import ExperienceEffects from "./components/ExperienceEffects";
import { capabilities, projects } from "./data/projects";

function SectionHeading({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return <div className="section-heading reveal"><p className="eyebrow">{eyebrow}</p><h2>{children}</h2></div>;
}

export default function Home() {
  return <main>
    <ScrollProgress />
    <ExperienceEffects />
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Zahyra Otero, home">zo.</a>
      <nav className="desktop-nav" aria-label="Primary navigation"><a href="#about">About</a><a href="#projects">Projects</a><a href="#capabilities">Capabilities</a><a href="#connect">Connect</a></nav>
      <details className="mobile-nav"><summary aria-label="Open navigation">Menu</summary><nav aria-label="Mobile navigation"><a href="#about">About</a><a href="#projects">Projects</a><a href="#capabilities">Capabilities</a><a href="#connect">Connect</a></nav></details>
    </header>

    <section className="hero" id="home">
      <div className="glow glow-one" aria-hidden="true" /><div className="glow glow-two" aria-hidden="true" />
      <span className="sparkle sparkle-one" aria-hidden="true">✦</span><span className="sparkle sparkle-two" aria-hidden="true">✦</span>
      <div className="hero-content"><p className="eyebrow">Hello, I&apos;m</p><h1>Zahyra Otero</h1><p className="hero-kicker">Data · Product · Thoughtful Technology</p><div className="rule" /><p className="hero-meta">NYU · Data Science Major · Business Studies Minor · Class of 2028</p><p className="hero-intro">I notice the little things that make everyday life harder, then figure out how technology could make them better.</p><a className="button" href="#projects">Explore my work <span aria-hidden="true">↓</span></a></div>
      <p className="scroll-cue" aria-hidden="true">Scroll to discover <span>↓</span></p>
    </section>

    <section className="section about" id="about"><div className="section-inner"><SectionHeading eyebrow="Who I am">A little about me <span aria-hidden="true">✦</span></SectionHeading>
      <div className="portrait-story reveal">
        <div className="portrait-frame" role="img" aria-label="A future portrait of Zahyra will appear here"><span className="portrait-monogram">ZO</span><span className="portrait-label">Portrait coming soon</span></div>
        <div className="portrait-copy"><p className="eyebrow">The person behind the projects</p><p className="portrait-lede">A first-generation Latina building thoughtful technology for people who are too often overlooked.</p><dl><div><dt>Based in</dt><dd>New York City</dd></div><div><dt>Studying</dt><dd>Data Science at NYU</dd></div><div><dt>Curious about</dt><dd>Consumer tech, beauty, entertainment &amp; fintech</dd></div></dl></div>
      </div>
      <div className="about-grid reveal"><div className="about-copy"><p>I&apos;m <strong>Zahyra</strong>, a first-generation Latina and Data Science student at <strong>New York University</strong> exploring the intersection of data, software, AI, and product. I&apos;m drawn to spaces where people with backgrounds like mine are still underrepresented. I want a seat at the table, and I want others like me to see themselves there too.</p><p>I like turning problems I notice in everyday life into technology that makes things simpler, clearer, and more useful. I care about understanding who a problem affects and creating products that feel <em>accessible, intentional, and genuinely enjoyable to use.</em></p><p>I&apos;m especially interested in consumer technology, beauty, entertainment, and fintech. These industries shape how people live, connect, and make decisions every day. I want to help build products and services that make those experiences more accessible, especially for people who have historically been overlooked.</p></div>
        <div className="about-aside"><blockquote><p>“notice a problem → understand who it affects → build something useful”</p><cite>My approach</cite></blockquote><div className="aside-note"><p className="eyebrow">Beyond the build ♡</p><p>Outside of coding, I love all things beauty and skincare, exploring NYC, and adding way too many cafés and restaurants to my list of places to try. I&apos;m always down to try a new cuisine, find a cute café with good pastries, or test a makeup or skincare product I&apos;ve been eyeing. I also love anything creative and aesthetically pleasing, which definitely finds its way into pretty much everything I do.</p></div></div>
      </div>
    </div></section>

    <section className="currently" aria-label="What Zahyra is currently doing"><p className="currently-label eyebrow">Currently</p><div className="marquee"><div className="marquee-track"><p>Studying Data Science at NYU <span>✦</span> Exploring consumer technology <span>✦</span> Building my next data and product project <span>✦</span></p><p aria-hidden="true">Studying Data Science at NYU <span>✦</span> Exploring consumer technology <span>✦</span> Building my next data and product project <span>✦</span></p></div></div></section>

    <section className="section projects" id="projects"><div className="section-inner"><SectionHeading eyebrow="Selected work">Projects &amp; experience <span aria-hidden="true">✦</span></SectionHeading>
      <div className="project-list">{projects.map(project => <article className="project-card reveal" key={project.name}>
        <div className={`project-visual ${project.theme}`}><span className="project-number">{project.number}</span><Link className="project-image-link" href={`/work/${project.slug}`} aria-label={`View ${project.name} case study`}><Image className="project-image" src={project.image} alt={project.imageAlt} fill sizes="(max-width: 800px) calc(100vw - 5rem), 900px" /><span className="image-action">View case study ↗</span></Link><span className="visual-label">{project.status}</span></div>
        <div className="project-content"><p className="project-type">{project.type}</p><h3>{project.name}</h3><p className="project-description">{project.description}</p><div className="contribution"><span>My contribution</span><p>{project.contribution}</p></div><ul className="tags" aria-label={`${project.name} technologies`}>{project.stack.map(item => <li key={item}>{item}</li>)}</ul><Link className="project-link" href={`/work/${project.slug}`}>Read case study <span aria-hidden="true">↗</span></Link></div>
      </article>)}</div>
    </div></section>

    <section className="section toolkit" id="capabilities"><div className="section-inner"><SectionHeading eyebrow="How I work">Capabilities, backed by practice</SectionHeading><div className="capability-grid">{capabilities.map(item => <article className="capability-card reveal" key={item.title}><span>{item.number}</span><h3>{item.title}</h3><p>{item.copy}</p><ul>{item.tools.map(tool => <li key={tool}>{tool}</li>)}</ul></article>)}</div><p className="toolkit-note">Always learning, always making the next version a little more thoughtful.</p></div></section>

    <footer className="connect" id="connect"><div className="footer-glow" aria-hidden="true" /><div className="connect-inner"><p className="eyebrow">Get in touch</p><h2>Let&apos;s make something<br/>useful.</h2><p className="connect-copy">Open to learning, collaborating, internships, and building thoughtful things.</p><div className="contact-links"><a href="https://www.linkedin.com/in/zahyra-otero/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a><a href="https://mail.google.com/mail/?view=cm&fs=1&to=zlm228%40nyu.edu" target="_blank" rel="noreferrer">zlm228@nyu.edu <span aria-hidden="true">↗</span></a><a href="https://github.com/zlm228" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a><a href="/zahyra-otero-resume.pdf" target="_blank">Résumé <span aria-hidden="true">↗</span></a></div><p className="footer-note">© 2026 Zahyra Otero</p></div></footer>
  </main>;
}

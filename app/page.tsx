import Image from "next/image";
import Link from "next/link";
import { capabilities, projects } from "./data/projects";

function SectionHeading({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return <div className="section-heading reveal"><p className="eyebrow">{eyebrow}</p><h2>{children}</h2></div>;
}

export default function Home() {
  return <main>
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Zahyra Otero, home">zo.</a>
      <nav className="desktop-nav" aria-label="Primary navigation"><a href="#about">About</a><a href="#projects">Projects</a><a href="#capabilities">Capabilities</a><a href="#connect">Connect</a></nav>
      <details className="mobile-nav"><summary aria-label="Open navigation">Menu</summary><nav aria-label="Mobile navigation"><a href="#about">About</a><a href="#projects">Projects</a><a href="#capabilities">Capabilities</a><a href="#connect">Connect</a></nav></details>
    </header>

    <section className="hero" id="home">
      <div className="glow glow-one" aria-hidden="true" /><div className="glow glow-two" aria-hidden="true" />
      <span className="sparkle sparkle-one" aria-hidden="true">✦</span><span className="sparkle sparkle-two" aria-hidden="true">✦</span>
      <div className="hero-content"><p className="eyebrow">Hello, I&apos;m</p><h1>Zahyra Otero</h1><p className="hero-kicker">Data · Code · Product</p><div className="rule" /><p className="hero-meta">NYU · Data Science Major · Business Studies Minor · Class of 2028</p><p className="hero-intro">I notice the little things that make everyday life harder, then figure out how technology could make them better.</p><a className="button" href="#projects">Explore my work <span aria-hidden="true">↓</span></a></div>
      <p className="scroll-cue" aria-hidden="true">Scroll to discover <span>↓</span></p>
    </section>

    <section className="section about" id="about"><div className="section-inner"><SectionHeading eyebrow="Who I am">A little about me <span aria-hidden="true">✦</span></SectionHeading>
      <div className="portrait-story reveal">
        <div className="portrait-frame"><Image className="portrait-photo" src="/zahyra-portrait.jpg" alt="Portrait of Zahyra Otero" fill sizes="(max-width: 800px) calc(100vw - 2.5rem), 420px" /><span className="portrait-label">Zahyra Otero · NYC</span></div>
        <div className="portrait-copy"><p className="eyebrow">The person behind the projects</p><p className="portrait-lede">I want to build useful products, take up space in rooms that still lack people like me, and help other girls see themselves there too.</p><dl><div><dt>Based in</dt><dd>New York City</dd></div><div><dt>Studying</dt><dd>Data Science at NYU</dd></div><div><dt>Curious about</dt><dd>Consumer tech, beauty, entertainment &amp; fintech</dd></div></dl></div>
      </div>
      <div className="about-grid reveal"><div className="about-copy"><p>I&apos;m <strong>Zahyra</strong>, a first-generation Latina studying Data Science at <strong>New York University</strong>. I like working where data, software, AI, and product overlap, especially when the end result is something people can actually use.</p><p>Being in spaces where people with backgrounds like mine are still underrepresented matters to me. I want to grow in those rooms and help make it easier for someone else to picture herself there too.</p><p>Most of my ideas start with a small frustration I notice in everyday life: a process with too many steps, information that is harder to find than it should be, or a tool that leaves people out. I like figuring out how to make those experiences simpler and more useful.</p><p>I&apos;m especially curious about consumer tech, beauty, entertainment, and fintech because they show up in people&apos;s lives every day. I want to work on products that make those experiences genuinely better and easier to access.</p></div>
        <div className="about-aside"><blockquote><p>“Could this be simpler?”</p><cite>A question I come back to</cite></blockquote><div className="aside-note"><p className="eyebrow">Beyond the build ♡</p><p>Outside of coding, I love all things beauty and skincare, exploring NYC, and adding way too many cafés and restaurants to my list of places to try. I&apos;m always down to try a new cuisine, find a cute café with good pastries, or test a makeup or skincare product I&apos;ve been eyeing. I also love anything creative and aesthetically pleasing, which definitely finds its way into pretty much everything I do.</p></div></div>
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

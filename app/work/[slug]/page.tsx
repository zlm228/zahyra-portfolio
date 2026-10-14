import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../data/projects";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const project = projects.find(item => item.slug === slug); if (!project) notFound();
  const currentIndex = projects.indexOf(project); const nextProject = projects[(currentIndex + 1) % projects.length];
  return <main className="case-study">
    <header className="case-nav"><Link className="wordmark" href="/">zo.</Link><Link href="/#projects">← All projects</Link></header>
    <section className="case-hero"><p className="eyebrow">Case study · {project.number}</p><h1>{project.name}</h1><p>{project.description}</p><div className="case-meta"><span>{project.type}</span><span>{project.status}</span></div></section>
    <section className={`case-image ${project.theme}`}><div><Image src={project.image} alt={project.imageAlt} fill priority sizes="(max-width: 900px) 90vw, 1200px" /></div></section>
    <section className="case-marquee" aria-label={`${project.name} case study sections`}><div className="case-marquee-track"><p>{project.name} <span>✦</span> Problem <span>✦</span> Approach <span>✦</span> Contribution <span>✦</span> Outcome <span>✦</span></p><p aria-hidden="true">{project.name} <span>✦</span> Problem <span>✦</span> Approach <span>✦</span> Contribution <span>✦</span> Outcome <span>✦</span></p></div></section>
    <section className="case-body"><aside><p className="eyebrow">My role</p><ul>{project.stack.map(item => <li key={item}>{item}</li>)}</ul>{project.href && <a className="button" href={project.href} target="_blank" rel="noreferrer">View live project ↗</a>}</aside><div className="case-narrative"><article><span>01</span><div><h2>The problem</h2><p>{project.problem}</p></div></article><article><span>02</span><div><h2>My approach</h2><p>{project.approach}</p></div></article><article><span>03</span><div><h2>My contribution</h2><p>{project.contribution}</p></div></article><article><span>04</span><div><h2>The outcome</h2><p>{project.outcome}</p></div></article></div></section>
    {project.gallery && <section className="case-gallery"><p className="eyebrow">Selected interface moments</p>{project.gallery.map((item,index) => <figure key={item.src}><div><Image src={item.src} alt={item.alt} fill sizes="(max-width: 900px) 90vw, 1100px" /></div><figcaption><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.copy}</p></figcaption></figure>)}</section>}
    <section className="next-project"><p className="eyebrow">Next project</p><Link href={`/work/${nextProject.slug}`}>{nextProject.name} <span>↗</span></Link></section>
  </main>;
}

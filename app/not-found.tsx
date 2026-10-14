import Link from "next/link";
export default function NotFound() { return <main className="not-found"><p className="eyebrow">404 · A tiny detour</p><h1>This page wandered off.</h1><p>The useful things are still right where you left them.</p><Link className="button" href="/">Return home</Link><span aria-hidden="true">✦</span></main>; }

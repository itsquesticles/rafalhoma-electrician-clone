import { useState } from "react";

const services = [
  { number: "01", title: "Electrical Project Consulting", description: "Evaluate scope, sequencing, infrastructure, equipment requirements, proposals, budgets, and coordination risks before resources are committed." },
  { number: "02", title: "Electrical Project Coordination", description: "Keep owners, contractors, vendors, engineers, utilities, inspectors, and trades aligned around responsibilities and open items." },
  { number: "03", title: "Contractor & Vendor Coordination", description: "Review scope completeness, exclusions, equipment specifications, scheduling commitments, change requests, and handoffs." },
  { number: "04", title: "Project Management Support", description: "Track schedules, milestones, documentation, meetings, issues, changes, progress, and closeout across the larger project." },
  { number: "05", title: "Commercial Electrical Coordination", description: "Support tenant improvements, renovations, equipment installations, service modifications, lighting, upgrades, and facility expansion." },
  { number: "06", title: "Residential & Property Consulting", description: "Help property owners and managers understand upgrades, panels, lighting, EV infrastructure, backup power, and multi-contractor work." },
];

const reasons = [
  { title: "A single point of coordination", description: "Organize contractors, vendors, schedules, specifications, questions, and project changes around the client’s objectives." },
  { title: "Technical understanding + organization", description: "Bridge the gap between what needs to happen technically and what needs to happen operationally." },
  { title: "Owner-focused representation", description: "Help owners understand proposals, responsibilities, timelines, dependencies, and potential issues before they become expensive." },
  { title: "Clear communication", description: "Turn fragmented information from drawings, emails, calls, site conversations, and vendors into clear next steps." },
  { title: "Proactive problem solving", description: "Identify scope gaps, dependencies, access needs, schedule conflicts, and coordination risks early." },
];

const steps = [
  { title: "Understand", description: "We learn the project objectives, property, existing conditions, schedule, budget considerations, and desired outcome." },
  { title: "Define", description: "We identify the major electrical requirements and the contractors, vendors, professionals, and agencies involved." },
  { title: "Assign", description: "We clarify which party owns each major requirement, decision, dependency, and deliverable." },
  { title: "Coordinate", description: "We organize communication, documentation, schedules, decisions, and dependencies." },
  { title: "Track", description: "We monitor outstanding items, responsibilities, milestones, decisions, and progress." },
  { title: "Complete", description: "We help coordinate remaining items and closeout so unfinished details are not overlooked." },
];

const served = ["Business owners", "Commercial property owners", "Residential property owners", "Developers and investors", "Property and facility managers", "General contractors", "Construction teams", "Equipment vendors"];
const navigationLinks = [["Services", "#services"], ["How we work", "#approach"], ["Why Starlight", "#about"], ["Contact", "#contact"]];
const projectImage = `${import.meta.env.BASE_URL}images/gallery-panel.jpg`;

function SectionLabel({ children }) {
  return <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-accent">{children}</p>;
}

function MobileNavigation({ onClose }) {
  return <nav id="mobile-nav" className="border-t border-white/10 bg-brand-dark px-4 py-4 md:hidden" aria-label="Mobile navigation">{navigationLinks.map(([label, href]) => <a key={href} className="block rounded-md px-3 py-3 text-gray-200 hover:bg-white/5" href={href} onClick={onClose}>{label}</a>)}</nav>;
}

export default function ClonePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-accent selection:text-brand-dark">
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-brand-dark/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3" onClick={closeMenu}><span className="flex h-9 w-9 items-center justify-center rounded-md bg-brand-accent font-display text-lg font-bold text-brand-dark">S</span><span className="font-display text-lg font-bold tracking-tight">Starlight Consulting</span></a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-gray-300 md:flex" aria-label="Primary navigation"><a className="hover:text-white" href="#services">Services</a><a className="hover:text-white" href="#approach">How we work</a><a className="hover:text-white" href="#about">Why Starlight</a><a className="rounded-md bg-brand-accent px-4 py-2.5 font-semibold text-brand-dark hover:bg-brand-accentHover" href="#contact">Start a conversation</a></nav>
          <button className="rounded-md p-2 text-gray-300 md:hidden" type="button" aria-expanded={menuOpen} aria-controls="mobile-nav" aria-label="Toggle navigation" onClick={() => setMenuOpen((open) => !open)}><span className="block h-0.5 w-6 bg-current" /><span className="mt-1.5 block h-0.5 w-6 bg-current" /><span className="mt-1.5 block h-0.5 w-6 bg-current" /></button>
        </div>
        {menuOpen && <MobileNavigation onClose={closeMenu} />}
      </header>

      <main id="top">
<section className="relative overflow-hidden border-b border-white/10 pt-32 lg:pt-44"><div className="absolute inset-0 hero-vignette opacity-70" aria-hidden="true" /><div className="relative mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8 lg:pb-36"><div className="max-w-4xl"><SectionLabel>Electrical consulting · Southern California</SectionLabel><h1 className="max-w-4xl font-display text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">Electrical projects. <span className="text-brand-accent">Clearly coordinated.</span></h1><p className="mt-8 max-w-2xl text-lg leading-8 text-gray-300 sm:text-xl">Starlight Consulting helps property owners, businesses, contractors, developers, and project teams understand, coordinate, and move electrical projects forward.</p><div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"><a className="shadow-brand-cta rounded-md bg-brand-accent px-6 py-3.5 text-center font-semibold text-brand-dark hover:bg-brand-accentHover" href="tel:+19499382821">Call (949) 938-2821</a><a className="rounded-md border border-white/20 px-6 py-3.5 text-center font-semibold text-white hover:border-brand-accent hover:text-brand-accent" href="#services">Explore services</a></div></div><div className="mt-16 grid max-w-3xl gap-5 border-t border-white/10 pt-6 text-sm text-gray-400 sm:grid-cols-3"><p><span className="mb-1 block font-semibold text-white">Plan clearly</span>Understand requirements before committing resources.</p><p><span className="mb-1 block font-semibold text-white">Coordinate intelligently</span>Connect the people, information, and schedule.</p><p><span className="mb-1 block font-semibold text-white">Execute efficiently</span>Keep decisions and dependencies moving.</p></div></div></section>

        <section id="services" className="scroll-mt-24 py-24 lg:py-32"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="max-w-2xl"><SectionLabel>What we do</SectionLabel><h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Practical support for complicated electrical work.</h2><p className="mt-5 text-lg leading-8 text-gray-400">From early scope review through contractor coordination, documentation, scheduling, and closeout, we help make the project easier to understand and easier to complete.</p></div><div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map(({ number, title, description }) => <article key={title} className="rounded-xl border border-white/10 bg-brand-card p-7"><p className="font-display text-3xl font-bold text-brand-accent">{number}</p><h3 className="mt-8 text-xl font-semibold">{title}</h3><p className="mt-3 leading-7 text-gray-400">{description}</p></article>)}</div></div></section>

        <section id="about" className="scroll-mt-24 border-y border-white/10 bg-brand-card py-24 lg:py-32"><div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"><div><SectionLabel>Why Starlight</SectionLabel><h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Technical understanding plus project organization.</h2><p className="mt-6 leading-8 text-gray-400">Electrical projects often involve many capable people without one person managing the whole conversation. Starlight Consulting provides that coordination point from the client’s perspective.</p></div><div className="grid gap-8 sm:grid-cols-2">{reasons.map(({ title, description }) => <div key={title} className="border-l border-brand-accent/50 pl-5"><h3 className="font-semibold">{title}</h3><p className="mt-2 leading-7 text-gray-400">{description}</p></div>)}</div></div></section>

        <section className="border-b border-white/10 py-24 lg:py-32"><div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"><div className="overflow-hidden rounded-xl border border-white/10"><img className="h-full min-h-72 w-full object-cover" src={projectImage} alt="Electrical project site with an electrical service panel" width="2069" height="1381" loading="lazy" /></div><div><SectionLabel>Project context</SectionLabel><h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">See the whole project, not just one task.</h2><p className="mt-6 leading-8 text-gray-400">Electrical work may depend on permitting, equipment delivery, utility coordination, access, inspections, and other trades. Starlight helps organize those dependencies around the owner’s objectives.</p><p className="mt-4 text-sm leading-6 text-gray-500">Where licensed electrical work or professional engineering is required, it should be performed by appropriately qualified professionals.</p></div></div></section>

        <section id="approach" className="scroll-mt-24 py-24 lg:py-32"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="max-w-2xl"><SectionLabel>How we work</SectionLabel><h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">A clear path from project question to project closeout.</h2></div><div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{steps.map(({ title, description }, index) => <div key={title} className="border-t border-white/15 pt-5"><p className="text-sm font-semibold text-brand-accent">0{index + 1}</p><h3 className="mt-4 text-xl font-semibold">{title}</h3><p className="mt-3 leading-7 text-gray-400">{description}</p></div>)}</div></div></section>

        <section className="border-y border-white/10 bg-brand-card py-24 lg:py-32"><div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"><div><SectionLabel>Who we serve</SectionLabel><h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">A knowledgeable partner for the people responsible for the outcome.</h2></div><ul className="grid gap-3 sm:grid-cols-2">{served.map((item) => <li key={item} className="border-b border-white/10 py-3 text-gray-300">{item}</li>)}</ul></div></section>

<section id="contact" className="scroll-mt-24 py-24 lg:py-32"><div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"><SectionLabel>Start with clarity</SectionLabel><h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Have an electrical project coming up?</h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">Get another knowledgeable set of eyes on the project before expensive decisions are made. Whether you are planning a new installation, reviewing a proposal, or trying to get an existing project back on track, Starlight Consulting can help organize the process.</p><div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"><a className="shadow-brand-cta rounded-md bg-brand-accent px-6 py-3.5 font-semibold text-brand-dark hover:bg-brand-accentHover" href="tel:+19499382821">Call (949) 938-2821</a><a className="rounded-md border border-white/20 px-6 py-3.5 font-semibold text-white hover:border-brand-accent hover:text-brand-accent" href="mailto:info@startlightconsulting.com">info@startlightconsulting.com</a></div></div></section>
      </main>

      <footer className="border-t border-white/10 py-10"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-sm text-gray-400 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8"><div><p className="font-semibold text-white">Starlight Consulting LLC</p><p className="mt-1">Electrical consulting · Project coordination · Construction support</p></div><div className="md:text-right"><p>Southern California</p><p className="mt-1"><a className="hover:text-brand-accent" href="tel:+19499382821">(949) 938-2821</a> · <a className="hover:text-brand-accent" href="mailto:info@startlightconsulting.com">info@startlightconsulting.com</a></p></div></div></footer>
    </div>
  );
}

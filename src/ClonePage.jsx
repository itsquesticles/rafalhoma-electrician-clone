import { useEffect, useRef, useState } from "react";

/* ============================================
   Rafał Homa — Elektryk Krynica-Zdrój | Nowy Sącz
   Pixel-faithful clone of rafalhomaelektryka.aura.build
   (single-page Tailwind landing, source-extracted)
   ============================================ */

export default function ClonePage() {
    const [menuOpen, setMenuOpen] = useState(false);
    const sparksRef = useRef(null);

    // Scroll reveal (same IO as original)
    useEffect(() => {
        const els = document.querySelectorAll(".reveal");
        if (!("IntersectionObserver" in window) || !els.length) return;
        const io = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
        );
        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    });

    // Hero sparks (same as original generator)
    useEffect(() => {
        const c = sparksRef.current;
        if (!c) return;
        c.innerHTML = ""; // idempotent under StrictMode double-invoke
        for (let i = 0; i < 30; i++) {
            const s = document.createElement("div");
            s.className = "spark";
            s.style.left = Math.random() * 100 + "%";
            s.style.animationDuration = Math.random() * 3 + 2 + "s";
            s.style.animationDelay = Math.random() * 5 + "s";
            s.style.width = Math.random() * 2 + 1 + "px";
            c.appendChild(s);
        }
    }, []);

    return (
        <div className="font-sans selection:bg-brand-accent selection:text-brand-dark">
            {/* ===== Navigation ===== */}
            <header
                className="fixed w-full top-0 z-50 transition-all duration-300 bg-brand-dark/80 backdrop-blur-lg border-b border-white/5"
                id="navbar"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* ===== Logo ===== */}
                        <a href="#" className="flex items-center gap-2 group">
                            <div className="w-8 h-8 rounded bg-brand-accent text-brand-dark flex items-center justify-center font-display font-bold text-lg leading-none tracking-tighter group-hover:bg-brand-accentHover transition-colors">
                                R
                            </div>
                            <span className="font-display font-bold tracking-tighter text-xl text-white">
                                Rafał Homa
                            </span>
                        </a>

                        {/* ===== Desktop Menu ===== */}
                        <nav className="hidden md:flex items-center gap-8">
                            <a
                                href="#o-nas"
                                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                            >
                                O nas
                            </a>
                            <a
                                href="#uslugi"
                                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                            >
                                Usługi
                            </a>
                            <a
                                href="#realizacje"
                                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                            >
                                Realizacje
                            </a>
                            <a
                                href="#kontakt"
                                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                            >
                                Kontakt
                            </a>
                        </nav>

                        {/* ===== CTA & Phone Desktop ===== */}
                        <div className="hidden md:flex items-center gap-6">
                            <a
                                href="tel:507383804"
                                className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-brand-accent transition-colors"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="20"
                                    height="20"
                                    strokeWidth="1.5"
                                >
                                    <g
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeWidth="1.5"
                                    >
                                        <path d="M13.5 2C13.5 2 15.8335 2.21213 18.8033 5.18198C21.7731 8.15183 21.9853 10.4853 21.9853 10.4853" />
                                        <path d="M14.207 5.53564C14.207 5.53564 15.197 5.81849 16.6819 7.30341C18.1668 8.78834 18.4497 9.77829 18.4497 9.77829" />
                                        <path d="M17.6763 20.9631C18.1917 20.9122 18.6399 20.6343 19.0011 20.254L20.4217 18.7584C21.3806 17.7489 21.1102 16.0182 19.8833 15.312L17.9728 14.2123C17.1672 13.7486 16.1858 13.8848 15.5562 14.5477L15.1007 15.0272C15.1007 15.0272 14.0181 16.167 11.0631 13.0559C8.10812 9.94484 9.1907 8.80507 9.1907 8.80507L9.47752 8.50311C10.1841 7.75924 10.2507 6.56497 9.63424 5.6931L8.37326 3.90961C7.61028 2.8305 6.13596 2.68795 5.26145 3.60864L3.69185 5.26114C3.25823 5.71766 2.96765 6.30945 3.00289 6.96594C3.09304 8.64546 3.81072 12.259 7.81536 16.4752C12.0621 20.9462 16.0468 21.1239 17.6763 20.9631Z" />
                                    </g>
                                </svg>
                                507 383 804
                            </a>
                            <a
                                href="#kontakt"
                                className="bg-brand-accent hover:bg-brand-accentHover text-brand-dark px-5 py-2.5 rounded-md text-sm font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(245,197,24,0.1)] hover:shadow-[0_0_20px_rgba(245,197,24,0.3)]"
                            >
                                Bezpłatna wycena
                            </a>
                        </div>

                        {/* ===== Mobile Menu Button ===== */}
                        <button
                            id="mobile-menu-btn"
                            onClick={() => setMenuOpen((v) => !v)}
                            className="md:hidden text-gray-300 hover:text-white p-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                strokeWidth="1.5"
                            >
                                <g
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeWidth="1.5"
                                >
                                    <path d="M20 7L4 7" />
                                    <path d="M20 12L4 12" />
                                    <path d="M20 17L4 17" />
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* ===== Mobile Menu Overlay ===== */}
                <div
                    id="mobile-menu"
                    onClick={(e) => {
                        if (e.target.tagName === "A") setMenuOpen(false);
                    }}
                    className={`${menuOpen ? "" : "hidden"} md:hidden bg-brand-dark border-b border-white/5 absolute w-full`}
                >
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        <a
                            href="#o-nas"
                            className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md"
                        >
                            O nas
                        </a>
                        <a
                            href="#uslugi"
                            className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md"
                        >
                            Usługi
                        </a>
                        <a
                            href="#realizacje"
                            className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md"
                        >
                            Realizacje
                        </a>
                        <a
                            href="#kontakt"
                            className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md"
                        >
                            Kontakt
                        </a>
                        <div className="pt-4 mt-2 border-t border-white/5 flex flex-col gap-3">
                            <a
                                href="tel:507383804"
                                className="flex items-center justify-center gap-2 text-lg font-medium text-white bg-white/5 py-3 rounded-md"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    strokeWidth="1.5"
                                >
                                    <g
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeWidth="1.5"
                                    >
                                        <path d="M13.5 2C13.5 2 15.8335 2.21213 18.8033 5.18198C21.7731 8.15183 21.9853 10.4853 21.9853 10.4853" />
                                        <path d="M14.207 5.53564C14.207 5.53564 15.197 5.81849 16.6819 7.30341C18.1668 8.78834 18.4497 9.77829 18.4497 9.77829" />
                                        <path d="M17.6763 20.9631C18.1917 20.9122 18.6399 20.6343 19.0011 20.254L20.4217 18.7584C21.3806 17.7489 21.1102 16.0182 19.8833 15.312L17.9728 14.2123C17.1672 13.7486 16.1858 13.8848 15.5562 14.5477L15.1007 15.0272C15.1007 15.0272 14.0181 16.167 11.0631 13.0559C8.10812 9.94484 9.1907 8.80507 9.1907 8.80507L9.47752 8.50311C10.1841 7.75924 10.2507 6.56497 9.63424 5.6931L8.37326 3.90961C7.61028 2.8305 6.13596 2.68795 5.26145 3.60864L3.69185 5.26114C3.25823 5.71766 2.96765 6.30945 3.00289 6.96594C3.09304 8.64546 3.81072 12.259 7.81536 16.4752C12.0621 20.9462 16.0468 21.1239 17.6763 20.9631Z" />
                                    </g>
                                </svg>
                                507 383 804
                            </a>
                            <a
                                href="#kontakt"
                                className="text-center bg-brand-accent text-brand-dark px-5 py-3 rounded-md text-base font-semibold"
                            >
                                Bezpłatna wycena
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            {/* ===== Floating Mobile Call Button ===== */}
            <a
                href="tel:507383804"
                className="md:hidden fixed bottom-6 right-6 z-50 bg-brand-accent text-brand-dark w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(245,197,24,0.4)] transition-transform hover:scale-105"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="28"
                    height="28"
                    strokeWidth="1.5"
                >
                    <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="1.5"
                    >
                        <path d="M13.5 2C13.5 2 15.8335 2.21213 18.8033 5.18198C21.7731 8.15183 21.9853 10.4853 21.9853 10.4853" />
                        <path d="M14.207 5.53564C14.207 5.53564 15.197 5.81849 16.6819 7.30341C18.1668 8.78834 18.4497 9.77829 18.4497 9.77829" />
                        <path d="M17.6763 20.9631C18.1917 20.9122 18.6399 20.6343 19.0011 20.254L20.4217 18.7584C21.3806 17.7489 21.1102 16.0182 19.8833 15.312L17.9728 14.2123C17.1672 13.7486 16.1858 13.8848 15.5562 14.5477L15.1007 15.0272C15.1007 15.0272 14.0181 16.167 11.0631 13.0559C8.10812 9.94484 9.1907 8.80507 9.1907 8.80507L9.47752 8.50311C10.1841 7.75924 10.2507 6.56497 9.63424 5.6931L8.37326 3.90961C7.61028 2.8305 6.13596 2.68795 5.26145 3.60864L3.69185 5.26114C3.25823 5.71766 2.96765 6.30945 3.00289 6.96594C3.09304 8.64546 3.81072 12.259 7.81536 16.4752C12.0621 20.9462 16.0468 21.1239 17.6763 20.9631Z" />
                    </g>
                </svg>
            </a>

            {/* ===== Hero Section ===== */}
            <section className="relative min-h-screen flex items-center pt-20 overflow-hidden clip-bottom bg-brand-darker">
                {/* ===== Parallax Background ===== */}
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-fixed mix-blend-overlay opacity-20"
                        style={{
                            backgroundImage: "url('/images/gallery-panel.jpg')",
                        }}
                    ></div>
                    {/* ===== Radial Gradient for depth ===== */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050810_100%)]"></div>
                    {/* ===== Dark Overlay ===== */}
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/50 via-brand-dark/80 to-brand-dark"></div>
                </div>

                {/* ===== Sparks Container ===== */}
                <div
                    ref={sparksRef}
                    id="sparks-container"
                    className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-50"
                ></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-32">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm reveal">
                            <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></div>
                            <span className="text-xs font-medium tracking-wide text-gray-300">
                                Instalacje zgodne z normami PN-IEC |
                                Dokumentacja do odbioru
                            </span>
                        </div>

                        <h1
                            className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tighter text-white mb-6 leading-[1.1] reveal"
                            style={{ transitionDelay: "100ms" }}
                        >
                            Elektryka <br />{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                                bez kompromisów.
                            </span>
                        </h1>

                        <p
                            className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl font-light leading-relaxed reveal"
                            style={{ transitionDelay: "200ms" }}
                        >
                            Kompleksowe instalacje elektryczne w domach –
                            Krynica-Zdrój, Nowy Sącz i okolice. Bezpieczeństwo,
                            precyzja i własny sprzęt.
                        </p>

                        <div
                            className="flex flex-col sm:flex-row gap-4 reveal"
                            style={{ transitionDelay: "300ms" }}
                        >
                            <a
                                href="tel:507383804"
                                className="flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accentHover text-brand-dark px-8 py-4 rounded-md text-base font-semibold transition-all duration-300"
                            >
                                Zadzwoń teraz
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="20"
                                    height="20"
                                    strokeWidth="1.5"
                                >
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M4 12H20M14 18L20 12L14 6"
                                    />
                                </svg>
                            </a>
                            <a
                                href="#uslugi"
                                className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-md text-base font-medium transition-all duration-300"
                            >
                                Zobacz usługi
                            </a>
                        </div>

                        {/* ===== Trust Bar ===== */}
                        <div
                            className="mt-16 pt-8 border-t border-white/10 reveal"
                            style={{ transitionDelay: "400ms" }}
                        >
                            <p className="text-xs text-gray-500 font-medium tracking-wide uppercase mb-4">
                                Obsługujemy rejon:
                            </p>
                            <p className="text-sm text-gray-400">
                                Krynica-Zdrój{" "}
                                <span className="mx-2 text-white/20">|</span>{" "}
                                Nowy Sącz{" "}
                                <span className="mx-2 text-white/20">|</span>{" "}
                                Muszyna{" "}
                                <span className="mx-2 text-white/20">|</span>{" "}
                                Piwniczna{" "}
                                <span className="mx-2 text-white/20">|</span> i
                                okolice
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== O Nas Section ===== */}
            <section
                id="o-nas"
                className="relative py-24 bg-slate-50 text-slate-900 clip-bottom clip-top z-10"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="reveal">
                            <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight mb-6 text-slate-900">
                                Kim jesteśmy?
                            </h2>
                            <div className="space-y-6 text-slate-600 text-base sm:text-lg leading-relaxed font-light">
                                <p>
                                    Rafał i jego partner to dwóch doświadczonych
                                    elektryków, którzy wykonują instalacje
                                    elektryczne w domach od podstaw –
                                    kompleksowo, solidnie i zgodnie z
                                    przepisami. Działamy na terenie
                                    Krynicy-Zdroju, Nowego Sącza i okolicznych
                                    miejscowości.
                                </p>
                                <p>
                                    Obsługujemy zarówno klientów indywidualnych
                                    budujących domy, jak i firmy budowlane
                                    szukające rzetelnego podwykonawcy z własnym
                                    sprzętem. Większość naszych zleceń pochodzi
                                    z poleceń – bo dobra robota mówi sama za
                                    siebie.
                                </p>
                            </div>

                            {/* ===== Counters ===== */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 border-t border-slate-200">
                                <div>
                                    <div className="font-display font-bold text-3xl text-slate-900 tracking-tighter">
                                        2
                                    </div>
                                    <div className="text-xs text-slate-500 font-medium mt-1">
                                        Elektryków
                                    </div>
                                </div>
                                <div>
                                    <div className="font-display font-bold text-3xl text-slate-900 tracking-tighter">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="1em"
                                            height="1em"
                                        >
                                            <g
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                            >
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M8.5 12.5L10.5 14.5L15.5 9.5"
                                                />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="text-xs text-slate-500 font-medium mt-1">
                                        Własny sprzęt
                                    </div>
                                </div>
                                <div>
                                    <div className="font-display font-bold text-3xl text-slate-900 tracking-tighter">
                                        100%
                                    </div>
                                    <div className="text-xs text-slate-500 font-medium mt-1">
                                        Z przepisami
                                    </div>
                                </div>
                                <div>
                                    <div className="font-display font-bold text-3xl text-slate-900 tracking-tighter">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="1em"
                                            height="1em"
                                        >
                                            <g
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                            >
                                                <path d="M4 10.1433C4 5.64588 7.58172 2 12 2C16.4183 2 20 5.64588 20 10.1433C20 14.6055 17.4467 19.8124 13.4629 21.6744C12.5343 22.1085 11.4657 22.1085 10.5371 21.6744C6.55332 19.8124 4 14.6055 4 10.1433Z" />
                                                <circle cx="12" cy="10" r="3" />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="text-xs text-slate-500 font-medium mt-1">
                                        Lokalnie
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative reveal">
                            <div className="absolute -inset-4 bg-brand-accent/10 rounded-2xl transform rotate-3 z-0"></div>
                            <img
                                src="/images/about-house.jpg"
                                alt="Instalacja elektryczna w nowym domu"
                                className="relative z-10 rounded-xl shadow-2xl object-cover h-[500px] w-full border border-slate-200/50"
                            />
                            <div className="absolute bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl z-20 border border-slate-100 hidden sm:block">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                        >
                                            <g
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                            >
                                                <path d="M3 10.4167C3 7.21907 3 5.62028 3.37752 5.08241C3.75503 4.54454 5.25832 4.02996 8.26491 3.00079L8.83772 2.80472C10.405 2.26824 11.1886 2 12 2C12.8114 2 13.595 2.26824 15.1623 2.80472L15.7351 3.00079C18.7417 4.02996 20.245 4.54454 20.6225 5.08241C21 5.62028 21 7.21907 21 10.4167C21 10.8996 21 11.4234 21 11.9914C21 17.6294 16.761 20.3655 14.1014 21.5273C13.38 21.8424 13.0193 22 12 22C10.9807 22 10.62 21.8424 9.89856 21.5273C7.23896 20.3655 3 17.6294 3 11.9914C3 11.4234 3 10.8996 3 10.4167Z" />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M9.5 12.4L10.9286 14L14.5 10"
                                                />
                                            </g>
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900 tracking-tight text-sm">
                                            Gwarancja jakości
                                        </div>
                                        <div className="text-xs text-slate-500">
                                            Bezpieczne instalacje
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== Usługi Section ===== */}
            <section
                id="uslugi"
                className="py-24 bg-brand-card relative clip-top z-20"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16 reveal">
                        <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-white mb-4">
                            Co robimy?
                        </h2>
                        <p className="text-gray-400 text-base">
                            Oferujemy pełen zakres usług elektrycznych dla domów
                            jednorodzinnych i firm budowlanych.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* ===== Card 1 ===== */}
                        <div className="group bg-brand-dark p-8 rounded-xl border border-white/5 hover:border-brand-accent/50 transition-all duration-300 hover:-translate-y-1 reveal">
                            <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-brand-accent/10 transition-colors">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="28"
                                    height="28"
                                >
                                    <g
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    >
                                        <path d="M2.36407 12.9579C1.98463 10.3208 1.79491 9.00229 2.33537 7.87495C2.87583 6.7476 4.02619 6.06234 6.32691 4.69181L7.71175 3.86687C9.80104 2.62229 10.8457 2 12 2C13.1543 2 14.199 2.62229 16.2882 3.86687L17.6731 4.69181C19.9738 6.06234 21.1242 6.7476 21.6646 7.87495C22.2051 9.00229 22.0154 10.3208 21.6359 12.9579L21.3572 14.8952C20.8697 18.2827 20.626 19.9764 19.451 20.9882C18.2759 22 16.5526 22 13.1061 22H10.8939C7.44737 22 5.72409 22 4.54903 20.9882C3.37396 19.9764 3.13025 18.2827 2.64284 14.8952L2.36407 12.9579Z" />
                                        <path
                                            strokeLinecap="round"
                                            d="M15 18H9"
                                        />
                                    </g>
                                </svg>
                            </div>
                            <h3 className="font-display font-semibold text-xl tracking-tight text-white mb-3">
                                Kompleksowa instalacja elektryczna
                            </h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Wykonujemy pełną instalację elektryczną w domu
                                jednorodzinnym od A do Z – od projektu tras po
                                odbiór i podłączenie. Jedno zlecenie, jedna
                                ekipa, zero stresu.
                            </p>
                        </div>

                        {/* ===== Card 2 ===== */}
                        <div className="group bg-brand-dark p-8 rounded-xl border border-white/5 hover:border-brand-accent/50 transition-all duration-300 hover:-translate-y-1 reveal">
                            <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-brand-accent/10 transition-colors">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="28"
                                    height="28"
                                >
                                    <g
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    >
                                        <path d="M2 11C2 7.22876 2 5.34315 3.17157 4.17157C4.34315 3 6.22876 3 10 3H14C17.7712 3 19.6569 3 20.8284 4.17157C22 5.34315 22 7.22876 22 11V13C22 16.7712 22 18.6569 20.8284 19.8284C19.6569 21 17.7712 21 14 21H10C6.22876 21 4.34315 21 3.17157 19.8284C2 18.6569 2 16.7712 2 13V11Z" />
                                        <path d="M2 12H22" />
                                        <path
                                            strokeLinecap="round"
                                            d="M13.5 16.5H18"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            d="M13.5 7.5L18 7.5"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            d="M6 17.5L6 15.5"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            d="M6 8.5L6 6.5"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            d="M9 17.5L9 15.5"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            d="M9 8.5L9 6.5"
                                        />
                                    </g>
                                </svg>
                            </div>
                            <h3 className="font-display font-semibold text-xl tracking-tight text-white mb-3">
                                Rozdzielnice i tablice elektryczne
                            </h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Montaż i okablowanie rozdzielnic głównych i
                                podlicznikowych. Bezpieczne, estetyczne i zgodne
                                z normami – gotowe do odbioru przez inspektora.
                            </p>
                        </div>

                        {/* ===== Card 3 ===== */}
                        <div className="group bg-brand-dark p-8 rounded-xl border border-white/5 hover:border-brand-accent/50 transition-all duration-300 hover:-translate-y-1 reveal">
                            <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-brand-accent/10 transition-colors">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="28"
                                    height="28"
                                >
                                    <g
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    >
                                        <path d="M2 5.25732C2 3.45835 3.567 2 5.5 2C7.433 2 9 3.45835 9 5.25732C9 7.04219 7.88292 9.12497 6.14003 9.86978C5.73374 10.0434 5.26626 10.0434 4.85997 9.86978C3.11708 9.12497 2 7.04219 2 5.25732Z" />
                                        <path d="M15 17.2573C15 15.4584 16.567 14 18.5 14C20.433 14 22 15.4584 22 17.2573C22 19.0422 20.8829 21.125 19.14 21.8698C18.7337 22.0434 18.2663 22.0434 17.86 21.8698C16.1171 21.125 15 19.0422 15 17.2573Z" />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M18.5 17.5H18.509"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5.49072 5.5H5.49972"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12.0002 5H16.1321C18.133 5 18.8939 7.61309 17.2059 8.68732L6.79459 15.3127C5.10651 16.3869 5.86744 19 7.86833 19H12.0002M10.5002 20.5L12.0002 19L10.5002 17.5"
                                        />
                                    </g>
                                </svg>
                            </div>
                            <h3 className="font-display font-semibold text-xl tracking-tight text-white mb-3">
                                Instalacje pod tynk i natynkowe
                            </h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Prowadzimy trasy kablowe zarówno pod tynkiem jak
                                i natynkowo – solidnie, zgodnie z projektem i
                                bez zbędnego kucia tam gdzie to niepotrzebne.
                            </p>
                        </div>

                        {/* ===== Card 4 ===== */}
                        <div className="group bg-brand-dark p-8 rounded-xl border border-white/5 hover:border-brand-accent/50 transition-all duration-300 hover:-translate-y-1 reveal">
                            <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-brand-accent/10 transition-colors">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="28"
                                    height="28"
                                >
                                    <g
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            d="M12 15.1082V20.1498C12 21.2635 11.0955 22.1875 10.0128 21.9673C5.44193 21.0381 2 16.9659 2 12.0832C2 6.51441 6.47715 2 12 2C17.5228 2 22 6.51441 22 12.0832C22 16.0743 19.7003 19.5239 16.3641 21.1581"
                                        />
                                        <path
                                            strokeLinejoin="round"
                                            d="M9 11.8C9 11.3582 9.35817 11 9.8 11H14.2C14.6418 11 15 11.3582 15 11.8V12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12V11.8Z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            d="M13.5 11V9"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            d="M10.5 11V9"
                                        />
                                    </g>
                                </svg>
                            </div>
                            <h3 className="font-display font-semibold text-xl tracking-tight text-white mb-3">
                                Gniazdka, włączniki i oświetlenie
                            </h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Montaż gniazdek, włączników, punktów
                                oświetleniowych i opraw – wszystko dobrane do
                                projektu wnętrza i potrzeb klienta.
                            </p>
                        </div>

                        {/* ===== Card 5 ===== */}
                        <div className="group bg-brand-dark p-8 rounded-xl border border-white/5 hover:border-brand-accent/50 transition-all duration-300 hover:-translate-y-1 reveal">
                            <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-brand-accent/10 transition-colors">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="28"
                                    height="28"
                                >
                                    <g
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    >
                                        <path d="M3 10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C21 4.34315 21 6.22876 21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14V10Z" />
                                        <path
                                            strokeLinecap="round"
                                            d="M8 12H16"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            d="M8 8H16"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            d="M8 16H13"
                                        />
                                    </g>
                                </svg>
                            </div>
                            <h3 className="font-display font-semibold text-xl tracking-tight text-white mb-3">
                                Pomiary i odbiory elektryczne
                            </h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Wykonujemy wymagane pomiary elektryczne i
                                przygotowujemy dokumentację niezbędną do odbioru
                                instalacji przez uprawnionego inspektora
                                nadzoru.
                            </p>
                        </div>

                        {/* ===== Card 6 ===== */}
                        <div className="group bg-brand-dark p-8 rounded-xl border border-white/5 hover:border-brand-accent/50 transition-all duration-300 hover:-translate-y-1 reveal">
                            <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-brand-accent/10 transition-colors">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="28"
                                    height="28"
                                >
                                    Not found
                                </svg>
                            </div>
                            <h3 className="font-display font-semibold text-xl tracking-tight text-white mb-3">
                                Podwykonawstwo dla firm
                            </h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Współpracujemy z firmami budowlanymi jako
                                profesjonalni podwykonawcy. Własny sprzęt,
                                terminowość i pełna dokumentacja – to co liczy
                                się na budowie.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== Dlaczego my ===== */}
            <section className="py-24 bg-white text-slate-900 clip-top z-30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-center mb-16 text-slate-900 reveal">
                        Dlaczego klienci nam ufają?
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center reveal">
                            <div className="w-16 h-16 mx-auto rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 shadow-sm">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="32"
                                    height="32"
                                >
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        d="M5.66953 9.91436L8.73167 5.77133C10.711 3.09327 11.7007 1.75425 12.6241 2.03721C13.5474 2.32018 13.5474 3.96249 13.5474 7.24712V7.55682C13.5474 8.74151 13.5474 9.33386 13.926 9.70541L13.946 9.72466C14.3327 10.0884 14.9492 10.0884 16.1822 10.0884C18.4011 10.0884 19.5106 10.0884 19.8855 10.7613C19.8917 10.7724 19.8977 10.7837 19.9036 10.795C20.2576 11.4784 19.6152 12.3475 18.3304 14.0857L15.2683 18.2287C13.2889 20.9067 12.2992 22.2458 11.3758 21.9628C10.4525 21.6798 10.4525 20.0375 10.4525 16.7528L10.4526 16.4433C10.4526 15.2585 10.4526 14.6662 10.074 14.2946L10.054 14.2754C9.6673 13.9117 9.05079 13.9117 7.81775 13.9117C5.59888 13.9117 4.48945 13.9117 4.1145 13.2387C4.10829 13.2276 4.10225 13.2164 4.09639 13.205C3.74244 12.5217 4.3848 11.6526 5.66953 9.91436Z"
                                    />
                                </svg>
                            </div>
                            <h3 className="font-display font-semibold text-lg tracking-tight mb-2">
                                Instalacja od A do Z
                            </h3>
                            <p className="text-xs text-slate-500">
                                Jedno zlecenie, jedna sprawdzona ekipa. Pełna
                                odpowiedzialność.
                            </p>
                        </div>
                        <div
                            className="text-center reveal"
                            style={{ transitionDelay: "100ms" }}
                        >
                            <div className="w-16 h-16 mx-auto rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 shadow-sm">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="32"
                                    height="32"
                                >
                                    <g
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    >
                                        <circle cx="12" cy="12" r="3" />
                                        <path d="M13.7654 2.15224C13.3978 2 12.9319 2 12 2C11.0681 2 10.6022 2 10.2346 2.15224C9.74457 2.35523 9.35522 2.74458 9.15223 3.23463C9.05957 3.45834 9.0233 3.7185 9.00911 4.09799C8.98826 4.65568 8.70226 5.17189 8.21894 5.45093C7.73564 5.72996 7.14559 5.71954 6.65219 5.45876C6.31645 5.2813 6.07301 5.18262 5.83294 5.15102C5.30704 5.08178 4.77518 5.22429 4.35436 5.5472C4.03874 5.78938 3.80577 6.1929 3.33983 6.99993C2.87389 7.80697 2.64092 8.21048 2.58899 8.60491C2.51976 9.1308 2.66227 9.66266 2.98518 10.0835C3.13256 10.2756 3.3397 10.437 3.66119 10.639C4.1338 10.936 4.43789 11.4419 4.43786 12C4.43783 12.5581 4.13375 13.0639 3.66118 13.3608C3.33965 13.5629 3.13248 13.7244 2.98508 13.9165C2.66217 14.3373 2.51966 14.8691 2.5889 15.395C2.64082 15.7894 2.87379 16.193 3.33973 17C3.80568 17.807 4.03865 18.2106 4.35426 18.4527C4.77508 18.7756 5.30694 18.9181 5.83284 18.8489C6.07289 18.8173 6.31632 18.7186 6.65204 18.5412C7.14547 18.2804 7.73556 18.27 8.2189 18.549C8.70224 18.8281 8.98826 19.3443 9.00911 19.9021C9.02331 20.2815 9.05957 20.5417 9.15223 20.7654C9.35522 21.2554 9.74457 21.6448 10.2346 21.8478C10.6022 22 11.0681 22 12 22C12.9319 22 13.3978 22 13.7654 21.8478C14.2554 21.6448 14.6448 21.2554 14.8477 20.7654C14.9404 20.5417 14.9767 20.2815 14.9909 19.902C15.0117 19.3443 15.2977 18.8281 15.781 18.549C16.2643 18.2699 16.8544 18.2804 17.3479 18.5412C17.6836 18.7186 17.927 18.8172 18.167 18.8488C18.6929 18.9181 19.2248 18.7756 19.6456 18.4527C19.9612 18.2105 20.1942 17.807 20.6601 16.9999C21.1261 16.1929 21.3591 15.7894 21.411 15.395C21.4802 14.8691 21.3377 14.3372 21.0148 13.9164C20.8674 13.7243 20.6602 13.5628 20.3387 13.3608C19.8662 13.0639 19.5621 12.558 19.5621 11.9999C19.5621 11.4418 19.8662 10.9361 20.3387 10.6392C20.6603 10.4371 20.8675 10.2757 21.0149 10.0835C21.3378 9.66273 21.4803 9.13087 21.4111 8.60497C21.3592 8.21055 21.1262 7.80703 20.6602 7C20.1943 6.19297 19.9613 5.78945 19.6457 5.54727C19.2249 5.22436 18.693 5.08185 18.1671 5.15109C17.9271 5.18269 17.6837 5.28136 17.3479 5.4588C16.8545 5.71959 16.2644 5.73002 15.7811 5.45096C15.2977 5.17191 15.0117 4.65566 14.9909 4.09794C14.9767 3.71848 14.9404 3.45833 14.8477 3.23463C14.6448 2.74458 14.2554 2.35523 13.7654 2.15224Z" />
                                    </g>
                                </svg>
                            </div>
                            <h3 className="font-display font-semibold text-lg tracking-tight mb-2">
                                Własny sprzęt
                            </h3>
                            <p className="text-xs text-slate-500">
                                Nie czekamy na nikogo, działamy od razu z
                                profesjonalnym zapleczem.
                            </p>
                        </div>
                        <div
                            className="text-center reveal"
                            style={{ transitionDelay: "200ms" }}
                        >
                            <div className="w-16 h-16 mx-auto rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 shadow-sm">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="32"
                                    height="32"
                                >
                                    <g
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    >
                                        <path d="M4 10.1433C4 5.64588 7.58172 2 12 2C16.4183 2 20 5.64588 20 10.1433C20 14.6055 17.4467 19.8124 13.4629 21.6744C12.5343 22.1085 11.4657 22.1085 10.5371 21.6744C6.55332 19.8124 4 14.6055 4 10.1433Z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </g>
                                </svg>
                            </div>
                            <h3 className="font-display font-semibold text-lg tracking-tight mb-2">
                                Lokalni fachowcy
                            </h3>
                            <p className="text-xs text-slate-500">
                                Znamy specyfikę budownictwa w regionie Krynicy i
                                Nowego Sącza.
                            </p>
                        </div>
                        <div
                            className="text-center reveal"
                            style={{ transitionDelay: "300ms" }}
                        >
                            <div className="w-16 h-16 mx-auto rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 shadow-sm">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="32"
                                    height="32"
                                >
                                    <g
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    >
                                        <circle cx="9" cy="6" r="4" />
                                        <path
                                            strokeLinecap="round"
                                            d="M15 9C16.6569 9 18 7.65685 18 6C18 4.34315 16.6569 3 15 3"
                                        />
                                        <ellipse cx="9" cy="17" rx="7" ry="4" />
                                        <path
                                            strokeLinecap="round"
                                            d="M18 14C19.7542 14.3847 21 15.3589 21 16.5C21 17.5293 19.9863 18.4229 18.5 18.8704"
                                        />
                                    </g>
                                </svg>
                            </div>
                            <h3 className="font-display font-semibold text-lg tracking-tight mb-2">
                                Zlecenia z poleceń
                            </h3>
                            <p className="text-xs text-slate-500">
                                Zadowoleni klienci wracają i polecają nas dalej.
                                To nasz największy atut.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== Jak działamy ===== */}
            <section className="py-24 bg-brand-dark relative z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-white mb-16 text-center reveal">
                        Jak przebiega współpraca?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                        {/* ===== Connecting line desktop ===== */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 z-0"></div>

                        <div className="relative z-10 bg-brand-card p-6 rounded-xl border border-white/5 reveal">
                            <div className="text-brand-accent font-display font-bold text-4xl tracking-tighter mb-4">
                                1
                            </div>
                            <h3 className="font-display font-semibold text-lg text-white mb-2">
                                Kontakt
                            </h3>
                            <p className="text-sm text-gray-400">
                                Zadzwoń lub napisz – odpowiadamy szybko i
                                umawiamy wizytę na miejscu.
                            </p>
                        </div>

                        <div
                            className="relative z-10 bg-brand-card p-6 rounded-xl border border-white/5 reveal"
                            style={{ transitionDelay: "100ms" }}
                        >
                            <div className="text-brand-accent font-display font-bold text-4xl tracking-tighter mb-4">
                                2
                            </div>
                            <h3 className="font-display font-semibold text-lg text-white mb-2">
                                Wycena
                            </h3>
                            <p className="text-sm text-gray-400">
                                Przyjeżdżamy, oceniamy zakres prac i podajemy
                                konkretną cenę – bez ukrytych kosztów.
                            </p>
                        </div>

                        <div
                            className="relative z-10 bg-brand-card p-6 rounded-xl border border-white/5 reveal"
                            style={{ transitionDelay: "200ms" }}
                        >
                            <div className="text-brand-accent font-display font-bold text-4xl tracking-tighter mb-4">
                                3
                            </div>
                            <h3 className="font-display font-semibold text-lg text-white mb-2">
                                Realizacja
                            </h3>
                            <p className="text-sm text-gray-400">
                                Wykonujemy instalację terminowo i zgodnie z
                                ustaleniami – z własnym sprzętem i materiałami.
                            </p>
                        </div>

                        <div
                            className="relative z-10 bg-brand-card p-6 rounded-xl border border-white/5 reveal"
                            style={{ transitionDelay: "300ms" }}
                        >
                            <div className="text-brand-accent font-display font-bold text-4xl tracking-tighter mb-4">
                                4
                            </div>
                            <h3 className="font-display font-semibold text-lg text-white mb-2">
                                Odbiór
                            </h3>
                            <p className="text-sm text-gray-400">
                                Przygotowujemy dokumentację i pomagamy przejść
                                przez odbiór – do samego końca jesteśmy z Tobą.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== Realizacje (Masonry) ===== */}
            <section
                id="realizacje"
                className="py-24 bg-slate-50 text-slate-900 clip-top z-50"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-center mb-16 text-slate-900 reveal">
                        Nasze realizacje
                    </h2>

                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                        {/* ===== Image 1 ===== */}
                        <div className="relative group overflow-hidden rounded-xl break-inside-avoid reveal">
                            <img
                                src="/images/gallery-panel.jpg"
                                alt="Nowoczesna rozdzielnica elektryczna Nowy Sącz"
                                loading="lazy"
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-brand-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <p className="text-white text-sm font-medium">
                                    Nowoczesna rozdzielnica elektryczna – dom
                                    jednorodzinny
                                </p>
                            </div>
                        </div>

                        {/* ===== Image 2 ===== */}
                        <div className="relative group overflow-hidden rounded-xl break-inside-avoid reveal">
                            <img
                                src="/images/o-nas.jpg"
                                alt="Instalacja w nowym domu Krynica-Zdrój"
                                loading="lazy"
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-brand-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <p className="text-white text-sm font-medium">
                                    Prowadzenie tras kablowych – stan surowy
                                </p>
                            </div>
                        </div>

                        {/* ===== Image 3 ===== */}
                        <div className="relative group overflow-hidden rounded-xl break-inside-avoid reveal">
                            <img
                                src="/images/realizacje-1.jpg"
                                alt="Montaż osprzętu elektrycznego Muszyna"
                                loading="lazy"
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-brand-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <p className="text-white text-sm font-medium">
                                    Biały montaż w nowoczesnym wnętrzu
                                </p>
                            </div>
                        </div>

                        {/* ===== Image 4 ===== */}
                        <div className="relative group overflow-hidden rounded-xl break-inside-avoid reveal">
                            <img
                                src="/images/pomiary.jpg"
                                alt="Pomiary elektryczne Nowy Sącz"
                                loading="lazy"
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-brand-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <p className="text-white text-sm font-medium">
                                    Pomiary końcowe i dokumentacja
                                </p>
                            </div>
                        </div>

                        {/* ===== Image 5 ===== */}
                        <div className="relative group overflow-hidden rounded-xl break-inside-avoid reveal">
                            <img
                                src="/images/realizacje-2.jpg"
                                alt="Oświetlenie LED dom jednorodzinny"
                                loading="lazy"
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-brand-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <p className="text-white text-sm font-medium">
                                    Oświetlenie architektoniczne i LED
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== Opinie ===== */}
            <section className="py-24 bg-brand-card relative z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-center text-white mb-16 reveal">
                        Co mówią nasi klienci?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* ===== Opnia 1 ===== */}
                        <div className="bg-brand-dark p-8 rounded-xl border border-white/5 reveal">
                            <div className="flex gap-1 mb-4 text-brand-accent">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="20"
                                    height="20"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                                    />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="20"
                                    height="20"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                                    />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="20"
                                    height="20"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                                    />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="20"
                                    height="20"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                                    />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="20"
                                    height="20"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                                    />
                                </svg>
                            </div>
                            <p className="text-gray-300 text-sm italic mb-6 leading-relaxed">
                                "Rafał wykonał u nas kompleksową instalację
                                elektryczną w nowym domu. Terminowo, fachowo i
                                bez niespodzianek w cenie. Zdecydowanie polecam
                                – świetna robota!"
                            </p>
                            <div className="font-display font-semibold text-white text-sm">
                                – Piotr M., Krynica-Zdrój
                            </div>
                        </div>

                        {/* ===== Opnia 2 ===== */}
                        <div
                            className="bg-brand-dark p-8 rounded-xl border border-white/5 reveal"
                            style={{ transitionDelay: "100ms" }}
                        >
                            <div className="flex gap-1 mb-4 text-brand-accent">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="20"
                                    height="20"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                                    />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="20"
                                    height="20"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                                    />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="20"
                                    height="20"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                                    />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="20"
                                    height="20"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                                    />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="20"
                                    height="20"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                                    />
                                </svg>
                            </div>
                            <p className="text-gray-300 text-sm italic mb-6 leading-relaxed">
                                "Szukałem elektryka do rozdzielnicy i instalacji
                                w domu jednorodzinnym. Rafał przyjechał szybko,
                                wycenił uczciwie i zrobił wszystko zgodnie z
                                projektem. Inspektor odebrał bez uwag."
                            </p>
                            <div className="font-display font-semibold text-white text-sm">
                                – Tomasz W., Nowy Sącz
                            </div>
                        </div>

                        {/* ===== Opnia 3 ===== */}
                        <div
                            className="bg-brand-dark p-8 rounded-xl border border-white/5 reveal"
                            style={{ transitionDelay: "200ms" }}
                        >
                            <div className="flex gap-1 mb-4 text-brand-accent">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="20"
                                    height="20"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                                    />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="20"
                                    height="20"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                                    />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="20"
                                    height="20"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                                    />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="20"
                                    height="20"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                                    />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="20"
                                    height="20"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                                    />
                                </svg>
                            </div>
                            <p className="text-gray-300 text-sm italic mb-6 leading-relaxed">
                                "Współpracujemy z Rafałem jako podwykonawcą na
                                kilku budowach. Zawsze punktualnie, zawsze z
                                dokumentacją, zawsze jak się umawiamy. Polecam
                                każdej firmie budowlanej."
                            </p>
                            <div className="font-display font-semibold text-white text-sm">
                                – Krzysztof B., kierownik budowy
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== Obszar Działania ===== */}
            <section className="py-24 bg-white text-slate-900 clip-top z-30 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight mb-8 text-slate-900 reveal">
                        Działamy w Twoim rejonie
                    </h2>

                    <div className="flex flex-wrap justify-center gap-3 mb-12 reveal">
                        <span className="px-4 py-2 bg-slate-100 text-slate-700 text-sm font-medium rounded-full border border-slate-200">
                            Krynica-Zdrój
                        </span>
                        <span className="px-4 py-2 bg-slate-100 text-slate-700 text-sm font-medium rounded-full border border-slate-200">
                            Nowy Sącz
                        </span>
                        <span className="px-4 py-2 bg-slate-100 text-slate-700 text-sm font-medium rounded-full border border-slate-200">
                            Muszyna
                        </span>
                        <span className="px-4 py-2 bg-slate-100 text-slate-700 text-sm font-medium rounded-full border border-slate-200">
                            Piwniczna-Zdrój
                        </span>
                        <span className="px-4 py-2 bg-slate-100 text-slate-700 text-sm font-medium rounded-full border border-slate-200">
                            Stary Sącz
                        </span>
                        <span className="px-4 py-2 bg-slate-100 text-slate-700 text-sm font-medium rounded-full border border-slate-200">
                            i okoliczne miejscowości
                        </span>
                    </div>

                    <p className="text-sm text-slate-500 mb-10 reveal">
                        Nie widzisz swojej miejscowości?{" "}
                        <a
                            href="tel:507383804"
                            className="text-brand-accent font-semibold hover:underline"
                        >
                            Zadzwoń
                        </a>{" "}
                        – na pewno coś ustalimy.
                    </p>

                    <div className="w-full h-80 bg-slate-200 rounded-xl overflow-hidden reveal border border-slate-200 shadow-sm">
                        {/* ===== Simple map embed placeholder ===== */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83096.06208544975!2d20.87186851610537!3d49.4216823908865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473e047f3b89cb25%3A0xcb13e1bbbd0cf777!2sKrynica-Zdr%C3%B3j!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl"
                            width="100%"
                            height="100%"
                            style={{ border: "0" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* ===== FAQ ===== */}
            <section className="py-24 bg-brand-dark relative z-40 clip-top">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-white mb-12 text-center reveal">
                        Masz pytania? Mamy odpowiedzi.
                    </h2>

                    <div className="space-y-4 reveal">
                        {/* ===== FAQ Item 1 ===== */}
                        <details className="group border border-white/10 bg-brand-card rounded-lg overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between cursor-pointer p-6 font-display font-medium text-white text-base">
                                Czy wykonujecie całą instalację czy tylko część
                                prac?
                                <span className="transition group-open:rotate-180">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                    >
                                        <path
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M19 9L12 15L5 9"
                                        />
                                    </svg>
                                </span>
                            </summary>
                            <div className="px-6 pb-6 text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                                Wykonujemy kompletną instalację elektryczną od A
                                do Z – od prowadzenia tras kablowych, przez
                                montaż rozdzielnicy, po gniazdka, oświetlenie i
                                pomiary końcowe.
                            </div>
                        </details>

                        {/* ===== FAQ Item 2 ===== */}
                        <details className="group border border-white/10 bg-brand-card rounded-lg overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between cursor-pointer p-6 font-display font-medium text-white text-base">
                                Czy pomagacie z odbiorem instalacji?
                                <span className="transition group-open:rotate-180">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                    >
                                        <path
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M19 9L12 15L5 9"
                                        />
                                    </svg>
                                </span>
                            </summary>
                            <div className="px-6 pb-6 text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                                Tak, przygotowujemy pełną dokumentację pomiarową
                                wymaganą do odbioru przez inspektora nadzoru
                                budowlanego.
                            </div>
                        </details>

                        {/* ===== FAQ Item 3 ===== */}
                        <details className="group border border-white/10 bg-brand-card rounded-lg overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between cursor-pointer p-6 font-display font-medium text-white text-base">
                                Czy współpracujecie z firmami budowlanymi?
                                <span className="transition group-open:rotate-180">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                    >
                                        <path
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M19 9L12 15L5 9"
                                        />
                                    </svg>
                                </span>
                            </summary>
                            <div className="px-6 pb-6 text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                                Tak, chętnie podejmujemy współpracę jako
                                podwykonawcy elektryczni. Mamy własny sprzęt i
                                jesteśmy przyzwyczajeni do pracy na aktywnych
                                budowach.
                            </div>
                        </details>

                        {/* ===== FAQ Item 4 ===== */}
                        <details className="group border border-white/10 bg-brand-card rounded-lg overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between cursor-pointer p-6 font-display font-medium text-white text-base">
                                Na jakim obszarze działacie?
                                <span className="transition group-open:rotate-180">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                    >
                                        <path
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M19 9L12 15L5 9"
                                        />
                                    </svg>
                                </span>
                            </summary>
                            <div className="px-6 pb-6 text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                                Głównie Krynica-Zdrój, Nowy Sącz i okoliczne
                                miejscowości w regionie. Zadzwoń – ustalimy czy
                                dojazd jest możliwy.
                            </div>
                        </details>

                        {/* ===== FAQ Item 5 ===== */}
                        <details className="group border border-white/10 bg-brand-card rounded-lg overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between cursor-pointer p-6 font-display font-medium text-white text-base">
                                Jak szybko możecie rozpocząć pracę?
                                <span className="transition group-open:rotate-180">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                    >
                                        <path
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M19 9L12 15L5 9"
                                        />
                                    </svg>
                                </span>
                            </summary>
                            <div className="px-6 pb-6 text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                                Zależy od aktualnego obłożenia – zazwyczaj w
                                ciągu 1-2 tygodni. Zadzwoń, żebyśmy mogli ocenić
                                termin dla Twojego projektu.
                            </div>
                        </details>

                        {/* ===== FAQ Item 6 ===== */}
                        <details className="group border border-white/10 bg-brand-card rounded-lg overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between cursor-pointer p-6 font-display font-medium text-white text-base">
                                Czy wycena jest bezpłatna?
                                <span className="transition group-open:rotate-180">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                    >
                                        <path
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M19 9L12 15L5 9"
                                        />
                                    </svg>
                                </span>
                            </summary>
                            <div className="px-6 pb-6 text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                                Tak, wyjeżdżamy bezpłatnie, oceniamy zakres prac
                                na miejscu i podajemy konkretną cenę bez żadnych
                                zobowiązań.
                            </div>
                        </details>
                    </div>
                </div>
            </section>

            {/* ===== Kontakt & CTA ===== */}
            <section
                id="kontakt"
                className="py-24 bg-brand-darker border-t border-white/5 relative z-40"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* ===== Left: Form ===== */}
                        <div className="reveal">
                            <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-white mb-4">
                                Budujesz dom? Potrzebujesz elektryka?
                            </h2>
                            <p className="text-gray-400 text-base mb-10">
                                Zadzwoń lub napisz – bezpłatna wycena, zero
                                zobowiązań.
                            </p>

                            <form
                                action="mailto:rafalhoma89@gmail.com"
                                method="post"
                                encType="text/plain"
                                className="space-y-6"
                            >
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-xs font-medium text-gray-400 mb-2"
                                    >
                                        Imię i nazwisko
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="Imię"
                                        className="w-full bg-brand-dark border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors text-sm"
                                        placeholder="Jan Kowalski"
                                        required=""
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="block text-xs font-medium text-gray-400 mb-2"
                                    >
                                        Numer telefonu
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="Telefon"
                                        className="w-full bg-brand-dark border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors text-sm"
                                        placeholder="500 000 000"
                                        required=""
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-xs font-medium text-gray-400 mb-2"
                                    >
                                        Wiadomość / zakres prac
                                    </label>
                                    <textarea
                                        id="message"
                                        name="Wiadomosc"
                                        rows="4"
                                        className="w-full bg-brand-dark border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors text-sm resize-none"
                                        placeholder="Opisz krótko czego potrzebujesz..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-brand-accent hover:bg-brand-accentHover text-brand-dark font-semibold py-4 rounded-md transition-all duration-300 shadow-[0_0_15px_rgba(245,197,24,0.1)] hover:shadow-[0_0_20px_rgba(245,197,24,0.3)]"
                                >
                                    Wyślij zapytanie
                                </button>
                            </form>
                        </div>

                        {/* ===== Right: Contact Info ===== */}
                        <div className="bg-brand-card p-8 sm:p-12 rounded-2xl border border-white/5 reveal lg:mt-0 mt-8">
                            <h3 className="font-display font-semibold text-xl text-white mb-8">
                                Dane kontaktowe
                            </h3>

                            <div className="space-y-8">
                                <a
                                    href="tel:507383804"
                                    className="flex items-start gap-4 group"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-brand-accent/10 transition-colors shrink-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                        >
                                            <g
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeWidth="1.5"
                                            >
                                                <path d="M13.5 2C13.5 2 15.8335 2.21213 18.8033 5.18198C21.7731 8.15183 21.9853 10.4853 21.9853 10.4853" />
                                                <path d="M14.207 5.53564C14.207 5.53564 15.197 5.81849 16.6819 7.30341C18.1668 8.78834 18.4497 9.77829 18.4497 9.77829" />
                                                <path d="M17.6763 20.9631C18.1917 20.9122 18.6399 20.6343 19.0011 20.254L20.4217 18.7584C21.3806 17.7489 21.1102 16.0182 19.8833 15.312L17.9728 14.2123C17.1672 13.7486 16.1858 13.8848 15.5562 14.5477L15.1007 15.0272C15.1007 15.0272 14.0181 16.167 11.0631 13.0559C8.10812 9.94484 9.1907 8.80507 9.1907 8.80507L9.47752 8.50311C10.1841 7.75924 10.2507 6.56497 9.63424 5.6931L8.37326 3.90961C7.61028 2.8305 6.13596 2.68795 5.26145 3.60864L3.69185 5.26114C3.25823 5.71766 2.96765 6.30945 3.00289 6.96594C3.09304 8.64546 3.81072 12.259 7.81536 16.4752C12.0621 20.9462 16.0468 21.1239 17.6763 20.9631Z" />
                                            </g>
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500 mb-1">
                                            Zadzwoń do nas
                                        </div>
                                        <div className="font-display font-bold text-2xl tracking-tighter text-white group-hover:text-brand-accent transition-colors">
                                            507 383 804
                                        </div>
                                    </div>
                                </a>

                                <a
                                    href="mailto:rafalhoma89@gmail.com"
                                    className="flex items-start gap-4 group"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-brand-accent/10 transition-colors shrink-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                        >
                                            <g
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                            >
                                                <path d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z" />
                                                <path
                                                    strokeLinecap="round"
                                                    d="M6 8L8.1589 9.79908C9.99553 11.3296 10.9139 12.0949 12 12.0949C13.0861 12.0949 14.0045 11.3296 15.8411 9.79908L18 8"
                                                />
                                            </g>
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500 mb-1">
                                            Napisz e-mail
                                        </div>
                                        <div className="font-medium text-base text-white group-hover:text-brand-accent transition-colors break-all">
                                            rafalhoma89@gmail.com
                                        </div>
                                    </div>
                                </a>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                        >
                                            <g
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                            >
                                                <path d="M4 10.1433C4 5.64588 7.58172 2 12 2C16.4183 2 20 5.64588 20 10.1433C20 14.6055 17.4467 19.8124 13.4629 21.6744C12.5343 22.1085 11.4657 22.1085 10.5371 21.6744C6.55332 19.8124 4 14.6055 4 10.1433Z" />
                                                <circle cx="12" cy="10" r="3" />
                                            </g>
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500 mb-1">
                                            Obszar działania
                                        </div>
                                        <div className="font-medium text-base text-white">
                                            Krynica-Zdrój, Nowy Sącz i okolice
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 border-t border-white/10 pt-8 mt-8">
                                    <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                        >
                                            <g
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                            >
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 8V12L14.5 14.5"
                                                />
                                            </g>
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500 mb-1">
                                            Godziny dostępności
                                        </div>
                                        <div className="font-medium text-sm text-white">
                                            Pon – Pt: 7:00 – 18:00
                                        </div>
                                        <div className="font-medium text-sm text-white">
                                            Sobota: 8:00 – 14:00
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== Footer ===== */}
            <footer className="bg-brand-darker py-8 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-center md:text-left">
                        <div className="font-display font-bold text-white tracking-tight text-sm mb-1">
                            Rafał – Instalacje Elektryczne | Krynica-Zdrój, Nowy
                            Sącz
                        </div>
                        <div className="text-xs text-gray-500">
                            © 2025 Instalacje Elektryczne Rafał Homa. Wszelkie
                            prawa zastrzeżone.
                        </div>
                    </div>

                    <div className="flex gap-6 text-xs font-medium">
                        <a
                            href="#o-nas"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            O nas
                        </a>
                        <a
                            href="#uslugi"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            Usługi
                        </a>
                        <a
                            href="#realizacje"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            Realizacje
                        </a>
                        <a
                            href="#kontakt"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            Kontakt
                        </a>
                    </div>
                </div>
            </footer>

            {/* ===== Scripts ===== */}
        </div>
    );
}

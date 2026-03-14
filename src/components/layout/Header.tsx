"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { CONTACT } from "@/lib/constants";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";

const NAV_KEYS = [
  { key: "home", href: "/" },
  { key: "services", href: "/palvelut" },
  { key: "about", href: "/meista" },
  { key: "contact", href: "/yhteystiedot" },
] as const;

export default function Header() {
  const t = useTranslations("nav");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar with phone */}
      <div
        className={`bg-brand-darker text-text-muted-dark text-xs transition-all duration-300 overflow-hidden ${
          scrolled ? "max-h-0 py-0" : "max-h-12 py-2"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <a href={CONTACT.phoneHref} className="hover:text-text-light transition-colors">
            {CONTACT.phone}
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="hover:text-text-light transition-colors"
          >
            {CONTACT.email}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "bg-brand-dark border-brand-border/50 shadow-md"
            : "bg-brand-dark border-brand-border shadow-lg"
        }`}
      >
        <div
          className={`max-w-6xl mx-auto px-4 flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <span className={`font-display font-bold text-text-light transition-all duration-300 ${scrolled ? "text-xl" : "text-2xl"}`}>
              Putkipalvelu J&V
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {NAV_KEYS.map(({ key, href }) => (
              <Link
                key={key}
                href={href}
                className="nav-link px-4 py-2 text-[0.9rem] font-medium text-text-muted-dark hover:text-text-light
                  transition-colors"
              >
                {t(key)}
              </Link>
            ))}
            <a
              href={CONTACT.phoneHref}
              className="ml-3 inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold
                bg-brand-accent text-white hover:bg-brand-accent-dark transition-all duration-300"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              {CONTACT.phone}
            </a>
            <div className="ml-2">
              <LanguageSwitcher />
            </div>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden p-2 text-text-muted-dark hover:text-text-light transition-colors"
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

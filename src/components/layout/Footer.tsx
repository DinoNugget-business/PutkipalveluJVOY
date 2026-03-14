import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { CONTACT } from "@/lib/constants";

const QUICK_LINKS = [
  { key: "services", href: "/palvelut" },
  { key: "about", href: "/meista" },
  { key: "contact", href: "/yhteystiedot" },
] as const;

export default function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-text-light">
      {/* Accent top line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-60" />

      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo + tagline */}
          <div>
            <span className="font-display font-bold text-2xl text-text-light block mb-5">
              Putkipalvelu JV
            </span>
            <p className="text-text-muted-dark text-sm leading-relaxed">
              {t("metadata.description")}
            </p>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-5">
              {t("footer.contactTitle")}
            </h3>
            <ul className="space-y-3 text-sm text-text-muted-dark">
              <li>
                <a href={CONTACT.phoneHref} className="hover:text-text-light transition-colors">
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-text-light transition-colors"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>{CONTACT.fullAddress}</li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-5">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-3 text-sm">
              {QUICK_LINKS.map(({ key, href }) => (
                <li key={key}>
                  <Link
                    href={href}
                    className="text-text-muted-dark hover:text-text-light transition-colors"
                  >
                    {t(`nav.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-brand-border text-center text-xs text-text-muted-dark">
          <p>{t("footer.copyright", { year: String(year) })}</p>
        </div>
      </div>
    </footer>
  );
}

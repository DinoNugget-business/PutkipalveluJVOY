import { useTranslations } from "next-intl";
import { CONTACT } from "@/lib/constants";
import Icon from "@/components/ui/Icon";

export default function Hero() {
  const t = useTranslations("home");

  return (
    <section className="bg-brand-dark min-h-screen flex flex-col justify-center">
      <div className="max-w-6xl mx-auto px-4 w-full py-24 sm:py-32">
        <div className="max-w-2xl">
          {/* Accent line */}
          <div className="w-16 h-0.5 bg-brand-accent mb-6 hero-heading" />

          {/* Badge */}
          <div className="hero-heading inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-accent/15 mb-6">
            <Icon name="shield" size={16} className="text-brand-accent" />
            <span className="text-xs font-semibold text-text-light tracking-wide uppercase">
              {t("heroBadge")}
            </span>
          </div>

          <h1 className="hero-heading font-display font-bold text-4xl sm:text-5xl lg:text-7xl text-text-light leading-[1.1] mb-5">
            {t("heroTitle")}
          </h1>
          <p className="hero-subtext text-text-muted-dark text-lg sm:text-xl mb-8 leading-relaxed max-w-xl">
            {t("heroSubtitle")}
          </p>

          <div className="hero-ctas flex flex-wrap gap-4">
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg font-semibold text-base
                bg-brand-accent text-white hover:bg-brand-accent-dark transition-colors"
            >
              <Icon name="phone" size={18} />
              {t("heroCta")}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg font-semibold text-base
                border-2 border-white/30 text-text-light hover:bg-white/10 transition-colors"
            >
              <Icon name="mail" size={18} />
              {t("heroCtaEmail")}
            </a>
          </div>
        </div>
      </div>

      {/* Stat mini-bar */}
      <div className="w-full border-t border-white/10 bg-brand-darker">
        <div className="max-w-6xl mx-auto px-4 py-4 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
          {[
            { value: t("statFounded"), label: t("statFoundedLabel") },
            { value: t("statArea"), label: t("statAreaLabel") },
            { value: t("statMember"), label: t("statMemberLabel") },
            { value: t("statOwner"), label: t("statOwnerLabel") },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-bold text-xl sm:text-2xl text-brand-accent">
                {stat.value}
              </div>
              <div className="text-xs text-text-muted-dark uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

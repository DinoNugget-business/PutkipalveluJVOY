import { useTranslations } from "next-intl";
import PageHeader from "@/components/layout/PageHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import type { IconName } from "@/components/ui/Icon";
import { SERVICE_ICONS, CONTACT } from "@/lib/constants";

const SERVICE_KEYS = [
  "energiaremontti",
  "maalampo",
  "kaukolampo",
  "lviUrakointi",
  "linjasaneeraus",
  "lviHuolto",
  "jaahdytys",
  "aliurakointi",
] as const;

export default function ServicesPage() {
  const t = useTranslations();

  return (
    <>
      <PageHeader
        title={t("services.title")}
        subtitle={t("services.subtitle")}
      />

      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {SERVICE_KEYS.map((key) => (
              <ScrollReveal key={key}>
                <div className="light-card rounded-xl p-6 h-full">
                  <div className="w-14 h-14 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-4">
                    <Icon
                      name={SERVICE_ICONS[key] as IconName}
                      size={28}
                      className="text-brand-primary"
                    />
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-3 text-text-primary">
                    {t(`services.${key}.title`)}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {t(`services.${key}.description`)}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why energy renovation? */}
      <section className="py-16 sm:py-20 bg-bg-light">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title={t("services.whyEnergyTitle")}
              accent
            />
          </ScrollReveal>
          <ScrollReveal>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>{t("services.whyEnergyP1")}</p>
              <p>{t("services.whyEnergyP2")}</p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={CONTACT.phoneHref}
                className="btn-sweep inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg font-semibold text-base
                  bg-brand-accent text-white hover:bg-brand-accent-dark
                  shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Icon name="phone" size={18} />
                {t("common.callJanne")}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg font-semibold text-base
                  border-2 border-brand-primary/30 text-brand-primary hover:bg-brand-primary/5 transition-all duration-300"
              >
                <Icon name="mail" size={18} />
                {t("common.getQuote")}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

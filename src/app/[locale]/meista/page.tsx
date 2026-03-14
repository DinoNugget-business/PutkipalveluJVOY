import { useTranslations } from "next-intl";
import PageHeader from "@/components/layout/PageHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import type { IconName } from "@/components/ui/Icon";

const VALUES = [
  { key: "value1", icon: "users" as IconName },
  { key: "value2", icon: "shield" as IconName },
  { key: "value3", icon: "flame" as IconName },
] as const;

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <>
      <PageHeader
        title={t("title")}
        subtitle={t("subtitle")}
      />

      {/* Intro section with CSS avatar */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-8 items-start">
            <ScrollReveal direction="left">
              <div className="flex-1">
                <SectionHeading title={t("introTitle")} accent align="left" />
                <div className="space-y-4 text-text-muted leading-relaxed">
                  <p>{t("introP1")}</p>
                  <p>{t("introP2")}</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="flex flex-col items-center gap-3 shrink-0">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center">
                  <span className="font-display font-bold text-2xl text-white tracking-wide">JK</span>
                </div>
                <span className="font-display font-semibold text-text-primary text-sm">Janne Kurki</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="py-16 sm:py-20 bg-bg-light">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <SectionHeading title={t("valuesTitle")} accent />
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 stagger-children">
            {VALUES.map(({ key, icon }) => (
              <ScrollReveal key={key}>
                <div className="light-card rounded-xl p-6 text-center h-full">
                  <div className="w-14 h-14 rounded-full bg-brand-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon name={icon} size={28} className="text-brand-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2 text-text-primary">
                    {t(`${key}Title`)}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {t(`${key}Desc`)}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Rakennusvoima membership */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <div className="light-card rounded-xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0">
                  <Icon name="award" size={24} className="text-brand-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl mb-2 text-text-primary">
                    {t("memberTitle")}
                  </h3>
                  <p className="text-text-muted leading-relaxed text-sm">
                    {t("memberDesc")}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-sm text-text-muted">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-primary/5 font-medium">
                      {t("yTunnusLabel")}: {t("yTunnusValue")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

import { useTranslations } from "next-intl";
import PageHeader from "@/components/layout/PageHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import type { IconName } from "@/components/ui/Icon";

const VALUES = [
  { key: "value1", icon: "award" as IconName },
  { key: "value2", icon: "shield" as IconName },
  { key: "value3", icon: "users" as IconName },
] as const;

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <>
      <PageHeader
        title={t("title")}
        subtitle={t("subtitle")}
      />

      {/* Intro section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <SectionHeading title={t("introTitle")} accent align="left" />
          </ScrollReveal>
          <ScrollReveal>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>{t("introP1")}</p>
              <p>{t("introP2")}</p>
            </div>
          </ScrollReveal>
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
    </>
  );
}

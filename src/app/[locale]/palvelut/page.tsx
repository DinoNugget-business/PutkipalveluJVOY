import { useTranslations } from "next-intl";
import PageHeader from "@/components/layout/PageHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Icon from "@/components/ui/Icon";
import type { IconName } from "@/components/ui/Icon";
import { SERVICE_ICONS } from "@/lib/constants";

const SERVICE_KEYS = [
  "putkityot",
  "lammitys",
  "vesijohtotyot",
  "viemariotyot",
  "kylpyhuoneremontti",
  "huolto",
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
    </>
  );
}

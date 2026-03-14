"use client";

import { useTranslations } from "next-intl";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";
import Icon from "@/components/ui/Icon";
import type { IconName } from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function HowItWorks() {
  const t = useTranslations("home");

  return (
    <section className="py-14 sm:py-18 bg-brand-dark">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            title={t("howTitle")}
            subtitle={t("howSubtitle")}
            light
            accent
          />
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            {HOW_IT_WORKS_STEPS.map((step, i) => {
              const num = String(i + 1).padStart(2, "0");
              const isLast = i === HOW_IT_WORKS_STEPS.length - 1;

              return (
                <div key={step.key} className="relative flex flex-col items-center text-center px-4">
                  {!isLast && (
                    <div
                      className="hidden lg:block absolute top-8 left-[calc(50%+32px)] w-[calc(100%-64px)] border-t-2 border-dashed border-brand-accent/30"
                      aria-hidden="true"
                    />
                  )}

                  <div className="relative w-16 h-16 rounded-full bg-brand-accent/15 border-2 border-brand-accent/40 flex items-center justify-center mb-4">
                    <Icon
                      name={step.icon as IconName}
                      size={24}
                      className="text-brand-accent"
                    />
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-brand-accent text-white text-xs font-bold flex items-center justify-center font-display">
                      {num}
                    </span>
                  </div>

                  <h3 className="font-display font-semibold text-lg text-text-light mb-2">
                    {t(`howStep${i + 1}Title`)}
                  </h3>
                  <p className="text-sm text-text-muted-dark leading-relaxed max-w-xs">
                    {t(`howStep${i + 1}Desc`)}
                  </p>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

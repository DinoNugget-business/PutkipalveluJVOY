"use client";

import { useTranslations } from "next-intl";
import Icon from "@/components/ui/Icon";
import type { IconName } from "@/components/ui/Icon";
import ScrollReveal from "@/components/ui/ScrollReveal";

const TRUST_ITEMS: { icon: IconName }[] = [
  { icon: "calendar" },
  { icon: "map-pin" },
  { icon: "users" },
  { icon: "shield" },
];

export default function TrustBar() {
  const t = useTranslations("home");

  return (
    <section className="py-8 sm:py-10 bg-bg-light">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {TRUST_ITEMS.map((item, i) => {
              const num = i + 1;
              return (
                <div
                  key={num}
                  className="border-l-2 border-brand-accent pl-4"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Icon
                      name={item.icon}
                      size={18}
                      className="text-brand-accent"
                    />
                    <span className="font-display font-bold text-xl sm:text-2xl text-text-primary">
                      {t(`trust${num}Value`)}
                    </span>
                  </div>
                  <span className="text-sm text-text-muted">
                    {t(`trust${num}Label`)}
                  </span>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

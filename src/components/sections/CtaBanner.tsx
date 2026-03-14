"use client";

import { useTranslations } from "next-intl";
import { CONTACT } from "@/lib/constants";
import Icon from "@/components/ui/Icon";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CtaBanner() {
  const t = useTranslations("home");

  return (
    <section className="bg-brand-primary py-14 sm:py-18">
      <div className="max-w-4xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-text-light mb-4">
            {t("ctaTitle")}
          </h2>
          <p className="text-text-muted-dark mb-8 text-base sm:text-lg max-w-2xl">
            {t("ctaSubtitle")}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg font-semibold text-base
                bg-brand-accent text-white hover:bg-brand-accent-dark transition-colors"
            >
              <Icon name="phone" size={18} />
              {t("ctaCta")}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg font-semibold text-base
                border-2 border-white/30 text-text-light hover:bg-white/10 transition-colors"
            >
              <Icon name="mail" size={18} />
              {t("ctaEmail")}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

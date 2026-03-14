"use client";

import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function WhyUs() {
  const t = useTranslations("home");

  return (
    <section className="py-16 sm:py-20 bg-bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column: heading + quote paragraphs */}
          <ScrollReveal direction="left">
            <SectionHeading
              title={t("whyTitle")}
              subtitle={t("whySubtitle")}
              accent
              align="left"
            />

            <div className="space-y-6">
              <blockquote className="border-l-3 border-brand-accent pl-5 italic text-lg text-text-primary leading-relaxed">
                {t("whyP1")}
              </blockquote>
              <blockquote className="border-l-3 border-brand-accent pl-5 italic text-lg text-text-primary leading-relaxed">
                {t("whyP2")}
              </blockquote>
            </div>
          </ScrollReveal>

          {/* Right column: avatar + badges */}
          <ScrollReveal direction="right">
            <div className="flex flex-col items-center lg:items-center gap-5">
              {/* Avatar circle with initials */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center shadow-lg">
                <span className="font-display font-bold text-2xl text-white">
                  JK
                </span>
              </div>

              <div className="text-center">
                <p className="font-display font-semibold text-xl text-text-primary">
                  Janne Kurki
                </p>
                <p className="text-sm text-text-muted mt-0.5">
                  Putkipalvelu J&amp;V Oy
                </p>
              </div>

              {/* Badge pills */}
              <div className="flex flex-wrap justify-center gap-3 mt-2">
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-semibold">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100 8 4 4 0 000-8zm14 14v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                  </svg>
                  {t("whyMember")}
                </span>
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-accent/10 text-brand-accent text-sm font-semibold">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  {t("whyYtunnus")}
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

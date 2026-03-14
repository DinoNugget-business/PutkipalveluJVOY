import { useTranslations } from "next-intl";
import { CONTACT } from "@/lib/constants";
import PageHeader from "@/components/layout/PageHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ContactForm from "@/components/ui/ContactForm";
import GoogleMap from "@/components/ui/GoogleMap";
import Icon from "@/components/ui/Icon";

export default function ContactPage() {
  const t = useTranslations();

  return (
    <>
      <PageHeader
        title={t("contact.title")}
        subtitle={t("contact.subtitle")}
      />

      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16 stagger-children">
            <ScrollReveal>
              <div className="light-card rounded-xl p-5 text-center h-full">
                <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Icon name="phone" size={20} className="text-brand-primary" />
                </div>
                <h3 className="font-display font-semibold text-sm mb-1">{t("common.callUs")}</h3>
                <a href={CONTACT.phoneHref} className="text-brand-primary font-medium text-sm hover:text-brand-accent transition-colors">
                  {CONTACT.phone}
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="light-card rounded-xl p-5 text-center h-full">
                <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Icon name="mail" size={20} className="text-brand-primary" />
                </div>
                <h3 className="font-display font-semibold text-sm mb-1">{t("common.emailField")}</h3>
                <a href={`mailto:${CONTACT.email}`} className="text-brand-primary font-medium text-xs hover:text-brand-accent transition-colors break-all">
                  {CONTACT.email}
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="light-card rounded-xl p-5 text-center h-full">
                <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Icon name="map-pin" size={20} className="text-brand-primary" />
                </div>
                <h3 className="font-display font-semibold text-sm mb-1">{t("contact.locationTitle")}</h3>
                <a href={CONTACT.googleMapsLink} target="_blank" rel="noopener noreferrer" className="text-brand-primary font-medium text-xs hover:text-brand-accent transition-colors">
                  {CONTACT.fullAddress}
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Form + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ScrollReveal direction="left">
              <h2 className="font-display font-bold text-xl mb-6 text-text-primary">
                {t("contact.formTitle")}
              </h2>
              <ContactForm />
            </ScrollReveal>
            <ScrollReveal direction="right">
              <h2 className="font-display font-bold text-xl mb-6 text-text-primary">
                {t("contact.locationTitle")}
              </h2>
              <GoogleMap />
              <div className="mt-4">
                <a
                  href={CONTACT.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                    text-brand-primary hover:bg-brand-primary/5 transition-colors border border-border-light"
                >
                  <Icon name="map-pin" size={16} />
                  {t("common.directions")}
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}

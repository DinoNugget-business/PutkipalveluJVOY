type Props = {
  title: string;
  subtitle?: string;
};

export default function PageHeader({ title, subtitle }: Props) {
  return (
    <section className="bg-brand-dark pt-12 pb-14 sm:pt-16 sm:pb-18">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="page-heading font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-text-light mb-3">
          {title}
        </h1>
        {subtitle && (
          <p className="page-subtitle text-text-muted-dark text-base sm:text-lg max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
        <div className="mt-6 w-16 h-1 bg-brand-accent rounded-full page-accent" />
      </div>
    </section>
  );
}

import React from "react";
import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundClasses?: string;
  titleClasses?: string;
  subtitleClasses?: string;
  containerClasses?: string;
  eyebrow?: string;
  ctaHref?: string;
  ctaLabel?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundClasses = "premium-gradient",
  titleClasses = "section-heading-lg",
  subtitleClasses = "section-lead max-w-3xl mx-auto mt-6",
  containerClasses = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  eyebrow,
  ctaHref,
  ctaLabel,
}) => {
  return (
    <section
      className={`relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-24 ${backgroundClasses}`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-16 right-[8%] h-80 w-80 rounded-full bg-sage-100/80 blur-3xl" />
        <div className="absolute -bottom-20 left-[4%] h-72 w-72 rounded-full bg-terracotta-100/80 blur-3xl" />
      </div>
      <div className={`${containerClasses} relative z-10`}>
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center animate-slide-up">
          <div className="inline-flex items-center gap-3 rounded-full border border-sage-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-terracotta-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-sage-700">
              {eyebrow ?? "Revivee Homeo Clinic"}
            </span>
          </div>
          <h1 className={`${titleClasses} mt-6`}>{title}</h1>
          <p className={subtitleClasses}>{subtitle}</p>
          {ctaHref && ctaLabel ? (
            <Link
              href={ctaHref}
              className="btn-premium mt-8 inline-flex items-center justify-center px-8 py-4 text-base"
            >
              {ctaLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Hero;

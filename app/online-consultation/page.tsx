import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import OnlineConsultationForm from "../../components/OnlineConsultationForm";
import contactData from "../../data/contact.json";
import onlineHero from "../../assets/online_hero.png";
import lifestyleImg from "../../assets/minimalist_lifestyle.png";
import {
  BASE_KEYWORDS,
  PAGE_DESCRIPTIONS,
  PAGE_KEYWORDS,
  generateKeywords,
} from "../../utils/seoUtils";

export const metadata: Metadata = {
  title: "Online Consultation | Premium Homeopathy From Home",
  description: PAGE_DESCRIPTIONS.onlineConsultation,
  keywords: generateKeywords(BASE_KEYWORDS, [
    ...PAGE_KEYWORDS.onlineConsultation,
    "book online homeopathy appointment",
    "virtual consultation chennai",
    "teleconsult homeopathy",
  ]),
};

const experienceFeatures = [
  {
    title: "Global Expertise",
    desc: "Access specialized homeopathic care regardless of your geographic location.",
    icon: "🌍",
  },
  {
    title: "Vibrant Results",
    desc: "Proven protocols for skin, hormonal, and pediatric wellness.",
    icon: "🌿",
  },
  {
    title: "Personal Connection",
    desc: "In-depth video consultations that value your story and history.",
    icon: "🤝",
  },
];

const processSteps = [
  {
    title: "Secure Your Slot",
    text: "Share your health journey via our encrypted concierge form.",
  },
  {
    title: "Personalized Prep",
    text: "Receive a guide on how to prepare for your specific consultation type.",
  },
  {
    title: "Expert Review",
    text: "Connect via HD Video for a comprehensive personalised analysis.",
  },
  {
    title: "Curated Plan",
    text: "Receive your tailored treatment plan and medicine delivery details.",
  },
];

const OnlineConsultationPage = () => {
  return (
    <div className="min-h-screen bg-cream-50/30">
      {/* Hero Section - Split Layout */}
      <section className="relative pt-28 pb-16 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative z-10 space-y-6 sm:space-y-8 animate-slide-up">
              <h1 className="text-[2.4rem] sm:text-5xl lg:text-7xl font-playfair font-bold text-sage-900 leading-[1.08] tracking-tight break-words">
                Healing{" "}
                <span className="italic text-terracotta-600">Simplified</span>.{" "}
                <br />
                Care <span className="text-sage-600">Unbounded</span>.
              </h1>

              <p className="text-[1.1rem] sm:text-lg leading-relaxed text-sage-700 max-w-xl">
                Experience the peak of homeopathic excellence from the comfort
                of your sanctuary. Our virtual concierge bridges the gap between
                traditional wisdom and modern convenience.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 sm:pt-6">
                <Link
                  href="#request-form"
                  className="btn-premium w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 text-base max-sm:text-lg text-center"
                >
                  Book Virtual Slot
                </Link>
                <Link
                  href="/about"
                  className="btn-outline-premium w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 text-base max-sm:text-lg text-center"
                >
                  The Revive Way
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 pt-8 border-t border-sage-200/60">
                {[
                  { value: "5000+", label: "Happy Patients" },
                  { value: "17+", label: "Years Practice" },
                  { value: "Expert", label: "Case History" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex sm:flex-col items-center sm:items-start gap-4 sm:gap-1"
                  >
                    <p className="text-2xl font-playfair font-bold text-sage-900 leading-none">
                      {stat.value}
                    </p>
                    <p className="text-xs sm:text-[10px] font-bold uppercase tracking-widest text-sage-600">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-75 sm:h-100 lg:h-150 animate-fade-in delay-300">
              <div className="absolute -inset-4 bg-sage-200/50 rounded-[3rem] sm:rounded-[4rem] rotate-2 -z-10 blur-2xl" />
              <div className="relative h-full w-full rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden shadow-2xl border-2 sm:border-4 border-white">
                <Image
                  src={onlineHero}
                  alt="Biophilic Online Consultation"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating element */}
              <div className="absolute bottom-4 left-4 sm:-bottom-6 sm:-left-6 glass-card p-4 sm:p-6 max-w-[75vw] sm:max-w-60 animate-float z-20">
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-sage-100 flex items-center justify-center text-sm sm:text-base text-sage-600">
                    🌿
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-sage-900">
                    Holistic First
                  </p>
                </div>
                <p className="text-[10px] sm:text-xs text-sage-600 leading-relaxed">
                  "Our virtual sessions are designed to be even more personal
                  than in-person visits."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-16 lg:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-kicker mb-4">The Digital Experience</h2>
            <h3 className="section-heading">
              Why Online Consultation at Revive?
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {experienceFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="p-8 sm:p-10 rounded-4xl bg-cream-50/50 border border-sage-100 hover:bg-white hover:shadow-xl transition-all duration-500 group mx-2 sm:mx-0"
              >
                <div className="h-14 w-14 rounded-2xl bg-white shadow-sm border border-sage-100 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-sage-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-sm text-sage-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works - Visual Timeline */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-150 h-150 bg-terracotta-50 rounded-full blur-3xl opacity-50 -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center">
            <div className="relative h-75 sm:h-100 lg:h-125 rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden shadow-xl border border-sage-200">
              <Image
                src={lifestyleImg}
                alt="Homeopathy Lifestyle"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="section-kicker mb-4">The Journey</h2>
              <h3 className="section-heading mb-10">
                From First Inquiry to <br />
                Curated Healing.
              </h3>

              <div className="space-y-10">
                {processSteps.map((step, idx) => (
                  <div key={idx} className="flex gap-4 sm:gap-6 relative">
                    {idx !== processSteps.length - 1 && (
                      <div className="absolute left-6 top-12 -bottom-10 w-px bg-sage-200" />
                    )}
                    <div className="h-12 w-12 shrink-0 rounded-full bg-sage-900 flex items-center justify-center text-white font-bold text-sm z-10 shadow-lg shadow-sage-900/20">
                      0{idx + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-sage-900 mb-1.5">
                        {step.title}
                      </h4>
                      <p className="text-sm text-sage-600 leading-relaxed max-w-md">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section
        className="py-16 lg:py-24 bg-sage-900 relative overflow-hidden"
        id="request-form"
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-terracotta-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start">
            <div className="text-white lg:sticky lg:top-32">
              <h2 className="section-kicker text-terracotta-300!">
                Ready to Begin?
              </h2>
              <h3 className="text-4xl md:text-5xl font-playfair font-bold mt-4 mb-8 leading-tight">
                Your healing <br />
                journey is one <br />
                click away.
              </h3>
              <p className="text-sage-200 text-lg leading-relaxed mb-10 max-w-md">
                Don't let distance define your quality of care. Our virtual
                clinic is open, personal, and dedicated to your personalised
                wellness.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center text-xl">
                    📞
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-terracotta-300">
                      Fast Track
                    </p>
                    <p className="text-lg font-bold">
                      {contactData.clinic_info.phone.primary}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center text-xl">
                    💬
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-terracotta-300">
                      Available Mode
                    </p>
                    <p className="text-lg font-bold">
                      Video / Audio / Home Visit
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <OnlineConsultationForm />
          </div>
        </div>
      </section>

      {/* Quick FAQ */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-kicker mb-4">Concierge Support</h2>
            <h3 className="section-heading">Frequently Asked Questions</h3>
          </div>

          <div className="grid gap-4">
            {[
              {
                q: "Is virtual consultation as effective as in-person?",
                a: "Absolutely. Homeopathic case-taking relies heavily on detailed observations and history. Our HD video interface allows for deep connection and thorough analysis, often capturing nuances just as well as an in-clinic visit.",
              },
              {
                q: "How do I receive my medicines?",
                a: "Once your plan is curated, we dispense and ship your personalized remedies directly to your doorstep, globally or locally, ensuring continuity of care.",
              },
              {
                q: "Which mode is best for me?",
                a: "We recommend HD Video for first-time consultations to build rapport. Phone or WhatsApp can be suitable for quick follow-ups. Our concierge will guide you upon booking.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl border border-sage-100 bg-cream-50/30 hover:border-sage-200 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <h4 className="text-lg font-bold text-sage-900 mb-3">
                  {faq.q}
                </h4>
                <p className="text-sm text-sage-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnlineConsultationPage;

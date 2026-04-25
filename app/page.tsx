import React from "react";
import HomeHero from "../components/home/HomeHero";
import dynamic from "next/dynamic";
import homeData from "../data/home.json";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import skinFocus from "../assets/skin_focus.png";
import womensFocus from "../assets/womens_focus.png";
import painFocus from "../assets/pain_focus.png";
import childFocus from "../assets/child_focus.png";
import drNritiya from "../assets/Photo.jpg";
import {
  PAGE_KEYWORDS,
  BASE_KEYWORDS,
  generateKeywords,
} from "../utils/seoUtils";

const FAQSection = dynamic(() => import("../components/home/FAQSection"), {
  ssr: true,
  loading: () => <div className="h-96 w-full animate-pulse bg-sage-50 rounded-[3rem] my-20" />
});

export const metadata: Metadata = {
  title: "Revivee Homeo Clinic | Best Homeopathy Clinic in Chennai",
  description:
    "Experience premium, holistic healing at Revivee Homeo Clinic, the best homeopathy clinic in Chennai. Specializing in Psoriasis, PCOS, Chronic Pain, and Pediatric care since 2007.",
  keywords: generateKeywords(BASE_KEYWORDS, [
    ...PAGE_KEYWORDS.home,
    "best homeopathy clinic chennai",
    "homeopathic doctor anna nagar",
    "natural healing psoriasis",
    "pcos treatment homeopathy",
  ]),
};

export default function Home() {
  const highIntentConditions = [
    {
      title: "Skin & Psoriasis",
      keyword: "Best Skin Care Homeopathy",
      image: skinFocus,
      link: `/contact?interest=${encodeURIComponent("Skin & Psoriasis")}`,
      desc: "Revolutionary constitutional treatment for chronic Psoriasis, Eczema, and Acne.",
    },
    {
      title: "Women's Health & PCOS",
      keyword: "PCOS Treatment Chennai",
      image: womensFocus,
      link: `/contact?interest=${encodeURIComponent("Women's Health & PCOS")}`,
      desc: "Safe, natural hormonal balancing for PCOS, PCOD, and menstrual regularities.",
    },
    {
      title: "Pain & Arthritis",
      keyword: "Chronic Pain Relief",
      image: painFocus,
      link: `/contact?interest=${encodeURIComponent("Pain & Arthritis")}`,
      desc: "Effective long-term management for Sciatica, Back Pain, and Rheumatoid Arthritis.",
    },
    {
      title: "Child Wellness",
      keyword: "Pediatric Homeopathy",
      image: childFocus,
      link: `/contact?interest=${encodeURIComponent("Child Wellness")}`,
      desc: "Boosting natural immunity for recurrent allergies, cold, and tonsillitis in children.",
    },
  ];

  return (
    <div className="min-h-screen selection:bg-sage-200 selection:text-sage-900">
      <HomeHero />

      <section className="-mt-10 pb-20 md:-mt-12 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.75rem] border border-sage-200/70 bg-linear-to-br from-white/95 via-cream-50/90 to-sage-50/85 p-6 shadow-[0_36px_90px_rgba(24,34,21,0.1)] md:p-10">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-12 -left-12 h-52 w-52 rounded-full bg-terracotta-100/55 blur-3xl" />
              <div className="absolute -bottom-16 right-0 h-64 w-64 rounded-full bg-sage-200/50 blur-3xl" />
            </div>

            <div className="relative z-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="space-y-6">
                <h2 className="section-kicker">What are you looking for?</h2>
                <h3 className="section-heading">
                  Expert care for{" "}
                  <span className="italic text-terracotta-600">complex</span>{" "}
                  conditions.
                </h3>
                <p className="section-lead max-w-xl text-sage-800">
                  We specialize in constitutional treatment for conditions where
                  conventional medicine often only manages symptoms.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/treatments"
                    className="btn-premium inline-flex items-center justify-center px-7 py-4 text-base"
                  >
                    Find your treatment path
                  </Link>
                  <Link
                    href="/online-consultation"
                    className="btn-outline-premium inline-flex items-center justify-center px-7 py-4 text-base"
                  >
                    Start with consultation
                  </Link>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {homeData.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-3xl border border-sage-100 bg-white p-5 shadow-[0_10px_28px_rgba(24,34,21,0.07)]"
                    >
                      <div className="text-3xl font-playfair font-bold text-sage-900">
                        {stat.number}
                      </div>
                      <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.24em] text-sage-600">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {highIntentConditions.map((condition, index) => (
                  <Link
                    key={index}
                    href={condition.link}
                    className="group relative overflow-hidden rounded-4xl aspect-4/5 border border-sage-200/60 bg-sage-900 shadow-[0_26px_70px_rgba(24,34,21,0.16)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_34px_80px_rgba(24,34,21,0.2)]"
                  >
                    <Image
                      src={condition.image}
                      alt={condition.title}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-sage-950/95 via-sage-900/65 to-sage-900/20" />
                    <div className="absolute bottom-0 left-0 w-full p-6 space-y-3">
                      <span className="inline-block rounded-full bg-black/25 px-3 py-1 text-[10px] font-bold tracking-[0.3em] text-terracotta-200 uppercase">
                        {condition.keyword}
                      </span>
                      <h4 className="text-2xl font-playfair font-bold text-white leading-none">
                        {condition.title}
                      </h4>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {condition.desc}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Brand Identity: The Revive Edge & Leadership */}
      <section className="py-24 bg-linear-to-b from-white to-sage-50/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-kicker mb-4">The Revive Edge</h2>
            <h3 className="section-heading max-w-2xl mx-auto">
              Clinical Excellence Meets <span className="italic text-terracotta-600">Empathetic Care.</span>
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-24">
            {homeData.features.map((feature, i) => (
              <div
                key={i}
                className="group relative flex flex-col p-8 rounded-[2.5rem] bg-white border border-sage-100 shadow-sm hover:shadow-xl hover:border-sage-200 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-24 h-24 bg-sage-50 rounded-full group-hover:scale-150 transition-transform duration-700" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-sage-900 flex items-center justify-center text-white mb-6 group-hover:bg-terracotta-600 transition-colors duration-500">
                    {feature.icon === "leaf" && (
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707"/></svg>
                    )}
                    {feature.icon === "user" && (
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                    )}
                    {feature.icon === "heart" && (
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                    )}
                    {feature.icon === "award" && (
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
                    )}
                  </div>
                  <h4 className="text-xl font-bold text-sage-900 mb-3 group-hover:text-sage-800">{feature.title}</h4>
                  <p className="text-sm leading-relaxed text-sage-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative rounded-[3rem] bg-sage-900 overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-terracotta-500 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white rounded-full blur-[80px]" />
            </div>

            <div className="relative z-10 grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative h-[450px] lg:h-auto overflow-hidden">
                <Image
                  src={drNritiya}
                  alt="Dr. Nritiya Dave"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                  className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-linear-to-t from-sage-950 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8">
                  <div className="bg-terracotta-600 text-white text-[10px] font-bold uppercase tracking-[0.3em] px-4 py-2 rounded-full inline-block mb-3">
                    Chief Homeopath
                  </div>
                  <h4 className="text-3xl font-playfair font-bold text-white tracking-wide">Dr. Nritiya Dave</h4>
                </div>
              </div>

              <div className="p-8 md:p-16 lg:p-20 flex flex-col justify-center">
                <svg className="w-12 h-12 text-terracotta-500 mb-8 opacity-40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 16.8954 21.017 18V21M14.017 21H21.017M14.017 21C12.9124 21 12.017 20.1046 12.017 19V12C12.017 10.8954 12.9124 10 14.017 10H17.017C18.1216 10 19.017 10.8954 19.017 12V15M3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.01695 16H8.01695C9.12152 16 10.017 16.8954 10.017 18V21M3.017 21H10.017M3.017 21C1.91243 21 1.01695 20.1046 1.01695 19V12C1.01695 10.8954 1.91243 10 3.017 10H6.01695C7.12152 10 8.01695 10.8954 8.01695 12V15" />
                </svg>
                
                <p className="text-xl md:text-2xl leading-relaxed text-sage-100 font-playfair italic mb-12">
                  &quot;Our goal is not just to suppress disease, but to revitalize the body&apos;s inherent vital force so that it can heal itself.&quot;
                </p>

                <div className="grid grid-cols-2 gap-8 mb-12">
                  <div>
                    <p className="text-4xl font-bold text-white mb-2">17+</p>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-sage-400">Clinical Experience</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-white mb-2">5000+</p>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-sage-400">Happy Patients</p>
                  </div>
                </div>

                <Link
                  href="/about"
                  className="btn-premium inline-flex py-5 text-center justify-center tracking-[0.1em]"
                >
                  Read The Full Story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-[3rem] bg-white/80 p-10 md:p-14 shadow-[0_28px_70px_rgba(24,34,21,0.1)] border border-white/70">
            <div className="mx-auto h-1 w-16 rounded-full bg-sage-500" />
            <h3 className="mt-8 text-3xl md:text-4xl font-playfair font-bold text-sage-900 italic">
              &quot;{homeData.story.mission.content}&quot;
            </h3>
            <div className="mt-6 flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg
                  key={s}
                  className="h-6 w-6 text-terracotta-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.32em] text-sage-500">
              A legacy of healing excellence in Chennai since 2007
            </p>
          </div>
        </div>
      </section>

      <FAQSection />
    </div>
  );
}

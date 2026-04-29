"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import doctorPortrait from "../../assets/Photo.jpg";
const remedyPills =
  "https://images.unsplash.com/photo-1725267882596-2d08e560b250?q=80&w=1053&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const HomeHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-12 md:pt-36 md:pb-24 premium-gradient">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-5%] top-[-5%] h-125 w-125 rounded-full bg-sage-100/70 blur-[120px] animate-pulse" />
        <div className="absolute right-[-5%] top-[10%] h-150 w-150 rounded-full bg-terracotta-50/80 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-18 items-center">
          <div className="space-y-5 md:space-y-8 animate-slide-up">
            <h1 className="text-[2.45rem] sm:text-6xl lg:text-7xl xl:text-8xl font-playfair font-bold leading-[1.06] sm:leading-[1.03] tracking-tight text-sage-900 break-words">
              Personalised medicine for
              <span className="italic text-terracotta-600"> acute and chronic complaints.</span>
            </h1>

            <p className="max-w-xl text-[1.12rem] sm:text-lg md:text-xl leading-relaxed text-sage-700 font-medium">
              Evidence-based homeopathic treatments for everything from a common cold to complex cases like cancer, with structured case assessment, personalised prescriptions, and monitored follow-up.
            </p>

            <div className="grid grid-cols-1 sm:flex gap-3 sm:gap-4 pt-1">
              <Link
                href="/online-consultation"
                className="group btn-premium px-8 sm:px-10 py-4 sm:py-5 text-base max-sm:text-lg text-center shadow-xl shadow-sage-900/20"
              >
                Book Clinical Consultation
              </Link>
              <Link
                href="/treatments"
                className="group btn-outline-premium px-8 sm:px-10 py-4 sm:py-5 text-base max-sm:text-lg text-center bg-white/55 backdrop-blur-sm"
              >
                Review Treatment Areas
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
              <div className="rounded-2xl border border-sage-200 bg-white/85 px-4 py-2.5 text-sm max-sm:text-base font-semibold text-sage-800">
                Individual case analysis
              </div>
              <div className="rounded-2xl border border-sage-200 bg-white/85 px-4 py-2.5 text-sm max-sm:text-base font-semibold text-sage-800">
                Gentle long-term approach
              </div>
              <div className="rounded-2xl border border-sage-200 bg-white/85 px-4 py-2.5 text-sm max-sm:text-base font-semibold text-sage-800">
                In-clinic and online consults
              </div>
            </div>

            <p className="text-sm max-sm:text-base text-sage-600 font-medium">
              Easy appointment flow: choose mode, share concerns, start your
              guided treatment. Trusted clinical care since 2007.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-sage-200/70">
              <div className="rounded-2xl bg-white/85 border border-sage-100 px-4 py-3 text-center">
                <p className="text-2xl sm:text-3xl font-playfair font-bold text-sage-900">
                  17+
                </p>
                <p className="text-[11px] max-sm:text-xs uppercase tracking-[0.12em] text-sage-600 font-bold">
                  Years Practice
                </p>
              </div>
              <div className="rounded-2xl bg-white/85 border border-sage-100 px-4 py-3 text-center">
                <p className="text-2xl sm:text-3xl font-playfair font-bold text-sage-900">
                  5k+
                </p>
                <p className="text-[11px] max-sm:text-xs uppercase tracking-[0.12em] text-sage-600 font-bold">
                  Patients Guided
                </p>
              </div>
              <div className="rounded-2xl bg-white/85 border border-sage-100 px-4 py-3 text-center">
                <p className="text-2xl sm:text-3xl font-playfair font-bold text-sage-900">
                  40+
                </p>
                <p className="text-[11px] max-sm:text-xs uppercase tracking-[0.12em] text-sage-600 font-bold">
                  Legacy Years
                </p>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in group">
            <div className="absolute -inset-4 bg-sage-200/45 rounded-[4rem] rotate-2 -z-10 blur-2xl group-hover:rotate-1 transition-transform duration-1000" />

            <div className="grid gap-4 sm:gap-5 lg:gap-6">
              <div className="relative aspect-4/5 rounded-[3.4rem] overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src={doctorPortrait}
                  alt="Dr. Nritiya Dave"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                  className="object-cover object-top scale-105 group-hover:scale-100 transition-transform duration-1000"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-sage-900/60 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 rounded-3xl bg-white/88 backdrop-blur-md px-4 py-3.5 border border-white/90 shadow-lg">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-sage-700 mb-1.5">
                    Led by Dr. Nritiya Dave
                  </p>
                  <h4 className="text-lg sm:text-xl font-playfair font-bold text-sage-900 leading-tight">
                    Care that is calm, clear, and consistent.
                  </h4>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[2.4rem] border border-white bg-white shadow-[0_18px_48px_rgba(24,34,21,0.1)]">
                <Image
                  src={remedyPills}
                  alt="Homeopathic pills and remedies"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/90 backdrop-blur-sm px-3.5 py-2.5 border border-white/80">
                  <p className="text-xs sm:text-sm font-semibold text-sage-800 text-center">
                    Recognizable remedies. Personalized prescriptions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;

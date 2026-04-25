"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import clinicInterior from "../../assets/clinic_interior.png";

const HomeHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 premium-gradient">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-5%] top-[-5%] h-[500px] w-[500px] rounded-full bg-sage-100/60 blur-[120px] animate-pulse" />
        <div className="absolute right-[-5%] top-[10%] h-[600px] w-[600px] rounded-full bg-terracotta-50/70 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Side: Impactful Text */}
          <div className="space-y-8 animate-slide-up">
            <h1 className="text-[2.8rem] sm:text-6xl lg:text-7xl xl:text-8xl font-playfair font-bold leading-[1.05] tracking-tight text-sage-900">
              Healing that <br />
              <span className="italic text-terracotta-600">feels like home.</span>
            </h1>

            <p className="max-w-xl text-lg md:text-xl leading-relaxed text-sage-700">
              We go beyond surface symptoms to restore your body's natural balance. Experience personalized care for chronic, hormonal, and pediatric wellness since 2007.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/online-consultation"
                className="group btn-premium px-10 py-5 text-base text-center shadow-xl shadow-sage-900/20"
              >
                Book Consultation
              </Link>
              <Link
                href="/treatments"
                className="group btn-outline-premium px-10 py-5 text-base text-center bg-white/50 backdrop-blur-sm"
              >
                Explore Treatments
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-10 border-t border-sage-200/60">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-sage-100 flex items-center justify-center text-[10px] font-bold overflow-hidden">
                    <div className={`h-full w-full bg-sage-${i * 100 + 400}`} />
                  </div>
                ))}
                <div className="h-10 w-10 rounded-full border-2 border-white bg-sage-900 flex items-center justify-center text-[10px] font-bold text-white">
                  5k+
                </div>
              </div>
              <div>
                <p className="text-sm font-bold text-sage-900">5,000+ Happy Patients</p>
                <p className="text-xs text-sage-500">Trusted by families for 17+ years</p>
              </div>
            </div>
          </div>

          {/* Right Side: Visual Masterpiece */}
          <div className="relative animate-fade-in group">
            {/* Main Decorative Frame */}
            <div className="absolute -inset-4 bg-sage-200/40 rounded-[4rem] rotate-3 -z-10 blur-2xl group-hover:rotate-1 transition-transform duration-1000" />
            
            <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src={clinicInterior}
                alt="Revivee Premium Clinic Interior"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                priority
              />
              
              {/* Floating Overlay Badge */}
              <div className="absolute inset-0 bg-linear-to-t from-sage-900/40 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 glass-card p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-sage-800">Clinic Excellence</p>
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(s => <span key={s} className="text-terracotta-500 text-xs text-bold">★</span>)}
                  </div>
                </div>
                <h4 className="text-xl font-playfair font-bold text-sage-900 mb-2">Sustainable Healing</h4>
                <p className="text-xs text-sage-600 leading-relaxed">
                  Our Chennai clinic is designed to be a sanctuary of health—blending nature with 17 years of clinical homeopathic wisdom.
                </p>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -top-6 -right-6 h-28 w-28 rounded-full bg-white shadow-2xl flex flex-col items-center justify-center border border-sage-100 animate-float z-30">
               <p className="text-2xl font-bold text-sage-900 leading-none">95%</p>
               <p className="text-[8px] font-bold uppercase tracking-widest text-terracotta-600 mt-1">Success</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeHero;

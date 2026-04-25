"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import DoctorCard from "../../components/DoctorCard";
import aboutData from "../../data/about.json";
import { Metadata } from "next";
import heritageBridge from "../../assets/heritage_bridge.png";

const AboutPage = () => {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Immersive Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden premium-gradient">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sage-100/40 rounded-full blur-[120px] -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-terracotta-50/50 rounded-full blur-[100px] -ml-24 -mb-24" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-3 rounded-full border border-sage-200 bg-white/90 px-4 py-2 shadow-sm mb-8 animate-slide-up">
            <span className="flex h-2 w-2 rounded-full bg-terracotta-500 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-sage-800">
              A Legacy of Natural Healing
            </span>
          </div>

          <h1 className="text-4xl md:text-7xl lg:text-8xl font-playfair font-bold text-sage-900 leading-[1.1] tracking-tight mb-8 animate-slide-up [animation-delay:200ms]">
            Where Heritage <br />
            <span className="italic text-terracotta-600">Meets Modern Care.</span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-sage-700 leading-relaxed animate-slide-up [animation-delay:400ms]">
            Since 2007, Revivee Homeo Clinic has been dedicated to restoring health through constitutional homeopathy, 
            guided by a clinical lineage that spans over four decades.
          </p>
        </div>
      </section>

      {/* Heritage & Legacy Feature */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <div className="relative group animate-fade-in">
              <div className="absolute -inset-4 bg-sage-100 rounded-[4rem] -rotate-3 -z-10 transition-transform duration-1000 group-hover:rotate-0" />
              <div className="relative aspect-square rounded-[3.5rem] overflow-hidden shadow-2xl">
                <Image
                  src={heritageBridge}
                  alt="Traditional and Modern Homeopathy"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                  className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 glass-card p-8 max-w-xs shadow-2xl hidden md:block">
                 <p className="text-4xl font-playfair font-bold text-sage-900 mb-1">40+</p>
                 <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-sage-600">Years of Healing Legacy</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="section-kicker">Our Heritage</h2>
                <h3 className="section-heading tracking-tight leading-tight">
                  A Legacy of <br />
                  <span className="italic text-terracotta-600">Generational Expertise.</span>
                </h3>
              </div>

              <div className="space-y-6 text-lg text-sage-700 leading-relaxed">
                <p>
                  Revivee Homeo Clinic is built on a foundation of generational expertise. 
                  The foundation of our practice was laid by Dr. Nritiya Dave&apos;s father, 
                  a passionate homeopath who has devoted over 40 years to the practice of healing through nature.
                </p>
                <p>
                  Today, we continue this journey by blending time-tested homeopathic principles 
                  with modern health insights to deliver holistic, trustworthy care for every generation.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-4">
                <div>
                  <p className="text-3xl font-bold text-sage-900 mb-1">17+</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-sage-600">Years Clinical Exp.</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-sage-900 mb-1">5000+</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-sage-600">Happy Patients</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The Chief Homeopath Spotlight */}
      <DoctorCard
        name={aboutData.team[0].name}
        title={aboutData.team[0].title}
        qualification={aboutData.team[0].qualification}
        bio={aboutData.team[0].bio}
        achievements={aboutData.team[0].achievements}
      />

      {/* Clinical Ethos / Values */}
      <section className="py-24 bg-cream-50 overflow-hidden relative">
        <div className="absolute top-0 left-0 h-full w-full opacity-[0.03] pointer-events-none overflow-hidden">
           <div className="absolute top-10 left-10 text-[20rem] font-playfair font-bold text-sage-900">CARE</div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="section-kicker mb-4">Our Clinical Ethos</h2>
            <h3 className="section-heading">Principles of <span className="italic text-terracotta-600">Sustainble Health.</span></h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutData.values.map((value, idx) => (
              <div 
                key={idx}
                className="group p-10 bg-white rounded-[3rem] border border-sage-100 shadow-sm hover:shadow-xl hover:border-sage-200 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-sage-900 flex items-center justify-center text-white mb-8 group-hover:bg-terracotta-600 transition-colors duration-500">
                   {value.icon === "leaf" && (
                     <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707"/></svg>
                   )}
                   {value.icon === "user-check" && (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                   )}
                   {value.icon === "microscope" && (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/></svg>
                   )}
                   {value.icon === "heart" && (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                   )}
                </div>
                <h4 className="text-2xl font-bold text-sage-900 mb-4">{value.title}</h4>
                <p className="text-base text-sage-600 leading-relaxed">
                   {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Foundational Mission CTA */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[4rem] bg-sage-900 border border-sage-800 p-12 md:p-20 text-center overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-linear-to-b from-white to-transparent blur-3xl" />
            </div>
            
            <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
               <h3 className="text-3xl md:text-5xl lg:text-7xl font-playfair font-bold text-white tracking-tight leading-tight">
                 Continuing local healing, <br />
                 <span className="italic text-terracotta-400">worldwide impact.</span>
               </h3>
               <p className="text-lg text-sage-200 leading-relaxed font-medium">
                  Whether you visit us in Purasawalkam or connect from across the globe, 
                  you are joining a legacy that values your health as our highest priority.
               </p>
               <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="btn-premium px-12 py-5 text-base">
                    Begin Your Health Journey
                  </Link>
                  <Link href="/online-consultation" className="btn-outline-premium border-white/20 text-white px-12 py-5 text-base hover:bg-white/10">
                    Online Consultation
                  </Link>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

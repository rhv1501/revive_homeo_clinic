"use client";

import React, { Suspense } from "react";
import contactData from "../../data/contact.json";
import ContactForm from "../../components/ContactForm";

const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* 1. PRIMARY CONTACT GATEWAY (V1 PRIORITY) */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-sage-50">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-terracotta-100/30 rounded-full blur-[120px] -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sage-200/40 rounded-full blur-[100px] -ml-24 -mb-24" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-700 animate-slide-up">
           <div className="text-center mb-12 space-y-4">
              <h1 className="text-3xl md:text-5xl font-playfair font-bold text-sage-900 tracking-tight">
                 Confirm Your Inquiry <span className="italic text-terracotta-600">Session.</span>
              </h1>
              <p className="text-sage-600 font-medium max-w-xl mx-auto">
                 Please provide your details below for a direct clinical evaluation.
              </p>
           </div>

           <div className="relative">
              <div className="absolute -inset-4 bg-white/50 blur-2xl rounded-[4rem] -z-10" />
              <Suspense fallback={<div className="h-[600px] bg-white rounded-[3rem] animate-pulse shadow-xl" />}>
                 <ContactForm />
              </Suspense>
           </div>
        </div>
      </section>

      {/* 2. CLINICAL LANDING & TRUST (BELOW FORM) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-10">
                 <div className="space-y-6">
                    <h2 className="section-kicker">Clinical Heritage</h2>
                    <h3 className="section-heading leading-tight">
                       Expert Care Led by <br />
                       <span className="italic text-terracotta-600">Dr. Nritiya Dave</span>
                    </h3>
                    <p className="text-lg text-sage-700 leading-relaxed max-w-xl font-medium">
                       For 17+ years, we have been Chennai&apos;s leading constitutional homeopathy clinic. 
                       We don&apos;t just suppress symptoms; we revitalize your body&apos;s vital force.
                    </p>
                 </div>

                 <div className="grid sm:grid-cols-2 gap-8">
                    <div className="p-8 rounded-[2.5rem] bg-sage-900 text-white shadow-xl space-y-4">
                       <p className="text-4xl font-bold font-playfair">17+</p>
                       <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-sage-600">Years Clinical wisdom</p>
                    </div>
                    <div className="p-8 rounded-[2.5rem] bg-sage-50 text-sage-900 border border-sage-100 shadow-sm space-y-4">
                       <p className="text-4xl font-bold font-playfair">5k+</p>
                       <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-sage-600 font-bold">Successful Recoveries</p>
                    </div>
                 </div>
              </div>

              <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border-4 border-white aspect-square bg-sage-50 flex items-center justify-center">
                 {/* This would be an office image or team image */}
                 <div className="text-center p-12 space-y-6">
                    <div className="w-20 h-20 bg-terracotta-600 rounded-full mx-auto flex items-center justify-center text-white text-3xl">🏆</div>
                    <h4 className="text-2xl font-playfair font-bold text-sage-900 leading-tight">Award-winning constitutional therapy in the heart of Chennai.</h4>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 3. MAP & DIRECT INFO */}
      <section className="py-24 bg-sage-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-12">
               <div className="flex items-center gap-6 group">
                 <div className="w-14 h-14 bg-sage-900 rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                 </div>
                 <div className="space-y-0.5 text-center md:text-left">
                    <p className="text-[10px] font-bold text-sage-600 uppercase tracking-widest">Call Clinic Directly</p>
                    <a href={`tel:${contactData.clinic_info.phone.primary}`} className="text-2xl font-bold text-sage-900 uppercase">
                       {contactData.clinic_info.phone.primary}
                    </a>
                 </div>
               </div>
               
               <div className="flex items-center gap-6 group">
                 <div className="w-14 h-14 bg-sage-900 rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                 </div>
                 <div className="space-y-0.5 text-center md:text-left">
                    <p className="text-[10px] font-bold text-sage-600 uppercase tracking-widest">Our Practice Location</p>
                    <p className="text-xl font-bold text-sage-900 uppercase">
                       {contactData.clinic_info.address.city}, Tamil Nadu
                    </p>
                 </div>
               </div>
           </div>

           <div className="relative rounded-[4rem] overflow-hidden shadow-3xl aspect-21/9 border-8 border-white">
             <iframe
               src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1943.284207908868!2d80.2541248!3d13.085939!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA1JzA5LjQiTiA4MMKwMTUnMTQuOSJF!5e0!3m2!1sen!2sin!4v1712345678901"
               width="100%"
               height="100%"
               style={{ border: 0, filter: "grayscale(1) contrast(1.1)" }}
               allowFullScreen={true}
               loading="lazy"
             ></iframe>
           </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

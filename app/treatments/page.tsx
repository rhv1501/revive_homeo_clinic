"use client";

import React from "react";
import Link from "next/link";
import TreatmentCard from "../../components/TreatmentCard";
import servicesData from "../../data/services.json";

const TreatmentsPage = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": servicesData.services.map((service, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "Service",
        "name": service.category,
        "description": service.description,
        "provider": {
          "@type": "MedicalBusiness",
          "name": "Revivee Homeo Clinic"
        }
      }
    }))
  };

  return (
    <div className="relative min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* Immersive Treatments Hero */}
      <section className="relative pt-32 pb-16 md:pt-44 md:pb-24 overflow-hidden premium-gradient">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sage-100/40 rounded-full blur-[120px] -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-terracotta-50/50 rounded-full blur-[100px] -ml-24 -mb-24" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-3 rounded-full border border-sage-200 bg-white/90 px-4 py-2 shadow-sm mb-8 animate-slide-up">
            <span className="flex h-2 w-2 rounded-full bg-sage-500 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-sage-800">
               15 Specialized Treatment Areas
            </span>
          </div>

          <h1 className="text-4xl md:text-7xl lg:text-8xl font-playfair font-bold text-sage-900 leading-[1.1] tracking-tight mb-8 animate-slide-up [animation-delay:200ms]">
            Healing for Every <br />
            <span className="italic text-terracotta-600">Vital System.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-sage-700 leading-relaxed animate-slide-up [animation-delay:400ms]">
             Comprehensive constitutional care designed for profound, long-term healing. 
             Explore our full therapeutic range below.
          </p>
        </div>
      </section>

      {/* Quick Access Grid / Table of Contents */}
      <section className="py-12 bg-white relative z-20 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 md:p-12 border-sage-100 shadow-xl rounded-[3rem]">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-sage-600 mb-8 text-center">Quick Access Hub</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 font-bold">
              {servicesData.services.map((service, idx) => (
                <a
                  key={idx}
                  href={`#${service.category.replace(/\s+/g, '-').toLowerCase()}`}
                  className="px-4 py-5 rounded-2xl bg-sage-50 border border-sage-100 text-[10px] sm:text-xs uppercase tracking-widest text-sage-700 text-center hover:bg-sage-900 hover:text-white hover:shadow-lg transition-all duration-300 active:scale-95"
                >
                  {service.category}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Treatment Experience - Show All 15 */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-20 space-y-4">
             <h2 className="section-kicker">Clinical Catalog</h2>
             <h3 className="section-heading tracking-tight leading-tight">Expert Homeopathic <br/>Inquiry Hub.</h3>
          </div>

          {/* All 15 Cards with IDs for Anchoring */}
          <div className="space-y-20">
            {servicesData.services.map((service, idx) => (
              <div key={service.category} id={service.category.replace(/\s+/g, '-').toLowerCase()} className="scroll-mt-32">
                <TreatmentCard
                  category={service.category}
                  image={service.image}
                  description={service.description}
                  key_benefits={service.key_benefits}
                  conditions={service.conditions}
                  index={idx}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-sage-900 overflow-hidden relative">
         <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-8">
            <h4 className="text-terracotta-400 text-xs font-bold uppercase tracking-[0.4em]">The Revive Philosophy</h4>
            <p className="text-3xl md:text-6xl font-playfair text-white italic leading-tight">
               &quot;We look at the tree, but we treat the roots.&quot;
            </p>
            <div className="w-16 h-1 bg-terracotta-500 mx-auto rounded-full" />
            <p className="text-sage-300 text-xl max-w-xl mx-auto leading-relaxed">
               Every system in your body is connected. Our treatment areas reflect the specialized experience 
               required to manage chronic, complex, and metabolic concerns.
            </p>
         </div>
      </section>

      {/* Final Conversion Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[4rem] bg-cream-50/50 border border-sage-100 p-12 md:p-24 text-center overflow-hidden shadow-sm">
            <div className="relative z-10 space-y-10 max-w-3xl mx-auto">
               <h3 className="text-3xl md:text-7xl font-playfair font-bold text-sage-900 tracking-tight leading-tight">
                 Find clarity in <br />
                 <span className="italic text-terracotta-600">natural healing.</span>
               </h3>
               <p className="text-lg text-sage-600 leading-relaxed font-medium">
                  Select a category above or book a primary session to let Dr. Dave 
                  personally map your constitutional therapy.
               </p>
               <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="btn-premium px-12 py-5 text-base shadow-xl">
                    Book Primary Session
                  </Link>
                  <Link href="/online-consultation" className="btn-outline-premium px-12 py-5 text-base hover:bg-sage-600 hover:text-white">
                    Start Online Consultation
                  </Link>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TreatmentsPage;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import clinicInterior from "../../assets/clinic_interior.png";
import onlineConsultation from "../../assets/online_hero.png";

const BookingGuide = () => {
  const steps = {
    clinic: [
      {
        id: "01",
        title: "Reserve Your Slot",
        desc: "Call or use our priority form to choose a time that fits your schedule.",
      },
      {
        id: "02",
        title: "In-Depth Case Study",
        desc: "Meet Dr. Nritiya Dave for a comprehensive constitutional analysis.",
      },
      {
        id: "03",
        title: "Curated Remedies",
        desc: "Receive your personalized treatment plan and dispensed medicines on-site.",
      },
    ],
    online: [
      {
        id: "01",
        title: "Digital Onboarding",
        desc: "Complete our secure health profile to share your history and concerns.",
      },
      {
        id: "02",
        title: "HD Video Connection",
        desc: "Consult virtually from anywhere in the world via our private telehealth portal.",
      },
      {
        id: "03",
        title: "Global Delivery",
        desc: "Your custom medicine kit is prepared and shipped directly to your doorstep.",
      },
    ],
  };

  return (
    <section className="py-24 bg-cream-50/50 overflow-hidden" id="booking-guide">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="section-kicker mb-4">Start Your Healing</h2>
          <h3 className="section-heading">How to Consult with Revive</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Pathway 1: In-Clinic */}
          <div className="group space-y-10 animate-fade-in">
            <div className="relative h-[350px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src={clinicInterior}
                alt="Revivee Homeo Clinic Interior Chennai"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-sage-900/90 via-sage-900/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="inline-block px-4 py-1.5 bg-terracotta-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-3">
                  Chennai Clinic
                </div>
                <h4 className="text-3xl font-playfair font-bold text-white">In-Person Excellence</h4>
              </div>
            </div>

            <div className="space-y-8 pl-4 border-l-2 border-sage-200">
              {steps.clinic.map((step) => (
                <div key={step.id} className="relative pl-12 group/step">
                  <span className="absolute left-[-2.1rem] top-0 text-5xl font-playfair font-black text-sage-100 transition-colors group-hover/step:text-terracotta-100 selection:bg-transparent">
                    {step.id}
                  </span>
                  <h5 className="text-xl font-bold text-sage-900 mb-2">{step.title}</h5>
                  <p className="text-sage-600 leading-relaxed text-sm max-w-md">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/contact"
                className="btn-premium w-full sm:w-auto text-center justify-center px-10"
              >
                Book In-Clinic Slot
              </Link>
            </div>
          </div>

          {/* Pathway 2: Online */}
          <div className="group space-y-10 animate-fade-in delay-200">
            <div className="relative h-[350px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src={onlineConsultation}
                alt="Virtual Homeopathy Consultation"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-terracotta-900/90 via-terracotta-900/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="inline-block px-4 py-1.5 bg-sage-800 text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-3">
                  Global Access
                </div>
                <h4 className="text-3xl font-playfair font-bold text-white">Virtual Concierge</h4>
              </div>
            </div>

            <div className="space-y-8 pl-4 border-l-2 border-terracotta-200">
              {steps.online.map((step) => (
                <div key={step.id} className="relative pl-12 group/step">
                  <span className="absolute left-[-2.1rem] top-0 text-5xl font-playfair font-black text-terracotta-50 transition-colors group-hover/step:text-sage-100 selection:bg-transparent">
                    {step.id}
                  </span>
                  <h5 className="text-xl font-bold text-sage-900 mb-2">{step.title}</h5>
                  <p className="text-sage-600 leading-relaxed text-sm max-w-md">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/online-consultation"
                className="btn-outline-premium w-full sm:w-auto text-center justify-center px-10 border-terracotta-400 text-terracotta-700 hover:bg-terracotta-600 hover:text-white"
              >
                Start Online Journey
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingGuide;

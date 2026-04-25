import React from "react";
import Image from "next/image";
import testimonialsData from "../../data/testimonials.json";
import drSamuelImage from "../../assets/Dr Samuel.png";
import {
  PAGE_KEYWORDS,
  BASE_KEYWORDS,
  generateKeywords,
} from "../../utils/seoUtils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Success Stories & Patient Testimonials | Healing Journeys",
  description:
    "Read real success stories from patients who found lasting relief at Revivee Homeo Clinic. From psoriasis to chronic pain, discover how constitutional homeopathy changes lives.",
  keywords: generateKeywords(BASE_KEYWORDS, [
    ...PAGE_KEYWORDS.testimonials,
    "patient reviews homeopathy chennai",
    "successful psoriasis treatment stories",
    "homeopathy pcos results",
  ]),
};

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen pt-20 page-panel">
      {/* Premium Hero Section */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-sage-50/30 opacity-40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8 animate-fade-in">
          <h2 className="section-kicker">Voices of Healing</h2>
          <h1 className="section-heading-lg">
            Real Stories,{" "}
            <span className="text-terracotta-600 italic">Remarkable</span>{" "}
            Results.
          </h1>
          <p className="section-lead max-w-3xl mx-auto">
            Every patient at Revivee has a unique story. Explore the journeys of
            those who chose a natural, constitutional path to wellness.
          </p>

          {/* Premium Google Trust Card */}
          <div className="pt-8">
            <div className="inline-block glass-card rounded-[3rem] p-4 md:p-8 border-2 border-white shadow-2xl transition-all hover:scale-[1.02]">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center">
                    <svg className="w-8 h-8" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-2xl font-bold text-sage-900 leading-none">
                      4.9/5.0
                    </p>
                    <p className="text-[10px] font-bold text-sage-600 uppercase tracking-widest mt-1">
                      Verified Google Rating
                    </p>
                  </div>
                </div>
                <div className="h-10 w-px bg-sage-200 hidden md:block" />
                <a
                  href={testimonialsData["Google Profile Link"]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-premium px-10 py-4 text-xs font-bold shadow-lg"
                >
                  Post a Review
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Masonry-style Grid */}
      <section className="py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {testimonialsData.testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="break-inside-avoid bg-white rounded-[2.5rem] p-10 shadow-sm border border-sage-50 group hover:shadow-2xl hover:border-sage-100 transition-all duration-500 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-terracotta-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-sage-600 uppercase tracking-widest">
                    Success Story
                  </span>
                </div>

                <blockquote className="text-sage-800 font-medium leading-relaxed mb-10 italic">
                  &quot;{testimonial.text}&quot;
                </blockquote>

                <div className="flex items-center space-x-4 pt-6 border-t border-sage-50">
                  <div className="w-12 h-12 bg-sage-800 rounded-2xl flex items-center justify-center text-cream-50 font-bold text-xl shadow-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-sage-900 leading-none">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs font-bold text-terracotta-600 mt-1">
                      {testimonial.condition}
                    </p>
                    <p className="text-[10px] text-sage-600 uppercase tracking-widest mt-1">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Quote Section */}
      <section className="py-24 bg-sage-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-125 h-125 bg-sage-500 rounded-full blur-[150px] opacity-20 pointer-events-none -mr-48 -mt-48" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute inset-4 border-2 border-sage-700 rounded-[4rem] group-hover:rotate-3 transition-transform" />
              <div className="relative aspect-square max-w-sm mx-auto overflow-hidden rounded-[3.5rem] shadow-2xl border-2 border-sage-800 p-2">
                <Image
                  src={drSamuelImage}
                  alt="Dr. Samuel Hahnemann"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                  className="object-cover rounded-[3rem]"
                />
              </div>
            </div>

            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <h4 className="text-[10px] font-bold tracking-[0.4em] text-terracotta-400 uppercase">
                  A Legacy of Thought
                </h4>
                <blockquote className="text-3xl md:text-5xl font-playfair font-bold text-cream-50 italic leading-tight">
                  &quot;{testimonialsData.quote.text}&quot;
                </blockquote>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-playfair font-bold text-white">
                  {testimonialsData.quote.author}
                </p>
                <p className="text-xs font-bold text-sage-600 uppercase tracking-widest">
                  {testimonialsData.quote.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Grid - Premium Polish */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                label: "Happy Patients",
                val:
                  testimonialsData.summary.total_patients.toLocaleString() +
                  "+",
                color: "text-sage-700",
              },
              {
                label: "Clinical Success",
                val: testimonialsData.summary.success_rate + "%",
                color: "text-terracotta-600",
              },
              {
                label: "Trust Rating",
                val: testimonialsData.summary.average_rating,
                color: "text-sage-800",
              },
              {
                label: "Conditions Treated",
                val: testimonialsData.summary.conditions_treated + "+",
                color: "text-terracotta-600",
              },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div
                  className={`text-5xl font-playfair font-bold mb-3 ${stat.color} group-hover:scale-110 transition-transform`}
                >
                  {stat.val}
                </div>
                <div className="text-[10px] font-bold tracking-[0.2em] text-sage-600 uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;

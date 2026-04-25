"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { StaticImageData } from "next/image";

interface TreatmentCardProps {
  category: string;
  image: string | StaticImageData;
  description: string;
  key_benefits: string[];
  conditions: string[];
  index: number;
}

const TreatmentCard: React.FC<TreatmentCardProps> = ({
  category,
  image,
  description,
  key_benefits,
  conditions,
  index,
}) => {
  return (
    <div
      className="group relative bg-white rounded-[3rem] overflow-hidden border border-sage-100 shadow-sm hover:shadow-2xl transition-all duration-700 animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="grid lg:grid-cols-2">
        {/* Visual Side */}
        <div className="relative h-72 lg:h-auto overflow-hidden">
          <Image
            src={image}
            alt={category}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-sage-900/60 via-transparent to-transparent lg:bg-linear-to-r" />
          <div className="absolute bottom-6 left-6 lg:top-6 lg:left-6">
             <div className="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full border border-white/20 text-[10px] font-bold text-white uppercase tracking-widest shadow-lg">
                Constitutional Care
             </div>
          </div>
        </div>

        {/* Content Side */}
        <div className="p-8 lg:p-12 space-y-8">
          <div className="space-y-4">
            <h3 className="text-3xl lg:text-4xl font-playfair font-bold text-sage-900 tracking-tight">
              {category}
            </h3>
            <p className="text-base text-sage-600 leading-relaxed font-medium">
              {description}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="space-y-4">
               <p className="text-[10px] font-bold text-sage-400 uppercase tracking-widest">Target Outcomes</p>
               <ul className="space-y-3">
                 {key_benefits.slice(0, 3).map((benefit, i) => (
                   <li key={i} className="flex items-start text-sm text-sage-700">
                     <span className="w-1.5 h-1.5 mt-1.5 mr-3 rounded-full bg-terracotta-500 shrink-0" />
                     {benefit}
                   </li>
                 ))}
               </ul>
            </div>
            <div className="space-y-4">
               <p className="text-[10px] font-bold text-sage-400 uppercase tracking-widest">Commonly Addressed</p>
               <div className="flex flex-wrap gap-2">
                 {conditions.slice(0, 4).map((cond, i) => (
                   <span key={i} className="px-3 py-1.5 bg-sage-50 text-sage-700 text-[10px] font-bold rounded-lg border border-sage-100 uppercase tracking-wider">
                     {cond}
                   </span>
                 ))}
                 {conditions.length > 4 && (
                   <span className="px-3 py-1.5 text-sage-400 text-[10px] font-bold uppercase tracking-wider italic">
                     + {conditions.length - 4} more
                   </span>
                 )}
               </div>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-sage-100">
             <Link 
               href={`/contact?interest=${encodeURIComponent(category)}`}
               className="text-sm font-bold text-sage-900 flex items-center group/btn hover:text-terracotta-600 transition-colors"
             >
                Consult for {category}
                <svg className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
             </Link>
             <span className="text-[10px] font-bold text-sage-300 uppercase tracking-[0.2em]">Private & Confidential</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentCard;

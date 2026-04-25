"use client";

import React, { useState, useEffect } from "react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  content: string;
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  excerpt,
  category,
  tags,
  content,
  index,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const contentParagraphs = content.split("/#").map((para) => para.trim());

  const getCategoryColor = (cat: string) => {
    const categoryColors: { [key: string]: { bg: string; text: string; border: string } } = {
      "Chronic Care": { bg: "bg-sage-50", text: "text-sage-700", border: "border-sage-200" },
      "Immunity & Wellness": { bg: "bg-terracotta-50", text: "text-terracotta-700", border: "border-terracotta-200" },
      "Hair & Skin Care": { bg: "bg-sage-50", text: "text-sage-700", border: "border-sage-200" },
      "Digestive Care": { bg: "bg-cream-100", text: "text-sage-800", border: "border-sage-200" },
      "Pediatrics": { bg: "bg-terracotta-50", text: "text-terracotta-700", border: "border-terracotta-200" },
      "Mental Wellness": { bg: "bg-sage-50", text: "text-sage-700", border: "border-sage-200" },
      "Skin Health": { bg: "bg-sage-50", text: "text-sage-700", border: "border-sage-200" },
      "Weight & Metabolism": { bg: "bg-terracotta-50", text: "text-terracotta-700", border: "border-terracotta-200" },
      "Joint & Bone Health": { bg: "bg-sage-50", text: "text-sage-700", border: "border-sage-200" },
      "Sleep & Relaxation": { bg: "bg-cream-100", text: "text-sage-800", border: "border-sage-200" },
    };

    return categoryColors[cat] || { bg: "bg-sage-50", text: "text-sage-700", border: "border-sage-200" };
  };

  const categoryColor = getCategoryColor(category);

  useEffect(() => {
    if (isModalOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isModalOpen]);

  return (
    <>
      <div
        className="group bg-white rounded-[2.5rem] border border-sage-100 shadow-sm hover:shadow-2xl transition-all duration-700 animate-slide-up cursor-pointer flex flex-col h-full"
        style={{ animationDelay: `${index * 0.15}s` }}
        onClick={() => setIsModalOpen(true)}
      >
        <div className={`p-8 pb-4 space-y-6 flex-grow`}>
          <div className="flex justify-between items-start">
             <span className={`px-4 py-1.5 ${categoryColor.bg} ${categoryColor.text} ${categoryColor.border} border text-[10px] font-bold rounded-xl tracking-widest uppercase`}>
                {category}
             </span>
             <div className="w-8 h-8 rounded-full bg-sage-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-4 h-4 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
             </div>
          </div>
          
          <h3 className="text-2xl font-playfair font-bold text-sage-900 group-hover:text-terracotta-600 transition-colors leading-tight line-clamp-2">
            {title}
          </h3>
          
          <p className="text-sm text-sage-600 leading-relaxed line-clamp-3 font-medium">
            {excerpt}
          </p>
        </div>

        <div className="px-8 py-6 border-t border-sage-50 flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-[10px] font-bold text-sage-400 capitalize">#{tag}</span>
          ))}
          <div className="ml-auto flex items-center space-x-2 text-terracotta-600 text-xs font-bold font-inter tracking-widest uppercase">
             <span>Read More</span>
             <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="absolute inset-0 bg-sage-900/60 backdrop-blur-md animate-fade-in" />
          
          <div
            className="relative bg-white rounded-[3rem] shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 p-8 md:p-12 border-b border-sage-50 bg-white/80 backdrop-blur-xl z-10 flex items-start justify-between">
              <div className="space-y-4">
                <span className={`px-4 py-1.5 ${categoryColor.bg} ${categoryColor.text} ${categoryColor.border} border text-[10px] font-bold rounded-xl tracking-widest uppercase`}>
                  {category}
                </span>
                <h2 className="text-3xl md:text-5xl font-playfair font-bold text-sage-900 leading-tight">
                  {title}
                </h2>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-3 bg-sage-50 hover:bg-sage-100 rounded-2xl transition-colors text-sage-800"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-grow overflow-y-auto p-8 md:p-12 space-y-10 custom-scrollbar">
              <p className="text-xl md:text-2xl font-serif italic text-sage-700 leading-relaxed border-l-4 border-terracotta-400 pl-8">
                {excerpt}
              </p>

              <div className="flex flex-wrap gap-4">
                {tags.map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-cream-100 text-sage-600 text-[10px] font-bold rounded-xl uppercase tracking-widest border border-sage-100">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="space-y-8 text-lg text-sage-800 leading-relaxed font-inter">
                {contentParagraphs.map((para, idx) => (
                  <div key={idx} className="prose prose-sage max-w-none">
                    {para.split(/(\*[^*]+\*)/g).map((part, i) =>
                      part.startsWith("*") && part.endsWith("*") ? (
                        <strong key={i} className="text-terracotta-600 font-bold block mt-8 mb-4">
                          {part.slice(1, -1)}
                        </strong>
                      ) : (
                        <p key={i} className="mb-4">{part}</p>
                      )
                    )}
                  </div>
                ))}
              </div>
              
              {/* Internal CTA */}
              <div className="p-10 bg-sage-50 rounded-[2.5rem] text-center space-y-6">
                 <h4 className="text-2xl font-playfair font-bold text-sage-900">Seeking personalized advice?</h4>
                 <p className="text-sage-600 font-medium">Discuss your symptoms with Dr. Nritiya Dave for a customized treatment plan.</p>
                 <a href="/contact" className="btn-premium px-10 py-4 text-xs font-bold inline-block">Consult Now</a>
              </div>
            </div>

            {/* Modal Action Footer */}
            <div className="p-6 md:p-10 bg-cream-50/50 border-t border-sage-50 flex justify-center">
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-xs font-bold text-sage-400 uppercase tracking-[0.3em] hover:text-sage-900 transition-colors"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogCard;

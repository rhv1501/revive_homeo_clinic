"use client";

import React, { useState } from "react";

const consultationOptions = [
  "Initial Online Consultation",
  "Follow-up Video Review",
  "Child Consultation",
  "Women's Health",
  "Skin Condition Review",
  "Chronic Pain Support",
  "General Wellness Check-in",
];

const preferredTimeOptions = [
  "Morning (9:00 AM - 12:00 PM)",
  "Afternoon (12:00 PM - 3:00 PM)",
  "Evening (3:00 PM - 6:00 PM)",
];

const OnlineConsultationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    consultationType: "",
    preferredDate: "",
    preferredTime: "",
    mode: "Video / Phone",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error" | null; message: string }>({
    type: null,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/send-contact-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          subject: "Online Consultation",
        }),
      });

      if (!response.ok) throw new Error("Failed");

      setSubmitStatus({
        type: "success",
        message: "Your online consultation request has been received. We will confirm the next available slot shortly.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        age: "",
        consultationType: "",
        preferredDate: "",
        preferredTime: "",
        mode: "Video / Phone",
        message: "",
      });
    } catch {
      setSubmitStatus({
        type: "error",
        message: "We could not send your request right now. Please call us directly or try again in a moment.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative group">
      {/* Decorative patterns - hidden on ultra small screens for clarity */}
      <div className="hidden sm:block absolute -top-6 -right-6 h-24 w-24 rounded-full bg-terracotta-100/40 blur-2xl group-hover:bg-terracotta-200/50 transition-colors duration-500" />
      <div className="hidden sm:block absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-sage-100/40 blur-3xl group-hover:bg-sage-200/50 transition-colors duration-500" />

      <form onSubmit={handleSubmit} className="relative z-10 glass-card space-y-6 sm:space-y-7 p-5 sm:p-8 md:space-y-8 md:p-10 lg:p-12 overflow-hidden">
        <div className="relative space-y-3">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-terracotta-400" />
            <h3 className="section-kicker !text-terracotta-600">Digital Concierge</h3>
          </div>
          <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-sage-900 sm:text-4xl leading-tight">
            Reserve your <span className="italic text-terracotta-600">exclusive</span> slot
          </h2>
          <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-sage-600 font-medium">
            Take the first step towards healing. Provide a few details, and our team will coordinate a personalized consultation session for you.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="ml-1 text-[10px] font-bold uppercase tracking-[0.24em] text-sage-800">Full Name *</label>
            <div className="relative">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="How shall we address you?"
                className="w-full rounded-2xl border border-sage-200/60 bg-white/50 px-5 sm:px-6 py-3.5 sm:py-4 text-sage-900 outline-none transition-all duration-300 focus:border-terracotta-400 focus:bg-white focus:ring-4 focus:ring-terracotta-400/5 placeholder:text-sage-600"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="ml-1 text-[10px] font-bold uppercase tracking-[0.24em] text-sage-800">Phone Number *</label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+91 Your mobile number"
              className="w-full rounded-2xl border border-sage-200/60 bg-white/50 px-6 py-4 text-sage-900 outline-none transition-all duration-300 focus:border-terracotta-400 focus:bg-white focus:ring-4 focus:ring-terracotta-400/5 placeholder:text-sage-600"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="ml-1 text-[10px] font-bold uppercase tracking-[0.24em] text-sage-800">Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="For appointment details"
              className="w-full rounded-2xl border border-sage-200/60 bg-white/50 px-6 py-4 text-sage-900 outline-none transition-all duration-300 focus:border-terracotta-400 focus:bg-white focus:ring-4 focus:ring-terracotta-400/5 placeholder:text-sage-600"
            />
          </div>
          <div className="space-y-2">
            <label className="ml-1 text-[10px] font-bold uppercase tracking-[0.24em] text-sage-800">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Patient's age"
              className="w-full rounded-2xl border border-sage-200/60 bg-white/50 px-6 py-4 text-sage-900 outline-none transition-all duration-300 focus:border-terracotta-400 focus:bg-white focus:ring-4 focus:ring-terracotta-400/5 placeholder:text-sage-600"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 border-t border-sage-100 pt-6">
          <div className="space-y-2">
            <label className="ml-1 text-[10px] font-bold uppercase tracking-[0.24em] text-sage-800">Consultation Type *</label>
            <select
              name="consultationType"
              value={formData.consultationType}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border border-sage-200/60 bg-white/50 px-6 py-4 text-sage-900 outline-none transition-all duration-300 focus:border-terracotta-400 focus:bg-white focus:ring-4 focus:ring-terracotta-400/5 appearance-none cursor-pointer"
            >
              <option value="">Select consultation type</option>
              {consultationOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label className="ml-1 text-[10px] font-bold uppercase tracking-[0.24em] text-sage-800">Preferred Time</label>
            <select
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className="w-full rounded-2xl border border-sage-200/60 bg-white/50 px-6 py-4 text-sage-900 outline-none transition-all duration-300 focus:border-terracotta-400 focus:bg-white focus:ring-4 focus:ring-terracotta-400/5 appearance-none cursor-pointer"
            >
              <option value="">Select a preferred time</option>
              {preferredTimeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="ml-1 text-[10px] font-bold uppercase tracking-[0.24em] text-sage-800">Preferred Date</label>
            <input
              type="date"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              className="w-full rounded-2xl border border-sage-200/60 bg-white/50 px-6 py-4 text-sage-900 outline-none transition-all duration-300 focus:border-terracotta-400 focus:bg-white focus:ring-4 focus:ring-terracotta-400/5 cursor-pointer"
            />
          </div>
          <div className="space-y-2">
            <label className="ml-1 text-[10px] font-bold uppercase tracking-[0.24em] text-sage-800">Mode of Visit</label>
            <input
              name="mode"
              value={formData.mode}
              onChange={handleChange}
              placeholder="e.g., Video, Phone, WhatsApp"
              className="w-full rounded-2xl border border-sage-200/60 bg-white/50 px-6 py-4 text-sage-900 outline-none transition-all duration-300 focus:border-terracotta-400 focus:bg-white focus:ring-4 focus:ring-terracotta-400/5 placeholder:text-sage-600"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="ml-1 text-[10px] font-bold uppercase tracking-[0.24em] text-sage-800">Brief History & Concerns *</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Help us understand your health journey better..."
            className="w-full resize-none rounded-3xl border border-sage-200/60 bg-white/50 px-6 py-4 text-sage-900 outline-none transition-all duration-300 focus:border-terracotta-400 focus:bg-white focus:ring-4 focus:ring-terracotta-400/5 placeholder:text-sage-600"
          />
        </div>

        {submitStatus.type && (
          <div className={`animate-fade-in rounded-2xl p-6 flex items-center gap-4 ${submitStatus.type === "success" ? "bg-sage-50 border border-sage-200 text-sage-800" : "bg-terracotta-50 border border-terracotta-100 text-terracotta-800"}`}>
            <span className={`h-8 w-8 shrink-0 rounded-full flex items-center justify-center text-white font-bold ${submitStatus.type === "success" ? "bg-sage-500" : "bg-terracotta-500"}`}>
              {submitStatus.type === "success" ? "✓" : "!"}
            </span>
            <p className="text-sm font-semibold leading-relaxed">{submitStatus.message}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-premium w-full py-5 text-sm font-bold uppercase tracking-[0.2em] disabled:opacity-60 group relative overflow-hidden"
        >
          <span className="relative z-10">
            {isSubmitting ? "Processing Request..." : "Confirm Consultation Inquiry"}
          </span>
          <div className="absolute inset-0 bg-linear-to-r from-sage-800 to-sage-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </button>

        <p className="text-center text-[10px] text-sage-600 font-bold uppercase tracking-widest">
          Secure & Confidential Process
        </p>
      </form>
    </div>
  );
};

export default OnlineConsultationForm;
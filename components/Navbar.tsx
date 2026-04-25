"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Treatments", path: "/treatments" },
    { name: "Online Consultation", path: "/online-consultation" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const isActivePath = (path: string) => pathname === path;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "py-2.5 bg-white"
          : "py-4 bg-linear-to-b from-white/85 via-white/65 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex justify-between items-center rounded-2xl transition-all duration-500 ${
            isScrolled
              ? "bg-white px-3 py-2"
              : "bg-white/72 px-3 py-2 shadow-[0_6px_18px_rgba(24,34,21,0.06)]"
          }`}
        >
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 2k:w-12 2k:h-12 bg-white rounded-2xl shadow-sm border border-sage-100 flex items-center justify-center p-1 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/assets/logo_1.png"
                alt="Revivee Homeo Clinic Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-playfair font-bold text-xl 2k:text-2xl text-sage-900 tracking-tight leading-none group-hover:text-sage-700 transition-colors">
                REVIVEE
              </span>
              <span className="text-[10px] 2k:text-xs font-bold tracking-[0.2em] text-terracotta-600 leading-none mt-1 uppercase">
                Homeo Clinic
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-full group relative ${
                  isActivePath(item.path)
                    ? "text-sage-900 bg-sage-100"
                    : "text-sage-700 hover:text-sage-900 hover:bg-sage-100/75"
                }`}
              >
                {item.name}
                {isActivePath(item.path) && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-terracotta-500 rounded-full"></span>
                )}
              </Link>
            ))}

            <div className="ml-6 flex items-center space-x-4">
              <Link
                href="/online-consultation"
                className="btn-premium py-2.5 px-6 text-sm shadow-none hover:shadow-lg"
              >
                Book Online
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-sage-800 hover:bg-sage-100 transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-2.5" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? "max-h-screen opacity-100 py-6" : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-2 bg-white/95 backdrop-blur-lg rounded-4xl p-6 border border-sage-200 shadow-xl">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-2xl text-base font-semibold transition-all ${
                  isActivePath(item.path)
                    ? "bg-sage-200 text-sage-900"
                    : "text-sage-700 hover:bg-sage-100 hover:text-sage-900"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/online-consultation"
              onClick={() => setIsOpen(false)}
              className="block w-full mt-4 text-center btn-premium"
            >
              Book Online
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

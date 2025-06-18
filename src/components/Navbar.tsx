"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ToggleSwitch from "./ToggleSwitch";
import logo from "../assets/logo.png";
import { navLinks } from "@/constants";
import gsap from "gsap";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const toggleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize GSAP animations
    if (mobileMenuRef.current) {
      const menuElement = mobileMenuRef.current;
      const links = linkRefs.current.filter(Boolean);

      if (isMobileMenuOpen) {
        // Opening animation
        gsap.fromTo(
          menuElement,
          {
            opacity: 0,
            y: -20,
            height: 0,
            display: "none",
          },
          {
            opacity: 1,
            y: 0,
            height: "auto",
            display: "block",
            duration: 0.3,
            ease: "power2.out",
          }
        );

        // Staggered animation for links
        gsap.fromTo(
          links,
          {
            opacity: 0,
            y: -10,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.2,
            stagger: 0.05,
            delay: 0.2,
            ease: "back.out",
          }
        );
      } else {
        // Closing animation
        gsap.to(links, {
          opacity: 0,
          y: -10,
          duration: 0.1,
          stagger: 0.02,
          ease: "power1.in",
        });

        gsap.to(menuElement, {
          opacity: 0,
          y: -20,
          height: 0,
          duration: 0.25,
          delay: 0.1,
          ease: "power1.in",
          onComplete: () => {
            // Ensure menu is hidden after animation
            gsap.set(menuElement, { display: "none" });
          },
        });
      }
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-transparent absolute w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center pt-2">
              <Image
                src={logo}
                alt="logo"
                width={70}
                height={70}
                className="hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-black hover:text-orange-500 px-3 py-2 text-md font-medium transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Language Toggle */}
          <div className="hidden md:flex items-center justify-center space-x-3">
            <span className="text-sm font-medium text-black">EN</span>
            <ToggleSwitch />
            <span className="text-sm font-medium text-black">AR</span>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-full text-black hover:text-orange-500 hover:bg-gray-100 focus:outline-none transition-all duration-300"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation Menu */}
        <div
          ref={mobileMenuRef}
          className="md:hidden bg-white/95 backdrop-blur-lg border border-gray-200/80 shadow-xl rounded-2xl overflow-hidden mt-2"
          style={{ display: "none" }}
        >
          <div className="px-4 pt-4 pb-6 space-y-3">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                ref={(el) => {
                  linkRefs.current[index] = el;
                }}
                className="text-gray-700 hover:text-orange-500 hover:bg-orange-50 block px-4 py-3 text-lg font-medium rounded-lg transition-all duration-300 transform hover:translate-x-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
                <span className="block h-0.5 bg-orange-500 w-0 group-hover:w-full transition-all duration-300 mt-1"></span>
              </Link>
            ))}

            {/* Enhanced Mobile Language Toggle */}
            <div
              ref={toggleRef}
              className="flex items-center justify-center space-x-4 pt-6 pb-2 bg-gray-50/80 rounded-lg p-4 mt-4"
            >
              <span className="text-sm font-medium text-gray-600">EN</span>
              <ToggleSwitch />
              <span className="text-sm font-medium text-gray-600">AR</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

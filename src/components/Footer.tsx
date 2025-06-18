"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { navLinks } from "@/constants";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Heart,
  ArrowUp,
} from "lucide-react";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Timeline | null>(null);

  const socialLinks = [
    {
      icon: Facebook,
      href: "#",
      label: "Facebook",
      color: "hover:text-blue-500",
    },
    {
      icon: Instagram,
      href: "#",
      label: "Instagram",
      color: "hover:text-pink-500",
    },
    {
      icon: Twitter,
      href: "#",
      label: "Twitter",
      color: "hover:text-blue-400",
    },
    { icon: Youtube, href: "#", label: "YouTube", color: "hover:text-red-500" },
  ];

  useEffect(() => {
    if (!footerRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    // Create animation timeline
    animationRef.current = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top bottom-=200px", // Start animation when footer enters viewport
        end: "bottom top",
        toggleActions: "play none none none",
        markers: false, // Set to true for debugging
      },
      defaults: { ease: "power3.out", duration: 0.6 },
    });

    // Animate all footer sections
    animationRef.current.fromTo(
      gsap.utils.toArray(".footer-section"),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.15 }
    );

    // Add social icon hover effects
    const socialIcons = gsap.utils.toArray<HTMLElement>(".social-icon");
    socialIcons.forEach((icon) => {
      icon.addEventListener("mouseenter", () => {
        gsap.to(icon, {
          scale: 1.1,
          duration: 0.2,
          ease: "power2.out",
        });
      });
      icon.addEventListener("mouseleave", () => {
        gsap.to(icon, {
          scale: 1,
          duration: 0.3,
          ease: "elastic.out(1, 0.5)",
        });
      });
    });

    return () => {
      // Cleanup animations and event listeners
      if (animationRef.current) {
        animationRef.current.kill();
      }
      socialIcons.forEach((icon) => {
        icon.removeEventListener("mouseenter", () => {});
        icon.removeEventListener("mouseleave", () => {});
      });
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      ref={footerRef}
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-orange-500/10 rounded-full opacity-0 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-orange-400/10 rounded-full opacity-0 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Logo and description */}
          <div className="footer-section footer-logo-section lg:col-span-1">
            <div className="flex flex-col mb-6">
              <span className="text-2xl font-bold text-white leading-tight">
                Ava Abraam
              </span>
              <span className="text-lg font-medium text-orange-400 leading-tight">
                Angels Academy
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Serving young minds with love, creativity, and excellence.
              Building tomorrow&rsquo;s leaders today.
            </p>
            <div className="flex items-center gap-2 text-orange-400">
              <Heart className="w-5 h-5" />
              <span className="text-sm font-medium">
                Made with love for our angels
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="footer-section footer-links-section lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 text-orange-400">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="footer-section footer-contact-section lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 text-orange-400">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">123 Academy Street</p>
                  <p className="text-gray-300">Education City, EC 12345</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <p className="text-gray-300">info@avaacademy.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="footer-section footer-social-section border-t border-gray-700 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-orange-400">
                Follow Us
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      className={`social-icon w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 ${social.color} transition-all duration-300 hover:bg-gray-600 shadow-lg hover:shadow-xl`}
                      aria-label={social.label}
                    >
                      <IconComponent className="w-5 h-5" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
              Back to Top
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="footer-section footer-bottom-section border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Ava Abraam Angels Academy. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

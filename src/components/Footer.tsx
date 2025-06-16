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
  const logoRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const newsletterRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

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
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(
        [
          logoRef.current,
          linksRef.current,
          socialRef.current,
          contactRef.current,
          newsletterRef.current,
        ],
        {
          opacity: 0,
          y: 50,
        }
      );

      gsap.set(bottomRef.current, {
        opacity: 0,
        y: 30,
      });

      // Create scroll-triggered animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate sections in sequence
      tl.to(logoRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .to(
          [linksRef.current, socialRef.current, contactRef.current],
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .to(
          newsletterRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.2"
        )
        .to(
          bottomRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.2"
        );

      // Floating animation for decorative elements
      gsap.to(".footer-float", {
        y: -5,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3,
      });

      // Social icons hover animation
      const socialIcons = document.querySelectorAll(".social-icon");
      socialIcons.forEach((icon) => {
        icon.addEventListener("mouseenter", () => {
          gsap.to(icon, {
            scale: 1.2,
            rotation: 10,
            duration: 0.3,
            ease: "back.out(1.7)",
          });
        });

        icon.addEventListener("mouseleave", () => {
          gsap.to(icon, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "back.out(1.7)",
          });
        });
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      ref={footerRef}
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="footer-float absolute top-10 left-10 w-20 h-20 bg-orange-500/10 rounded-full"></div>
        <div className="footer-float absolute top-20 right-20 w-16 h-16 bg-orange-400/10 rounded-full"></div>
        <div className="footer-float absolute bottom-20 left-1/4 w-12 h-12 bg-orange-300/10 rounded-full"></div>
        <div className="footer-float absolute bottom-10 right-1/3 w-24 h-24 bg-orange-500/10 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and description */}
          <div ref={logoRef} className="lg:col-span-1">
            <div className="flex flex-col mb-6">
              <span className="text-2xl font-bold text-white leading-tight">
                Ava Abraam
              </span>
              <span className="text-lg font-medium text-orange-400 leading-tight">
                Angels Academy
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Nurturing young minds with love, creativity, and excellence.
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
          <div ref={linksRef} className="lg:col-span-1">
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
          <div ref={contactRef} className="lg:col-span-1">
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

          {/* Newsletter Signup */}
          <div ref={newsletterRef} className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 text-orange-400">
              Stay Connected
            </h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for updates and events!
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
              />
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div ref={socialRef} className="border-t border-gray-700 pt-8 mb-8">
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
            >
              <ArrowUp className="w-4 h-4" />
              Back to Top
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div
          ref={bottomRef}
          className="border-t border-gray-700 pt-6 text-center"
        >
          <p className="text-gray-400">
            © 2024 Ava Abraam Angels Academy. All rights reserved. |
            <Link
              href="/privacy"
              className="hover:text-orange-400 transition-colors duration-300 ml-1"
            >
              Privacy Policy
            </Link>
            {" | "}
            <Link
              href="/terms"
              className="hover:text-orange-400 transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

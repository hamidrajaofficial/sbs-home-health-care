import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HomeHealthcareHeroProps {
  highlightHeading: string;
  mainHeading: string;
  description: string;
  primaryBtnText?: string;
  primaryBtnLink?: string;
  secondaryBtnText?: string;
  secondaryBtnLink?: string;
  imageSrc: string;
  imageAlt: string;
  features?: string[];
  flipImage?: boolean;
  transparentImage?: boolean;
  showCtaCard?: boolean;
  ctaCardTitle?: string;
  ctaCardSubtitle?: string;
  ctaCardBadge?: string;
  ctaCardLink?: string;
}

export default function HomeHealthcareHero({
  highlightHeading,
  mainHeading,
  description,
  primaryBtnText = "Hire This Service",
  primaryBtnLink = "/contact",
  secondaryBtnText = "Explore Solutions",
  secondaryBtnLink = "#solutions",
  imageSrc,
  imageAlt,
  features = ["100% HIPAA Compliant", "Trained in Home Health Workflows", "Dedicated Account Manager"],
  flipImage = false,
  transparentImage = true,
  showCtaCard = true,
  ctaCardTitle = "Hire a Dedicated VA at $10/hr",
  ctaCardSubtitle = "HIPAA Certified • Dedicated Home Health & Billing Support",
  ctaCardBadge = "Available Now",
  ctaCardLink = "/contact"
}: HomeHealthcareHeroProps) {
  return (
    <section className="relative pt-[110px] lg:pt-[130px] pb-12 lg:pb-16 overflow-hidden bg-gradient-to-b from-sky-50/40 via-white to-white border-b border-slate-100">
      {/* Subtle clinical background watermark */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none bg-repeat bg-[radial-gradient(#00A3E0_1px,transparent_1px)] [background-size:24px_24px]"
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A3E0]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Title exact to screenshot styling */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold tracking-tight leading-[1.18]">
                <span className="text-[#00A3E0] block font-bold mb-1">
                  {highlightHeading}
                </span>
                <span className="text-[#1B2A4A] block font-extrabold">
                  {mainHeading}
                </span>
              </h1>
            </div>

            {/* Description Paragraph */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {description}
            </p>

            {/* CTAs matching screenshot buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to={primaryBtnLink}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#00A3E0] hover:bg-[#0092ca] text-white font-bold rounded-xl shadow-lg shadow-[#00A3E0]/25 transition-all duration-200 text-sm sm:text-base group"
              >
                <span>{primaryBtnText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={secondaryBtnLink}
                className="inline-flex items-center justify-center px-7 py-3.5 bg-white hover:bg-slate-50 text-[#1B2A4A] font-bold rounded-xl border border-slate-200/90 shadow-sm transition-all duration-200 text-sm sm:text-base hover:border-slate-300"
              >
                {secondaryBtnText}
              </a>
            </div>

            {/* CTA Card matching screenshot replacing feature points */}
            {showCtaCard ? (
              <div className="pt-2">
                <Link
                  to={ctaCardLink}
                  className="group relative flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 sm:gap-4 p-3 sm:p-3.5 px-4 sm:px-5 rounded-[20px] bg-white border-2 border-[#BCE1FD] hover:border-[#0080FF]/50 shadow-[0_4px_16px_rgba(0,163,224,0.08)] hover:shadow-[0_6px_22px_rgba(0,163,224,0.18)] transition-all duration-200"
                >
                  <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-[14px] bg-[#0080FF] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                      <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm sm:text-base lg:text-[17px] font-black text-[#1B2A4A] tracking-tight leading-snug group-hover:text-[#0080FF] transition-colors">
                        {ctaCardTitle}
                      </h4>
                      <p className="text-xs sm:text-[13px] font-medium text-slate-500 leading-tight mt-0.5">
                        {ctaCardSubtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-auto sm:ml-0">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF9F1] border border-[#A7E8C2] text-[#00875A] text-xs font-bold whitespace-nowrap shadow-2xs">
                      <span className="w-2 h-2 rounded-full bg-[#00BA66] animate-pulse" />
                      <span>{ctaCardBadge}</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-sky-50 text-[#0080FF] group-hover:bg-[#0080FF] group-hover:text-white flex items-center justify-center transition-all duration-200">
                      <ArrowRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              </div>
            ) : features && features.length > 0 ? (
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-500 font-medium">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A3E0]" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            ) : null}
          </motion.div>

          {/* Right Column - Healthcare Specialist Image matching screenshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-[460px] lg:max-w-none">
              {/* Soft decorative backdrop glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00A3E0]/15 via-blue-100/40 to-transparent rounded-3xl transform -rotate-1 scale-105 filter blur-lg -z-10" />

              {/* Main Photo Card - Transparent Cutout */}
              <div className="relative group">
                <div className="relative w-full flex justify-center items-end overflow-visible">
                  <img 
                    src={imageSrc} 
                    alt={imageAlt}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== 'https://wingassistant.com/wp-content/uploads/2026/09/virtual-assistant-for-healthcare.webp') {
                        target.src = 'https://wingassistant.com/wp-content/uploads/2026/09/virtual-assistant-for-healthcare.webp';
                      }
                    }}
                    className={`w-full max-h-[480px] sm:max-h-[520px] object-contain transition-transform duration-500 group-hover:scale-[1.02] ${
                      transparentImage 
                        ? 'drop-shadow-2xl' 
                        : 'rounded-2xl bg-white shadow-xl border border-slate-100 object-cover object-top h-[360px] sm:h-[440px] lg:h-[480px]'
                    } ${
                      flipImage ? '-scale-x-100' : ''
                    }`}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

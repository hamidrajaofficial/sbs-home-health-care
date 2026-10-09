import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Check
} from 'lucide-react';
import { Link } from 'react-router-dom';
import billingSpecialistImg from '../../assets/images/billing_specialist_hero_1791479968609.jpg';

interface DedicatedRCMSupportSectionProps {
  id?: string;
  bgColor?: string;
  eyebrow?: string;
  pricingText?: string;
  certificationText?: string;
  title?: string;
  titleHighlight?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  imageSrc?: string;
  planName?: string;
  planExperience?: string;
  planRate?: string;
  planRateUnit?: string;
  planRateSubtitle?: string;
  planBadge?: string;
}

export default function DedicatedRCMSupportSection({
  id = "rcm-support",
  bgColor = "bg-white",
  eyebrow = "Dedicated Home Health Support",
  pricingText = "Started at $7/hr",
  certificationText = "HIPAA Certified Staff",
  title = "Get a Dedicated Billing Coordinator for ",
  titleHighlight = "Dedicated Home Health Support",
  description = "Take the friction out of revenue cycle operations. Our pre-vetted, HIPAA-trained billing coordinators seamlessly embed into your existing EHR workflows to handle clinical documentation, scrubbing, submissions, and aggressive denial recovery.",
  ctaText = "Hire now",
  ctaLink = "/contact",
  imageSrc = billingSpecialistImg,
  planBadge = "Most Popular",
  planName = "Mid",
  planExperience = "3-5 Years of experience",
  planRate = "7",
  planRateUnit = "/Hour",
  planRateSubtitle = "Talent's hourly rate"
}: DedicatedRCMSupportSectionProps) {

  const planFeatures = [
    "No Recurring Fees",
    "Hire within 24 hours!",
    "No contracts - No Middleman"
  ];

  return (
    <section id={id} className={`py-[30px] ${bgColor} border-b border-slate-100 overflow-hidden relative`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Eyebrow Badge, Heading, Underline, Description, Pricing Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-wider shadow-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600 stroke-[2.2]" />
              <span>{eyebrow}</span>
            </div>

            {/* Main Heading with dark slate/navy text and Highlighted Dedicated Home Health Support */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#1B2A4A] tracking-tight leading-[1.18] mb-3">
                {title} <span className="text-[#00A3E0]">{titleHighlight}</span>
              </h2>
              {/* Short green underline accent matching screenshot */}
              <div className="w-16 h-1.5 bg-emerald-500 rounded-full" />
            </div>

            {/* Description text */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              {description}
            </p>

            {/* Responsive Horizontal Highlighted Pricing Card */}
            <div className="pt-2">
              <div className="relative w-full max-w-2xl p-[2px] rounded-[24px] bg-gradient-to-r from-blue-500 via-indigo-500 via-purple-500 via-pink-500 to-amber-400 shadow-xl shadow-indigo-500/10">
                {/* Floating "Most Popular" Pill Badge */}
                <div className="absolute -top-3 left-6 sm:left-8 z-10">
                  <span className="px-3.5 py-0.5 rounded-full bg-[#34A853] text-white text-[11px] font-extrabold tracking-wide shadow-sm whitespace-nowrap block">
                    {planBadge}
                  </span>
                </div>

                {/* Inner Horizontal Card Content */}
                <div className="bg-white rounded-[22px] p-4 sm:p-5 lg:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-5">
                  {/* Left: Tier, Experience & Hourly Price */}
                  <div className="shrink-0">
                    <div className="flex items-baseline gap-2">
                      <h3 className="text-xl sm:text-2xl font-black text-[#1B2A4A] tracking-tight">
                        {planName}
                      </h3>
                      <span className="text-xs font-semibold text-slate-500">
                        • {planExperience}
                      </span>
                    </div>

                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-3xl sm:text-4xl font-black text-[#1B2A4A] tracking-tight">
                        ${planRate}
                      </span>
                      <span className="text-sm sm:text-base font-extrabold text-[#1B2A4A]">
                        {planRateUnit}
                      </span>
                      <span className="text-xs text-slate-400 font-medium ml-1">
                        • {planRateSubtitle}
                      </span>
                    </div>
                  </div>

                  {/* Middle: Feature Checklist */}
                  <div className="flex flex-col gap-1.5 md:border-l md:border-slate-100 md:pl-5 shrink-0">
                    {planFeatures.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[3] shrink-0" />
                        <span className="text-xs font-bold text-slate-700 whitespace-nowrap">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Right: Black "Hire now" Button */}
                  <div className="shrink-0 flex items-center">
                    <Link
                      to={ctaLink}
                      className="w-full md:w-auto py-2.5 px-6 sm:px-7 bg-black hover:bg-slate-800 active:scale-95 text-white font-bold text-xs sm:text-sm rounded-full shadow-md transition-all flex items-center justify-center gap-2 text-center whitespace-nowrap"
                    >
                      <span>{ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Extra Trust Guarantee underneath the horizontal card */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold text-slate-500 mt-3 pt-1">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{certificationText}</span>
                </div>
                <span className="text-slate-300 hidden sm:inline">•</span>
                <span>Zero Setup Fees</span>
                <span className="text-slate-300 hidden sm:inline">•</span>
                <span>48-Hour Onboarding</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Image Card & Bright Lime Banner */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 relative flex justify-center pb-6 sm:pb-8"
          >
            {/* Main Image Container Card */}
            <div className="relative w-full max-w-md lg:max-w-none bg-white rounded-[32px] p-3 sm:p-4 shadow-xl border border-slate-100 overflow-visible">
              
              {/* Central Billing Specialist Image */}
              <div className="relative rounded-[24px] overflow-hidden aspect-[4/3] sm:aspect-[5/4] bg-slate-100 shadow-inner">
                <img 
                  src={imageSrc} 
                  alt="Dedicated Healthcare Medical Billing Specialist"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" 
                />
                
                {/* Subtle dark gradient overlay at top/bottom for card depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-slate-900/10 pointer-events-none" />

                {/* Floating Pricing Pill on the Image */}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-full shadow-md border border-emerald-100 flex items-center gap-1.5 z-10">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-black text-[#1B2A4A] tracking-tight">${planRate}/hr</span>
                </div>
              </div>

              {/* Bright Lime-Green Banner at the bottom of the image card with Pricing & Certification */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="absolute -bottom-4 sm:-bottom-5 left-3 right-3 sm:left-5 sm:right-5 z-20"
              >
                <div className="bg-emerald-500 text-white rounded-full py-2.5 sm:py-3 px-4 sm:px-6 shadow-xl shadow-emerald-500/30 flex items-center justify-between gap-2 border-2 border-white">
                  <div className="flex items-center gap-2 truncate">
                    <ShieldCheck className="w-4 h-4 text-white shrink-0 stroke-[2.5]" />
                    <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wide truncate">
                      {certificationText}
                    </span>
                  </div>
                  <div className="px-2.5 py-0.5 rounded-full bg-white text-emerald-700 text-[11px] sm:text-xs font-black uppercase tracking-wider shrink-0 shadow-xs">
                    ${planRate}/Hour
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}


import React, { useState } from 'react';
import { Star, Play, Check } from 'lucide-react';
import doctorsBg from '../../assets/images/doctors_team_bg_1791550540739.jpg';
import videoThumb from '../../assets/images/client_video_review_thumb_1791550508893.jpg';

interface TopPrioritySaviorSectionProps {
  id?: string;
}

export default function TopPrioritySaviorSection({ id = "testimonials-proof" }: TopPrioritySaviorSectionProps) {
  const [activeSlide, setActiveSlide] = useState(2); // 3rd dot active as in image

  const videoCaptions = [
    "How Star Billing Helped Our Multi-Specialty Clinic",
    "Streamlined Revenue Cycle for Home Health Care",
    "Why Physical Therapy Experts Trust Star Billing for Medical",
    "Eliminating Denial Backlogs in Less Than 30 Days"
  ];

  return (
    <section 
      id={id}
      className="relative py-[50px] md:py-[60px] overflow-hidden bg-slate-950 text-white"
    >
      {/* Background Image of Doctors with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={doctorsBg} 
          alt="Doctors and healthcare practitioners" 
          className="w-full h-full object-cover object-center brightness-[0.35] contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-900/90 to-slate-950/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Section Heading */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-white tracking-tight leading-tight">
            How We Became a Top Priority Savior of <br className="hidden sm:inline" />
            <span className="text-[#00A3E0]">Healthcare Practitioners?</span>
          </h2>
        </div>

        {/* Upper Grid: YouTube Reviews on Left + Customer Say Cards on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-10">
          
          {/* Left Column: Customer Reviews on Youtube */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-5 border border-slate-700/60 shadow-2xl flex flex-col h-full justify-between">
              
              {/* Header: YouTube Icon + Title */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-6 bg-[#FF0000] rounded-md flex items-center justify-center shrink-0 shadow-sm">
                  <Play className="w-3.5 h-3.5 text-white fill-white ml-0.5" />
                </div>
                <h3 className="text-white font-bold text-base sm:text-lg">
                  Customer Reviews on Youtube
                </h3>
              </div>

              {/* Video Player Card / Thumbnail */}
              <div className="relative rounded-xl overflow-hidden bg-slate-950 border border-slate-700/80 aspect-4/3 sm:aspect-16/10 group shadow-lg">
                <img 
                  src={videoThumb} 
                  alt="Why Physical Therapy Experts Trust Star Billing for Medical" 
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Video Brand Overlay Badges matching video testimonial */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded text-[10px] font-extrabold text-slate-800 shadow-sm">
                  STAR BILLING SOLUTIONS
                </div>
                <div className="absolute top-3 right-3 bg-red-600/90 text-white px-2 py-0.5 rounded text-[10px] font-bold tracking-wider">
                  LIVE REVIEW
                </div>

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 pt-6 flex flex-col justify-end">
                  <div className="bg-blue-600/80 text-white text-[10px] font-bold px-2 py-0.5 rounded w-fit mb-1">
                    LIKE AUTHORIZATIONS FOR PATIENTS
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-white/90">
                    <span className="font-semibold">+1 (737) 250 8355</span>
                    <span className="text-slate-300">www.starbillingsolutions.com</span>
                  </div>
                </div>

                {/* Central Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-red-600 transition-all">
                    <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Video Caption & Carousel Dots */}
              <div className="mt-3.5 text-center">
                <p className="text-xs sm:text-sm text-slate-200 font-medium line-clamp-1 mb-3">
                  {videoCaptions[activeSlide]}
                </p>
                <div className="flex items-center justify-center gap-2">
                  {videoCaptions.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSlide(idx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        activeSlide === idx 
                          ? 'w-6 bg-[#00A3E0]' 
                          : 'w-2 bg-slate-600 hover:bg-slate-400'
                      }`}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: What Our Customers Say? */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <h3 className="text-white font-bold text-base sm:text-lg mb-4">
                What Our Customers Say?
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 h-full">
                
                {/* Review Card 1: Dr. Sarah P. */}
                <div className="bg-slate-900/70 backdrop-blur-md rounded-2xl p-6 border border-slate-700/60 shadow-xl flex flex-col justify-between">
                  <div>
                    <h4 className="text-white font-bold text-lg sm:text-xl">
                      Dr. Sarah P.
                    </h4>
                    <p className="text-slate-400 text-xs mt-0.5 mb-3 font-medium">
                      New York
                    </p>
                    
                    {/* 5 Gold Stars */}
                    <div className="flex items-center gap-1 mb-4 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                      I couldn't be happier with their medical billing and coding services. They handle everything so I can focus on my patients.
                    </p>
                  </div>
                </div>

                {/* Review Card 2: Dr. James T */}
                <div className="bg-slate-900/70 backdrop-blur-md rounded-2xl p-6 border border-slate-700/60 shadow-xl flex flex-col justify-between">
                  <div>
                    <h4 className="text-white font-bold text-lg sm:text-xl">
                      Dr. James T
                    </h4>
                    <p className="text-slate-400 text-xs mt-0.5 mb-3 font-medium">
                      Los Angeles
                    </p>
                    
                    {/* 5 Gold Stars */}
                    <div className="flex items-center gap-1 mb-4 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                      The denial management services have meaningfully reduced our claim denials and improved cash flow. Truly a game-changer!
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Lower Section: View Our Clients Reviews on TrustPilot */}
        <div className="mt-6 pt-4">
          <h3 className="text-white font-bold text-base sm:text-xl mb-5">
            View Our Clients <span className="text-[#00A3E0]">Reviews on TrustPilot</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Trustpilot Card 1: Ronald Ellison */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-xl border border-slate-100 flex flex-col justify-between text-slate-800">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-extrabold text-[#1B2A4A] text-base sm:text-lg">
                    Ronald Ellison
                  </h4>
                  {/* Trustpilot Star Emblem */}
                  <div className="w-7 h-7 flex items-center justify-center">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#00B67A">
                      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                    </svg>
                  </div>
                </div>

                {/* Trustpilot 5 Green Boxes Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4.5 h-4.5 bg-[#00B67A] flex items-center justify-center rounded-[2px]">
                      <svg className="w-3 h-3 text-white fill-white" viewBox="0 0 24 24">
                        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                      </svg>
                    </div>
                  ))}
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Impressed with their fast and accurate provider enrollment. They are well-communicated and professional in the credentialing process. Highly recommended!
                </p>
              </div>
            </div>

            {/* Trustpilot Card 2: Faisal Abbas */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-xl border border-slate-100 flex flex-col justify-between text-slate-800">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-extrabold text-[#1B2A4A] text-base sm:text-lg">
                    Faisal Abbas
                  </h4>
                  {/* Trustpilot Star Emblem */}
                  <div className="w-7 h-7 flex items-center justify-center">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#00B67A">
                      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                    </svg>
                  </div>
                </div>

                {/* Trustpilot 5 Green Boxes Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4.5 h-4.5 bg-[#00B67A] flex items-center justify-center rounded-[2px]">
                      <svg className="w-3 h-3 text-white fill-white" viewBox="0 0 24 24">
                        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                      </svg>
                    </div>
                  ))}
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  If you're looking for a trustworthy and results-driven medical billing company, Star Billing Solutions is definitely a great choice! Highly recommended!
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

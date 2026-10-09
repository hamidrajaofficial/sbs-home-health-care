import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import doctorThumbsUp from '../../assets/images/doctor_thumbs_up_faq_1791551014459.jpg';

interface FAQItem {
  question: string;
  answer: string;
}

interface MedicalBillingFAQSectionProps {
  id?: string;
  bgColor?: string;
}

export default function MedicalBillingFAQSection({
  id = "faq",
  bgColor = "bg-white"
}: MedicalBillingFAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: "What is a high-end performer medical billing company and how can it increase my revenue cycle?",
      answer: "A high-end performer medical billing company combines certified AAPC/AHIMA billing professionals with rigorous multi-tier claim scrubbers and real-time payer intelligence. We achieve a 98%+ first-pass clean claim rate, file Medicare NOAs within 24-48 hours, overturn complex denials, and accelerate your cash flow turnaround time by up to 35-40%."
    },
    {
      question: "Do medical billers have to talk to patients?",
      answer: "Only if required by your practice. Our billing coordinators can handle patient-facing financial inquiries, verify insurance benefits, explain deductible statements, and set up manageable payment plans with empathy and professionalism. If you prefer our staff to operate strictly on backend payer clearinghouse operations, we tailor their role accordingly."
    },
    {
      question: "How do your medical billing solutions address common billing problems?",
      answer: "We resolve frequent revenue bottlenecks—including missing clinical signatures, face-to-face documentation delays, non-timely NOA submissions, and coding mismatches—through daily pre-submission auditing, automated clearinghouse scrubbers, and persistent follow-up on aging accounts receivable past 30, 60, and 90 days."
    },
    {
      question: "How does your team handle the biggest challenge in medical billing audit?",
      answer: "Our compliance and coding auditors conduct proactive internal pre-bill reviews, ensuring complete clinical documentation, OASIS-E consistency, and strict alignment with CMS and commercial payer requirements. Every claim is supported by an airtight audit trail to eliminate recoupment risks and ensure regulatory compliance."
    },
    {
      question: "Are customized billing services available?",
      answer: "Yes, 100%. Whether you require dedicated full-time billing managers, intake & scheduling assistants, or specialty-focused A/R recovery, we customize our service level and software integration (WellSky, Axxess, HCHB, KanTime, etc.) to your agency's exact volume, specialties, and workflow needs."
    },
    {
      question: "How can I avail your billing services?",
      answer: "Getting started is seamless. Submit a call-back request through our online form or speak directly with our practice coordinators. We will evaluate your current workflow, perform a complimentary billing audit, and onboard your dedicated, HIPAA-certified billing team within 24 to 48 hours."
    }
  ];

  return (
    <section id={id} className={`py-[30px] md:py-[50px] ${bgColor} border-b border-slate-100 overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading + Accordion Questions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Heading matching screenshot */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight leading-tight mb-8">
              <span className="text-[#1B2A4A]">Frequently Asked </span>
              <span className="text-[#00A3E0]">Questions</span>
            </h2>

            {/* Questions List with Blue Indicator Bar */}
            <div className="relative pr-4">
              
              {/* Optional Accent Indicator Bar on Right Edge */}
              <div className="absolute right-0 top-3 w-1.5 h-24 bg-[#00A3E0] rounded-full hidden sm:block opacity-90" />

              <div className="space-y-3.5">
                {faqs.map((faq, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div
                      key={index}
                      className={`bg-white rounded-md border-2 border-[#00A3E0] transition-all duration-200 shadow-2xs overflow-hidden`}
                    >
                      <button
                        type="button"
                        onClick={() => toggleFAQ(index)}
                        className="w-full flex items-center justify-between p-3.5 sm:p-4 text-left cursor-pointer hover:bg-sky-50/40 transition-colors gap-3"
                        aria-expanded={isOpen}
                      >
                        <span className="font-bold text-[#1B2A4A] text-xs sm:text-sm md:text-[14.5px] leading-snug">
                          {faq.question}
                        </span>
                        <ChevronDown 
                          className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                            isOpen ? "rotate-180 text-[#00A3E0]" : ""
                          }`} 
                        />
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-4 pt-1 border-t border-sky-100 bg-slate-50/60">
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>

          </div>

          {/* Right Column: Doctor giving thumbs up */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-[460px] rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 aspect-square sm:aspect-4/3 lg:aspect-square bg-slate-100">
              <img 
                src={doctorThumbsUp} 
                alt="Doctor giving thumbs up for medical billing solutions" 
                className="w-full h-full object-cover object-center hover:scale-103 transition-transform duration-500"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  User, 
  Mail, 
  MessageSquare, 
  Send, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  Sparkles,
  Check,
  Linkedin,
  Facebook,
  Twitter,
  Instagram,
  Youtube
} from 'lucide-react';
import consultantImg from '../../assets/images/healthcare_consultant_businessman_1791545158758.jpg';

interface RequestCallBackSectionProps {
  id?: string;
  bgColor?: string;
  badge?: string;
  titlePart1?: string;
  titleHighlight?: string;
  subtitle?: string;
  serviceContext?: string;
}

export default function RequestCallBackSection({
  id = "callback-section",
  bgColor = "bg-section-bg",
  badge = "FAST RESPONSE GUARANTEED",
  titlePart1 = "Request a ",
  titleHighlight = "Call Back",
  subtitle = "Speak with our dedicated practice coordinators today. We'll evaluate your workflow, review software integration, and walk you through customized staffing options within 15 minutes.",
  serviceContext = "Home Healthcare Billing"
}: RequestCallBackSectionProps) {

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com", color: "hover:text-[#0A66C2] hover:border-[#0A66C2]" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com", color: "hover:text-[#1877F2] hover:border-[#1877F2]" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com", color: "hover:text-[#1DA1F2] hover:border-[#1DA1F2]" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com", color: "hover:text-[#E4405F] hover:border-[#E4405F]" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com", color: "hover:text-[#FF0000] hover:border-[#FF0000]" },
  ];

  return (
    <section id={id} className={`py-[30px] ${bgColor} border-b border-slate-100 overflow-hidden relative`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Form, Disclaimer, Social Links */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white rounded-[32px] p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-xl"
          >
            {/* Section Title */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1B2A4A] tracking-tight leading-tight mb-2">
                {titlePart1}
                <span className="text-[#00A3E0]">{titleHighlight}</span>
              </h2>
              {/* Short green underline bar */}
              <div className="w-14 h-1.5 bg-emerald-500 rounded-full mb-3" />
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {subtitle}
              </p>
            </div>

            {/* Form State */}
            {formSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h3 className="text-2xl font-black text-[#1B2A4A]">Request Received!</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#1B2A4A]">{formData.name}</strong>. Our senior practice coordinator has received your inquiry for <span className="font-semibold text-emerald-700">{serviceContext}</span> and will call you at <strong className="text-[#1B2A4A]">{formData.phone || "your phone"}</strong> within 15 minutes.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', phone: '', email: '', message: '' });
                    }}
                    className="text-xs font-bold text-[#00A3E0] hover:underline cursor-pointer"
                  >
                    Send another callback request
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 pt-4">
                
                {/* Name Input with Icon */}
                <div>
                  <label className="block text-xs font-bold text-[#1B2A4A] uppercase tracking-wider mb-1.5">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4 text-emerald-600" />
                    </div>
                    <input 
                      type="text"
                      required
                      placeholder="e.g. Dr. Robert Vance / Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 bg-slate-50/50 text-[#1B2A4A] placeholder:text-slate-400 text-sm focus:bg-white focus:outline-none focus:border-[#00A3E0] focus:ring-2 focus:ring-[#00A3E0]/20 transition-all font-medium"
                    />
                  </div>
                </div>

                {/* Phone & Email (2 columns) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone Input with Icon */}
                  <div>
                    <label className="block text-xs font-bold text-[#1B2A4A] uppercase tracking-wider mb-1.5">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                        <Phone className="w-4 h-4 text-emerald-600" />
                      </div>
                      <input 
                        type="tel"
                        required
                        placeholder="(555) 234-5678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 bg-slate-50/50 text-[#1B2A4A] placeholder:text-slate-400 text-sm focus:bg-white focus:outline-none focus:border-[#00A3E0] focus:ring-2 focus:ring-[#00A3E0]/20 transition-all font-medium"
                      />
                    </div>
                  </div>

                  {/* Work Email with Icon */}
                  <div>
                    <label className="block text-xs font-bold text-[#1B2A4A] uppercase tracking-wider mb-1.5">
                      Work Email <span className="text-slate-400 font-normal lowercase">(optional)</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-4 h-4 text-emerald-600" />
                      </div>
                      <input 
                        type="email"
                        placeholder="admin@yourpractice.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 bg-slate-50/50 text-[#1B2A4A] placeholder:text-slate-400 text-sm focus:bg-white focus:outline-none focus:border-[#00A3E0] focus:ring-2 focus:ring-[#00A3E0]/20 transition-all font-medium"
                      />
                    </div>
                  </div>
                </div>

                {/* Message Input with Icon */}
                <div>
                  <label className="block text-xs font-bold text-[#1B2A4A] uppercase tracking-wider mb-1.5">
                    Your Message / Specific Practice Needs
                  </label>
                  <div className="relative">
                    <div className="absolute top-3.5 left-0 pl-4 flex items-start pointer-events-none text-slate-400">
                      <MessageSquare className="w-4 h-4 text-emerald-600" />
                    </div>
                    <textarea 
                      rows={3}
                      placeholder="Briefly describe your agency size, current EMR software (WellSky, Axxess, etc.), or billing bottleneck..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 bg-slate-50/50 text-[#1B2A4A] placeholder:text-slate-400 text-sm focus:bg-white focus:outline-none focus:border-[#00A3E0] focus:ring-2 focus:ring-[#00A3E0]/20 transition-all font-medium resize-none"
                    />
                  </div>
                </div>

                {/* Disclaimer / Privacy Text */}
                <div className="flex items-start gap-2.5 pt-1 text-xs text-slate-500 leading-relaxed">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    By submitting this form you consent to receive a call back regarding your inquiry. Your information is 100% confidential, protected under HIPAA guidelines, and will never be shared.
                  </span>
                </div>

                {/* Submit Now Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#00A3E0] hover:bg-[#0090C7] text-white font-bold text-sm sm:text-base rounded-full shadow-lg shadow-[#00A3E0]/25 transition-all group cursor-pointer"
                  >
                    <span>Submit Now</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>

                {/* Social Links Row */}
                <div className="pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Connect With Us:
                  </span>
                  <div className="flex items-center gap-2">
                    {socialLinks.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={idx}
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={item.name}
                          className={`w-9 h-9 rounded-full bg-slate-50 border border-slate-200 text-slate-600 flex items-center justify-center transition-all ${item.color} shadow-2xs hover:scale-110`}
                        >
                          <Icon className="w-4 h-4" />
                        </a>
                      );
                    })}
                  </div>
                </div>

              </form>
            )}

          </motion.div>

          {/* Right Column: Professional Healthcare Executive Image Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            {/* Main Visual Image Card with Floating Badges */}
            <div className="relative bg-white rounded-[32px] p-3 sm:p-4 shadow-xl border border-slate-200/80 overflow-visible">
              
              {/* Executive Image */}
              <div className="relative rounded-[24px] overflow-hidden aspect-[4/3] sm:aspect-[4/5] bg-slate-100 shadow-inner">
                <img 
                  src={consultantImg} 
                  alt="Senior Healthcare Practice Billing Advisor"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" 
                />
                
                {/* Bottom subtle shadow gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Top Badge: Rapid 15-Minute Response */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="absolute -top-3.5 right-6 bg-emerald-500 text-white rounded-full px-4 py-1.5 shadow-lg shadow-emerald-500/30 flex items-center gap-2 border-2 border-white text-xs font-bold"
              >
                <Clock className="w-3.5 h-3.5 text-white" />
                <span>Response in &lt; 15 Mins</span>
              </motion.div>

              {/* Floating Bottom Card: Dedicated Practice Advisor Info */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="absolute -bottom-4 left-4 right-4 sm:left-6 sm:right-6 bg-white rounded-2xl p-3.5 shadow-xl border border-slate-200/90 flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-[#1B2A4A] uppercase tracking-wide leading-tight">
                      Direct Coordinator Connect
                    </h4>
                    <p className="text-[11px] text-slate-500 font-medium">
                      Zero long-term contracts • HIPAA certified
                    </p>
                  </div>
                </div>

                <div className="hidden sm:block text-right">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-black text-[11px]">
                    100% Free Audit
                  </span>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

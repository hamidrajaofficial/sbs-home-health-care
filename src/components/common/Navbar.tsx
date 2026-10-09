import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, BadgeDollarSign, Headphones, HeartPulse } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showHomeHealthcare, setShowHomeHealthcare] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setShowHomeHealthcare(false);
  }, [location]);

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-t-4 border-primary bg-white py-4",
        isScrolled ? "border-b border-slate-100 shadow-md" : "border-b border-black/5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/home-healthcare-billing-services" className="flex items-center gap-2 group">
            <img 
              src="https://starbillingsolutions.com/wp-content/uploads/2026/02/logo.webp" 
              alt="Star Billing Solutions Logo" 
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav - Only Home Healthcare tab with 2 pages */}
          <div className="hidden lg:flex items-center gap-7 text-navy font-medium text-sm xl:text-base">
            {/* Home Healthcare Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setShowHomeHealthcare(true)}
              onMouseLeave={() => setShowHomeHealthcare(false)}
            >
              <button 
                type="button"
                onClick={() => setShowHomeHealthcare(!showHomeHealthcare)}
                className="flex items-center gap-1.5 hover:text-primary transition-colors cursor-pointer py-1.5 px-3 rounded-lg bg-sky-50/60 font-semibold text-primary"
              >
                <span>Home Healthcare</span>
                <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", showHomeHealthcare && "rotate-180")} />
              </button>
              
              <AnimatePresence>
                {showHomeHealthcare && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden"
                  >
                    <div className="p-2 space-y-1">
                      <Link
                        to="/home-healthcare-billing-services"
                        className={cn(
                          "flex items-start gap-3 p-3 rounded-xl transition-colors group/item",
                          location.pathname === "/home-healthcare-billing-services" || location.pathname === "/"
                            ? "bg-sky-50/80"
                            : "hover:bg-soft"
                        )}
                      >
                        <div className="bg-primary/10 p-2.5 rounded-lg text-primary shrink-0 group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                          <BadgeDollarSign className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-navy group-hover/item:text-primary transition-colors">
                            Home Healthcare Billing Services
                          </p>
                          <p className="text-xs text-slate-500 mt-0.5">
                            OASIS review, PDGM coding & claims
                          </p>
                        </div>
                      </Link>

                      <Link
                        to="/home-healthcare-virtual-assistant-services"
                        className={cn(
                          "flex items-start gap-3 p-3 rounded-xl transition-colors group/item",
                          location.pathname === "/home-healthcare-virtual-assistant-services"
                            ? "bg-sky-50/80"
                            : "hover:bg-soft"
                        )}
                      >
                        <div className="bg-primary/10 p-2.5 rounded-lg text-primary shrink-0 group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                          <Headphones className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-navy group-hover/item:text-primary transition-colors">
                            Home Healthcare Virtual Assistant Services
                          </p>
                          <p className="text-xs text-slate-500 mt-0.5">
                            Intake, nurse routing & doctor orders
                          </p>
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Direct Quick Links for the 2 pages */}
            <Link 
              to="/home-healthcare-billing-services" 
              className={cn(
                "hover:text-primary transition-colors text-sm font-medium",
                (location.pathname === "/home-healthcare-billing-services" || location.pathname === "/") && "text-primary font-bold"
              )}
            >
              Billing Services
            </Link>
            <Link 
              to="/home-healthcare-virtual-assistant-services" 
              className={cn(
                "hover:text-primary transition-colors text-sm font-medium",
                location.pathname === "/home-healthcare-virtual-assistant-services" && "text-primary font-bold"
              )}
            >
              Virtual Assistant
            </Link>
            
            <a href="#callback-section" className="relative p-[2px] rounded-xl overflow-hidden group shadow-lg shadow-primary/10 hover:scale-105 transition-all duration-300 shine-button">
              <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-primary)_0%,var(--color-primary-dark)_50%,var(--color-primary)_100%)]" />
              <span className="relative flex items-center justify-center rounded-[10px] bg-navy-dark px-6 py-2.5 text-sm font-bold text-white transition-colors group-hover:bg-navy-dark/90 whitespace-nowrap z-20">
                Hire a MVA Now
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-navy"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4 max-h-[85vh] overflow-y-auto">
              {/* Home Healthcare Group with only 2 pages */}
              <div className="space-y-3 bg-sky-50/50 p-4 rounded-xl border border-sky-100">
                <p className="text-sm font-bold text-primary uppercase tracking-wider flex items-center gap-1.5">
                  <HeartPulse className="w-4 h-4" /> Home Healthcare
                </p>
                <div className="grid grid-cols-1 gap-2.5 pl-1">
                  <Link 
                    to="/home-healthcare-billing-services" 
                    className="text-navy hover:text-primary font-semibold text-sm flex items-center gap-2.5 p-2 rounded-lg bg-white border border-slate-100" 
                    onClick={() => setIsOpen(false)}
                  >
                    <BadgeDollarSign className="w-4 h-4 text-primary shrink-0" />
                    Home Healthcare Billing Services
                  </Link>
                  <Link 
                    to="/home-healthcare-virtual-assistant-services" 
                    className="text-navy hover:text-primary font-semibold text-sm flex items-center gap-2.5 p-2 rounded-lg bg-white border border-slate-100" 
                    onClick={() => setIsOpen(false)}
                  >
                    <Headphones className="w-4 h-4 text-primary shrink-0" />
                    Home Healthcare Virtual Assistant Services
                  </Link>
                </div>
              </div>
              
              <a 
                href="#callback-section" 
                onClick={() => setIsOpen(false)}
                className="block btn-primary w-full text-center shine-button mt-4"
              >
                Hire a MVA Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

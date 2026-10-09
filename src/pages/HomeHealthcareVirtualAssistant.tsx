import React from 'react';
import HomeHealthcareHero from '../components/sections/HomeHealthcareHero';
import ChallengesToggleSection, { ChallengeItem } from '../components/sections/ChallengesToggleSection';
import WhatWeDoTablesSection from '../components/sections/WhatWeDoTablesSection';
import BillingOnboardingSection from '../components/sections/BillingOnboardingSection';
import DedicatedRCMSupportSection from '../components/sections/DedicatedRCMSupportSection';
import RequestCallBackSection from '../components/sections/RequestCallBackSection';
import TopPrioritySaviorSection from '../components/sections/TopPrioritySaviorSection';
import MedicalBillingFAQSection from '../components/sections/MedicalBillingFAQSection';
import CTASection from '../components/sections/CTASection';
import healthcareHeroImg from '../assets/images/virtual-assistant-for-healthcare.webp';
import { 
  Clock, 
  PhoneMissed,
  CalendarClock,
  MessageSquareOff,
  FileQuestion
} from 'lucide-react';

export default function HomeHealthcareVirtualAssistant() {
  // 5 Common Challenges requested by the user for Virtual Assistant Services
  const vaChallenges: ChallengeItem[] = [
    {
      icon: PhoneMissed,
      title: "Missed Calls",
      challengeText: "Front desk staff tied up with office duties let prospective client and physician calls roll into voicemail, losing patients to competitor agencies.",
      solutionText: "Dedicated virtual receptionists answer every phone call within 2-3 rings with friendly, empathetic intake workflows."
    },
    {
      icon: Clock,
      title: "Delayed Intake",
      challengeText: "New patient referrals sit in unread e-faxes for hours, stalling admission decisions, physician communications, and initial nursing assessments.",
      solutionText: "Instant referral intake logs and status tracking initiate patient outreach and EMR profile creation within 30 minutes of receipt."
    },
    {
      icon: CalendarClock,
      title: "Scheduling Pressure",
      challengeText: "Last-minute clinician sick days, shift conflicts, and route changes overwhelm supervisors and disrupt scheduled patient visits.",
      solutionText: "Proactive scheduling assistants coordinate caregiver shifts, route maps, patient reminder calls, and rapid rescheduling."
    },
    {
      icon: MessageSquareOff,
      title: "Unanswered Messages",
      challengeText: "Family questions, clinician queries, and referral portal leads slip through the cracks during busy clinic hours.",
      solutionText: "Prompt, 24/7 nonclinical message dispatch, family check-in coordination, and continuous portal lead response."
    },
    {
      icon: FileQuestion,
      title: "Missing Documents",
      challengeText: "Unsigned physician orders, expired authorizations, and missing OASIS documents threaten audit compliance and delay payments.",
      solutionText: "Relentless physician office follow-up to retrieve signed 485s, face-to-face encounters, and complete document tracking logs."
    }
  ];

  return (
    <div className="bg-white">
      {/* 1. Hero Section with transparent healthcare virtual assistant image */}
      <HomeHealthcareHero 
        highlightHeading="Home Healthcare Virtual Assistant Services"
        mainHeading="Dedicated Support for Home Health Agencies"
        description="Enhance your patient experience with a dedicated home healthcare virtual assistant who manages intake, nurse scheduling, physician orders, and patient calls with expert care. Our home health virtual assistant services allow your clinical staff to focus purely on bedside patient care while we handle the front-desk and back-office essentials."
        imageSrc={healthcareHeroImg}
        imageAlt="Home Healthcare Virtual Assistant"
        primaryBtnText="Hire This Service"
        primaryBtnLink="#callback-section"
        secondaryBtnText="Compare Staffing"
        secondaryBtnLink="#how-it-works"
        flipImage={false}
        transparentImage={true}
        showCtaCard={true}
        ctaCardTitle="Hire a Dedicated VA at $10/hr"
        ctaCardSubtitle="HIPAA Certified • Dedicated Home Health & Billing Support"
        ctaCardBadge="Available Now"
        ctaCardLink="#callback-section"
      />

      {/* 2. Common Challenges Section */}
      <ChallengesToggleSection 
        eyebrow="COMMON AGENCY CHALLENGES"
        titlePart1="Common Challenges: "
        titleHighlight="Issues We Cover"
        subtitle="Missed calls, delayed intake, scheduling pressure, unanswered messages and missing documents burn out your in-house staff. Here is how our dedicated virtual assistants turn chaos into structured efficiency."
        items={vaChallenges}
        ctaText="Book a Free Operations Call"
        ctaLink="#callback-section"
        bgColor="bg-section-bg"
      />

      {/* 3. What We Do Section */}
      <WhatWeDoTablesSection 
        bgColor="bg-white"
        eyebrow="OPERATIONAL TASK COVERAGE"
        title="What We Do"
        subtitle="Explore our exact scope of task coverage across Home Health and Home Care agencies. We handle everything from clinical orders and visit scheduling to caregiver shift management."
        ctaText="Hire This Service"
        ctaLink="#callback-section"
      />

      {/* 4. How It Works Section */}
      <BillingOnboardingSection 
        id="how-it-works"
        bgColor="bg-section-bg"
        badge="How It Works"
        titlePart1="Efficient Billing Team Onboarding for "
        titleHighlight="Maximized Reimbursements"
        subtitle="We start by understanding your needs, matching you with pre-vetted professionals, and conducting consulted onboarding using our signature framework, ensuring long-term success and improved focus for your practice."
        showCta={true}
      />

      {/* 5. Dedicated RCM & VA Support Section */}
      <DedicatedRCMSupportSection 
        id="rcm-support"
        bgColor="bg-white"
        eyebrow="Dedicated Home Health Support"
        pricingText="Started at $7/hr"
        certificationText="HIPAA Certified Staff"
        title="Get a Dedicated Healthcare Assistant for "
        titleHighlight="Dedicated Home Health Support"
        description="Take the administrative pressure off your clinical staff. Our pre-vetted, HIPAA-certified virtual assistants seamlessly handle intake, scheduling, patient communication, and documentation starting at just $7/hr."
        planRate="7"
        ctaLink="#callback-section"
      />

      {/* 6. Request Call Back Section */}
      <RequestCallBackSection 
        id="callback-section"
        serviceContext="Home Healthcare Virtual Assistant Services"
        bgColor="bg-section-bg"
      />

      {/* 7. How We Became a Top Priority Savior of Healthcare Practitioners? */}
      <TopPrioritySaviorSection id="testimonials-proof" />

      {/* 8. Frequently Asked Questions matching screenshot */}
      <MedicalBillingFAQSection id="faq" bgColor="bg-white" />

      {/* 9. Final CTA Section */}
      <CTASection 
        bgColor="bg-section-bg" 
        primaryCTA={{ text: "Schedule Consultation", link: "#callback-section" }}
        secondaryCTA={{ text: "Explore Billing Services", link: "/home-healthcare-billing-services" }}
      />
    </div>
  );
}

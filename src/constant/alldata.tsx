import React from "react";
import Link from "next/link";
import { IMAGES, SVGICONS } from "./theme";
import Image, { StaticImageData } from "next/image";
interface ServiceDetail {
  title: string;
  image: StaticImageData;
  overview: string;
  subheading?: string;
  subheadingcontent?: string;
  whoItsFor?: string;
  whoItsForBullets?: string[];
  howItWorks?: string[];
  choosingRightSupport?: string;
  sections?: {
    title: string;
    content?: string;
    items?: string[];
  }[];
  medicalAssistanceSections?: {
    title: string;
    items: string[];
  }[];
  closingNote?: string;
  preferredDestinations?: string;
  faqs: { question: string; answer: string }[];
}

// layout
// header
export const headerinfo = [
  {
    image: IMAGES.svgicon1,
    title: "Contact Us",
    paragraph: (
      <Link href="tel:+251943104334" className="text-[#3b1b51]">
        +251943104334
      </Link>
    ),
  },
  {
    image: IMAGES.svgicon2,
    title: "Email Supports",
    paragraph: (
      <Link href="mailto:info@lhsethiopia.com" className="text-secondary">
        info@lhsethiopia.com
      </Link>
    ),
  },
  {
    image: IMAGES.svgicon3,
    title: "Online Appointment",
    paragraph: (
      <span>
        Request Assistance
        <i className="feather icon-arrow-right" />
      </span>
    ),
  },
  { image: IMAGES.svgicon4, title: "Supports", paragraph: "24x7 Supports" },
];

export type HeaderContentItem = {
  title: string;
  to: string;
  image?: string | StaticImageData;
};

export type HeaderItem = {
  title: string;
  to?: string;
  classChange?: string;
  content?: HeaderContentItem[];
};

export const headerdata: HeaderItem[] = [
  { title: "Home", to: "/" },
  { title: "About Us", to: "about-us" },
  { title: "Services", to: "services" },
  { title: "Testimonials", to: "testimonial" },
  { title: "Gallery", to: "gallery" },
  { title: "Blogs", to: "blogs" },
  { title: "Contact Us", to: "contact-us" },
];

// footer
export const footerdata1 = [
  {
    delay: "0.4s",
    icon: <i className="feather icon-phone" />,
    title: "Call Us",
    paragraph: (
      <Link href="tel:+251943104334" className=" text-white">
        +251943104334
      </Link>
    ),
  },
  {
    delay: "0.6s",
    icon: <i className="feather icon-mail" />,
    title: "Send us a Mail",
    paragraph: (
      <Link href="mailto:info@lhsethiopia.com" className="text-white">
        info@lhsethiopia.com
      </Link>
    ),
  },
  {
    delay: "0.8s",
    icon: <i className="feather icon-clock" />,
    title: "Opening Time",
    paragraph: "Mon -Sat: 7:00 - 17:00",
  },
];

export const footerdata2 = [
  {
    title: "Our Services",
    span1: "Consultation",
    span2: "Medical Escort",
    span3: "Travel Arrangement",
    span4: "Treatment coordination",
    span5: "Post-treatment support",
    link1: "/service-detail/consultation",
    link2: "/service-detail/medical-escort",
    link3: "/service-detail/travel-arrangement",
    link4: "/service-detail/treatment-coordination",
    link5: "/service-detail/post-treatment-support",
    delay: "0.4s",
  },
  {
    title: "Useful Links",
    span1: "Privacy Policy",
    span2: "Terms & Conditions",
    span3: "Contact Us",
    span4: "Latest News",
    span5: "Our Sitemap",
    link1: "#",
    link2: "#",
    link3: "#",
    link4: "#",
    link5: "#",
    delay: "0.6s",
  },
  {
    title: "Quick Links",
    span1: "About Us",
    span2: "Our Services",
    span3: "Our Team",
    span4: "Enquiries",
    span5: "Contact Us",
    link1: "/about-us",
    link2: "/services",
    link3: "/team",
    link4: "/appointment",
    link5: "/contact-us",
    delay: "0.8s",
  },
];

// pages
// testimonial
export const testidata = [
  { treat: "Optimal Treatment", delay: "0.2s", title: "Yeshitela Admas", position: "Patient", image: IMAGES.testimonial1 },
  { treat: "Best Treatment", delay: "0.4s", title: "Danial Frankie", position: "Patient", image: IMAGES.testimonial2 },
  { treat: "Recommended Care", delay: "0.6s", title: "Rihana Roy", position: "Patient", image: IMAGES.testimonial4 },
  { treat: "First-Class Treatment", delay: "0.8s", title: "Kenneth Fong", position: "Patient", image: IMAGES.testimonial5 },
];

export const testiswipeerdata2 = [
  { image: IMAGES.testimonialsmall1, name: "Danial Frankie" },
  { image: IMAGES.testimonialsmall2, name: "Esteban Serrano" },
  { image: IMAGES.testimonialsmall3, name: "Rihana Roy" },
];

export interface BlogItem {
  image: any;
  dealy: string;
  title: string;
}

export const blogdata: BlogItem[] = [
  { image: IMAGES.blogoverlaylarge1, dealy: "0.1s", title: "The Art of Managing Business and Patient Care." },
  { image: IMAGES.blogoverlaylarge2, dealy: "0.2s", title: "Successful Transitional Rehab: More Than Just Exercise" },
  { image: IMAGES.blogoverlaylarge3, dealy: "0.3s", title: "What is Respite Care and Why is it Important?" },
  { image: IMAGES.blogoverlaylarge4, dealy: "0.4s", title: "The Art of Managing Business and Patient Care" },
  { image: IMAGES.blogoverlaylarge5, dealy: "0.5s", title: "Three Years Post Injury: Persistence and Progress" },
  { image: IMAGES.blogoverlaylarge6, dealy: "0.6s", title: "How Transitional Rehabilitation Aids in Stroke Recovery" },
];

export const blogdata2 = [
  { image: IMAGES.bloggrid1, dealy: "0.1s", title: "The Art of Managing Business and Patient Care." },
  { image: IMAGES.bloggrid2, dealy: "0.2s", title: "Successful Transitional Rehab: More Than Just Exercise" },
  { image: IMAGES.bloggrid3, dealy: "0.3s", title: "What is Respite Care and Why is it Important?" },
  { image: IMAGES.bloggrid4, dealy: "0.4s", title: "The Art of Managing Business and Patient Care" },
  { image: IMAGES.bloggrid5, dealy: "0.5s", title: "Three Years Post Injury: Persistence and Progress" },
  { image: IMAGES.bloggrid6, dealy: "0.6s", title: "How Transitional Rehabilitation Aids in Stroke Recovery" },
];

// servicedetails
export const servicedetails = [
  { columnstand: "active", title: "Air Ambulance Coordination", link: "/service-detail/air-ambulance-coordination" },
  { title: "Medical Assistance", link: "/service-detail/medical-assistance" },
  { title: "Commercial Medical Escort", link: "/service-detail/commercial-medical-escort" },
  { title: "Medical Tourism", link: "/service-detail/medical-tourism" },
];

// ========== UPDATED serviceDetailData (all sections + FAQs included) ==========
export const serviceDetailData: Record<string, ServiceDetail> = {
  "air-ambulance-coordination": {
    title: "Air Ambulance Coordination",
    image: IMAGES.about5,
    overview: `Medically supervised air transport for patients whose condition requires more than a commercial flight can safely provide.`,
    subheading: "When air ambulance support is the right option",
    subheadingcontent: `Some patients are too unstable, too dependent on equipment, or too medically complex to travel on a scheduled commercial flight, even with an escort. Air ambulance coordination is built for exactly these cases: critical transfers, complex repatriations, and situations where continuous medical care is required from the moment the patient leaves one facility until they're handed over at the next.`,
    whoItsForBullets: [
      "Critically ill or unstable patients requiring continuous monitoring",
      "Patients dependent on ventilation, advanced life support, or specialized equipment in transit",
      "Emergency medical repatriations",
      "Cases where commercial travel, even with escort support, isn't medically appropriate"
    ],
    howItWorks: [
      "Clinical assessment. Our physicians assess the patient's condition, stability, and equipment needs to confirm that air ambulance transport, rather than a lower level of care, is the appropriate option.",
      "Flight coordination. We arrange the aircraft, crew, and ground transfers through our partner network, East African Aviation, AMREF Flying Doctors, and BlueDot (Dubai).",
      "Physician-led transfer. On East African Aviation flights, our own doctors serve as lead physician onboard, overseeing the patient's care from departure through handover at the receiving facility."
    ],
    choosingRightSupport: `Air ambulance is the right choice when a patient's condition doesn't allow for commercial travel. If a patient is stable enough to sit upright and fly on a scheduled flight with supervision, commercial medical escort may be the safer and more cost effective option. Our clinical team can assess the case and recommend the appropriate level of care.`,
    faqs: [
      {
        question: "Is Lighthouse Healthcare Solutions an air ambulance operator?",
        answer: "We coordinate air ambulance missions through a network of vetted fixed wing aircraft operators and medical teams. We do not own or operate the aircraft ourselves. This allows us to match each case to the right aircraft and crew for the patient's specific medical needs and location."
      },
      {
        question: "Do you provide helicopter transport?",
        answer: "At this time, our air ambulance coordination is fixed wing only. If a case requires helicopter transport, we can advise on referral options, but it is not currently part of our direct service offering."
      },
      {
        question: "How quickly can an air ambulance mission be arranged?",
        answer: "Most non-emergency transfers are coordinated within 4 hours. Emergency cases are prioritized and can be arranged within 2 hours, depending on aircraft availability and required regulatory clearances. Our team begins mission planning as soon as we receive the case details."
      },
      {
        question: "Can a family member or companion travel with the patient?",
        answer: "Yes, a family member can fly with the patient, subject to the aircraft configuration and the medical crew and equipment required for the patient's condition. This is confirmed during the medical assessment stage."
      },
      {
        question: "Do you handle ground transportation at departure and arrival?",
        answer: "Yes. Ground ambulance coordination at both the pickup and destination is included as part of the mission, so the patient moves from bedside to bedside under continuous coordination."
      },
      {
        question: "What information do you need to start a case?",
        answer: "Typically the patient's current location and condition, receiving hospital or destination, and contact details for the referring physician or family. Our team will guide you through any additional information needed once you submit an enquiry."
      }
    ]
  },

  "medical-assistance": {
    title: "Medical Assistance",
    image: IMAGES.about5,
    overview: `End to end coordination for insurers and corporates operating in Ethiopia and the region.`,
    medicalAssistanceSections: [
      {
        title: "Network Navigation & Appointment Logistics",
        items: [
          "Vetted Provider Network. A carefully audited network of leading hospitals, diagnostic centers, and specialist clinicians across East Africa.",
          "Doctor Matching. Patients are matched to verified specialists based on clinical track record, credentialing, and case complexity.",
          "Booking & Admission Coordination. Fast tracked scheduling for outpatient consultations, diagnostics, and planned inpatient admissions, reducing administrative delay for the client."
        ]
      },
      {
        title: "Medical Case Management",
        items: [
          "Clinical Auditing. Ongoing review of inpatient charts by our medical officers to confirm clinical necessity, monitor treatment progress, and prevent unnecessary delays or over treatment.",
          "Progress Reporting. Standardized, secure updates provided directly to the insurer or employer, keeping all stakeholders aligned on recovery timelines.",
          "Discharge Planning & Repatriation. Coordinated discharge protocols, including care transition summaries and transport arrangements if a patient needs to return to their home community."
        ]
      },
      {
        title: "On Site Hospital Assistance & Patient Advocacy",
        items: [
          "Field Case Managers. Dedicated coordinators accompany patients during complex hospital visits or admissions, acting as a clinical point of contact throughout.",
          "Billing & Document Verification. Real time review of medical records, lab requests, and interim billing to ensure transparency before claims reach the insurer.",
          "Language & Cultural Support. Bedside communication support so patients and families fully understand diagnoses, treatment risks, and consent requirements."
        ]
      },
      {
        title: "Prescription & Medication Coordination",
        items: [
          "Chronic Medication Management. Ongoing tracking of recurring prescriptions for insured members and corporate employees managing chronic conditions.",
          "Prescription Verification. Refill requests are confirmed directly with the treating physician to ensure safety and compliance.",
          "Delivery Logistics. Secure, temperature controlled delivery of medication from certified pharmacies to the patient's home or workplace."
        ]
      }
    ],
    faqs: [
      {
        question: "What kind of organizations do you work with?",
        answer: "We work with international insurers, assistance companies, employers with staff in Ethiopia, NGOs, diplomatic missions, and other corporate organizations that need a local medical coordination partner."
      },
      {
        question: "Do you handle ongoing case management or only single incidents?",
        answer: "Both. We offer retainer arrangements for organizations that need ongoing medical assistance coverage, as well as one time service for a single case, depending on your organization's needs."
      },
      {
        question: "Can you provide case updates and documentation for our records?",
        answer: "Yes. Case management includes regular case updates and billing documentation provided back to the referring organization, so you have full visibility into the case as it progresses."
      },
      {
        question: "Do you work directly with hospitals and clinics in Ethiopia?",
        answer: "Yes. We work with most of the reputable hospitals in Ethiopia and provide fast tracked service for our clients at these hospitals."
      },
      {
        question: "How do we set up an ongoing arrangement with LHS for your organization?",
        answer: "Contact our team to discuss your organization's needs, whether that is a single case, a retainer arrangement, or support for a specific event or deployment. We will tailor the arrangement to your requirements."
      },
      {
        question: "Is this service available for emergencies as well as planned medical needs?",
        answer: "Yes. We provide 24/7 support for both urgent medical situations and planned or ongoing case management needs."
      }
    ]
  },

  "commercial-medical-escort": {
    title: "Commercial Medical Escort",
    image: IMAGES.testimonial1,
    overview: `Medically supervised travel on commercial flights for patients who are fit to travel independently but need professional oversight along the way.`,
    sections: [
      {
        title: "When medical escort support is the right option",
        content: `Many patients are fit to fly on commercial airlines but still need medical support, supervision, or reassurance during the journey. Medical escort services are designed for patients who can remain seated throughout travel but shouldn't fly alone, whether due to their medical condition, stage of recovery, age, or ongoing treatment needs. This service allows safe travel on scheduled flights, with a qualified LHS clinician accompanying the patient from departure through arrival.`
      },
      {
        title: "How medical escort support works",
        items: [
          "Medical review. Before travel, our medical team reviews the patient's condition to confirm suitability for escort based travel, assessing stability, mobility, medication requirements, and any in flight considerations.",
          "Travel coordination. Once approved, we arrange travel logistics, airline notifications where required, and any medical equipment or medication needed during the flight.",
          "Journey support. Patients are accompanied by qualified LHS medical professionals, doctors or paramedics, who provide monitoring, assistance, and reassurance from departure to arrival."
        ]
      },
      {
        title: "Who medical escort services are for",
        items: [
          "Patients recovering from surgery or illness",
          "Elderly patients requiring supervision during travel",
          "Patients travelling for ongoing treatment or follow up care",
          "Individuals who shouldn't fly unaccompanied for medical reasons"
        ]
      },
      {
        title: "Choosing the right level of support",
        content: `Medical escort services are suitable when a patient is fit to sit and travel but needs medical supervision. If a patient requires continuous monitoring, specialized equipment, or stretcher support, air ambulance coordination may be the more appropriate option. Our clinical team can help assess and recommend the safest choice.`
      }
    ],
    faqs: [
      {
        question: "How is a commercial medical escort different from an air ambulance?",
        answer: "A commercial medical escort travels with the patient on a regular commercial flight, rather than a dedicated medical aircraft. It is suited to patients who are medically stable but still need professional monitoring, assistance, or clinical support during the trip, generally at a lower cost than an air ambulance."
      },
      {
        question: "Who decides if a patient qualifies for a commercial escort rather than an air ambulance?",
        answer: "Our medical team reviews the patient's condition and medical history before confirming the appropriate mode of transport. If a case requires a higher level of care than a commercial escort can safely provide, we will advise on air ambulance coordination instead."
      },
      {
        question: "Does the airline need to approve the transport in advance?",
        answer: "Yes. Depending on the patient's condition, airlines may require medical clearance before travel. Our team manages this process as part of the booking, so the patient and family don't have to coordinate directly with the airline."
      },
      {
        question: "What qualifications do your medical escorts have?",
        answer: "Our escorts are registered and emergency trained nurses and doctors with flight medicine experience, matched to the patient's specific medical needs."
      },
      {
        question: "Can family members travel on the same flight?",
        answer: "In most cases, yes. Family members can book seats on the same commercial flight as the patient and escort. This is arranged as part of the travel coordination."
      },
      {
        question: "What happens if the patient's condition changes before departure?",
        answer: "Our medical team reassesses the case if there is a change in condition, and will advise whether a commercial escort is still appropriate or whether air ambulance transport is recommended instead."
      }
    ]
  },

  "medical-tourism": {
    title: "Medical Tourism",
    image: IMAGES.about3,
    overview: `Trusted coordination for treatment abroad, from first consultation through post treatment follow up.`,
    sections: [
      {
        title: "When care isn't available at home",
        content: `Sometimes the right specialist, the right treatment, or an acceptable waiting time simply isn't available locally. When that happens, going abroad for care shouldn't mean navigating an unfamiliar health system alone, in a language you don't speak, with no one to call if something changes. LHS coordinates the full journey so patients can focus on getting well, not on logistics.`
      },
      {
        title: "How we support your medical journey",
        items: [
          "Consultation. We review your case and connect you with the right specialist and facility abroad.",
          "Treatment Coordination. We liaise directly with partner hospitals in Thailand, India, Turkey, and Dubai to arrange appointments, documentation, and treatment plans.",
          "Travel Arrangement. We coordinate visas, flights, and accommodation around your treatment schedule.",
          "Medical Escort, where needed. For patients who need supervision en route, an LHS clinician can accompany you throughout the trip.",
          "Post Treatment Support. We stay engaged after you return home, coordinating follow up care and continuity with your local providers."
        ]
      },
      {
        title: "Why patients choose LHS for care abroad",
        items: [
          "A vetted network of 70+ hospitals across 7 countries",
          "Clinician-led coordination, not a purely administrative booking service",
          "Support before, during, and after treatment, not just at the booking stage",
          "Established relationships with hospitals in Thailand, India, Turkey, and Dubai"
        ]
      }
    ],
    closingNote: `Medical Tourism is one of LHS's four core services, backed by the same clinician-led approach behind our air ambulance, medical assistance, and escort work.`,
    faqs: [
      {
        question: "How do you choose which country or hospital is right for a patient?",
        answer: "It depends on the patient's condition, the treatment required, and personal preference. We help patients weigh options across our supported destinations, India, Thailand, Turkey, UAE, and Ethiopia, working only with JCI accredited hospitals."
      },
      {
        question: "What does Lighthouse Healthcare Solutions actually arrange?",
        answer: "We coordinate hospital selection, appointment scheduling, travel logistics (flights and accommodation), visa assistance, and communication between the patient and the treating hospital. Medical treatment itself is provided by the hospital, not by LHS directly."
      },
      {
        question: "Do you help with visas and travel documents?",
        answer: "Yes. We assist with visa applications and advise on requirements for your destination country as part of the travel planning process."
      },
      {
        question: "What happens if I need follow up care after returning home?",
        answer: "We help coordinate continuity of care after treatment, including communication with the treating hospital about follow up requirements. If you need local follow‑up appointments, we can advise on available options."
      },
      {
        question: "Is medical tourism only for major surgeries?",
        answer: "No. Patients come to us for a range of needs, from specialized procedures not available locally to treatments where cost, wait times, or expertise make travelling abroad the better option."
      },
      {
        question: "How far in advance should I contact you before travelling?",
        answer: "The earlier the better, especially for procedures that require hospital scheduling or visa processing. Contact us as soon as you are considering treatment abroad and we will advise on realistic timelines for your case."
      }
    ]
  }
};

// teamdetail
export const empolydata = [
  { id: 1, delay: "0.2s", image: IMAGES.team2, title: "Dr. Yonathan Gary", position: "Managing Director", linkedin:"http://linkedin.com/in/dr-yonathan-gary" },
  { id: 2, delay: "0.4s", image: IMAGES.team1, title: "Dr. Yabets Taye", position: "Deputy Managing Director", linkedin:"https://www.linkedin.com/in/yabets-t-bifitu-md-97a59387" },
];

// component
export const locationdata = [{ delay: "0.2s", title: "Addis Ababa" }];

export const awardswiperdata = [
  { image: IMAGES.partner1 }, { image: IMAGES.partner2 }, { image: IMAGES.partner3 },
  { image: IMAGES.partner4 }, { image: IMAGES.partner5 }, { image: IMAGES.partner6 },
  { image: IMAGES.partner7 }, { image: IMAGES.partner8 }, { image: IMAGES.partner9 },
  { image: IMAGES.partner10 }, { image: IMAGES.partner11 },
];

export const awarddata = [
  { delay: "0.5s", title: "2024" }, { delay: "0.6s", title: "2023" }, { delay: "0.7s", title: "2022" },
  { delay: "0.8s", title: "2021" }, { delay: "0.9s", title: "2020" }, { delay: "1.0s", title: "2019" },
  { delay: "1.1s", title: "View All" },
];

export const clientswiperdata1 = [
  { image: IMAGES.logomiddle1, delay: "0.1s" }, { image: IMAGES.logomiddle2, delay: "0.2s" },
  { image: IMAGES.logomiddle3, delay: "0.3s" }, { image: IMAGES.logomiddle4, delay: "0.4s" },
  { image: IMAGES.logomiddle1, delay: "0.5s" }, { image: IMAGES.logomiddle2, delay: "0.6s" },
  { image: IMAGES.logomiddle3, delay: "0.7s" }, { image: IMAGES.logomiddle4, delay: "0.8s" },
];

export const clientswiperdata2 = [
  { image: IMAGES.logosmall1, delay: "0.1s" }, { image: IMAGES.logosmall2, delay: "0.2s" },
  { image: IMAGES.logosmall3, delay: "0.3s" }, { image: IMAGES.logosmall4, delay: "0.4s" },
  { image: IMAGES.logosmall5, delay: "0.5s" }, { image: IMAGES.logosmall6, delay: "0.6s" },
  { image: IMAGES.logosmall1, delay: "0.7s" }, { image: IMAGES.logosmall2, delay: "0.8s" },
  { image: IMAGES.logosmall3, delay: "0.9s" }, { image: IMAGES.logosmall4, delay: "1.0s" },
  { image: IMAGES.logosmall5, delay: "1.1s" }, { image: IMAGES.logosmall6, delay: "1.2s" },
];

export const countupdata = [
  { title: "Specialists", delay: "0.4s", countup: 200, span: "+" },
  { title: "Happy Patients", delay: "0.6s", countup: 45, span: "K" },
  { title: "Winning Awards", delay: "0.8s", countup: 150, span: "+" },
];

export const accordiondata = [
  { delay: "0.5s", key: "0", title: "How much does treatment abroad cost?", answer: "Costs vary by procedure and destination. As a general guide: Turkey and India are the most affordable, Thailand is mid-range. Contact us for a free personalized cost estimate for your specific condition." },
  { delay: "0.6s", key: "1", title: "Why should I use LHS instead of contacting the hospital directly?", answer: "Hospitals abroad don’t speak Amharic, don’t understand the Ethiopian healthcare system, and won’t accompany you on your journey. LHS handles everything — consultation, visa, flights, hospital appointments, translation, and a doctor who travels with you — so you never feel alone or confused." },
  { delay: "0.7s", key: "2", title: "Which countries do you send patients to?", answer: "We primarily work with hospitals in Turkey, Thailand, and India. Each destination is chosen for quality, affordability, and accessibility from Addis Ababa." },
  { delay: "0.8s", key: "3", title: "Can you help with medical insurance claims?", answer: "Yes, we can assist with documentation and coordination for patients who have international health insurance coverage." },
  { delay: "0.9s", key: "4", title: "Do I pay LHS or the hospital directly?", answer: "Hospital fees are paid directly to the hospital. LHS charges separately for its facilitation and escort services. We provide a full cost breakdown before you travel." },
];

export const howitworkdata = [
  { delay: "0.2s", icon: <i className="feather icon-clock" />, title: "Request Assistance" },
  { delay: "0.4s", icon: <i className="flaticon-list" />, title: "Clinical Assessment" },
  { delay: "0.6s", icon: <i className="flaticon-stethoscope" />, title: "Transport Coordination" },
  { delay: "0.8s", icon: <i className="flaticon-hand-holding-usd" />, title: "Safe Transfer & Support" },
];

export const inspirationaldata = [
  { columnstand: "m-r25", delay: "0.2s", title: "Mission", svg: SVGICONS.mission },
  { columnstand: "m-l25", delay: "0.4s", title: "Vision", svg: SVGICONS.vision },
  { columnstand: "m-r25", delay: "0.6s", title: "Values", svg: SVGICONS.values },
];

export const mapdata = [
  { id: 1, delay: "0.2s", icon: <i className="feather icon-map-pin" />, title: "Address", para: <p>234 Oak Drive, Villagetown, USA</p> },
  { id: 2, delay: "0.4s", icon: <i className="feather icon-phone" />, title: "Call Us", para: <p><Link href="tel:+251943104334">+251943104334</Link></p> },
  { id: 3, delay: "0.6s", icon: <i className="feather icon-mail" />, title: "Send us a Mail", para: <p><Link href="mailto:info@lhsethiopia.com">info@lhsethiopia.com</Link></p> },
  { id: 4, delay: "0.8s", icon: <i className="feather icon-clock" />, title: "Opening Time", para: <p>Mon-Thu: 8:00am-5:00pm <br /> Fri: 8:00am-1:00pm</p> },
];

export const meetdrdata1 = [
  { title: "Radiant Skin Dermatology" }, { title: "Laser Resurfacing" }, { title: "Flawless Dermatology" },
  { title: "Refined Skin Dermatology" }, { title: "Luminous Dermatology" }, { title: "Anti Aging" },
];
export const meetdrdata2 = [{ image: IMAGES.logo1 }, { image: IMAGES.logo2 }];

export const pricingdata1 = [
  { title: "Cardiovascular Services" }, { title: "Weight Management" }, { title: "Dental Services" },
  { title: "Women's Health" }, { title: "Emergency Medicine" }, { title: "Family Medicine" },
  { title: "24/7 customer support" }, { title: "Video Call Support" },
];
type PricingItem = {
  delay: string;
  coloumnstand?: string;
  title: React.ReactElement;
  feature: React.ReactElement;
};
export const pricingdata2: PricingItem[] = [
    // ... (truncated for brevity; keep your original pricing data unchanged)
];

export const testiswipeerdata = [
  { image: IMAGES.testimonial1, name: "Yeshitela Admas", message: `“Lighthouse Healthcare Solutions delivered exceptional care with professionalism and compassion. Their team ensured a smooth and safe process from start to finish, and we felt fully supported throughout.”` },
  { image: IMAGES.testimonial1, name: "Yeshitela Admas", message: `“Lighthouse Healthcare Solutions delivered exceptional care with professionalism and compassion. Their team ensured a smooth and safe process from start to finish, and we felt fully supported throughout.”` },
  { image: IMAGES.testimonial1, name: "Yeshitela Admas", message: `“Lighthouse Healthcare Solutions delivered exceptional care with professionalism and compassion. Their team ensured a smooth and safe process from start to finish, and we felt fully supported throughout.”` },
];

export const serviceboxdata = [
  { id: 1, delay: "0.1s", slug: "consultation", title: "Air Ambulance Coordination", tag:"24/7 Response", link: "/service-detail/air-ambulance-coordination", image: IMAGES.about3, svg1: SVGICONS.iconcell1, svg2: SVGICONS.iconbg1, desc: "24/7 coordination of fixed wing air ambulance missions for critically ill or injured patients requiring urgent medical evacuation." },
  { id: 2, delay: "0.2s", slug: "medical-escort", title: "Commercial Medical Escort", tag: "Trusted Network", link: "/service-detail/commercial-medical-escort", image: IMAGES.testimonial2, svg1: SVGICONS.iconcell2, svg2: SVGICONS.iconbg2, desc: "Qualified medical escorts accompany patients on commercial flights, providing clinical monitoring and support during international patient transfer.", fullDesc: "Our clinician-led team accompanies you throughout your entire medical journey abroad. From departure to return, a qualified doctor travels with you ensuring your safety, comfort, and continuity of care at every step.", steps: ["Flight Booking", "Visa Assistance", "Airport Transfer", "Hospital Accompaniment"] },
  { id: 3, delay: "0.3s", slug: "travel-arrangement", title: "Medical Tourism", tag: "Global Coverage", link: "/service-detail/medical-tourism", image: IMAGES.about4, svg1: SVGICONS.iconcell3, svg2: SVGICONS.iconbg3, desc: "Coordinated medical tourism support for patients seeking specialized treatment abroad, including hospital selection, travel logistics, and continuity of care from consultation through recovery." },
  { id: 4, delay: "0.4s", slug: "treatment-coordination", title: "Medical Assistance", tag: "Case Managers", link: "/service-detail/medical-assistance", image: IMAGES.bg1, svg1: SVGICONS.iconcell4, svg2: SVGICONS.iconbg4, desc: "Medical assistance and case management for international insurers, assistance companies, employers, NGOs, diplomatic missions, and corporate organizations operating in Ethiopia." },
];

export const tagdata = [
  { title: "Acupressure", num: "(10)" }, { title: "Allgemein", num: "(5)" }, { title: "Blood", num: "(17)" },
  { title: "Food", num: "(13)" }, { title: "Health", num: "(06)" }, { title: "Mental Health", num: "(17)" },
  { title: "Therapy", num: "(13)" }, { title: "Walking", num: "(06)" },
];

export const sidebarpostdata = [
  { date: "10 June 2025", image: IMAGES.blogsmall1, title: "The Art of Managing Business and Patient Care" },
  { date: "13 June 2025", image: IMAGES.blogsmall2, title: "The New Face of Care Blending Empathy with Expertise" },
  { date: "17 June 2025", image: IMAGES.blogsmall3, title: "Here Care Expertise Elevating the Patient Experience" },
];

export const whychoosedata = [
  { delay: "0.4s", title: "Trusted Medical Professionals", desc: "Delivering compassionate, ethical, and high-quality service." },
  { delay: "0.6s", title: "Personalized Care", desc: "Tailored healthcare solutions for every patient's needs." },
  { delay: "0.8s", title: "Safe Medical Transport", desc: "Reliable patient transfers with safety as our top priority." },
  { delay: "1.0s", title: "Clinician-Led Expertise", desc: "Led by experienced doctors and healthcare professionals." },
];

export const worldclasslistdata = [
  { title: "Clinician-Led Expertise" }, { title: "Medical Travel Specialists" }, { title: "Emergency Transport Services" },
  { title: "Trusted Healthcare Network" }, { title: "Not Medical Brokers" }, { title: "Patient-Centered Approach" },
  { title: "Critical Care Experience" }, { title: "Professional & Ethical Service" },
];
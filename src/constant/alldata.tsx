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
      <Link href="mailto:info@lighthouse.healthcare" className="text-secondary">
        info@lighthouse.healthcare
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
  { title: "About Us", to: "/about-us" },
  { title: "Services", to: "/services" },
  { title: "Testimonials", to: "/testimonial" },
  { title: "Gallery", to: "/gallery" },
  { title: "Blogs", to: "/blog-grid" },
  { title: "Contact Us", to: "/contact-us" },
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
      <Link href="mailto:info@lighthouse.healthcare" className="text-white">
        info@lighthouse.healthcare
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
    span1: "Air Ambulance Coordination",
    span2: "Commercial Medical Escort",
    span3: "Medical Tourism",
    span4: "Medical Assistance",
    span5: "All Services",
    link1: "/service-detail/air-ambulance-coordination",
    link2: "/service-detail/commercial-medical-escort",
    link3: "/service-detail/medical-tourism",
    link4: "/service-detail/medical-assistance",
    link5: "/services",
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
  { 
    treat: "Kidney Transplant", 
    delay: "0.1s", 
    title: "Yared & Tizibit", 
    position: "Patient & Family", 
    image: IMAGES.testimonial1, 
    message: "“We can’t thank you enough for the support we received on this journey. I was given a second chance at life through a kidney donation from my brother, and words will never be enough to express our gratitude to Dr. Yonathan and the Lighthouse Healthcare Solutions team. From helping us secure board letters, guiding us through hospital options in different countries, and finally supporting us in choosing the right hospital, Dr. Yonathan was there every step of the way. He stayed with us in India throughout the treatment, handling every detail so we could focus only on healing. Even now, after returning home safely, the team continues to check in on us. We are forever grateful and indebted to you for your care and dedication.”" 
  },
  { 
    treat: "Medical Escort Services", 
    delay: "0.2s", 
    title: "Prof. Alemu G.", 
    position: "Parent", 
    image: IMAGES.testimonial2, 
    message: "“I highly recommend this company for medical escort services. They were the ones who helped my child travel safely to Bangkok on Ethiopian Airlines. Thanks to their continuous medical support during the flight, my baby boy arrived safely to receive the care he needed. They arranged everything — from securing a stretcher with the airline, to organizing tarmac ambulances at both departure and arrival, and even bringing advanced medical equipment onboard. Their professionalism and commitment gave us peace of mind throughout the journey. I am proud to recommend them and proud to have such a service available here in Ethiopia.”" 
  },
  { 
    treat: "Emergency Transfer", 
    delay: "0.3s", 
    title: "Samrawit T.", 
    position: "Family member", 
    image: IMAGES.testimonial1, 
    message: "“LHS coordinated everything for my father's emergency transfer to Dubai. From hospital to air ambulance, their team was fast, caring, and professional. We’re forever grateful!”" 
  },
  { 
    treat: "Treatment Abroad", 
    delay: "0.4s", 
    title: "Abdu M.", 
    position: "Dessie", 
    image: IMAGES.testimonial2, 
    message: "“LHS helped me get a successful kidney transplant in India. They guided me through every step, and I’m now recovering well. Thank you, LHS!”" 
  },
  { 
    treat: "Physician Referral", 
    delay: "0.5s", 
    title: "Dr. Mekdes A.", 
    position: "Internist", 
    image: IMAGES.testimonial4, 
    message: "“LHS made international transfer seamless for my patient. Their updates, coordination, and follow-up were outstanding. I refer with full confidence.”" 
  }
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
    image: IMAGES.bnr1,
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
          "A vetted network of 50+ JCI accredited hospitals across 7 countries",
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
  { 
    id: 1, 
    delay: "0.2s", 
    image: IMAGES.team2, 
    title: "Dr. Yonathan Gary", 
    position: "Managing Director", 
    linkedin: "http://linkedin.com/in/dr-yonathan-gary", 
    bio: "Dr. Yonathan Gary is an Emergency Medicine Specialist and healthcare leader whose career sits at the intersection of frontline critical care, aeromedical transport, and cross-border healthcare coordination. Trained in emergency medicine at Addis Ababa University following his medical degree at Hawassa University, he has spent more than a decade treating the most acute cases medicine presents from trauma and adult medical emergencies to complex pediatric and neonatal resuscitation in both major hospital settings and remote, resource-limited environments.\nDr. Yonathan G has personally overseen more than 350 emergency medical evacuations across Ethiopia, Europe, South America, the Middle East, Asia, and Africa, managing everything from initial case assessment through in-flight critical care to safe handover at the receiving hospital, including specialized VVIP and corporate evacuations. This aeromedical expertise is grounded in direct clinical experience: as part of the team that helped establish Ethiopia's second Emergency Medicine Residency Program and rebuild the emergency department at St. Paul Millennium Medical College, he provided frontline trauma and critical care management, and served on hospital disaster-response teams during two of the country's major mass-casualty incidents.\nHis experience extends into humanitarian and remote settings, including leading a WFP/UN inter-agency medical clinic during a regional humanitarian crisis, and serving as the sole Remote site physician for international film crews, scientific expeditions, and industrial projects operating in some of Ethiopia's most isolated terrain, including the Danakil Depression.\nToday, Dr. Yonathan G leads Lighthouse Healthcare Solutions, where he combines clinical judgment with operational leadership directing commercial airline medical escorts, cross-border patient coordination, and hospital partnerships across the region. He also serves as Medical Director for the Great Ethiopian Run, one of Africa's largest mass-participation road races. His work is grounded in a consistent commitment: making safe, physician-led medical transport and cross-border care coordination accessible to patients and institutions who need it most." 
  },
  { 
    id: 2, 
    delay: "0.4s", 
    image: IMAGES.team1, 
    title: "Dr. Yabets Taye", 
    position: "Deputy Managing Director", 
    linkedin: "https://www.linkedin.com/in/yabets-t-bifitu-md-97a59387", 
    bio: "Dr. Yabets Taye Bifitu is a General Practitioner and Deputy Managing Director at Lighthouse Healthcare Solutions (LHS), where he helps guide the organization's efforts to deliver coordinated, reliable healthcare support across borders.\nHis clinical background spans aviation medicine, emergency medicine, and remote-site medical support, alongside experience in occupational health and safety and medical coordination. This foundation has given him firsthand exposure to the realities of caring for patients in demanding and unpredictable environments, from medical evacuations and commercial medical escorts to international patient coordination and cross-border healthcare logistics. He holds BLS, ACLS, and relevant aviation medicine certifications, reflecting his ongoing commitment to maintaining the clinical readiness his work requires.\nAt LHS, Dr. Yabets' contribution extends beyond clinical expertise into the operational side of the business. He is involved in day-to-day operations, finance, and service delivery, and plays an active role in case coordination, ensuring that patients move safely and smoothly between healthcare providers, international partners, insurers, and corporate clients. He also supports business development and the company's broader strategic growth, bringing a perspective shaped by direct clinical experience to decisions about how LHS's services are structured and delivered.\nDr. Yabets approaches leadership as an ongoing process of learning and collaboration rather than a fixed set of answers. He values practical, patient-centered solutions and works closely with colleagues and partner organizations to strengthen how care is coordinated, particularly in situations where logistics, timing, and communication can be as critical as clinical treatment itself. Rather than positioning himself as having all the answers, he focuses on building relationships and systems that make coordinated care more dependable for the people who rely on it.\nHis work reflects LHS's broader purpose: connecting clinical care with the coordination and logistics needed to support patients safely, wherever they are." 
  },
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
  { title: "Specialists", delay: "0.4s", countup: 1300, span: "+" },
  { title: "Medical Repatriation", delay: "0.6s", countup: 400, span: "+" },
  { title: "JCI Accredited Hospitals", delay: "0.8s", countup: 50, span: "+" },
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
  {
    columnstand: "m-r25",
    delay: "0.2s",
    title: "Mission",
    svg: SVGICONS.mission,
    desc: "Lighthouse Healthcare Solutions exists to bridge the distance between patients and the care they need, coordinating air ambulance, medical escort, medical travel, and assistance services so that geography never determines the quality or timeliness of a patient's care.",
  },
  {
    columnstand: "m-l25",
    delay: "0.4s",
    title: "Vision",
    svg: SVGICONS.vision,
    desc: "To build the most trusted medical coordination network between Africa and the world, setting the benchmark for safety, ethics, and reliability in patient mobility.",
  },
  {
    columnstand: "m-r25",
    delay: "0.6s",
    title: "Values",
    svg: SVGICONS.values,
    desc: "Safety, dignity, transparency, and clinical excellence guide every coordination decision we make for patients and families.",
  },
];

export const mapdata = [
  { id: 1, delay: "0.2s", icon: <i className="feather icon-map-pin" />, title: "Address", para: <p>Minna bldg, wello sefer, Addis Ababa, Ethiopia</p> },
  { id: 2, delay: "0.4s", icon: <i className="feather icon-phone" />, title: "Call Us", para: <p><Link href="tel:+251943104334">+251943104334</Link></p> },
  { id: 3, delay: "0.6s", icon: <i className="feather icon-mail" />, title: "Send us a Mail", para: <p><Link href="mailto:info@lighthouse.healthcare">info@lighthouse.healthcare</Link></p> },
  { id: 4, delay: "0.8s", icon: <i className="feather icon-clock" />, title: "Opening Time", para: <p>Mon -Sat: 7:00 - 17:00</p> },
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
  { 
    image: IMAGES.testimonial1, 
    name: "Samrawit T.", 
    message: `“LHS coordinated everything for my father's emergency transfer to Dubai. From hospital to air ambulance, their team was fast, caring, and professional. We’re forever grateful!”` 
  },
  { 
    image: IMAGES.testimonial2, 
    name: "Abdu M.", 
    message: `“LHS helped me get a successful kidney transplant in India. They guided me through every step, and I’m now recovering well. Thank you, LHS!”` 
  },
  { 
    image: IMAGES.testimonial4, 
    name: "Dr. Mekdes A.", 
    message: `“LHS made international transfer seamless for my patient. Their updates, coordination, and follow-up were outstanding. I refer with full confidence.”` 
  },
  { 
    image: IMAGES.testimonial1, 
    name: "Yared & Tizibit", 
    message: `“We can’t thank you enough for the support we received on this journey. I was given a second chance at life through a kidney donation from my brother, and words will never be enough to express our gratitude to Dr. Yonathan and the Lighthouse Healthcare Solutions team. From helping us secure board letters, guiding us through hospital options, and staying with us in India throughout the treatment, handling every detail so we could focus only on healing. Even now, after returning home safely, the team continues to check in on us.”` 
  },
  { 
    image: IMAGES.testimonial2, 
    name: "Prof. Alemu G.", 
    message: `“I highly recommend this company for medical escort services. They were the ones who helped my child travel safely to Bangkok on Ethiopian Airlines with continuous medical support during the flight. They arranged everything — from securing a stretcher with the airline, to organizing tarmac ambulances at both departure and arrival, and bringing advanced medical equipment onboard. Their professionalism and commitment gave us peace of mind throughout the journey.”` 
  }
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
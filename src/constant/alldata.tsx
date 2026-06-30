import Link from "next/link";
import { IMAGES, SVGICONS } from "./theme";
import Image, { StaticImageData } from "next/image";

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
        Book Now
        <i className="feather icon-arrow-right" />
      </span>
    ),
  },
  { image: IMAGES.svgicon4, title: "Supports", paragraph: "24x7 Supports" },
  // { image: IMAGES.svgicon5, title: 'Payment', paragraph: <span>Pay Online <i className="feather icon-arrow-right" /></span>, },
  // { image: IMAGES.svgicon6, title: 'My Cart', paragraph: '2 Items', },
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
  {
    title: "Home",
    to: "/",
  },
  {
    title: "About Us",
    to: "about-us",
    // content: [
    //   { title: "About Us", to: "/about-us" },
    //   { title: "Appointment", to: "/appointment" },
    //   { title: "Pricing Table", to: "/pricing-table" },
    //   { title: "Patient Info", to: "/patient-info" },
    //   { title: "Testimonial", to: "/testimonial" },
    //   { title: "Faqs", to: "/faqs" },
    //   { title: "Error 404", to: "/error-404" },
    //   { title: "Coming Soon", to: "/coming-soon" },
    //   { title: "Under construction", to: "/under-construction" },
    // ],
  },
  {
    title: "Services",
    to: "services",
    // content: [
    //   { title: "Team", to: "/team" },
    //   { title: "Team Detail", to: "/team-detail" },
    // ],
  },
  {
    title: "Testimonials",
    to: "testimonial",
  },
  {
    title: "Gallery",
    to: "gallery",
  },
  {
    title: "Blogs",
    to: "blogs",
  },
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
  //   {
  //     title: "Our Stores",
  //     span1: "New York",
  //     span2: "London SF",
  //     span3: "Edinburgh",
  //     span4: "Los Angeles",
  //     span5: "Las Vegas",
  //     link1: "#",
  //     link2: "#",
  //     link3: "#",
  //     link4: "#",
  //     link5: "#",
  //     delay: "0.8s",
  //   },
  {
    title: "Quick Links",
    span1: "About Us",
    span2: "Our Services",
    span3: "Our Team",
    span4: "Appointments",
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
    treat: "Optimal Treatment",
    delay: "0.2s",
    title: "Yeshitela Admas",
    position: "Patient",
    image: IMAGES.testimonial1,
  },
  {
    treat: "Best Treatment",
    delay: "0.4s",
    title: "Danial Frankie",
    position: "Patient",
    image: IMAGES.testimonial2,
  },
  {
    treat: "Recommended Care",
    delay: "0.6s",
    title: "Rihana Roy",
    position: "Patient",
    image: IMAGES.testimonial4,
  },
  {
    treat: "First-Class Treatment",
    delay: "0.8s",
    title: "Kenneth Fong",
    position: "Patient",
    image: IMAGES.testimonial5,
  },
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

// bloggrid
export const blogdata: BlogItem[] = [
  {
    image: IMAGES.blogoverlaylarge1,
    dealy: "0.1s",
    title: "The Art of Managing Business and Patient Care.",
  },
  {
    image: IMAGES.blogoverlaylarge2,
    dealy: "0.2s",
    title: "Successful Transitional Rehab: More Than Just Exercise",
  },
  {
    image: IMAGES.blogoverlaylarge3,
    dealy: "0.3s",
    title: "What is Respite Care and Why is it Important?",
  },
  {
    image: IMAGES.blogoverlaylarge4,
    dealy: "0.4s",
    title: "The Art of Managing Business and Patient Care",
  },
  {
    image: IMAGES.blogoverlaylarge5,
    dealy: "0.5s",
    title: "Three Years Post Injury: Persistence and Progress",
  },
  {
    image: IMAGES.blogoverlaylarge6,
    dealy: "0.6s",
    title: "How Transitional Rehabilitation Aids in Stroke Recovery",
  },
];
export const blogdata2 = [
  {
    image: IMAGES.bloggrid1,
    dealy: "0.1s",
    title: "The Art of Managing Business and Patient Care.",
  },
  {
    image: IMAGES.bloggrid2,
    dealy: "0.2s",
    title: "Successful Transitional Rehab: More Than Just Exercise",
  },
  {
    image: IMAGES.bloggrid3,
    dealy: "0.3s",
    title: "What is Respite Care and Why is it Important?",
  },
  {
    image: IMAGES.bloggrid4,
    dealy: "0.4s",
    title: "The Art of Managing Business and Patient Care",
  },
  {
    image: IMAGES.bloggrid5,
    dealy: "0.5s",
    title: "Three Years Post Injury: Persistence and Progress",
  },
  {
    image: IMAGES.bloggrid6,
    dealy: "0.6s",
    title: "How Transitional Rehabilitation Aids in Stroke Recovery",
  },
];
// servicedetails
export const servicedetails = [
  { columnstand: "active", title: "Consultation", link: "/service-detail/consultation" },
  { title: "Medical Escort", link: "/service-detail/medical-escort" },
  { title: "Travel Arrangement", link: "/service-detail/travel-arrangement" },
  { title: "Treatment Coordination", link: "/service-detail/treatment-coordination" },
  { title: "Post-Treatment Support", link: "/service-detail/post-treatment-support" },
];

// teamdetail
export const empolydata = [
  {
    id: 1,
    delay: "0.2s",
    image: IMAGES.team2,
    title: "Dr. Yonathan Gary",
    position: "Managing Director",
    linkedin:"http://linkedin.com/in/dr-yonathan-gary"
  },
  {
    id: 2,
    delay: "0.4s",
    image: IMAGES.team1,
    title: "Dr. Yabets Taye",
    position: "Deputy Managing Director",
    linkedin:"https://www.linkedin.com/in/yabets-t-bifitu-md-97a59387"
    },
  // {
  //   id: 3,
  //   delay: "0.6s",
  //   image: IMAGES.team3,
  //   title: "Rihana Roy",
  //   position: "Gynecology",
  // },
  // {
  //   id: 5,
  //   delay: "1.0s",
  //   image: IMAGES.team1,
  //   title: "Santiago Rivas",
  //   position: "Cardiac Surgery",
  // },
  // {
  //   id: 6,
  //   delay: "1.2s",
  //   image: IMAGES.team2,
  //   title: "Danial Frankie",
  //   position: "Pediatric Clinic",
  // },
  // {
  //   id: 4,
  //   delay: "0.8s",
  //   image: IMAGES.team4,
  //   title: "Esteban Serrano",
  //   position: "Neurology",
  // },
  // {
  //   id: 7,
  //   delay: "1.4s",
  //   image: IMAGES.team3,
  //   title: "Roman Petrov",
  //   position: "Gynecology",
  // },
  // {
  //   id: 8,
  //   delay: "1.6s",
  //   image: IMAGES.team4,
  //   title: "Kenneth Fong",
  //   position: "Neurology",
  // },
];
// component
// alllocation
export const locationdata = [
  { delay: "0.2s", title: "Addis Ababa" },
];
// awards
export const awardswiperdata = [
  { image: IMAGES.partner1 },
  { image: IMAGES.partner2 },
  { image: IMAGES.partner3 },
  { image: IMAGES.partner4 },
  { image: IMAGES.partner5 },
  { image: IMAGES.partner6 },
  { image: IMAGES.partner7 },
  { image: IMAGES.partner8 },
  { image: IMAGES.partner9 },
  { image: IMAGES.partner10 },
  { image: IMAGES.partner11 },
];
export const awarddata = [
  { delay: "0.5s", title: "2024" },
  { delay: "0.6s", title: "2023" },
  { delay: "0.7s", title: "2022" },
  { delay: "0.8s", title: "2021" },
  { delay: "0.9s", title: "2020" },
  { delay: "1.0s", title: "2019" },
  { delay: "1.1s", title: "View All" },
];
// clientswiper1
export const clientswiperdata1 = [
  { image: IMAGES.logomiddle1, delay: "0.1s" },
  { image: IMAGES.logomiddle2, delay: "0.2s" },
  { image: IMAGES.logomiddle3, delay: "0.3s" },
  { image: IMAGES.logomiddle4, delay: "0.4s" },
  { image: IMAGES.logomiddle1, delay: "0.5s" },
  { image: IMAGES.logomiddle2, delay: "0.6s" },
  { image: IMAGES.logomiddle3, delay: "0.7s" },
  { image: IMAGES.logomiddle4, delay: "0.8s" },
];
// clientswiper2
export const clientswiperdata2 = [
  { image: IMAGES.logosmall1, delay: "0.1s" },
  { image: IMAGES.logosmall2, delay: "0.2s" },
  { image: IMAGES.logosmall3, delay: "0.3s" },
  { image: IMAGES.logosmall4, delay: "0.4s" },
  { image: IMAGES.logosmall5, delay: "0.5s" },
  { image: IMAGES.logosmall6, delay: "0.6s" },
  { image: IMAGES.logosmall1, delay: "0.7s" },
  { image: IMAGES.logosmall2, delay: "0.8s" },
  { image: IMAGES.logosmall3, delay: "0.9s" },
  { image: IMAGES.logosmall4, delay: "1.0s" },
  { image: IMAGES.logosmall5, delay: "1.1s" },
  { image: IMAGES.logosmall6, delay: "1.2s" },
];
// counter
export const countupdata = [
  { title: "Specialists", delay: "0.4s", countup: 200, span: "+" },
  { title: "Happy Patients", delay: "0.6s", countup: 45, span: "K" },
  { title: "Winning Awards", delay: "0.8s", countup: 150, span: "+" },
];
// frequently
export const accordiondata = [
  {
    delay: "0.5s",
    key: "0",
    title: "How much does treatment abroad cost?",
    answer:
      "Costs vary by procedure and destination. As a general guide: Turkey and India are the most affordable, Thailand is mid-range. Contact us for a free personalized cost estimate for your specific condition.",
  },
  {
    delay: "0.6s",
    key: "1",
    title: "Why should I use LHS instead of contacting the hospital directly?",
    answer:
      "Hospitals abroad don’t speak Amharic, don’t understand the Ethiopian healthcare system, and won’t accompany you on your journey. LHS handles everything — consultation, visa, flights, hospital appointments, translation, and a doctor who travels with you — so you never feel alone or confused.",
  },
  {
    delay: "0.7s",
    key: "2",
    title: "Which countries do you send patients to?",
    answer:
      "We primarily work with hospitals in Turkey, Thailand, and India. Each destination is chosen for quality, affordability, and accessibility from Addis Ababa.",
  },
  {
    delay: "0.8s",
    key: "3",
    title: "Can you help with medical insurance claims?",
    answer:
      "Yes, we can assist with documentation and coordination for patients who have international health insurance coverage.",
  },
  {
    delay: "0.9s",
    key: "4",
    title: "Do I pay LHS or the hospital directly?",
    answer:
      "Hospital fees are paid directly to the hospital. LHS charges separately for its facilitation and escort services. We provide a full cost breakdown before you travel.",
  },
];
// howitwork
export const howitworkdata = [
  {
    delay: "0.2s",
    icon: <i className="feather icon-clock" />,
    title: "Request Assistance",
  },
  {
    delay: "0.4s",
    icon: <i className="flaticon-list" />,
    title: "Clinical Assessment",
  },
  {
    delay: "0.6s",
    icon: <i className="flaticon-stethoscope" />,
    title: "Transport Coordination",
  },
  {
    delay: "0.8s",
    icon: <i className="flaticon-hand-holding-usd" />,
    title: "Safe Transfer & Support",
  },
];
// inspirational
export const inspirationaldata = [
  {
    columnstand: "m-r25",
    delay: "0.2s",
    title: "Mission",
    svg: SVGICONS.mission,
  },
  {
    columnstand: "m-l25",
    delay: "0.4s",
    title: "Vision",
    svg: SVGICONS.vision,
  },
  {
    columnstand: "m-r25",
    delay: "0.6s",
    title: "Values",
    svg: SVGICONS.values,
  },
];
// mapwraper
export const mapdata = [
  {
    id: 1,
    delay: "0.2s",
    icon: <i className="feather icon-map-pin" />,
    title: "Address",
    para: <p>234 Oak Drive, Villagetown, USA</p>,
  },
  {
    id: 2,
    delay: "0.4s",
    icon: <i className="feather icon-phone" />,
    title: "Call Us",
    para: (
      <p>
        <Link href="tel:+251943104334">+251943104334</Link>
      </p>
    ),
  },
  {
    id: 3,
    delay: "0.6s",
    icon: <i className="feather icon-mail" />,
    title: "Send us a Mail",
    para: (
      <p>
        <Link href="mailto:info@lhsethiopia.com">info@lhsethiopia.com</Link>
      </p>
    ),
  },
  {
    id: 4,
    delay: "0.8s",
    icon: <i className="feather icon-clock" />,
    title: "Opening Time",
    para: (
      <p>
        Mon-Thu: 8:00am-5:00pm <br /> Fri: 8:00am-1:00pm
      </p>
    ),
  },
];
// meetdr
export const meetdrdata1 = [
  { title: "Radiant Skin Dermatology" },
  { title: "Laser Resurfacing" },
  { title: "Flawless Dermatology" },
  { title: "Refined Skin Dermatology" },
  { title: "Luminous Dermatology" },
  { title: "Anti Aging" },
];
export const meetdrdata2 = [{ image: IMAGES.logo1 }, { image: IMAGES.logo2 }];
// pricing
export const pricingdata1 = [
  { title: "Cardiovascular Services" },
  { title: "Weight Management" },
  { title: "Dental Services" },
  { title: "Women's Health" },
  { title: "Emergency Medicine" },
  { title: "Family Medicine" },
  { title: "24/7 customer support" },
  { title: "Video Call Support" },
];
export const pricingdata2 = [
  {
    delay: "0.4s",
    title: (
      <h2 className="pricingtable-bx">
        Free<small>/ Lifetime</small>
      </h2>
    ),
    feature: (
      <ul className="pricingtable-features">
        <li>
          <Image src={IMAGES.Check} alt="" />
        </li>
        <li>
          <Image src={IMAGES.Check} alt="" />
        </li>
        <li>
          <Image src={IMAGES.Check} alt="" />
        </li>
        <li className="disable">
          <Image src={IMAGES.Check} alt="" />
        </li>
        <li className="disable">
          <Image src={IMAGES.Check} alt="" />
        </li>
        <li className="disable">
          <Image src={IMAGES.Check} alt="" />
        </li>
        <li className="disable">
          <Image src={IMAGES.Check} alt="" />
        </li>
        <li className="disable">
          <Image src={IMAGES.Check} alt="" />
        </li>
      </ul>
    ),
  },
  {
    delay: "0.6s",
    coloumnstand: "active",
    title: (
      <h2 className="pricingtable-bx">
        $25<small>/ Month</small>
      </h2>
    ),
    feature: (
      <ul className="pricingtable-features">
        <li>
          <Image src={IMAGES.Check} alt="" />
        </li>
        <li>
          <Image src={IMAGES.Check} alt="" />
        </li>
        <li>
          <Image src={IMAGES.Check} alt="" />
        </li>
        <li>
          <Image src={IMAGES.Check} alt="" />
        </li>
        <li>
          <Image src={IMAGES.Check} alt="" />
        </li>
        <li className="disable">
          <Image src={IMAGES.Check} alt="" />
        </li>
        <li className="disable">
          <Image src={IMAGES.Check} alt="" />
        </li>
        <li className="disable">
          <Image src={IMAGES.Check} alt="" />
        </li>
      </ul>
    ),
  },
  {
    delay: "0.8s",
    title: (
      <h2 className="pricingtable-bx">
        $40<small>/ Month</small>
      </h2>
    ),
    feature: (
      <ul className="pricingtable-features">
        <li>
          <Image src={IMAGES.Check} alt="" />
        </li>
        <li>
          <Image src={IMAGES.Check} alt="" />
        </li>
        <li>
          <Image src={IMAGES.Check} alt="" />
        </li>
        <li>
          <Image src={IMAGES.Check} alt="" />
        </li>
        <li>
          <Image src={IMAGES.Check} alt="" />
        </li>
        <li>
          <Image src={IMAGES.Check} alt="" />
        </li>
        <li>
          <Image src={IMAGES.Check} alt="" />
        </li>
        <li>
          <Image src={IMAGES.Check} alt="" />
        </li>
      </ul>
    ),
  },
];
// raelpatient
export const testiswipeerdata = [
  {
    image: IMAGES.testimonial1,
    name: "Yeshitela Admas",
    message: `“Lighthouse Healthcare Solutions delivered exceptional care with professionalism and compassion. Their team ensured a smooth and safe process from start to finish, and we felt fully supported throughout.”`,
  },
  {
    image: IMAGES.testimonial1,
    name: "Yeshitela Admas",
    message: `“Lighthouse Healthcare Solutions delivered exceptional care with professionalism and compassion. Their team ensured a smooth and safe process from start to finish, and we felt fully supported throughout.”`,
  },
  {
    image: IMAGES.testimonial1,
    name: "Yeshitela Admas",
    message: `“Lighthouse Healthcare Solutions delivered exceptional care with professionalism and compassion. Their team ensured a smooth and safe process from start to finish, and we felt fully supported throughout.”`,
  },
];
// servicebox
export const serviceboxdata = [
  {
    id: 1,
    delay: "0.1s",
    slug: "consultation",
    title: "Consultation",
    image: IMAGES.about3,
    svg1: SVGICONS.iconcell1,
    svg2: SVGICONS.iconbg1,
    desc: "Personalized health assessments and recommendations for medical facilities",
    fullDesc: "At Lighthouse Healthcare Solutions, we begin every patient journey with a thorough consultation and medical assessment. Our clinician-led team reviews your medical history, current condition, and treatment goals to recommend the most suitable healthcare destination — whether Turkey, Thailand, or India.",
    steps: ["Medical History Review", "Specialist Recommendation", "Cost Estimation", "Destination Selection"],
  },
  {
    id: 2,
    delay: "0.2s",
    slug: "medical-escort",
    title: "Medical Escort",
    image: IMAGES.testimonial2,
    svg1: SVGICONS.iconcell2,
    svg2: SVGICONS.iconbg2,
    desc: "Assistance with flights, visas, and insurance.",
    fullDesc: "Our clinician-led team accompanies you throughout your entire medical journey abroad. From departure to return, a qualified doctor travels with you ensuring your safety, comfort, and continuity of care at every step.",
    steps: ["Flight Booking", "Visa Assistance", "Airport Transfer", "Hospital Accompaniment"],
  },
  {
    id: 3,
    delay: "0.3s",
    slug: "travel-arrangement",
    title: "Travel Arrangement",
    image: IMAGES.about4,
    svg1: SVGICONS.iconcell3,
    svg2: SVGICONS.iconbg3,
    desc: "Comfortable lodging options near your treatment center.",
    fullDesc: "We handle all your travel logistics so you can focus entirely on your health. From booking flights and accommodation to arranging local transportation near your treatment center, LHS ensures a smooth and stress-free experience.",
    steps: ["Flight Booking", "Hotel Accommodation", "Local Transportation", "Post-Travel Follow-Up"],
  },
  {
    id: 4,
    delay: "0.4s",
    slug: "treatment-coordination",
    title: "Treatment Coordination",
    image: IMAGES.bg1,
    svg1: SVGICONS.iconcell4,
    svg2: SVGICONS.iconbg4,
    desc: "Scheduling appointments and ensuring continuous communication with healthcare providers.",
    fullDesc: "We coordinate directly with hospitals and specialists abroad to schedule your appointments, share medical records, and ensure seamless communication between you and your healthcare providers throughout your treatment.",
    steps: ["Hospital Selection", "Appointment Scheduling", "Medical Records Transfer", "Doctor Communication"],
  },
  {
    id: 5,
    delay: "0.5s",
    slug: "post-treatment-support",
    title: "Post-Treatment Support",
    image: IMAGES.bg2,
    svg1: SVGICONS.iconcell5,
    svg2: SVGICONS.iconbg5,
    desc: "Follow-up care and access to rehabilitation services.",
    fullDesc: "Our support does not end when you return home. LHS provides continuous post-treatment follow-up, connects you with rehabilitation services, and ensures your recovery is on track with regular check-ins from our medical team.",
    steps: ["Recovery Monitoring", "Rehabilitation Access", "Medication Guidance", "Regular Check-ins"],
  },
]

// sidebar
export const tagdata = [
  { title: "Acupressure", num: "(10)" },
  { title: "Allgemein", num: "(5)" },
  { title: "Blood", num: "(17)" },
  { title: "Food", num: "(13)" },
  { title: "Health", num: "(06)" },
  { title: "Mental Health", num: "(17)" },
  { title: "Therapy", num: "(13)" },
  { title: "Walking", num: "(06)" },
];
export const sidebarpostdata = [
  {
    date: "10 June 2025",
    image: IMAGES.blogsmall1,
    title: "The Art of Managing Business and Patient Care",
  },
  {
    date: "13 June 2025",
    image: IMAGES.blogsmall2,
    title: "The New Face of Care Blending Empathy with Expertise",
  },
  {
    date: "17 June 2025",
    image: IMAGES.blogsmall3,
    title: "Here Care Expertise Elevating the Patient Experience",
  },
];
// whychoose
export const whychoosedata = [
  {
    delay: "0.4s",
    title: "Trusted Medical Professionals",
    desc: "Delivering compassionate, ethical, and high-quality service.",
  },
  {
    delay: "0.6s",
    title: "Personalized Care",
    desc: "Tailored healthcare solutions for every patient's needs.",
  },
  {
    delay: "0.8s",
    title: "Safe Medical Transport",
    desc: "Reliable patient transfers with safety as our top priority.",
  },
  {
    delay: "1.0s",
    title: "Clinician-Led Expertise",
    desc: "Led by experienced doctors and healthcare professionals.",
  },
];
// worldclass
export const worldclasslistdata = [
  { title: "Clinician-Led Expertise" },
  { title: "Medical Travel Specialists" },
  { title: "Emergency Transport Services" },
  { title: "Trusted Healthcare Network" },
  { title: "Not Medical Brokers" },
  { title: "Patient-Centered Approach" },
  { title: "Critical Care Experience" },
  { title: "Professional & Ethical Service" },
  // { title: 'Multidisciplinary Team', },
  // { title: 'Health Information Technology', },
];

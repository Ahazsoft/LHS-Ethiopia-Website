import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/constant/theme";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import PageBanner from "@/component/PageBanner";
import { servicedetails, serviceDetailData } from "@/constant/alldata";
import AccordionBlog from "./_components/AccordionBlog";

export default function ServiceDetailDefault() {
  const service = serviceDetailData["air-ambulance-coordination"];

  const renderParagraphs = (text: string) =>
    text.split("\n").map((line, i) => <p key={i}>{line.trim()}</p>);

  return (
    <>
      <Header />
      <main className="page-content">
        <PageBanner title="Service Detail" bnrimage={IMAGES.bnr2.src} />

        <section className="content-inner service-single">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 single-inner order-lg-1">
                {/* Hero Image */}
                <div
                  className="single-media dz-media single-media height-sm radius-lg wow fadeInUp"
                  data-wow-delay="0.1s"
                  data-wow-duration="0.7s"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    className="object-fit-cover"
                  />
                </div>

                {/* Title & Overview */}
                <div
                  className="content-item wow fadeInUp"
                  data-wow-delay="0.2s"
                  data-wow-duration="0.7s"
                >
                  <h2>{service.title}</h2>
                  {renderParagraphs(service.overview)}
                </div>

                {/* 1. When air ambulance support is the right option */}
                <div
                  className="content-item wow fadeInUp"
                  data-wow-delay="0.3s"
                  data-wow-duration="0.7s"
                >
                  <h3>When air ambulance support is the right option</h3>
                  <p>
                    Some patients are too unstable, too dependent on equipment,
                    or too medically complex to travel on a scheduled commercial
                    flight, even with an escort. Air ambulance coordination is
                    built for exactly these cases: critical transfers, complex
                    repatriations, and situations where continuous medical care
                    is required from the moment the patient leaves one facility
                    until they're handed over at the next.
                  </p>
                </div>

                {/* 2. How air ambulance coordination works */}
                <div
                  className="content-item wow fadeInUp"
                  data-wow-delay="0.4s"
                  data-wow-duration="0.7s"
                >
                  <h3>How air ambulance coordination works</h3>
                  <p>
                    Air ambulance coordination is built around clinical judgment
                    first, logistics second.
                  </p>
                  <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
                    <li className="mb-3" style={{ position: 'relative', paddingLeft: '25px' }}>
                      <span style={{ position: 'absolute', left: 0, top: 0, color: '#3b1b51', fontWeight: 'bold', fontSize: '18px', lineHeight: 1.4 }}>•</span>
                      <span style={{ fontWeight: 700, color: '#cfb755' }}>Clinical assessment.</span>
                      <span> Our physicians assess the patient's condition, stability, and equipment needs to confirm that air ambulance transport, rather than a lower level of care, is the appropriate option.</span>
                    </li>
                    <li className="mb-3" style={{ position: 'relative', paddingLeft: '25px' }}>
                      <span style={{ position: 'absolute', left: 0, top: 0, color: '#3b1b51', fontWeight: 'bold', fontSize: '18px', lineHeight: 1.4 }}>•</span>
                      <span style={{ fontWeight: 700, color: '#cfb755' }}>Flight coordination.</span>
                      <span> We arrange the aircraft, crew, and ground transfers through our partner network, East African Aviation, AMREF Flying Doctors, and BlueDot (Dubai).</span>
                    </li>
                    <li className="mb-3" style={{ position: 'relative', paddingLeft: '25px' }}>
                      <span style={{ position: 'absolute', left: 0, top: 0, color: '#3b1b51', fontWeight: 'bold', fontSize: '18px', lineHeight: 1.4 }}>•</span>
                      <span style={{ fontWeight: 700, color: '#cfb755' }}>Physician-led transfer.</span>
                      <span> On East African Aviation flights, our own doctors serve as lead physician onboard, overseeing the patient's care from departure through handover at the receiving facility.</span>
                    </li>
                  </ul>
                </div>

                {/* 3. Who air ambulance coordination is for */}
                <div
                  className="content-item wow fadeInUp"
                  data-wow-delay="0.5s"
                  data-wow-duration="0.7s"
                >
                  <h3>Who air ambulance coordination is for</h3>
                  <ul className="list-check text-secondary">
                    <li>Critically ill or unstable patients requiring continuous monitoring</li>
                    <li>Patients dependent on ventilation, advanced life support, or specialized equipment in transit</li>
                    <li>Emergency medical repatriations</li>
                    <li>Cases where commercial travel, even with escort support, isn't medically appropriate</li>
                  </ul>
                </div>

                {/* 4. Choosing the right level of support */}
                <div
                  className="content-item wow fadeInUp"
                  data-wow-delay="0.6s"
                  data-wow-duration="0.7s"
                >
                  <h3>Choosing the right level of support</h3>
                  <p>
                    Air ambulance is the right choice when a patient's condition
                    doesn't allow for commercial travel. If a patient is stable
                    enough to sit upright and fly on a scheduled flight with
                    supervision, commercial medical escort may be the safer and
                    more cost effective option. Our clinical team can assess the
                    case and recommend the appropriate level of care.
                  </p>
                </div>

                {/* FAQs */}
                {service.faqs && (
                  <div
                    className="content-item wow fadeInUp"
                    data-wow-delay="0.7s"
                    data-wow-duration="0.7s"
                  >
                    <h3>Frequently Asked Questions</h3>
                    <AccordionBlog faqs={service.faqs} />
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="col-lg-4 m-b30">
                <aside className="side-bar sticky-top left">
                  <div
                    className="widget service_menu_nav bg-secondary wow fadeInUp"
                    data-wow-delay="0.2s"
                    data-wow-duration="0.7s"
                  >
                    <div className="widget-title">
                      <h4 className="title">All Services</h4>
                    </div>
                    <ul>
                      {servicedetails.map((item, i) => {
                        const itemSlug = item.link.split("/").pop();
                        const isActive = itemSlug === "air-ambulance-coordination";
                        return (
                          <li key={i} className={isActive ? "active" : ""}>
                            <Link href={item.link} scroll={false}>
                              {item.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <div
                    className="widget_contact wow fadeInUp"
                    style={{ backgroundImage: `url(${IMAGES.bg3png.src})` }}
                    data-wow-delay="0.4s"
                    data-wow-duration="0.7s"
                  >
                    <div className="widget-content">
                      <Image src={IMAGES.question} width="80" alt="" />
                      <h4 className="title">Do you need any help?</h4>
                      <div className="phone-number">
                        <Link href="tel:+251943104334">+251943104334</Link>
                      </div>
                      <div className="email">
                        <Link href="mailto:info@support.com">info@support.com</Link>
                      </div>
                      <div className="link-btn">
                        <Link
                          href="#"
                          scroll={false}
                          className="btn btn-lg btn-icon btn-white hover-secondary btn-shadow"
                        >
                          Contact Us{" "}
                          <span className="right-icon">
                            <i className="feather icon-arrow-right" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
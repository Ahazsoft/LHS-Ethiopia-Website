// src/app/(services)/service-detail/[slug]/page.tsx
import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/constant/theme";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import PageBanner from "@/component/PageBanner";
import { servicedetails, serviceDetailData } from "@/constant/alldata";
import AccordionBlog from "../_components/AccordionBlog";
import { notFound } from "next/navigation";

export default async function ServiceDetailSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = serviceDetailData[slug];

  if (!service) {
    notFound();
  }

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

                {/* ======== HARDCODED SECTIONS PER SERVICE ======== */}
                {/* Air Ambulance Coordination */}
{slug === "air-ambulance-coordination" && (
  <>
    <div className="content-item wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="0.7s">
      <h3>When air ambulance support is the right option</h3>
      <p>
        Some patients are too unstable, too dependent on equipment, or too medically complex to travel on a scheduled commercial flight, even with an escort. Air ambulance coordination is built for exactly these cases: critical transfers, complex repatriations, and situations where continuous medical care is required from the moment the patient leaves one facility until they're handed over at the next.
      </p>
    </div>

    <div className="content-item wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.7s">
      <h3>How air ambulance coordination works</h3>
      <ul className="list-check text-secondary">
        <li>
          <strong>Clinical assessment.</strong> Our physicians assess the patient's condition, stability, and equipment needs to confirm that air ambulance transport, rather than a lower level of care, is the appropriate option.
        </li>
        <li>
          <strong>Flight coordination.</strong> We arrange the aircraft, crew, and ground transfers through our partner network, East African Aviation, AMREF Flying Doctors, and BlueDot (Dubai).
        </li>
        <li>
          <strong>Physician-led transfer.</strong> On East African Aviation flights, our own doctors serve as lead physician onboard, overseeing the patient's care from departure through handover at the receiving facility.
        </li>
      </ul>
    </div>

    <div className="content-item wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="0.7s">
      <h3>Who air ambulance coordination is for</h3>
      <ul className="list-check text-secondary">
        <li>Critically ill or unstable patients requiring continuous monitoring</li>
        <li>Patients dependent on ventilation, advanced life support, or specialized equipment in transit</li>
        <li>Emergency medical repatriations</li>
        <li>Cases where commercial travel, even with escort support, isn't medically appropriate</li>
      </ul>
    </div>

    <div className="content-item wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.7s">
      <h3>Choosing the right level of support</h3>
      <p>
        Air ambulance is the right choice when a patient's condition doesn't allow for commercial travel. If a patient is stable enough to sit upright and fly on a scheduled flight with supervision, commercial medical escort may be the safer and more cost effective option. Our clinical team can assess the case and recommend the appropriate level of care.
      </p>
    </div>
  </>
)}

                {/* Commercial Medical Escort */}
                {slug === "commercial-medical-escort" && (
                  <>
                    <div className="content-item wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="0.7s">
                      <h3>When medical escort support is the right option</h3>
                      <p>
                        Many patients are fit to fly on commercial airlines but still need
                        medical support, supervision, or reassurance during the journey.
                        Medical escort services are designed for patients who can remain
                        seated throughout travel but shouldn't fly alone, whether due to
                        their medical condition, stage of recovery, age, or ongoing
                        treatment needs. This service allows safe travel on scheduled
                        flights, with a qualified LHS clinician accompanying the patient
                        from departure through arrival.
                      </p>
                    </div>

                    <div className="content-item wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.7s">
                      <h3>How medical escort support works</h3>
                      <ul className="list-check text-secondary">
                        <li>
                          <strong>Medical review.</strong> Before travel, our medical team
                          reviews the patient's condition to confirm suitability for
                          escort based travel, assessing stability, mobility, medication
                          requirements, and any in flight considerations.
                        </li>
                        <li>
                          <strong>Travel coordination.</strong> Once approved, we arrange
                          travel logistics, airline notifications where required, and any
                          medical equipment or medication needed during the flight.
                        </li>
                        <li>
                          <strong>Journey support.</strong> Patients are accompanied by
                          qualified LHS medical professionals, doctors or paramedics, who
                          provide monitoring, assistance, and reassurance from departure
                          to arrival.
                        </li>
                      </ul>
                    </div>

                    <div className="content-item wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="0.7s">
                      <h3>Who medical escort services are for</h3>
                      <ul className="list-check text-secondary">
                        <li>Patients recovering from surgery or illness</li>
                        <li>Elderly patients requiring supervision during travel</li>
                        <li>Patients travelling for ongoing treatment or follow up care</li>
                        <li>Individuals who shouldn't fly unaccompanied for medical reasons</li>
                      </ul>
                    </div>

                    <div className="content-item wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.7s">
                      <h3>Choosing the right level of support</h3>
                      <p>
                        Medical escort services are suitable when a patient is fit to sit
                        and travel but needs medical supervision. If a patient requires
                        continuous monitoring, specialized equipment, or stretcher
                        support, air ambulance coordination may be the more appropriate
                        option. Our clinical team can help assess and recommend the
                        safest choice.
                      </p>
                    </div>
                  </>
                )}

                {/* Medical Tourism */}
                {slug === "medical-tourism" && (
                  <>
                    <div className="content-item wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="0.7s">
                      <h3>When care isn't available at home</h3>
                      <p>
                        Sometimes the right specialist, the right treatment, or an
                        acceptable waiting time simply isn't available locally. When that
                        happens, going abroad for care shouldn't mean navigating an
                        unfamiliar health system alone, in a language you don't speak,
                        with no one to call if something changes. LHS coordinates the
                        full journey so patients can focus on getting well, not on
                        logistics.
                      </p>
                    </div>

                    <div className="content-item wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.7s">
                      <h3>How we support your medical journey</h3>
                      <ul className="list-check text-secondary">
                        <li>
                          <strong>Consultation.</strong> We review your case and connect
                          you with the right specialist and facility abroad.
                        </li>
                        <li>
                          <strong>Treatment Coordination.</strong> We liaise directly
                          with partner hospitals in Thailand, India, Turkey, and Dubai to
                          arrange appointments, documentation, and treatment plans.
                        </li>
                        <li>
                          <strong>Travel Arrangement.</strong> We coordinate visas,
                          flights, and accommodation around your treatment schedule.
                        </li>
                        <li>
                          <strong>Medical Escort, where needed.</strong> For patients who
                          need supervision en route, an LHS clinician can accompany you
                          throughout the trip.
                        </li>
                        <li>
                          <strong>Post Treatment Support.</strong> We stay engaged after
                          you return home, coordinating follow up care and continuity with
                          your local providers.
                        </li>
                      </ul>
                    </div>

                    <div className="content-item wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="0.7s">
                      <h3>Why patients choose LHS for care abroad</h3>
                      <ul className="list-check text-secondary">
                        <li>A vetted network of 70+ hospitals across 7 countries</li>
                        <li>Clinician-led coordination, not a purely administrative booking service</li>
                        <li>Support before, during, and after treatment, not just at the booking stage</li>
                        <li>Established relationships with hospitals in Thailand, India, Turkey, and Dubai</li>
                      </ul>
                    </div>

                    <div className="content-item wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.7s">
                      <p>
                        Medical Tourism is one of LHS's four core services, backed by the
                        same clinician-led approach behind our air ambulance, medical
                        assistance, and escort work.
                      </p>
                    </div>
                  </>
                )}

                {/* Medical Assistance */}
                {slug === "medical-assistance" && (
                  <>
                    <div className="content-item wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="0.7s">
                      <h3>Network Navigation & Appointment Logistics</h3>
                      <ul className="list-check text-secondary">
                        <li>
                          <strong>Vetted Provider Network.</strong> A carefully audited
                          network of leading hospitals, diagnostic centers, and specialist
                          clinicians across East Africa.
                        </li>
                        <li>
                          <strong>Doctor Matching.</strong> Patients are matched to
                          verified specialists based on clinical track record,
                          credentialing, and case complexity.
                        </li>
                        <li>
                          <strong>Booking & Admission Coordination.</strong> Fast tracked
                          scheduling for outpatient consultations, diagnostics, and
                          planned inpatient admissions, reducing administrative delay for
                          the client.
                        </li>
                      </ul>
                    </div>

                    <div className="content-item wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.7s">
                      <h3>Medical Case Management</h3>
                      <ul className="list-check text-secondary">
                        <li>
                          <strong>Clinical Auditing.</strong> Ongoing review of inpatient
                          charts by our medical officers to confirm clinical necessity,
                          monitor treatment progress, and prevent unnecessary delays or
                          over treatment.
                        </li>
                        <li>
                          <strong>Progress Reporting.</strong> Standardized, secure
                          updates provided directly to the insurer or employer, keeping
                          all stakeholders aligned on recovery timelines.
                        </li>
                        <li>
                          <strong>Discharge Planning & Repatriation.</strong> Coordinated
                          discharge protocols, including care transition summaries and
                          transport arrangements if a patient needs to return to their home
                          community.
                        </li>
                      </ul>
                    </div>

                    <div className="content-item wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="0.7s">
                      <h3>On Site Hospital Assistance & Patient Advocacy</h3>
                      <ul className="list-check text-secondary">
                        <li>
                          <strong>Field Case Managers.</strong> Dedicated coordinators
                          accompany patients during complex hospital visits or admissions,
                          acting as a clinical point of contact throughout.
                        </li>
                        <li>
                          <strong>Billing & Document Verification.</strong> Real time
                          review of medical records, lab requests, and interim billing to
                          ensure transparency before claims reach the insurer.
                        </li>
                        <li>
                          <strong>Language & Cultural Support.</strong> Bedside
                          communication support so patients and families fully understand
                          diagnoses, treatment risks, and consent requirements.
                        </li>
                      </ul>
                    </div>

                    <div className="content-item wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.7s">
                      <h3>Prescription & Medication Coordination</h3>
                      <ul className="list-check text-secondary">
                        <li>
                          <strong>Chronic Medication Management.</strong> Ongoing tracking
                          of recurring prescriptions for insured members and corporate
                          employees managing chronic conditions.
                        </li>
                        <li>
                          <strong>Prescription Verification.</strong> Refill requests are
                          confirmed directly with the treating physician to ensure safety
                          and compliance.
                        </li>
                        <li>
                          <strong>Delivery Logistics.</strong> Secure, temperature
                          controlled delivery of medication from certified pharmacies to
                          the patient's home or workplace.
                        </li>
                      </ul>
                    </div>
                  </>
                )}

                {/* Preferred Treatment Destinations (if present, e.g., Medical Tourism) */}
                {service.preferredDestinations && (
                  <div
                    className="content-item wow fadeInUp"
                    data-wow-delay="0.6s"
                    data-wow-duration="0.7s"
                  >
                    <h3>Preferred Treatment Destinations</h3>
                    <p>{service.preferredDestinations}</p>
                  </div>
                )}

                {/* FAQs (unchanged) */}
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

              {/* Sidebar (unchanged) */}
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
                        const isActive = slug === itemSlug;
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
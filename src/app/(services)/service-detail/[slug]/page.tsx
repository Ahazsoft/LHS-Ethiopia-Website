// src/app/(services)/service-detail/[slug]/page.tsx
import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/constant/theme";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import PageBanner from "@/component/PageBanner";
import { servicedetails, serviceDetailData } from "@/constant/alldata";
import { notFound } from "next/navigation";
import AccordionBlog from "../_components/AccordionBlog";

// Make the component async to handle the Promise-based params
export default async function ServiceDetailSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // await the promise
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
              {/* Main Content */}
              <div className="col-lg-8 single-inner order-lg-1">
                <div
                  className="single-media dz-media single-media height-sm radius-lg wow fadeInUp"
                  data-wow-delay="0.1s"
                  data-wow-duration="0.7s"
                >
                  <Image
                    src={IMAGES.bloggrid2}
                    alt={service.title}
                    className="object-fit-cover"
                  />
                </div>

                <div
                  className="content-item wow fadeInUp"
                  data-wow-delay="0.2s"
                  data-wow-duration="0.7s"
                >
                  <h2>{service.title}</h2>
                  {renderParagraphs(service.overview)}
                </div>

                {service.whoItsFor && (
                  <div
                    className="content-item wow fadeInUp"
                    data-wow-delay="0.3s"
                    data-wow-duration="0.7s"
                  >
                    <h3>Who It's For</h3>
                    {renderParagraphs(service.whoItsFor)}
                  </div>
                )}
{service.howItWorks && (
  <div
    className="content-item wow fadeInUp"
    data-wow-delay="0.4s"
    data-wow-duration="0.7s"
  >
    <h3>How It Works</h3>
    <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
      {service.howItWorks.map((step, idx) => {
        // split at the first period to get the bold lead phrase
        const firstDot = step.indexOf('.');
        const hasPhrase = firstDot !== -1;
        const phrase = hasPhrase ? step.slice(0, firstDot + 1) : step;
        const rest = hasPhrase ? step.slice(firstDot + 1).trim() : '';

        return (
          <li
            key={idx}
            className="mb-3"
            style={{ position: 'relative', paddingLeft: '25px' }}
          >
            {/* dark purple bullet */}
            <span
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                color: '#3b1b51',        // dark purple
                fontWeight: 'bold',
                fontSize: '18px',
                lineHeight: 1.4,
              }}
            >
              •
            </span>

            {/* bold golden lead phrase */}
            <span style={{ fontWeight: 700, color: '#cfb755' }}>
              {phrase}
            </span>

            {/* rest of the sentence */}
            {rest && <span> {rest}</span>}
          </li>
        );
      })}
    </ul>
  </div>
)}
                {service.preferredDestinations && (
                  <div
                    className="content-item wow fadeInUp"
                    data-wow-delay="0.5s"
                    data-wow-duration="0.7s"
                  >
                    <h3>Preferred Treatment Destinations</h3>
                    <p>{service.preferredDestinations}</p>
                  </div>
                )}

               {service.faqs && (
              <div
              className="content-item wow fadeInUp"
              data-wow-delay="0.6s"
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
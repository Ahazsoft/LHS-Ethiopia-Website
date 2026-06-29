import Link from "next/link";
import { IMAGES } from "@/constant/theme";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import PageBanner from "@/component/PageBanner";
import { serviceboxdata } from "@/constant/alldata";
import Image from "next/image";

async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = serviceboxdata.find((s) => s.slug === slug);

    if (!service) {
        return (
            <>
                <Header />
                <main className="page-content">
                    <PageBanner title="Service Not Found" bnrimage={IMAGES.bnr2.src} />
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            <main className="page-content">
                <PageBanner title={service.title} bnrimage={IMAGES.bnr2.src} />
                <section className="content-inner service-single">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 single-inner order-lg-1">
                                <div className="single-media dz-media single-media height-sm radius-lg wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="0.7s">
                                    <Image src={IMAGES.bloggrid2} alt="" className="object-fit-cover" />
                                </div>
                                <div className="content-item wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.7s">
                                    <h2>{service.title}</h2>
                                    <p>{service.fullDesc}</p>
                                </div>
                                <div className="content-item wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="0.7s">
                                    <h3>What We Do</h3>
                                    <ul className="list-check text-secondary grid-2 m-b30">
                                        {service.steps.map((step, i) => (
                                            <li key={i}>{step}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 m-b30">
                                <aside className="side-bar sticky-top left">
                                    <div className="widget service_menu_nav bg-secondary wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.7s">
                                        <div className="widget-title">
                                            <h4 className="title">All Services</h4>
                                        </div>
                                        <ul>
                                            {serviceboxdata.map((item, i) => (
                                                <li key={i} className={item.slug === slug ? "active" : ""}>
                                                    <Link href={`/service-detail/${item.slug}`}>{item.title}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="widget_contact wow fadeInUp"
                                        style={{ backgroundImage: `url(${IMAGES.bg3png.src})` }} data-wow-delay="0.4s" data-wow-duration="0.7s"
                                    >
                                        <div className="widget-content">
                                            <Image src={IMAGES.question} width={80} height={80} alt="" />
                                            <h4 className="title">Do you need any help?</h4>
                                            <div className="phone-number">
                                                <Link href="tel:+251943104334">+251943104334</Link>
                                            </div>
                                            <div className="email">
                                                <Link href="mailto:info@lhsethiopia.com">info@lhsethiopia.com</Link>
                                            </div>
                                            <div className="link-btn">
                                                <Link href="/contact-us" className="btn btn-lg btn-icon btn-white hover-secondary btn-shadow">
                                                    Contact Us <span className="right-icon"><i className="feather icon-arrow-right" /></span>
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
export default ServiceDetail;

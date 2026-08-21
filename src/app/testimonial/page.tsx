"use client"
import Link from "next/link";
import { IMAGES } from "@/constant/theme";
import PageBanner from "@/component/PageBanner";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import Partners from "@/component/Partners";
import { testidata } from "@/constant/alldata";

function Testimonial() {
    return (
        <>
            <Header />
            <main className="page-content">
                <PageBanner title="Testimonial" bnrimage={IMAGES.bnr2.src} />
                
                {/* Clean white background */}
                <section className="content-inner py-5 bg-white">
                    <div className="container">
                        {/* Section Header */}
                        <div className="row text-center mb-5">
                            <div className="col-lg-12">
                                <span className="fw-bold text-uppercase tracking-wider small d-block mb-2" style={{ color: "#d4af37" }}>
                                    Success Stories
                                </span>
                                <h2 className="display-6 fw-bold" style={{ color: "#2d1b3d" }}>Testimonials from Trusted Partner</h2>
                                <div className="mx-auto mt-2 rounded" style={{ width: "60px", height: "3px", backgroundColor: "#d4af37" }}></div>
                            </div>
                        </div>

                        {/* Testimonial Cards Grid - 2 boxes per row */}
                        <div className="row g-4 justify-content-center">
                            {testidata.map((item, i) => (
                                <div className="col-lg-6 wow fadeInUp" data-wow-delay={item.delay} data-wow-duration="0.7s" key={i}>
                                    {/* Removed the thick left border and applied equal light borders all around */}
                                    <div className="p-4 p-md-5 rounded-4 shadow-sm bg-white position-relative h-100 d-flex flex-column justify-content-between" style={{ border: "1px solid #f0f0f0" }}>
                                        
                                        {/* Message text */}
                                        <p className="text-secondary mb-4" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                                            &ldquo;{item.message}&rdquo;
                                        </p>

                                        {/* Author info & Category details at the bottom */}
                                        <div className="d-flex flex-wrap justify-content-between align-items-center pt-3 border-top mt-auto" style={{ borderColor: "#f0f0f0" }}>
                                            <div>
                                                <h4 className="mb-1 fw-bold" style={{ color: "#2d1b3d" }}>{item.title}</h4>
                                                <div className="d-flex align-items-center flex-wrap gap-2">
                                                    <span className="text-muted small">{item.position}</span>
                                                    {item.treat && (
                                                        <span className="small fw-semibold px-2 py-0.5 rounded" style={{ backgroundColor: "#f9f6ef", color: "#d4af37" }}>
                                                            {item.treat}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="mt-2 mt-sm-0" style={{ color: "#d4af37" }}>
                                                <i className="fa fa-star me-1" />
                                                <i className="fa fa-star me-1" />
                                                <i className="fa fa-star me-1" />
                                                <i className="fa fa-star me-1" />
                                                <i className="fa fa-star" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                
                <Partners />
            </main>
            <Footer />
        </>
    );
}

export default Testimonial;
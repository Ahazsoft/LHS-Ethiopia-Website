"use client"

// Force this page to be dynamically rendered at runtime, avoiding prerender errors
export const dynamic = 'force-dynamic';

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import Frequently from "@/component/Frequently";
import PageBanner from "@/component/PageBanner";
import { IMAGES } from "@/constant/theme";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import { empolydata } from "@/constant/alldata";
import Image from "next/image";

function TeamContent() {
    const [active, setActive] = useState(1);
    const searchParams = useSearchParams();
    const selectedId = searchParams.get("id");

    // If an ID is present in the URL, filter the data to show only that person
    const displayedData = selectedId 
        ? empolydata.filter((item) => item.id.toString() === selectedId)
        : empolydata;

    return (
        <>
            <Header />
            <main className="page-content">
                <PageBanner title="Team" bnrimage={IMAGES.bnr2.src} />
                <section className="content-inner">
                    <div className="container">
                        {/* Back to All Team button when viewing a single profile */}
                        {selectedId && (
                            <div className="mb-4">
                                <Link href="/team" className="btn btn-secondary btn-sm">
                                    <i className="feather icon-arrow-left m-r5" /> Back to All Team
                                </Link>
                            </div>
                        )}

                        <div className="row">
                            {displayedData.map((item, i) => (
                                <div 
                                    className={selectedId ? "col-12" : "col-xl-6 col-lg-6 col-sm-6 wow fadeInUp"} 
                                    data-wow-delay={item.delay} 
                                    data-wow-duration="0.8s" 
                                    key={i}
                                >
                                    {/* If single view, render a side-by-side layout container aligned to the top */}
                                    {selectedId ? (
                                        <div className="card border-0 shadow-sm p-4 mb-4 bg-white rounded">
                                            <div className="row align-items-start">
                                                {/* Left Side: Image and Button (Aligned to Top) */}
                                                <div className="col-lg-5 mb-4 mb-lg-0">
                                                    <div className="dz-media rounded overflow-hidden">
                                                        <Image src={item.image} alt={item.title} className="img-fluid w-100" />
                                                    </div>
                                                    <div className="mt-3 text-center">
                                                        <Link href="/appointment" className="btn btn-primary w-100">
                                                            <i className="feather icon-calendar m-r5" /> Request Assistance
                                                        </Link>
                                                    </div>
                                                </div>

                                                {/* Right Side: Bio and details */}
                                                <div className="col-lg-7">
                                                    <div className="dz-content">
                                                        <h2 className="dz-name mb-2 text-dark">{item.title}</h2>
                                                        <span 
                                                            className="dz-position font-weight-bold d-block mb-3 fs-5" 
                                                            style={{ color: "#301934" }}
                                                        >
                                                            {item.position}
                                                        </span>
                                                        
                                                        {item.bio && (
                                                            <p className="dz-team-bio text-muted" style={{ textAlign: "justify", lineHeight: "1.8" }}>
                                                                {item.bio}
                                                            </p>
                                                        )}

                                                        {/* LinkedIn link centered horizontally */}
                                                        <ul className="dz-social mt-4 d-flex justify-content-center gap-3 list-unstyled">
                                                            <li>
                                                                <Link href="https://www.linkedin.com/showcase/dexignzone" target="_blank">
                                                                    <i className="fa-brands fa-linkedin fs-4" />
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        /* Default grid card view when viewing all team members */
                                        <div className={active === item.id ? "dz-team style-1 active box-hover" : "dz-team style-1 box-hover"} 
                                            onMouseEnter={() => setActive(item.id)}
                                        >
                                            <div className="dz-media">
                                                <Image src={item.image} alt="/" />
                                                <Link href="/appointment" className="btn btn-primary">
                                                    <i className="feather icon-calendar m-r5" /> Request Assistance
                                                </Link>
                                            </div>
                                            <div className="dz-content">
                                                <div className="clearfix">
                                                    <h3 className="dz-name"><Link href={`/team?id=${item.id}`}>{item.title}</Link></h3>
                                                    <span className="dz-position">{item.position}</span>
                                                </div>
                                                
                                                <Link
                                                    href={`/team?id=${item.id}`}
                                                    className="btn btn-square btn-secondary"
                                                    title="View full bio"
                                                    aria-label="View full bio"
                                                >
                                                    <i className="feather icon-arrow-right" />
                                                </Link>
                                            </div>
                                            {/* LinkedIn link only for grid view cards as well */}
                                            <ul className="dz-social">
                                                <li>
                                                    <Link href="https://www.linkedin.com/showcase/dexignzone" target="_blank">
                                                        <i className="fa-brands fa-linkedin" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <Frequently />
            </main>
            <Footer />            
        </>
    );
}

export default function Team() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <TeamContent />
        </Suspense>
    );
}
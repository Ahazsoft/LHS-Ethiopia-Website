"use client"
import { useState } from "react";
import Link from "next/link";
import { empolydata } from "../constant/alldata";
import Image from "next/image";

function EmpolyBlog() {
    const [active, setActive] = useState(1);
    const [openId, setOpenId] = useState<number | null>(null);

    const toggleBio = (id: number) => {
        setOpenId((current) => (current === id ? null : id));
    };

    return (
        <>
            <div className="row items-center">
                {empolydata.slice(0, empolydata.length).map((data, i) => {
                    const isOpen = openId === data.id;
                    const isHovered = active === data.id;

                    return (
                        <div className="col-xl-6 col-sm-6 wow fadeInUp" data-wow-delay={data.delay} data-wow-duration="0.8s" key={i}>
                            <div 
                                className={`dz-team style-1 box-hover ${isHovered ? 'active' : ''}`} 
                                onMouseEnter={() => setActive(data.id)}
                            >
                                <div className="dz-media">
                                    <Image src={data.image} alt={data.title} />
                                    {/* View All / Request Assistance Button linked to team page with query parameter */}
                                    <Link href={`/team?id=${data.id}`} className="btn btn-primary">
                                        <i className="feather icon-calendar m-r5" /> View All
                                    </Link>
                                </div>
                                <div className="dz-content">
                                    <div className="clearfix">
                                        <h3 className="dz-name">
                                            <Link href={`/team?id=${data.id}`} className={isHovered ? "" : "text-secondary"}>
                                                {data.title}
                                            </Link>
                                        </h3>
                                        <span className={`dz-position ${isHovered ? "" : "text-secondary"}`} style={{ color: "#301934" }}>
                                            {data.position}
                                        </span>
                                    </div>
                                    
                                    {/* Toggle Button */}
                                    <button
                                        type="button"
                                        className={`btn btn-square btn-secondary${isOpen ? " is-open" : ""}`}
                                        title={isOpen ? "Show less" : "Show more"}
                                        aria-expanded={isOpen}
                                        aria-label={isOpen ? "Show less" : "Show more"}
                                        onClick={() => toggleBio(data.id)}
                                    >
                                        <i className={`feather ${isOpen ? "icon-chevron-up" : "icon-arrow-right"}`} />
                                    </button>

                                    {/* Expandable Bio */}
                                    {isOpen && data.bio && (
                                        <div className={`mt-3 pt-2 border-top ${isHovered ? "border-white/10" : "border-secondary/10"}`}>
                                            <p 
                                                className="text-sm m-b10"
                                                style={{ 
                                                    textAlign: "justify", 
                                                    textAlignLast: "left", 
                                                    textJustify: "inter-word",
                                                    color: isHovered ? "#ffffff" : "#301934" 
                                                }}
                                            >
                                                {data.bio.length > 90 ? data.bio.substring(0, 90) + "..." : data.bio}
                                            </p>
                                            
                                            {/* Centered Styled Read More Button matching reference */}
                                            <div className="text-center mt-3">
                                                <Link 
                                                    href={`/team?id=${data.id}`} 
                                                    className="d-inline-flex align-items-center justify-content-between p-1 rounded-pill text-decoration-none shadow-sm transition-all"
                                                    style={{ 
                                                        backgroundColor: "#301934", 
                                                        color: "#ffffff",
                                                        minWidth: "140px",
                                                        textDecoration: "none"
                                                    }}
                                                    onMouseOver={(e) => {
                                                        e.currentTarget.style.transform = "translateY(-2px)";
                                                    }}
                                                    onMouseOut={(e) => {
                                                        e.currentTarget.style.transform = "translateY(0)";
                                                    }}
                                                >
                                                    <span className="px-3 font-weight-bold text-sm">Read More</span>
                                                    <span 
                                                        className="d-flex align-items-center justify-content-center bg-white rounded-circle shadow-sm"
                                                        style={{ width: "36px", height: "36px", color: "#301934" }}
                                                    >
                                                        <i className="feather icon-arrow-right" />
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <ul className="dz-social">
                                    <li><Link href={data.linkedin} target="_blank"><i className="fa-brands text-secondary fa-linkedin" /></Link></li>
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default EmpolyBlog;
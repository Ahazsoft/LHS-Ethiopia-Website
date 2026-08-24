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
                                    <Image src={data.image} alt="/" />
                                    <Link href="/appointment" className="btn btn-primary">
                                        <i className="feather icon-calendar m-r5" /> Request Assistance
                                    </Link>
                                </div>
                                <div className="dz-content">
                                    <div className="clearfix">
                                        {/* Name links to the specific team member's detail page */}
                                        <h3 className="dz-name">
                                            <Link href={`/team-detail/${data.id}`} className={isHovered ? "" : "text-secondary"}>
                                                {data.title}
                                            </Link>
                                        </h3>
                                        <span className={`dz-position ${isHovered ? "" : "text-secondary"}`}>
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

                                    {/* Expandable Small Bio + Read More Link */}
                                    {isOpen && data.bio && (
                                        <div className={`mt-3 pt-2 border-top ${isHovered ? "border-white/10" : "border-secondary/10"}`}>
                                            <p className={`dz-team-bio text-sm m-b10 ${isHovered ? "text-white" : "text-secondary"}`}>
                                                {data.bio.length > 120 ? data.bio.substring(0, 120) + "..." : data.bio}
                                            </p>
                                            {/* Read More button links directly to this team member's page */}
                                            <Link 
    href={`/team?id=${data.id}`} 
    className="text-secondary font-weight-bold text-sm inline-flex items-center gap-1 hover:underline"
>
    Read More <i className="feather icon-arrow-right text-xs" />
</Link>
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
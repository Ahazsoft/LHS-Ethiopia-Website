"use client"
import Image from "next/image";
import { whychoosedata } from "../constant/alldata";
import { IMAGES } from "../constant/theme";

function WhyChoose() {
    return (
        <>
            <div className="row content-wrapper style-7 align-items-center">
                <div className="col-lg-6 m-b30 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.7s">
                    <div className="content-media">
                        <div className="dz-media">
                            <Image src={IMAGES.about5} alt="about" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 m-b30">
                    <div className="section-head style-1 m-b30">
                        <h2 className="title text-white m-b0 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.7s">Why Choose Us for Your Health care Needs </h2>
                    </div>
                    <div className="row row-wrapper g-5">
                        {whychoosedata.map((data, i) => (
                            <div className="col-sm-6" key={i}>
                                <div className="icon-bx-wraper style-4 text-center text-white wow fadeInUp" data-wow-delay={data.delay} data-wow-duration="0.7s">
                                    <div className="icon-bx bg-golden">
                                        <span className="icon-cell"> <i className="flaticon-check" /> </span>
                                    </div>
                                    <div className="icon-content">
                                        <h3 className="dz-title" style={{ fontSize: "0.9rem", fontWeight: 600 }}>
                                            {data.title}
                                        </h3>
                                        <p style={{ fontSize: "0.7rem", lineHeight: 1.7 }}>{data.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
} 
export default WhyChoose;
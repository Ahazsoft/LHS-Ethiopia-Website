"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { IMAGES } from "../constant/theme";
import { Autoplay, Navigation } from "swiper/modules";
import 'swiper/css/navigation';
import { testiswipeerdata } from "../constant/alldata";
import Image from "next/image";

function RealPatient() {
    return (
        <>
            <div className="container">
                <div className="row content-wrapper style-2">
                    <div className="col-xl-6">
                        <div className="content-media">
                            <div className="dz-media">
                                <Image src={IMAGES.about2png} alt="" />
                            </div>
                            <div className="circle-wrapper" data-bottom-top="transform: translateY(50px)" data-top-bottom="transform: translateY(-50px)">
                                <span className="circle1">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                                <span className="circle2">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                            </div>
                            <div className="item2" data-bottom-top="transform: translateY(50px)" data-top-bottom="transform: translateY(-50px)">
                                <div className="info-widget style-3 move-1">
                                    <div className="widget-head">
                                        <div className="widget-content">
                                            <h6 className="title">Samrawit T.</h6>
                                            <ul className="star-list">
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p>“LHS coordinated everything for my father's emergency transfer to Dubai. From hospital to air ambulance, their team was fast, caring, and professional. We’re forever grateful!”</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-10 align-self-center m-b30">
                        <div className="section-head style-1 m-b30 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.7s">
                            <h2 className="title text-white m-b0">Real Patients, Real Stories. And our achievements </h2>
                        </div>
                        <div className="swiper-btn-center-lr wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.7s">
                            <Swiper className="swiper testimonial-swiper1"
                                slidesPerView={1}
                                spaceBetween={20}
                                loop={true}
                                autoplay={{
                                    delay: 3000,
                                }}
                                navigation={{
                                    nextEl: ".swiper1-button-next",
                                    prevEl: ".swiper1-button-prev",                                    
                                }}
                                modules={[Navigation, Autoplay]}
                            >
                                {testiswipeerdata.map((data, i) => (
                                    <SwiperSlide key={i}>
                                        <div className="testimonial-quote-card">
                                            <div className="widget-head">
                                                <div className="widget-content">
                                                    <h5 className="title">{data.name}</h5>
                                                    <ul className="star-list">
                                                        <li><i className="fa fa-star" /></li>
                                                        <li><i className="fa fa-star" /></li>
                                                        <li><i className="fa fa-star" /></li>
                                                        <li><i className="fa fa-star" /></li>
                                                        <li><i className="fa fa-star" /></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p>{data.message}</p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className="swiper1-button-prev btn-prev" role="button">
                                <Image src={IMAGES.arrowleft} alt="" />
                            </div>
                            <div className="swiper1-button-next btn-next" role="button">
                                <Image src={IMAGES.arrowright} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default RealPatient;

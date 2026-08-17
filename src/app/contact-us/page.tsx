import Link from "next/link";
import PageBanner from "@/component/PageBanner";
import { IMAGES } from "@/constant/theme";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import Connect from "@/component/Connect";
import Getintouch from "@/component/Getintouch";
import Alllocation from "@/component/Alllocation";
import Image from "next/image";

function Contactus() {
    return (
        <>
            <Header />
            <main className="page-content">
                <PageBanner title="Contact Us" bnrimage={IMAGES.bnr1.src} />
                <section className="content-inner">
                    <div className="container">
                        <div className="row g-xl-4 align-items-center">
                            <Connect />
                            <Getintouch />
                        </div>
                    </div>
                </section>
                <Alllocation />
                <div className="clearfix">
                    <div className="map-wrapper style-2">
                        <iframe 
                        src="https://maps.google.com/maps?q=Minna+bldg,+wello+sefer,+Addis+Ababa,+Ethiopia&z=17&hl=en&output=embed"
                        title="Minna bldg, wello sefer, Addis Ababa, Ethiopia"
                            style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                        />                            
                        
                        <div className="container">
                            <div className="content-bx style-5 position-absolute wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.5s">
                                <div className="content-logo">
                                    <Image src={IMAGES.logo} alt="logo" />
                                </div>
                                <div className="content-text">
                                    <p className="m-b0">Minna bldg, wello sefer, Addis Ababa, Ethiopia</p>
                                </div>
                                <div className="dz-footer">
                                    <Link href="https://www.google.com/maps/dir/?api=1&destination=Minna+bldg,+wello+sefer,+Addis+Ababa,+Ethiopia" target="_blank" className="icon-link-hover-end">Open Google Map 
                                        <i className="feather icon-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />            
        </>
    );
}
export default Contactus;
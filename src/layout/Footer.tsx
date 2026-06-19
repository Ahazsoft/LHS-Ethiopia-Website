"use client";
import Link from "next/link";
import { IMAGES } from "../constant/theme";
import { footerdata1, footerdata2 } from "../constant/alldata";
import { useRef } from "react";
import Image from "next/image";
import { useEmailService } from "@/constant/useEmailService";

function Footer() {
  let year = new Date().getFullYear();
  const form = useRef<HTMLFormElement | null>(null);
  const { sendEmail } = useEmailService();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    const result = await sendEmail(form.current);
    if (result.success) {
      console.log("SUCCESS!", result.message);
    } else {
      console.error("FAILED...", result.message);
    }
  };
  return (
    <>
      <footer
        className="site-footer style-1 bg-purple-primary text-white" /* style={{ backgroundImage: `url(${IMAGES.bg4.src})` }} */
      >
        <div className="footer-head">
          <div className="container">
            <div className="fh-inner">
              <div className="row g-3 align-items-center">
                <div
                  className="col-xl-3 col-md-12 col-sm-6 wow fadeInUp"
                  data-wow-delay="0.2s"
                  data-wow-duration="0.8s"
                >
                  <h3 className="title text-white">Get in Touch with us</h3>
                  <p className="text text-white">Here is our contact info</p>
                </div>
                {footerdata1.map((data, i) => (
                  <div
                    className="col-xl-3 col-md-4 col-sm-6 wow fadeInUp"
                    data-wow-delay={data.delay}
                    data-wow-duration="0.8s"
                    key={i}
                  >
                    <div className="icon-bx-wraper style-1">
                      <div className="icon-bx bg-secondary">
                        <span className="icon-cell">{data.icon}</span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dz-title text-white">{data.title}</h5>
                        <p className="text-white">{data.paragraph}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="footer-top">
          <div className="container border-bottom">
            <div className="row">
              <div
                className="col-xl-3 col-sm-12 wow fadeInUp"
                data-wow-delay="0.2s"
                data-wow-duration="0.8s"
              >
                <div className="widget widget_about me-2">
                  <div className="footer-logo logo-white">
                    <Link href="/">
                      <Image src={IMAGES.logo} alt="" />
                    </Link>
                  </div>
                  <p>
                    Lighthouse Healthcare Solutions (LHS) is a clinician-led
                    medical travel and emergency transport company founded by
                    doctors who are deeply passionate about pre-hospital and
                    critical care.
                  </p>
                </div>
              </div>
              {footerdata2.map((data, i) => (
                <div
                  className="col-xl-3 col-md-2 col-12 wow fadeInUp"
                  data-wow-delay={data.delay}
                  data-wow-duration="0.8s"
                //   style={{border:"1px solid white"}}
                  key={i}
                >
                  <div className="widget widget_services">
                    <h2 className="footer-title text-white">{data.title} </h2>
                    <ul className="list-hover1 ">
                      <li>
                        <Link href={data.link1}>
                          <span className="text-white">{data.span1}</span>
                        </Link>
                      </li>
                      <li>
                        <Link href={data.link2}>
                          <span className="text-white">{data.span2}</span>
                        </Link>
                      </li>
                      <li>
                        <Link href={data.link3}>
                          <span className="text-white">{data.span3}</span>
                        </Link>
                      </li>
                      <li>
                        <Link href={data.link4}>
                          <span className="text-white">{data.span4}</span>
                        </Link>
                      </li>
                      <li>
                        <Link href={data.link5}>
                          <span className="text-white">{data.span5}</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-middle">
          <div className="container border-bottom">
            <div className="fm-inner">
              <div className="row align-items-center g-lg-5 g-4">
                <div
                  className="col-lg-6 wow fadeInUp"
                  data-wow-delay="0.2s"
                  data-wow-duration="0.8s"
                >
                  <h2 className="title text-white">
                    Important Updates Waiting for you
                  </h2>
                  <p>Get our latest and best contents right into your inbox</p>
                </div>
                <div
                  className="col-lg-6 wow fadeInUp"
                  data-wow-delay="0.4s"
                  data-wow-duration="0.8s"
                >
                  <form
                    className="dzSubscribe style-1"
                    ref={form}
                    onSubmit={handleSubmit}
                  >
                    <div className="dzSubscribeMsg"></div>
                    <div className="form-group">
                      <div className="input-group mb-0">
                        <input
                          name="dzEmail"
                          required
                          type="email"
                          className="form-control"
                          placeholder="Your Email Address"
                        />
                        <div className="input-group-addon">
                          <button
                            name="submit"
                            value="Submit"
                            type="submit"
                            className="btn btn-primary btn-hover1"
                          >
                            <span className="btn-text">Subscribe Now</span>
                            <span className="btn-icon">
                              <i className="fa-solid fa-paper-plane" />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="flex items-center justify-center py-3 text-center">
              <p className="m-0 text-sm">
                © {new Date().getFullYear()} Designed By{" "}
                <a
                  href="https://ahazsoftware.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline font-medium"
                >
                  Ahaz Software
                </a>{"  "}
                All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="item1">
          <div className="info-widget style-4">
            <div className="widget-media">
              <Image src={IMAGES.smallavatar6} alt="" />
            </div>
            <div className="widget-content">
              <h6 className="title">Have a Question?</h6>
              <Link href="mailto:info@example.com">info@example.com</Link>
              <span className="text">John Cane</span>
            </div>
          </div>
        </div> */}
      </footer>
    </>
  );
}
export default Footer;

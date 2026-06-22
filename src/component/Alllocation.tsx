import Link from "next/link";
import { locationdata } from "../constant/alldata";
// import GoogleMap from "./GoogleMap";

function Alllocation() {
  return (
    <>
      <section className="content-inner bg-light bg-opacity-50">
        <div className="container">
          <div className="section-head style-3">
            <h2
              className="title m-b0 wow fadeInUp"
              data-wow-delay="0.2s"
              data-wow-duration="0.8s"
            >
              All Locations
            </h2>
          </div>
          <div className="row content-wrapper">
            {locationdata.map((data, i) => (
              <div
                className="col-xl-6 m-b30 wow fadeInUp"
                data-wow-delay={data.delay}
                data-wow-duration="0.8s"
                key={i}
              >
                <div className="content-bx style-6 shadow-sm">
                  <div className="dz-media">                    
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.8513020636897!2d38.768183!3d8.9858275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8445155044db%3A0x13f19095df1fbba7!2sEthio%20China%20St%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1782112209247!5m2!1sen!2set"
                      style={{ border: 0, height: "100%", width: "100%" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <div className="dz-info">
                    <div className="clearfix">
                      <h3 className="title m-b20">{data.title}</h3>
                      <div className="m-b15">
                        <h4 className="m-b5 font-16">Address:</h4>
                        <p>
                         Minna bldg, wello sefer, Addis Ababa, Ethiopia
                        </p>
                      </div>
                      <div className="m-b15">
                        <h4 className="m-b5 font-16">Service Time:</h4>
                        <p>Mon -Sat: 7:00 - 17:00</p>
                      </div>
                    </div>
                    <div className="dz-footer">
                      <Link
                        href="https://maps.app.goo.gl/vWXWsoEbCGhJaVsb9"
                        target="_blank"
                        className="icon-link-hover-end"
                      >
                        Get Directions{" "}
                        <i className="feather icon-arrow-up-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default Alllocation;

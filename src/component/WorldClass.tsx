import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "../constant/theme";
import { worldclasslistdata } from "../constant/alldata";

function WorldClass() {
  return (
    <>
      <div className="row content-wrapper style-1 align-items-center">
        <div className="col-xl-6 m-b30">
          <div className="content-media">
            <div className="dz-media">
              <Image src={IMAGES.about1} alt="" />
            </div>
            <div
              className="item1"
              data-bottom-top="transform: translateY(-50px)"
              data-top-bottom="transform: translateY(50px)"
            >
              <div className="info-widget style-7">
                <div className="widget-content bg-secondary">
                  Video Call Support
                </div>
                <div className="widget-media">
                  <Image src={IMAGES.about2} alt="" />
                  <div className="call-widget">
                    <Link href={"#"} scroll={false}>
                      {" "}
                      <Image src={IMAGES.camerasvg} alt="" />{" "}
                    </Link>
                    <Link href={"#"} scroll={false}>
                      {" "}
                      <Image src={IMAGES.massagesvg} alt="" />{" "}
                    </Link>
                    <Link href={"#"} scroll={false} className="active">
                      {" "}
                      <Image src={IMAGES.callsvg} alt="" />{" "}
                    </Link>
                    <Link href={"#"} scroll={false}>
                      {" "}
                      <Image src={IMAGES.mikesvg} alt="" />{" "}
                    </Link>
                    <Link href={"#"} scroll={false}>
                      {" "}
                      <Image src={IMAGES.videosvg} alt="" />{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="item2"
              data-bottom-top="transform: translateY(50px)"
              data-top-bottom="transform: translateY(-50px)"
            >
              <div className="info-widget style-6 bg-golden">
                <div className="info-icon bg-secondary">
                  <Image src={IMAGES.clocksvg} alt="" />
                </div>
                <div className="widget-content">
                  <h4 className="title text-xl font-semibold text-purple-700 mb-4">Open Hours<span className="text-gray-600">(Onsite)</span></h4>
                  <ul className="space-y-2 text-gray-800">
                 <li className="flex justify-between border-b pb-1">
                  <span>Monday</span> <strong>09:30 - 07:30</strong>
                  </li>
                  <li className="flex justify-between border-b pb-1">
                  <span>Tuesday</span> <strong>09:30 - 07:30</strong>
                  </li>
                  <li className="flex justify-between border-b pb-1">
                  <span>Wednesday</span> <strong>09:30 - 07:30</strong>
                  </li>
                  <li className="flex justify-between border-b pb-1">
                  <span>Thursday</span> <strong>09:30 - 07:30</strong>
                  </li>
                  <li className="flex justify-between border-b pb-1">
                  <span>Friday</span> <strong>09:30 - 07:30</strong>
                  </li>
                  <li className="flex justify-between border-b pb-1">
                  <span>Saturday</span> <strong>09:30 - 07:30</strong>
                  </li>
                  </ul>

                  <p className="mt-4 text-green-700 font-medium">
                 <strong> Virtual Support:</strong> <span className="text-gray-700">Available 24/7 for patient inquiries, coordination, and assistance.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6 m-b30">
          <div className="section-head style-1 m-b30">
            <h2
              className="title wow fadeInUp"
              data-wow-delay="0.2s"
              data-wow-duration="0.8s"
            >
              Who We Are?{" "}
            </h2>
            <p
              className="wow fadeInUp"
              data-wow-delay="0.4s"
              data-wow-duration="0.8s"
            >
              Lighthouse Healthcare Solutions (LHS) is a clinician-led medical
              travel and emergency transport company founded by doctors who are
              deeply passionate about pre-hospital and critical care. At our
              core,we are experienced healthcare
              professionals with years of clinical and operational expertise.
              Our team includes an Emergency Medicine Specialist, other doctors
              with direct patient care experience, and a Business Development
              Specialist with healthcare sector knowledge. We deliver solutions
              with medical precision, compassion, and professionalism
            </p>
          </div>
          <ul
            className="list-check text-secondary grid-2 fw-medium m-b30 wow fadeInUp"
            data-wow-delay="0.6s"
            data-wow-duration="0.8s"
          >
            {worldclasslistdata.map((data, i) => (
              <li key={i}>{data.title}</li>
            ))}
          </ul>
          <div
            className="d-flex flex-wrap align-items-center wow fadeInUp"
            data-wow-delay="0.8s"
            data-wow-duration="0.8s"
          >
            <Link
              href="/appointment"
              className="btn btn-lg btn-icon btn-secondary btn-shadow m-r30 mb-3 mb-sm-0"
            >
              Appointment
              <span className="right-icon">
                <i className="feather icon-arrow-right" />
              </span>
            </Link>
            <div className="info-widget style-5">
              <div className="widget-media text-golden">
                <i className="feather icon-phone-call dz-ring-effect" />
              </div>
              <div className="widget-content">
                <h6 className="title">Contact us</h6>
                <Link href="tel:+251943104334" className="text-secondary">
                  +251943104334
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default WorldClass;

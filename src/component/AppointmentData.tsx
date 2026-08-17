"use client"
import { useRef, useState } from "react";
import { IMAGES } from "@/constant/theme";
import { Dropdown } from "react-bootstrap";
import Image from "next/image";
import { useEmailService } from "@/constant/useEmailService";

const SERVICE_OPTIONS = [
  "Air Ambulance Coordination",
  "Commercial Medical Escort",
  "Medical Tourism",
  "Medical Assistance",
  "Other",
];

const DESTINATION_OPTIONS = [
  "Turkey",
  "Thailand",
  "India",
  "Other",
];

function AppointmentData() {
  const [serviceType, setServiceType] = useState("");
  const [destination, setDestination] = useState("");
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
    <section
      className="content-inner-2 bg-light z-2"
      style={{ backgroundImage: `url(${IMAGES.bg5png.src})` }}
    >
      <div className="container">
        <div className="row align-items-end content-wrapper style-8">
          <div
            className="col-lg-6 text-center wow fadeInUp"
            data-wow-delay="0.2s"
            data-wow-duration="0.8s"
          >
            <Image src={IMAGES.about3png} alt="/" />
          </div>
          <div
            className="col-lg-6"
            data-bottom-top="transform: translateY(100px)"
            data-top-bottom="transform: translateY(-10px)"
          >
            <div className="form-wrapper style-1 text-vr-wrapper lhs-assistance-form">
              <div className="text-vertical">Request Assistance</div>
              <div className="form-body">
                <div className="title-head">
                  <h2 className="form-title m-b0">
                    Request <span>Assistance</span>{" "}
                    <br /> Tell Us About Your Case
                  </h2>
                  <h6>
                    Complete the form below and our medical coordination team
                    will respond promptly.
                  </h6>
                </div>
                <form ref={form} onSubmit={handleSubmit} className="dzForm" method="POST">
                  <input type="hidden" className="form-control" name="dzToDo" value="Assistance" />
                  <input type="hidden" className="form-control" name="reCaptchaEnable" value="0" />
                  <div className="dzFormMsg"></div>

                  <input type="hidden" name="dzService" value={serviceType} />
                  {serviceType === "Medical Tourism" && (
                    <input type="hidden" name="dzDestination" value={destination} />
                  )}

                  <div className="row">
                    <div className="col-sm-6 m-b30">
                      <div className="form-floating floating-underline input-light">
                        <input
                          name="dzName"
                          type="text"
                          className="form-control"
                          id="inputFullName"
                          placeholder=" "
                          required
                        />
                        <label htmlFor="inputFullName">Full Name</label>
                      </div>
                    </div>
                    <div className="col-sm-6 m-b30">
                      <div className="form-floating floating-underline input-light">
                        <input
                          name="dzCompany"
                          type="text"
                          className="form-control"
                          id="inputCompany"
                          placeholder=" "
                        />
                        <label htmlFor="inputCompany">Company (optional)</label>
                      </div>
                    </div>

                    <div className="col-sm-6 m-b30">
                      <div className="form-floating floating-underline input-light">
                        <input
                          name="dzEmail"
                          type="email"
                          className="form-control"
                          id="inputEmail"
                          placeholder=" "
                          required
                        />
                        <label htmlFor="inputEmail">Email Address</label>
                      </div>
                    </div>
                    <div className="col-sm-6 m-b30">
                      <div className="form-floating floating-underline input-light">
                        <input
                          name="dzPhone"
                          type="tel"
                          className="form-control"
                          id="inputPhone"
                          placeholder=" "
                          required
                        />
                        <label htmlFor="inputPhone">Phone Number(Include country code)</label>
                      </div>
                    </div>

                    <div className="col-sm-6 m-b30">
                      <div className="form-floating floating-underline input-light">
                        <input
                          name="dzCountry"
                          type="text"
                          className="form-control"
                          id="inputCountry"
                          placeholder=" "
                          required
                        />
                        <label htmlFor="inputCountry">Country</label>
                      </div>
                    </div>
                    <div className="col-sm-6 m-b30">
                      <div className="form-floating floating-underline input-light">
                        <Dropdown className="form-control bs-select">
                          <Dropdown.Toggle as="div">
                            {serviceType || "Select Service"}
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            {SERVICE_OPTIONS.map((option) => (
                              <Dropdown.Item
                                key={option}
                                active={serviceType === option}
                                onClick={() => setServiceType(option)}
                              >
                                {option}
                              </Dropdown.Item>
                            ))}
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>

                    {serviceType === "Medical Tourism" && (
                      <div className="col-sm-6 m-b30">
                        <div className="form-floating floating-underline input-light">
                          <Dropdown className="form-control bs-select">
                            <Dropdown.Toggle as="div">
                              {destination || "Select Destination"}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              {DESTINATION_OPTIONS.map((option) => (
                                <Dropdown.Item
                                  key={option}
                                  active={destination === option}
                                  onClick={() => setDestination(option)}
                                >
                                  {option}
                                </Dropdown.Item>
                              ))}
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                    )}

                    <div className="col-sm-12 m-b30">
                      <div className="form-floating floating-underline input-light">
                        <textarea
                          name="dzMessage"
                          className="form-control"
                          id="inputMessage"
                          rows={5}
                          placeholder=" "
                          required
                        ></textarea>
                        <label htmlFor="inputMessage">Case Description</label>
                      </div>
                    </div>

                    <div className="col-sm-12">
                      <button
                        type="submit"
                        name="submit"
                        value="submit"
                        className="btn btn-lg btn-icon btn-white hover-secondary btn-shadow"
                      >
                        Submit Request
                        <span className="right-icon">
                          <i className="feather icon-arrow-right" />
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppointmentData;

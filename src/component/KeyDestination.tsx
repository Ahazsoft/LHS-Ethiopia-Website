"use client";

const destinations = [
  {
    countryCode: "TH",
    location: "Bangkok, Thailand",
    services: [
      "Anti-aging",
      "Oncology",
      "Cosmetic Surgery",
      "Wellness",
      "Executive Health Checks",
    ],
    delay: "0.2s",
  },
  {
    countryCode: "IN",
    location: "India",
    services: [
      "Cardiac Care",
      "Organ Transplant",
      "Neurosurgery",
      "Oncology",
      "Orthopaedics",
    ],
    delay: "0.4s",
  },
  {
    countryCode: "TR",
    location: "Istanbul, Turkey",
    services: [
      "Cosmetic Surgery",
      "Hair Restoration",
      "Dental",
      "Bariatric",
      "Eye Surgery",
    ],
    delay: "0.6s",
  },
  {
    countryCode: "AE",
    location: "Dubai, UAE",
    services: [
      "Executive Screening",
      "Wellness",
      "Fertility",
      "Proximity & Ease of Access",
    ],
    delay: "0.8s",
  },
];

function KeyDestination() {
  return (
    <div className="content-wrapper style-7">
      <div className="section-head style-1 text-center m-b50">
        <h6
          className="sub-title text-golden wow fadeInUp"
          data-wow-delay="0.1s"
          data-wow-duration="0.7s"
        >
          WHERE WE WORK
        </h6>
        <h2
          className="title text-white m-b0 wow fadeInUp"
          data-wow-delay="0.2s"
          data-wow-duration="0.7s"
        >
          Key Medical Destinations
        </h2>
      </div>

      <div className="row row-wrapper g-5">
        {destinations.map((destination, index) => (
          <div className="col-lg-6 col-md-6" key={index}>
            <div
              className="icon-bx-wraper style-4 text-white wow fadeInUp h-100 d-flex align-items-center"
              data-wow-delay={destination.delay}
              data-wow-duration="0.7s"
              style={{
                padding: "35px 30px",
                border: "1px solid rgba(255,255,255,0.16)",
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(6px)",
              }}
            >
              <div className="d-flex flex-column align-items-center justify-content-center w-100 text-center">
                <div className="d-flex align-items-center justify-content-center mb-3">
                  <span style={{ color: "#cfb755" }} className="fw-bold fs-1 lh-1">
                    {destination.countryCode}
                  </span>
                </div>

                <div className="w-100">
                  <h3 className="dz-title m-b5" style={{ color: "#hex" }}>
                    {destination.location}
                  </h3>
                  <div className="d-flex flex-wrap justify-content-center align-items-center text-white opacity-90">
                    {destination.services.map((service, serviceIndex) => (
                      <span key={serviceIndex} className="d-inline-flex align-items-center">
                        {serviceIndex > 0 && <span className="mx-2">·</span>}
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KeyDestination;
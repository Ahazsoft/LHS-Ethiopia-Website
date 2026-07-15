const differentiators = [
  {
    icon: "feather icon-user-check",  // Doctors Lead
    title: "Doctors Lead, Not Just Coordinate",
    description:
      "Our own physicians serve as lead clinicians on air ambulance flights and medical escorts, not outsourced staff. Clinical decisions are made by our team, from dispatch to handover.",
    delay: "0.2s",
  },
  {
    icon: "feather icon-activity",    // Full range of acuity
    title: "One Partner, Every Stage of Acuity",
    description:
      "From critical emergencies to stable, planned transfers, we manage the full range of patient acuity. Families and institutions do not need separate vendors for different levels of care.",
    delay: "0.4s",
  },
  {
    icon: "feather icon-globe",       // Regional Reach
    title: "Regional Reach, Local Expertise",
    description:
      "A network of 70+ hospitals across 7 countries, paired with deep knowledge of Ethiopian and East African healthcare systems, logistics, and documentation requirements.",
    delay: "0.6s",
  },
  {
    icon: "feather icon-briefcase",   // Insurers & Corporates
    title: "Built for Insurers and Corporates, Not Just Individuals",
    description:
      "Beyond patient-facing services, we operate as a true assistance partner: GOP issuance, claims management, and case coordination that meets institutional standards.",
    delay: "0.8s",
  },
];

export default function WhyChooseLHS() {
  return (
    <section className="content-wrapper">
      <div className="section-head style-1 text-center m-b50">
        <h6
          className="sub-title text-golden wow fadeInUp"
          data-wow-delay="0.1s"
          data-wow-duration="0.7s"
        >
          WHY CHOOSE LHS
        </h6>
        <h2
          className="title m-b0 wow fadeInUp text-white"
          data-wow-delay="0.2s"
          data-wow-duration="0.7s"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          What Sets Us Apart
        </h2>
      </div>

      <div className="row g-5">
        {differentiators.map((item, i) => (
          <div className="col-lg-3 col-md-6" key={i}>
            <div
              className="wow fadeInUp h-100 text-center"
              data-wow-delay={item.delay}
              data-wow-duration="0.7s"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.16)",
                backdropFilter: "blur(6px)",
                padding: "40px 25px",
                borderRadius: "8px",
              }}
            >
              {/* Icon Circle */}
              <div
                className="d-flex align-items-center justify-content-center mx-auto mb-4"
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  border: "2px solid #cfb755",
                  background: "rgba(207, 183, 85, 0.08)",
                }}
              >
                <i className={item.icon} style={{ color: "#cfb755", fontSize: "28px" }} />
              </div>

              {/* Title */}
              <h5
                className="dz-title mb-3"
                style={{ color: "#cfb755", fontWeight: 600 ,fontSize:"0.9rem" ,fontFamily:"'poppins',sans-serif"}}
              >
                {item.title}
              </h5>

              {/* Description */}
              <p  className="text-white opacity-50"
                style={{ lineHeight: 1.7, fontSize: "0.9rem",fontFamily:"'poppins',sans-serif" }}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
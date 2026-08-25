"use client";

const differentiators = [
  {
    icon: "feather icon-user-check",
    title: "Doctors Lead, Not Just Coordinate",
    description:
      "Our own physicians serve as lead clinicians on air ambulance flights and medical escorts, not outsourced staff. Clinical decisions are made by our team, from dispatch to handover.",
    delay: "0.2s",
  },
  {
    icon: "feather icon-activity",
    title: "One Partner, Every Stage of Acuity",
    description:
      "From critical emergencies to stable, planned transfers, we manage the full range of patient acuity. Families and institutions do not need separate vendors for different levels of care.",
    delay: "0.4s",
  },
  {
    icon: "feather icon-globe",
    title: "Regional Reach, Local Expertise",
    description:
      "A network of 50+ vetted JCI accredited hospitals across 7 countries, paired with deep knowledge of Ethiopian and East African healthcare systems, logistics, and documentation requirements.",
    delay: "0.6s",
  },
  {
    icon: "feather icon-briefcase",
    title: "Built for Insurers and Corporates, Not Just Individuals",
    description:
      "Beyond patient-facing services, we operate as a true assistance partner: GOP issuance, claims management, and case coordination that meets institutional standards.",
    delay: "0.8s",
  },
];

export default function WhyChooseLHS() {
  return (
    <section className="content-wrapper py-5">
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
        >
          What Sets Us Apart
        </h2>
      </div>

      <div className="row g-4 container mx-auto">
        {differentiators.map((item, i) => (
          <div className="col-lg-3 col-md-6" key={i}>
            <div
              className="wow fadeInUp h-100 d-flex flex-column align-items-center text-center position-relative"
              data-wow-delay={item.delay}
              data-wow-duration="0.7s"
              style={{
                background: "#ffffff",
                border: "1px solid #eaeaea",
                borderTop: "4px solid #301934",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                padding: "30px 25px",
                borderRadius: "10px",
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 18px 40px rgba(0, 0, 0, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0px)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.1)";
              }}
            >
              {/* Icon at the Top (Centered) */}
              <div
                className="d-flex align-items-center justify-content-center mb-4"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "12px",
                  background: "rgba(48, 25, 52, 0.06)",
                  border: "1px solid rgba(48, 25, 52, 0.15)",
                }}
              >
                <i className={item.icon} style={{ color: "#301934", fontSize: "26px" }} />
              </div>

              {/* Title (Centered) */}
              <h5
                className="dz-title mb-2"
                style={{ color: "#301934", fontWeight: 600, fontSize: "1rem", lineHeight: 1.4 }}
              >
                {item.title}
              </h5>

              {/* Description (Centered) */}
              <p
                className="m-0"
                style={{ color: "#555555", fontSize: "0.82rem", lineHeight: 1.6, fontWeight: 400, textAlign: "center" }}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
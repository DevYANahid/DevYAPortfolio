
import React from "react";

const education = [
  {
    number: "01",
    title: "Bachelor of Business Administration",
    shortTitle: "B.B.A",
    institution: "National University, Bangladesh",
    year: "2020 – 2024",
    details: ["Subject: Management", "CGPA: 3.50"],
    color: "#5ff3d1",
    icon: "graduation",
  },
  {
    number: "02",
    title: "Higher Secondary Certificate",
    shortTitle: "H.S.C",
    institution: "Dhaka City College",
    year: "2019 – 2020",
    details: ["Board: Dhaka", "GPA: 4.58"],
    color: "#35b6d1",
    icon: "school",
  },
  {
    number: "03",
    title: "Secondary School Certificate",
    shortTitle: "S.S.C",
    institution: "Rokanpur High School",
    year: "2017 – 2018",
    details: ["Board: Comilla", "GPA: 4.39"],
    color: "#f59e0b",
    icon: "book",
  },
];

const EducationIcon = ({ type }) => {
  const common = {
    width: 48,
    height: 48,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  if (type === "graduation") {
    return (
      <svg {...common}>
        <path d="m2 10 10-5 10 5-10 5-10-5Z" />
        <path d="M6 12v5c3.5 3 8.5 3 12 0v-5" />
        <path d="M22 10v6" />
      </svg>
    );
  }

  if (type === "school") {
    return (
      <svg {...common}>
        <path d="M3 21h18" />
        <path d="M5 21V8l7-5 7 5v13" />
        <path d="M9 21v-6h6v6" />
        <path d="M9 10h.01M15 10h.01" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
      <path d="M8 7h8M8 11h8" />
    </svg>
  );
};

const Expiriance = () => {
  return (
    <section
      id="education"
      className="education-section mx-5 mt-16 lg:mx-20 lg:mt-28"
    >
      <h2 className="text-3xl my-12 text-center mono-font text-[#cbd4f0] font-semibold">
        <span className="px-2 text-[#5ff3d1]">03.</span>
        Education
      </h2>

      <div className="education-timeline">
        {/* Connecting line */}
        <div className="timeline-line"></div>

        <div className="education-grid">
          {education.map((item, index) => (
            <div className="education-item" key={item.number}>
              {/* Circular timeline */}
              <div
                className="education-circle"
                style={{ "--accent": item.color }}
              >
                <div className="circle-inner">
                  <span className="circle-number">{item.number}</span>
                  <EducationIcon type={item.icon} />
                </div>
              </div>

              {/* Timeline connector */}
              <div
                className="timeline-dot"
                style={{ "--accent": item.color }}
              />

              {/* Education details */}
              <div className="education-content">
                <h3>{item.shortTitle}</h3>

                <p className="education-degree">{item.title}</p>

                <p className="education-institute">
                  {item.institution}
                </p>

                <span className="education-year">{item.year}</span>

                <div className="education-details">
                  {item.details.map((detail) => (
                    <span key={detail}>{detail}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .education-section {
          color: #cbd4f0;
        }

        .education-timeline {
          position: relative;
          max-width: 1100px;
          margin: 0 auto;
          padding: 25px 0 20px;
        }

        .education-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 30px;
          position: relative;
          z-index: 2;
        }

        .education-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
        }

        .timeline-line {
          position: absolute;
          top: 105px;
          left: 16%;
          right: 16%;
          height: 8px;
          border-radius: 20px;
          background: repeating-linear-gradient(
            90deg,
            #64748b 0px,
            #64748b 8px,
            transparent 8px,
            transparent 17px
          );
          opacity: 0.45;
        }

        .education-circle {
          width: 180px;
          height: 180px;
          border-radius: 50%;
          padding: 12px;
          background: conic-gradient(
            from 220deg,
            var(--accent) 0deg,
            var(--accent) 145deg,
            #64748b 145deg,
            #64748b 360deg
          );
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.35s ease;
        }

        .education-circle:hover {
          transform: translateY(-7px) rotate(5deg);
        }

        .circle-inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 2px solid rgba(203, 212, 240, 0.3);
          background: #0a192f;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: var(--accent);
          position: relative;
        }

        .circle-number {
          font-size: 12px;
          letter-spacing: 3px;
          color: #cbd4f0;
          opacity: 0.7;
        }

        .timeline-dot {
          width: 17px;
          height: 17px;
          border-radius: 50%;
          background: var(--accent);
          border: 4px solid #0a192f;
          margin-top: 17px;
          box-shadow: 0 0 0 3px var(--accent);
        }

        .education-content {
          margin-top: 22px;
          width: 100%;
          padding: 0 8px;
        }

        .education-content h3 {
          color: var(--accent);
          font-size: 23px;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .education-degree {
          font-size: 15px;
          font-weight: 600;
          color: #cbd4f0;
          margin-bottom: 10px;
        }

        .education-institute {
          font-size: 14px;
          color: #94a3b8;
          margin-bottom: 12px;
        }

        .education-year {
          display: inline-block;
          font-size: 12px;
          color: var(--accent);
          border: 1px solid var(--accent);
          border-radius: 30px;
          padding: 5px 14px;
          margin-bottom: 14px;
        }

        .education-details {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px;
        }

        .education-details span {
          font-size: 12px;
          color: #cbd4f0;
          border: 1px solid rgba(95, 243, 209, 0.25);
          border-radius: 5px;
          padding: 6px 10px;
          background: transparent;
        }

        @media (max-width: 767px) {
          .education-timeline {
            padding: 10px 0;
          }

          .education-grid {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .timeline-line {
            top: 70px;
            bottom: 70px;
            left: 50%;
            right: auto;
            width: 5px;
            height: auto;
            transform: translateX(-50%);
            background: repeating-linear-gradient(
              180deg,
              #64748b 0px,
              #64748b 8px,
              transparent 8px,
              transparent 17px
            );
          }

          .education-circle {
            width: 145px;
            height: 145px;
          }

          .education-content {
            margin-top: 18px;
          }

          .education-content h3 {
            font-size: 21px;
          }
        }
      `}</style>
    </section>
  );
};

export default Expiriance;

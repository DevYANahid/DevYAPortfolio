
import React from "react";

import express from "../../assests/skills/backend/express-js.webp";
import mdb from "../../assests/skills/backend/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.webp";
import jwt from "../../assests/skills/backend/jwt-3.svg";
import node from "../../assests/skills/backend/node-js.webp";

import bootstrap from "../../assests/skills/bootstrap.webp";
import chakru from "../../assests/skills/chakra-ui.webp";
import css from "../../assests/skills/css3.webp";
import html from "../../assests/skills/html-5--v1.webp";
import js from "../../assests/skills/javascript--v1.webp";
import mui from "../../assests/skills/material-ui.webp";

import wp from "../../assests/skills/othres/WordPress_blue_logo.svg.png";
import netlify from "../../assests/skills/othres/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.webp";
import firebase from "../../assests/skills/othres/firebase.webp";
import vercel from "../../assests/skills/othres/gd1ferzh1vbopo15yysy.svg";
import git from "../../assests/skills/othres/git.webp";
import github from "../../assests/skills/othres/github.webp";
import google from "../../assests/skills/othres/google-logo.webp";

import react from "../../assests/skills/react--v1.webp";
import redux from "../../assests/skills/redux.webp";
import tailwind from "../../assests/skills/tailwindcss.webp";

const columns = [
  {
    title: "Awareness",
    cards: [
      {
        title: "Frontend",
        items: [
          ["HTML5", html],
          ["CSS3", css],
          ["JavaScript", js],
          ["React", react],
        ],
      },
      {
        title: "UI Frameworks",
        items: [
          ["Bootstrap", bootstrap],
          ["Material UI", mui],
          ["Chakra UI", chakru],
        ],
      },
    ],
  },
  {
    title: "Website",
    highlight: true,
    cards: [
      {
        title: "Frontend Development",
        items: [
          ["React", react],
          ["Redux", redux],
          ["Tailwind CSS", tailwind],
        ],
      },
      {
        title: "Web Infrastructure",
        items: [
          ["Git", git],
          ["GitHub", github],
          ["WordPress", wp],
        ],
      },
      {
        title: "Hosting",
        items: [
          ["Vercel", vercel],
          ["Netlify", netlify],
        ],
      },
    ],
  },
  {
    title: "Data Management",
    cards: [
      {
        title: "Backend",
        items: [
          ["Node.js", node],
          ["Express.js", express],
        ],
      },
      {
        title: "Database",
        items: [
          ["MongoDB", mdb],
          ["Firebase", firebase],
        ],
      },
      {
        title: "Authentication",
        items: [["JWT", jwt]],
      },
    ],
  },
  {
    title: "(Re) Engagement",
    cards: [
      {
        title: "Application Development",
        items: [
          ["React", react],
          ["JavaScript", js],
        ],
      },
      {
        title: "Integration",
        items: [
          ["Firebase", firebase],
          ["JWT", jwt],
        ],
      },
    ],
  },
  {
    title: "Interaction",
    cards: [
      {
        title: "Development Tools",
        items: [
          ["Git", git],
          ["GitHub", github],
          ["WordPress", wp],
        ],
      },
      {
        title: "UI Libraries",
        items: [
          ["Bootstrap", bootstrap],
          ["Material UI", mui],
          ["Tailwind", tailwind],
        ],
      },
    ],
  },
  {
    title: "Measurement",
    cards: [
      {
        title: "Deployment",
        items: [
          ["Vercel", vercel],
          ["Netlify", netlify],
        ],
      },
      {
        title: "Services",
        items: [
          ["Google", google],
          ["Firebase", firebase],
        ],
      },
    ],
  },
];

const Skills = () => {
  return (
    <section className="tech-map" id="skills">

      <div className="tech-heading">
        <span>03. MY EXPERTISE</span>
        <h2>Technology Ecosystem</h2>
        <p>My technologies, frameworks and development tools.</p>
      </div>

      <div className="tech-scroll">
        <div className="tech-board">

          {/* CONNECTION LINES */}
          <svg className="tech-svg" viewBox="0 0 1200 650">
            <defs>
              <marker
                id="arrow"
                markerWidth="7"
                markerHeight="7"
                refX="5"
                refY="3"
                orient="auto"
              >
                <path d="M0 0 L6 3 L0 6" fill="#7195a3" />
              </marker>
            </defs>

            <g
              stroke="#7195a3"
              strokeWidth="1.5"
              fill="none"
              markerEnd="url(#arrow)"
            >
              <path d="M100 85 V115 H300 V85" />
              <path d="M300 115 H500 V85" />
              <path d="M500 115 H700 V85" />
              <path d="M700 115 H900 V85" />
              <path d="M900 115 H1100 V85" />

              <path d="M130 190 V245 H430 V220" />
              <path d="M430 220 V270" />
              <path d="M630 190 V250 H830 V220" />
              <path d="M830 350 V390 H1030 V360" />
              <path d="M230 390 H430" />
              <path d="M430 390 H630" />
              <path d="M630 390 H830" />
              <path d="M830 480 H1030" />
            </g>
          </svg>

          {/* ARROW HEADERS */}
          <div className="tech-headers">
            {columns.map((col) => (
              <div className="tech-arrow" key={col.title}>
                {col.title}
              </div>
            ))}
          </div>

          {/* TECHNOLOGY COLUMNS */}
          <div className="tech-columns">
            {columns.map((col) => (
              <div
                key={col.title}
                className={`tech-column ${
                  col.highlight ? "highlight" : ""
                }`}
              >
                {col.cards.map((card) => (
                  <div className="tech-card" key={card.title}>

                    <div className="tech-card-title">
                      {card.title}
                    </div>

                    <div className="tech-card-body">
                      {card.items.map(([name, image]) => (
                        <div className="tech-item" key={name}>
                          <img src={image} alt={name} />
                          <span>{name}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                ))}
              </div>
            ))}
          </div>

        </div>
      </div>

      <style>{`

        /* MAIN SECTION */
        .tech-map {
          background: transparent;
          padding: 80px 20px;
          overflow: hidden;
          font-family: Arial, sans-serif;
        }

        .tech-heading {
          text-align: center;
          margin-bottom: 50px;
        }

        .tech-heading span {
          color: #087c9b;
          font-size: 12px;
          letter-spacing: 4px;
          font-weight: bold;
        }

        .tech-heading h2 {
          color: #153b4b;
          font-size: 36px;
          margin: 12px 0;
          font-weight: 700;
        }

        .tech-heading p {
          color: #71818a;
          font-size: 14px;
        }

        /* SCROLL */
        .tech-scroll {
          width: 100%;
          overflow-x: auto;
          padding-bottom: 20px;
        }

        .tech-board {
          width: 1200px;
          min-height: 650px;
          margin: auto;
          position: relative;
        }

        /* CONNECTION LINES */
        .tech-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 650px;
          z-index: 0;
          pointer-events: none;
        }

        /* ARROW HEADERS */
        .tech-headers {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 5px;
          position: relative;
          z-index: 2;
        }

        .tech-arrow {
          height: 43px;
          background: #087b9b;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: bold;

          clip-path: polygon(
            0 0,
            88% 0,
            100% 50%,
            88% 100%,
            0 100%,
            12% 50%
          );
        }

        /* COLUMNS */
        .tech-columns {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 14px;
          margin-top: 30px;
          align-items: start;
          position: relative;
          z-index: 2;
        }

        .tech-column {
          display: flex;
          flex-direction: column;
          gap: 14px;
          min-width: 0;
        }

        /* HIGHLIGHT COLUMN */
        .tech-column.highlight {
          border: 3px solid #39a9d0;
          border-radius: 8px;
          padding: 5px;
          margin-top: -12px;
          background: transparent;
        }

        /* CARD */
        .tech-card {
          background: transparent;
          border: 2px solid #88aab7;
          border-radius: 7px;
          overflow: hidden;
        }

        .tech-card-title {
          background: #086b88;
          color: white;
          font-size: 11px;
          font-weight: bold;
          text-align: center;
          padding: 9px 3px;
        }

        .tech-card-body {
          padding: 6px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          background: transparent;
        }

        /* TECHNOLOGY ITEMS */
        .tech-item {
          min-height: 43px;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 5px;

          border: 1px solid #7198a7;
          border-radius: 5px;

          background: transparent;
          transition: all .25s ease;
        }

        .tech-item:hover {
          background: rgba(8, 123, 155, 0.08);
          border-color: #087b9b;
          transform: translateX(3px);
        }

        .tech-item img {
          width: 38px;
          height: 30px;
          object-fit: contain;
          flex-shrink: 0;
        }

        .tech-item span {
          color: #dcdedf;
          font-size: 10px;
          font-weight: 600;
        }

        /* RESPONSIVE */
        @media(max-width: 768px) {
          .tech-map {
            padding: 55px 10px;
          }

          .tech-heading h2 {
            font-size: 27px;
          }

          .tech-scroll {
            overflow-x: auto;
          }

          .tech-board {
            margin-left: 0;
          }
        }

      `}</style>

    </section>
  );
};

export default Skills;

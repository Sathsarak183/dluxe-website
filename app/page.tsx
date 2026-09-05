"use client";

import { FormEvent, useEffect, useState } from "react";

type Screen =
  | "loading"
  | "companies"
  | "imata-loading"
  | "imata"
  | "imata-section-loading"
  | "dluxe-loading"
  | "dluxe"
  | "dluxe-section-loading";

type Section =
  | "home"
  | "about"
  | "services"
  | "projects"
  | "clients"
  | "contact";

type DluxeSection =
  | "home"
  | "about"
  | "vision"
  | "services"
  | "approach"
  | "portfolio"
  | "management"
  | "team"
  | "company"
  | "contact";

const projects = [
  {
    title: "Analytical Instruments Ltd",
    category: "Interior & Civil Works",
    location: "100, Elvitigala Road, Colombo 08",
    image: "/imata-project/analytical-instruments-01.jpg",
  },
  {
    title: "One Galle Face",
    category: "Renovations",
    location: "Colombo, Sri Lanka",
    image: "/imata-project/one-galle-face-01.jpg",
  },
  {
    title: "Shangri-La Residence",
    category: "Renovations",
    location: "Colombo, Sri Lanka",
    image: "/imata-project/shangri-la-residence-01.jpg",
  },
  {
    title: "TITP - Colombo",
    category: "Renovations",
    location: "Technical Junction, Colombo",
    image: "/imata-project/titp-colombo-01.jpg",
  },
  {
    title: "CPSTL",
    category: "Renovations",
    location: "Kolonnawa Installation, Colombo",
    image: "/imata-project/cpstl-kolonnawa-01.jpg",
  },
  {
    title: "Mr. Bagya Fernando's Residence",
    category: "Civil Construction Works",
    location: "Wattala, Sri Lanka",
    image: "/imata-project/bagya-fernando-residence-01.jpg",
  },
  {
    title: "Hendric Tea Stores",
    category: "Renovations",
    location: "Pettah, Colombo",
    image: "/imata-project/hendric-tea-stores-01.jpg",
  },
  {
    title: "Mr. Priyanath's Residence",
    category: "Civil Construction Works",
    location: "Piliyandala, Sri Lanka",
    image: "/imata-project/priyanath-residence-01.jpg",
  },
];

const clients = [
  {
    name: "Shangri-La Hotel",
    logo: "/imata-client-logos/shangri-la-hotel.png",
  },
  {
    name: "TRI-ZEN",
    logo: "/imata-client-logos/tri-zen.png",
  },
  {
    name: "One Galle Face",
    logo: "/imata-client-logos/one-galle-face.png",
  },
  {
    name: "Hendrick's Tea Stores",
    logo: "/imata-client-logos/hendricks-tea-stores.png",
  },
  {
    name: "Analytical Instruments Ltd",
    logo: "/imata-client-logos/analytical-instruments.png",
  },
  {
    name: "Client Logo",
    logo: "/imata-client-logos/client-center-lanka.png",
  },
  {
    name: "Alpha",
    logo: "/imata-client-logos/alpha.png",
  },
];

const services = [
  "Building Construction Works",
  "Renovation",
  "Building Interior Works",
  "Maintenance",
  "Electrical Works",
  "Plumbing Works",
  "QS Works & Costing",
];

const dluxeData = {
  name: "D’luxe Realtors",
  tagline: "Property. Expertise. Trust.",
  phone: "0777 637 240",
  phoneHref: "tel:+94777637240",
  whatsappHref: "https://wa.me/94777637240",
  email: "info@dluxerealtors.com",
  address: "No. 11, St. Stephen’s Mawatha, Rajagiriya Road, Rajagiriya",
  yearEstablished: "2025",

  about:
    "D’luxe Realtors is a professional real estate company dedicated to helping individuals, families, property owners and investors navigate the property market with confidence.",

  aboutTwo:
    "We provide a comprehensive range of real estate services, including property brokering, sales and rentals, property management, property marketing and property advisory and sourcing services. Our approach is built on understanding each client’s unique requirements and delivering solutions that are practical, transparent and tailored to their needs.",

  aboutThree:
    "At D’luxe Realtors, we believe that real estate is more than simply buying, selling or renting a property. It is about building trust, protecting our clients’ interests and creating long-term value.",

  aboutFour:
    "With a commitment to professionalism, personalised service and market-focused solutions, we strive to make every property transaction a smooth and rewarding experience.",

  vision:
    "To become a leading and trusted real estate brand, recognized for excellence, integrity and lasting value in every property relationship we build.",

  mission:
    "To deliver reliable, personalised and professional real estate services while creating meaningful opportunities for property owners, buyers, tenants and investors through trust, expertise and long-term relationships.",

  approachIntro:
    "We believe that every client and every property is different. Our approach focuses on listening carefully, understanding individual requirements and providing clear, practical guidance throughout the process.",

  managementIntro:
    "Our property management service is designed to give property owners greater convenience and confidence while their investments are being managed. We can coordinate key day-to-day requirements and act as a professional point of contact between owners, tenants and relevant service providers.",

  teamName: "Mr. Dhanusha Perera",
  teamRole: "Manager – Sales & Marketing",

  teamBioOne:
    "With over a decade of experience in the sales industry, Dhanusha Perera brings extensive expertise in sales, customer relationship management and client engagement to D’luxe Realtors.",

  teamBioTwo:
    "His strong customer-handling skills and customer-oriented mindset have been central to his professional journey. He places great emphasis on understanding clients’ requirements, building lasting relationships and providing solutions that are aligned with their individual needs.",

  teamBioThree:
    "At D’luxe Realtors, Dhanusha oversees sales and marketing, bringing his wealth of industry experience to property sales, leasing, client consultation and business development. His professional approach, communication skills and commitment to customer satisfaction support the company’s vision of delivering a trusted and seamless real estate experience.",

  teamBioFour:
    "He holds a Master of Business Administration (MBA) with Distinction in Marketing from Wrexham University, UK, complementing his extensive practical experience in sales and marketing.",
};

const dluxeServices = [
  [
    "01",
    "Property Brokering",
    "Professional assistance in connecting property owners and prospective buyers or tenants.",
  ],
  [
    "02",
    "Property Sales & Purchases",
    "Support throughout the property transaction process, from property matching and negotiations to completion.",
  ],
  [
    "03",
    "Property Rentals & Leasing",
    "Helping property owners find suitable tenants and helping clients find properties that meet their requirements.",
  ],
  [
    "04",
    "Property Management",
    "Ongoing coordination and oversight to help property owners maintain and manage their investments efficiently.",
  ],
  [
    "05",
    "Property Marketing",
    "Strategic presentation and promotion of properties to reach suitable prospective clients.",
  ],
  [
    "06",
    "Property Advisory & Sourcing",
    "Assistance in identifying suitable property opportunities based on client requirements and objectives.",
  ],
];

const dluxeApproach = [
  "Personalised attention to every client",
  "Clear and transparent communication",
  "Professional property presentation and marketing",
  "Focused matching of properties with client requirements",
  "Support throughout the transaction and beyond",
  "Building long-term relationships based on trust",
];

const dluxePortfolio = [
  "Residential Properties",
  "Apartments",
  "Lands",
  "Commercial Properties",
  "Luxury / Investment Properties",
];

const dluxeManagement = [
  "Tenant coordination",
  "Rent and lease administration",
  "Maintenance and repair coordination",
  "Property inspections",
  "Tenant sourcing and property marketing",
  "General property oversight",
];

export default function Home() {
  const [screen, setScreen] = useState<Screen>("loading");
  const [section, setSection] = useState<Section>("home");
  const [dluxeSection, setDluxeSection] =
    useState<DluxeSection>("home");

  const [quoteOpen, setQuoteOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dluxeMenuOpen, setDluxeMenuOpen] = useState(false);

  useEffect(() => {
    if (
      screen !== "loading" &&
      screen !== "imata-loading" &&
      screen !== "imata-section-loading" &&
      screen !== "dluxe-loading" &&
      screen !== "dluxe-section-loading"
    ) {
      return;
    }

    const timer = window.setTimeout(() => {
      if (screen === "loading") {
        setScreen("companies");
        return;
      }

      if (screen === "imata-loading") {
        setScreen("imata");
        setSection("home");
        window.scrollTo(0, 0);
        return;
      }

      if (screen === "imata-section-loading") {
        setScreen("imata");
        window.scrollTo(0, 0);
        return;
      }

      if (screen === "dluxe-loading") {
        setScreen("dluxe");
        setDluxeSection("home");
        window.scrollTo(0, 0);
        return;
      }

      if (screen === "dluxe-section-loading") {
        setScreen("dluxe");
        window.scrollTo(0, 0);
      }
    }, 3000);

    return () => window.clearTimeout(timer);
  }, [screen]);

  const scrollToSection = (id: Section) => {
    setQuoteOpen(false);
    setMenuOpen(false);
    setSection(id);

    window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  const scrollToDluxeSection = (id: DluxeSection) => {
    setDluxeMenuOpen(false);
    setDluxeSection(id);

    const targetId = id === "home" ? "dluxe-home" : id;

    window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  const backToImataMenu = () => {
    setQuoteOpen(false);
    setMenuOpen(false);
    setSection("home");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const backToDluxeMenu = () => {
    setQuoteOpen(false);
    setDluxeMenuOpen(false);
    setDluxeSection("home");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const submitQuote = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const service = String(data.get("service") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(
      `IMATA Get a Quote - ${name}`,
    );

    const body = encodeURIComponent(
      `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone}\n` +
        `Service: ${service}\n\n` +
        `Project Details:\n${message}`,
    );

    window.location.href =
      `mailto:damitharch@gmail.com?subject=${subject}&body=${body}`;
  };

  if (
    screen === "loading" ||
    screen === "imata-loading" ||
    screen === "imata-section-loading" ||
    screen === "dluxe-loading" ||
    screen === "dluxe-section-loading"
  ) {
    return (
      <main className="loading-screen">
        <div className="loading-glow loading-glow-one" />
        <div className="loading-glow loading-glow-two" />

        <div className="loading-center">
          <div className="logo-loader">
            <img
              src="/Logo.png"
              alt="D'Luxe Logo"
              className="main-logo"
            />

            <svg
              className="logo-border-animation"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <rect
                className="logo-border-light"
                x="2"
                y="2"
                width="96"
                height="96"
                pathLength="100"
              />
            </svg>
          </div>

          {(screen === "imata-loading" ||
            screen === "imata-section-loading") && (
            <div className="loading-company-title">
              IMATA Construction Engineering Pvt Ltd
            </div>
          )}

          {(screen === "dluxe-loading" ||
            screen === "dluxe-section-loading") && (
            <div className="loading-company-title">
              D&apos;Luxe Realtors
            </div>
          )}
        </div>
      </main>
    );
  }

  if (screen === "companies") {
    return (
      <main className="company-selection">
        <div className="selection-glow selection-glow-one" />
        <div className="selection-glow selection-glow-two" />

        <div className="selection-container">
          <div className="selection-logo">
            <img
              src="/Logo.png"
              alt="D'Luxe Logo"
              className="main-logo"
            />
          </div>

          <div className="welcome-text">WELCOME TO</div>

          <div className="company-options">
            <button
              type="button"
              className="company-card"
              onClick={() => setScreen("imata-loading")}
            >
              <span className="company-card-number">01</span>

              <span className="company-card-title">
                IMATA Construction
                <br />
                Engineering Pvt Ltd
              </span>

              <span className="company-card-enter">
                ENTER <span>→</span>
              </span>
            </button>

            <button
              type="button"
              className="company-card"
              onClick={() => setScreen("dluxe-loading")}
            >
              <span className="company-card-number">02</span>

              <span className="company-card-title">
                D&apos;Luxe Realtors
              </span>

              <span className="company-card-enter">
                ENTER <span>→</span>
              </span>
            </button>
          </div>
        </div>
      </main>
    );
  }

  if (screen === "imata") {
    return (
      <main className="imata-site">
        <header className="imata-header">
          <div className="imata-header-inner">
            <button
              type="button"
              className="imata-back"
              onClick={backToImataMenu}
            >
              <span>←</span>
              Back
            </button>

            <button
              type="button"
              className="imata-logo-text"
              onClick={() => scrollToSection("home")}
            >
              <strong>IMATA</strong>
              <small>CONSTRUCTION ENGINEERING</small>
            </button>

            <button
              type="button"
              className={`top-menu-button ${
                menuOpen ? "is-open" : ""
              }`}
              onClick={() => setMenuOpen((value) => !value)}
            >
              <span className="top-menu-lines">
                <i />
                <i />
              </span>

              <span>{menuOpen ? "CLOSE" : "MENU"}</span>
            </button>

            <button
              type="button"
              className="quote-button"
              onClick={() => setQuoteOpen(true)}
            >
              Get a Quote <span>↗</span>
            </button>
          </div>
        </header>

        <div
          id="imata-top-menu"
          className={`top-menu-panel ${
            menuOpen ? "is-open" : ""
          }`}
        >
          <div className="top-menu-panel-inner">
            <div className="top-menu-heading">
              <span>IMATA</span>
              <strong>EXPLORE</strong>
            </div>

            <nav className="top-menu-links">
              {(
                [
                  ["home", "HOME"],
                  ["about", "ABOUT"],
                  ["services", "SERVICES"],
                  ["projects", "PROJECTS"],
                  ["clients", "CLIENTS"],
                  ["contact", "CONTACT"],
                ] as [Section, string][]
              ).map(([id, label], index) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => scrollToSection(id)}
                >
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <strong>{label}</strong>
                  <i>↗</i>
                </button>
              ))}
            </nav>
          </div>
        </div>

        <section id="home" className="imata-new-home">
          <div className="imata-home-simple-center">
            <h1 className="imata-home-company-reveal">
              IMATA CONSTRUCTION
              <br />
              ENGINEERING (PVT) LTD
            </h1>
          </div>
        </section>

        <section
          id="about"
          className="content-section about-section"
        >
          <div className="section-heading-only">ABOUT US</div>

          <div className="about-text-center">
            <p>
              IMATA Construction Engineering (Pvt) Ltd is a small,
              independently owned Design and Build company based in
              Colombo, Sri Lanka.
            </p>

            <p>
              We specialize in construction, renovation, building
              interior works and maintenance.
            </p>

            <p>
              We understand the challenges of construction,
              renovation, building interior works and maintenance in
              order to provide a hygienically sound space to live and
              work in an urban environment.
            </p>

            <p>
              We add value by creating ideal outcomes for our
              clientele, where they love the transformation of their
              property and maximize the financial returns achieved.
            </p>

            <p>
              Our philosophy of honesty and integrity ensures each
              project is carried out with a focus on quality,
              innovation, sustainability, safety and attention to
              detail.
            </p>
          </div>

          <div className="about-bottom">
            <div>
              <span>QUALITY</span>
              <strong>01</strong>
            </div>

            <div>
              <span>SAFETY</span>
              <strong>02</strong>
            </div>

            <div>
              <span>TRUST</span>
              <strong>03</strong>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="content-section services-section"
        >
          <div className="section-heading-only">SERVICES</div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-item" key={service}>
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h2>{service}</h2>

                <span className="service-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>

        <section
          id="projects"
          className="content-section projects-section"
        >
          <div className="section-heading-only">PROJECTS</div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article
                className="project-card-imata"
                key={project.title}
              >
                <div className="project-photo">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="eager"
                    decoding="async"
                  />

                  <div className="project-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                <div className="project-details">
                  <div>
                    <span>{project.category}</span>
                    <h2>{project.title}</h2>
                  </div>

                  <p>{project.location}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="clients"
          className="content-section clients-section"
        >
          <div className="section-heading-only">CLIENTS</div>

          <p className="clients-intro">
            A selection of clients and project partners represented in
            the IMATA company profile.
          </p>

          <div className="clients-grid">
            {clients.map((client) => (
              <article
                className="client-card"
                key={client.logo}
              >
                <div className="client-logo-wrap">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="client-logo"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                  />
                </div>

                <div className="client-name">
                  {client.name}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-page">
          <div className="simple-contact-heading">CONTACT</div>

          <div className="contact-details">
            <div className="contact-block">
              <small>ADDRESS</small>

              <p>
                #306, Rajagiriya Road,
                <br />
                Rajagiriya,
                <br />
                Sri Lanka.
              </p>
            </div>

            <div className="contact-block">
              <small>CALL US</small>

              <a href="tel:+94707465761">
                +94 70 746 5761
              </a>

              <a href="tel:+94712846098">
                +94 71 284 6098
              </a>

              <a href="tel:+94112872350">
                +94 11 287 2350
              </a>
            </div>

            <div className="contact-block">
              <small>EMAIL</small>

              <a href="mailto:damitharch@gmail.com">
                damitharch@gmail.com
              </a>

              <a href="mailto:damith@imata.lk">
                damith@imata.lk
              </a>
            </div>
          </div>

          <div className="contact-actions">
            <a
              href="https://wa.me/94707465761"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button"
            >
              <span>◉</span>
              WHATSAPP US
              <span>↗</span>
            </a>

            <button
              type="button"
              className="contact-quote-button"
              onClick={() => setQuoteOpen(true)}
            >
              GET A QUOTE <span>↗</span>
            </button>
          </div>
        </section>

        <footer className="imata-footer">
          <span>
            IMATA CONSTRUCTION ENGINEERING (PVT) LTD
          </span>

          <span>COLOMBO • SRI LANKA</span>
        </footer>

        {quoteOpen && (
          <div
            className="quote-overlay"
            onMouseDown={() => setQuoteOpen(false)}
          >
            <div
              className="quote-modal"
              onMouseDown={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="quote-close"
                onClick={() => setQuoteOpen(false)}
              >
                ×
              </button>

              <div className="quote-header">
                <span>IMATA</span>
                <h2>Get a Quote</h2>
                <p>
                  Tell us about your project and we&apos;ll get back
                  to you.
                </p>
              </div>

              <form
                className="quote-form"
                onSubmit={submitQuote}
              >
                <div className="quote-row">
                  <label>
                    NAME

                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                    />
                  </label>

                  <label>
                    PHONE

                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+94..."
                    />
                  </label>
                </div>

                <label>
                  EMAIL

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                  />
                </label>

                <label>
                  SERVICE

                  <select
                    name="service"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    {services.map((service) => (
                      <option
                        key={service}
                        value={service}
                      >
                        {service}
                      </option>
                    ))}
                  </select>
                </label>

                <label>
                  PROJECT DETAILS

                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us briefly about your project..."
                  />
                </label>

                <button
                  type="submit"
                  className="quote-submit"
                >
                  SEND REQUEST <span>→</span>
                </button>

                <p className="quote-email-note">
                  Your request will open an email to
                  <br />
                  damitharch@gmail.com
                </p>
              </form>
            </div>
          </div>
        )}
      </main>
    );
  }

  return (
    <main
      className={`dluxe-site dluxe-section-${dluxeSection}`}
    >
      <header className="dluxe-header dluxe-fixed-header">
        <button
          type="button"
          onClick={backToDluxeMenu}
          className="dluxe-back"
        >
          <span>←</span>
          Back
        </button>

        <div className="dluxe-header-brand">
          <strong>D&apos;LUXE REALTORS</strong>
          <small>PROPERTY • EXPERTISE • TRUST</small>
        </div>

        <button
          type="button"
          className={`top-menu-button dluxe-top-menu-button ${
            dluxeMenuOpen ? "is-open" : ""
          }`}
          onClick={() =>
            setDluxeMenuOpen((value) => !value)
          }
        >
          <span className="top-menu-lines">
            <i />
            <i />
          </span>

          <span>
            {dluxeMenuOpen ? "CLOSE" : "MENU"}
          </span>
        </button>

        <div className="dluxe-header-actions">
          <a
            href={dluxeData.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="dluxe-header-contact dluxe-whatsapp-button"
          >
            <span className="whatsapp-dot">●</span>
            WhatsApp
            <span>↗</span>
          </a>

          <a
            href={`mailto:${dluxeData.email}?subject=Get%20a%20Quote`}
            className="dluxe-quote-button"
          >
            Get a Quote <span>→</span>
          </a>
        </div>
      </header>

      <div
        id="dluxe-top-menu"
        className={`top-menu-panel dluxe-top-menu-panel ${
          dluxeMenuOpen ? "is-open" : ""
        }`}
      >
        <div className="top-menu-panel-inner">
          <div className="top-menu-heading">
            <span>D&apos;LUXE REALTORS</span>
            <strong>EXPLORE</strong>
          </div>

          <nav className="top-menu-links">
            {(
              [
                ["home", "HOME"],
                ["about", "ABOUT"],
                ["vision", "VISION & MISSION"],
                ["services", "SERVICES"],
                ["approach", "OUR APPROACH"],
                ["portfolio", "PROPERTY PORTFOLIO"],
                ["management", "PROPERTY MANAGEMENT"],
                ["team", "OUR TEAM"],
                ["company", "COMPANY INFO"],
                ["contact", "CONTACT"],
              ] as [DluxeSection, string][]
            ).map(([id, label], index) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollToDluxeSection(id)}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>{label}</strong>

                <i>↗</i>
              </button>
            ))}
          </nav>
        </div>
      </div>

      <section
        id="dluxe-home"
        className="dluxe-section dluxe-home-section"
      >
        <div className="dluxe-home-glow dluxe-home-glow-one" />
        <div className="dluxe-home-glow dluxe-home-glow-two" />

        <div className="dluxe-home-content">
          <p className="dluxe-eyebrow">
            REAL ESTATE • SRI LANKA • EST. 2025
          </p>

          <h1>
            PROPERTY.
            <br />
            <span>EXPERTISE.</span>
            <br />
            TRUST.
          </h1>

          <p className="dluxe-home-copy">
            Connecting people with the right property opportunities.
          </p>
        </div>
      </section>

      <section
        id="about"
        className="dluxe-section dluxe-about-section"
      >
        <div className="dluxe-section-inner">
          <div className="dluxe-section-label">
            01 / ABOUT D&apos;LUXE REALTORS
          </div>

          <div className="dluxe-two-column">
            <div>
              <h2>
                REAL ESTATE IS ABOUT MORE THAN PROPERTY.
              </h2>
            </div>

            <div className="dluxe-body-copy">
              <p>{dluxeData.about}</p>
              <p>{dluxeData.aboutTwo}</p>
              <p>{dluxeData.aboutThree}</p>
              <p>{dluxeData.aboutFour}</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="vision"
        className="dluxe-section dluxe-light-section"
      >
        <div className="dluxe-section-inner">
          <div className="dluxe-section-label">
            02 / OUR VISION &amp; MISSION
          </div>

          <div className="dluxe-vision-grid">
            <article>
              <span>VISION</span>
              <h2>TRUST THAT LASTS.</h2>
              <p>{dluxeData.vision}</p>
            </article>

            <article>
              <span>MISSION</span>
              <h2>VALUE THROUGH EXPERTISE.</h2>
              <p>{dluxeData.mission}</p>
            </article>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="dluxe-section dluxe-purple-section"
      >
        <div className="dluxe-section-inner">
          <div className="dluxe-section-label">
            03 / OUR SERVICES
          </div>

          <div className="dluxe-services-list">
            {dluxeServices.map(
              ([number, title, description]) => (
                <article
                  key={number}
                  className="dluxe-service-row"
                >
                  <span>{number}</span>

                  <div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                  </div>

                  <i>↗</i>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      <section
        id="approach"
        className="dluxe-section dluxe-light-section"
      >
        <div className="dluxe-section-inner">
          <div className="dluxe-section-label">
            04 / OUR APPROACH
          </div>

          <div className="dluxe-approach-grid">
            <div>
              <h2>
                EVERY CLIENT.
                <br />
                <span>EVERY PROPERTY.</span>
                <br />
                DIFFERENT.
              </h2>
            </div>

            <div>
              <p className="dluxe-lead">
                {dluxeData.approachIntro}
              </p>

              <div className="dluxe-check-list">
                {dluxeApproach.map((item, index) => (
                  <div key={item}>
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="portfolio"
        className="dluxe-section dluxe-portfolio-section"
      >
        <div className="dluxe-section-inner">
          <div className="dluxe-section-label">
            06 / OUR PROPERTY PORTFOLIO
          </div>

          <div className="dluxe-portfolio-heading">
            <h2>
              FIND THE RIGHT
              <br />
              <span>OPPORTUNITY.</span>
            </h2>
          </div>

          <div className="dluxe-portfolio-grid">
            {dluxePortfolio.map((item, index) => (
              <article key={item}>
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{item}</h3>
                <i>↗</i>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="management"
        className="dluxe-section dluxe-purple-section"
      >
        <div className="dluxe-section-inner">
          <div className="dluxe-section-label">
            07 / PROPERTY MANAGEMENT
          </div>

          <div className="dluxe-management-grid">
            <div>
              <h2>
                GREATER
                <br />
                <span>CONVENIENCE.</span>
                <br />
                CONFIDENCE.
              </h2>
            </div>

            <div>
              <p className="dluxe-lead">
                {dluxeData.managementIntro}
              </p>

              <div className="dluxe-check-list">
                {dluxeManagement.map((item, index) => (
                  <div key={item}>
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="team"
        className="dluxe-section dluxe-light-section"
      >
        <div className="dluxe-section-inner">
          <div className="dluxe-section-label">
            08 / OUR TEAM
          </div>

          <div className="dluxe-team-grid">
            <div>
              <p className="dluxe-team-number">01</p>

              <h2>{dluxeData.teamName}</h2>

              <p className="dluxe-team-role">
                {dluxeData.teamRole}
              </p>
            </div>

            <div className="dluxe-body-copy">
              <p>{dluxeData.teamBioOne}</p>
              <p>{dluxeData.teamBioTwo}</p>
              <p>{dluxeData.teamBioThree}</p>
              <p>{dluxeData.teamBioFour}</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="company"
        className="dluxe-section dluxe-company-section"
      >
        <div className="dluxe-section-inner">
          <div className="dluxe-section-label">
            09 / COMPANY INFORMATION
          </div>

          <div className="dluxe-company-table">
            <div>
              <span>Company Name</span>
              <strong>{dluxeData.name}</strong>
            </div>

            <div>
              <span>Telephone / WhatsApp</span>
              <strong>{dluxeData.phone}</strong>
            </div>

            <div>
              <span>Office Address</span>
              <strong>{dluxeData.address}</strong>
            </div>

            <div>
              <span>Email</span>
              <strong>{dluxeData.email}</strong>
            </div>

            <div>
              <span>Year Established</span>
              <strong>{dluxeData.yearEstablished}</strong>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="dluxe-section dluxe-contact-section"
      >
        <div className="dluxe-section-inner">
          <div className="dluxe-section-label">
            10 / CONTACT US
          </div>

          <div className="dluxe-contact-heading">
            <h2>
              LET&apos;S FIND
              <br />
              <span>YOUR PLACE.</span>
            </h2>

            <p>{dluxeData.tagline}</p>
          </div>

          <div className="dluxe-contact-grid">
            <div>
              <small>CALL / WHATSAPP</small>

              <a href={dluxeData.phoneHref}>
                {dluxeData.phone}
              </a>
            </div>

            <div>
              <small>EMAIL</small>

              <a href={`mailto:${dluxeData.email}`}>
                {dluxeData.email}
              </a>
            </div>

            <div>
              <small>OFFICE</small>
              <p>{dluxeData.address}</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="dluxe-footer">
        <span>D&apos;LUXE REALTORS</span>
        <span>PROPERTY. EXPERTISE. TRUST.</span>
        <span>RAJAGIRIYA • SRI LANKA</span>
      </footer>
    </main>
  );
}
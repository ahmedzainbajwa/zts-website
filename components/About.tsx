export default function About() {
  return (
    <section
      id="about"
      style={{
        background: "#0A1628",
        padding: "100px 0",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Top Label */}
        <div className="section-tag" style={{ marginBottom: "20px" }}>
          About ZTS Telecom
        </div>

        {/* Section heading */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
            marginBottom: "80px",
          }}
          className="about-grid"
        >
          <div>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "#F2EDE5",
                lineHeight: 1.1,
              }}
            >
              Built for Serious Buyers.{" "}
              <span style={{ color: "#C9E219" }}>Trusted by Many.</span>
            </h2>
          </div>
          <div>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "rgba(242,237,229,0.65)",
                marginBottom: "24px",
              }}
            >
              ZTS Telecom FZ-LLC is a government-licensed mobile phone trading
              company operating out of the Ras Al Khaimah Economic Zone (RAKEZ)
              Freezone, UAE. We specialize in sourcing, trading, and delivering
              brand new and certified pre-owned smartphones from every major brand.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "rgba(242,237,229,0.65)",
              }}
            >
              With deep roots in the UAE telecom market and strong supply chains
              reaching across Pakistan, we bridge two markets with trust,
              transparency, and speed.
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
            marginBottom: "80px",
          }}
          className="about-cards"
        >
          {[
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
              ),
              title: "Government Licensed",
              body: "Officially registered with Ras Al Khaimah Economic Zone Authority (RAKEZ) with three active licences — E-Commerce, Commercial, and General Trading.",
            },
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              ),
              title: "UAE & Pakistan Reach",
              body: "Our main operations run from the UAE with nationwide delivery coverage. We also serve customers across all major cities in Pakistan.",
            },
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polyline points="20 6 9 17 4 12" />
                  <path d="M3 11l2-2m0 0l4-4m-4 4 4 4m6-8l2 2m0 0l4 4m-4-4 4-4" />
                </svg>
              ),
              title: "New & Pre-Owned",
              body: "We carry the latest flagship devices fresh from manufacturers alongside carefully graded certified pre-owned phones at competitive prices.",
            },
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.23h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              ),
              title: "Direct WhatsApp Orders",
              body: "No complicated checkout. Simply WhatsApp us your requirement and we'll handle everything from sourcing to delivery with full transparency.",
            },
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              ),
              title: "All Major Brands",
              body: "Apple, Samsung, Google, OnePlus, Xiaomi, Huawei, Oppo, Sony, Motorola, Nothing and many more — if it's a notable brand, we carry it.",
            },
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              ),
              title: "Customer-First Approach",
              body: "We believe in building long-term relationships. Every customer gets honest advice, genuine products, and transparent pricing.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="gradient-border-card"
              style={{
                padding: "28px",
                borderRadius: "16px",
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.07)",
                transition: "all 0.3s ease",
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  background: "rgba(201,226,25,0.1)",
                  border: "1px solid rgba(201,226,25,0.2)",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#C9E219",
                  marginBottom: "20px",
                }}
              >
                {card.icon}
              </div>
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#F2EDE5",
                  marginBottom: "10px",
                  fontFamily: "'Sora', sans-serif",
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "rgba(242,237,229,0.55)",
                  lineHeight: 1.7,
                }}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>

        {/* Coverage Countries */}
        <div
          style={{
            background: "rgba(201,226,25,0.05)",
            border: "1px solid rgba(201,226,25,0.15)",
            borderRadius: "20px",
            padding: "48px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "center",
          }}
          className="coverage-section"
        >
          <div>
            <div className="section-tag" style={{ marginBottom: "16px" }}>Coverage</div>
            <h3
              className="font-display"
              style={{
                fontSize: "1.8rem",
                fontWeight: 800,
                color: "#F2EDE5",
                letterSpacing: "-0.02em",
                marginBottom: "20px",
              }}
            >
              Two Countries.
              <br />
              <span style={{ color: "#C9E219" }}>One Team.</span>
            </h3>
            <p style={{ color: "rgba(242,237,229,0.6)", fontSize: "0.95rem", lineHeight: 1.7 }}>
              Whether you&apos;re in Dubai, Ras Al Khaimah, Abu Dhabi, Sharjah, or anywhere
              across Pakistan — ZTS Telecom delivers to your door.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              {
                country: "United Arab Emirates",
                flag: "🇦🇪",
                desc: "Main operations · Physical office in RAK Freezone",
                cities: ["Dubai", "Abu Dhabi", "Sharjah", "RAK", "Ajman", "Fujairah"],
              },
              {
                country: "Pakistan",
                flag: "🇵🇰",
                desc: "Nationwide delivery coverage",
                cities: ["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Peshawar", "All cities"],
              },
            ].map((country) => (
              <div
                key={country.country}
                style={{
                  background: "rgba(10,22,40,0.6)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "12px",
                  padding: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "12px",
                  }}
                >
                  <span style={{ fontSize: "1.5rem" }}>{country.flag}</span>
                  <div>
                    <div
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        color: "#F2EDE5",
                        fontFamily: "'Sora', sans-serif",
                      }}
                    >
                      {country.country}
                    </div>
                    <div style={{ fontSize: "0.72rem", color: "rgba(242,237,229,0.45)" }}>
                      {country.desc}
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  {country.cities.map((city) => (
                    <span
                      key={city}
                      style={{
                        padding: "3px 10px",
                        background: "rgba(201,226,25,0.08)",
                        border: "1px solid rgba(201,226,25,0.15)",
                        borderRadius: "4px",
                        fontSize: "0.68rem",
                        fontWeight: 600,
                        color: "#C9E219",
                      }}
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .about-cards { grid-template-columns: 1fr !important; }
          .coverage-section { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .about-cards { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}

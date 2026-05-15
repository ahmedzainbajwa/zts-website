export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Browse Our Catalog",
      desc: "Explore our wide range of smartphones by brand. From the latest iPhone to flagship Androids — find your ideal device.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Contact via WhatsApp",
      desc: "Simply WhatsApp us with the model you want. Our team responds fast with price, availability, and condition details.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
    },
    {
      number: "03",
      title: "Confirm & Pay",
      desc: "We confirm your order details, agree on pricing, and once you're happy — payment is arranged securely and conveniently.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
          <line x1="1" y1="10" x2="23" y2="10" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Delivered to You",
      desc: "We ship directly to your address across UAE and Pakistan. Track your order and receive your phone in perfect condition.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
    },
  ];

  return (
    <section
      style={{
        background: "#0D2144",
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
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <div className="section-tag" style={{ justifyContent: "center" }}>
            How It Works
          </div>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#F2EDE5",
              marginTop: "16px",
              marginBottom: "16px",
            }}
          >
            Order in{" "}
            <span style={{ color: "#C9E219" }}>4 Simple Steps</span>
          </h2>
          <p
            style={{
              color: "rgba(242,237,229,0.55)",
              fontSize: "1rem",
              maxWidth: "440px",
              margin: "0 auto",
            }}
          >
            No complicated checkout. No hidden fees. Just a smooth, transparent process from browsing to delivery.
          </p>
        </div>

        {/* Steps Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
            position: "relative",
          }}
          className="steps-grid"
        >
          {/* Connector line (desktop only) */}
          <div
            style={{
              position: "absolute",
              top: "52px",
              left: "12.5%",
              right: "12.5%",
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(201,226,25,0.3), rgba(201,226,25,0.3), rgba(201,226,25,0.3), transparent)",
              zIndex: 0,
            }}
            className="connector-line"
          />

          {steps.map((step, i) => (
            <div
              key={step.number}
              style={{
                position: "relative",
                zIndex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              {/* Step number circle */}
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  background: i === 1
                    ? "#C9E219"
                    : "rgba(10,22,40,0.8)",
                  border: i === 1
                    ? "none"
                    : "2px solid rgba(201,226,25,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: i === 1 ? "#0A1628" : "#C9E219",
                  marginBottom: "24px",
                  flexShrink: 0,
                  boxShadow: i === 1
                    ? "0 0 30px rgba(201,226,25,0.3)"
                    : "none",
                }}
              >
                {step.icon}
              </div>

              {/* Step number badge */}
              <div
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 800,
                  letterSpacing: "0.15em",
                  color: "#C9E219",
                  marginBottom: "12px",
                  fontFamily: "'Sora', sans-serif",
                }}
              >
                STEP {step.number}
              </div>

              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#F2EDE5",
                  marginBottom: "12px",
                  fontFamily: "'Sora', sans-serif",
                }}
              >
                {step.title}
              </h3>

              <p
                style={{
                  fontSize: "0.85rem",
                  color: "rgba(242,237,229,0.5)",
                  lineHeight: 1.7,
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            textAlign: "center",
            marginTop: "64px",
          }}
        >
          <a
            href="https://wa.me/971545017544"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-lime"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "18px 36px",
              borderRadius: "10px",
              fontSize: "1rem",
              textDecoration: "none",
              fontFamily: "inherit",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Start Your Order Now
          </a>
          <p style={{ color: "rgba(242,237,229,0.35)", fontSize: "0.8rem", marginTop: "12px" }}>
            Average response time: under 30 minutes
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .steps-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .connector-line { display: none !important; }
        }
        @media (max-width: 480px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

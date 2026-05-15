export default function LicenseSection() {
  const licences = [
    {
      type: "Commercial Licence",
      number: "5034065",
      activity: "Mobile Phones & Accessories Trading",
      color: "#C9E219",
    },
    {
      type: "E-Commerce Licence",
      number: "45031012",
      activity: "Products and Services E-Trading",
      color: "#7fa8e8",
    },
    {
      type: "General Trading Licence",
      number: "7013988",
      activity: "General Trading",
      color: "#ffa500",
    },
  ];

  return (
    <section
      id="license"
      style={{
        background: "#0A1628",
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "500px",
          height: "500px",
          background: "radial-gradient(ellipse at top right, rgba(201,226,25,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
            marginBottom: "64px",
          }}
          className="license-header"
        >
          <div>
            <div className="section-tag" style={{ marginBottom: "20px" }}>
              Verified & Licensed
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "#F2EDE5",
                lineHeight: 1.1,
                marginBottom: "20px",
              }}
            >
              Trade with Confidence.{" "}
              <span style={{ color: "#C9E219" }}>We&apos;re Fully Legal.</span>
            </h2>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.7,
                color: "rgba(242,237,229,0.6)",
              }}
            >
              ZTS Telecom FZ-LLC holds three active government licences issued by
              the Ras Al Khaimah Economic Zone Authority (RAKEZ) — one of the
              UAE&apos;s most prestigious free zones. All licences are valid and
              verifiable.
            </p>
          </div>

          {/* RAKEZ Verification Card */}
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(201,226,25,0.2)",
              borderRadius: "20px",
              padding: "32px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "64px",
                height: "64px",
                background: "rgba(201,226,25,0.1)",
                border: "1px solid rgba(201,226,25,0.3)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9E219" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 10" />
              </svg>
            </div>
            <div
              className="font-display"
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: "#F2EDE5",
                marginBottom: "8px",
              }}
            >
              Issued by RAKEZ
            </div>
            <div
              style={{
                fontSize: "0.8rem",
                color: "rgba(242,237,229,0.5)",
                marginBottom: "20px",
              }}
            >
              Ras Al Khaimah Economic Zone Authority
              <br />
              Government of Ras Al Khaimah, UAE
            </div>
            <div
              style={{
                background: "rgba(201,226,25,0.08)",
                border: "1px solid rgba(201,226,25,0.2)",
                borderRadius: "10px",
                padding: "14px",
                marginBottom: "12px",
              }}
            >
              <div style={{ fontSize: "0.65rem", color: "rgba(242,237,229,0.4)", marginBottom: "4px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Company Name
              </div>
              <div
                className="font-display"
                style={{ fontSize: "1rem", fontWeight: 700, color: "#C9E219" }}
              >
                ZTS Telecom FZ-LLC
              </div>
            </div>
            <div
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "10px",
                padding: "14px",
                marginBottom: "12px",
              }}
            >
              <div style={{ fontSize: "0.65rem", color: "rgba(242,237,229,0.4)", marginBottom: "4px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Issue Date
              </div>
              <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "#F2EDE5" }}>
                11 July 2025
              </div>
            </div>
            <div
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "10px",
                padding: "14px",
                marginBottom: "20px",
              }}
            >
              <div style={{ fontSize: "0.65rem", color: "rgba(242,237,229,0.4)", marginBottom: "4px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Expiry Date
              </div>
              <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "#F2EDE5" }}>
                10 July 2026
              </div>
            </div>
            <a
              href="/license.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 20px",
                border: "1px solid rgba(201,226,25,0.4)",
                borderRadius: "8px",
                fontSize: "0.8rem",
                fontWeight: 600,
                color: "#C9E219",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              className="view-license-btn"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              View Official Licence PDF
            </a>
          </div>
        </div>

        {/* Licence Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
          className="licence-cards"
        >
          {licences.map((lic) => (
            <div
              key={lic.number}
              style={{
                background: "rgba(255,255,255,0.025)",
                border: `1px solid ${lic.color}22`,
                borderRadius: "16px",
                padding: "28px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Top accent bar */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: lic.color,
                  borderRadius: "16px 16px 0 0",
                }}
              />

              {/* UAE Badge */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "20px",
                }}
              >
                <span style={{ fontSize: "1.2rem" }}>🇦🇪</span>
                <span
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    color: "rgba(242,237,229,0.4)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  RAKEZ Freezone · UAE
                </span>
              </div>

              <div
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  color: lic.color,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                {lic.type}
              </div>

              <div
                className="font-display"
                style={{
                  fontSize: "1.6rem",
                  fontWeight: 800,
                  color: "#F2EDE5",
                  letterSpacing: "0.05em",
                  marginBottom: "12px",
                }}
              >
                {lic.number}
              </div>

              <div
                style={{
                  fontSize: "0.8rem",
                  color: "rgba(242,237,229,0.5)",
                  lineHeight: 1.5,
                  marginBottom: "20px",
                }}
              >
                {lic.activity}
              </div>

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "5px 12px",
                  background: "rgba(39,174,96,0.1)",
                  border: "1px solid rgba(39,174,96,0.3)",
                  borderRadius: "20px",
                }}
              >
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#27ae60",
                  }}
                />
                <span
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    color: "#27ae60",
                    letterSpacing: "0.05em",
                  }}
                >
                  ACTIVE
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Note */}
        <div
          style={{
            marginTop: "32px",
            padding: "20px 24px",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9E219" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <p
            style={{
              fontSize: "0.82rem",
              color: "rgba(242,237,229,0.5)",
              flex: 1,
              minWidth: "240px",
            }}
          >
            All licences can be independently verified at{" "}
            <span style={{ color: "#C9E219", fontWeight: 600 }}>rak.force.com/Auth/</span>{" "}
            using Document Reference No.:{" "}
            <span style={{ color: "#F2EDE5", fontWeight: 600 }}>1428084-RUIb-DhVS-70517337</span>
          </p>
          <a
            href="http://rak.force.com/Auth/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.8rem",
              color: "#C9E219",
              textDecoration: "none",
              fontWeight: 600,
              whiteSpace: "nowrap",
            }}
          >
            Verify Now →
          </a>
        </div>
      </div>

      <style>{`
        .license-header {
          @media (max-width: 768px) {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
        .licence-cards {
          @media (max-width: 768px) {
            grid-template-columns: 1fr !important;
          }
        }
        .view-license-btn:hover {
          background: rgba(201,226,25,0.1) !important;
        }
        @media (max-width: 768px) {
          .license-header { grid-template-columns: 1fr !important; gap: 40px !important; }
          .licence-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

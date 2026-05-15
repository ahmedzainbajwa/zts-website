"use client";

import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Brands", href: "#brands" },
    { label: "Catalog", href: "#catalog" },
    { label: "About", href: "#about" },
    { label: "License", href: "#license" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer
      style={{
        background: "#060e1a",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "60px 0 0",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Main footer grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "60px",
            marginBottom: "48px",
          }}
          className="footer-grid"
        >
          {/* Brand Column */}
          <div>
            <div style={{ marginBottom: "20px" }}>
              <Image
                src="/logo.png"
                alt="ZTS Telecom"
                width={130}
                height={48}
                style={{
                  objectFit: "contain",
                  filter: "brightness(0) invert(1)",
                }}
              />
            </div>
            <p
              style={{
                fontSize: "0.875rem",
                color: "rgba(242,237,229,0.45)",
                lineHeight: 1.8,
                maxWidth: "320px",
                marginBottom: "24px",
              }}
            >
              ZTS Telecom FZ-LLC is a UAE government-licensed mobile phone trading
              company operating from the RAKEZ Freezone, Ras Al Khaimah. We deal
              in brand new and pre-owned smartphones across UAE and Pakistan.
            </p>

            {/* Licence badges */}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {[
                "E-Commerce Lic. #45031012",
                "Commercial Lic. #5034065",
              ].map((badge) => (
                <span
                  key={badge}
                  style={{
                    padding: "4px 10px",
                    background: "rgba(201,226,25,0.06)",
                    border: "1px solid rgba(201,226,25,0.15)",
                    borderRadius: "4px",
                    fontSize: "0.65rem",
                    fontWeight: 600,
                    color: "#C9E219",
                    letterSpacing: "0.03em",
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "rgba(242,237,229,0.4)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Navigation
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: "0.875rem",
                      color: "rgba(242,237,229,0.55)",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLAnchorElement).style.color = "#C9E219";
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLAnchorElement).style.color = "rgba(242,237,229,0.55)";
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "rgba(242,237,229,0.4)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Contact
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <div style={{ fontSize: "0.68rem", color: "rgba(242,237,229,0.3)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px" }}>
                  WhatsApp / Phone
                </div>
                <a
                  href="https://wa.me/971545017544"
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: "#C9E219",
                    textDecoration: "none",
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +971 54 501 7544
                </a>
              </div>
              <div>
                <div style={{ fontSize: "0.68rem", color: "rgba(242,237,229,0.3)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px" }}>
                  Address
                </div>
                <p style={{ fontSize: "0.82rem", color: "rgba(242,237,229,0.5)", lineHeight: 1.6 }}>
                  Compass Building, Al Hulaila<br />
                  Industrial Zone-FZ<br />
                  Ras Al Khaimah, UAE
                </p>
              </div>
              <div>
                <div style={{ fontSize: "0.68rem", color: "rgba(242,237,229,0.3)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px" }}>
                  Coverage
                </div>
                <p style={{ fontSize: "0.82rem", color: "rgba(242,237,229,0.5)" }}>
                  🇦🇪 United Arab Emirates<br />
                  🇵🇰 Pakistan (Nationwide)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.05)",
            padding: "24px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ fontSize: "0.78rem", color: "rgba(242,237,229,0.3)" }}>
            © {currentYear} ZTS Telecom FZ-LLC. All rights reserved. · RAKEZ Freezone, Ras Al Khaimah, UAE
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <a
              href="/license.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "0.75rem", color: "rgba(242,237,229,0.3)", textDecoration: "none" }}
            >
              View Licence
            </a>
            <a
              href="https://wa.me/971545017544"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.75rem",
                color: "#C9E219",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </footer>
  );
}

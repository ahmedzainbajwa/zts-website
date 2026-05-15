export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        background: "#0D2144",
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "400px",
          background: "radial-gradient(ellipse at center bottom, rgba(201,226,25,0.08) 0%, transparent 70%)",
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
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <div className="section-tag" style={{ justifyContent: "center" }}>
            Get in Touch
          </div>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#F2EDE5",
              marginTop: "16px",
              marginBottom: "16px",
              lineHeight: 1.1,
            }}
          >
            Ready to Order?{" "}
            <span style={{ color: "#C9E219" }}>Let&apos;s Talk.</span>
          </h2>
          <p
            style={{
              color: "rgba(242,237,229,0.55)",
              fontSize: "1rem",
              maxWidth: "440px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Reach out via WhatsApp for the fastest response.
            We&apos;re available 7 days a week to help you find your perfect device.
          </p>
        </div>

        {/* Main CTA */}
        <div
          style={{
            background: "rgba(201,226,25,0.06)",
            border: "1px solid rgba(201,226,25,0.2)",
            borderRadius: "24px",
            padding: "60px 48px",
            textAlign: "center",
            marginBottom: "48px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative elements */}
          <div
            style={{
              position: "absolute",
              top: "-40px",
              right: "-40px",
              width: "200px",
              height: "200px",
              border: "1px solid rgba(201,226,25,0.1)",
              borderRadius: "50%",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-60px",
              left: "-60px",
              width: "250px",
              height: "250px",
              border: "1px solid rgba(201,226,25,0.06)",
              borderRadius: "50%",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "80px",
              height: "80px",
              background: "#C9E219",
              borderRadius: "50%",
              marginBottom: "24px",
              position: "relative",
            }}
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="#0A1628">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {/* Pulse rings */}
            <div
              style={{
                position: "absolute",
                inset: "-8px",
                borderRadius: "50%",
                border: "1px solid rgba(201,226,25,0.4)",
                animation: "pulse 2s ease-out infinite",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: "-16px",
                borderRadius: "50%",
                border: "1px solid rgba(201,226,25,0.2)",
                animation: "pulse 2s ease-out infinite 0.5s",
              }}
            />
          </div>

          <div
            className="font-display"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
              fontWeight: 800,
              color: "#F2EDE5",
              letterSpacing: "-0.02em",
              marginBottom: "8px",
            }}
          >
            +971 54 501 7544
          </div>
          <div
            style={{
              fontSize: "0.85rem",
              color: "rgba(242,237,229,0.45)",
              marginBottom: "32px",
            }}
          >
            Available on WhatsApp · Call · SMS
          </div>

          <a
            href="https://wa.me/971545017544"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-lime"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              padding: "18px 40px",
              borderRadius: "12px",
              fontSize: "1rem",
              textDecoration: "none",
              fontFamily: "inherit",
              fontWeight: 700,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Open WhatsApp Chat
          </a>
        </div>

        {/* Info Cards Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
          className="contact-cards"
        >
          {/* Phone */}
          <div
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "16px",
              padding: "28px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                background: "rgba(201,226,25,0.1)",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px",
                color: "#C9E219",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.23h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div style={{ fontSize: "0.75rem", color: "rgba(242,237,229,0.4)", marginBottom: "8px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Phone / WhatsApp
            </div>
            <a
              href="tel:+971545017544"
              style={{ fontSize: "1rem", fontWeight: 700, color: "#F2EDE5", textDecoration: "none" }}
            >
              +971 54 501 7544
            </a>
          </div>

          {/* Address */}
          <div
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "16px",
              padding: "28px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                background: "rgba(201,226,25,0.1)",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px",
                color: "#C9E219",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div style={{ fontSize: "0.75rem", color: "rgba(242,237,229,0.4)", marginBottom: "8px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Office Address
            </div>
            <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "#F2EDE5", lineHeight: 1.6 }}>
              Compass Building, Al Hulaila
              <br />
              Industrial Zone-FZ
              <br />
              <span style={{ color: "#C9E219" }}>Ras Al Khaimah, UAE</span>
            </p>
          </div>

          {/* Hours */}
          <div
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "16px",
              padding: "28px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                background: "rgba(201,226,25,0.1)",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px",
                color: "#C9E219",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div style={{ fontSize: "0.75rem", color: "rgba(242,237,229,0.4)", marginBottom: "8px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Response Time
            </div>
            <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#F2EDE5", marginBottom: "4px" }}>
              7 Days a Week
            </div>
            <div style={{ fontSize: "0.8rem", color: "rgba(242,237,229,0.45)" }}>
              Avg. reply under 30 mins
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 226, 25, ${p.opacity})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "linear-gradient(160deg, #0A1628 0%, #0D2144 50%, #0A1628 100%)",
      }}
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      />

      {/* Grid lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(201,226,25,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,226,25,0.03) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
          pointerEvents: "none",
        }}
      />

      {/* Radial glow top center */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "500px",
          background: "radial-gradient(ellipse at center top, rgba(201,226,25,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Bottom blue glow */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: "10%",
          width: "600px",
          height: "400px",
          background: "radial-gradient(ellipse at center, rgba(30,63,174,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "120px 24px 80px",
          width: "100%",
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
        }}
        className="hero-grid-layout"
      >
        {/* Left: Text Content */}
        <div>
          {/* Trust badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(201,226,25,0.1)",
              border: "1px solid rgba(201,226,25,0.25)",
              borderRadius: "100px",
              padding: "6px 16px",
              marginBottom: "32px",
            }}
          >
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#C9E219", display: "block", flexShrink: 0 }} />
            <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#C9E219" }}>
              UAE Government Licensed · RAKEZ Freezone
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginBottom: "24px",
              color: "#F2EDE5",
            }}
          >
            The UAE&apos;s
            <br />
            <span style={{ color: "#C9E219" }}>Premier</span> Mobile
            <br />
            Trading Hub
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.7,
              color: "rgba(242,237,229,0.65)",
              marginBottom: "40px",
              maxWidth: "480px",
            }}
          >
            Brand new &amp; certified pre-owned smartphones from every top brand.
            Trusted by buyers across UAE and Pakistan — all under one roof.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "56px" }}>
            <a
              href="https://wa.me/971545017544"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lime"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "16px 28px",
                borderRadius: "10px",
                fontSize: "0.95rem",
                textDecoration: "none",
                fontFamily: "inherit",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Place an Order
            </a>

            <button
              onClick={() => {
                const el = document.querySelector("#catalog");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-outline-lime"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "16px 28px",
                borderRadius: "10px",
                fontSize: "0.95rem",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              Browse Catalog
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Stats */}
          <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
            {[
              { value: "10+", label: "Top Brands" },
              { value: "50+", label: "Models Available" },
              { value: "2", label: "Countries Served" },
              { value: "100%", label: "Licensed & Verified" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="font-display"
                  style={{ fontSize: "1.8rem", fontWeight: 800, color: "#C9E219", lineHeight: 1 }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: "0.75rem", color: "rgba(242,237,229,0.5)", marginTop: "4px", fontWeight: 500 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Phone Visual */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
          className="hero-visual"
        >
          {/* Outer glow ring */}
          <div
            style={{
              position: "absolute",
              width: "360px",
              height: "360px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(201,226,25,0.08) 0%, transparent 70%)",
              animation: "pulse 4s ease-in-out infinite",
            }}
          />

          {/* Phone frame */}
          <div
            className="animate-float"
            style={{
              width: "220px",
              height: "440px",
              background: "linear-gradient(145deg, #1a2d4a, #0d1e3e)",
              borderRadius: "36px",
              border: "2px solid rgba(201,226,25,0.2)",
              position: "relative",
              boxShadow: "0 40px 80px rgba(0,0,0,0.5), 0 0 60px rgba(201,226,25,0.1), inset 0 1px 0 rgba(255,255,255,0.1)",
              overflow: "hidden",
            }}
          >
            {/* Phone screen */}
            <div
              style={{
                position: "absolute",
                inset: "10px",
                borderRadius: "28px",
                background: "linear-gradient(145deg, #0A1628, #152d5c)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "30px 16px 20px",
                overflow: "hidden",
              }}
            >
              {/* Dynamic island */}
              <div
                style={{
                  width: "80px",
                  height: "22px",
                  background: "#000",
                  borderRadius: "12px",
                  marginBottom: "24px",
                }}
              />

              {/* ZTS Logo on screen */}
              <div
                style={{
                  fontSize: "1.6rem",
                  fontWeight: 900,
                  color: "#C9E219",
                  fontFamily: "'Sora', sans-serif",
                  letterSpacing: "-0.03em",
                  marginBottom: "4px",
                }}
              >
                ZTS
              </div>
              <div
                style={{
                  fontSize: "0.55rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  color: "rgba(242,237,229,0.5)",
                  marginBottom: "24px",
                  textTransform: "uppercase",
                }}
              >
                TELECOM
              </div>

              {/* Brand chips */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "100%" }}>
                {[
                  { brand: "Apple", icon: "" },
                  { brand: "Samsung", icon: "" },
                  { brand: "Google", icon: "" },
                ].map((item) => (
                  <div
                    key={item.brand}
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "8px",
                      padding: "8px 12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span style={{ fontSize: "0.65rem", fontWeight: 600, color: "#F2EDE5" }}>{item.brand}</span>
                    <span style={{ fontSize: "0.6rem", color: "#C9E219", fontWeight: 700 }}>In Stock</span>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: "16px",
                  background: "#C9E219",
                  color: "#0A1628",
                  fontSize: "0.6rem",
                  fontWeight: 800,
                  padding: "8px 16px",
                  borderRadius: "6px",
                  letterSpacing: "0.05em",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                ORDER NOW
              </div>
            </div>

            {/* Side button details */}
            <div
              style={{
                position: "absolute",
                right: "-2px",
                top: "80px",
                width: "3px",
                height: "50px",
                background: "rgba(201,226,25,0.3)",
                borderRadius: "0 3px 3px 0",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: "-2px",
                top: "80px",
                width: "3px",
                height: "30px",
                background: "rgba(255,255,255,0.1)",
                borderRadius: "3px 0 0 3px",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: "-2px",
                top: "120px",
                width: "3px",
                height: "50px",
                background: "rgba(255,255,255,0.1)",
                borderRadius: "3px 0 0 3px",
              }}
            />
          </div>

          {/* Floating brand badges */}
          {[
            { label: "iPhone 16 Pro", top: "10%", right: "-5%", delay: "0s" },
            { label: "Galaxy S25 Ultra", bottom: "18%", right: "-8%", delay: "0.5s" },
            { label: "Pixel 9 Pro", top: "35%", left: "-10%", delay: "1s" },
          ].map((badge) => (
            <div
              key={badge.label}
              style={{
                position: "absolute",
                top: badge.top,
                bottom: badge.bottom,
                left: badge.left,
                right: badge.right,
                background: "rgba(13, 33, 68, 0.9)",
                border: "1px solid rgba(201,226,25,0.3)",
                borderRadius: "8px",
                padding: "8px 14px",
                fontSize: "0.7rem",
                fontWeight: 700,
                color: "#F2EDE5",
                whiteSpace: "nowrap",
                backdropFilter: "blur(10px)",
                animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
                animationDelay: badge.delay,
              }}
            >
              ✓ {badge.label}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          color: "rgba(242,237,229,0.3)",
          fontSize: "0.7rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        <span>Scroll</span>
        <div
          style={{
            width: "20px",
            height: "32px",
            border: "1.5px solid rgba(242,237,229,0.2)",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            paddingTop: "6px",
          }}
        >
          <div
            style={{
              width: "3px",
              height: "6px",
              background: "#C9E219",
              borderRadius: "2px",
              animation: "float 1.5s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid-layout {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
            padding-top: 100px !important;
          }
          .hero-visual {
            order: -1;
            transform: scale(0.8);
          }
        }
      `}</style>
    </section>
  );
}

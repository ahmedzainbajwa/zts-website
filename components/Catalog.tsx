"use client";

import { useState } from "react";

// Simple Icons slugs for brand logos (null = wordmark fallback)
const brandSlugs: Record<string, string | null> = {
  Apple: "apple",
  Samsung: "samsung",
  Google: "google",
  OnePlus: "oneplus",
  Xiaomi: "xiaomi",
  Huawei: "huawei",
  Oppo: "oppo",
  Sony: "sony",
  Motorola: "motorola",
  Nothing: null,
};

const catalogData = [
  {
    brand: "Apple",
    color: "#A2AAAD",
    tagline: "iPhone Series",
    models: [
      { name: "iPhone 16 Pro Max", tags: ["New", "Flagship"] },
      { name: "iPhone 16 Pro", tags: ["New", "Flagship"] },
      { name: "iPhone 16 Plus", tags: ["New"] },
      { name: "iPhone 16", tags: ["New"] },
      { name: "iPhone 15 Pro Max", tags: ["New", "Used"] },
      { name: "iPhone 15 Pro", tags: ["New", "Used"] },
      { name: "iPhone 15 Plus", tags: ["New", "Used"] },
      { name: "iPhone 15", tags: ["New", "Used"] },
      { name: "iPhone 14 Pro Max", tags: ["Used"] },
      { name: "iPhone 14 Pro", tags: ["Used"] },
      { name: "iPhone 14", tags: ["Used"] },
      { name: "iPhone 13 Pro Max", tags: ["Used"] },
      { name: "iPhone 13", tags: ["Used"] },
      { name: "iPhone SE (3rd Gen)", tags: ["New", "Used"] },
    ],
  },
  {
    brand: "Samsung",
    color: "#1428A0",
    tagline: "Galaxy Series",
    models: [
      { name: "Galaxy S25 Ultra", tags: ["New", "Flagship"] },
      { name: "Galaxy S25+", tags: ["New", "Flagship"] },
      { name: "Galaxy S25", tags: ["New"] },
      { name: "Galaxy S24 Ultra", tags: ["New", "Used"] },
      { name: "Galaxy S24+", tags: ["New", "Used"] },
      { name: "Galaxy S24 FE", tags: ["New"] },
      { name: "Galaxy Z Fold 6", tags: ["New", "Flagship"] },
      { name: "Galaxy Z Flip 6", tags: ["New", "Flagship"] },
      { name: "Galaxy Z Fold 5", tags: ["Used"] },
      { name: "Galaxy A55 5G", tags: ["New"] },
      { name: "Galaxy A35 5G", tags: ["New"] },
      { name: "Galaxy A25 5G", tags: ["New"] },
      { name: "Galaxy M55 5G", tags: ["New"] },
    ],
  },
  {
    brand: "Google",
    color: "#4285F4",
    tagline: "Pixel Series",
    models: [
      { name: "Pixel 9 Pro XL", tags: ["New", "Flagship"] },
      { name: "Pixel 9 Pro", tags: ["New", "Flagship"] },
      { name: "Pixel 9 Pro Fold", tags: ["New", "Flagship"] },
      { name: "Pixel 9", tags: ["New"] },
      { name: "Pixel 8 Pro", tags: ["New", "Used"] },
      { name: "Pixel 8a", tags: ["New"] },
      { name: "Pixel 8", tags: ["New", "Used"] },
      { name: "Pixel 7 Pro", tags: ["Used"] },
      { name: "Pixel 7a", tags: ["New", "Used"] },
    ],
  },
  {
    brand: "OnePlus",
    color: "#F5010C",
    tagline: "Flagship Killer",
    models: [
      { name: "OnePlus 13", tags: ["New", "Flagship"] },
      { name: "OnePlus 12", tags: ["New", "Used"] },
      { name: "OnePlus 12R", tags: ["New"] },
      { name: "OnePlus Open", tags: ["New", "Flagship"] },
      { name: "OnePlus Nord 4", tags: ["New"] },
      { name: "OnePlus Nord CE 4", tags: ["New"] },
      { name: "OnePlus Nord CE 4 Lite", tags: ["New"] },
      { name: "OnePlus 11", tags: ["Used"] },
    ],
  },
  {
    brand: "Xiaomi",
    color: "#FF6900",
    tagline: "Mi & Redmi Series",
    models: [
      { name: "Xiaomi 14 Ultra", tags: ["New", "Flagship"] },
      { name: "Xiaomi 14T Pro", tags: ["New", "Flagship"] },
      { name: "Xiaomi 14T", tags: ["New"] },
      { name: "Xiaomi 14", tags: ["New"] },
      { name: "Redmi Note 14 Pro+", tags: ["New"] },
      { name: "Redmi Note 14 Pro", tags: ["New"] },
      { name: "Redmi Note 14", tags: ["New"] },
      { name: "Redmi Note 13 Pro+", tags: ["New", "Used"] },
      { name: "POCO X7 Pro", tags: ["New"] },
      { name: "POCO F6 Pro", tags: ["New"] },
    ],
  },
  {
    brand: "Huawei",
    color: "#CF0A2C",
    tagline: "Pura & Mate Series",
    models: [
      { name: "Pura 70 Ultra", tags: ["New", "Flagship"] },
      { name: "Pura 70 Pro+", tags: ["New"] },
      { name: "Pura 70 Pro", tags: ["New"] },
      { name: "Mate 60 Pro+", tags: ["New", "Flagship"] },
      { name: "Mate 60 Pro", tags: ["New"] },
      { name: "Mate 60", tags: ["New"] },
      { name: "Nova 12 Pro", tags: ["New"] },
      { name: "Mate 50 Pro", tags: ["Used"] },
    ],
  },
  {
    brand: "Oppo",
    color: "#1D8348",
    tagline: "Find & Reno Series",
    models: [
      { name: "Find X8 Pro", tags: ["New", "Flagship"] },
      { name: "Find X8", tags: ["New"] },
      { name: "Find X7 Ultra", tags: ["New", "Used"] },
      { name: "Reno 13 Pro", tags: ["New"] },
      { name: "Reno 13", tags: ["New"] },
      { name: "Reno 12 Pro", tags: ["New"] },
      { name: "A3 Pro", tags: ["New"] },
      { name: "A79 5G", tags: ["New"] },
    ],
  },
  {
    brand: "Sony",
    color: "#003087",
    tagline: "Xperia Series",
    models: [
      { name: "Xperia 1 VI", tags: ["New", "Flagship"] },
      { name: "Xperia 5 VI", tags: ["New"] },
      { name: "Xperia 10 VI", tags: ["New"] },
      { name: "Xperia 1 V", tags: ["Used"] },
      { name: "Xperia 5 V", tags: ["New", "Used"] },
    ],
  },
  {
    brand: "Motorola",
    color: "#3DAFE8",
    tagline: "Edge & Razr Series",
    models: [
      { name: "Edge 50 Ultra", tags: ["New", "Flagship"] },
      { name: "Edge 50 Pro", tags: ["New"] },
      { name: "Edge 50 Fusion", tags: ["New"] },
      { name: "Razr 50 Ultra", tags: ["New", "Flagship"] },
      { name: "Razr 50", tags: ["New"] },
      { name: "Moto G85", tags: ["New"] },
    ],
  },
  {
    brand: "Nothing",
    color: "#ffffff",
    tagline: "Phone Series",
    models: [
      { name: "Nothing Phone (2a) Plus", tags: ["New"] },
      { name: "Nothing Phone (2a)", tags: ["New"] },
      { name: "Nothing Phone (2)", tags: ["New", "Used"] },
      { name: "Nothing Phone (1)", tags: ["Used"] },
      { name: "CMF Phone 1", tags: ["New"] },
    ],
  },
];

const tagColors: Record<string, { bg: string; text: string }> = {
  New: { bg: "rgba(201,226,25,0.15)", text: "#C9E219" },
  Used: { bg: "rgba(30,63,174,0.2)", text: "#7fa8e8" },
  Flagship: { bg: "rgba(255,165,0,0.15)", text: "#ffa500" },
};

export default function Catalog() {
  const [activeTab, setActiveTab] = useState(0);

  const active = catalogData[activeTab];

  return (
    <section
      id="catalog"
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
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div className="section-tag" style={{ justifyContent: "center" }}>
            Product Catalog
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
            Browse by{" "}
            <span style={{ color: "#C9E219" }}>Brand</span>
          </h2>
          <p
            style={{
              color: "rgba(242,237,229,0.55)",
              fontSize: "1rem",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            All popular models, brand new and certified pre-owned.
            Contact us for pricing and availability.
          </p>
        </div>

        {/* Brand Tab Selector */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
            marginBottom: "48px",
            justifyContent: "center",
          }}
        >
          {catalogData.map((brand, i) => {
            const slug = brandSlugs[brand.brand];
            return (
              <button
                key={brand.brand}
                onClick={() => setActiveTab(i)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "9px 16px",
                  borderRadius: "10px",
                  border: activeTab === i
                    ? `1.5px solid ${brand.color}`
                    : "1.5px solid rgba(255,255,255,0.1)",
                  background: activeTab === i
                    ? `${brand.color}18`
                    : "rgba(255,255,255,0.03)",
                  color: activeTab === i ? brand.color : "rgba(242,237,229,0.6)",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  fontFamily: "inherit",
                }}
              >
                {slug ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={`https://cdn.simpleicons.org/${slug}/${activeTab === i ? brand.color.replace("#", "") : "9aabb8"}`}
                    alt={brand.brand}
                    width={16}
                    height={16}
                    style={{ objectFit: "contain", flexShrink: 0 }}
                  />
                ) : (
                  <span style={{ fontSize: "0.6rem", fontWeight: 900 }}>
                    {brand.brand.slice(0, 1)}
                  </span>
                )}
                {brand.brand}
              </button>
            );
          })}
        </div>

        {/* Catalog Grid */}
        <div
          style={{
            background: "rgba(10,22,40,0.5)",
            border: `1px solid ${active.color}22`,
            borderRadius: "20px",
            padding: "32px",
            backdropFilter: "blur(10px)",
          }}
        >
          {/* Brand Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "32px",
              paddingBottom: "24px",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {/* Brand logo / accent block */}
            {brandSlugs[active.brand] ? (
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  background: `${active.color}14`,
                  border: `1px solid ${active.color}33`,
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://cdn.simpleicons.org/${brandSlugs[active.brand]}/${active.color.replace("#", "")}`}
                  alt={active.brand}
                  width={30}
                  height={30}
                  style={{ objectFit: "contain" }}
                />
              </div>
            ) : (
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  background: `${active.color}14`,
                  border: `1px solid ${active.color}33`,
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontSize: "1rem",
                  fontWeight: 900,
                  color: active.color,
                  letterSpacing: "-0.03em",
                }}
              >
                {active.brand.slice(0, 2).toUpperCase()}
              </div>
            )}
            <div>
              <h3
                className="font-display"
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 800,
                  color: "#F2EDE5",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                  marginBottom: "4px",
                }}
              >
                {active.brand}
              </h3>
              <span
                style={{
                  fontSize: "0.8rem",
                  color: active.color,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {active.tagline}
              </span>
            </div>
            <div style={{ marginLeft: "auto", textAlign: "right" }}>
              <div style={{ fontSize: "0.75rem", color: "rgba(242,237,229,0.4)", marginBottom: "4px" }}>
                Models Available
              </div>
              <div
                className="font-display"
                style={{ fontSize: "1.4rem", fontWeight: 800, color: "#C9E219" }}
              >
                {active.models.length}
              </div>
            </div>
          </div>

          {/* Models Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: "12px",
            }}
          >
            {active.models.map((model) => (
              <a
                key={model.name}
                href="https://wa.me/971552444381"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "14px 16px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "10px",
                  textDecoration: "none",
                  transition: "all 0.25s ease",
                  gap: "12px",
                  cursor: "pointer",
                }}
                className="catalog-item"
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "#F2EDE5",
                      marginBottom: "6px",
                      lineHeight: 1.3,
                    }}
                  >
                    {model.name}
                  </div>
                  <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
                    {model.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          padding: "2px 7px",
                          borderRadius: "4px",
                          fontSize: "0.62rem",
                          fontWeight: 700,
                          letterSpacing: "0.05em",
                          background: tagColors[tag]?.bg,
                          color: tagColors[tag]?.text,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    color: "#C9E219",
                    textAlign: "right",
                    whiteSpace: "nowrap",
                    letterSpacing: "0.04em",
                    flexShrink: 0,
                  }}
                >
                  Call for<br />Price →
                </div>
              </a>
            ))}
          </div>

          {/* CTA Footer */}
          <div
            style={{
              marginTop: "28px",
              paddingTop: "24px",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <p style={{ color: "rgba(242,237,229,0.5)", fontSize: "0.85rem" }}>
              Don&apos;t see your model? We can source it for you.
            </p>
            <a
              href="https://wa.me/971552444381"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lime"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 24px",
                borderRadius: "8px",
                fontSize: "0.875rem",
                textDecoration: "none",
                fontFamily: "inherit",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Enquire via WhatsApp
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .catalog-item:hover {
          border-color: rgba(201,226,25,0.3) !important;
          background: rgba(201,226,25,0.05) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}

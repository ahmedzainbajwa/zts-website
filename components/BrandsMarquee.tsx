// Simple Icons CDN: https://cdn.simpleicons.org/[slug]/[hex-color]
// Realme & Nothing not on Simple Icons — using styled wordmarks

interface Brand {
  name: string;
  slug: string | null; // null = use wordmark fallback
  iconColor: string;  // hex used on the CDN URL (no #)
  accentColor: string; // brand color for accents
}

const brands: Brand[] = [
  { name: "Apple",    slug: "apple",    iconColor: "e8e4dc", accentColor: "#A2AAAD" },
  { name: "Samsung",  slug: "samsung",  iconColor: "e8e4dc", accentColor: "#1428A0" },
  { name: "Google",   slug: "google",   iconColor: "e8e4dc", accentColor: "#4285F4" },
  { name: "OnePlus",  slug: "oneplus",  iconColor: "e8e4dc", accentColor: "#F5010C" },
  { name: "Xiaomi",   slug: "xiaomi",   iconColor: "e8e4dc", accentColor: "#FF6900" },
  { name: "Huawei",   slug: "huawei",   iconColor: "e8e4dc", accentColor: "#CF0A2C" },
  { name: "Oppo",     slug: "oppo",     iconColor: "e8e4dc", accentColor: "#1D8348" },
  { name: "Vivo",     slug: "vivo",     iconColor: "e8e4dc", accentColor: "#415FFF" },
  { name: "Nokia",    slug: "nokia",    iconColor: "e8e4dc", accentColor: "#124191" },
  { name: "Sony",     slug: "sony",     iconColor: "e8e4dc", accentColor: "#003087" },
  { name: "Motorola", slug: "motorola", iconColor: "e8e4dc", accentColor: "#3DAFE8" },
  { name: "Honor",    slug: "honor",    iconColor: "e8e4dc", accentColor: "#E63333" },
  { name: "Realme",   slug: null,       iconColor: "e8e4dc", accentColor: "#F5A623" },
  { name: "Nothing",  slug: null,       iconColor: "e8e4dc", accentColor: "#ffffff" },
];

function BrandCard({ brand, style }: { brand: Brand; style?: React.CSSProperties }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "14px",
        padding: "18px 28px",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "14px",
        whiteSpace: "nowrap",
        cursor: "default",
        minWidth: "160px",
        ...style,
      }}
      className="brand-card"
    >
      {/* Logo or wordmark */}
      {brand.slug ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={`https://cdn.simpleicons.org/${brand.slug}/${brand.iconColor}`}
          alt={`${brand.name} logo`}
          width={28}
          height={28}
          style={{
            objectFit: "contain",
            flexShrink: 0,
            filter: "brightness(0.9)",
          }}
        />
      ) : (
        /* Wordmark fallback for Realme & Nothing */
        <div
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "6px",
            background: `${brand.accentColor}22`,
            border: `1px solid ${brand.accentColor}44`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.5rem",
            fontWeight: 800,
            color: brand.accentColor,
            letterSpacing: "-0.02em",
            flexShrink: 0,
          }}
        >
          {brand.name.slice(0, 2).toUpperCase()}
        </div>
      )}
      <span
        style={{
          fontSize: "0.95rem",
          fontWeight: 700,
          color: "#F2EDE5",
          fontFamily: "'Manrope', sans-serif",
          letterSpacing: "-0.01em",
        }}
      >
        {brand.name}
      </span>
    </div>
  );
}

export default function BrandsMarquee() {
  const doubled = [...brands, ...brands];

  return (
    <section
      id="brands"
      style={{
        background: "#0A1628",
        padding: "100px 0",
      }}
    >
      {/* Header */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          textAlign: "center",
          marginBottom: "64px",
        }}
      >
        <div className="section-tag" style={{ justifyContent: "center" }}>
          Our Catalog
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
          Every Major Brand,{" "}
          <span style={{ color: "#C9E219" }}>One Trusted Source</span>
        </h2>
        <p
          style={{
            color: "rgba(242,237,229,0.55)",
            fontSize: "1rem",
            maxWidth: "500px",
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          From the latest flagship to budget powerhouses — we stock them all,
          brand new and certified pre-owned.
        </p>
      </div>

      {/* Marquee Row 1 — left to right */}
      <div
        style={{
          overflow: "hidden",
          marginBottom: "16px",
          maskImage: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "14px",
            animation: "marquee 35s linear infinite",
            width: "max-content",
          }}
        >
          {doubled.map((brand, i) => (
            <BrandCard key={`row1-${i}`} brand={brand} />
          ))}
        </div>
      </div>

      {/* Marquee Row 2 — right to left */}
      <div
        style={{
          overflow: "hidden",
          maskImage: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "14px",
            animation: "marquee 35s linear infinite reverse",
            width: "max-content",
          }}
        >
          {[...brands.slice(7), ...brands.slice(0, 7), ...brands].map(
            (brand, i) => (
              <BrandCard
                key={`row2-${i}`}
                brand={brand}
                style={{
                  background: "rgba(201,226,25,0.04)",
                  border: "1px solid rgba(201,226,25,0.09)",
                }}
              />
            )
          )}
        </div>
      </div>

      <style>{`
        .brand-card {
          transition: border-color 0.3s ease, background 0.3s ease;
        }
        .brand-card:hover {
          border-color: rgba(201,226,25,0.3) !important;
          background: rgba(201,226,25,0.06) !important;
        }
      `}</style>
    </section>
  );
}

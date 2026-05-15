export default function TrustBar() {
  const items = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      ),
      text: "UAE Government Licensed",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      text: "RAKEZ Freezone Certified",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      text: "Licence No. 5034065",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      text: "UAE & Pakistan Delivery",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ),
      text: "Brand New & Certified Used",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.23h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      text: "WhatsApp Orders Welcome",
    },
  ];

  return (
    <div
      style={{
        background: "#0D2144",
        borderTop: "1px solid rgba(201,226,25,0.1)",
        borderBottom: "1px solid rgba(201,226,25,0.1)",
        overflow: "hidden",
        padding: "0",
      }}
    >
      <div
        style={{
          display: "flex",
          animation: "marquee 35s linear infinite",
          width: "max-content",
        }}
      >
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "14px 40px",
              borderRight: "1px solid rgba(255,255,255,0.06)",
              whiteSpace: "nowrap",
              color: "rgba(242,237,229,0.7)",
              fontSize: "0.8rem",
              fontWeight: 500,
            }}
          >
            <span style={{ color: "#C9E219", flexShrink: 0 }}>{item.icon}</span>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}

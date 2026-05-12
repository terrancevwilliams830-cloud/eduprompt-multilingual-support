import Link from "next/link";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: "🏠" },
  { label: "Support Builder", href: "/dashboard/support-builder", icon: "🌍" },
  { label: "Roots & Vocabulary", href: "/dashboard/roots", icon: "📚" },
  { label: "Accommodations", href: "/dashboard/accommodations", icon: "♿" },
  { label: "Progress Monitoring", href: "/dashboard/progress", icon: "📈" },
  { label: "Parent Communication", href: "/dashboard/parent-comms", icon: "💬" },
  { label: "Settings", href: "/dashboard/settings", icon: "⚙️" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        background: "#f8fafc",
        color: "#0d1f3c",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <aside
        style={{
          width: "270px",
          background: "#071429",
          color: "white",
          padding: "24px 18px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          position: "sticky",
          top: 0,
          height: "100vh",
        }}
      >
        <Link href="/" style={{ textDecoration: "none", color: "white" }}>
          <div style={{ fontSize: "22px", fontWeight: 900 }}>EduPrompt</div>
          <div
            style={{
              fontSize: "12px",
              color: "#14b8a6",
              fontWeight: 800,
              letterSpacing: "1px",
              marginTop: "4px",
            }}
          >
            MULTILINGUAL SUPPORT
          </div>
        </Link>

        <nav style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px 14px",
                borderRadius: "12px",
                color: "rgba(255,255,255,0.78)",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "14px",
              }}
            >
              <span>{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div
          style={{
            marginTop: "auto",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: "18px",
          }}
        >
          <Link
            href="/"
            style={{
              color: "rgba(255,255,255,0.65)",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: 700,
            }}
          >
            ← Back to Main Site
          </Link>
        </div>
      </aside>

      <section style={{ flex: 1, minWidth: 0 }}>
        <header
          style={{
            height: "72px",
            background: "white",
            borderBottom: "1px solid #e2e8f0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 28px",
            position: "sticky",
            top: 0,
            zIndex: 50,
          }}
        >
          <div>
            <div style={{ fontSize: "13px", color: "#64748b", fontWeight: 700 }}>
              Teacher Workspace
            </div>
            <div style={{ fontSize: "20px", fontWeight: 900 }}>
              Multilingual Support Dashboard
            </div>
          </div>

          <Link href="/support">
            <button
              style={{
                background: "#0d9488",
                color: "white",
                border: "none",
                borderRadius: "12px",
                padding: "12px 18px",
                fontWeight: 800,
                cursor: "pointer",
              }}
            >
              Quick Support Builder
            </button>
          </Link>
        </header>

        <div style={{ padding: "30px" }}>{children}</div>
      </section>
    </main>
  );
}

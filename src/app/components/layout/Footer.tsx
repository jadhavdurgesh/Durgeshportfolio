import { NavLink } from "react-router";
import { Github, Linkedin, Twitter, Instagram, Mail, Code2, Heart } from "lucide-react";

const footerLinks = {
  Pages: [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/services", label: "Services" },
  ],
  More: [
    { to: "/products", label: "Products" },
    { to: "/team", label: "Team" },
    { to: "/contact", label: "Contact" },
  ],
};

const socials = [
  { icon: Github, href: "https://github.com/jadhavdurgesh", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/jadhav-durgesh/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/Durgesh_Jadhav_", label: "Twitter" },
  { icon: Instagram, href: "https://www.instagram.com/code.with.d/", label: "Instagram" },
  { icon: Mail, href: "mailto:jadhavdurgesh007@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer
      style={{
        background: "#050505",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
      className="relative overflow-hidden"
    >
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "300px",
          background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
          left: "50%",
          transform: "translateX(-50%)",
          top: 0,
          pointerEvents: "none",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                  borderRadius: "10px",
                }}
                className="w-9 h-9 flex items-center justify-center"
              >
                <Code2 size={18} color="white" />
              </div>
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  background: "linear-gradient(90deg, #ffffff, #a78bfa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                }}
              >
                Durgesh Jadhav
              </span>
            </div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "rgba(255,255,255,0.45)",
                fontSize: "0.9rem",
                lineHeight: "1.7",
                maxWidth: "300px",
              }}
            >
              Flutter, Android (Kotlin and Jetpack Compose), and React Native developer building production ready mobile apps. Turning bold ideas into polished digital products.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "8px",
                    transition: "all 0.2s",
                  }}
                  className="w-9 h-9 flex items-center justify-center hover:border-blue-500/40 hover:bg-blue-500/10"
                >
                  <Icon size={16} color="rgba(255,255,255,0.6)" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "rgba(255,255,255,0.9)",
                  fontSize: "0.85rem",
                  fontWeight: "600",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                {section}
              </h4>
              <div className="flex flex-col gap-3">
                {links.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: "rgba(255,255,255,0.45)",
                      fontSize: "0.875rem",
                      transition: "color 0.2s",
                    }}
                    className="hover:text-white"
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "rgba(255,255,255,0.3)",
              fontSize: "0.8rem",
            }}
          >
            © 2025 Durgesh Jadhav. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "rgba(255,255,255,0.3)",
              fontSize: "0.8rem",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            Built with <Heart size={12} color="#ec4899" fill="#ec4899" /> in Flutter, Kotlin & React Native
          </p>
        </div>
      </div>
    </footer>
  );
}

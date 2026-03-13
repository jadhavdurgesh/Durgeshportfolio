import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { NavLink } from "react-router";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Code2,
  Smartphone,
  Palette,
  ArrowRight,
  Star,
} from "lucide-react";

function FadeIn({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

const founder = {
  name: "Durgesh Jadhav",
  role: "Founder & Lead Developer",
  bio: "Flutter & iOS developer with 3+ years of building production-grade mobile apps. I combine engineering precision with designer-level attention to detail. Every app I ship is one I'd be proud to put on my own phone.",
  skills: ["Flutter", "SwiftUI", "Dart", "Swift", "Firebase", "Supabase"],
  achievements: ["4 Apps Shipped", "3+ Clients Served", "100% On-Time Delivery", "4.8★ Avg App Rating"],
  image: "https://images.unsplash.com/photo-1638983752157-052aa1f15bf1?w=400&q=80",
  socials: [
    { icon: Github, href: "https://github.com/jadhavdurgesh", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/jadhav-durgesh/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/Durgesh_Jadhav_", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com/code.with.d/", label: "Instagram" },
  ],
};

const collaborators = [
  {
    name: "UI Design Partner",
    role: "Product Designer",
    bio: "Expert in Figma design systems and mobile UI/UX. Creates the stunning visual designs that I then implement pixel-perfectly.",
    icon: Palette,
    color: "#a78bfa",
    skills: ["Figma", "Design Systems", "Prototyping"],
    status: "Collaborator",
  },
  {
    name: "Backend Specialist",
    role: "Node.js & Firebase Engineer",
    bio: "Handles complex backend architecture, real-time databases, and API development when projects require dedicated backend scale.",
    icon: Code2,
    color: "#60a5fa",
    skills: ["Node.js", "Firebase", "PostgreSQL"],
    status: "On-Demand",
  },
  {
    name: "QA Engineer",
    role: "Mobile QA Specialist",
    bio: "Device testing, edge case hunting, accessibility auditing. Every app goes through rigorous quality assurance before launch.",
    icon: Smartphone,
    color: "#34d399",
    skills: ["Manual Testing", "Automation", "Accessibility"],
    status: "Project-Based",
  },
];

const values = [
  { emoji: "🎯", title: "Precision", desc: "No shortcuts. No sloppy code. Every pixel and every function is intentional." },
  { emoji: "🚀", title: "Velocity", desc: "Ship fast without compromising quality. That's the game." },
  { emoji: "🤝", title: "Transparency", desc: "Clear communication, honest timelines, no surprises." },
  { emoji: "🔒", title: "Reliability", desc: "If it's on the timeline, it ships on the timeline." },
];

export function Team() {
  return (
    <div style={{ background: "#000", color: "#fff", paddingTop: "80px" }}>
      {/* Header */}
      <section style={{ padding: "80px 0 60px", position: "relative", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "800px",
            height: "400px",
            background: "radial-gradient(ellipse, rgba(167,139,250,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <p style={{ color: "#a78bfa", fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "'Inter', sans-serif", marginBottom: "14px" }}>
              The Team
            </p>
            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                fontWeight: "700",
                letterSpacing: "-0.02em",
                lineHeight: "1.1",
                marginBottom: "20px",
              }}
            >
              Small Team.{" "}
              <span style={{ background: "linear-gradient(90deg, #a78bfa, #f472b6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Big Output.
              </span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Inter', sans-serif", maxWidth: "520px", margin: "0 auto", fontSize: "1rem", lineHeight: "1.7" }}>
              A lean, elite operation. Core development by me — supported by trusted collaborators when the project demands it.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Founder Card */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <FadeIn>
          <div
            style={{
              background: "linear-gradient(135deg, rgba(59,130,246,0.05), rgba(139,92,246,0.05))",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "28px",
              overflow: "hidden",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Image */}
              <div
                style={{
                  gridColumn: "span 2",
                  position: "relative",
                  minHeight: "380px",
                }}
              >
                <img
                  src={founder.image}
                  alt={founder.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "brightness(0.8)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(270deg, rgba(5,5,15,0.95) 0%, transparent 60%)",
                  }}
                />
              </div>

              {/* Content */}
              <div className="lg:col-span-3 p-10 flex flex-col justify-center">
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "rgba(59,130,246,0.1)",
                    border: "1px solid rgba(59,130,246,0.2)",
                    borderRadius: "100px",
                    padding: "4px 14px",
                    fontSize: "0.72rem",
                    color: "#60a5fa",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: "600",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    marginBottom: "16px",
                    width: "fit-content",
                  }}
                >
                  <Star size={10} fill="#60a5fa" /> Founder
                </div>

                <h2
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "2rem",
                    fontWeight: "700",
                    marginBottom: "4px",
                  }}
                >
                  {founder.name}
                </h2>
                <p
                  style={{
                    background: "linear-gradient(90deg, #60a5fa, #a78bfa)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: "500",
                    marginBottom: "18px",
                  }}
                >
                  {founder.role}
                </p>
                <p
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "0.9rem",
                    fontFamily: "'Inter', sans-serif",
                    lineHeight: "1.75",
                    marginBottom: "22px",
                    maxWidth: "440px",
                  }}
                >
                  {founder.bio}
                </p>

                {/* Achievements */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {founder.achievements.map((a) => (
                    <div
                      key={a}
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.07)",
                        borderRadius: "10px",
                        padding: "10px 14px",
                        fontSize: "0.78rem",
                        color: "rgba(255,255,255,0.65)",
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: "500",
                      }}
                    >
                      {a}
                    </div>
                  ))}
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {founder.skills.map((s) => (
                    <span
                      key={s}
                      style={{
                        background: "rgba(59,130,246,0.1)",
                        border: "1px solid rgba(59,130,246,0.2)",
                        borderRadius: "6px",
                        padding: "3px 10px",
                        fontSize: "0.75rem",
                        color: "#60a5fa",
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Socials */}
                <div className="flex items-center gap-3">
                  {founder.socials.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      style={{
                        width: "38px",
                        height: "38px",
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.2s",
                      }}
                      className="hover:border-blue-500/40 hover:bg-blue-500/10"
                    >
                      <Icon size={16} color="rgba(255,255,255,0.6)" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Collaborators */}
      <section
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          padding: "80px 0",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", fontWeight: "700", letterSpacing: "-0.02em", marginBottom: "10px" }}>
                Extended Network
              </h2>
              <p style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Inter', sans-serif", fontSize: "0.9rem" }}>
                Trusted specialists I bring in for specific project needs.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {collaborators.map((c, i) => (
              <FadeIn key={c.name} delay={i * 0.1}>
                <div
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "20px",
                    padding: "26px",
                    transition: "all 0.3s",
                  }}
                  className="hover:border-white/12"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      style={{
                        width: "52px",
                        height: "52px",
                        borderRadius: "14px",
                        background: `${c.color}15`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <c.icon size={22} color={c.color} />
                    </div>
                    <div>
                      <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.95rem", fontWeight: "600", marginBottom: "2px" }}>
                        {c.name}
                      </h3>
                      <span
                        style={{
                          background: `${c.color}15`,
                          border: `1px solid ${c.color}25`,
                          borderRadius: "100px",
                          padding: "2px 8px",
                          fontSize: "0.68rem",
                          color: c.color,
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: "600",
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                        }}
                      >
                        {c.status}
                      </span>
                    </div>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.845rem", fontFamily: "'Inter', sans-serif", lineHeight: "1.7", marginBottom: "14px" }}>
                    {c.bio}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {c.skills.map((s) => (
                      <span
                        key={s}
                        style={{
                          background: `${c.color}08`,
                          border: `1px solid ${c.color}20`,
                          borderRadius: "6px",
                          padding: "2px 9px",
                          fontSize: "0.72rem",
                          color: c.color,
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          padding: "80px 0",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", fontWeight: "700", letterSpacing: "-0.02em" }}>
                How We Work
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.08}>
                <div
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "18px",
                    padding: "28px 20px",
                    textAlign: "center",
                    transition: "all 0.3s",
                  }}
                  className="hover:border-white/12"
                >
                  <div style={{ fontSize: "2rem", marginBottom: "12px" }}>{v.emoji}</div>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1rem", fontWeight: "600", marginBottom: "8px" }}>
                    {v.title}
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.82rem", fontFamily: "'Inter', sans-serif", lineHeight: "1.65" }}>
                    {v.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-16 pb-24">
        <FadeIn>
          <div
            style={{
              background: "linear-gradient(135deg, rgba(167,139,250,0.07), rgba(59,130,246,0.07))",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "22px",
              padding: "52px 40px",
              textAlign: "center",
            }}
          >
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: "700", letterSpacing: "-0.02em", marginBottom: "12px" }}>
              Want Me On Your Team?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Inter', sans-serif", maxWidth: "400px", margin: "0 auto 28px", fontSize: "0.95rem" }}>
              Available for full-time, contract, or freelance engagements. Let's build something great together.
            </p>
            <NavLink
              to="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
                borderRadius: "10px",
                padding: "13px 28px",
                fontFamily: "'Inter', sans-serif",
                fontWeight: "500",
                fontSize: "0.9rem",
                color: "#fff",
                boxShadow: "0 0 24px rgba(139,92,246,0.3)",
              }}
              className="hover:opacity-90"
            >
              Get in Touch <ArrowRight size={16} />
            </NavLink>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}

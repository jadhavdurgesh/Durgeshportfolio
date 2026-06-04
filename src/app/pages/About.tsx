import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { NavLink } from "react-router";
import {
  Code2,
  Smartphone,
  Cpu,
  Layers,
  GitBranch,
  Flame,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { images } from "@/lib/images";

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const skills = [
  {
    category: "Mobile",
    icon: Smartphone,
    color: "#60a5fa",
    items: ["Flutter", "React Native", "Kotlin", "Jetpack Compose", "Dart"],
  },
  {
    category: "Android Stack",
    icon: Layers,
    color: "#3DDC84",
    items: ["MVVM", "Coroutines", "Hilt", "Room", "Retrofit", "WorkManager"],
  },
  {
    category: "Backend & APIs",
    icon: Cpu,
    color: "#a78bfa",
    items: ["Node.js", "Firebase", "Supabase", "REST APIs", "MongoDB"],
  },
  {
    category: "DevOps & Tools",
    icon: GitBranch,
    color: "#f59e0b",
    items: ["Git", "CI/CD", "Android Studio", "VS Code"],
  },
];

const differentiators = [
  {
    icon: Flame,
    title: "Production Mindset",
    description:
      "Every line of code I write is built for real users, not just to pass a review. Performance, reliability, and UX are non negotiable.",
  },
  {
    icon: CheckCircle2,
    title: "End to End Delivery",
    description:
      "From requirements to Play Store, I handle the full pipeline. UI, logic, API integration, testing, and release.",
  },
  {
    icon: Code2,
    title: "Clean Architecture",
    description:
      "Readable, maintainable, scalable code. I write apps you can hand off to a team without embarrassment.",
  },
  {
    icon: Smartphone,
    title: "Native Level Polish",
    description:
      "Fluid animations, crisp layouts, and platform-native interactions across Flutter, React Native, and Android.",
  },
];

const timeline = [
  {
    year: "2022",
    title: "Started Mobile Journey",
    desc: "Built foundations in Flutter, Android, and mobile architecture through personal projects and open source.",
    color: "#60a5fa",
  },
  {
    year: "2024",
    title: "Nutrahara Inc. · FemTrack",
    desc: "Shipped FemTrack, a production women's health app, and backend services with Node.js, MongoDB, and Redis.",
    color: "#a78bfa",
  },
  {
    year: "2025",
    title: "Park+ · SDE",
    desc: "Engineering Flutter and Android features at scale: VMS, resident modules, and native migrations from WebView.",
    color: "#f472b6",
  },
  {
    year: "2026",
    title: "NewsApp & MailNimble",
    desc: "Built an offline first Jetpack Compose news app and shipped MailNimble, an AI email assistant with Gemini and OAuth2.",
    color: "#34d399",
  },
];

export function About() {
  return (
    <div style={{ background: "#000", color: "#fff", paddingTop: "80px" }}>
      {/* Hero */}
      <section
        style={{
          padding: "80px 0 60px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "800px",
            height: "400px",
            background:
              "radial-gradient(ellipse, rgba(139,92,246,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <FadeIn>
              <p
                style={{
                  color: "#a78bfa",
                  fontSize: "0.78rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontFamily: "'Inter', sans-serif",
                  marginBottom: "16px",
                }}
              >
                About Me
              </p>
              <h1
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
                  fontWeight: "700",
                  letterSpacing: "-0.02em",
                  lineHeight: "1.1",
                  marginBottom: "24px",
                }}
              >
                Senior Mobile Dev{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #60a5fa, #a78bfa)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Who Ships.
                </span>
              </h1>
              <p
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "1rem",
                  lineHeight: "1.8",
                  fontFamily: "'Inter', sans-serif",
                  marginBottom: "20px",
                }}
              >
                I'm <strong style={{ color: "rgba(255,255,255,0.9)" }}>Durgesh Jadhav</strong>, a mobile engineer with 3+ years shipping production apps in Flutter, React Native, and Android (Kotlin and Jetpack Compose). Currently at Park+ building features for millions of users.
              </p>
              <p
                style={{
                  color: "rgba(255,255,255,0.45)",
                  fontSize: "0.95rem",
                  lineHeight: "1.8",
                  fontFamily: "'Inter', sans-serif",
                  marginBottom: "32px",
                }}
              >
                My approach is simple: ship high quality apps with clean architecture, beautiful UI, and zero compromise on performance. If you want someone who codes fast and codes well, I'm your developer.
              </p>
              <NavLink
                to="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                  borderRadius: "10px",
                  padding: "13px 28px",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: "500",
                  fontSize: "0.9rem",
                  color: "#fff",
                  boxShadow: "0 0 24px rgba(59,130,246,0.3)",
                }}
                className="hover:opacity-90"
              >
                Let's Talk <ArrowRight size={16} />
              </NavLink>
            </FadeIn>

            {/* Avatar card */}
            <FadeIn delay={0.2}>
              <div className="flex justify-center lg:justify-end">
                <div
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "24px",
                    padding: "32px",
                    maxWidth: "360px",
                    width: "100%",
                  }}
                >
                  {/* Avatar */}
                  <div
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "2.2rem",
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: "700",
                      color: "#fff",
                      marginBottom: "20px",
                      boxShadow: "0 0 30px rgba(139,92,246,0.3)",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={images.profile}
                      alt="Durgesh Jadhav"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "1.3rem",
                      fontWeight: "700",
                      marginBottom: "4px",
                    }}
                  >
                    Durgesh Jadhav
                  </h3>
                  <p
                    style={{
                      background: "linear-gradient(90deg, #60a5fa, #a78bfa)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.85rem",
                      fontWeight: "500",
                      marginBottom: "20px",
                    }}
                  >
                    Flutter · React Native · Android
                  </p>
                  <div
                    style={{
                      borderTop: "1px solid rgba(255,255,255,0.06)",
                      paddingTop: "16px",
                    }}
                  >
                    {[
                      ["Location", "New Delhi, India"],
                      ["Experience", "3+ Years"],
                      ["Apps Shipped", "10+ Production"],
                      ["Specialization", "Flutter, RN, Compose"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="flex justify-between items-center mb-3"
                      >
                        <span
                          style={{
                            color: "rgba(255,255,255,0.35)",
                            fontSize: "0.8rem",
                            fontFamily: "'Inter', sans-serif",
                          }}
                        >
                          {label}
                        </span>
                        <span
                          style={{
                            color: "rgba(255,255,255,0.75)",
                            fontSize: "0.82rem",
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: "500",
                          }}
                        >
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          padding: "80px 0",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-14">
              <p
                style={{
                  color: "#60a5fa",
                  fontSize: "0.78rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontFamily: "'Inter', sans-serif",
                  marginBottom: "12px",
                }}
              >
                Skills
              </p>
              <h2
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  fontWeight: "700",
                  letterSpacing: "-0.02em",
                }}
              >
                Technical Arsenal
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {skills.map((skill, i) => (
              <FadeIn key={skill.category} delay={i * 0.1}>
                <div
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "16px",
                    padding: "24px",
                    height: "100%",
                    transition: "all 0.3s",
                  }}
                  className="hover:border-white/15"
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      background: `${skill.color}15`,
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "14px",
                    }}
                  >
                    <skill.icon size={18} color={skill.color} />
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.92rem",
                      fontWeight: "600",
                      marginBottom: "12px",
                      color: "rgba(255,255,255,0.9)",
                    }}
                  >
                    {skill.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        style={{
                          background: `${skill.color}10`,
                          border: `1px solid ${skill.color}25`,
                          borderRadius: "6px",
                          padding: "3px 10px",
                          fontSize: "0.75rem",
                          color: skill.color,
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          padding: "80px 0",
          background: "linear-gradient(180deg, transparent, rgba(59,130,246,0.02))",
        }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-14">
              <p
                style={{
                  color: "#a78bfa",
                  fontSize: "0.78rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontFamily: "'Inter', sans-serif",
                  marginBottom: "12px",
                }}
              >
                Journey
              </p>
              <h2
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  fontWeight: "700",
                  letterSpacing: "-0.02em",
                }}
              >
                The Road So Far
              </h2>
            </div>
          </FadeIn>
          <div className="relative">
            <div
              style={{
                position: "absolute",
                left: "20px",
                top: 0,
                bottom: 0,
                width: "1px",
                background:
                  "linear-gradient(180deg, transparent, rgba(255,255,255,0.1), transparent)",
              }}
            />
            <div className="flex flex-col gap-8 pl-14">
              {timeline.map((item, i) => (
                <FadeIn key={item.year} delay={i * 0.12}>
                  <div style={{ position: "relative" }}>
                    <div
                      style={{
                        position: "absolute",
                        left: "-46px",
                        top: "4px",
                        width: "14px",
                        height: "14px",
                        borderRadius: "50%",
                        background: item.color,
                        boxShadow: `0 0 12px ${item.color}60`,
                        border: "2px solid #000",
                      }}
                    />
                    <div
                      style={{
                        background: "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        borderRadius: "14px",
                        padding: "20px 24px",
                        transition: "all 0.3s",
                      }}
                      className="hover:border-white/12"
                    >
                      <div className="flex items-center gap-3 mb-6" style={{ marginBottom: "8px" }}>
                        <span
                          style={{
                            background: `${item.color}15`,
                            border: `1px solid ${item.color}30`,
                            borderRadius: "6px",
                            padding: "2px 10px",
                            fontSize: "0.75rem",
                            color: item.color,
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: "600",
                          }}
                        >
                          {item.year}
                        </span>
                        <h3
                          style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: "1rem",
                            fontWeight: "600",
                          }}
                        >
                          {item.title}
                        </h3>
                      </div>
                      <p
                        style={{
                          color: "rgba(255,255,255,0.45)",
                          fontSize: "0.875rem",
                          fontFamily: "'Inter', sans-serif",
                          lineHeight: "1.7",
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What makes me different */}
      <section
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          padding: "80px 0",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-14">
              <h2
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  fontWeight: "700",
                  letterSpacing: "-0.02em",
                  marginBottom: "12px",
                }}
              >
                What Makes Me{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #60a5fa, #a78bfa)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Different
                </span>
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {differentiators.map((d, i) => (
              <FadeIn key={d.title} delay={i * 0.1}>
                <div
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "18px",
                    padding: "28px",
                    transition: "all 0.3s",
                    display: "flex",
                    gap: "18px",
                    alignItems: "flex-start",
                  }}
                  className="hover:border-blue-500/20 hover:bg-blue-500/5"
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      background: "linear-gradient(135deg, #3b82f615, #8b5cf615)",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <d.icon size={20} color="#60a5fa" />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "1rem",
                        fontWeight: "600",
                        marginBottom: "8px",
                      }}
                    >
                      {d.title}
                    </h3>
                    <p
                      style={{
                        color: "rgba(255,255,255,0.45)",
                        fontSize: "0.875rem",
                        lineHeight: "1.7",
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {d.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

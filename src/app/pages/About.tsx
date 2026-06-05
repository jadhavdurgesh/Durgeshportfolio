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
  GraduationCap,
  MapPin,
  Briefcase,
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
    items: ["Flutter", "Dart", "React Native"],
  },
  {
    category: "Android Stack",
    icon: Layers,
    color: "#3DDC84",
    items: ["Kotlin", "Jetpack Compose", "MVVM", "Coroutines", "Hilt", "Room"],
  },
  {
    category: "Backend & APIs",
    icon: Cpu,
    color: "#a78bfa",
    items: ["Node.js", "Go", "Firebase", "MongoDB", "Redis"],
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
      "Fluid animations, crisp layouts, and platform-native interactions across Flutter, Android, and React Native.",
  },
];

const education = {
  institution: "Netaji Subhas University of Technology",
  shortName: "NSUT, Delhi",
  degree: "B.Tech · Instrumentation & Control Engineering",
  batch: "2025 Passout",
  tagline: "Tier 1 engineering institute · New Delhi, India",
};

const timeline = [
  {
    period: "Jul 2023 to Dec 2023",
    title: "Quickgick",
    role: "Software Developer Intern",
    type: "Internship",
    location: "New Delhi, India",
    desc: "Worked across full product cycles with Flutter and Node.js, collaborating directly with clients on requirements, documentation, and shipping to both Google Play and Apple App Store.",
    highlights: ["Flutter & Node.js", "Play Store & App Store", "Client-facing delivery"],
    color: "#60a5fa",
  },
  {
    period: "May 2024 to Oct 2024",
    title: "Nutrahara Inc.",
    role: "Software Developer Intern",
    type: "Internship",
    location: "Remote",
    desc: "Built and shipped FemTrack, a production women's health app. Optimized backend APIs with Node.js, MongoDB, and Redis, cutting latency by 35% and accelerating feature rollout by 20%.",
    highlights: ["FemTrack shipped", "35% lower latency", "Production APIs"],
    color: "#ec4899",
  },
  {
    period: "Oct 2024 to Present",
    title: "Nutrahara Inc.",
    role: "Contract Freelance Developer",
    type: "Freelance",
    location: "Remote",
    desc: "Continued with Nutrahara as a contract freelance developer after the internship, owning features, backend work, and ongoing product improvements across their mobile stack.",
    highlights: ["Contract role", "Ongoing ownership", "Trusted by client"],
    color: "#a78bfa",
  },
  {
    period: "Oct 2024 to Feb 2025",
    title: "Zeddlabz",
    role: "Software Developer Intern",
    type: "Internship",
    location: "Noida, India",
    desc: "Refactored Swift/SwiftUI for feature parity and 15% more crash-free sessions. Built Go-based merchant onboarding APIs with MongoDB, onboarded 500+ merchants in 3 months, and cut manual verification time by 60%.",
    highlights: ["500+ merchants", "60% faster verification", "3+ zero-downtime releases"],
    color: "#f59e0b",
  },
  {
    period: "Jul 2025 to Present",
    title: "Park+",
    role: "Software Developer Engineer",
    type: "Full-Time",
    location: "Gurgaon, India",
    desc: "Building Flutter and Android features at scale for millions of users. Migrated WebView flows to native Flutter, cut crashes by 35%, reduced app size from 40MB to 30MB, and owned modules end-to-end from dev to production.",
    highlights: ["Millions of users", "35% fewer crashes", "25% smaller app"],
    color: "#34d399",
  },
];

const typeBadgeStyles: Record<string, { bg: string; border: string; color: string }> = {
  "Full-Time": { bg: "#22c55e15", border: "#22c55e35", color: "#22c55e" },
  Freelance: { bg: "#a78bfa15", border: "#a78bfa35", color: "#a78bfa" },
  Internship: { bg: "#60a5fa15", border: "#60a5fa35", color: "#60a5fa" },
};

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
                From NSUT to{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #60a5fa, #a78bfa)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Millions of Users.
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
                I'm <strong style={{ color: "rgba(255,255,255,0.9)" }}>Durgesh Jadhav</strong>, a B.Tech graduate from{" "}
                <strong style={{ color: "rgba(255,255,255,0.9)" }}>NSUT</strong> (Netaji Subhas University of Technology), a Tier 1 engineering college in New Delhi (2025 batch). I ship production mobile apps in Flutter, Android (Kotlin and Jetpack Compose), and React Native, currently as an SDE at Park+ building for millions of users, while continuing as a contract freelance developer with Nutrahara.
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
                From intern to SDE in under two years. I've shipped FemTrack to production, onboarded 500+ merchants at Zeddlabz, and now optimize apps used at national scale. I don't just write code; I own features end to end and deliver measurable impact.
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
                    Flutter · Kotlin · Jetpack Compose · React Native
                  </p>
                  <div
                    style={{
                      borderTop: "1px solid rgba(255,255,255,0.06)",
                      paddingTop: "16px",
                    }}
                  >
                    {[
                      ["Education", "NSUT · B.Tech '25"],
                      ["Current Role", "SDE @ Park+"],
                      ["Also", "Freelance @ Nutrahara"],
                      ["Apps Shipped", "10+ Production"],
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

      {/* Education */}
      <section
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          padding: "60px 0",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div
              style={{
                background: "linear-gradient(135deg, rgba(59,130,246,0.08), rgba(139,92,246,0.06))",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px",
                padding: "clamp(24px, 4vw, 36px)",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
              className="sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-start gap-5">
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    background: "linear-gradient(135deg, #3b82f620, #8b5cf620)",
                    borderRadius: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <GraduationCap size={26} color="#60a5fa" />
                </div>
                <div>
                  <p
                    style={{
                      color: "#60a5fa",
                      fontSize: "0.72rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      fontFamily: "'Inter', sans-serif",
                      marginBottom: "8px",
                    }}
                  >
                    Education
                  </p>
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "1.2rem",
                      fontWeight: "600",
                      marginBottom: "6px",
                    }}
                  >
                    {education.institution}
                  </h3>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.55)",
                      fontSize: "0.9rem",
                      fontFamily: "'Inter', sans-serif",
                      marginBottom: "4px",
                    }}
                  >
                    {education.degree}
                  </p>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.35)",
                      fontSize: "0.82rem",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {education.tagline}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 sm:justify-end">
                <span
                  style={{
                    background: "#3b82f615",
                    border: "1px solid #3b82f630",
                    borderRadius: "100px",
                    padding: "6px 14px",
                    fontSize: "0.78rem",
                    color: "#60a5fa",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: "500",
                  }}
                >
                  {education.shortName}
                </span>
                <span
                  style={{
                    background: "#22c55e15",
                    border: "1px solid #22c55e30",
                    borderRadius: "100px",
                    padding: "6px 14px",
                    fontSize: "0.78rem",
                    color: "#22c55e",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: "500",
                  }}
                >
                  {education.batch}
                </span>
                <span
                  style={{
                    background: "#a78bfa15",
                    border: "1px solid #a78bfa30",
                    borderRadius: "100px",
                    padding: "6px 14px",
                    fontSize: "0.78rem",
                    color: "#a78bfa",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: "500",
                  }}
                >
                  Tier 1 Institute
                </span>
              </div>
            </div>
          </FadeIn>
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
          background: "linear-gradient(180deg, transparent, rgba(59,130,246,0.03))",
        }}
      >
        <div className="max-w-5xl mx-auto px-6">
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
                Career Growth
              </p>
              <h2
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  fontWeight: "700",
                  letterSpacing: "-0.02em",
                  marginBottom: "12px",
                }}
              >
                Intern to SDE in 2 Years
              </h2>
              <p
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: "0.92rem",
                  fontFamily: "'Inter', sans-serif",
                  maxWidth: "520px",
                  margin: "0 auto",
                  lineHeight: "1.7",
                }}
              >
                Real roles, real impact. From shipping my first app to building features for millions.
              </p>
            </div>
          </FadeIn>
          <div className="relative">
            <div
              className="hidden md:block"
              style={{
                position: "absolute",
                left: "50%",
                top: 0,
                bottom: 0,
                width: "2px",
                transform: "translateX(-50%)",
                background:
                  "linear-gradient(180deg, transparent, rgba(96,165,250,0.25) 10%, rgba(167,139,250,0.25) 50%, rgba(52,211,153,0.25) 90%, transparent)",
              }}
            />
            <div className="flex flex-col gap-6">
              {timeline.map((item, i) => {
                const badge = typeBadgeStyles[item.type];
                const isLeft = i % 2 === 0;

                const timelineIcon = (
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      background: `${item.color}18`,
                      border: `2px solid ${item.color}50`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: `0 0 20px ${item.color}30`,
                      flexShrink: 0,
                    }}
                  >
                    <Briefcase size={18} color={item.color} />
                  </div>
                );

                const timelineCard = (
                  <div
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      borderLeft: isLeft ? `3px solid ${item.color}` : undefined,
                      borderRight: !isLeft ? `3px solid ${item.color}` : undefined,
                      borderRadius: "18px",
                      padding: "22px 24px",
                      transition: "all 0.3s",
                    }}
                    className="hover:border-white/15 hover:-translate-y-0.5"
                  >
                    <div
                      className={`flex flex-wrap items-center gap-2 mb-3 ${
                        isLeft ? "md:justify-end" : ""
                      }`}
                    >
                      <span
                        style={{
                          background: `${item.color}12`,
                          border: `1px solid ${item.color}30`,
                          borderRadius: "6px",
                          padding: "3px 10px",
                          fontSize: "0.72rem",
                          color: item.color,
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: "600",
                        }}
                      >
                        {item.period}
                      </span>
                      <span
                        style={{
                          background: badge.bg,
                          border: `1px solid ${badge.border}`,
                          borderRadius: "100px",
                          padding: "3px 10px",
                          fontSize: "0.68rem",
                          color: badge.color,
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: "500",
                        }}
                      >
                        {item.type}
                      </span>
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "1.1rem",
                        fontWeight: "600",
                        marginBottom: "2px",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        color: item.color,
                        fontSize: "0.82rem",
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: "500",
                        marginBottom: "10px",
                      }}
                    >
                      {item.role}
                    </p>
                    <div
                      className={`flex items-center gap-1.5 mb-3 ${
                        isLeft ? "md:justify-end" : ""
                      }`}
                      style={{
                        color: "rgba(255,255,255,0.3)",
                        fontSize: "0.75rem",
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      <MapPin size={12} />
                      {item.location}
                    </div>
                    <p
                      style={{
                        color: "rgba(255,255,255,0.45)",
                        fontSize: "0.85rem",
                        fontFamily: "'Inter', sans-serif",
                        lineHeight: "1.7",
                        marginBottom: "14px",
                      }}
                    >
                      {item.desc}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 ${
                        isLeft ? "md:justify-end" : ""
                      }`}
                    >
                      {item.highlights.map((h) => (
                        <span
                          key={h}
                          style={{
                            background: `${item.color}10`,
                            border: `1px solid ${item.color}22`,
                            borderRadius: "100px",
                            padding: "4px 10px",
                            fontSize: "0.7rem",
                            color: item.color,
                            fontFamily: "'Inter', sans-serif",
                          }}
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                );

                return (
                  <FadeIn key={`${item.title}-${item.period}`} delay={i * 0.1}>
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-6 items-center">
                      {isLeft ? (
                        <>
                          <div className="md:text-right">{timelineCard}</div>
                          <div className="hidden md:flex justify-center">{timelineIcon}</div>
                          <div className="hidden md:block" />
                        </>
                      ) : (
                        <>
                          <div className="hidden md:block" />
                          <div className="hidden md:flex justify-center">{timelineIcon}</div>
                          <div>{timelineCard}</div>
                        </>
                      )}
                    </div>
                  </FadeIn>
                );
              })}
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

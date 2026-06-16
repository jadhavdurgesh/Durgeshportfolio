import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { NavLink } from "react-router";
import {
  Code2,
  Layers,
  Zap,
  ArrowRight,
  Check,
  MessageSquare,
} from "lucide-react";

function FadeIn({
  children,
  delay = 0,
  className,
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
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

const services = [
  {
    icon: Code2,
    title: "Flutter App Development",
    tagline: "Cross platform with native feel",
    description:
      "Pixel perfect Flutter apps that run on Android and iOS from a single, clean codebase. From concept to Play Store release, with state management, animations, and custom widgets done right.",
    features: [
      "Clean Architecture pattern",
      "Riverpod / BLoC state management",
      "Custom animations & transitions",
      "Platform native interactions",
      "Testing & QA",
      "Play Store submission",
    ],
    color: "#54C5F8",
    gradient: "linear-gradient(135deg, #54C5F8, #3b82f6)",
    popular: true,
  },
  {
    icon: Layers,
    title: "Full-Stack Mobile Solutions",
    tagline: "Flutter + Node.js",
    description:
      "End to end product builds where I own both the app and the backend. Flutter on the front, Node.js APIs and real time data on the back, shipped as one cohesive system.",
    features: [
      "Flutter mobile front end",
      "Node.js REST / real time APIs",
      "Database design & integration",
      "Authentication & security",
      "Firebase / Supabase services",
      "Deployment & post launch support",
    ],
    color: "#60a5fa",
    gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)",
    popular: false,
  },
  {
    icon: Zap,
    title: "App Performance Optimization",
    tagline: "Make your app blazing fast",
    description:
      "Got an existing app that feels sluggish? I audit, diagnose, and fix performance bottlenecks: frame drops, slow startup, memory leaks, all resolved.",
    features: [
      "Performance profiling & audit",
      "Frame rate optimization",
      "Memory leak detection",
      "Cold start optimization",
      "Bundle size reduction",
      "Detailed performance report",
    ],
    color: "#34d399",
    gradient: "linear-gradient(135deg, #34d399, #3b82f6)",
    popular: false,
  },
];

const process = [
  { step: "01", title: "Discovery Call", desc: "We talk about your idea, goals, timeline, and budget. I ask the hard questions most developers skip." },
  { step: "02", title: "Scoping & Proposal", desc: "I send a detailed proposal with milestones, tech choices, timeline, and transparent pricing." },
  { step: "03", title: "Design & Architecture", desc: "UI mockups, technical architecture, and a sprint plan before a single line of code is written." },
  { step: "04", title: "Development Sprints", desc: "Weekly demos. You see real progress, not just updates. Full transparency throughout." },
  { step: "05", title: "Testing & Launch", desc: "Rigorous QA, store submission, and a smooth launch with post launch support." },
];

export function Services() {
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
            background: "radial-gradient(ellipse, rgba(139,92,246,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <p style={{ color: "#a78bfa", fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "'Inter', sans-serif", marginBottom: "14px" }}>
              Services
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
              What I Build{" "}
              <span style={{ background: "linear-gradient(90deg, #60a5fa, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                For You
              </span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Inter', sans-serif", maxWidth: "500px", margin: "0 auto", fontSize: "1rem", lineHeight: "1.7" }}>
              Premium mobile development services tailored for startups, founders, and teams who care about quality.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.1}>
              <div
                style={{
                  background: service.popular ? "rgba(59,130,246,0.04)" : "rgba(255,255,255,0.02)",
                  border: service.popular ? "1px solid rgba(59,130,246,0.2)" : "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "20px",
                  padding: "28px",
                  height: "100%",
                  position: "relative",
                  transition: "all 0.3s",
                  display: "flex",
                  flexDirection: "column",
                }}
                className="hover:border-white/15 hover:-translate-y-1 group"
              >
                {service.popular && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-1px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
                      borderRadius: "0 0 10px 10px",
                      padding: "3px 14px",
                      fontSize: "0.68rem",
                      color: "#fff",
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: "600",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    Most Popular
                  </div>
                )}

                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    background: `${service.color}12`,
                    borderRadius: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "18px",
                    transition: "all 0.3s",
                  }}
                  className="group-hover:scale-110"
                >
                  <service.icon size={22} color={service.color} />
                </div>

                <div
                  style={{
                    fontSize: "0.72rem",
                    color: service.color,
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: "500",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    marginBottom: "6px",
                  }}
                >
                  {service.tagline}
                </div>

                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    marginBottom: "12px",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    color: "rgba(255,255,255,0.45)",
                    fontSize: "0.875rem",
                    fontFamily: "'Inter', sans-serif",
                    lineHeight: "1.7",
                    marginBottom: "20px",
                    flex: 1,
                  }}
                >
                  {service.description}
                </p>

                <div className="mb-6">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 mb-2">
                      <Check size={13} color={service.color} strokeWidth={2.5} />
                      <span style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.82rem", fontFamily: "'Inter', sans-serif" }}>
                        {f}
                      </span>
                    </div>
                  ))}
                </div>

                <NavLink
                  to="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    background: service.popular ? service.gradient : "rgba(255,255,255,0.04)",
                    border: service.popular ? "none" : "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "10px",
                    padding: "11px 20px",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: "500",
                    fontSize: "0.85rem",
                    color: service.popular ? "#fff" : service.color,
                    transition: "all 0.2s",
                    boxShadow: service.popular ? `0 0 20px ${service.color}30` : "none",
                  }}
                  className="hover:opacity-85"
                >
                  Get Started <ArrowRight size={15} />
                </NavLink>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Process */}
      <section
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          padding: "80px 0",
          background: "linear-gradient(180deg, transparent, rgba(59,130,246,0.02))",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-14">
              <p style={{ color: "#60a5fa", fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "'Inter', sans-serif", marginBottom: "12px" }}>
                How It Works
              </p>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: "700", letterSpacing: "-0.02em" }}>
                My Process
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {process.map((p, i) => (
              <FadeIn key={p.step} delay={i * 0.08} className="h-full">
                <div
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "16px",
                    padding: "22px 18px",
                    position: "relative",
                    transition: "all 0.3s",
                    height: "100%",
                  }}
                  className="hover:border-blue-500/20"
                >
                  <div
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "2.5rem",
                      fontWeight: "700",
                      background: "linear-gradient(180deg, rgba(59,130,246,0.2), transparent)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      lineHeight: "1",
                      marginBottom: "12px",
                    }}
                  >
                    {p.step}
                  </div>
                  <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.95rem", fontWeight: "600", marginBottom: "8px" }}>
                    {p.title}
                  </h4>
                  <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem", fontFamily: "'Inter', sans-serif", lineHeight: "1.65" }}>
                    {p.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <FadeIn>
          <div
            style={{
              background: "linear-gradient(135deg, rgba(59,130,246,0.08), rgba(139,92,246,0.08))",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "24px",
              padding: "60px 40px",
              textAlign: "center",
            }}
          >
            <MessageSquare size={32} color="#60a5fa" style={{ margin: "0 auto 16px" }} />
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: "700", letterSpacing: "-0.02em", marginBottom: "12px" }}>
              Not Sure What You Need?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Inter', sans-serif", maxWidth: "400px", margin: "0 auto 28px", fontSize: "0.95rem" }}>
              Drop me a message. I'll help you figure out the best approach for your app idea. No sales pitch.
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
          </div>
        </FadeIn>
      </section>
    </div>
  );
}

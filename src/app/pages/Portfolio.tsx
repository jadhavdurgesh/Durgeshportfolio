import React, { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { NavLink } from "react-router";
import {
  ArrowRight,
  ExternalLink,
  Apple,
  Smartphone,
  ChevronRight,
  X,
} from "lucide-react";
import { projects } from "@/lib/projects";

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

function PhoneFrame({ image, color }: { image: string; color: string }) {
  return (
    <div
      style={{
        width: "200px",
        height: "400px",
        background: "#0a0a0a",
        borderRadius: "32px",
        border: `2px solid ${color}40`,
        boxShadow: `0 0 60px ${color}20`,
        overflow: "hidden",
        position: "relative",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80px",
          height: "20px",
          background: "#000",
          borderRadius: "20px",
          zIndex: 10,
        }}
      />
      <img
        src={image}
        alt="App screen"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
}

export function Portfolio() {
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(null);

  return (
    <div style={{ background: "#000", color: "#fff", paddingTop: "80px" }}>
      {/* Header */}
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
              "radial-gradient(ellipse, rgba(59,130,246,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <p
              style={{
                color: "#60a5fa",
                fontSize: "0.78rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontFamily: "'Inter', sans-serif",
                marginBottom: "14px",
              }}
            >
              Portfolio
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
              Apps Built to{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Last
              </span>
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,0.45)",
                fontFamily: "'Inter', sans-serif",
                maxWidth: "500px",
                margin: "0 auto",
                fontSize: "1rem",
                lineHeight: "1.7",
              }}
            >
              Every project is a case study in clean code, polished design, and
              production-grade delivery.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Project Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.1}>
              <div
                onClick={() => setSelected(project)}
                style={{
                  background: "#0a0a0a",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "24px",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all 0.35s ease",
                  position: "relative",
                }}
                className="group hover:border-white/15 hover:-translate-y-1"
              >
                {/* Top image */}
                <div style={{ height: "240px", position: "relative", overflow: "hidden" }}>
                  <img
                    src={project.image}
                    alt={project.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                    }}
                    className="group-hover:scale-105"
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: `linear-gradient(180deg, transparent 30%, #0a0a0a 100%)`,
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: `${project.color}08`,
                    }}
                  />
                  {/* Status badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: "16px",
                      left: "16px",
                      background:
                        project.status === "Live"
                          ? "rgba(34,197,94,0.12)"
                          : "rgba(251,191,36,0.12)",
                      border: `1px solid ${project.status === "Live" ? "rgba(34,197,94,0.3)" : "rgba(251,191,36,0.3)"}`,
                      borderRadius: "100px",
                      padding: "4px 12px",
                      fontSize: "0.72rem",
                      color: project.status === "Live" ? "#22c55e" : "#fbbf24",
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: "500",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background:
                          project.status === "Live" ? "#22c55e" : "#fbbf24",
                      }}
                    />
                    {project.status}
                  </div>
                  {/* Platform badges */}
                  <div
                    style={{
                      position: "absolute",
                      top: "16px",
                      right: "16px",
                      display: "flex",
                      gap: "6px",
                    }}
                  >
                    {project.platform.map((p) => (
                      <div
                        key={p}
                        style={{
                          background: "rgba(0,0,0,0.6)",
                          border: "1px solid rgba(255,255,255,0.12)",
                          borderRadius: "6px",
                          padding: "3px 10px",
                          fontSize: "0.7rem",
                          color: "rgba(255,255,255,0.7)",
                          fontFamily: "'Inter', sans-serif",
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                          backdropFilter: "blur(10px)",
                        }}
                      >
                        {p === "iOS" ? <Apple size={10} /> : <Smartphone size={10} />}
                        {p}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "1.4rem",
                      fontWeight: "700",
                      marginBottom: "6px",
                    }}
                  >
                    {project.name}
                  </h3>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.45)",
                      fontSize: "0.875rem",
                      fontFamily: "'Inter', sans-serif",
                      marginBottom: "16px",
                    }}
                  >
                    {project.tagline}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        style={{
                          background: `${project.color}10`,
                          border: `1px solid ${project.color}20`,
                          borderRadius: "6px",
                          padding: "3px 10px",
                          fontSize: "0.72rem",
                          color: project.color,
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span
                      style={{
                        color: "rgba(255,255,255,0.35)",
                        fontSize: "0.8rem",
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {project.impact}
                    </span>
                    <button
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "0.82rem",
                        color: project.color,
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: "500",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                      }}
                    >
                      Case Study <ChevronRight size={15} />
                    </button>
                  </div>
                </div>

                {/* Bottom gradient line */}
                <div
                  style={{
                    height: "2px",
                    background: project.gradient,
                    opacity: 0,
                    transition: "opacity 0.3s",
                  }}
                  className="group-hover:opacity-100"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Case Study Modal */}
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.9)",
            zIndex: 100,
            backdropFilter: "blur(12px)",
            overflowY: "auto",
            padding: "20px",
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelected(null);
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{
              background: "#0d0d0d",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "28px",
              maxWidth: "900px",
              margin: "40px auto",
              overflow: "hidden",
            }}
          >
            {/* Hero image */}
            <div style={{ height: "300px", position: "relative" }}>
              <img
                src={selected.image}
                alt={selected.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(13,13,13,0.95) 100%)",
                }}
              />
              <button
                onClick={() => setSelected(null)}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  background: "rgba(0,0,0,0.6)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  backdropFilter: "blur(10px)",
                  color: "#fff",
                }}
              >
                <X size={18} />
              </button>
              <div
                style={{
                  position: "absolute",
                  bottom: "24px",
                  left: "32px",
                }}
              >
                <h2
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "2rem",
                    fontWeight: "700",
                    marginBottom: "6px",
                  }}
                >
                  {selected.name}
                </h2>
                <p
                  style={{
                    color: "rgba(255,255,255,0.55)",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9rem",
                  }}
                >
                  {selected.tagline}
                </p>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  { label: "Problem", content: selected.problem },
                  { label: "Solution", content: selected.solution },
                ].map((sec) => (
                  <div
                    key={sec.label}
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "14px",
                      padding: "20px",
                      gridColumn: "span 1",
                    }}
                    className="md:col-span-1"
                  >
                    <h4
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "0.8rem",
                        fontWeight: "600",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: selected.color,
                        marginBottom: "10px",
                      }}
                    >
                      {sec.label}
                    </h4>
                    <p
                      style={{
                        color: "rgba(255,255,255,0.55)",
                        fontSize: "0.85rem",
                        fontFamily: "'Inter', sans-serif",
                        lineHeight: "1.7",
                      }}
                    >
                      {sec.content}
                    </p>
                  </div>
                ))}

                {/* Results */}
                <div
                  style={{
                    background: `${selected.color}08`,
                    border: `1px solid ${selected.color}20`,
                    borderRadius: "14px",
                    padding: "20px",
                  }}
                >
                  <h4
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.8rem",
                      fontWeight: "600",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: selected.color,
                      marginBottom: "12px",
                    }}
                  >
                    Key Results
                  </h4>
                  <div className="flex flex-col gap-2">
                    {selected.results.map((r) => (
                      <div key={r} className="flex items-start gap-2">
                        <div
                          style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            background: selected.color,
                            marginTop: "6px",
                            flexShrink: 0,
                          }}
                        />
                        <span
                          style={{
                            color: "rgba(255,255,255,0.65)",
                            fontSize: "0.83rem",
                            fontFamily: "'Inter', sans-serif",
                          }}
                        >
                          {r}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tech used */}
              <div className="mb-8">
                <h4
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.8rem",
                    fontWeight: "600",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.45)",
                    marginBottom: "12px",
                  }}
                >
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selected.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: `${selected.color}12`,
                        border: `1px solid ${selected.color}25`,
                        borderRadius: "8px",
                        padding: "5px 14px",
                        fontSize: "0.8rem",
                        color: selected.color,
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: "500",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <NavLink
                  to="/contact"
                  onClick={() => setSelected(null)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: selected.gradient,
                    borderRadius: "10px",
                    padding: "12px 24px",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: "500",
                    fontSize: "0.88rem",
                    color: "#fff",
                  }}
                  className="hover:opacity-90"
                >
                  Build Something Similar <ArrowRight size={16} />
                </NavLink>
                {selected.storeUrl ? (
                  <a
                    href={selected.storeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "10px",
                      padding: "12px 24px",
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: "500",
                      fontSize: "0.88rem",
                      color: "rgba(255,255,255,0.6)",
                      cursor: "pointer",
                      textDecoration: "none",
                    }}
                    className="hover:bg-white/10"
                  >
                    <ExternalLink size={15} /> View Live App
                  </a>
                ) : null}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

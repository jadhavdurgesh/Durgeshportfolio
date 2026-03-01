import React, { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import {
  Mail,
  MapPin,
  Clock,
  Send,
  Github,
  Linkedin,
  Twitter,
  CheckCircle2,
  Sparkles,
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

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "durgesh@example.com",
    sub: "Best for project inquiries",
    color: "#60a5fa",
    href: "mailto:durgesh@example.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    sub: "Available for remote globally",
    color: "#a78bfa",
    href: null,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "< 24 Hours",
    sub: "Usually within a few hours",
    color: "#34d399",
    href: null,
  },
];

const socials = [
  { icon: Github, href: "https://github.com", label: "GitHub", color: "#fff" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "#0ea5e9" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter", color: "#60a5fa" },
];

const projectTypes = [
  "New mobile app from scratch",
  "Flutter development",
  "iOS / SwiftUI app",
  "UI implementation from Figma",
  "App performance optimization",
  "Other",
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
            background: "radial-gradient(ellipse, rgba(59,130,246,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <p style={{ color: "#60a5fa", fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "'Inter', sans-serif", marginBottom: "14px" }}>
              Contact
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
              Let's Build Something{" "}
              <span style={{ background: "linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Impactful
              </span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Inter', sans-serif", maxWidth: "500px", margin: "0 auto", fontSize: "1rem", lineHeight: "1.7" }}>
              Whether you have a fully fleshed-out idea or just a spark — I'd love to hear it. Let's find the best path forward together.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main content */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left sidebar */}
          <div className="lg:col-span-2">
            <FadeIn>
              {/* Availability */}
              <div
                style={{
                  background: "rgba(34,197,94,0.05)",
                  border: "1px solid rgba(34,197,94,0.15)",
                  borderRadius: "16px",
                  padding: "20px 22px",
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "rgba(34,197,94,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Sparkles size={20} color="#22c55e" />
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "3px" }}>
                    <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 8px #22c55e" }} />
                    <span style={{ color: "#22c55e", fontSize: "0.82rem", fontFamily: "'Inter', sans-serif", fontWeight: "600" }}>
                      Available Now
                    </span>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.78rem", fontFamily: "'Inter', sans-serif" }}>
                    Accepting new projects for Q2 2025
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Contact info cards */}
            <div className="flex flex-col gap-4 mb-8">
              {contactInfo.map((item, i) => (
                <FadeIn key={item.label} delay={i * 0.08}>
                  {item.href ? (
                    <a
                      href={item.href}
                      style={{
                        background: "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        borderRadius: "14px",
                        padding: "16px 18px",
                        display: "flex",
                        alignItems: "center",
                        gap: "14px",
                        transition: "all 0.2s",
                        textDecoration: "none",
                      }}
                      className="hover:border-white/15 block"
                    >
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "10px",
                          background: `${item.color}12`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <item.icon size={18} color={item.color} />
                      </div>
                      <div>
                        <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.72rem", fontFamily: "'Inter', sans-serif", marginBottom: "2px" }}>
                          {item.label}
                        </div>
                        <div style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.88rem", fontFamily: "'Inter', sans-serif", fontWeight: "500" }}>
                          {item.value}
                        </div>
                        <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.74rem", fontFamily: "'Inter', sans-serif" }}>
                          {item.sub}
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div
                      style={{
                        background: "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        borderRadius: "14px",
                        padding: "16px 18px",
                        display: "flex",
                        alignItems: "center",
                        gap: "14px",
                      }}
                    >
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "10px",
                          background: `${item.color}12`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <item.icon size={18} color={item.color} />
                      </div>
                      <div>
                        <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.72rem", fontFamily: "'Inter', sans-serif", marginBottom: "2px" }}>
                          {item.label}
                        </div>
                        <div style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.88rem", fontFamily: "'Inter', sans-serif", fontWeight: "500" }}>
                          {item.value}
                        </div>
                        <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.74rem", fontFamily: "'Inter', sans-serif" }}>
                          {item.sub}
                        </div>
                      </div>
                    </div>
                  )}
                </FadeIn>
              ))}
            </div>

            {/* Socials */}
            <FadeIn delay={0.3}>
              <div
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "14px",
                  padding: "18px",
                }}
              >
                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.74rem", fontFamily: "'Inter', sans-serif", marginBottom: "12px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Connect with me
                </p>
                <div className="flex gap-3">
                  {socials.map(({ icon: Icon, href, label, color }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "10px",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.2s",
                      }}
                      className="hover:border-white/20 hover:bg-white/8"
                    >
                      <Icon size={18} color={color} />
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Trust indicators */}
            <FadeIn delay={0.35}>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {["NDA-Friendly", "Transparent Pricing", "Weekly Updates", "On-Time Delivery"].map((t) => (
                  <div
                    key={t}
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.05)",
                      borderRadius: "10px",
                      padding: "10px 12px",
                      display: "flex",
                      alignItems: "center",
                      gap: "7px",
                    }}
                  >
                    <CheckCircle2 size={13} color="#34d399" />
                    <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.75rem", fontFamily: "'Inter', sans-serif" }}>
                      {t}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <FadeIn delay={0.1}>
              <div
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "24px",
                  padding: "clamp(24px, 4vw, 40px)",
                }}
              >
                {!submitted ? (
                  <>
                    <h2
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "1.4rem",
                        fontWeight: "700",
                        marginBottom: "6px",
                      }}
                    >
                      Start a Conversation
                    </h2>
                    <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.85rem", fontFamily: "'Inter', sans-serif", marginBottom: "28px" }}>
                      Tell me about your project. I'll respond within 24 hours.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      {/* Row: Name + Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                          { name: "name", label: "Your Name", placeholder: "John Appleseed", type: "text" },
                          { name: "email", label: "Email Address", placeholder: "john@company.com", type: "email" },
                        ].map((f) => (
                          <div key={f.name}>
                            <label
                              style={{
                                display: "block",
                                color: "rgba(255,255,255,0.5)",
                                fontSize: "0.78rem",
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: "500",
                                marginBottom: "7px",
                                letterSpacing: "0.03em",
                              }}
                            >
                              {f.label}
                            </label>
                            <input
                              type={f.type}
                              name={f.name}
                              placeholder={f.placeholder}
                              value={formData[f.name as keyof typeof formData]}
                              onChange={handleChange}
                              required
                              style={{
                                width: "100%",
                                background: "rgba(255,255,255,0.04)",
                                border: "1px solid rgba(255,255,255,0.09)",
                                borderRadius: "10px",
                                padding: "11px 14px",
                                color: "#fff",
                                fontFamily: "'Inter', sans-serif",
                                fontSize: "0.875rem",
                                outline: "none",
                                transition: "border-color 0.2s",
                                boxSizing: "border-box",
                              }}
                              onFocus={(e) => (e.target.style.borderColor = "rgba(59,130,246,0.4)")}
                              onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.09)")}
                            />
                          </div>
                        ))}
                      </div>

                      {/* Project type */}
                      <div>
                        <label style={{ display: "block", color: "rgba(255,255,255,0.5)", fontSize: "0.78rem", fontFamily: "'Inter', sans-serif", fontWeight: "500", marginBottom: "7px", letterSpacing: "0.03em" }}>
                          Project Type
                        </label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          required
                          style={{
                            width: "100%",
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.09)",
                            borderRadius: "10px",
                            padding: "11px 14px",
                            color: formData.projectType ? "#fff" : "rgba(255,255,255,0.35)",
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "0.875rem",
                            outline: "none",
                            cursor: "pointer",
                            appearance: "none",
                            boxSizing: "border-box",
                          }}
                        >
                          <option value="" style={{ background: "#111", color: "rgba(255,255,255,0.5)" }}>
                            Select project type...
                          </option>
                          {projectTypes.map((t) => (
                            <option key={t} value={t} style={{ background: "#111", color: "#fff" }}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Budget */}
                      <div>
                        <label style={{ display: "block", color: "rgba(255,255,255,0.5)", fontSize: "0.78rem", fontFamily: "'Inter', sans-serif", fontWeight: "500", marginBottom: "7px", letterSpacing: "0.03em" }}>
                          Budget Range <span style={{ color: "rgba(255,255,255,0.25)", fontWeight: "400" }}>(optional)</span>
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          style={{
                            width: "100%",
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.09)",
                            borderRadius: "10px",
                            padding: "11px 14px",
                            color: formData.budget ? "#fff" : "rgba(255,255,255,0.35)",
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "0.875rem",
                            outline: "none",
                            cursor: "pointer",
                            appearance: "none",
                            boxSizing: "border-box",
                          }}
                        >
                          <option value="" style={{ background: "#111" }}>Select budget range...</option>
                          {["< $5k", "$5k – $15k", "$15k – $30k", "$30k – $60k", "$60k+", "Let's discuss"].map((b) => (
                            <option key={b} value={b} style={{ background: "#111", color: "#fff" }}>{b}</option>
                          ))}
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label style={{ display: "block", color: "rgba(255,255,255,0.5)", fontSize: "0.78rem", fontFamily: "'Inter', sans-serif", fontWeight: "500", marginBottom: "7px", letterSpacing: "0.03em" }}>
                          Tell Me About Your Project
                        </label>
                        <textarea
                          name="message"
                          placeholder="Describe your app idea, what problem it solves, target users, and any technical constraints..."
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          style={{
                            width: "100%",
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.09)",
                            borderRadius: "10px",
                            padding: "12px 14px",
                            color: "#fff",
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "0.875rem",
                            outline: "none",
                            resize: "vertical",
                            minHeight: "130px",
                            transition: "border-color 0.2s",
                            boxSizing: "border-box",
                          }}
                          onFocus={(e) => (e.target.style.borderColor = "rgba(59,130,246,0.4)")}
                          onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.09)")}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "10px",
                          background: loading
                            ? "rgba(59,130,246,0.5)"
                            : "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                          borderRadius: "12px",
                          padding: "14px 28px",
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: "600",
                          fontSize: "0.95rem",
                          color: "#fff",
                          border: "none",
                          cursor: loading ? "not-allowed" : "pointer",
                          boxShadow: "0 0 28px rgba(59,130,246,0.3)",
                          transition: "all 0.2s",
                          width: "100%",
                        }}
                        className="hover:opacity-90"
                      >
                        {loading ? (
                          <>
                            <div
                              style={{
                                width: "16px",
                                height: "16px",
                                border: "2px solid rgba(255,255,255,0.3)",
                                borderTopColor: "#fff",
                                borderRadius: "50%",
                                animation: "spin 0.8s linear infinite",
                              }}
                            />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={17} /> Send Message
                          </>
                        )}
                      </button>
                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    style={{ textAlign: "center", padding: "40px 20px" }}
                  >
                    <div
                      style={{
                        width: "72px",
                        height: "72px",
                        borderRadius: "50%",
                        background: "rgba(34,197,94,0.1)",
                        border: "1px solid rgba(34,197,94,0.25)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 24px",
                      }}
                    >
                      <CheckCircle2 size={32} color="#22c55e" />
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "1.6rem",
                        fontWeight: "700",
                        marginBottom: "12px",
                      }}
                    >
                      Message Sent!
                    </h3>
                    <p
                      style={{
                        color: "rgba(255,255,255,0.5)",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.9rem",
                        lineHeight: "1.7",
                        maxWidth: "360px",
                        margin: "0 auto 28px",
                      }}
                    >
                      Thank you for reaching out, {formData.name}. I'll review your message and get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", projectType: "", budget: "", message: "" }); }}
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "10px",
                        padding: "11px 22px",
                        color: "rgba(255,255,255,0.6)",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.875rem",
                        cursor: "pointer",
                        transition: "all 0.2s",
                      }}
                      className="hover:bg-white/10"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

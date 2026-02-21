import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Apple, Smartphone, ExternalLink, Clock, CheckCircle2 } from "lucide-react";

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

const products = [
  {
    id: "femtrack",
    name: "FemTrack",
    icon: "🌸",
    iconBg: "linear-gradient(135deg, #ec4899, #8b5cf6)",
    tagline: "Women's Health & Cycle Tracking",
    description:
      "A privacy-first women's health app that empowers users to track menstrual cycles, log symptoms, monitor moods, and gain predictive insights — all in a beautifully minimal interface.",
    platform: ["flutter", "ios"],
    status: "live",
    color: "#ec4899",
    gradient: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
    image: "https://images.unsplash.com/photo-1675119711588-ecd395253cec?w=500&q=80",
    highlights: ["Cycle prediction AI", "Symptom logging", "Encrypted health data", "Apple Health sync"],
    storeLink: "#",
    playLink: "#",
  },
  {
    id: "pillowtalk",
    name: "PillowTalk",
    icon: "🌙",
    iconBg: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
    tagline: "AI-Powered Sleep Wellness",
    description:
      "Sleep better with AI-generated coaching, guided meditations, ambient soundscapes, and detailed sleep analytics. PillowTalk is the only sleep app that actually explains your patterns.",
    platform: ["flutter"],
    status: "live",
    color: "#8b5cf6",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
    image: "https://images.unsplash.com/photo-1673974943582-771d2b7ee30d?w=500&q=80",
    highlights: ["AI sleep coaching", "Ambient soundscapes", "Guided meditations", "Sleep score tracking"],
    storeLink: "#",
    playLink: "#",
  },
  {
    id: "nutrahara",
    name: "Nutrahara",
    icon: "🥗",
    iconBg: "linear-gradient(135deg, #3b82f6, #06b6d4)",
    tagline: "iOS Nutrition Intelligence",
    description:
      "A native iOS nutrition tracker with a 500k+ food database, barcode scanning, and gorgeous macro dashboards. Built entirely in SwiftUI with deep HealthKit integration.",
    platform: ["ios"],
    status: "live",
    color: "#3b82f6",
    gradient: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
    image: "https://images.unsplash.com/photo-1758786977080-a5e60a3f843c?w=500&q=80",
    highlights: ["500k+ food database", "Barcode scanner", "HealthKit integration", "Macro tracking"],
    storeLink: "#",
    playLink: null,
  },
  {
    id: "aibudget",
    name: "AI Budget Tracker",
    icon: "💰",
    iconBg: "linear-gradient(135deg, #34d399, #3b82f6)",
    tagline: "Smart Finance with AI Insights",
    description:
      "The next-gen finance app. AI analyzes your spending, predicts future expenses, and coaches you in natural language. Real-time bank sync, multi-currency, beautifully designed in Flutter.",
    platform: ["flutter"],
    status: "coming",
    color: "#34d399",
    gradient: "linear-gradient(135deg, #34d399 0%, #3b82f6 100%)",
    image: "https://images.unsplash.com/photo-1591467454366-fb32b72b20e9?w=500&q=80",
    highlights: ["AI spending analysis", "Real-time bank sync", "Multi-currency support", "Natural language coaching"],
    storeLink: null,
    playLink: null,
  },
];

export function Products() {
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
            background: "radial-gradient(ellipse, rgba(52,211,153,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <p style={{ color: "#34d399", fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "'Inter', sans-serif", marginBottom: "14px" }}>
              Shipped Products
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
              Apps I've{" "}
              <span style={{ background: "linear-gradient(90deg, #34d399, #60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Built & Shipped
              </span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Inter', sans-serif", maxWidth: "500px", margin: "0 auto", fontSize: "1rem", lineHeight: "1.7" }}>
              Real products. Real users. Real impact. Not just portfolio pieces — these are live apps people use daily.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="flex flex-col gap-8">
          {products.map((product, i) => (
            <FadeIn key={product.id} delay={i * 0.1}>
              <div
                style={{
                  background: "#0a0a0a",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "24px",
                  overflow: "hidden",
                  transition: "all 0.3s",
                  opacity: product.status === "coming" ? 0.85 : 1,
                }}
                className="hover:border-white/12 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Image side */}
                  <div
                    style={{
                      height: "300px",
                      position: "relative",
                      overflow: "hidden",
                      order: i % 2 === 0 ? 1 : 2,
                    }}
                    className="lg:order-none"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.5s",
                        filter: product.status === "coming" ? "grayscale(30%) brightness(0.6)" : "brightness(0.75)",
                      }}
                      className="group-hover:scale-105"
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: `linear-gradient(${i % 2 === 0 ? "270deg" : "90deg"}, #0a0a0a 0%, transparent 60%)`,
                      }}
                    />
                    {product.status === "coming" && (
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "rgba(0,0,0,0.4)",
                        }}
                      >
                        <div
                          style={{
                            background: "rgba(0,0,0,0.8)",
                            border: "1px solid rgba(52,211,153,0.3)",
                            borderRadius: "100px",
                            padding: "10px 24px",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            backdropFilter: "blur(10px)",
                          }}
                        >
                          <Clock size={16} color="#34d399" />
                          <span style={{ color: "#34d399", fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", fontWeight: "500" }}>
                            Coming Q2 2025
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content side */}
                  <div className="p-8 flex flex-col justify-center">
                    {/* App icon + name */}
                    <div className="flex items-center gap-4 mb-5">
                      <div
                        style={{
                          width: "64px",
                          height: "64px",
                          borderRadius: "16px",
                          background: product.iconBg,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "1.8rem",
                          boxShadow: `0 0 20px ${product.color}30`,
                          flexShrink: 0,
                        }}
                      >
                        {product.icon}
                      </div>
                      <div>
                        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.5rem", fontWeight: "700", marginBottom: "2px" }}>
                          {product.name}
                        </h3>
                        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.82rem", fontFamily: "'Inter', sans-serif" }}>
                          {product.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Platform + Status badges */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {product.platform.map((p) => (
                        <div
                          key={p}
                          style={{
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            borderRadius: "7px",
                            padding: "4px 12px",
                            fontSize: "0.72rem",
                            color: "rgba(255,255,255,0.6)",
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: "500",
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                            textTransform: "capitalize",
                          }}
                        >
                          {p === "ios" ? <Apple size={11} /> : <Smartphone size={11} />}
                          {p === "ios" ? "iOS" : "Flutter"}
                        </div>
                      ))}
                      <div
                        style={{
                          background: product.status === "live" ? "rgba(34,197,94,0.1)" : "rgba(52,211,153,0.1)",
                          border: `1px solid ${product.status === "live" ? "rgba(34,197,94,0.25)" : "rgba(52,211,153,0.25)"}`,
                          borderRadius: "7px",
                          padding: "4px 12px",
                          fontSize: "0.72rem",
                          color: product.status === "live" ? "#22c55e" : "#34d399",
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: "600",
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {product.status === "live" ? <CheckCircle2 size={11} /> : <Clock size={11} />}
                        {product.status === "live" ? "Live" : "In Progress"}
                      </div>
                    </div>

                    <p
                      style={{
                        color: "rgba(255,255,255,0.5)",
                        fontSize: "0.9rem",
                        fontFamily: "'Inter', sans-serif",
                        lineHeight: "1.75",
                        marginBottom: "20px",
                      }}
                    >
                      {product.description}
                    </p>

                    {/* Highlights */}
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {product.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-2">
                          <div
                            style={{
                              width: "6px",
                              height: "6px",
                              borderRadius: "50%",
                              background: product.color,
                              flexShrink: 0,
                            }}
                          />
                          <span
                            style={{
                              color: "rgba(255,255,255,0.5)",
                              fontSize: "0.78rem",
                              fontFamily: "'Inter', sans-serif",
                            }}
                          >
                            {h}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Store buttons */}
                    {product.status === "live" ? (
                      <div className="flex flex-wrap gap-3">
                        {product.storeLink && (
                          <a
                            href={product.storeLink}
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "8px",
                              background: "#000",
                              border: "1px solid rgba(255,255,255,0.15)",
                              borderRadius: "10px",
                              padding: "10px 18px",
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "0.82rem",
                              fontWeight: "500",
                              color: "#fff",
                              transition: "all 0.2s",
                            }}
                            className="hover:border-white/30"
                          >
                            <Apple size={16} /> App Store
                            <ExternalLink size={12} color="rgba(255,255,255,0.4)" />
                          </a>
                        )}
                        {product.playLink && (
                          <a
                            href={product.playLink}
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "8px",
                              background: "#000",
                              border: "1px solid rgba(255,255,255,0.15)",
                              borderRadius: "10px",
                              padding: "10px 18px",
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "0.82rem",
                              fontWeight: "500",
                              color: "#fff",
                              transition: "all 0.2s",
                            }}
                            className="hover:border-white/30"
                          >
                            <Smartphone size={16} /> Play Store
                            <ExternalLink size={12} color="rgba(255,255,255,0.4)" />
                          </a>
                        )}
                      </div>
                    ) : (
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          background: `${product.color}10`,
                          border: `1px solid ${product.color}25`,
                          borderRadius: "10px",
                          padding: "10px 18px",
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.82rem",
                          fontWeight: "500",
                          color: product.color,
                        }}
                      >
                        <Clock size={15} /> Launching Q2 2025 — stay tuned
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}

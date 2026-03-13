import React, { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { BookOpen, Code2, ShoppingCart, ExternalLink, Sparkles } from "lucide-react";

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

export type ProductType = "ebook" | "app_code";

export interface Product {
  id: string;
  type: ProductType;
  name: string;
  tagline: string;
  description: string;
  image: string;
  color: string;
  gradient: string;
  highlights: string[];
  price?: string;
  buyUrl: string;
}

const products: Product[] = [
  {
    id: "Design From Zero",
    type: "ebook",
    name: "Flutter Clean Architecture",
    tagline: "From zero to mastery",
    description: "Comprehensive 65-page ebook covering everything from fundamental principles to advanced techniques in UI/UX design.",
    image: "https://uiuxshelly.vercel.app/assets/2-C1BiLFaB.png",
    color: "#54C5F8",
    gradient: "linear-gradient(135deg, #54C5F8 0%, #3b82f6 100%)",
    highlights: ["UI UX", "Product Designer", "Figma", "Real projects"],
    price: "$29",
    buyUrl: "https://topmate.io/shelly07/1816027?utm_source=public_profile&utm_campaign=shelly07",
  },
  {
    id: "swiftui",
    type: "ebook",
    name: "Build Your Portfolio From Scratch With Me",
    tagline: "This ebook helps you craft a portfolio that truly stands out",
    description: "Everyone teaches design, tools, and case studies but no one clearly explains the real ways to make money as a beginner. I struggled, experimented, and learned everything the hard way. This eBook is the guide I wish someone had given me. Inside, I break down the earning paths in a simple, honest, and beginner-friendly way so you know exactly where to start and how to grow even if you’re still learning UI/UX.",
    image: "https://uiuxshelly.vercel.app/assets/1-BFCqUArY.png",
    color: "#F05138",
    gradient: "linear-gradient(135deg, #F05138 0%, #ec4899 100%)",
    highlights: ["UI UX", "Product Designer", "Figma", "Portfolio"],
    price: "$24",
    buyUrl: "https://topmate.io/shelly07/1815833?utm_source=public_profile&utm_campaign=shelly07",
  },
  {
    id: "femtrack-source",
    type: "app_code",
    name: "How To Earn From UI/UX Designing",
    tagline: "Production Flutter app",
    description: "This ebook helps you to start earn from UI/UX Designing.",
    image: "https://uiuxshelly.vercel.app/assets/3-CsPL_l1_.png",
    color: "#ec4899",
    gradient: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
    highlights: ["Full source", "Documentation", "Firebase setup", "App Store ready"],
    price: "$199",
    buyUrl: "https://topmate.io/shelly07/1816043?utm_source=public_profile&utm_campaign=shelly07",
  },
  {
    id: "pillowtalk-source",
    type: "app_code",
    name: "Build Your First Case Study With Me",
    tagline: "Build Your First Case Study With Me",
    description: "In this E-Book, you’ll learn how to create a clear, story-driven UI/UX case study using the format: Problem → Research → Ideas → UI → Learnings. You’ll also learn how to explain your thinking, highlight user needs, and make your portfolio stand out, along with receiving personal feedback on your work.",
    image: "https://uiuxshelly.vercel.app/assets/4-B49ANgFQ.png",
    color: "#8b5cf6",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
    highlights: ["Flutter", "AI integration", "Audio", "Analytics"],
    price: "$249",
    buyUrl: "#",
  },
  {
    id: "nutrahara-source",
    type: "app_code",
    name: "Wireframing 101: Where Every Great Design Begins",
    tagline: "Native SwiftUI nutrition app",
    description: "Complete SwiftUI source: 500k+ food database, barcode scanning, HealthKit sync, and macro dashboards. Production-quality native iOS.",
    image: "https://uiuxshelly.vercel.app/assets/232-3q9WQhvQ.png",
    color: "#3b82f6",
    gradient: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
    highlights: ["SwiftUI", "HealthKit", "Barcode", "Food DB"],
    price: "$299",
    buyUrl: "#",
  },
];

const filters: { value: ProductType | "all"; label: string; icon: typeof BookOpen }[] = [
  { value: "all", label: "All", icon: Sparkles },
  { value: "ebook", label: "Ebooks", icon: BookOpen },
  { value: "app_code", label: "App Code", icon: Code2 },
];

export function Products() {
  const [filter, setFilter] = useState<ProductType | "all">("all");
  const filtered =
    filter === "all" ? products : products.filter((p) => p.type === filter);

  return (
    <div style={{ background: "#000", color: "#fff", paddingTop: "80px", minHeight: "100vh" }}>
      {/* Header */}
      <section style={{ padding: "80px 0 48px", position: "relative", overflow: "hidden" }}>
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
            <p
              style={{
                color: "#34d399",
                fontSize: "0.78rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontFamily: "'Inter', sans-serif",
                marginBottom: "14px",
              }}
            >
              Products
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
              Ebooks &{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #34d399, #60a5fa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                App Code
              </span>
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,0.45)",
                fontFamily: "'Inter', sans-serif",
                maxWidth: "520px",
                margin: "0 auto",
                fontSize: "1rem",
                lineHeight: "1.7",
              }}
            >
              Learn from ebooks or jump-start your project with production-ready Flutter & iOS source code.
            </p>
          </FadeIn>
        </div>

        {/* Filter tabs */}
        <FadeIn delay={0.1}>
          <div className="max-w-7xl mx-auto px-6 flex justify-center mt-10">
            <div
              style={{
                display: "inline-flex",
                gap: "4px",
                padding: "6px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "14px",
              }}
            >
              {filters.map((f) => {
                const active = filter === f.value;
                const Icon = f.icon;
                return (
                  <button
                    key={f.value}
                    type="button"
                    onClick={() => setFilter(f.value)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "10px 20px",
                      borderRadius: "10px",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.9rem",
                      fontWeight: "500",
                      color: active ? "#fff" : "rgba(255,255,255,0.5)",
                      background: active ? "rgba(52,211,153,0.15)" : "transparent",
                      border: active ? "1px solid rgba(52,211,153,0.35)" : "1px solid transparent",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      if (!active) {
                        e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                        e.currentTarget.style.color = "rgba(255,255,255,0.85)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!active) {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                      }
                    }}
                  >
                    <Icon size={18} />
                    {f.label}
                  </button>
                );
              })}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Product grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product, i) => (
            <FadeIn key={product.id} delay={i * 0.08}>
              <div
                style={{
                  background: "#0a0a0a",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "24px",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
                className="hover:border-white/12 group"
              >
                {/* Cover */}
                <div
                  style={{
                    height: "200px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
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
                      background: `linear-gradient(180deg, transparent 40%, #0a0a0a 100%)`,
                    }}
                  />
                  {/* Type badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: "14px",
                      left: "14px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "6px 12px",
                      borderRadius: "10px",
                      background: "rgba(0,0,0,0.7)",
                      backdropFilter: "blur(8px)",
                      border: `1px solid ${product.color}40`,
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.72rem",
                      fontWeight: "600",
                      color: product.color,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {product.type === "ebook" ? (
                      <BookOpen size={12} />
                    ) : (
                      <Code2 size={12} />
                    )}
                    {product.type === "ebook" ? "Ebook" : "App Code"}
                  </div>
                  {product.price && (
                    <div
                      style={{
                        position: "absolute",
                        top: "14px",
                        right: "14px",
                        padding: "6px 12px",
                        borderRadius: "10px",
                        background: "rgba(0,0,0,0.75)",
                        backdropFilter: "blur(8px)",
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "0.95rem",
                        fontWeight: "700",
                        color: "#fff",
                      }}
                    >
                      {product.price}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "1.25rem",
                      fontWeight: "700",
                      marginBottom: "4px",
                      lineHeight: "1.3",
                    }}
                  >
                    {product.name}
                  </h3>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.45)",
                      fontSize: "0.8rem",
                      fontFamily: "'Inter', sans-serif",
                      marginBottom: "12px",
                    }}
                  >
                    {product.tagline}
                  </p>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.55)",
                      fontSize: "0.88rem",
                      fontFamily: "'Inter', sans-serif",
                      lineHeight: "1.6",
                      marginBottom: "16px",
                      flex: 1,
                    }}
                  >
                    {product.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {product.highlights.slice(0, 4).map((h) => (
                      <span
                        key={h}
                        style={{
                          padding: "4px 10px",
                          borderRadius: "8px",
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          fontSize: "0.72rem",
                          color: "rgba(255,255,255,0.55)",
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Buy Now */}
                  <a
                    href={product.buyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                      width: "100%",
                      padding: "14px 20px",
                      borderRadius: "14px",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.95rem",
                      fontWeight: "600",
                      color: "#000",
                      background: `linear-gradient(135deg, #34d399 0%, #10b981 100%)`,
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.25s ease",
                      boxShadow: "0 4px 20px rgba(52,211,153,0.25)",
                    }}
                    className="hover:opacity-95"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 8px 28px rgba(52,211,153,0.35)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 4px 20px rgba(52,211,153,0.25)";
                    }}
                  >
                    <ShoppingCart size={18} />
                    Buy Now
                    <ExternalLink size={14} style={{ opacity: 0.8 }} />
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {filtered.length === 0 && (
          <FadeIn>
            <div
              style={{
                textAlign: "center",
                padding: "60px 24px",
                color: "rgba(255,255,255,0.4)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              No products in this category yet. Check back soon.
            </div>
          </FadeIn>
        )}
      </section>
    </div>
  );
}

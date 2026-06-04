import React, { useRef } from "react";
import { NavLink } from "react-router";
import { motion, useInView } from "motion/react";
import {
  ArrowRight,
  Download,
  Smartphone,
  Star,
  Users,
  Zap,
  Shield,
  ChevronRight,
  Quote,
} from "lucide-react";
import { resumeUrl } from "@/lib/images";

const techStack = [
  { name: "Flutter", color: "#54C5F8" },
  { name: "React Native", color: "#61DAFB" },
  { name: "Kotlin", color: "#7F52FF" },
  { name: "Jetpack Compose", color: "#3DDC84" },
  { name: "Dart", color: "#00B4AB" },
  { name: "Firebase", color: "#FFA000" },
  { name: "REST APIs", color: "#60a5fa" },
  { name: "Node.js", color: "#68A063" },
  { name: "Git", color: "#F05032" },
  { name: "Supabase", color: "#3ECF8E" },
];

const stats = [
  { value: "10+", label: "Apps Shipped", icon: Smartphone },
  { value: "10+", label: "Happy Clients", icon: Users },
  { value: "3+", label: "Years Exp.", icon: Zap },
  { value: "100%", label: "Production ready", icon: Shield },
];

const featuredProjects = [
  {
    name: "NewsApp",
    platform: "Kotlin & Jetpack Compose",
    impact: "Offline first Android news app with Room caching and WorkManager sync",
    color: "#3DDC84",
    gradient: "linear-gradient(135deg, #3DDC84, #3b82f6)",
    tag: "Live",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&q=80",
  },
  {
    name: "FemTrack",
    platform: "Flutter & Android",
    impact: "Women's health app with personalized features and real time data flows",
    color: "#ec4899",
    gradient: "linear-gradient(135deg, #ec4899, #8b5cf6)",
    tag: "Live",
    image: "https://images.unsplash.com/photo-1675119711588-ecd395253cec?w=400&q=80",
  },
  {
    name: "MailNimble",
    platform: "Flutter & Node.js",
    impact: "AI powered email assistant with Gmail OAuth2 and smart tone based replies",
    color: "#8b5cf6",
    gradient: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
    tag: "Live",
    image: "https://images.unsplash.com/photo-1596526131083-e8e83c8ab5c0?w=400&q=80",
  },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Founder, FemTrack",
    text: "Durgesh shipped our MVP in 6 weeks with pixel perfect UI. He doesn't just code. He thinks product. Highly recommend for any mobile first startup.",
    rating: 5,
    avatar: "SM",
  },
  {
    name: "Alex Chen",
    role: "CEO, SleepTech",
    text: "The cleanest Flutter code I've ever seen. Durgesh's attention to detail and production mindset made PillowTalk the polished app it is today.",
    rating: 5,
    avatar: "AC",
  },
  {
    name: "Priya Sharma",
    role: "Product Manager, Nutrahara",
    text: "Durgesh shipped our Flutter app end to end, from APIs to Play Store. Strong Android native skills and a production mindset throughout.",
    rating: 5,
    avatar: "PS",
  },
];

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
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function PhoneMockup({ image, color }: { image: string; color: string }) {
  return (
    <div
      style={{
        width: "220px",
        height: "440px",
        background: "#111",
        borderRadius: "36px",
        border: `2px solid ${color}40`,
        boxShadow: `0 0 40px ${color}30, inset 0 0 0 1px rgba(255,255,255,0.05)`,
        overflow: "hidden",
        position: "relative",
        flexShrink: 0,
      }}
    >
      {/* Notch */}
      <div
        style={{
          position: "absolute",
          top: "12px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "90px",
          height: "22px",
          background: "#000",
          borderRadius: "20px",
          zIndex: 10,
        }}
      />
      <img
        src={image}
        alt="App screenshot"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "80px",
          background: `linear-gradient(transparent, ${color}20)`,
        }}
      />
    </div>
  );
}

export function Home() {
  return (
    <div style={{ background: "#000", color: "#fff" }}>
      {/* ─── HERO ─── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          paddingTop: "80px",
        }}
      >
        {/* Background glows */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "10%",
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
            filter: "blur(40px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: "5%",
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)",
            filter: "blur(40px)",
            pointerEvents: "none",
          }}
        />
        {/* Grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 py-20 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "rgba(59,130,246,0.1)",
                    border: "1px solid rgba(59,130,246,0.25)",
                    borderRadius: "100px",
                    padding: "6px 16px",
                    marginBottom: "28px",
                  }}
                >
                  <div
                    style={{
                      width: "7px",
                      height: "7px",
                      background: "#22c55e",
                      borderRadius: "50%",
                      boxShadow: "0 0 8px #22c55e",
                    }}
                  />
                  <span
                    style={{
                      color: "#60a5fa",
                      fontSize: "0.8rem",
                      fontFamily: "'Inter', sans-serif",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Available for new projects
                  </span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(2.8rem, 5vw, 4.2rem)",
                  fontWeight: "700",
                  lineHeight: "1.1",
                  marginBottom: "24px",
                  letterSpacing: "-0.02em",
                }}
              >
                Crafting Elite{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Mobile Apps
                </span>{" "}
                That Ship.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "1.1rem",
                  lineHeight: "1.75",
                  maxWidth: "500px",
                  marginBottom: "40px",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                I'm{" "}
                <span style={{ color: "rgba(255,255,255,0.9)", fontWeight: "500" }}>
                  Durgesh Jadhav
                </span>
                , a mobile engineer building production apps with Flutter, React
                Native, and Android (Kotlin and Jetpack Compose). 10+ apps shipped.
                Real users. Real results.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <NavLink
                  to="/portfolio"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                    borderRadius: "10px",
                    padding: "14px 28px",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: "500",
                    fontSize: "0.95rem",
                    color: "#fff",
                    boxShadow: "0 0 30px rgba(59,130,246,0.35)",
                    transition: "all 0.2s",
                  }}
                  className="hover:opacity-90 hover:scale-105"
                >
                  View My Work <ArrowRight size={17} />
                </NavLink>
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "10px",
                    padding: "14px 28px",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: "500",
                    fontSize: "0.95rem",
                    color: "rgba(255,255,255,0.8)",
                    transition: "all 0.2s",
                    textDecoration: "none",
                  }}
                  className="hover:border-white/30 hover:bg-white/10"
                >
                  <Download size={17} /> Download CV
                </a>
              </motion.div>

              {/* Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-3 mt-10"
              >
                {["Flutter", "React Native", "Jetpack Compose"].map(
                  (badge) => (
                    <span
                      key={badge}
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "6px",
                        padding: "5px 12px",
                        fontSize: "0.75rem",
                        color: "rgba(255,255,255,0.5)",
                        fontFamily: "'Inter', sans-serif",
                        letterSpacing: "0.03em",
                      }}
                    >
                      {badge}
                    </span>
                  )
                )}
              </motion.div>
            </div>

            {/* Right: Phone Mockups */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex items-center justify-center"
              style={{ minHeight: "520px" }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "center",
                  transform: "perspective(1000px) rotateY(-8deg)",
                }}
              >
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{ marginTop: "60px" }}
                >
                  <PhoneMockup
                    image="/assets/home1.png"
                    color="#ec4899"
                  />
                </motion.div>
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  <PhoneMockup
                    image="/assets/home2.png"
                    color="#60a5fa"
                  />
                </motion.div>
              </div>
              {/* Glow under phones */}
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "400px",
                  height: "100px",
                  background:
                    "radial-gradient(ellipse, rgba(59,130,246,0.2) 0%, transparent 70%)",
                  filter: "blur(20px)",
                  pointerEvents: "none",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── TECH STACK STRIP ─── */}
      <section
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          padding: "28px 0",
          background:
            "linear-gradient(90deg, transparent, rgba(59,130,246,0.03), transparent)",
          overflow: "hidden",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <p
            style={{
              color: "rgba(255,255,255,0.25)",
              fontSize: "0.72rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textAlign: "center",
              marginBottom: "20px",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Tech Stack
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 16px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "8px",
                  transition: "all 0.2s",
                }}
                className="hover:border-white/15 cursor-default"
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: tech.color,
                    boxShadow: `0 0 8px ${tech.color}80`,
                  }}
                />
                <span
                  style={{
                    fontSize: "0.82rem",
                    color: "rgba(255,255,255,0.6)",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: "500",
                  }}
                >
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1}>
              <div
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "16px",
                  padding: "28px 24px",
                  textAlign: "center",
                  transition: "all 0.3s",
                }}
                className="hover:border-blue-500/20 hover:bg-blue-500/5 group"
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    background: "linear-gradient(135deg, #3b82f620, #8b5cf620)",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 14px",
                  }}
                >
                  <stat.icon size={20} color="#60a5fa" />
                </div>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "2.2rem",
                    fontWeight: "700",
                    background: "linear-gradient(90deg, #60a5fa, #a78bfa)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    lineHeight: "1",
                    marginBottom: "8px",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    color: "rgba(255,255,255,0.45)",
                    fontSize: "0.82rem",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ─── FEATURED PROJECTS ─── */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
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
              Featured Work
            </p>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                fontWeight: "700",
                letterSpacing: "-0.02em",
                marginBottom: "14px",
              }}
            >
              Apps That Are{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #60a5fa, #a78bfa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Live & Loved
              </span>
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.45)",
                fontFamily: "'Inter', sans-serif",
                maxWidth: "500px",
                margin: "0 auto",
                fontSize: "0.95rem",
              }}
            >
              Production apps used by real people, not portfolio placeholders.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project, i) => (
            <FadeIn key={project.name} delay={i * 0.12}>
              <div
                style={{
                  background: "#0a0a0a",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "20px",
                  overflow: "hidden",
                  transition: "all 0.3s",
                  cursor: "pointer",
                }}
                className="group hover:border-white/15 hover:-translate-y-1"
              >
                {/* Image */}
                <div
                  style={{
                    height: "200px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.4s",
                    }}
                    className="group-hover:scale-105"
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: `linear-gradient(180deg, transparent 40%, #0a0a0a)`,
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "14px",
                      right: "14px",
                      background: "#22c55e20",
                      border: "1px solid #22c55e40",
                      borderRadius: "100px",
                      padding: "3px 10px",
                      fontSize: "0.7rem",
                      color: "#22c55e",
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: "500",
                    }}
                  >
                    {project.tag}
                  </div>
                </div>

                <div className="p-6">
                  <div
                    style={{
                      fontSize: "0.72rem",
                      color: "rgba(255,255,255,0.35)",
                      fontFamily: "'Inter', sans-serif",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      marginBottom: "6px",
                    }}
                  >
                    {project.platform}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "1.3rem",
                      fontWeight: "600",
                      marginBottom: "8px",
                    }}
                  >
                    {project.name}
                  </h3>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.45)",
                      fontSize: "0.85rem",
                      fontFamily: "'Inter', sans-serif",
                      lineHeight: "1.6",
                      marginBottom: "16px",
                    }}
                  >
                    {project.impact}
                  </p>
                  <NavLink
                    to="/portfolio"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "0.82rem",
                      color: "#60a5fa",
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: "500",
                    }}
                  >
                    Case Study <ChevronRight size={15} />
                  </NavLink>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="text-center mt-10">
            <NavLink
              to="/portfolio"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "10px",
                padding: "12px 28px",
                color: "rgba(255,255,255,0.7)",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9rem",
                transition: "all 0.2s",
              }}
              className="hover:border-white/20 hover:text-white"
            >
              View All Projects <ArrowRight size={16} />
            </NavLink>
          </div>
        </FadeIn>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section
        style={{
          background: "linear-gradient(180deg, #000 0%, #050510 100%)",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          padding: "96px 0",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
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
                Testimonials
              </p>
              <h2
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  fontWeight: "700",
                  letterSpacing: "-0.02em",
                }}
              >
                What Clients Say
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.1}>
                <div
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "20px",
                    padding: "28px",
                    transition: "all 0.3s",
                  }}
                  className="hover:border-purple-500/20 hover:bg-purple-500/5"
                >
                  <Quote size={24} color="#a78bfa40" style={{ marginBottom: "16px" }} />
                  <p
                    style={{
                      color: "rgba(255,255,255,0.65)",
                      fontSize: "0.9rem",
                      lineHeight: "1.75",
                      fontFamily: "'Inter', sans-serif",
                      marginBottom: "20px",
                    }}
                  >
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.78rem",
                        fontWeight: "600",
                        color: "#fff",
                        fontFamily: "'Space Grotesk', sans-serif",
                        flexShrink: 0,
                      }}
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: "0.88rem",
                          fontWeight: "600",
                          color: "#fff",
                        }}
                      >
                        {t.name}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.75rem",
                          color: "rgba(255,255,255,0.35)",
                        }}
                      >
                        {t.role}
                      </div>
                    </div>
                    <div className="ml-auto flex gap-1">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} size={12} color="#f59e0b" fill="#f59e0b" />
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BAND ─── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <FadeIn>
          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(139,92,246,0.08) 50%, rgba(236,72,153,0.05) 100%)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "28px",
              padding: "clamp(40px, 6vw, 80px) clamp(24px, 5vw, 80px)",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                width: "600px",
                height: "300px",
                background:
                  "radial-gradient(ellipse, rgba(139,92,246,0.08) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />
            <p
              style={{
                color: "#60a5fa",
                fontSize: "0.78rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontFamily: "'Inter', sans-serif",
                marginBottom: "16px",
              }}
            >
              Let's Build Something
            </p>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: "700",
                letterSpacing: "-0.02em",
                marginBottom: "16px",
              }}
            >
              Have an App Idea?{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Let's Make It Real.
              </span>
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.45)",
                fontFamily: "'Inter', sans-serif",
                maxWidth: "500px",
                margin: "0 auto 36px",
                fontSize: "0.95rem",
                lineHeight: "1.7",
              }}
            >
              From concept to Play Store, I build mobile apps that are polished,
              performant, and production ready.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <NavLink
                to="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                  borderRadius: "10px",
                  padding: "14px 32px",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: "500",
                  fontSize: "0.95rem",
                  color: "#fff",
                  boxShadow: "0 0 30px rgba(59,130,246,0.35)",
                }}
                className="hover:opacity-90"
              >
                Start a Project <ArrowRight size={17} />
              </NavLink>
              <NavLink
                to="/portfolio"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "10px",
                  padding: "14px 32px",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: "500",
                  fontSize: "0.95rem",
                  color: "rgba(255,255,255,0.8)",
                }}
                className="hover:bg-white/10"
              >
                See My Work
              </NavLink>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}

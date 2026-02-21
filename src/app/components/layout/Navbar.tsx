import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router";
import { Menu, X, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        background: scrolled
          ? "rgba(0,0,0,0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
        transition: "all 0.3s ease",
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
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
            }}
            className="text-lg font-semibold"
          >
            Durgesh Jadhav
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              style={({ isActive }) => ({
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.875rem",
                color: isActive ? "#60a5fa" : "rgba(255,255,255,0.65)",
                transition: "color 0.2s",
                fontWeight: isActive ? "500" : "400",
              })}
              className="hover:text-white"
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <NavLink
            to="/contact"
            style={{
              background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
              borderRadius: "8px",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.875rem",
              fontWeight: "500",
              boxShadow: "0 0 20px rgba(59,130,246,0.3)",
            }}
            className="px-5 py-2 text-white"
          >
            Hire Me
          </NavLink>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white p-2"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: "rgba(5,5,5,0.98)",
              backdropFilter: "blur(20px)",
              borderTop: "1px solid rgba(255,255,255,0.05)",
            }}
            className="lg:hidden overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  style={({ isActive }) => ({
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1rem",
                    color: isActive ? "#60a5fa" : "rgba(255,255,255,0.7)",
                  })}
                >
                  {link.label}
                </NavLink>
              ))}
              <NavLink
                to="/contact"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                  borderRadius: "8px",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9rem",
                  textAlign: "center",
                }}
                className="px-5 py-3 text-white mt-2"
              >
                Hire Me
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

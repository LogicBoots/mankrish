import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isProductPage = location.pathname.startsWith("/product/");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home", id: "home" },
    { href: "#about", label: "About", id: "about" },
    { href: "#products", label: "Products", id: "products" },

  ];

  const getLinkClass = (path) => {
    const isActive = location.pathname === path;

    if (isProductPage) {
      return isActive ? "text-cyan-400" : "text-white/80 hover:text-white";
    }

    if (isHomePage) {
      if (isScrolled) {
        return isActive
          ? "text-primary-600"
          : "text-black hover:text-gray-900";
      } else {
        return isActive ? "text-black" : "text-black ";
      }
    } else {
      return isActive
        ? "text-primary-600"
        : "text-gray-600 hover:text-gray-900";
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 rounded-full p-2 left-0 right-0 z-50 transition-all duration-300 ${isProductPage
        ? (isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent")
        : (isScrolled || !isHomePage
          ? "bg-white/20 backdrop-blur-md shadow-lg border-b border-white/30"
          : "bg-transparent")
        }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <motion.div whileHover={{ scale: 1.05 }}>
              <img
                className="py-3 w-auto h-16"
                src="/logo2.png"
                alt="Mamale Intelligence Logo"
              />
            </motion.div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.href.startsWith("#") ? "/" + item.href : item.href}
                className={`font-geist relative text-sm font-medium transition-colors duration-200 ${getLinkClass(
                  item.href
                )}`}>
                {item.label}
                {location.pathname === item.href && (
                  <motion.div
                    layoutId="activeTab"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 ${isHomePage && !isScrolled ? "bg-white" : (isProductPage ? "bg-cyan-400" : "bg-primary-600")
                      } rounded-full`}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${isProductPage
              ? "text-white hover:bg-white/10"
              : (isHomePage && !isScrolled
                ? "text-white hover:bg-white/10"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100")
              }`}>
            <svg
              className={`w-6 h-6 ${isProductPage ? "text-white" : "text-black"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md">
              <div className="px-4 py-4 space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${location.pathname === item.path
                      ? "text-primary-600 bg-primary-50"
                      : "text-black hover:text-gray-900 hover:bg-gray-50"
                      }`}>
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;

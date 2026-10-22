import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion, useScroll, useReducedMotion } from "framer-motion";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppFloat from "./components/WhatsAppFloat.jsx";
import { SpeedInsights } from "@vercel/speed-insights/react";

/* Thin brand-colored reading-progress bar */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[2.5px] origin-left bg-brand"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

/* Scroll to top on route change (hash links keep their own behavior) */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);
  return null;
};

/* Soft entrance on every route change for page-to-page continuity */
const PageTransition = ({ children }) => {
  const { pathname } = useLocation();
  const reduce = useReducedMotion();
  return (
    <motion.main
      key={pathname}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.main>
  );
};

function App() {
  return (
    <div className="app">
      <ScrollProgress />
      <ScrollToTop />
      <NavBar />
      <PageTransition>
        <Outlet />
      </PageTransition>
      <Footer />
      <WhatsAppFloat />
      <SpeedInsights />
    </div>
  );
}

export default App;

import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { productData } from "../utils/data.js";
import ProductCardWithShimmer from "./ProductCardWithShimmer.jsx";

const pages = [
  { route: "/", page: "Home" },
  { route: "/products", page: "Products" },
  { route: "/machinery", page: "Machinery" },
  { route: "/about-us", page: "About" },
  { route: "/contact-us", page: "Contact Us" },
];

function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef(null);
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const next = latest > 12;
    setScrolled((prev) => (prev === next ? prev : next));
  });

  useEffect(() => {
    if (showInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showInput]);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchTerm.trim() === "") {
        setFilteredProduct([]);
        return;
      }
      const query = searchTerm.toLowerCase();
      const filteredImages = productData.reduce((acc, category) => {
        const filteredImgs = category.img.filter((img) =>
          img.name.toLowerCase().includes(query)
        );
        if (filteredImgs.length > 0) {
          acc.push({ ...category, img: filteredImgs });
        }
        return acc;
      }, []);
      setFilteredProduct(filteredImages);
    }, 300);

    return () => clearTimeout(handler);
  }, [searchTerm]);

  const toggleSearchInput = () => {
    setShowInput((prev) => !prev);
    setFilteredProduct([]);
    setSearchTerm("");
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 border-b bg-white/85 backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? "border-stone-200 shadow-[0_8px_30px_-12px_rgba(28,25,23,0.12)]"
            : "border-transparent"
        }`}
      >
        <nav
          className={`mx-auto flex max-w-page items-center justify-between px-4 transition-all duration-300 sm:px-8 lg:px-14 ${
            scrolled ? "h-[64px]" : "h-[76px]"
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex shrink-0 items-center">
            <img
              className={`w-auto transition-all duration-300 ${
                scrolled ? "h-[44px]" : "h-[52px]"
              }`}
              src="https://res.cloudinary.com/dogqvcvs4/image/upload/f_auto,q_auto/v1/public/meg1q0vtuh3st1nej59h"
              alt="Shree Ansh Agarbatti"
              loading="lazy"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-2 md:flex">
            {pages.map((page) => (
              <NavLink
                key={page.page}
                to={page.route}
                className={({ isActive }) =>
                  `relative rounded-full px-4 py-2 text-sm font-semibold transition ${
                    isActive
                      ? "text-brand"
                      : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {page.page}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        aria-hidden="true"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 32,
                        }}
                        className="absolute inset-x-4 -bottom-0.5 h-[2px] rounded-full bg-brand"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
            <button
              onClick={toggleSearchInput}
              aria-label="Search products"
              className="ml-2 rounded-full p-2 text-stone-600 transition hover:bg-stone-100 hover:text-stone-900"
            >
              {showInput ? <CloseIcon /> : <SearchIcon />}
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-1 md:hidden">
            <button
              onClick={toggleSearchInput}
              aria-label="Search products"
              className="rounded-full p-2 text-stone-600"
            >
              {showInput ? <CloseIcon /> : <SearchIcon />}
            </button>
            <button
              onClick={() => setMobileOpen((p) => !p)}
              aria-label="Open menu"
              className="rounded-full p-2 text-stone-600"
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={reduce ? false : { opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="overflow-hidden border-t border-stone-200 bg-white md:hidden"
            >
              <div className="flex flex-col px-6 py-4">
                {pages.map((page) => (
                  <NavLink
                    key={page.page}
                    to={page.route}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `border-b border-stone-100 py-3 text-sm font-semibold last:border-0 ${
                        isActive ? "text-brand" : "text-stone-700"
                      }`
                    }
                  >
                    {page.page}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Search overlay */}
      <AnimatePresence>
        {showInput && (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="sticky top-[64px] z-30 border-b border-stone-200 bg-white shadow-sm"
          >
            <div className="mx-auto max-w-page px-6 py-4 sm:px-10 lg:px-14">
              <input
                ref={inputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search incense by name…"
                aria-label="Search incense by name"
                className="w-full rounded-full border border-stone-300 bg-stone-50 px-5 py-3 text-sm text-stone-800 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
              />

              {searchTerm.trim() !== "" && (
                <div className="max-h-[60vh] overflow-y-auto py-4">
                  {filteredProduct.length > 0 ? (
                    <div className="flex flex-wrap justify-center gap-5">
                      {filteredProduct.map((category) =>
                        category.img.map((img) => (
                          <ProductCardWithShimmer key={img?.id} img={img} />
                        ))
                      )}
                    </div>
                  ) : (
                    <p className="py-6 text-center text-sm text-stone-500">
                      No incense found for “{searchTerm}”. Try another name.
                    </p>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default NavBar;

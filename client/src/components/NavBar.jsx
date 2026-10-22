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
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="sticky top-[64px] z-30 border-b border-stone-200 bg-white/95 shadow-lg backdrop-blur-md"
          >
            <div className="mx-auto max-w-page px-6 py-4 sm:px-10 lg:px-14">

              {/* Search input row */}
              <div className="flex items-center gap-3 rounded-xl bg-stone-50 px-4 py-2.5 shadow-[0_0_0_1.5px_#e7e5e4] focus-within:shadow-[0_0_0_2px_#e92e37] focus-within:bg-white transition-all duration-200">
                <SearchIcon sx={{ fontSize: 18 }} className="shrink-0 text-stone-400" />
                <input
                  ref={inputRef}
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search agarbatti by name…"
                  aria-label="Search incense by name"
                  className="min-w-0 flex-1 bg-transparent text-sm text-stone-800 placeholder-stone-400 outline-none focus-visible:outline-none"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="shrink-0 rounded-full p-1 text-stone-400 transition hover:bg-stone-200 hover:text-stone-700"
                    aria-label="Clear search"
                  >
                    <CloseIcon sx={{ fontSize: 14 }} />
                  </button>
                )}
              </div>

              {/* Results */}
              {searchTerm.trim() !== "" && (
                <div className="max-h-[56vh] overflow-y-auto pb-4 pt-4">
                  {filteredProduct.length > 0 ? (
                    <>
                      {/* Result count */}
                      <p className="mb-3 text-xs font-medium text-stone-500">
                        {filteredProduct.reduce((n, c) => n + c.img.length, 0)}{" "}
                        {filteredProduct.reduce((n, c) => n + c.img.length, 0) === 1 ? "result" : "results"}{" "}
                        for{" "}
                        <span className="font-semibold text-brand">"{searchTerm}"</span>
                      </p>

                      {/* Compact product grid — fixed small card size */}
                      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
                        {filteredProduct.map((category) =>
                          category.img.map((img) => (
                            <div
                              key={img?.id}
                              onClick={toggleSearchInput}
                              className="cursor-pointer"
                            >
                              <ProductCardWithShimmer
                                img={{ ...img, category: category.category }}
                                showCategory={false}
                                highlight={searchTerm.trim()}
                              />
                            </div>
                          ))
                        )}
                      </div>

                      {/* View all link */}
                      <div className="mt-4 flex justify-center">
                        <Link
                          to="/products"
                          onClick={toggleSearchInput}
                          className="inline-flex items-center gap-1.5 rounded-full bg-stone-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-stone-700 active:scale-95"
                        >
                          View all products →
                        </Link>
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col items-center py-10 text-center">
                      <p className="text-sm font-semibold text-stone-700">
                        No matches for "{searchTerm}"
                      </p>
                      <p className="mt-1 text-xs text-stone-500">
                        Try a different name or browse all products.
                      </p>
                      <Link
                        to="/products"
                        onClick={toggleSearchInput}
                        className="mt-4 rounded-full bg-stone-100 px-4 py-2 text-sm font-semibold text-stone-700 ring-1 ring-stone-200 transition hover:bg-stone-200"
                      >
                        Browse all products
                      </Link>
                    </div>
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

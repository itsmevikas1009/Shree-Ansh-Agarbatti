import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import ProductCardWithShimmer from "../components/ProductCardWithShimmer.jsx";
import Seo from "../components/Seo.jsx";
import { productData } from "../utils/data.js";

/* ── JSON-LD ─────────────────────────────────────────────────────── */
const productsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Shree Ansh Agarbatti Products",
  itemListElement: productData.flatMap((category, ci) =>
    category.img.slice(1).map((img, i) => ({
      "@type": "ListItem",
      position: ci * 10 + i + 1,
      item: {
        "@type": "Product",
        name: `${img.name} Agarbatti`,
        image: img.imgURL,
        category: `${category.category} Incense Sticks`,
        brand: { "@type": "Brand", name: "Shree Ansh Agarbatti" },
      },
    }))
  ),
};

/* ── Data ────────────────────────────────────────────────────────── */
const categories = ["All", ...productData.map((c) => c.category)];

const allItems = productData.flatMap((category) =>
  category.img.slice(1).map((img) => ({ ...img, category: category.category }))
);

/* ── Inline SVG icons (zero dependency) ─────────────────────────── */
const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
  </svg>
);

const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

/* ── Empty state ─────────────────────────────────────────────────── */
const EmptyState = ({ query, category, onClearQuery, onClearAll }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    className="flex flex-col items-center justify-center py-24 text-center"
  >
    {/* Incense stick illustration */}
    <svg width="36" height="56" viewBox="0 0 36 56" fill="none" aria-hidden="true" className="mb-5 opacity-25">
      <path d="M18 48 Q12 36 18 24 Q24 12 18 2" stroke="#78716c" strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 48 Q6 36 12 24 Q18 12 12 2"  stroke="#78716c" strokeWidth="1.2" strokeLinecap="round" opacity=".5"/>
      <path d="M24 48 Q30 36 24 24 Q18 12 24 2" stroke="#78716c" strokeWidth="1.2" strokeLinecap="round" opacity=".5"/>
      <rect x="14" y="48" width="8" height="7" rx="1.5" fill="#d6d3d1"/>
    </svg>

    <p className="text-lg font-semibold text-stone-700">
      {query ? `No matches for "${query}"` : `No products in ${category}`}
    </p>
    <p className="mt-1.5 text-sm text-stone-500 max-w-xs">
      {query
        ? "Try a different spelling, or clear the search to browse all products."
        : "Switch to a different collection to see more."}
    </p>

    <div className="mt-6 flex flex-wrap justify-center gap-3">
      {query && (
        <button
          onClick={onClearQuery}
          className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-stone-700 active:scale-95"
        >
          Clear search
        </button>
      )}
      <button
        onClick={onClearAll}
        className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-stone-600 ring-1 ring-stone-200 transition-all duration-200 hover:bg-stone-50 hover:ring-stone-300 active:scale-95"
      >
        Show all products
      </button>
    </div>
  </motion.div>
);

/* ── Main page ───────────────────────────────────────────────────── */
const Products = () => {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const inputRef = useRef(null);
  const reduce = useReducedMotion();

  /* Keyboard shortcut: "/" focuses the search input */
  useEffect(() => {
    const onKey = (e) => {
      const tag = document.activeElement?.tagName;
      if (e.key === "/" && tag !== "INPUT" && tag !== "TEXTAREA") {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === "Escape" && document.activeElement === inputRef.current) {
        setQuery("");
        inputRef.current?.blur();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* Filtered items */
  const items = allItems.filter((item) => {
    const inCategory = active === "All" || item.category === active;
    const q = query.trim().toLowerCase();
    const inName = !q || item.name.toLowerCase().includes(q);
    return inCategory && inName;
  });

  const isSearching = query.trim().length > 0;
  const showCategory = isSearching || active === "All";
  const searchKey = `${active}__${query}`;

  /* Grid animation */
  const gridVariants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.04 } },
    exit: { opacity: 0, transition: { duration: 0.15 } },
  };
  const cardVariants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.97 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.38, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <div className="mx-auto max-w-page px-6 py-16 sm:px-10 lg:px-14">
      <Seo
        title="Buy Premium Agarbatti Online, 35+ Incense Varieties | Shree Ansh Agarbatti Gorakhpur"
        description="Browse 35+ varieties of premium perfumed agarbatti from Gorakhpur's trusted incense manufacturer: Classic, Premium and Standard collections. Wholesale enquiries welcome."
        path="/products"
        jsonLd={productsJsonLd}
      />

      {/* ── Header ──────────────────────────────────────────────── */}
      <div className="max-w-2xl">
        <h1 className="font-display text-5xl font-medium tracking-tight text-stone-900 sm:text-6xl">
          Products
        </h1>
        <p className="mt-4 text-lg text-stone-600">
          Explore our full range of perfumed agarbatti across every collection.
        </p>
      </div>

      {/* ── Search bar ──────────────────────────────────────────── */}
      <div className="mt-10">
        <div
          className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${
            focused
              ? "bg-white shadow-[0_0_0_2px_#e92e37,0_8px_32px_-8px_rgba(233,46,55,0.15)]"
              : "bg-white shadow-[0_0_0_1.5px_#e7e5e4] hover:shadow-[0_0_0_1.5px_#d6d3d1,0_4px_12px_-4px_rgba(0,0,0,0.06)]"
          }`}
        >
          {/* Icon */}
          <span className={`shrink-0 transition-colors duration-200 ${focused ? "text-brand" : "text-stone-400"}`}>
            <SearchIcon />
          </span>

          {/* Input — type="text" to avoid native browser search decorations */}
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder="Search by name — Kavya, Preet, Sandalwood…"
            autoComplete="off"
            spellCheck="false"
            className="min-w-0 flex-1 bg-transparent text-[15px] text-stone-800 placeholder-stone-400 outline-none focus-visible:outline-none"
            aria-label="Search products"
          />

          {/* Right: clear button OR keyboard hint */}
          <div className="shrink-0">
            <AnimatePresence mode="wait">
              {query ? (
                <motion.button
                  key="clear"
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  onClick={() => { setQuery(""); inputRef.current?.focus(); }}
                  aria-label="Clear search"
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-stone-100 text-stone-500 transition-all duration-200 hover:bg-brand hover:text-white active:scale-90"
                >
                  <XIcon />
                </motion.button>
              ) : (
                <motion.span
                  key="hint"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="hidden select-none rounded border border-stone-200 bg-stone-50 px-1.5 py-0.5 text-[11px] font-medium text-stone-400 sm:block"
                  aria-label="Press / to focus search"
                >
                  /
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Live result summary */}
        <AnimatePresence>
          {isSearching && (
            <motion.p
              key="summary"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="mt-2.5 pl-0.5 text-sm text-stone-500"
            >
              {items.length > 0 ? (
                <>
                  <span className="font-semibold text-stone-800">{items.length}</span>
                  {" "}{items.length === 1 ? "result" : "results"} for{" "}
                  <span className="font-semibold text-brand">"{query}"</span>
                </>
              ) : (
                <>No results for <span className="font-semibold text-brand">"{query}"</span></>
              )}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* ── Filter bar (sticky) ──────────────────────────────────── */}
      <div className="sticky top-[64px] z-20 -mx-6 mt-6 border-y border-stone-200 bg-stone-50/95 px-6 py-3 backdrop-blur-md sm:-mx-10 sm:px-10 lg:-mx-14 lg:px-14">
        <div className="mx-auto flex max-w-page flex-wrap items-center justify-between gap-3">

          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const count =
                cat === "All"
                  ? allItems.length
                  : allItems.filter((i) => i.category === cat).length;
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`relative flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 active:scale-95 ${
                    isActive
                      ? "bg-stone-900 text-white"
                      : "bg-white text-stone-600 ring-1 ring-stone-200 hover:bg-stone-50 hover:ring-stone-300"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="pill-bg"
                      className="absolute inset-0 rounded-full bg-stone-900"
                      style={{ zIndex: -1 }}
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  )}
                  <span>{cat}</span>
                  <span className={`tabular-nums text-[10px] font-bold ${isActive ? "text-stone-400" : "text-stone-400"}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Count */}
          <motion.span
            key={items.length}
            initial={reduce ? false : { opacity: 0, y: 3 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="shrink-0 text-sm text-stone-500"
          >
            <span className="font-semibold text-stone-800">{items.length}</span>{" "}
            {items.length === 1 ? "product" : "products"}
          </motion.span>
        </div>
      </div>

      {/* ── Product grid ─────────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        {items.length > 0 ? (
          <motion.div
            key={searchKey}
            variants={gridVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            /* 
              More columns = smaller cards = better UX.
              Single search results won't fill 50% of the viewport. 
            */
            className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 lg:gap-6 xl:grid-cols-5"
          >
            {items.map((img) => (
              <motion.div
                key={img.id}
                variants={cardVariants}
                className="w-full"
              >
                <ProductCardWithShimmer
                  img={img}
                  showCategory={showCategory}
                  highlight={query.trim()}
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <EmptyState
            key="empty"
            query={query}
            category={active}
            onClearQuery={() => { setQuery(""); inputRef.current?.focus(); }}
            onClearAll={() => { setQuery(""); setActive("All"); }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Products;

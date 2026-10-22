import { useState } from "react";

/* Highlight matched query text in product name */
const HighlightText = ({ text, query }) => {
  if (!query) return <>{text}</>;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="bg-transparent text-brand font-bold not-italic">
        {text.slice(idx, idx + query.length)}
      </mark>
      {text.slice(idx + query.length)}
    </>
  );
};

/**
 * Props:
 *  img           – { id, name, imgURL, alt, category }
 *  showCategory  – show the collection badge (when searching / "All" view)
 *  highlight     – search query string for name highlighting
 */
const ProductCardWithShimmer = ({ img, showCategory = false, highlight = "" }) => {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <article className="group w-full overflow-hidden rounded-2xl bg-white ring-1 ring-stone-200 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_48px_-16px_rgba(28,25,23,0.18)] hover:ring-stone-300">

      {/* ── Image area ─────────────────────────────────────────── */}
      <div className="relative aspect-square overflow-hidden bg-stone-50 p-4">

        {/* Shimmer skeleton */}
        {!loaded && !errored && (
          <div className="absolute inset-0 overflow-hidden bg-stone-100">
            <div className="shimmer-sweep absolute inset-0" />
          </div>
        )}

        {/* Error fallback */}
        {errored && (
          <div className="flex h-full w-full flex-col items-center justify-center gap-1.5 text-stone-300">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="m3 16 5-5 4 4 3-3 4 4" />
              <circle cx="8.5" cy="8.5" r="1.5" />
            </svg>
            <span className="text-xs text-stone-400">Image unavailable</span>
          </div>
        )}

        {/* Product image — natural flow (h-full w-full), NOT absolute */}
        {!errored && (
          <img
            className={`h-full w-full object-contain drop-shadow-sm transition-all duration-700 ease-out group-hover:scale-[1.07] group-hover:drop-shadow-md ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            src={img?.imgURL}
            alt={img?.name || img?.alt || "Agarbatti product"}
            loading="eager"
            decoding="async"
            onLoad={() => setLoaded(true)}
            onError={() => { setErrored(true); setLoaded(true); }}
          />
        )}

        {/* Collection badge — shown during search or "All" view */}
        {showCategory && img?.category && (
          <span className="absolute left-2.5 top-2.5 rounded-full bg-white/90 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-stone-500 ring-1 ring-stone-200/80 backdrop-blur-sm">
            {img.category}
          </span>
        )}

        {/* Brand sweep on hover */}
        <span
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-brand transition-transform duration-500 ease-out group-hover:scale-x-100"
        />
      </div>

      {/* ── Name strip ─────────────────────────────────────────── */}
      <div className="flex min-h-[50px] flex-col items-center justify-center px-3 py-3">
        <h3 className="line-clamp-2 text-center text-sm font-semibold leading-snug text-stone-800">
          <HighlightText text={img?.name ?? ""} query={highlight} />
        </h3>
        {!showCategory && img?.category && (
          <p className="mt-0.5 text-center text-[11px] font-medium text-stone-400">
            {img.category}
          </p>
        )}
      </div>
    </article>
  );
};

export default ProductCardWithShimmer;

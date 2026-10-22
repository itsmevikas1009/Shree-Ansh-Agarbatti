import { useState } from "react";

const ProductCardWithShimmer = ({ img }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="group w-full overflow-hidden rounded-2xl bg-white ring-1 ring-stone-200 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-20px_rgba(28,25,23,0.25)] hover:ring-stone-300">
      <div className="relative aspect-square overflow-hidden bg-gradient-to-b from-stone-50 to-stone-100 p-6">
        {!loaded && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-stone-100 via-stone-200 to-stone-100" />
        )}
        <img
          className={`h-full w-full object-contain drop-shadow-sm transition duration-700 ease-out group-hover:scale-[1.08] ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          src={img?.imgURL}
          alt={img?.name || img?.alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
        />
        {/* Hover accent line */}
        <span
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-brand transition-transform duration-500 ease-out group-hover:scale-x-100"
        />
      </div>
      <div className="px-4 py-4">
        <h3 className="truncate text-center text-sm font-semibold tracking-wide text-stone-800">
          {img?.name}
        </h3>
      </div>
    </div>
  );
};

export default ProductCardWithShimmer;

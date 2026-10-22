import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import ProductCardWithShimmer from "../components/ProductCardWithShimmer.jsx";
import Seo from "../components/Seo.jsx";
import { productData } from "../utils/data.js";

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

const categories = ["All", ...productData.map((c) => c.category)];

const Products = () => {
  const [active, setActive] = useState("All");
  const reduce = useReducedMotion();

  const visible =
    active === "All"
      ? productData
      : productData.filter((c) => c.category === active);

  const items = visible.flatMap((category) =>
    category.img.slice(1).map((img) => ({ ...img, category: category.category }))
  );

  return (
    <div className="mx-auto max-w-page px-6 py-16 sm:px-10 lg:px-14">
      <Seo
        title="Buy Premium Agarbatti Online, 35+ Incense Varieties | Shree Ansh Agarbatti Gorakhpur"
        description="Browse 35+ varieties of premium perfumed agarbatti from Gorakhpur's trusted incense manufacturer: Classic, Premium and Standard collections. Wholesale enquiries welcome."
        path="/products"
        jsonLd={productsJsonLd}
      />
      <div className="max-w-2xl">
        <h1 className="font-display text-5xl font-medium tracking-tight text-stone-900 sm:text-6xl">
          Products
        </h1>
        <p className="mt-4 text-lg text-stone-600">
          Explore our full range of perfumed agarbatti across every collection.
        </p>
      </div>

      {/* Filter bar: sticky below nav */}
      <div className="sticky top-[64px] z-20 -mx-6 mt-10 border-y border-stone-200 bg-stone-50/90 px-6 py-4 backdrop-blur-md sm:-mx-10 sm:px-10 lg:-mx-14 lg:px-14">
        <div className="mx-auto flex max-w-page flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 active:scale-[0.96] ${
                  active === cat
                    ? "bg-stone-900 text-white shadow-md"
                    : "bg-white text-stone-600 ring-1 ring-stone-300 hover:ring-stone-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <span className="text-sm font-medium text-stone-500">
            {items.length} {items.length === 1 ? "product" : "products"}
          </span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 grid grid-cols-2 gap-5 sm:gap-7 md:grid-cols-3 xl:grid-cols-4"
        >
          {items.map((img) => (
            <ProductCardWithShimmer key={img?.id} img={img} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Products;

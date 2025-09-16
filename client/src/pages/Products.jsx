import { useEffect, useState } from "react";
import { productData } from "../utils/data.js";
import ProductCard from "../components/ProductCard.jsx";
// import { Button } from "@mui/material";

const Products = () => {
  const [filteredProduct, setFilteredProduct] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setFilteredProduct(productData);
  }, []);

  return (
    <div className="lg:mx-20 md:mx-16 sm:mx-8 mx-4 my-8">
      {/* <div className="search-bar">
        <input
          className="search-input"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="What are you looking for?"
        />
        <Button
          className="search-icon"
          onClick={() => {
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
          }}
        >
          Search
        </Button>
      </div> */}
      <h1 className="text-4xl text-center mb-8 font-semibold">Products</h1>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1">
        {filteredProduct.map((category) =>
          category.img
            .slice(1)
            .map((img) => <ProductCardWithShimmer key={img?.id} img={img} />)
        )}
      </div>
    </div>
  );
};

export default Products;

// Shimmer Component
const Shimmer = ({ className }) => (
  <div
    className={`animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 ${className}`}
  />
);

// Wrapper around ProductCard with shimmer
const ProductCardWithShimmer = ({ img }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="w-[228px] h-[264px] m-auto my-4">
      <div className="h-[80%] overflow-hidden p-4 relative">
        {!loaded && <Shimmer className="absolute top-0 left-0 w-full h-full rounded-lg" />}
        <img
          className={`h-full w-full object-contain transition-opacity duration-700 ease-in-out ${loaded ? "opacity-100" : "opacity-0"
            }`}
          src={img?.imgURL}
          alt={img?.alt}
          onLoad={() => setLoaded(true)}
        />
      </div>
      <div className="product-details py-3 px-4 rounded bg-[#e92e37] text-white my-4">
        <h3 className="text-center overflow-hidden font-semibold">{img?.name}</h3>
      </div>
    </div>
  );
};

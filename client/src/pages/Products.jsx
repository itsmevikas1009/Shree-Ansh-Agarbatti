import { useEffect, useState } from "react";
import ProductCardWithShimmer from "../components/ProductCardWithShimmer.jsx";
import { productData } from "../utils/data.js";

const Products = () => {
  const [filteredProduct, setFilteredProduct] = useState([]);

  useEffect(() => {
    // Initialize with all products on mount
    setFilteredProduct(productData);
  }, []);

  return (
    <div className="lg:mx-20 md:mx-16 sm:mx-8 mx-4 my-8">
      <h1 className="text-4xl text-center mb-8 font-semibold">Products</h1>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6">
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

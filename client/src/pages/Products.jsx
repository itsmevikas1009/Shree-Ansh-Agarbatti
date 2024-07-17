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
          category.img.map((img) => <ProductCard key={img?.id} img={img} />)
        )}
      </div>
    </div>
  );
};

export default Products;

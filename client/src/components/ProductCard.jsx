// import React from "react";
import "../styles/product-card.css";

const ProductCard = ({ img }) => {
  return (
    <div className="product-card m-auto my-4">
      <div className="product-img-container">
        <img className="product-img" src={img?.imgURL} alt={img?.alt} />
      </div>
      <div className="product-details bg-[#e92e37] text-white my-4">
        <h3 className="product-name">{img?.name}</h3>
      </div>
    </div>
  );
};

export default ProductCard;

// import React from "react";
import "../styles/product-card.css";

const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="product-img-container">
        <img
          className="product-img"
          src="https://res.cloudinary.com/dogqvcvs4/image/upload/f_auto,q_auto/v1/public/images/Product/Premium/gz8h2k85ixl4ej8bzuv2"
        />
      </div>
      <div className="product-details">
        <h3 className="product-name">Vaisnavi</h3>
        {/* <span className="rating">{avgRatingString} · </span>
        <span className="time">{sla?.slaString}</span>
        <p className="cusine">{cuisines.join(", ")}</p> */}
      </div>
    </div>
  );
};

export default ProductCard;

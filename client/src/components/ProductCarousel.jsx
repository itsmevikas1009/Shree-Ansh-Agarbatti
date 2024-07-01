import { Typography } from "@mui/material";
import { useState, useEffect } from "react";

const ProductCarousel = ({ product }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === product.product.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex, product]);

  return (
    <div className="flex flex-col justify-center items-center md:mx-[16px] py-4 hover:cursor-pointer">
      <img
        className="px-[16px] lg:w-[288px] lg:h-[256px] md:w-[240px] md:h-[208px] w-[128px] h-[96px] "
        src={product.product[currentIndex]}
        alt="Shree200"
      />
      <Typography
        variant="h6"
        sx={{
          fontFamily: "monospace",
          fontWeight: 600,
          color: "inherit",
          textAlign: "center",
          // marginY: "16px",
          paddingY: "16px",
        }}
      >
        {product.category}
      </Typography>
    </div>
  );
};

export default ProductCarousel;

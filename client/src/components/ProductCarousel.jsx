import { useState } from "react";
import { Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import { productData } from "../utils/data.js";

const ProductCarousel = () => {
  return (
    <div className="lg:mx-20">
      <Carousel
        swipeable={true}
        draggable={true}
        showDots
        responsive={responsive}
        infinite={true}
        keyBoardControl={true}
        customTransition="all .5"
        containerClass="carousel-container"
        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {productData.map((product) => (
          <div
            key={product?.id}
            className="flex flex-col justify-center items-center md:mx-[16px] py-4 hover:cursor-pointer"
          >
            {/* Shimmer Image Loader */}
            <ImageWithShimmer
              src={product?.img?.[0].imgURL}
              alt={product?.img?.[0].alt}
              className="bg-white rounded-xl lg:px-[16px] lg:py-[16px] p-3  
                lg:w-auto lg:h-auto 
                md:w-[204px] md:h-[204px] 
                sm:w-[160px] sm:h-[160px] 
                w-[112px] h-[112px]"
            />

            <Typography
              variant="h6"
              sx={{
                color: "inherit",
                textAlign: "center",
                paddingY: "8px",
              }}
            >
              {product?.category}
            </Typography>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductCarousel;

// Responsive breakpoints
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};

// Shimmer Component
const Shimmer = ({ className }) => (
  <div
    className={`animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 ${className}`}
  />
);

// ImageWithShimmer Component
const ImageWithShimmer = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && (
        <Shimmer className="absolute top-0 left-0 w-full h-full rounded-xl" />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} object-contain transition-opacity duration-700 ease-in-out ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

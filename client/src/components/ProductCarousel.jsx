import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import { productData } from "../utils/data.js";

const ProductCarousel = () => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((imageIndex + 1) % productData.length); // loop through the array
    }, 4000); // change image every 4 seconds

    return () => clearInterval(intervalId); // clean up interval on component unmount
  }, [imageIndex]);

  return (
    <div className="lg:mx-20">
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        infinite={true}
        // autoPlay={true}
        // autoPlaySpeed={8000}
        keyBoardControl={true}
        customTransition="all .5"
        containerclassName="carousel-container"
        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        dotListclassName="custom-dot-list-style"
        itemclassName="carousel-item-padding-40-px"
      >
        {productData.map((product) => {
          return (
            <div
              key={product?.id}
              className="flex flex-col justify-center items-center md:mx-[16px] py-4 hover:cursor-pointer"
            >
              <img
                className="px-[16px] lg:w-[288px] lg:h-[256px] md:w-[240px] md:h-[208px] w-[128px] h-[96px] "
                src={product?.img?.[imageIndex % product.img.length].imgURL}
                alt={product.img[imageIndex % product.img.length].alt}
              />
              <Typography
                variant="h6"
                sx={{
                  color: "inherit",
                  textAlign: "center",
                  // marginY: "16px",
                  paddingY: "16px",
                }}
              >
                {product?.category}
              </Typography>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default ProductCarousel;

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

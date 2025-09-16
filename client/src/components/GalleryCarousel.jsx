import { useState } from "react";
import Carousel from "react-multi-carousel";
import { galleryData } from "../utils/data.js";

// GalleryCarousel Component
const GalleryCarousel = () => {
  return (
    <div className="lg:mx-20">
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={galleryResponsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customAnimation={customAnimation}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {galleryData.map((gallery) => (
          <div
            key={gallery?.id}
            className="flex flex-col justify-center items-center md:mx-[16px] hover:cursor-pointer rounded-lg my-4 mx-8"
          >
            <ImageWithShimmer
              src={gallery?.imgURL}
              alt={gallery?.alt}
              className="w-[320px] h-[228px] rounded-lg"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default GalleryCarousel;

// Responsive breakpoints
const galleryResponsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 736 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 736, min: 0 },
    items: 1,
  },
};

// Custom fade animation
const customAnimation = (nextProps, currentProps, nextElement, currentElement) => {
  const currentSlide = currentElement.querySelector(".carousel-item");
  const nextSlide = nextElement.querySelector(".carousel-item");

  if (!currentSlide || !nextSlide) return;

  currentSlide.style.opacity = 0;
  currentSlide.style.transition = "opacity 1s";

  nextSlide.style.opacity = 1;
  nextSlide.style.transition = "opacity 1s";

  setTimeout(() => {
    currentSlide.style.opacity = 1;
    currentSlide.style.transition = "none";
  }, 500);
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
      {!loaded && <Shimmer className={`absolute top-0 left-0 w-full h-full rounded-lg`} />}
      <img
        src={src}
        alt={alt}
        className={`${className} object-cover transition-opacity duration-700 ease-in-out ${loaded ? "opacity-100" : "opacity-0"
          }`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

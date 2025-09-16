import { useState } from "react";
import { styled, keyframes } from "@mui/material/styles";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Move responsive configuration before the component
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Banner = () => {
  const bannerData = [
    {
      _id: 1,
      alt: "Banner 01",
      url: "https://res.cloudinary.com/dogqvcvs4/image/upload/f_auto,q_auto/v1/public/images/Banner/lo7ve0ksmzdvefoyrso3",
    },
    {
      _id: 2,
      alt: "Banner 02",
      url: "https://res.cloudinary.com/dogqvcvs4/image/upload/f_auto,q_auto/v1/public/images/Banner/spy7hgroyqk8vblzaluc",
    },
    {
      _id: 3,
      alt: "Banner 03",
      url: "https://res.cloudinary.com/dogqvcvs4/image/upload/f_auto,q_auto/v1/public/images/Banner/uimaptjkhfxeqnjerytp",
    },
    {
      _id: 4,
      alt: "Banner 04",
      url: "https://res.cloudinary.com/dogqvcvs4/image/upload/f_auto,q_auto/v1/public/images/Banner/b6btfj9tfatwsmjt5hll",
    },
  ];

  return (
    <Carousel
      swipeable={false}
      draggable={false}
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={4000}
      keyBoardControl={true}
      customTransition="all 1s ease-in-out" // Replace customAnimation
      transitionDuration={1000} // Add this for proper transition timing
      showDots={false}
      slidesToSlide={1}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {bannerData.map((image) => (
        <ImageWithShimmer src={image.url} alt={image.alt} key={image._id} />
      ))}
    </Carousel>
  );
};

const shimmerAnimation = keyframes`
  0% { background-position: -468px 0 }
  100% { background-position: 468px 0 }
`;

const Shimmer = styled("div")({
  width: "100%",
  height: "100%",
  background: "#f6f7f8",
  backgroundImage:
    "linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%)",
  backgroundRepeat: "no-repeat",
  animation: `${shimmerAnimation} 1.2s linear infinite`,
  borderRadius: "4px",
});

const ImageWithShimmer = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      style={{
        width: "100%",
        height: "610px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {!loaded && <Shimmer />} {/* Shimmer until loaded */}
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.8s ease-in-out",
          position: "absolute",
          top: 0,
          left: 0,
        }}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default Banner;

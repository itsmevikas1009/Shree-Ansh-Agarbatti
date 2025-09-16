import Carousel from "react-multi-carousel";
import ImageWithShimmer from "./ImageWithShimmer"; // import reusable shimmer image component

// Responsive breakpoints declared outside the component
const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

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

const Banner = () => {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={4000}
      keyBoardControl={true}
      customTransition="all 1s ease-in-out"
      transitionDuration={1000}
      showDots={false}
      slidesToSlide={1}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {bannerData.map((image) => (
        <ImageWithShimmer
          key={image._id}
          src={image.url}
          alt={image.alt}
          width="100%"
          height="610px"
          borderRadius="4px"
          objectFit="cover"
        />
      ))}
    </Carousel>
  );
};

export default Banner;

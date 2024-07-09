import Carousel from "react-multi-carousel";
import { galleryData } from "../utils/data.js";

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
        // customTransition="all .5"
        containerclassName="carousel-container"
        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        dotListclassName="custom-dot-list-style"
        itemclassName="carousel-item-padding-40-px"
      >
        {galleryData.map((gallery) => {
          return (
            <div
              key={gallery?.id}
              className="flex flex-col justify-center items-center md:mx-[16px] hover:cursor-pointer rounded-lg my-4 mx-8 "
            >
              <img
                className="w-[320px] h-[228px] rounded-lg "
                src={gallery?.imgURL}
                alt={gallery?.alt}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default GalleryCarousel;

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
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const customAnimation = (
  nextProps,
  currentProps,
  nextElement,
  currentElement
) => {
  // Get the current and next slide elements

  const currentSlide = currentElement.querySelector(".carousel-item");

  const nextSlide = nextElement.querySelector(".carousel-item");

  // Add a fade-out animation to the current slide

  currentSlide.style.opacity = 0;

  currentSlide.style.transition = "opacity 0.5s";

  // Add a fade-in animation to the next slide

  nextSlide.style.opacity = 1;

  nextSlide.style.transition = "opacity 0.5s";

  // Remove the fade-out animation after 0.5 seconds

  setTimeout(() => {
    currentSlide.style.opacity = 1;

    currentSlide.style.transition = "none";
  }, 500);
};

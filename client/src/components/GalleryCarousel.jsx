import Carousel from "react-multi-carousel";
import ImageWithShimmer from "./ImageWithShimmer";
import { galleryData } from "../utils/data.js";

const galleryResponsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 3 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 736 }, items: 2 },
  mobile: { breakpoint: { max: 736, min: 0 }, items: 1 },
};

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
              width="320px"
              height="228px"
              borderRadius="8px"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default GalleryCarousel;

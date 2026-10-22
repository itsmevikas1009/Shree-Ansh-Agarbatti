import Carousel from "react-multi-carousel";
import ImageWithShimmer from "./ImageWithShimmer";
import { galleryData } from "../utils/data.js";

const galleryResponsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 736 }, items: 2 },
  mobile: { breakpoint: { max: 736, min: 0 }, items: 1 },
};

const GalleryCarousel = () => {
  return (
    <div className="mx-auto max-w-page px-6 sm:px-10 lg:px-14">
      <Carousel
        swipeable
        draggable
        responsive={galleryResponsive}
        infinite
        autoPlay
        autoPlaySpeed={3500}
        keyBoardControl
        arrows={false}
        containerClass="carousel-container"
        itemClass="px-3"
      >
        {galleryData.map((gallery) => (
          <div
            key={gallery?.id}
            className="overflow-hidden rounded-2xl ring-1 ring-stone-200"
          >
            <ImageWithShimmer
              src={gallery?.imgURL}
              alt={gallery?.alt}
              width="100%"
              height="248px"
              borderRadius="16px"
              objectFit="cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default GalleryCarousel;

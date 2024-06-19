import { styled } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import Banner_02 from "../assets/Banner/ShreeAnsh_Banner_02.jpg";
// import Banner_03 from "../assets/Banner/ShreeAnsh_Banner_03.jpg";
// import Banner_04 from "../assets/Banner/ShreeAnsh_Banner_04.jpg";
// import Banner_05 from "../assets/Banner/ShreeAnsh_Banner_05.jpg";

const Banner = () => {
  const bannerData = [
    // { _id: 1, url: 'https://rukminim1.flixcart.com/flap/3376/560/image/8464e4d9a75b909a.jpg?q=50' },
    {
      _id: 2,
      alt: "Banner 01",
      url: "assets/Banner/ShreeAnsh_Banner_02.jpg",
    },
    {
      _id: 3,
      alt: "Banner 02",
      url: "assets/Banner/ShreeAnsh_Banner_02.jpg",
    },
    {
      _id: 4,
      alt: "Banner 03",
      url: "assets/Banner/ShreeAnsh_Banner_02.jpg",
    },
    {
      _id: 5,
      alt: "Banner 04",
      url: "assets/Banner/ShreeAnsh_Banner_02.jpg",
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
      showDots={false}
      slidesToSlide={1}
      customTransition="all .5"
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {bannerData.map((image) => (
        <Image src={image.url} alt={image.alt} key={image._id} />
      ))}
    </Carousel>
  );
};

export default Banner;

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

const Image = styled("img")(({ theme }) => ({
  width: "100%",
  height: 550,
  [theme.breakpoints.down("sm")]: {
    objectFit: "cover",
    height: 300,
  },
}));

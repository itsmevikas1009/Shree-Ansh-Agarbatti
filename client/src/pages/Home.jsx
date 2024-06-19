import React from "react";
import Banner from "../components/Banner.jsx";
import { Box, Typography, styled } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Shree200 from "../assets/Product/Classic/200.png";
import Shree500 from "../assets/Product/Premium/500.png";
import Shree100 from "../assets/Product/Standerd/100.png";
import Rudraksh from "../assets/Product/More/Rudraksh.png";
import Premium from "../assets/premium.png";

const Home = () => {
  return (
    <div>
      <Box
        sx={{
          //   flexGrow: 1,
          //   justifyContent: "space-between",
          marginY: "1rem",
          //   display: "flex",
          //   flexDirection: "column",
          //   justifyContent: "center",
          //   alignItems: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            color: "inherit",
            textAlign: "center",
            marginY: "1rem",
          }}
        >
          SHOP BY TOP CATEGORIES
        </Typography>
        <div className="lg:mx-20">
          <Carousel
            swipeable={false}
            draggable={true}
            showDots={true}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all .5"
            containerClass="carousel-container"
            removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
            //   deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div className="flex flex-col justify-center items-center md:mx-4 py-4 hover:cursor-pointer">
              <img
                className="px-4 lg:w-72 lg:h-64 md:w-60 md:h-52 w-32 h-24"
                src={Shree200}
                alt="movie"
              />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "monospace",
                  fontWeight: 600,
                  color: "inherit",
                  textAlign: "center",
                  // marginY: "1rem",
                  paddingY: "1rem",
                }}
              >
                Classic
              </Typography>
            </div>
            <div className="flex flex-col justify-center items-center md:mx-4 py-4 hover:cursor-pointer">
              <img
                className="px-4 lg:w-72 lg:h-64 md:w-60 md:h-52 w-32 h-24 "
                src={Shree500}
                alt="movie"
              />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "monospace",
                  fontWeight: 600,
                  color: "inherit",
                  textAlign: "center",
                  // marginY: "1rem",
                  paddingY: "1rem",
                }}
              >
                Premium
              </Typography>
            </div>
            <div className="flex flex-col justify-center items-center md:mx-4 py-4 hover:cursor-pointer">
              <img
                className="px-4 lg:w-72 lg:h-64 md:w-60 md:h-52 w-32 h-24 "
                src={Shree100}
                alt="movie"
              />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "monospace",
                  fontWeight: 600,
                  color: "inherit",
                  textAlign: "center",
                  // marginY: "1rem",
                  paddingY: "1rem",
                }}
              >
                Standard
              </Typography>
            </div>
            <div className="flex flex-col justify-center items-center md:mx-4 py-4 hover:cursor-pointer">
              <img
                className="px-4 lg:w-72 lg:h-64 md:w-60 md:h-52 w-32 h-24 "
                src={Rudraksh}
                alt="movie"
              />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "monospace",
                  fontWeight: 600,
                  color: "inherit",
                  textAlign: "center",
                  // marginY: "1rem",
                  paddingY: "1rem",
                }}
              >
                More
              </Typography>
            </div>
          </Carousel>
        </div>
      </Box>
      <Banner />
      <Box
        className="sm:flex-row flex-col sm:my-4 sm:mx-24 m-4"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          className="md:mx-24 sm:mx-8 my-4 "
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "white",
            borderRadius: "1rem",
            width: "250px",
            paddingY: "1.5rem",
          }}
        >
          <img className="px-14 pb-4" src={Premium} alt="" />
          <Typography
            className="text-xl"
            variant="heading"
            sx={{ paddingX: "1.5rem", fontWeight: "bold" }}
          >
            Premium Collection
          </Typography>
          <Typography
            variant="heading"
            sx={{ fontSize: "0.95rem", paddingX: "1.5rem" }}
          >
            Most loved by our customers
          </Typography>
        </Box>
        <Box
          className="md:mx-24 sm:mx-8 my-4 "
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "white",
            borderRadius: "1rem",
            width: "250px",
            paddingY: "1.5rem",
          }}
        >
          <img className="px-14 pb-4" src={Premium} alt="" />
          <Typography
            className="text-xl"
            variant="heading"
            sx={{ paddingX: "1.5rem", fontWeight: "bold" }}
          >
            Premium Collection
          </Typography>
          <Typography
            variant="heading"
            sx={{ fontSize: "0.95rem", paddingX: "1.5rem" }}
          >
            Most loved by our customers
          </Typography>
        </Box>
        <Box
          className="md:mx-24 sm:mx-8 my-4 "
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "white",
            borderRadius: "1rem",
            width: "250px",
            paddingY: "1.5rem",
          }}
        >
          <img className="px-14 pb-4" src={Premium} alt="" />
          <Typography
            className="text-xl"
            variant="heading"
            sx={{ paddingX: "1.5rem", fontWeight: "bold" }}
          >
            Premium Collection
          </Typography>
          <Typography
            variant="heading"
            sx={{ fontSize: "0.95rem", paddingX: "1.5rem" }}
          >
            Most loved by our customers
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Home;

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

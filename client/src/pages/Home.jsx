import Banner from "../components/Banner.jsx";
import { Box, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Home = () => {
  return (
    <div>
      <Box
        sx={{
          marginY: "16px",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            color: "inherit",
            textAlign: "center",
            marginY: "16px",
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
            <div className="flex flex-col justify-center items-center md:mx-[16px] py-4 hover:cursor-pointer">
              <img
                className="px-[16px] lg:w-[288px] lg:h-[256px] md:w-[240px] md:h-[208px] w-[128px] h-[96px] "
                src={"/images/Product/Classic/200.png"}
                alt="Shree200"
              />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "monospace",
                  fontWeight: 600,
                  color: "inherit",
                  textAlign: "center",
                  // marginY: "16px",
                  paddingY: "16px",
                }}
              >
                Classic
              </Typography>
            </div>
            <div className="flex flex-col justify-center items-center md:mx-[16px] py-4 hover:cursor-pointer">
              <img
                className="px-[16px] lg:w-[288px] lg:h-[256px] md:w-[240px] md:h-[208px] w-[128px] h-[96px] "
                src={"/images/Product/Premium/500.png"}
                alt="Shree500"
              />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "monospace",
                  fontWeight: 600,
                  color: "inherit",
                  textAlign: "center",
                  // marginY: "16px",
                  paddingY: "16px",
                }}
              >
                Premium
              </Typography>
            </div>
            <div className="flex flex-col justify-center items-center md:mx-[16px] py-4 hover:cursor-pointer">
              <img
                className="px-[16px] lg:w-[288px] lg:h-[256px] md:w-[240px] md:h-[208px] w-[128px] h-[96px] "
                src={"/images/Product/Standard/100.png"}
                alt="Shree100"
              />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "monospace",
                  fontWeight: 600,
                  color: "inherit",
                  textAlign: "center",
                  paddingY: "16px",
                }}
              >
                Standard
              </Typography>
            </div>
            <div className="flex flex-col justify-center items-center md:mx-[16px] py-4 hover:cursor-pointer">
              <img
                className="px-[16px] lg:w-[288px] lg:h-[256px] md:w-[240px] md:h-[208px] w-[128px] h-[96px] "
                src={"/images/Product/More/Rudraksh.png"}
                alt="Rudraksh"
              />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "monospace",
                  fontWeight: 600,
                  color: "inherit",
                  textAlign: "center",
                  paddingY: "16px",
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
        className="sm:flex-row flex-col sm:m-[16px] sm:mx-[96px] m-[16px]"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          className="md:mx-[96px] sm:m-[32px] m-[16px] "
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "white",
            borderRadius: "16px",
            width: "250px",
            paddingY: "24px",
          }}
        >
          <img
            className="px-14 pb-4"
            src={"/images/premium.png"}
            alt="premium-icon"
          />
          <Typography
            className="text-xl"
            variant="heading"
            sx={{ paddingX: "24px", fontWeight: "bold" }}
          >
            Premium Collection
          </Typography>
          <Typography
            variant="heading"
            sx={{ fontSize: "15px", paddingX: "24px" }}
          >
            Most loved by our customers
          </Typography>
        </Box>
        <Box
          className="md:mx-[96px] sm:m-[32px] m-[16px] "
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "white",
            borderRadius: "16px",
            width: "250px",
            paddingY: "24px",
          }}
        >
          <img
            className="px-14 pb-4"
            src={"/images/premium.png"}
            alt="premium-icon"
          />
          <Typography
            className="text-xl"
            variant="heading"
            sx={{ paddingX: "24px", fontWeight: "bold" }}
          >
            Premium Collection
          </Typography>
          <Typography
            variant="heading"
            sx={{ fontSize: "15px", paddingX: "24px" }}
          >
            Most loved by our customers
          </Typography>
        </Box>
        <Box
          className="md:mx-[96px] sm:m-[32px] m-[16px] "
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "white",
            borderRadius: "16px",
            width: "250px",
            paddingY: "24px",
          }}
        >
          <img
            className="px-14 pb-4"
            src={"/images/premium.png"}
            alt="premium-icon"
          />
          <Typography
            className="text-xl"
            variant="heading"
            sx={{ paddingX: "24px", fontWeight: "bold" }}
          >
            Premium Collection
          </Typography>
          <Typography
            variant="heading"
            sx={{ fontSize: "15px", paddingX: "24px" }}
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

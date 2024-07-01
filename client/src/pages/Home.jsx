import Banner from "../components/Banner.jsx";
import { Box, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Banner />
      <Box
        sx={{
          marginY: "32px",
          backgroundColor: "#FFFFFF",
          padding: "32px 0px",
          marginX: { sm: "2rem" },
          borderRadius: "10px",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            color: "inherit",
            textAlign: "center",
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
            containerclassName="carousel-container"
            removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
            //   deviceType={this.props.deviceType}
            dotListclassName="custom-dot-list-style"
            itemclassName="carousel-item-padding-40-px"
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
      <Box
        className="sm:flex-row md:flex-row lg:flex-row flex-col sm:m-[16px] sm:mx-[60px] md:mx-[80px] lg:mx-[90px] mx-auto m-[16px]"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          className="lg:mx-[80px] md:mx-[32px] sm:mx-[24px] mx-auto sm:my-[32px] my-[16px]  "
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "white",
            borderRadius: "16px",
            width: "300px",
            paddingY: "24px",
          }}
        >
          <img
            className="lg:px-[44px] md:px-[36px] sm:px-[28px] px-[44px] lg:pb-[16px] md:pb-[12px] sm:pb-[8px] pb-[16px]"
            src={"/images/premium.png"}
            alt="premium-icon"
          />
          <Typography
            className="lg:text-[20px] md:text-[16px] sm:text-[16px] text-[20px] text-center lg:px-[24px] md:px-[16px] sm:px-[12px] px-[24px] font-bold"
            variant="heading"
            // sx={{ paddingX: "24px", fontWeight: "bold" }}
          >
            Premium Collection
          </Typography>
          <Typography
            className="lg:text-[15px] md:text-[13px] sm:text-[11px] text-[15px] lg:px-[20px] md:px-[18px] sm:px-[16px] px-[20px] text-center"
            variant="heading"
            // sx={{ fontSize: "15px", paddingX: "20px" }}
          >
            Most loved by our customers
          </Typography>
        </Box>
        <Box
          className="lg:mx-[80px] md:mx-[32px] sm:mx-[24px] mx-auto sm:my-[32px] my-[16px]  "
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "white",
            borderRadius: "16px",
            width: "300px",
            paddingY: "24px",
          }}
        >
          <img
            className="lg:px-[44px] md:px-[36px] sm:px-[28px] px-[44px] lg:pb-[16px] md:pb-[12px] sm:pb-[8px] pb-[16px]"
            src={"/images/premium.png"}
            alt="premium-icon"
          />
          <Typography
            className="lg:text-[20px] md:text-[16px] sm:text-[16px] text-[20px] text-center lg:px-[24px] md:px-[16px] sm:px-[12px] px-[24px] font-bold"
            variant="heading"
            // sx={{ paddingX: "24px", fontWeight: "bold" }}
          >
            Premium Collection
          </Typography>
          <Typography
            className="lg:text-[15px] md:text-[13px] sm:text-[11px] text-[15px] lg:px-[20px] md:px-[18px] sm:px-[16px] px-[20px] text-center"
            variant="heading"
            // sx={{ fontSize: "15px", paddingX: "20px" }}
          >
            Most loved by our customers
          </Typography>
        </Box>
        <Box
          className="lg:mx-[80px] md:mx-[32px] sm:mx-[24px] mx-auto sm:my-[32px] my-[16px]"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "white",
            borderRadius: "16px",
            width: "300px",
            paddingY: "24px",
          }}
        >
          <img
            className="lg:px-[44px] md:px-[36px] sm:px-[28px] px-[44px] lg:pb-[16px] md:pb-[12px] sm:pb-[8px] pb-[16px]"
            src={"/images/premium.png"}
            alt="premium-icon"
          />
          <Typography
            className="lg:text-[20px] md:text-[16px] sm:text-[16px] text-[20px] text-center lg:px-[24px] md:px-[16px] sm:px-[12px] px-[24px] font-bold"
            variant="heading"
            // sx={{ paddingX: "24px", fontWeight: "bold" }}
          >
            Premium Collection
          </Typography>
          <Typography
            className="lg:text-[15px] md:text-[13px] sm:text-[11px] text-[15px] lg:px-[20px] md:px-[18px] sm:px-[16px] px-[20px] text-center"
            variant="heading"
            // sx={{ fontSize: "15px", paddingX: "20px" }}
          >
            Most loved by our customers
          </Typography>
        </Box>
      </Box>
      <Box className="flex flex-col justify-center items-center md:mx-[120px] mx-[32px] my-[32px] px-4 py-8 bg-white rounded-[10px]">
        <Typography variant="heading" className="text-[32px] m-0 p-0 font-bold">
          About Us
        </Typography>
        <div className="flex sm:flex-row flex-col sm:mx-0 mx-4 sm:my-0 my-4 justify-center items-center sm:gap-4">
          <img className="w-32" src="/icon.png" alt="" />
          <div>
            Shree Ansh Agarbatti as a brand is known for manufacturing perfumed
            agarbatti. Shree Ansh Agarbatti is a name that has earned the
            respect, Shree Ansh has continued to grow in strength and market
            reach to be ranked as the best agarbatti manufacturing company in
            India and across the world. With state-of-the-art manufacturing
            facilities located at Gorakhpur, we manufacture a vast range of
            perfumed agarbatti. Our premium flagship collection product range
            being the most loved by our customers.
          </div>
        </div>
        <Link
          className="px-4 py-1 rounded-[20px] text-white bg-red-800"
          to="/about-us"
        >
          Know More
        </Link>
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

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
        className="sm:flex-row flex-col sm:m-[16px] sm:mx-[96px] m-[16px]"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          className="md:mx-[80px] sm:m-[32px] m-[16px] "
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
            className="px-[56px] pb-[16px]"
            src={"/images/premium.png"}
            alt="premium-icon"
          />
          <Typography
            className="text-[20px]"
            variant="heading"
            sx={{ paddingX: "24px", fontWeight: "bold" }}
          >
            Premium Collection
          </Typography>
          <Typography
            variant="heading"
            sx={{ fontSize: "15px", paddingX: "20px" }}
          >
            Most loved by our customers
          </Typography>
        </Box>
        <Box
          className="md:mx-[80px] sm:m-[32px] m-[16px] "
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
            className="px-[56px] pb-[16px]"
            src={"/images/premium.png"}
            alt="premium-icon"
          />
          <Typography
            className="text-[20px]"
            variant="heading"
            sx={{ paddingX: "24px", fontWeight: "bold" }}
          >
            Premium Collection
          </Typography>
          <Typography
            variant="heading"
            sx={{ fontSize: "15px", paddingX: "20px" }}
          >
            Most loved by our customers
          </Typography>
        </Box>
        <Box
          className="md:mx-[80px] sm:m-[32px] m-[16px] "
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
            className="px-[56px] pb-[16px]"
            src={"/images/premium.png"}
            alt="premium-icon"
          />
          <Typography
            className="text-[20px]"
            variant="heading"
            sx={{ paddingX: "24px", fontWeight: "bold" }}
          >
            Premium Collection
          </Typography>
          <Typography
            variant="heading"
            sx={{ fontSize: "15px", paddingX: "20px" }}
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
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row justify-between ">
            <div className="mt-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/3 ">
              <img
                src="/logo.png"
                alt="Shree Ansh Agarbatti"
                className="block sm:hidden md:hidden lg:hidden w-56 mx-auto"
              />
              <h3 className="mt-4 sm:mt-0 mb-4 text-2xl font-bold text-center sm:text-left md:text-left lg:text-left">
                Shree Ansh Agarbatti
              </h3>
              <p className="mb-[16px] text-sm sm:text-base">
                We understand what our customer demands and expects. We as a
                brand are more customers driven and believe in the spirit of
                innovation and creativity.
              </p>
              <img
                src="/logo.png"
                alt="Shree Ansh Agarbatti"
                className="hidden sm:block md:block lg:block w-32 h-auto sm:w-40 md:w-48 lg:w-56"
              />
            </div>
            <div className="mt-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/3 text-center sm:text-left md:text-left lg:text-left">
              <h3 className="text-2xl font-bold mb-4">Products</h3>
              <ul className="list-none p-0">
                <li>
                  <a href="#" className="block hover:underline">
                    Standard
                  </a>
                </li>
                <li>
                  <a href="#" className="block hover:underline">
                    Premium
                  </a>
                </li>
                <li>
                  <a href="#" className="block hover:underline">
                    Classic
                  </a>
                </li>
                <li>
                  <a href="#" className="block hover:underline">
                    More Product
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/3 text-center sm:text-left md:text-left lg:text-left">
              <h3 className="text-2xl font-bold mb-4">Pages</h3>
              <ul className="list-none p-0">
                <li>
                  <a href="#" className="block hover:underline">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#" className="block hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="block hover:underline">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="block hover:underline">
                    Sample Page
                  </a>
                </li>
                <li>
                  <a href="#" className="block hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="block hover:underline">
                    Business With Us
                  </a>
                </li>
                <li>
                  <a href="#" className="block hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
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

import Banner from "../components/Banner.jsx";
import { Box, Typography } from "@mui/material";
import "react-multi-carousel/lib/styles.css";
// import { Link } from "react-router-dom";
import ProductCarousel from "../components/ProductCarousel.jsx";
import GalleryCarousel from "../components/GalleryCarousel.jsx";
import { productData } from "../utils/data.js";
import ProductCard from "../components/ProductCard.jsx";
import { HashLink } from "react-router-hash-link";

const Home = () => {
  return (
    <div id="Home">
      <Banner />
      <Box
        id="Category"
        sx={{
          marginY: "32px",
          backgroundColor: "#FFFFFF",
          padding: "32px 0px",
          marginX: { sm: "2rem" },
          // borderRadius: "8px",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "600",
            color: "inherit",
            textAlign: "center",
          }}
        >
          Our Top Categories
        </Typography>
        <ProductCarousel />
      </Box>
      <Box
        sx={{
          // marginY: "32px",
          // backgroundColor: "#FFFFFF",
          padding: "32px",
          marginX: "2rem",
          // borderRadius: "8px",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "600",
            color: "inherit",
            textAlign: "center",
          }}
        >
          Products
        </Typography>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1">
          {productData.map((product) => {
            return product.img.slice(0, 3).map((img) => {
              return <ProductCard key={img?.id} img={img} />;
            });
          })}
        </div>
      </Box>
      <hr className="mx-4" />
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
            className="lg:text-[20px] md:text-[16px] sm:text-[16px] text-[20px] text-center lg:px-[20px] md:px-[16px] sm:px-[12px] px-[24px] font-semibold"
            variant="heading"
          >
            Premium Collection
          </Typography>
          <Typography
            className="lg:text-[15px] md:text-[13px] sm:text-[11px] text-[15px] lg:px-[16px] md:px-[18px] sm:px-[16px] px-[20px] text-center"
            variant="heading"
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
            className="lg:text-[20px] md:text-[16px] sm:text-[16px] text-[20px] text-center lg:px-[20px] md:px-[16px] sm:px-[12px] px-[24px] font-semibold"
            variant="heading"
          >
            Premium Collection
          </Typography>
          <Typography
            className="lg:text-[15px] md:text-[13px] sm:text-[11px] text-[15px] lg:px-[16px] md:px-[18px] sm:px-[16px] px-[20px] text-center"
            variant="heading"
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
            className="lg:text-[20px] md:text-[16px] sm:text-[16px] text-[20px] text-center lg:px-[20px] md:px-[16px] sm:px-[12px] px-[24px] font-semibold"
            variant="heading"
          >
            Premium Collection
          </Typography>
          <Typography
            className="lg:text-[15px] md:text-[13px] sm:text-[11px] text-[15px] lg:px-[16px] md:px-[18px] sm:px-[16px] px-[20px] text-center"
            variant="heading"
          >
            Most loved by our customers
          </Typography>
        </Box>
      </Box>
      <Box
        id="About"
        className="flex flex-col justify-center items-center md:mx-[120px] mx-[32px] my-[32px] px-4 py-8 bg-white rounded-[8px]"
      >
        <Typography
          variant="heading"
          className="text-[32px] m-0 p-0 font-semibold"
        >
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
        <HashLink
          className="px-4 py-2 rounded-[20px] text-white bg-[#e92e37] font-semibold mt-4"
          to="/about-us#top"
          scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
        >
          Know More
        </HashLink>
      </Box>
      <Box
        id="Gallery"
        sx={{
          marginY: "32px",
          // backgroundColor: "#FFFFFF",
          padding: "32px 0px",
          marginX: { sm: "2rem" },
          borderRadius: "8px",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "600",
            color: "inherit",
            textAlign: "center",
          }}
        >
          Gallery
        </Typography>
        <GalleryCarousel />
      </Box>
    </div>
  );
};

export default Home;

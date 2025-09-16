import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  Container,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { productData } from "../utils/data.js";
import ProductCard from "./ProductCard.jsx";
import { motion, AnimatePresence } from "framer-motion"; // ✅ Import animations

const pages = [
  { route: "/", page: "Home" },
  { route: "/products", page: "Products" },
  { route: "/about-us", page: "About" },
  { route: "/contact-us", page: "Contact Us" },
];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [showInput, setShowInput] = useState(false);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClick = () => {
    setShowInput(!showInput);
    setFilteredProduct([]);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const query = searchTerm.toLowerCase();

    const filteredImages = productData.reduce((acc, category) => {
      const filteredImgs = category.img.filter((img) =>
        img.name.toLowerCase().includes(query)
      );
      if (filteredImgs.length > 0) {
        acc.push({ ...category, img: filteredImgs });
      }
      return acc;
    }, []);

    setFilteredProduct(filteredImages);
    setSearchTerm("");
  };

  return (
    <>
      <AppBar
        sx={{ backgroundColor: "#fff3f3", color: "black" }}
        position="sticky"
      >
        <Container className="shadow-md" maxWidth="xl">
          <Toolbar
            sx={{ paddingY: "10px", marginX: { md: "16px" } }}
            disableGutters
          >
            {/* Logo */}
            <Box>
              <Link to="/" className="flex justify-center items-center">
                <img
                  id="logo"
                  className="h-[60px] w-[180px] ml-[48px] mr-[8px] md:flex py-1 px-2"
                  src="https://res.cloudinary.com/dogqvcvs4/image/upload/f_auto,q_auto/v1/public/meg1q0vtuh3st1nej59h"
                  alt="Shree Ansh Agarbatti"
                  loading="lazy"
                />
              </Link>
            </Box>

            {/* Desktop Nav */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                marginLeft: "auto",
                marginRight: "24px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {pages.map((page) => (
                <Link
                  to={page.route}
                  className="text-black p-[8px] ml-[16px]"
                  key={page.page}
                  onClick={handleCloseNavMenu}
                >
                  {page.page}
                </Link>
              ))}
            </Box>

            {/* Desktop Search */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                alignItems: "center",
                marginRight: "48px",
              }}
            >
              {showInput ? (
                <div className="flex justify-center items-center">
                  <form onSubmit={handleSearch} className="relative w-full">
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="p-[12px] px-[24px] rounded-full bg-[#FFFFFF] outline-none shadow-xl"
                      placeholder="Search for..."
                      required
                    />
                    <div className="flex absolute inset-y-0 right-0 items-center pr-[16px]">
                      <CloseIcon
                        className="ml-2 cursor-pointer"
                        onClick={handleClick}
                      />
                    </div>
                  </form>
                </div>
              ) : (
                <SearchIcon
                  className="cursor-pointer"
                  onClick={handleClick}
                ></SearchIcon>
              )}
            </Box>

            {/* Mobile Nav */}
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "flex",
                  md: "none",
                  justifyContent: "space-between",
                },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{ p: 0 }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.page} onClick={handleCloseNavMenu}>
                    <Link to={page.route} textAlign="center">
                      {page.page}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
              <Link to="/" className="flex justify-center items-center">
                <img
                  className="h-[60px] w-[180px] py-1 px-2"
                  id="header-logo"
                  src="https://res.cloudinary.com/dogqvcvs4/image/upload/f_auto,q_auto/v1/public/meg1q0vtuh3st1nej59h"
                  alt="Shree Ansh Agarbatti"
                  loading="lazy"
                />
              </Link>
              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {!showInput ? (
                  <SearchIcon
                    className="cursor-pointer"
                    onClick={handleClick}
                  />
                ) : (
                  <CloseIcon className="cursor-pointer" onClick={handleClick} />
                )}
              </Box>
            </Box>
          </Toolbar>
        </Container>

        {/* Mobile search input */}
        {showInput && (
          <Box
            sx={{
              margin: "16px 32px",
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="w-full flex justify-center items-center">
              <form onSubmit={handleSearch} className="relative w-full">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-[12px] px-[24px] rounded-full bg-[#FFFFFF] outline-none shadow-xl "
                  placeholder="Search for..."
                  required
                />
                <div className="flex absolute inset-y-0 right-0 items-center pr-[16px] cursor-pointer">
                  <SearchIcon
                    onClick={handleSearch}
                    type="submit"
                    className="cursor-pointer"
                  />
                </div>
              </form>
            </div>
          </Box>
        )}
      </AppBar>

      {/* Search Results with Smooth Animation */}
      <AnimatePresence>
        {filteredProduct.length > 0 && (
          <motion.div
            className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6 p-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
          >
            {filteredProduct.map((category) =>
              category.img.map((img) => (
                <motion.div
                  key={img?.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductCard img={img} />
                </motion.div>
              ))
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default NavBar;

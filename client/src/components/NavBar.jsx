import React, { useState, useEffect, useRef } from "react";
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
import { productData } from "../utils/data.js";
import { motion, AnimatePresence } from "framer-motion";
import ProductCardWithShimmer from "./ProductCardWithShimmer.jsx";

const pages = [
  { route: "/", page: "Home" },
  { route: "/products", page: "Products" },
  { route: "/about-us", page: "About" },
  { route: "/contact-us", page: "Contact Us" },
];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [showInput, setShowInput] = useState(false);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (showInput && inputRef.current) {
      inputRef.current.focus(); // autofocus input when shown
    }
  }, [showInput]);

  // Optional: debounce search input for performance
  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchTerm.trim() === "") {
        setFilteredProduct([]);
        return;
      }

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
    }, 300);

    return () => clearTimeout(handler);
  }, [searchTerm]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const toggleSearchInput = () => {
    setShowInput((prev) => !prev);
    setFilteredProduct([]);
    setSearchTerm("");
  };

  return (
    <>
      <AppBar
        sx={{ backgroundColor: "#fff3f3", color: "black" }}
        position="sticky"
      >
        <Container className="shadow-md" maxWidth="xl">
          <Toolbar sx={{ py: "10px", mx: { md: "16px" } }} disableGutters>
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
                ml: "auto",
                mr: "24px",
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
                mr: "48px",
              }}
            >
              {showInput ? (
                <div className="flex justify-center items-center">
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="relative w-full"
                  >
                    <input
                      ref={inputRef}
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="p-[12px] px-[24px] rounded-full bg-[#FFFFFF] outline-none shadow-xl"
                      placeholder="Search for..."
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-[16px] cursor-pointer">
                      <CloseIcon onClick={toggleSearchInput} />
                    </div>
                  </form>
                </div>
              ) : (
                <SearchIcon
                  className="cursor-pointer"
                  onClick={toggleSearchInput}
                />
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
                aria-label="menu"
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
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.page} onClick={handleCloseNavMenu}>
                    <Link to={page.route} style={{ textAlign: "center" }}>
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
                    onClick={toggleSearchInput}
                  />
                ) : (
                  <CloseIcon
                    className="cursor-pointer"
                    onClick={toggleSearchInput}
                  />
                )}
              </Box>
            </Box>
          </Toolbar>
        </Container>

        {/* Mobile Search Input */}
        {showInput && (
          <Box
            sx={{
              m: "16px 32px",
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <form
              onSubmit={(e) => e.preventDefault()}
              className="relative w-full flex justify-center items-center"
            >
              <input
                ref={inputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-[12px] px-[24px] rounded-full bg-[#FFFFFF] outline-none shadow-xl"
                placeholder="Search for..."
                autoFocus
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-[16px] cursor-pointer">
                <SearchIcon onClick={() => {}} className="cursor-pointer" />
              </div>
            </form>
          </Box>
        )}
      </AppBar>

      {/* Search Results with Animation */}
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
                  <ProductCardWithShimmer img={img} />
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

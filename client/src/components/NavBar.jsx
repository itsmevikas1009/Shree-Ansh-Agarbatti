import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  // Typography,
  Menu,
  Container,
  // Avatar,
  // Tooltip,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { Link } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

import Logo from "/logo.png";
import { useState } from "react";

const pages = [
  { route: "/home", page: "Home" },
  { route: "/about-us", page: "About" },
  { route: "/contact-us", page: "Contact Us" },
];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [showInput, setShowInput] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  const handleClick = () => {
    setShowInput(!showInput);
  };

  return (
    <>
      <AppBar
        sx={{ backgroundColor: "#fff3f3", color: "black" }}
        position="sticky"
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{ paddingY: "10px", marginX: { md: "16px" } }}
            disableGutters
          >
            <Box>
              <Link to="/" className="flex justify-center items-center">
                <img
                  id="logo"
                  className=" ml-[48px] mr-[8px] md:flex"
                  src={`${Logo}`}
                  alt=""
                  loading="lazy"
                />
                {/* <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Shree Ansh Agarbatti
              </Typography> */}
              </Link>
            </Box>
            {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}

            {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Shree Ansh Agarbatti Co.
          </Typography> */}

            {/* <Box
            sx={{
              flexGrow: 1,
              marginX: "16px",
              display: { xs: "none", md: "flex" },
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <div className="">
              <input
                type="text"
                className="w-full p-[16px] px-[48px] rounded-full bg-[#FFFFFF] outline-none  shadow-xl "
                placeholder="Search for..."
                // value={searchValue}
              />

              <span className="">
                <SearchIcon />
              </span>
            </div>
          </Box> */}

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                marginLeft: "auto",
                marginRight: "32px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* <SearchIcon /> */}
              {pages.map((page) => (
                <Link
                  to={page.route}
                  className="text-black p-[8px] ml-[16px] font-semibold"
                  key={page}
                  onClick={handleCloseNavMenu}
                >
                  {page.page}
                </Link>
              ))}
            </Box>
            <Box
              sx={{
                // flexGrow: 1,
                marginX: "16px",
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {showInput ? (
                <form className="flex justify-center items-center">
                  <div className="relative w-full">
                    <input
                      type="text"
                      id="voice-search"
                      className=" p-[12px] px-[24px] rounded-full bg-[#FFFFFF] outline-none shadow-xl "
                      placeholder="Search for..."
                      required
                    />
                    <div className="flex absolute inset-y-0 right-0 items-center pr-[16px] cursor-pointer">
                      <SearchIcon />
                    </div>
                  </div>
                </form>
              ) : (
                <SearchIcon
                  className="cursor-pointer"
                  onClick={handleClick}
                ></SearchIcon>
              )}
            </Box>
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
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Link to={page.route} textAlign="center">
                      {page.page}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
              <img className="" src={`${Logo}`} alt="" loading="lazy" />
              {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip> */}
              {/* <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
                
            </Menu> */}
              <Box
                sx={{
                  // flexGrow: 1,
                  display: { xs: "flex", md: "none" },
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {showInput ? (
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
      </AppBar>
      {!showInput && (
        <Box
          sx={{
            // flexGrow: 1,
            margin: "16px 32px",
            display: { xs: "flex", md: "none" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form className="w-full flex justify-center items-center">
            <div className="relative w-full">
              <input
                type="text"
                id="voice-search"
                className="w-full p-[12px] px-[24px] rounded-full bg-[#FFFFFF] outline-none shadow-xl "
                placeholder="Search for..."
                required
              />
              <div className="flex absolute inset-y-0 right-0 items-center pr-[16px] cursor-pointer">
                <SearchIcon />
              </div>
            </div>
          </form>
        </Box>
      )}
    </>
  );
}

export default NavBar;

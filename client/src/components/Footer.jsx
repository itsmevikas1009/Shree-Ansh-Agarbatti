// import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const Footer = () => {
  return (
    <footer className="bg-black text-white sm:pt-6 md:pt-6 lg:pt-8 pt-4 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-between md:gap-12 lg:gap-24">
          <div className="mt-4 w-full md:w-1/2 lg:w-1/2">
            <img
              src="/logo.png"
              alt="Shree Ansh Agarbatti"
              className="block  md:hidden lg:hidden w-56 mx-auto"
            />
            <h3 className="mt-4 sm:mt-0 mb-2 text-2xl font-bold">
              Shree Ansh Agarbatti
            </h3>
            <p className="mb-[8px] text-sm sm:text-base">
              We understand what our customer demands and expects. We as a brand
              are more customers driven and believe in the spirit of innovation
              and creativity.
            </p>
            <img
              src="/logo.png"
              alt="Shree Ansh Agarbatti"
              className="hidden sm:hidden md:block lg:block w-32 h-auto sm:w-40 md:w-48 lg:w-56"
            />
          </div>
          <div className="mt-4 w-full md:w-1/4 lg:w-1/4 mb-2">
            <h3 className="text-xl font-bold mb-2 uppercase">Useful Links</h3>
            <ul className="list-none p-0">
              <li>
                <HashLink
                  to="/home#Home"
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                >
                  Home
                </HashLink>
              </li>
              <li>
                <HashLink
                  to="/home#About"
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "center" })
                  }
                >
                  About
                </HashLink>
              </li>
              <li>
                <HashLink
                  to="/contact-us#top"
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                >
                  Contact Us
                </HashLink>
              </li>
              <li>
                <HashLink
                  to="/home#Gallery"
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "center" })
                  }
                >
                  Gallery
                </HashLink>
              </li>
              <li>
                <HashLink
                  to="/contact-us#top"
                  scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
                >
                  Business With Us
                </HashLink>
              </li>
            </ul>
          </div>
          <div className="mt-4 w-full md:w-1/3 lg:w-1/3 mb-2">
            <h3 className="text-xl font-bold mb-2 uppercase">Contact</h3>
            <ul className="list-none p-0">
              <li className="mb-2">
                Shree Ansh Agarbatti Co. Gola Bazar, Gorakhpur, Uttar Pradesh
                273408 India
              </li>
              <li>+91-9889733153</li>
              <li>shreeansh26@gmail.com</li>
            </ul>
          </div>
          <div className="mt-4 w-full md:w-1/4 lg:w-1/4 mb-2">
            <h3 className="text-xl font-bold mb-2 uppercase">Connect</h3>
            <ul className="flex items-center gap-4 list-none">
              <li>
                <a href="https://www.facebook.com/people/SHREE-ANSH-Agarbatti-Co/100065174973492/">
                  <FacebookOutlinedIcon fontSize="medium" />
                </a>
              </li>
              <li>
                <a href="https://x.com/AnshAgarbatti">
                  <XIcon fontSize="medium" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/shree_ansh_agarbatti/">
                  <InstagramIcon fontSize="medium" />
                </a>
              </li>
              <li>
                <a href="mailto:shreeansh26@gmail.com">
                  <EmailOutlinedIcon fontSize="medium" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="mt-4 mx-4 border-[#b6b0b0]" />
      <div className="flex flex-col justify-center items-center pb-4 pt-2 text-center gap-2">
        <div className="">
          &#169; Copyrights 2024 - 2025 . Shree Ansh Agarbatti . All Rights
          Reserved.
        </div>
        <div className="">Made with ❤️ in India</div>
      </div>
    </footer>
  );
};

export default Footer;

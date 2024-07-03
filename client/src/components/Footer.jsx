import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="bg-black text-white sm:pt-6 md:pt-6 lg:pt-8 pt-4 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row justify-between sm:gap-8 md:gap-12 lg:gap-24">
          <div className="mt-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/3 text-center sm:text-left md:text-left lg:text-left">
            <img
              src="/logo.png"
              alt="Shree Ansh Agarbatti"
              className="block sm:hidden md:hidden lg:hidden w-56 mx-auto"
            />
            <h3 className="mt-4 sm:mt-0 mb-4 text-2xl font-bold">
              Shree Ansh Agarbatti
            </h3>
            <p className="mb-[16px] text-sm sm:text-base">
              We understand what our customer demands and expects. We as a brand
              are more customers driven and believe in the spirit of innovation
              and creativity.
            </p>
            <img
              src="/logo.png"
              alt="Shree Ansh Agarbatti"
              className="hidden sm:block md:block lg:block w-32 h-auto sm:w-40 md:w-48 lg:w-56"
            />
          </div>
          <div className="mt-4 w-full sm:w-1/3 md:w-1/4 lg:w-1/4 text-center sm:text-left md:text-left lg:text-left">
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
          <div className="mt-4 w-full sm:w-1/3 md:w-1/4 lg:w-1/4 text-center sm:text-left md:text-left lg:text-left">
            <h3 className="text-2xl font-bold mb-4">Pages</h3>
            <ul className="list-none p-0">
              <li>
                <HashLink
                  to="#Home"
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
                {/* <a href="#" className="block hover:underline">
                  About Us
                </a> */}
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
                {/* <a href="#" className="block hover:underline"></a> */}
              </li>
              <li>
                <Link to="/contact-us" className="block hover:underline">
                  Business With Us
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="block hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center py-4">
          Made with ❤️ in India
        </div>
      </div>
    </footer>
  );
};

export default Footer;

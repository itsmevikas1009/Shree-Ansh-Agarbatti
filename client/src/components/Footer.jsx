const Footer = () => {
  return (
    <footer className="bg-black text-white sm:py-6 md:py-6 lg:py-8 py-4 ">
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
  );
};

export default Footer;

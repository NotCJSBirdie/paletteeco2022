import "./Header.css";

const Header = () => {
  return (
    <div>
      <header className="text-white body-font mx-8 border-b-2 border-white">
        <div className="container mx-auto flex flex-wrap py-10 flex-col md:flex-row items-center">
          <nav
            id="mainmenu"
            className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto"
          >
            <a className="mr-5 ">PAINTS</a>
            <a className="mr-5 ">SAMPLES</a>
            <a className="mr-5">GALLERY</a>
          </nav>
          <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center lg:items-center lg:justify-center mb-4 md:mb-0">
            <span id="mainbrand" className=" text-xl">
              PALETTE
            </span>
          </a>
          <div className="lg:w-2/5 inline-flex lg:justify-end  lg:ml-0">
            <nav
              id="mainmenu"
              className="flex flex-wrap items-center text-base md:ml-auto"
            >
              <a className="mr-5 ">CALCULATOR</a>
              <a className="mr-5 ">LOG IN</a>
              <a className=" ">CART (0)</a>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

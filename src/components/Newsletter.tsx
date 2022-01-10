import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div>
      <footer className="text-black body-font mx-8 border-y-2 border-gray-300">
        <div className="container pt-8 mx-auto">
          <div className="flex flex-wrap text-left order-first">
            <div className="lg:w-4/6 md:w-1/2 w-full px-4 mb-10 border-r-2 border-gray-300">
              <div className=" w-full px-4">
                <h2
                  id="newslettertitle"
                  className="title-font font-medium text-gray-900 tracking-widest text-4xl mb-3"
                >
                  Sign-up now and stay inspired!
                </h2>
                <div
                  id="newsletterbody"
                  className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start"
                >
                  <div className="flex flex-row relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                    <input
                      placeholder="E-MAIL ADDRESS"
                      type="text"
                      id="footer-field"
                      name="footer-field"
                      className=" w-full bg-transparent  border-black border-y-2 border-l-2   text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    ></input>
                    <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-black border-y-2 border-r-2 border-black  py-2 px-2 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-arrow-right"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#000000"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <line x1="13" y1="18" x2="19" y2="12" />
                        <line x1="13" y1="6" x2="19" y2="12" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="py-12"></div>
                <p
                  id="newsletterbody"
                  className="text-gray-500 text-sm mt-2 md:text-left text-center"
                >
                  NON TOXIC AND VOC FREE, OFFERING EXCEPTIONAL DURABILITY,
                  COVERAGE AND WASHABILITY
                </p>
              </div>
            </div>
            <div
              id="rightnewsletter"
              className="lg:w-2/6 md:w-1/2 w-full pr-4 pl-12 flex flex-col mb-10"
            >
              <div className="w-full  flex flex-row mb-8">
                <div className="w-full pr-2">
                  <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                    SHOP
                  </h2>
                  <nav className="list-none mb-10">
                    <li>
                      <a className="text-gray-600 hover:text-gray-800">
                        PAINTS
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-600 hover:text-gray-800">
                        SAMPLES
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-600 hover:text-gray-800">
                        SUPPLIES
                      </a>
                    </li>
                  </nav>
                </div>
                <div className="w-full px-2">
                  <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                    DISCOVER
                  </h2>
                  <nav className="list-none mb-10">
                    <li>
                      <a className="text-gray-600 hover:text-gray-800">
                        GALLERY
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-600 hover:text-gray-800">
                        AIR PURIFYING
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-600 hover:text-gray-800">PRO</a>
                    </li>
                  </nav>
                </div>
                <div className="w-full pl-2">
                  <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                    ABOUT
                  </h2>
                  <nav className="list-none mb-10">
                    <li>
                      <a className="text-gray-600 hover:text-gray-800">
                        ABOUT US
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-600 hover:text-gray-800">FAQ</a>
                    </li>
                    <li>
                      <a className="text-gray-600 hover:text-gray-800">
                        SHIPPING & RETURNS
                      </a>
                    </li>
                  </nav>
                </div>
              </div>
              <div className="flex flex-row items-center">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-instagram"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#000000"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <rect x="4" y="4" width="16" height="16" rx="4" />
                    <circle cx="12" cy="12" r="3" />
                    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                  </svg>
                </span>
                @PALETTE.ECO
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Newsletter;

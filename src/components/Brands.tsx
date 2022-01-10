import "./Brands.css";
import Shopify from "./assets/shopify.svg";

const Brands = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap -m-4 text-center items-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className=" px-4 py-6 rounded-lg">
                <h2
                  id="branditalic"
                  className="italic title-font font-medium text-5xl text-gray-900"
                >
                  YOU MAY LOVE IT
                </h2>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className=" px-4 py-6 rounded-lg">
                <h2
                  id="brandtitle"
                  className="title-font font-medium text-5xl text-gray-900"
                >
                  Typewolf
                </h2>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className=" px-4 py-6 rounded-lg">
                <h2
                  id="brandtitle"
                  className="title-font font-medium text-5xl text-gray-900"
                >
                  Numbered
                </h2>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className=" px-4 py-6 rounded-lg">
                <img src={Shopify} alt="shopify" className="h-12 w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brands;

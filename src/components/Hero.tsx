import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <section className="text-white body-font mx-8">
        <div className="container mx-auto flex  py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center h-auto">
            <h1
              id="mainherotitle"
              className="title-font mb-4 font-medium text-7xl"
            >
              Eco-Friendly Paints For A Healthy Home
            </h1>
            <div className="py-8"></div>

            <div className="flex justify-center">
              <button
                id="herobutton"
                className="inline-flex text-white bg-black border-0 py-2 focus:outline-none hover:bg-gray-200 rounded text-md px-24"
              >
                SHOP OUR COLORS
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"></div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

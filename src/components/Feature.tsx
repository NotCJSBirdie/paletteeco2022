import "./Feature.css";

const Feature = () => {
  return (
    <div>
      <section id="featuretext" className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/4 flex items-center">
              <div className="w-12  inline-flex items-center justify-center rounded-full text-black  flex-shrink-0 text-2xl">
                01
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium  items-center">
                  ECO-FRIENDLY & PREMIUM A+ PAINT
                </h2>
              </div>
            </div>
            <div className="p-4 md:w-1/4 flex">
              <div className="w-12  inline-flex items-center justify-center rounded-full text-black  flex-shrink-0 text-2xl">
                02
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium ">
                  CURATED SELECTION OF 50 EXCLUSIVE COLORS
                </h2>
              </div>
            </div>
            <div className="p-4 md:w-1/4 flex">
              <div className="w-12  inline-flex items-center justify-center rounded-full text-black  flex-shrink-0 text-2xl">
                03
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium ">
                  EASY TO TRY ON WITH OUR SAMPLE STICKERS
                </h2>
              </div>
            </div>
            <div className="p-4 md:w-1/4 flex">
              <div className="w-12  inline-flex items-center justify-center rounded-full text-black  flex-shrink-0 text-2xl">
                04
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium items-center">
                  FREE SHIPPING AND RETURNS IN EUROPE
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;

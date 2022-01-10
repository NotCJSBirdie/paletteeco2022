import "./NoNoNo.css";

const NoNoNo = () => {
  return (
    <div>
      <section className="text-black body-font">
        <div className="container mx-auto flex px-5 py-16 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h1
              id="nonono"
              className="title-font  mb-12 font-medium text-gray-900"
            >
              NO, NO, NO
            </h1>
            <p id="nononoparagraph" className=" leading-relaxed text-lg">
              No VOC - better for you and the environment
            </p>
            <p id="nononoparagraph" className="leading-relaxed text-lg">
              No Waste - on demand stock
            </p>
            <p id="nononoparagraph" className="mb-8 leading-relaxed text-lg">
              No delivery costs - free shipping in Europe
            </p>
            <div className="flex justify-center">
              <button
                id="nononobutton"
                className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none \ rounded text-lg"
              >
                About Palette
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NoNoNo;

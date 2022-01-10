import "./DualA.css";

const DualA = () => {
  return (
    <div className="mx-8">
      <section className="text-black body-font">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="sm:w-1/2 w-full mb-10 px-4">
              <div
                id="duala1"
                className="rounded-lg w-full h-full overflow-hidden flex flex-col items-center"
              >
                <h1 id="dualatext" className="pt-32 pb-8 px-32 text-5xl">
                  Try our sticker samples before making up your mind!
                </h1>
                <div>
                  <button
                    id="dualabutton"
                    className="text-white bg-black py-2  px-12 rounded-lg"
                  >
                    SHOP OUR SAMPLES
                  </button>
                </div>

                <div className="my-8"></div>
              </div>
            </div>
            <div className="sm:w-1/2 w-full mb-10 px-4">
              <div
                id="duala2"
                className="rounded-lg h-full overflow-hidden flex items-center "
              >
                <h1 className="py-56 px-18 opacity-0 text-4xl">
                  Try our sticker samples before making up your mind!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DualA;

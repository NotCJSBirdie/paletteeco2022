import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="ml-12 mr-8">
      <section className="text-black body-font">
        <div className="container  py-5 mx-auto flex flex-wrap items-center">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-show  ">
            <div className="flex flex-col items-center">
              <div className="h-1/2">
                <section className="text-black body-font">
                  <div className="container px-5 mx-auto flex flex-row">
                    <div
                      id="box1"
                      className="lg:w-1/2 w-full lg:mb-0 rounded-lg overflow-show p-32 h-full m-2 "
                    >
                      <h1 className="opacity-0 py-14">Hello</h1>
                    </div>
                    <div
                      id="box2"
                      className="flex flex-col flex-wrap  lg:w-1/2  lg:text-left text-center p-32 rounded-lg m-2 "
                    >
                      <h1 className="opacity-0 py-14">Hello</h1>
                    </div>
                  </div>
                </section>
              </div>

              <div className="h-1/2">
                <section className="text-black body-font">
                  <div className="container px-5 mx-auto flex flex-row">
                    <div
                      id="box3"
                      className=" lg:w-1/2 w-full lg:mb-0 rounded-lg overflow-show p-32 h-full m-2 "
                    >
                      <h1 className="opacity-0 py-14">Hello</h1>
                    </div>
                    <div
                      id="box4"
                      className=" flex flex-col flex-wrap  lg:w-1/2  lg:text-left text-center p-32 rounded-lg m-2 "
                    >
                      <h1 className="opacity-0 py-14">Hello</h1>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-wrap lg:w-1/2 text-center pl-2">
            <div
              id="box5"
              className="bg-green-400 flex flex-col pt-72 pb-10 items-center rounded-lg mx-3"
            >
              <h1 id="box5text" className="text-5xl px-12">
                Put some colours into your life!
              </h1>
              <h1 id="box5text" className="text-2xl py-4 ">
                @Palette.eco
              </h1>
              <div className="py-36"></div>
              <div id="box5text2" className="text-md px-4">
                FIND MORE INSPIRATION ON OUR INSTAGRAM ACCOUNT
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;

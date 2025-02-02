const Info = () => {
  return (
    <>
    <section id="contant">
    <div className="bg-gray-200">
        <div className="container mx-auto px-4 py-7">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <h1 className="hidden md:block font-bold text-3xl">
                Our Excellent <br /> Services
              </h1>
              <h1 className="md:hidden font-bold text-2xl text-center">
                Our Excellent Services
              </h1>
            </div>
            <div className="text-gray-600 mt-4 md:mt-0 text-center md:text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Architecto debitis fugit nulla qui culpa dignissimos suscipit,
              voluptatem animi ipsum, laboriosam nemo sint consequatur
              consectetur ab porro voluptatum in quisquam ducimus accusamus
              quod. Mollitia, doloribus placeat cupiditate hic adipisci quasi
              molestiae suscipit laborum delectus voluptates laudantium magnam,
              officiis minus assumenda reiciendis!
            </div>
          </div>
        </div>
        <div className="container mx-auto px-3 pb-3">
          <div className="flex  gap-4 overflow-x-auto">
            <div className="bg-white rounded-lg shadow-xl p-6 min-w-[300px] ">
              <img
                src="/image1.jpg"
                alt="img1"
                className="w-full h-40 md:h-60 rounded-md"
              />
              <h2 className="text-xl font-bold">Our Title One</h2>
              <p className="text-gray-600 mt-2 text-sm md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae inventore porro culpa similique voluptate accusamus
                excepturi tempore delectus quia quaerat!
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-xl p-6 min-w-[300px]">
              <img
                src="/image2.jpg"
                alt="img1"
                className="w-full h-40 md:h-60 rounded-md"
              />
              <h2 className="text-xl  font-bold">Our Title Two</h2>
              <p className="text-gray-600 mt-2 text-sm md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae inventore porro culpa similique voluptate accusamus
                excepturi tempore delectus quia quaerat!
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-xl p-6 min-w-[300px]">
              <img
                src="/image3.jpg"
                alt="img1"
                className="w-full h-40 md:h-60 rounded-md"
              />
              <h2 className="text-xl font-bold">Our Title Three</h2>
              <p className="text-gray-600 mt-2  text-sm md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae inventore porro culpa similique voluptate accusamus
                excepturi tempore delectus quia quaerat!
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-xl p-6 min-w-[300px]">
              <img
                src="/image4.jpg"
                alt="img1"
                className="w-full h-40 md:h-60 rounded-md"
              />
              <h2 className="text-xl font-bold">Our Title Four</h2>
              <p className="text-gray-600 mt-2 text-sm md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae inventore porro culpa similique voluptate accusamus
                excepturi tempore delectus quia quaerat!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Info;

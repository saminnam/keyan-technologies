import React from "react";

const Blog = () => {
  return (
    <section className="group">
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <h2
          className="text-center text-3xl font-serif font-bold md:text-5xl lg:text-left"
          data-aos="flip-down"
          data-aos-duration="2000"
        >
          The latest and greatest news
        </h2>
        <div className="w-0 group-hover:w-96 transition-all duration-500 h-[5px] mt-4 bg-[#ff7222] rounded"></div>
        <p className="mb-8 mt-4 text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16 lg:text-left">
        The Future of Software Development: Trends to Watch in 2024
        </p>
        {/* Content */}
        <div className="mx-auto grid gap-8 lg:grid-cols-2">
          <a
            href="#"
            className="flex flex-col gap-4 rounded-md [grid-area:1/1/4/2] lg:pr-8"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <img
              src="https://i.pinimg.com/564x/f2/6b/fc/f26bfc9c7bdb5ca1c6a787f1b4cc4d77.jpg"
              alt=""
              className="inline-block h-72 w-full object-cover"
            />
            <div className="flex flex-col items-start py-4">
              <div className="mb-4 rounded-md bg-gray-100 px-2 py-1.5">
                <p className="text-sm font-semibold text-blue-600">
                  TECHNOLOGIES
                </p>
              </div>
              <p className="mb-4 text-xl font-bold md:text-2xl">
              Emerging Technologies and How They Will Shape the Software Industry
              </p>
              <div className="flex flex-col text-sm text-gray-500 lg:flex-row">
                <p>John Doe</p>
                <p className="mx-2 hidden lg:block">-</p>
                <p>6 mins read</p>
              </div>
            </div>
          </a>
          <div className="md:flex md:justify-between lg:flex-col">
            <a
              href="#"
              className="flex flex-col pb-5 lg:mb-3 lg:flex-row lg:border-b lg:border-gray-300"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <img
                src="https://i.pinimg.com/736x/da/90/6d/da906dbc9d3b5c8945b3bd507173300d.jpg"
                alt=""
                className="inline-block h-60 w-full object-cover md:h-32 lg:h-32 lg:w-32"
              />
              <div className="flex flex-col items-start pt-4 lg:px-8">
                <div className="mb-2 rounded-md bg-gray-100 px-2 py-1.5">
                  <p className="text-sm font-semibold text-blue-600">
                    TECHNOLOGIES
                  </p>
                </div>
                <p className="mb-2 text-sm font-bold sm:text-base">
                A Guide to Selecting Tools and Technologies
                </p>
                <div className="flex flex-col items-start">
                  <div className="flex flex-col text-sm text-gray-500 sm:text-base lg:flex-row lg:items-center">
                    <p>Jane Smith</p>
                    <p className="mx-2 hidden lg:block">-</p>
                    <p>8 mins read</p>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="#"
              className="flex flex-col pb-5 lg:mb-3 lg:flex-row lg:border-b lg:border-gray-300"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <img
                src="https://i.pinimg.com/564x/57/58/b6/5758b6667aa24cc4f6aabfef472a0a0c.jpg"
                alt=""
                className="inline-block h-60 w-full object-cover md:h-32 lg:h-32 lg:w-32"
              />
              <div className="flex flex-col items-start pt-4 lg:px-8">
                <div className="mb-2 rounded-md bg-gray-100 px-2 py-1.5">
                  <p className="text-sm font-semibold text-blue-600">
                    SOFTWARE DEVELOPMENT
                  </p>
                </div>
                <p className="mb-2 text-sm font-bold sm:text-base">
                Understanding Agile Practices and Their Benefits for Teams
                </p>
                <div className="flex flex-col items-start">
                  <div className="flex flex-col text-sm text-gray-500 sm:text-base lg:flex-row lg:items-center">
                    <p>Michael Lee</p>
                    <p className="mx-2 hidden lg:block">-</p>
                    <p>6 mins read</p>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="#"
              className="flex flex-col pb-5 lg:mb-3 lg:flex-row lg:border-b lg:border-gray-300"
              data-aos="fade-up"
              data-aos-duration="4000"
            >
              <img
                src="https://i.pinimg.com/564x/79/0f/30/790f30d30a937ac74d95eef8df66dcb6.jpg"
                alt=""
                className="inline-block h-60 w-full object-cover md:h-32 lg:h-32 lg:w-32"
              />
              <div className="flex flex-col items-start pt-4 lg:px-8">
                <div className="mb-2 rounded-md bg-gray-100 px-2 py-1.5">
                  <p className="text-sm font-semibold text-blue-600">
                    ARTIFICIAL INTELLIGENCE
                  </p>
                </div>
                <p className="mb-2 text-sm font-bold sm:text-base">
                How AI is Revolutionizing Software Across Industries
                </p>
                <div className="flex flex-col items-start">
                  <div className="flex flex-col text-sm text-gray-500 sm:text-base lg:flex-row lg:items-center">
                    <p>Emily Davis</p>
                    <p className="mx-2 hidden lg:block">-</p>
                    <p>5 mins read</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;

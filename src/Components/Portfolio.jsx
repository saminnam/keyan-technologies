import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { API_BASE_URL } from "./Api";
import axios from "axios";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetcher();
  }, []);

  const fetcher = () => {
    axios.get(`${API_BASE_URL}portfolio`)
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.log("Failed to show projects", error);
      });
  };

  return (
    <section className="bg-service-pattern bg-cover bg-no-repeat">
      <div className="mx-auto w-full max-w-7xl py-16 md:py-20">
        <div className="flex items-center justify-center flex-col gap-3">
          <h2
            className="text-3xl font-bold md:text-5xl font-serif"
            data-aos="flip-down"
            data-aos-duration="2000"
          >
            Portfolio
          </h2>
          <div className="w-40 h-[5px] bg-[#006CB7] rounded"></div>
          <p className="mb-8 mt-4 max-w-xl text-base text-center text-gray-700 md:mb-12 md:text-lg lg:mb-16">
            Explore our diverse portfolio showcasing successful software
            solutions that demonstrate our expertise in driving innovation and
            delivering exceptional results for our clients.
          </p>
        </div>
        <div className="shadow-lg shadow-[#c1dff5] p-1 rounded-lg">
          {projects.length > 0 ? (
            <div className="slider-container p-5 shadow-inner shadow-[#c1dff5] rounded-lg">
              <Swiper
                spaceBetween={30}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 1, 
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3, 
                  },
                  1440: {
                    slidesPerView: 3, 
                  },
                }}
                loop={true}
                speed={500}
                modules={[Autoplay]}
              >
                {projects.map((project) => (
                  <SwiperSlide key={project.id}>
                    <a
                      href="#"
                      className="rounded-md p-2"
                      data-aos="zoom-out-up"
                      data-aos-duration={project.id * 1000}
                    >
                      <img
                        src={`http://localhost:3000/Images/${project.image}`}
                        alt={project.title}
                        className="mb-3 inline-block rounded h-60 w-full object-cover lg:w-96"
                      />
                      <p className="mb-1 text-gray-700 text-center font-bold">
                        {project.title}
                      </p>
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ) : (
            <div className="text-center">Loading Portfolios...</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

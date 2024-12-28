import { useState, useEffect } from "react";
import Slider from "react-slick";
import star from "../assets/star.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { API_BASE_URL } from "./Api";
import axios from "axios";

const Testimonials = () => {
  const [testimonialsData, setTestimonialsData] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    slidesToScroll: 3,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    fetcher();
  }, []);
  
  const fetcher = () => {
    axios
      .get(`${API_BASE_URL}testimonials`)
      .then((response) => {
        setTestimonialsData(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch testimonials", error);
      });
  };

  return (
    <section className="py-12 group bg-gray-50 sm:py-16 lg:py-20 bg-service-pattern bg-cover bg-no-repeat">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="flex justify-center flex-col items-center gap-3">
          <h2
            className="text-3xl font-bold font-serif md:text-5xl"
            data-aos="flip-down"
            data-aos-duration="2000"
          >
            Testimonials
          </h2>
          <div className="w-40 h-[5px] bg-[#006CB7] rounded"></div>
        </div>
        <div className="mt-10">
          {testimonialsData.length > 0 ? (
            <Slider {...settings}>
              {testimonialsData.map((testimonial, index) => (
                <div
                  key={index}
                  className="p-6 bg-white cursor-pointer ease-linear hover:scale-105 transition-all duration-300 border shadow-lg rounded-lg"
                >
                  <div className="mb-12 md:mb-0">
                    <div className="mb-6 flex justify-center">
                      <img
                        src={`http://localhost:3000/Images/${testimonial.image}`}
                        alt={testimonial.name}
                        className="w-32 rounded-full shadow-lg dark:shadow-black/30"
                      />
                    </div>
                    <h5 className="mb-4 text-xl font-semibold">
                      {testimonial.name}
                    </h5>
                    <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                      <span className="inline-block pe-2 [&>svg]:w-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 448 512"
                        >
                          <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
                        </svg>
                      </span>
                      {testimonial.content}
                    </p>
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <img
                          key={i}
                          src={star}
                          alt="star"
                          className="mr-1 w-4"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            <div className="text-center">Loading testimonials...</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

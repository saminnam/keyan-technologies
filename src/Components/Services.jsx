import { useEffect, useState } from "react";
import { API_BASE_URL } from "./Api";
import axios from "axios";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetcher();
  }, []);
  const fetcher = () => {
    axios
      .get(`${API_BASE_URL}services`)
      .then((response) => {
        setServices(response.data);
      })
      .catch((error) => {
        console.log("Failed to fetch services", error);
      });
  };

  return (
    <section className="bg-service-pattern bg-cover bg-no-repeat" id="services">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="flex flex-col items-center text-center gap-5">
          <div className="flex items-center justify-center flex-col gap-3">
            <h2
              className="text-3xl font-bold font-serif md:text-5xl"
              data-aos="flip-down"
            >
              Our Services
            </h2>
            <div className="w-40 transition-all h-[5px] bg-[#006CB7] rounded"></div>
          </div>
          <p className="mb-8 mt-4 max-w-xl text-base text-gray-500 md:mb-12 md:text-lg lg:mb-16">
            We offer a comprehensive range of software solutions, including
            custom software development, mobile app development, and web
            development, tailored to meet your business needs.
          </p>
        </div>
        {services.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="grid gap-6 cursor-pointer transition-all ease-linear  duration-300 rounded-lg hover:border-[#006CB7] border-[3px] hover:rounded-xl text-center card_service shadow-lg border-solid text-black"
                data-aos="fade-up"
              >
                <div className="p-8 md:p-10 rounded-md hover:scale-105 transition-all ease-linear  duration-300">
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-md mt-5 text-justify">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center">Loading Services...</div>
        )}
      </div>
    </section>
  );
};

export default Services;

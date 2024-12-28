import { IoColorPaletteOutline } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";
import { TbDeviceMobileCode } from "react-icons/tb";
import { RiPagesLine } from "react-icons/ri";
import { LiaUsersCogSolid } from "react-icons/lia";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const services = () => [
  {
    icon: <IoColorPaletteOutline className="text-5xl text-[#2986fe]" />,
    title: "UI/UX",
    subContent:
      "Crafting intuitive and visually engaging UI/UX designs that enhance user experience and drive business success.",
  },
  {
    icon: <FaLaptopCode className="text-5xl text-[#73fe29]" />,
    title: "WEB DEVELOPMENT",
    subContent:
      "Our web development services focus on creating dynamic, responsive, and user-friendly websites.",
  },
  {
    icon: <TbDeviceMobileCode className="text-5xl text-[#fe7729]" />,
    title: "APP DEVELOPMENT",
    subContent:
      "Our app development services deliver intuitive, high-performance mobile and web applications.",
  },
  {
    icon: <RiPagesLine className="text-5xl text-[#f05c72]" />,
    title: "LANDING PAGES",
    subContent:
      "Creating impactful, conversion-driven landing pages to boost your business growth.",
  },
  {
    icon: <LiaUsersCogSolid className="text-5xl text-[#ada729]" />,
    title: "TECHNICAL CONSULTING",
    subContent:
      "Offering expert guidance to drive innovation and optimize your business strategies.",
  },
];

const PopularService = () => {
  const settings = {
    dots: true,
    centerMode: true,
    infinite: true,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    centerPadding: "0",
    slidesToShow: 4,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-10 max-w-screen-2xl px-5 lg:px-20 md:py-20 bg-[#f3f7fb]">
      <div className="flex justify-center mb-5">
        <h2 className="text-sm border-b border-[#2986fe] lg:text-lg text-[#2986fe] font-semibold text-primary">
          Our Popular Service
        </h2>
      </div>
      <p className="lg:w-[900px] w-full text-center mx-auto font-bold font-serif text-black sm:text-2xl lg:text-4xl">
        Delivering tailored solutions to drive your business growth and success.
      </p>
      <div className="mt-10">
        <Slider {...settings}>
          {services().map((service, index) => (
            <Link
              to="/services"
              key={index}
              data-aos="fade-up"
              className="py-16 px-5 group hover:bg-card-pattern bg-cover bg-no-repeat border-b-2 bg-white border-b-[#006CB7] border"
            >
              <div className="flex flex-col justify-center items-center ">
                <div className="bg-white p-5 border rounded-full mb-5">
                  {service.icon}
                </div>
                <h1 className="text-xl font-bold mb-2 group-hover:text-white transition-all ease-in duration-300">
                  {service.title}
                </h1>
                <p className="text-base text-center text-gray-600 group-hover:text-white transition-all ease-in duration-300">
                  {service.subContent}
                </p>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PopularService;

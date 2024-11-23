import logowhite from "../assets/keyan-white1.png";
import { Link } from "react-router-dom";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaGlobeEurope } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <section className="pt-10 bg-black sm:pt-16">
      <div className="w-full max-w-screen-2xl">
        <div className="grid grid-cols-2 px-4 mx-auto lg:px-20 md:grid-cols-4 lg:grid-cols-12 gap-y-12 gap-x-8 xl:gap-x-12">
          <div className="col-span-2 md:col-span-4 xl:pr-8">
            <a href="/">
              <img className="w-[180px]" src={logowhite} alt="logo" />
            </a>
            <p className="text-base leading-relaxed text-white mt-7">
              Building the Future of Technology, One Line of Code at a Time.
              Custom Software Solutions that Drive Results.
            </p>
          </div>
          <div className="lg:col-span-2">
            <p className="text-base font-semibold text-white">Company</p>
            <div className="bg-[#006CB7] mt-2 rounded w-14 h-1"></div>
            <ul className="mt-6 space-y-5">
              <li>
                <Link
                  to={"/about"}
                  className="flex text-sm  hover:translate-x-2 text-white transition-all duration-300 hover:text-[#006CB7] focus:text-[#006CB7]"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to={"/services"}
                  className="flex text-sm  hover:translate-x-2 text-white transition-all duration-300 hover:text-[#006CB7] focus:text-[#006CB7]"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to={"/portfolios"}
                  className="flex text-sm  hover:translate-x-2 text-white transition-all duration-300 hover:text-[#006CB7] focus:text-[#006CB7]"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to={"/career"}
                  className="flex text-sm  hover:translate-x-2 text-white transition-all duration-300 hover:text-[#006CB7] focus:text-[#006CB7]"
                >
                  Career
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <p className="text-base font-semibold text-white">Services</p>
            <div className="bg-[#006CB7] mt-2 rounded w-14 h-1"></div>
            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  to={"/services"}
                  className="flex text-sm  hover:translate-x-2 text-white transition-all duration-300 hover:text-[#006CB7] focus:text-[#006CB7]"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to={"/services"}
                  className="flex text-sm  hover:translate-x-2 text-white transition-all duration-300 hover:text-[#006CB7] focus:text-[#006CB7]"
                >
                  App Development
                </Link>
              </li>
              <li>
                <Link
                  to={"/services"}
                  className="flex text-sm  hover:translate-x-2 text-white transition-all duration-300 hover:text-[#006CB7] focus:text-[#006CB7]"
                >
                  Software Development
                </Link>
              </li>
              <li>
                <Link
                  to={"/services"}
                  className="flex text-sm  hover:translate-x-2 text-white transition-all duration-300 hover:text-[#006CB7] focus:text-[#006CB7]"
                >
                  Web Design
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <p className="text-base font-semibold text-white">Websites</p>
            <div className="bg-[#006CB7] mt-2 rounded w-14 h-1"></div>
            <ul className="mt-6 space-y-5">
              <li>
                <Link
                  to={"/portfolios"}
                  className="flex text-sm  hover:translate-x-2 text-white transition-all duration-300 hover:text-[#006CB7] focus:text-[#006CB7]"
                >
                  E-Commerce
                </Link>
              </li>
              <li>
                <Link
                  to={"/portfolios"}
                  className="flex text-sm  hover:translate-x-2 text-white transition-all duration-300 hover:text-[#006CB7] focus:text-[#006CB7]"
                >
                  Booking Applications
                </Link>
              </li>
              <li>
                <Link
                  to={"/portfolios"}
                  className="flex text-sm  hover:translate-x-2 text-white transition-all duration-300 hover:text-[#006CB7] focus:text-[#006CB7]"
                >
                  Healthcare Services
                </Link>
              </li>
              <li>
                <Link
                  to={"/portfolios"}
                  className="flex text-sm  hover:translate-x-2 text-white transition-all duration-300 hover:text-[#006CB7] focus:text-[#006CB7]"
                >
                  Social Media Platform
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <p className="text-base font-semibold text-white">Contact us</p>
            <div className="bg-[#006CB7] mt-2 rounded w-14 h-1"></div>
            <div className="flex justify-center items-center text-white mt-4 gap-2">
              <IoMailOpenOutline classNameName="text-2xl" />
              <p className="">info@inetztech.com </p>
            </div>
          </div>
        </div>
        <hr className="mt-16 border-gray-200" />
        <div className="sm:flex px-4 mx-auto lg:px-20 sm:items-center sm:justify-between bg-[#0a0f14] py-5">
          <p className="text-sm text-white">
            © Copyright 2024, All Rights Reserved
          </p>
          <ul className="flex items-center mt-5 space-x-3 md:order-3 sm:mt-0">
            <li>
              <a
                href="https://www.inetztech.com/"
                className="flex items-center justify-center text-white transition-all duration-300 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-[#006CB7] hover:text-white focus:text-white hover:bg-[#006CB7] hover:border-[#006CB7] focus:border-[#006CB7]"
              >
                <FaGlobeEurope />
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/919840234475"
                className="flex items-center justify-center text-white transition-all duration-300 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-[#006CB7] hover:text-white focus:text-white hover:bg-[#006CB7] hover:border-[#006CB7] focus:border-[#006CB7]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/inetz_technologies_vadapalani?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="flex items-center justify-center text-white transition-all duration-300 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-[#006CB7] hover:text-white focus:text-white hover:bg-[#006CB7] hover:border-[#006CB7] focus:border-[#006CB7]"
              >
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                  <circle cx="16.806" cy="7.207" r="1.078"></circle>
                  <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="www.youtube.com/@Inetztechnologies"
                className="flex items-center justify-center text-white transition-all duration-300 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-[#006CB7] hover:text-white focus:text-white hover:bg-[#006CB7] hover:border-[#006CB7] focus:border-[#006CB7]"
              >
                <AiOutlineYoutube />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;

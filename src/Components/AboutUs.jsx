import { TbDeviceDesktopCog } from "react-icons/tb";
import { FaPeopleGroup } from "react-icons/fa6";
import wed_service from "../assets/aboutimg.png";

const AboutUs = () => {
  return (
    <div className="mx-auto w-full bg-gray-50  max-w-screen-2xl px-5 py-16 lg:px-20 md:py-20">
      <div className="flex flex-col items-start text-center gap-5 mb-4">
        <div className="flex items-start justify-center flex-col">
          <h2
            className="text-3xl font-bold md:text-3xl font-serif"
            data-aos="flip-down"
            data-aos-duration="2000"
          >
            Get to Know Us
          </h2>
          <div className="w-40 mt-4 h-[5px] bg-[#006CB7] rounded"></div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 grid-cols-1 items-center">
        <div className="flex flex-col gap-5">
          <h1 className="mb-4 text-4xl font-semibold leading-tight md:text-[50px] md:w-[450px] w-full">
            Your Vision, Our Expertise, Perfectly Crafted.
          </h1>

          <p className="mb-6 max-w-2xl text-sm text-gray-500 sm:text-[18px] md:mb-10 lg:mb-12 text-justify leading-normal">
            Keyan Technologies specializes in Web, App, and Software
            Development, delivering innovative solutions like responsive
            websites, mobile apps, and creative visuals to help businesses
            thrive online. We turn your ideas into reality with cutting-edge
            technology and design.
          </p>
          <div className="flex lg:flex-row flex-col gap-5 relative">
            <div
              className="p-8 border space-y-2 cursor-pointer rounded shadow-lg group relative"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="absolute top-[-35px] bg-[#006CB7] transition-all duration-300 p-5 rounded-full group-hover:bg-white border border-[#006CB7]">
                <FaPeopleGroup className="text-2xl text-white transition-all duration-300 group-hover:text-[#006CB7]" />
              </div>
              <h2 className="font-bold text-xl group-hover:text-[#006CB7]">
                Free Consultation
              </h2>
              <p className="group-hover:text-[#006CB7]">
                Book your Free Consultation now for expert advice
              </p>
            </div>
            <div
              className="p-8 border space-y-2 cursor-pointer rounded shadow-lg group relative"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="absolute top-[-35px] bg-[#006CB7] transition-all duration-300 p-5 rounded-full group-hover:bg-white border border-[#006CB7]">
                <TbDeviceDesktopCog className="text-2xl text-white transition-all duration-300 group-hover:text-[#006CB7]" />
              </div>
              <h2 className="font-bold text-xl group-hover:text-[#006CB7]">
                Quality Service
              </h2>
              <p className="group-hover:text-[#006CB7]">
                Providing reliable, top-quality solutions tailored to your
                needs.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            src={wed_service}
            alt="Web Service"
            className="inline-block h-full rounded-lg w-full max-w-2xl"
            data-aos="zoom-in"
            data-aos-duration="2000"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

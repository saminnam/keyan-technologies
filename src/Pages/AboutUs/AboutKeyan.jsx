import { IoCheckmark } from "react-icons/io5";
import img1 from "../../assets/Group.png";
import { Link } from "react-router-dom";

const AboutKeyan = () => {
  return (
    <section className="py-10 bg-gray-50 max-w-screen-2xl px-5 lg:px-20 md:py-20">
      <div className="flex gap-20 items-center lg:flex-row flex-col">
        <img src={img1} alt="img" data-aos="fade-left" />
        <div>
          <div data-aos="fade-right">
            <div className="flex mb-5">
              <h1 className="text-sm border-b border-[#2986fe] lg:text-lg text-[#2986fe] font-semibold">
                About Keyan
              </h1>
            </div>
            <h2 className="mb-5 text-3xl font-bold font-serif sm:text-[40px]/[48px]">
              Innovative Software Solutions for Your Business
            </h2>
            <p className="mb-5 text-base text-body-color dark:text-dark-6">
              At Keyan Technologies, we provide customized software solutions
              designed to address your unique business challenges. Our skilled
              team leverages advanced technology and industry best practices to
              optimize operations and boost productivity. form, simply free text
              by injected humour, or randomised.
            </p>
            <h2 className="text-2xl font-medium uppercase tracking-tight text-[#2986fe]">
              We provide reliable, tailored solutions for your business.
            </h2>
            <div className="flex flex-col gap-5 mt-6">
              <div className="flex items-center gap-5">
                <IoCheckmark className="text-2xl text-[#2986fe]" />
                <h3 className="font-bold">
                  We create custom strategies that perfectly align with your
                  business goals.
                </h3>
              </div>
              <div className="flex items-center gap-5">
                <IoCheckmark className="text-2xl text-[#2986fe]" />
                <h3 className="font-bold">
                  Our experienced professionals deliver top-quality results with
                  precision.
                </h3>
              </div>
              <div className="flex items-center gap-5">
                <IoCheckmark className="text-2xl text-[#2986fe]" />
                <h3 className="font-bold">
                  We use the latest tools and technologies to ensure your
                  business stays ahead.
                </h3>
              </div>
            </div>
            <Link to={"/services"}>
              <button className="font-medium hover:bg-transparent border border-[#2986fe] transition-all duration-300 hover:text-[#2986fe] uppercase tracking-tight p-4 mt-10 text-white bg-[#2986fe]">
                Discover More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutKeyan;

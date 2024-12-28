import "animate.css";
import hero from "../assets/hero2.png";
import Logos from "./Logos";

const Hero = () => {
  return (
    <section>
      <div className="mx-auto mt-10 w-full max-w-7xl px-5 py-16 md:px-10 md:py-20 relative">
        <div className="mx-auto max-w-3xl text-center">
          <h1
            className="mb-4 text-4xl font-bold md:text-6xl font-serif"
            data-aos="fade-down"
          >
            Build Your Digital Presence with Keyan Technologies
          </h1>
          <p
            className="mb-6 text-sm text-gray-500 sm:text-xl lg:mb-8"
            data-aos="fade-down"
          >
            Keyan Technologies offers cutting-edge web and app development
            solutions tailored to your business needs.
          </p>
          <a
            href="#services"
            className="flex items-center justify-center animate__zoomInUp animate__animated"
          >
            <button className="relative flex items-center justify-center bg-[#006CB7] text-white font-[inherit] text-[17px] font-medium px-[1.2em] py-[0.35em] rounded-[0.9em] border-none tracking-[0.05em] cursor-pointer shadow-[inset_0_0_1.6em_-0.6em_#714da6] overflow-hidden h-[2.8em] pr-[3.3em] group">
              Get started
              <div className="icon absolute flex items-center justify-center bg-white w-[2.2em] h-[2.2em] rounded-[0.7em] right-[0.3em] transition-all duration-300 group-hover:w-[calc(100%-0.6em)] group-active:scale-[0.95]">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[1.1em] transition-transform duration-[300ms] text-[#006CB7] group-hover:translate-x-[0.1em]"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </button>
          </a>
        </div>
        <Logos />
      </div>
      <img
        src={hero}
        alt="hero"
        className="absolute top-0 right-0 hidden md:hidden lg:block h-full"
      />
    </section>
  );
};

export default Hero;

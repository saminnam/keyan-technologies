import { MdOutlineDesignServices } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { GrTestDesktop } from "react-icons/gr";

const HowDoWe = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-5">
            <h2 className="text-sm border-b border-[#2986fe] lg:text-lg text-[#2986fe] font-semibold text-primary">
              How do we create success
            </h2>
          </div>
          <p className="lg:w-[900px] w-full text-center mx-auto font-bold font-serif text-black sm:text-2xl lg:text-4xl">
            Continuous learning is about updating skills to stay relevant in
            changing environments.
          </p>
        </div>
        <ul className="max-w-md mx-auto mt-16 space-y-12">
          <li className="relative flex items-start">
            <div
              className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full"
              aria-hidden="true"
            ></div>
            <div
              className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <MdOutlineDesignServices className="text-4xl text-[#006CB7]" />
            </div>
            <div className="ml-6" data-aos="fade-down" data-aos-duration="2000">
              <h3 className="text-lg font-semibold text-black">
                Product Design
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Product design is the process of creating and developing new
                products that effectively meet user needs and solve specific
                problems.
              </p>
            </div>
          </li>
          <li className="relative flex items-start">
            <div
              className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full"
              aria-hidden="true"
            ></div>
            <div
              className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow"
              data-aos="fade-down"
              data-aos-duration="3000"
            >
              <FaLaptopCode className="text-4xl text-[#006CB7]" />
            </div>
            <div className="ml-6" data-aos="fade-down" data-aos-duration="2000">
              <h3 className="text-lg font-semibold text-black">Development</h3>
              <p className="mt-4 text-base text-gray-600">
                Development is the iterative process of designing, building, and
                deploying software applications or systems to solve specific
                user problems. It encompasses various methodologies, such as
                Agile and DevOps, to enhance collaboration, efficiency, and
                product quality.
              </p>
            </div>
          </li>
          <li className="relative flex items-start">
            <div
              className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full"
              aria-hidden="true"
            ></div>
            <div
              className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow"
              data-aos="fade-down"
              data-aos-duration="4000"
            >
              <GrTestDesktop className="text-3xl text-[#006CB7]" />
            </div>
            <div className="ml-6" data-aos="fade-down" data-aos-duration="2000">
              <h3 className="text-lg font-semibold text-black">
                Product Testing
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Product testing is the critical process of evaluating a
                product’s performance, functionality, and usability to ensure it
                meets quality standards before launch.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HowDoWe;

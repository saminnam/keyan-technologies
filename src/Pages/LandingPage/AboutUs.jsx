import { IoCheckmark } from "react-icons/io5";

const AboutUs = () => {
  return (
    <section className="max-w-screen-2xl px-5 py-16 lg:px-20 md:py-20">
      <div className="flex gap-20 lg:flex-row flex-col md:flex-col">
        <div className="lg:w-[1450px] w-full" data-aos="fade-left">
          <div className="flex mb-5">
            <h1 className="text-sm border-b border-[#2986fe] lg:text-lg text-[#2986fe] font-semibold">
              Our Landing Page Services
            </h1>
          </div>
          <h2 className="mb-5 text-3xl font-bold font-serif sm:text-[40px]/[48px]">
            High-Converting Landing Page Design for Your Business Success
          </h2>
          <p>
            At our company, we specialize in creating professional landing pages
            designed to increase conversions, capture leads, and enhance your
            digital presence. Each landing page is optimized for SEO, mobile
            responsiveness, and user engagement, ensuring your business stands
            out in a competitive market.
          </p>
          <div
            className="flex justify-between mt-16 lg:flex-row flex-col items-center gap-8 lg:gap-7"
            data-aos="fade-up"
          >
            <div className="p-8 shadow-md border flex flex-col gap-4 w-full">
              <div className="flex gap-5 items-center">
                <IoCheckmark className="text-2xl text-[#2986fe]" />
                <p>Responsive Design for All Devices</p>
              </div>
              <div className="flex gap-5 items-center">
                <IoCheckmark className="text-2xl text-[#2986fe]" />
                <p>SEO-Friendly Landing Pages to Rank Higher</p>
              </div>
              <div className="flex gap-5 items-center">
                <IoCheckmark className="text-2xl text-[#2986fe]" />
                <p>Faster Page Load Times for Better User Experience</p>
              </div>
              <div className="flex gap-5 items-center">
                <IoCheckmark className="text-2xl text-[#2986fe]" />
                <p>Custom Features & Integrations</p>
              </div>
            </div>
            <img
              src="https://i.pinimg.com/736x/99/b1/bc/99b1bc8897217dbf18cc47e6ab2e251f.jpg"
              alt="img"
              className="lg:w-72 lg:h-56 w-full"
            />
          </div>
        </div>
        <div className="space-y-10" data-aos="fade-up">
          <div>
            <h2 className="text-xl font-medium mb-5">
              Over 1500 Successful Landing Pages Delivered
            </h2>
            <div className="flex gap-5 items-center border-b-2 pb-7">
              <h3 className="p-5 bg-[#edf6f7] font-bold text-4xl">1500</h3>
              <p>
                We’ve designed and delivered over 1500 unique landing pages for
                businesses in various industries.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-xl mb-5 font-medium">
              Industry-Leading Client Satisfaction Rate
            </h2>
            <div className="flex gap-5 items-center border-b-2 pb-7">
              <h3 className="p-5 bg-slate-300 font-bold text-4xl">98%</h3>
              <p>
                With a 98% satisfaction rate, our clients trust us to deliver
                innovative landing pages that drive conversions and business
                growth.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-medium mb-5">
              Fast Turnaround Time for Your Business Needs
            </h2>
            <div className="flex gap-5 items-center">
              <div className="p-5 bg-[#f7f5ed] flex items-center font-bold gap-2">
                <h3 className="text-4xl">5</h3>
                <span className="text-2xl">Days</span>
              </div>
              <p>
                Launch your landing page in just 5 days and start generating
                leads fast with our efficient process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

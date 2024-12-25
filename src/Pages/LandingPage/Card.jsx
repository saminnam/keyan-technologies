import { FaPalette, FaFileAlt, FaSmile } from "react-icons/fa";

const Card = () => {
  return (
    <section className="max-w-screen-2xl px-5 py-16 lg:px-20 md:py-20 bg-choose-pattern bg-fixed bg-cover bg-no-repeat">
      <div
        className="flex lg:flex-row flex-col justify-between items-center gap-6"
        data-aos="fade-down"
      >
        <div className="flex items-center space-x-4 bg-white">
          <div className="text-5xl text-white bg-info-pattern bg-cover bg-no-repeat py-12 px-7">
            <FaPalette />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Various Design Choices
            </h2>
            <p className="text-gray-600">
              Choose from a variety of designs to create the perfect layout.
            </p>
          </div>
        </div>
        <div className="flex group items-center space-x-4 bg-white">
          <div className="text-5xl text-white bg-info-pattern bg-cover bg-no-repeat py-12 px-7">
            <FaFileAlt />
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Ready To Use Files</h2>
            <p className="text-gray-600">
              Get fully functional files and complete ownership.
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4 bg-white">
          <div className="text-5xl text-white bg-info-pattern bg-cover bg-no-repeat py-12 px-7">
            <FaSmile />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Satisfaction Guaranteed
            </h2>
            <p className="text-gray-600">
              We ensure your satisfaction with our designs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;

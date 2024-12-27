import { useEffect, useState } from "react";
import GlobalTitle from "../Components/GlobalTitle";
import { API_BASE_URL } from "../Components/Api";
import axios from "axios";

const PortfolioPage = () => {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    fetcher();
  }, []);

  const fetcher = () => {
    axios
      .get(`${API_BASE_URL}portfolio`)
      .then((response) => {
        setPortfolios(response.data);
      })
      .catch((error) => {
        console.log("Failed to fetch portfolios", error);
      });
  };

  return (
    <section>
      <GlobalTitle title={"PORTFOLIOS"} />
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="flex items-center justify-center flex-col gap-5">
          <h2
            className="text-3xl font-bold font-serif md:text-5xl"
            data-aos="flip-down"
            data-aos-duration="2000"
          >
            Our Projects
          </h2>
          <div className="w-40 h-[5px] bg-[#006CB7] rounded"></div>
        </div>
        {portfolios.length > 0 ? (
          <div className="grid justify-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 mt-10">
            {portfolios.map((project) => (
              <a
                key={project._id}
                href={project.websiteUrl}
                className="flex flex-col border group hover:shadow-sm hover:text-[#006CB7] hover:shadow-[#006CB7] rounded-md p-4 lg:p-2"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <img
                  src={`http://localhost:3000/Images/${project.image}`}
                  alt={project.title}
                  className="mb-3 inline-block group-hover:rotate-2 transition-all ease-linear duration-300 lg:h-60 w-full object-cover lg:w-96 rounded-lg"
                />
                <p className="mb-1 text-center font-bold">{project.title}</p>
                <p className="text-center text-sm text-gray-500">
                  {project.category}
                </p>
              </a>
            ))}
          </div>
        ) : (
          <div className="text-center mt-5">Loading Portfolios...</div>
        )}
      </div>
    </section>
  );
};

export default PortfolioPage;

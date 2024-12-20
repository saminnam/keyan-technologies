import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiRequest } from "./Api";

const OurTeam = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetcher();
  }, []);
  const fetcher = () => {
    apiRequest("get", "team")
      .then((data) => {
        setTeams(data);
      })
      .catch((error) => {
        console.log("Failed to show teams", error);
      });
  };
  return (
    <section className="mt-10 max-w-screen-2xl px-5 lg:px-20 md:py-20 bg-[#f3f7fb]">
      <div className="flex justify-center mb-5">
        <h2 className="text-sm border-b border-[#2986fe] lg:text-lg text-[#2986fe] font-semibold text-primary">
          Meet Our Team
        </h2>
      </div>
      <p className="lg:w-[900px] w-full text-center mx-auto font-bold font-serif text-black sm:text-2xl lg:text-4xl">
        Meet the innovative minds driving our software solutions forward.
      </p>

      {teams.length > 0 ? (
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 mx-10 gap-10 mt-12">
          {teams.map((team) => (
            <div data-aos="fade-up" key={team.id}>
              <div className="bg-white rounded-lg shadow-lg border transition-all ease-linear duration-300 hover:border-[#2986fe] cursor-pointer hover:scale-105 p-6 my-6 flex flex-col justify-center items-center">
                <img
                  src={`http://localhost:3000/Images/${team.image}`}
                  alt={team.name}
                  className="w-full h-72 object-cover rounded mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{team.Name}</h3>
                <p className="text-gray-700">{team.Role}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center mt-5">Loading Teams List...</div>
      )}
    </section>
  );
};

export default OurTeam;

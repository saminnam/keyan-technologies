import { Link } from "react-router-dom";

const GlobalTitle = ({ title }) => {
  return (
    <section className="relative bg-hero-pattern bg-cover bg-no-repeat py-36 w-full h-auto">
      <div
        className="flex items-center font-bold gap-5 flex-col justify-center text-white"
        data-aos="zoom-in-down"
        data-aos-duration="2000"
      >
        <h1 className="text-5xl font-serif">{title}</h1>
        <ul className="flex text-xl gap-2 font-medium">
          <li>
            <Link to={"/"}>HOME</Link>
          </li>
          <li>/</li>
          <li className="text-[#c0d6f4]">{title}</li>
        </ul>
      </div>
    </section>
  );
};

export default GlobalTitle;

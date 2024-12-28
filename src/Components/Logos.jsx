import logo1 from "../assets/Microsoft Logo.svg";
import { useEffect, useState } from "react";
import logo2 from "../assets/Paypal Logo.svg";
import logo3 from "../assets/Group.svg";
import logo4 from "../assets/Chase Logo.svg";
import logo5 from "../assets/Walmart Logo.svg";

const logos = [
  { logo: logo1, alt: "Microsoft Logo" },
  { logo: logo2, alt: "Paypal Logo" },
  { logo: logo3, alt: "Group Logo" },
  { logo: logo4, alt: "Chase Logo" },
  { logo: logo5, alt: "Walmart Logo" },
];

const Logos = () => {
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogoIndex((prevIndex) =>
        prevIndex === logos.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <ul className="mt-16 grid grid-cols-1 sm:mt-24 sm:grid-cols-3 sm:gap-12 md:grid-cols-5 md:gap-4">
      {logos &&
        logos.map((logoItem, index) => (
          <li
            key={index}
            className={`flex justify-center transition-opacity duration-1000 z-40 ${
              index === currentLogoIndex ? "opacity-100" : "opacity-50"
            }`}
          >
            <img
              src={logoItem.logo}
              alt={`Logo ${logoItem.alt}`}
              className="inline-block h-9"
            />
          </li>
        ))}
    </ul>
  );
};

export default Logos;

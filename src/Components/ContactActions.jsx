import { LuPhoneCall } from "react-icons/lu";
import { IoMailUnreadOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

const ContactActions = () => {
  const cards = [
    {
      title: "Let's Connect",
      heading: "Call Now",
      icon: <LuPhoneCall className="text-4xl text-[#006CB7]" />,
      content: "+91 98402 34475",
      animation: { type: "zoom-in", duration: 1000 },
    },
    {
      title: "Write",
      heading: "Send Email",
      icon: <IoMailUnreadOutline className="text-4xl text-[#006CB7]" />,
      content: "info@inetztech.com",
      animation: { type: "zoom-in", duration: 2000 },
    },
    {
      title: "Let's Meet",
      heading: "Location",
      icon: <CiLocationOn className="text-4xl text-[#006CB7]" />,
      content:
        "D2, 2nd Floor, Doshi Garden Arcot Road, Vadapalani, Chennai-600026",
      animation: { type: "zoom-in", duration: 3000 },
    },
  ];
  return (
    <div className="flex flex-col gap-6 items-center md:flex-row mt-20 mb-24 justify-between mx-auto w-full max-w-7xl md:px-10">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex w-[350px] flex-col p-6 gap-3 border rounded-lg shadow-2xl"
          data-aos={card.animation.type}
          data-aos-duration={card.animation.duration}
        >
          <h4 className="text-xs font-medium uppercase tracking-wider text-[#006CB7]">
            {card.title}
          </h4>
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-3xl font-serif">{card.heading}</h4>
            {card.icon}
          </div>
          <p className="text-gray-500">{card.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactActions;

import GlobalTitle from "../Components/GlobalTitle";
import ContactActions from "../Components/ContactActions";
import ContactForm from "./ContactUs/ContactForm";

const CareerPage = () => {
  return (
    <>
      <GlobalTitle title={"CAREERS"} />
      <h2 className="text-6xl mt-20 text-center font-serif">
        Get to reach us...
      </h2>
      <ContactActions />
      <div className="w-full bg-gray-50 py-10">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-2 md:my-24">
          <div className="grid items-center lg:gap-0 sm:gap-20 lg:grid-cols-2">
            <div className="map-container border-2 border-[#2986fe] shadow-lg rounded-lg p-2 w-full h-[510px]">
              <iframe
                className="gmap-iframe w-full h-full rounded-lg"
                frameBorder="0"
                scrolling="no"
                src="https://maps.google.com/maps?width=600&height=400&hl=en&q=vadapalani doshi garden&t=p&z=14&ie=UTF8&iwloc=B&output=embed"
                title="Google Map"
              ></iframe>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerPage;

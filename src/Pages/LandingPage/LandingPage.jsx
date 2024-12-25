import GlobalTitle from "../../Components/GlobalTitle";
import PopularService from "../AboutUs/PopularService";
import AboutUs from "./AboutUs";
import Benefits from "./Benefits";
import Card from "./Card";

const LandingPage = () => {
  return (
    <>
      <GlobalTitle title={"LANDING PAGE DESIGN"} />
      <AboutUs/>
      <Card/>
      <PopularService/>
      <Benefits/>
    </>
  );
};

export default LandingPage;

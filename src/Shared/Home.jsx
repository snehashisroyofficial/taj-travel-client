import CountriesCards from "../components/CountriesCards";
import ReviewsSlider from "../components/ReviewsSlider";
import Slider from "../components/Slider";
import Stats from "../components/Stats";
import TouristsSpots from "../components/TouristsSpots";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <div className="space-y-20">
      <Fade>
        <Slider />

        <CountriesCards></CountriesCards>
        <TouristsSpots />

        <ReviewsSlider />
        <Stats></Stats>
      </Fade>
    </div>
  );
};

export default Home;

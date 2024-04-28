import { Typewriter } from "react-simple-typewriter";
import CountriesCards from "../components/CountriesCards";
import ReviewsSlider from "../components/ReviewsSlider";
import Slider from "../components/Slider";
import Stats from "../components/Stats";
import TouristsSpots from "../components/TouristsSpots";

const Home = () => {
  return (
    <div className="space-y-20">
      <Slider />

      <CountriesCards></CountriesCards>
      <TouristsSpots />
      <ReviewsSlider />
      <Stats></Stats>
    </div>
  );
};

export default Home;

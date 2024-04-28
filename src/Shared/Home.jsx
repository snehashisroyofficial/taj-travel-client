import { Typewriter } from "react-simple-typewriter";
import CountriesCards from "../components/CountriesCards";
import ReviewsSlider from "../components/ReviewsSlider";
import Slider from "../components/Slider";
import Stats from "../components/Stats";
import TouristsSpots from "../components/TouristsSpots";
import { Fade } from "react-awesome-reveal";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div className="space-y-20">
      <Fade>
        <Slider />

        <CountriesCards></CountriesCards>
        <TouristsSpots />
        <Banner />
        <ReviewsSlider />
        <Stats></Stats>
      </Fade>
    </div>
  );
};

export default Home;

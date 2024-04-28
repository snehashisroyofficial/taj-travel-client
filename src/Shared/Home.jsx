import CountriesCards from "../components/CountriesCards";
import ReviewsSlider from "../components/ReviewsSlider";
import Slider from "../components/Slider";
import TouristsSpots from "../components/TouristsSpots";

const Home = () => {
  return (
    <div className="space-y-10">
      <Slider />

      <CountriesCards></CountriesCards>
      <TouristsSpots />
      <ReviewsSlider />
    </div>
  );
};

export default Home;

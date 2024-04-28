import CountriesCards from "../components/CountriesCards";
import Slider from "../components/Slider";
import TouristsSpots from "../components/TouristsSpots";

const Home = () => {
  return (
    <div>
      <Slider />

      <CountriesCards></CountriesCards>
      <TouristsSpots />
    </div>
  );
};

export default Home;

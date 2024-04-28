import CountriesCards from "../components/CountriesCards";
import SwiperSlider from "../components/SwiperSlider";
import TouristsSpots from "../components/TouristsSpots";

const Home = () => {
  return (
    <div>
      <h1>This is Home Page</h1>
      <SwiperSlider></SwiperSlider>
      <CountriesCards></CountriesCards>
      <TouristsSpots />
    </div>
  );
};

export default Home;

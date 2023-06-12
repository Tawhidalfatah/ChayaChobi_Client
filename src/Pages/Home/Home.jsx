import Partnerships from "./Partnerships/Partnerships";
import PopularClasses from "./Popular/PopularClasses";
import PopularInstructors from "./PopularInstructors/PopularInstructors";
import Slider from "./Slider/Slider";

const Home = () => {
  return (
    <div className="pb-80">
      <Slider></Slider>
      <PopularClasses></PopularClasses>
      <PopularInstructors></PopularInstructors>
      <Partnerships></Partnerships>
    </div>
  );
};

export default Home;

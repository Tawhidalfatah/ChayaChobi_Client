import DarkmodeToggle from "../../components/DarkmodeToggle/DarkmodeToggle";
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
      <DarkmodeToggle></DarkmodeToggle>
    </div>
  );
};

export default Home;

import { Outlet } from "react-router-dom";
import NavBar from "../../components/Shared/NavBar";
import Footer from "../../components/Shared/Footer";

const MainLayout = () => {
  return (
    <div className="relative min-h-screen">
      <NavBar></NavBar>

      <div>
        <Outlet />
      </div>

      <div className="absolute bottom-0 w-full">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;

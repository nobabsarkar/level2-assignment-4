import { Outlet } from "react-router-dom";
import Header from "../pages/Home/Header/Header";
import Footer from "../pages/Home/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;

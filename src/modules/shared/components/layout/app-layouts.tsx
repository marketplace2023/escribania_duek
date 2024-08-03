import { Outlet } from "react-router-dom";
import TopNavigationBar from "./top-navigation-bar";
import Footer from "./footer";

const AppLayout = () => {
  return (
    <div className="inter-400">
      <div className="container">
        <TopNavigationBar />
      </div>

      <Outlet />

      <div className="container">
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;

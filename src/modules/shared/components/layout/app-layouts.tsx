import { Outlet } from "react-router-dom";
import TopNavigationBar from "./top-navigation-bar";
import TopSearchBar from "./top-search-bar";
import FooterMenu from "./footer-menu";

const AppLayout = () => {
  return (
    <div className="inter-400">
      <div className="container">
        <TopSearchBar />

        <TopNavigationBar />
      </div>

      <Outlet />

      <div className="container">
        <FooterMenu />
      </div>
    </div>
  );
};

export default AppLayout;

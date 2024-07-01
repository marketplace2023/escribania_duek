import SidebarMenu from "@/modules/my-account/components/layout/sidebar-menu";
import { Outlet } from "react-router-dom";

const MyAccountLayout = () => {
  return (
    <div className="container">
      <div className="flex flex-grow ">
        <SidebarMenu />
        <div className="w-full min-h-0">
          <div className="px-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccountLayout;

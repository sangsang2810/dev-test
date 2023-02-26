import React from "react";
import { SideNavComponent, TopNavComponent } from "./components";
import { Outlet } from "react-router-dom";
import { Divider } from "antd";
import { PhoneHeader } from "../../libs";

function CarBrandPage() {
  return (
    <div className="h-screen flex overflow-y-hidden">
      <SideNavComponent />

      <div className="flex-1">
        <TopNavComponent className="ucar-top-nav" />
        <Divider className="m-0 sm:hidden" />
        <div className="px-10 py-7 sm:p-0 sm:h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default CarBrandPage;

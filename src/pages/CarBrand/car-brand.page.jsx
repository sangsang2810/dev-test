import React from "react";
import { SideNavComponent, TopNavComponent } from "./components";
import { Outlet } from "react-router-dom";
import { Divider } from "antd";

function CarBrandPage() {
  return (
    <div className="h-screen flex overflow-y-hidden">
      <SideNavComponent />

      <div className="flex-1">
        <TopNavComponent />
        <Divider className="m-0" />
        <div className="px-10 py-7">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default CarBrandPage;

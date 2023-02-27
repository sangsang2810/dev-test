import { Button, Divider } from "antd";
import React from "react";
import DropdownLanding from "../../../libs/dropdown-landing";
import { IMAGES_URI_ENUM } from "../../../utils/enums";
import HeaderComponent from "./header";

function BannerComponent() {
  return (
    <div>
      <HeaderComponent />
      <div className="sm:p-2">
        <div
          className="relatives bg-cover bg-center h-[529px] sm:h-[142px] sm:rounded-md"
          style={{
            backgroundImage: `url(${IMAGES_URI_ENUM.CAR_BUYER_BANNER})`,
          }}
        >
          {/* banner */}
          <div className="absolute left-28 sm:left-4 top-1/4 sm:top-24 flex flex-col space-y-8 sm:space-y-2">
            <p className="text-6xl sm:text-xs font-bold text-white">
              Car Marketplace
            </p>
            <span>
              <p className="text-white sm:text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p className="text-white sm:text-xs">
                Nunc odio in et, lectus sit lorem id integer.
              </p>
            </span>
            <span className="w-9 sm:hidden">
              <Button type="primary" danger size="large">
                <p className="px-10 text-center">Get Started</p>
              </Button>
            </span>
            <span className="w-2 md:hidden">
              <Button type="primary" danger size="small">
                <p className="px-2 text-center text-xs">Get Started</p>
              </Button>
            </span>
          </div>
        </div>
        {/* filter */}
        <div className=" w-full bg-transparent px-20 sm:p-0">
          <div className="flex px-10 sm:px-0 -translate-y-14 w-full border-neutral-4 sm:translate-y-0 sm:flex-col sm:mt-0 sm:w-full items-center rounded-lg py-5 bg-white justify-center space-x-10 sm:space-x-0 border border-solid">
            <DropdownLanding type={"newUsed"} label={"New Cars"} />
            <Divider className="md:hidden" />
            <Divider
              className="sm:hidden"
              type="vertical"
              style={{ height: "60px" }}
            />
            <DropdownLanding type={"priceRange"} label={"Price Range"} />
            <Divider className="md:hidden" />
            <Divider
              className="sm:hidden"
              type="vertical"
              style={{ height: "60px" }}
            />
            <DropdownLanding type={"vehicleType"} label={"Vehicle Type"} />
            <Divider className="md:hidden" />
            <Button
              className="sm:w-full sm:px-10"
              type="primary"
              danger
              size="large"
            >
              <p className="px-2 text-center text-xs">Get Started</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerComponent;

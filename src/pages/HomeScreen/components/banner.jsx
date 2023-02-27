import { Button } from "antd";
import React from "react";
import { IMAGES_URI_ENUM } from "../../../utils/enums";

function BannerComponent() {
  return (
    <div className="px-4 py-2">
      <div
        className=" bg-cover bg-center h-[529px] sm:h-[142px] sm:rounded-md"
        style={{
          backgroundImage: `url(${IMAGES_URI_ENUM.CAR_BUYER_LOGO_W_TEXT})`,
        }}
      ></div>
    </div>
  );
}

export default BannerComponent;

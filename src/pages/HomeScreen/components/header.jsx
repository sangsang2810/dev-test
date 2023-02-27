import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { IMAGES_URI_ENUM } from "../../../utils/enums";

function HeaderComponent() {
  return (
    <nav class="sticky h-16 top-0 bg-blue py-2 px-4 drop-shadow shadow-blue-600">
      <div>
        <div className="flex items-center justify-between">
          <img
            src={IMAGES_URI_ENUM.CB_BUYER_LOGO}
            alt="logo"
            className="h-10"
          />
          <SearchOutlined style={{ fontSize: "24px" }} />
        </div>
      </div>
    </nav>
  );
}

export default HeaderComponent;

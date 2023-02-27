import React from "react";
import IMAGES_URI_ENUM from "../../../utils/enums/images.enum";

function FooterComponent() {
  const NavItem = [
    { label: "Home", icon: IMAGES_URI_ENUM.NAV_ICON, active: true },
    { label: "News", icon: IMAGES_URI_ENUM.NAV_ICON_1, active: false },
    { label: "Profile", icon: IMAGES_URI_ENUM.NAV_ICON_2, active: false },
  ];

  return (
    <footer className=" sticky bottom-0 h-[70px] bg-white drop-shadow shadow-blue-600">
      <div className="flex justify-between ">
        {NavItem.map(({ icon, label }) => (
          <div className="flex text-xs px-12 pt-4 items-center flex-col text-neutral-8">
            <img src={icon} alt="logo" />
            <p>{label}</p>
          </div>
        ))}
      </div>
    </footer>
  );
}

export default FooterComponent;

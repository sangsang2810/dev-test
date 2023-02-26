import React from "react";
import Icon, { InfoCircleOutlined, BellOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

function TopNavComponent() {
  const downArrSvg = () => (
    <svg
      width="8"
      height="6"
      viewBox="0 0 8 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.94 0.726654L4 3.77999L7.06 0.726654L8 1.66665L4 5.66665L0 1.66665L0.94 0.726654Z"
        fill="#1E2D3D"
      />
    </svg>
  );

  const DownArrowIcon = (props) => <Icon component={downArrSvg} {...props} />;

  return (
    <div className="flex justify-end h-16 w-full items-center space-x-4 pr-4">
      <InfoCircleOutlined style={{ fontSize: "24px", color: "#1E2D3D" }} />

      <BellOutlined style={{ fontSize: "24px", color: "#1E2D3D" }} />

      <span className="flex space-x-2 items-center justify-items-center">
        <Avatar size={32} />
        <p>Admin</p>
        <DownArrowIcon
          style={{
            fontSize: "32px",
          }}
        />
      </span>
    </div>
  );
}

export default TopNavComponent;

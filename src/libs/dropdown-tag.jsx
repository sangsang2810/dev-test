import { Space, Dropdown } from "antd";
import React, { useState } from "react";
import Icon, { DownOutlined } from "@ant-design/icons";

function DropdownTag({ isActive, showTag }) {
  const [status, setStatus] = useState(isActive);

  const dotSvg = () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.99992 3.66671C5.15992 3.66671 3.66659 5.16004 3.66659 7.00004C3.66659 8.84004 5.15992 10.3334 6.99992 10.3334C8.83992 10.3334 10.3333 8.84004 10.3333 7.00004C10.3333 5.16004 8.83992 3.66671 6.99992 3.66671ZM6.99992 0.333374C3.31992 0.333374 0.333252 3.32004 0.333252 7.00004C0.333252 10.68 3.31992 13.6667 6.99992 13.6667C10.6799 13.6667 13.6666 10.68 13.6666 7.00004C13.6666 3.32004 10.6799 0.333374 6.99992 0.333374ZM6.99992 12.3334C4.05325 12.3334 1.66659 9.94671 1.66659 7.00004C1.66659 4.05337 4.05325 1.66671 6.99992 1.66671C9.94659 1.66671 12.3333 4.05337 12.3333 7.00004C12.3333 9.94671 9.94659 12.3334 6.99992 12.3334Z"
        fill="currentColor"
      />
    </svg>
  );

  const DotIcon = (props) => <Icon component={dotSvg} {...props} />;

  const tag = (isActive, isShowArrow = false) => {
    const color = isActive ? "#1F7B4D" : "#5F5F5F";
    const background = isActive ? "#CEF7E2" : "#FAFAFA";
    return (
      <span
        style={{
          background: `${background}`,
        }}
        className="flex items-center space-x-2 px-3 py-1 rounded-full"
      >
        <DotIcon
          style={{
            fontSize: "32px",
            color: `${color}`,
          }}
        />
        <p
          style={{
            color: `${color}`,
          }}
          className="m-0 font-medium text-base"
        >
          {isActive ? "Active" : "Inactive"}
        </p>
        {isShowArrow && (
          <DownOutlined
            style={{
              fontSize: "12px",
            }}
          />
        )}
      </span>
    );
  };

  const items = [
    {
      key: 1,
      label: <>{tag(true)}</>,
    },
    {
      key: 2,
      label: <>{tag(false)}</>,
    },
  ];

  const onClick = ({ key }) => {
    if (key == 1) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  };

  return (
    <>
      {showTag ? (
        tag(status, false)
      ) : (
        <Dropdown menu={{ items, onClick }}>
          <Space>{tag(status, true)}</Space>
        </Dropdown>
      )}
    </>
  );
}

export default DropdownTag;

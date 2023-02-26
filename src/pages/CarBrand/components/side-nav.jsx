import {
  CalendarOutlined,
  SettingOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { IMAGES_URI_ENUM } from "../../../utils/enums";

function SideNavComponent() {
  const items = [
    { label: "Car Brand", key: "1", icon: <CalendarOutlined /> },
    {
      label: "Folder",
      key: "2",
      icon: <CalendarOutlined />,
      children: [
        { label: "Menu Item", key: "sub2-1" },
        { label: "Menu Item", key: "sub2-2" },
        { label: "Menu Item", key: "sub2-3" },
        { label: "Menu Item", key: "sub2-4" },
      ],
    },
    { label: "Tasks", key: "3", icon: <CalendarOutlined /> },
    { label: "Modules", key: "4", icon: <CalendarOutlined /> },
    { label: "Notifications", key: "5", icon: <CalendarOutlined /> },
    {
      label: "Setting",
      key: "6",
      icon: <SettingOutlined />,
      placement: "bottom",
    },
  ];

  return (
    <div
      style={{
        width: 240,
        background: "#323435",
      }}
      className="p-4 pt-6 h-full ucar-side-nav"
    >
      <div className="relative h-full">
        <span className="flex  justify-between	 mb-8">
          <img src={IMAGES_URI_ENUM.UCARS_LOGO} alt="logo" className="h-7" />
          <span className="text-white">
            <MenuFoldOutlined />
          </span>
        </span>
        <span className="h-full">
          <Menu
            style={{
              color: "#8C8C8C",
            }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["2"]}
            mode="inline"
            theme={{
              token: {
                colorPrimary: "#323435",
              },
            }}
            items={items}
          />
        </span>
      </div>
    </div>
  );
}

export default SideNavComponent;

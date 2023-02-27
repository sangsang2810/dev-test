import {
  Button,
  Checkbox,
  Divider,
  Dropdown,
  Col,
  Row,
  InputNumber,
  Space,
  theme,
} from "antd";
import React, { useState } from "react";
import { DownOutlined, DollarOutlined } from "@ant-design/icons";

function DropdownLanding({ type, label, onDdlChange }) {
  const [priceStart, setPriceStart] = useState(10000);
  const [priceEnd, setPriceEnd] = useState(100000);

  const { useToken } = theme;

  const onClick = (data) => {
    console.log("data", data);
    // if (key == 1) {
    //   setStatus(true);
    // } else {
    //   setStatus(false);
    // }
  };

  const onChangeCheckBox = () => {};

  const renderItemsDdl = (type) => {
    let items = [];
    switch (type) {
      case "newUsed":
        items = [
          {
            key: 1,
            label: <Checkbox>New Car ( Authorised Dealer)</Checkbox>,
          },
          {
            key: 2,
            label: <Checkbox>New Car ( Parallel Importer )</Checkbox>,
          },
          {
            key: 3,
            label: <Checkbox>Used Cars</Checkbox>,
          },
        ];
        break;

      case "priceRange":
        items = [];
        break;
      case "verhicalType":
        break;
      default:
        break;
    }
    return items;
  };
  const options = [
    {
      label: "Bus",
      value: "Bus",
    },
    {
      label: "Lorry",
      value: "Lorry",
    },
    {
      label: "SUV",
      value: "SUV",
    },
    {
      label: "MPV",
      value: "MPV",
    },
    {
      label: "Truck",
      value: "Truck",
    },
    {
      label: "Coupe",
      value: "Coupe",
    },
    {
      label: "Pickup",
      value: "Pickup",
    },
    {
      label: "Van (Passenger)",
      value: "Van (Passenger)",
    },
    {
      label: "Convertible",
      value: "Convertible",
    },
    {
      label: "Sedan",
      value: "Sedan",
    },
    {
      label: "Van (Goods)",
      value: "Van (Goods)",
    },
    {
      label: "Hatchback",
      value: "Hatchback",
    },
    {
      label: "Sport Car",
      value: "Sport Car",
    },
    {
      label: "Wagon",
      value: "Wagon",
    },
  ];
  const priceRangeRender = () => (
    <div className="p-2 mb-2">
      <p className="text-base font-semibold mb-3">Price Range</p>
      <div className="flex space-x-2">
        <div className=" rounded-lg p-2 border border-neutral-4 border-solid">
          <p className="text-neutral-6">Min</p>
          <InputNumber
            className="p-0"
            max={500000}
            prefix="S$"
            bordered={false}
          />
        </div>
        <div className=" rounded-lg p-2 border border-neutral-4 border-solid">
          <p className="text-neutral-6">Max</p>
          <InputNumber
            className="p-0"
            max={500000}
            prefix="S$"
            bordered={false}
          />
        </div>
      </div>
    </div>
  );
  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };
  const vehicleTypeRender = () => (
    <div className="p-2 mb-2 max-w-md">
      <p className="text-base font-semibold mb-3">Vehicle Type</p>
      <Checkbox.Group
        style={{ width: "100%" }}
        defaultValue={["Pear"]}
        onChange={onChange}
      >
        <Row>
          {options.map((option) => (
            <Col span={8}>
              <Checkbox value={option.value}>{option.label}</Checkbox>
            </Col>
          ))}
        </Row>
      </Checkbox.Group>
    </div>
  );

  const handleSave = () => {
    if (type === "priceRange") {
    }
  };

  const renderHeaderDdl = (type) => {
    let header = "";
    switch (type) {
      case "newUsed":
        header = (
          <div className="flex text-sm text-neutral-7 justify-between items-center w-52 sm:w-80">
            <p>New Cars</p>
            <DownOutlined />
          </div>
        );
        break;
      case "priceRange":
        header = (
          <div className="flex text-sm text-neutral-7 justify-between items-center w-52 sm:w-80">
            <DollarOutlined />
            <p>{priceStart}</p>
            <span>---</span>
            <DollarOutlined />
            <p>{priceEnd}</p>
            <DownOutlined />
          </div>
        );
        break;
      case "vehicleType":
        header = (
          <div className="flex text-sm text-neutral-7 justify-between items-center w-52 sm:w-80">
            <p>+10 More</p>
            <DownOutlined />
          </div>
        );
        break;
      default:
        break;
    }
    return header;
  };
  const { token } = useToken();

  const contentStyle = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  };
  const menuStyle = {
    boxShadow: "none",
  };
  const items = renderItemsDdl(type);
  const header = renderHeaderDdl(type);
  return (
    <div className="w-full sm:px-10 ">
      <p className="text-neutral-8 text-base font-medium">{label}</p>
      <Dropdown
        className="py-4"
        menu={{ items, onClick }}
        dropdownRender={
          type !== "newUsed" &&
          ((menu) => (
            <div style={contentStyle}>
              {React.cloneElement(menu, {
                style: menuStyle,
              })}
              {type === "vehicleType" && <div>{vehicleTypeRender()}</div>}
              {type === "priceRange" && <div>{priceRangeRender()}</div>}
              <Divider style={{ margin: 0 }} />
              <Space className="flex justify-between" style={{ padding: 8 }}>
                <Button type="text">Clear</Button>
                <Button type="primary">Save</Button>
              </Space>
            </div>
          ))
        }
      >
        <Space className="">{header}</Space>
      </Dropdown>
    </div>
  );
}

export default DropdownLanding;

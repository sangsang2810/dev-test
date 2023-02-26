import {
  Avatar,
  Button,
  Divider,
  Input,
  Modal,
  Select,
  Space,
  Table,
} from "antd";
import React, { useEffect, useState } from "react";
import { CarBrandData } from "../../../utils/data";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import { DropdownTag } from "../../../libs";
import { useNavigate } from "react-router-dom";

function BrandListComponent() {
  const navigate = useNavigate();
  const carBrandData = CarBrandData;
  const [dataSource, setDataSource] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    convertToTableData(carBrandData);
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const convertToTableData = (arrayData) => {
    const resourceData = arrayData.map(
      ({ name, description, numbModel, isActive, logo, lastUpdate, id }) => {
        return {
          key: id,
          info: {
            name: name,
            description: description,
            numbModel: numbModel,
          },
          isActive: isActive,
          isActiveTag: isActive,
          logo: logo,
          lastUpdate,
        };
      }
    );
    setDataSource(resourceData);
  };

  const columns = [
    {
      dataIndex: "logo",
      key: "logo",
      width: 100,
      height: 124,
      render: (logo) => (
        <Avatar
          shape="square"
          size={64}
          src={require(`../../../assets/logo/${logo}`)}
        />
      ),
    },
    {
      dataIndex: "isActive",
      key: "isActive",
      width: 20,
      render: (isActive) => (
        <div
          className="border-l-2 h-16"
          style={{
            borderColor: `${isActive ? "#0FC97B" : "#5F5F5F"}`,
          }}
        ></div>
      ),
    },
    {
      dataIndex: "info",
      key: "info",

      render: (info) => (
        <div>
          <p className="primary-dark-1 font-medium text-xl">{info.name}</p>
          <span className="flex space-x-4 ">
            <p className="neutral-6">{info.description}</p>
            <p className="border-l-2 h-5"></p>
            <p className="secondary-main font-medium">
              {info.numbModel} Models
            </p>
          </span>
        </div>
      ),
    },

    {
      dataIndex: "lastUpdate",
      width: 150,
      key: "lastUpdate",
      render: (lastUpdate) => (
        <div>
          <p className="primary-dark-1 font-medium text-sm">Last Update</p>
          <p className="neutral-6">{lastUpdate}</p>
        </div>
      ),
    },
    {
      dataIndex: "isActiveTag",
      key: "isActiveTag",
      width: 130,
      render: (isActiveTag) => (
        <div className=" px-2 py-5 flex items-center neutral-2-bg h-10 rounded-md">
          <span
            className={`w-3 rounded-full h-3 ${
              isActiveTag ? "primary-dark-3-bg" : "neutral-7-bg"
            }`}
          ></span>
          <span
            className="px-2  font-medium"
            style={{
              borderColor: `${isActiveTag ? "#0FC97B" : "#5F5F5F"}`,
            }}
          >{`${isActiveTag ? "Active" : "Inactive"}`}</span>
        </div>
      ),
    },
    {
      key: "action",
      width: 150,
      render: (_, record) => {
        return (
          <Space size="middle">
            <Button
              className="font-medium neutral-7"
              onClick={() => handleOpenDetails(record)}
            >
              View Details
            </Button>
          </Space>
        );
      },
    },
  ];

  const handleOpenDetails = (record) => {
    navigate(`/car-brand-list/${record.key}`);
  };

  const onSearch = (e) => {
    const { value } = e.target;
    const cloneDataSource = [...carBrandData];
    let result;
    if (!value) {
      convertToTableData(cloneDataSource);
    } else {
      result = cloneDataSource.find((brand) =>
        brand.name.toLowerCase().includes(value.toLowerCase())
      );

      convertToTableData([result]);
    }
  };

  const formWithLabel = (labelName, element) => {
    return (
      <div>
        <p className="text-sm neutral-6 m-0 mb-1">{labelName}</p>
        {element}
      </div>
    );
  };

  return (
    <div>
      <div className="h-10 flex font-semibold mb-7 w-full justify-between">
        <span className="flex">
          <p className="text-2xl font-semibold primary-dark-1">
            CAR BRAND LIST
          </p>
          <Select
            defaultValue="All"
            className="font-medium"
            bordered={false}
            style={{ width: 119, fontWeight: 500 }}
            options={[
              { value: "all", label: "All" },
              { value: "lastUpdated", label: "Last Updated" },
              { value: "brandName", label: "Brand Name" },
              {
                value: "numberOfModels",
                label: "Number of Models",
              },
            ]}
          />
          <Input
            className="rounded-full w-60 "
            placeholder="Search car brand"
            prefix={<SearchOutlined className="mr-2 mb-1 text-xl	" />}
            onPressEnter={(e) => onSearch(e)}
            onChange={(e) => onSearch(e)}
          />
        </span>
        <Button
          onClick={showModal}
          type="primary"
          className="justify-center items-center"
          icon={
            <PlusOutlined size={"40"} style={{ display: " inline-block" }} />
          }
          size={"large"}
        >
          Add Brand
        </Button>

        <Modal
          title={
            <>
              <p className="m-0 mb-1 text-base neutral-8 font-semibold">
                Add Car Brand
              </p>
              <p className="m-0 text-sm font-normal">Setup new car brand</p>
            </>
          }
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          cancelText="Cancel"
          okText="Create Brand"
          okType="primary"
        >
          <p className=" neutral-8 font-semibold">Brand Logo</p>
          <Divider className="m-0 my-3" />

          <div className="pt-6 	 cursor-pointer h-28 w-28 neutral-2-bg rounded-full border-dashed border flex flex-col items-center justify-center">
            <PlusOutlined style={{ fontSize: "18px" }} />
            <p className="font-medium neutral-6 ">Brand Logo</p>
          </div>

          <p className="mt-9 neutral-8 font-semibold">Brand Details</p>
          <Divider className="m-0 my-3" />
          <div className="flex space-x-5">
            {formWithLabel(
              "Brand Name",
              <Input
                className="w-60"
                size="large"
                placeholder="Input Content"
              />
            )}
            {formWithLabel("Brand Status", <DropdownTag isActive={true} />)}
          </div>
          <div className="mt-4">
            {formWithLabel(
              "Brand Description",
              <TextArea rows={4} placeholder="Input content" />
            )}
          </div>
        </Modal>
      </div>
      <Table
        rowSelection={{
          type: "checkbox",
        }}
        columns={columns}
        dataSource={dataSource}
        pagination={{ position: ["none", "none"] }}
        showHeader={false}
        scroll={{ y: 575 }}
      />
    </div>
  );
}

export default BrandListComponent;

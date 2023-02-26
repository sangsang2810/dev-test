import { Button, Divider, Form, Input, Upload } from "antd";
import React from "react";
import { PhoneHeader } from "../../../libs";
import TextArea from "antd/es/input/TextArea";
import { PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function AddBrandComponent() {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const formWithLabel = (labelName, element) => {
    return (
      <div>
        <p className="text-sm neutral-6 m-0 mb-1">{labelName}</p>
        {element}
      </div>
    );
  };
  const onFinish = (values) => {
    console.log(values);
  };

  const customInput = (label, value) => {
    return (
      <div class="mb-4 relative">
        <input
          class="input border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
          id="email"
          type="text"
        />
        <label
          for="email"
          class="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-400 text-base mt-2 cursor-text"
        >
          {label}
        </label>
      </div>
    );
  };

  const handleCloseAdd = () => {
    navigate(`/car-brand-list`);
  };

  return (
    <div className="md:hidden relative h-full">
      <PhoneHeader
        type={"close"}
        title="Add Car Brand"
        close={handleCloseAdd}
        className="md:hidden"
      />
      <Divider className="m-0" />

      <div className="px-4 py-6">
        {/* <p className=" neutral-8 font-semibold">Brand Logo</p>

        <div className="cursor-pointer h-28 w-28 neutral-2-bg rounded-full border-dashed border flex flex-col items-center justify-center">
          <PlusOutlined style={{ fontSize: "18px" }} />
        </div> */}
        <Form form={form} onFinish={onFinish}>
          <Form.Item valuePropName="fileList">
            <p className=" neutral-8 font-semibold">Brand Logo</p>
            <Upload
              action="/upload.do"
              listType="picture-circle"
              showUploadList={false}
            >
              <div>
                <PlusOutlined />
              </div>
            </Upload>
          </Form.Item>
          <p className="mt-9 neutral-8 font-semibold">Brand Details</p>

          <Form.Item name="brandName">
            <Input />
          </Form.Item>

          <Form.Item name="totalModels">
            <Input />
          </Form.Item>

          <Form.Item name="description">
            <Input />
          </Form.Item>

          <div className="absolute bottom-0 left-0 w-full  py-6">
            <Divider className="" />
            <div className=" px-4">
              <Button htmlType="submit" type="primary" size={"large"} block>
                Create Brand
              </Button>
            </div>
          </div>
        </Form>
        {/* <Divider className="m-0 my-3" />
        <div className="flex space-x-5">
          {formWithLabel(
            "Brand Name",
            <Input className="w-60" size="large" placeholder="Input Content" />
          )}
        </div>
        <div className="mt-4">
          {formWithLabel(
            "Brand Description",
            <TextArea rows={4} placeholder="Input content" />
          )}
        </div> */}
      </div>
    </div>
  );
}

export default AddBrandComponent;

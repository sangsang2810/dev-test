import React, { useEffect, useState } from "react";
import { CarBrandData } from "../../../utils/data";
import { useParams } from "react-router-dom";
import { Divider, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import { DropdownTag } from "../../../libs";

function BrandDetailComponent() {
  const carBrandData = CarBrandData;
  const { carBranId } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    const brandData = carBrandData.find((brand) => brand === carBranId);
    setData(brandData);
  }, []);

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
      <p className="text-2xl font-semibold primary-dark-1">CAR BRAND LIST</p>
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
          <Input className="w-60" size="large" placeholder="Input Content" />
        )}
        {formWithLabel("Brand Status", <DropdownTag isActive={true} />)}
      </div>
      <div className="mt-4">
        {formWithLabel(
          "Brand Description",
          <TextArea rows={4} placeholder="Input content" />
        )}
      </div>
    </div>
  );
}

export default BrandDetailComponent;

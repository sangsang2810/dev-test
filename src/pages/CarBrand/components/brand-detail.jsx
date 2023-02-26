import React, { useEffect, useState } from "react";
import { CarBrandData } from "../../../utils/data";
import { useParams } from "react-router-dom";
import { Divider, Input, Image, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import { DropdownTag } from "../../../libs";

//

function BrandDetailComponent() {
  const carBrandData = CarBrandData;
  const { carBranId } = useParams();
  const [data, setData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    const brandData = carBrandData.find((brand) => brand.id === carBranId);
    console.log("brandData", brandData);
    setData([brandData]);
  }, []);

  const formWithLabel = (labelName, element) => {
    return (
      <div>
        <p className="text-sm neutral-6 m-0 mb-1">{labelName}</p>
        {element}
      </div>
    );
  };

  const handleEditMode = () => {
    setIsEdit(!isEdit);
  };

  return (
    <div>
      <p className="text-2xl font-semibold primary-dark-1">CAR BRAND LIST</p>

      {data.length > 0 &&
        data.map(({ description, isActive, logo, name }) => (
          <div>
            <p className=" neutral-8 font-semibold">Brand Logo</p>
            <Divider className="m-0 my-3" />

            <Image
              className="rounded-full"
              preview={
                isEdit
                  ? {
                      maskClassName: "rounded-full",
                      mask: (
                        <p className="w-20 text-center text-xl break-words">
                          Change Logo
                        </p>
                      ),
                    }
                  : false
              }
              width={120}
              src={require(`../../../assets/logo/${logo}`)}
            />

            <p className="mt-9 neutral-8 font-semibold">Brand Details</p>
            <Divider className="m-0 my-3" />
            <div className="flex space-x-5">
              {formWithLabel(
                "Brand Name",
                isEdit ? (
                  <Input
                    className="w-60 te neutral-8"
                    size="large"
                    value={name}
                    placeholder="Input Content"
                  />
                ) : (
                  <p className="w-60 font-semibold neutral-8">{name}</p>
                )
              )}
              {formWithLabel(
                "Brand Status",
                isEdit ? (
                  <DropdownTag isActive={isActive} />
                ) : (
                  <DropdownTag isActive={isActive} showTag={true} />
                )
              )}
            </div>
            <div className="mt-4">
              {formWithLabel(
                "Brand Name",
                isEdit ? (
                  <TextArea
                    rows={4}
                    placeholder="Input content"
                    value={description}
                  />
                ) : (
                  <p className="w-60 font-semibold neutral-8">{description}</p>
                )
              )}
            </div>
          </div>
        ))}

      <Button type="primary" className="mt-6" onClick={handleEditMode}>
        {isEdit ? "Save Changes" : "Edit Information"}
      </Button>
    </div>
  );
}

export default BrandDetailComponent;

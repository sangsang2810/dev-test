import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";

function NewCarComponent({ newCars }) {
  return (
    <div>
      <div className="flex justify-between">
        <p className="text-base font-semibold pb-5 ">New Cars</p>
        <ArrowRightOutlined />
      </div>

      <div className="flex overflow-x-scroll hide-scroll-bar ">
        <div className="flex flex-nowrap space-x-10 pb-5">
          {newCars.map(({ name, image, price }, index) => (
            <div key={index}>
              <img
                src={require(`../../../assets/newCar/${image}`)}
                alt="logo"
              />
              <div className="space-y-2 text-neutral-8 ">
                <p className="w-full text-sm truncate">{name}</p>
                <p className="text-base font-semibold">${price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewCarComponent;

import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";

function UsedCarComponent({ usedCars }) {
  return (
    <div>
      <div className="flex justify-between">
        <p className="text-base font-semibold pb-5">Used Cars</p>
        <ArrowRightOutlined />
      </div>

      <div className="flex overflow-x-scroll hide-scroll-bar ">
        <div className="flex flex-nowrap space-x-10 pb-5">
          {usedCars.map(({ name, image, price, date, km, kmDepr }, index) => (
            <div key={index}>
              <img
                src={require(`../../../assets/usedCar/${image}`)}
                alt="logo"
              />
              <div className="space-y-2">
                <p className="text-sm text-neutral-8">{name}</p>
                <p className="text-base text-neutral-8 font-semibold">
                  ${price}
                </p>
                <div className="flex text-xs text-neutral-7 space-x-2">
                  <p className="">{date}</p>
                  <li className=" list-disc">{km}km</li>
                  <li className=" list-disc">{kmDepr} depr.</li>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UsedCarComponent;

import { Image } from "antd";
import React from "react";

function FeatVehicleCard({ image, name, description, type, price }) {
  return (
    <div className="feat-vehicle-card flex flex-col justify-between feat-vehicle-card py-1 px-8">
      <div className="h-1/2">
        <Image
          preview={false}
          src={require(`../assets/landing/${image}`)}
          alt="logo"
          className=" border-none object-cover"
        />
      </div>
      <div>
        <div className="flex justify-between align-top">
          <p className="text-3xl font-medium">{name}</p>
          <p className="text-lg font-thin">{type}</p>
        </div>
        <div className="flex justify-between align-bottom">
          <p className="text-lg ">{description}</p>
          <p className="text-car-buyer-primary font-bold">${price}</p>
        </div>
      </div>
    </div>
  );
}

export default FeatVehicleCard;

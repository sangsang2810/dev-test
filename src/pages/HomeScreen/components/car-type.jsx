import React from "react";

function CarTypeComponent({ carType }) {
  return (
    <div>
      <p className="text-base font-semibold pb-5">Car Type</p>
      <div className="flex overflow-x-scroll hide-scroll-bar ">
        <div className="flex flex-nowrap space-x-10 pb-5">
          {carType.map(({ name, image }, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="h-10">
                <img
                  src={require(`../../../assets/carType/${image}`)}
                  alt="logo"
                />
              </div>
              <p className="text-xs">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CarTypeComponent;

import React from "react";

function PopularBrandComponent({ brands }) {
  return (
    <div>
      <p className="text-base font-semibold pb-5">Popular Brands</p>
      <div className="grid grid-cols-5 gap-6">
        {brands.map(({ name, logo }, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              className="h-10"
              src={require(`../../../assets/logo/${logo}`)}
              alt="logo"
            />
            <p className="text-xs">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularBrandComponent;

import { Button } from "antd";
import React from "react";
import { CarCard } from "../../../libs";
import { IMAGES_URI_ENUM } from "../../../utils/enums";

function CarsComponent({ cars }) {
  return (
    <div className="px-16 sm:p-0 mt-5">
      <div className="sm:flex sm:overflow-x-scroll pb-5 sm:hide-scroll-bar">
        <div className="grid grid-cols-4 gap-5 sm:flex sm:flex-nowrap sm:ml-2 sm:space-x-10">
          <div
            className="relatives bg-cover bg-center large-adv-card rounded-md"
            style={{
              backgroundImage: `url(${IMAGES_URI_ENUM.ADV_BANNER})`,
            }}
          />
          {cars.map((car) => (
            <CarCard
              key={car.id}
              price={car.price}
              companyLogo={car.company.logo}
              companyName={car.company.name}
              image={car.image}
              name={car.name}
              payPerMonth={car.payPerMonth}
              variant={car.variant}
            />
          ))}
        </div>
      </div>
      <div className="w-full flex md:justify-center sm:justify-end">
        <Button danger>View more new cars</Button>
      </div>
    </div>
  );
}

export default CarsComponent;

import { Button } from "antd";
import React from "react";
import FeatVehicleCard from "../../../libs/feat-vehicle-card";
import { IMAGES_URI_ENUM } from "../../../utils/enums";

function OurFeatureVehicle({ vehicles }) {
  return (
    <div className="px-16 sm:px-2">
      <div className="sm:flex sm:flex-col sm:items-center">
        <p className="text-5xl font-bold sm:text-3xl text-car-buyer-primary">
          Our Featured Vehicles.
        </p>
        <div className="flex justify-between">
          <p className="md:w-1/2 sm:px-14 sm:text-center text-3xl sm:text-xl text-neutral-8">
            One of our biggest product to be featured and that has sold out the
            most.
          </p>
          <Button className="sm:hidden" danger type="primary">
            View More
          </Button>
        </div>
      </div>
      <div className="flex overflow-x-scroll hide-scroll-bar mt-14 sm:mt-7">
        <div className="flex flex-nowrap space-x-10">
          {vehicles.map((v, index) => {
            if (index === 2) {
              return (
                <>
                  <div
                    className="relatives bg-cover bg-center large-adv-card rounded-md"
                    style={{
                      backgroundImage: `url(${IMAGES_URI_ENUM.ADV_BANNER})`,
                    }}
                  />
                  <FeatVehicleCard
                    key={index}
                    description={v.description}
                    image={v.image}
                    name={v.name}
                    price={v.price}
                    type={v.type}
                  />
                </>
              );
            } else {
              return (
                <FeatVehicleCard
                  key={index}
                  description={v.description}
                  image={v.image}
                  name={v.name}
                  price={v.price}
                  type={v.type}
                />
              );
            }
          })}
        </div>
      </div>
      <div className="flex justify-end pt-5">
        <Button className="md:hidden" danger type="primary">
          View More
        </Button>
      </div>
    </div>
  );
}

export default OurFeatureVehicle;

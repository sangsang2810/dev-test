import { Avatar, Divider, Image } from "antd";
import React from "react";

function CarCard({
  image,
  name,
  price,
  payPerMonth,
  variant,
  companyName,
  companyLogo,
}) {
  return (
    <div className="car-card rounded-md border border-neutral-4 border-solid">
      <div className="h-1/2  rounded-t-md rounded-tr-md">
        <Image
          preview={false}
          src={require(`../assets/landing/${image}`)}
          alt="logo"
          className="h-1/2 object-cover"
        />
      </div>
      {/* <Divider className="m-0" /> */}
      <div className="p-4 space-y-2 h-1/2">
        <p className="text-base font-semibold text-neutral-8">{name}</p>
        <div className="flex space-x-2 items-center">
          {price == 0 ? (
            <p>POA</p>
          ) : (
            <div className="flex space-x-2 items-center">
              <p>From </p>
              <p className="text-base font-semibold text-second-main">
                $12,312
              </p>
            </div>
          )}
          <div className="text-xs text-center text-second-main rounded-sm bg-second-light py-0.5 px-1">
            ${payPerMonth}/mo
          </div>
        </div>
        <div className="flex text-neutral-7">
          <p>{variant} variants</p>
          {price !== 0 && (
            <>
              <p className="mx-2">|</p>
              <p>with COE</p>
            </>
          )}
        </div>
        <div className="flex items-center space-x-2 py-2">
          <Avatar
            size={32}
            src={
              <img
                src={require(`../assets/company/${companyLogo}`)}
                alt="avatar"
              />
            }
          />
          <p>{companyName}</p>
        </div>
      </div>
    </div>
  );
}

export default CarCard;

import React from "react";

function OurProductComponent({ ourProduct }) {
  const service = (img, title, description) => {
    return (
      <div className=" text-center flex flex-col items-center space-y-6">
        <img src={require(`../../../assets/landing/${img}`)} alt="logo" />
        <div className="flex flex-col items-center space-y-2">
          <p className="text-4xl sm:text-2xl text-white">{title}</p>
          <p className="text-2xl sm:text-base break-words text-white font-light px-10">
            {description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-neutral-8 px-24 pb-20 pt-10 sm:p-0 sm:py-9 sm:px-6">
      <div className="flex flex-col items-center">
        <div className="text-center">
          <p className="text-car-buyer-primary text-5xl sm:text-3xl font-bold">
            {ourProduct.title}
          </p>
          <p className="text-white text-3xl sm:text-xl">
            {ourProduct.description}
          </p>
        </div>
        <div className="w-full md:pt-32 sm:pt-16 flex sm:flex-col md:justify-between sm:space-y-10">
          {ourProduct.contents.map((cnt, index) => (
            <div key={index} className="md:w-1/3">
              {service(cnt.image, cnt.title, cnt.description)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurProductComponent;

import { Button } from "antd";
import React from "react";
import IMAGES_URI_ENUM from "../../../utils/enums/images.enum";

function QuestionComponent() {
  return (
    <div>
      <div
        className="sm:hidden relatives bg-cover bg-center h-[694px] sm:rounded-md md:p-20"
        style={{
          backgroundImage: `url(${IMAGES_URI_ENUM.CAR_BUYER_QUESTION_BANNER})`,
        }}
      >
        <div className="absolute w-96 space-y-5">
          <p className="leading-relaxed text-7xl sm:text-xs font-bold text-white">
            Questions about buying or renting?
          </p>

          <Button block type="primary" danger size="large">
            Ask Us
          </Button>
        </div>
      </div>
      <div
        className="md:hidden relatives bg-cover bg-center h-[694px] "
        style={{
          backgroundImage: `url(${IMAGES_URI_ENUM.CAR_BUYER_QUESTION_2_BANNER})`,
        }}
      >
        <div className="absolute space-y-40 pt-10 flex flex-col items-center w-full ">
          <p className=" w-56 text-center leading-relaxed text-5xl font-bold text-white">
            Questions about buying or renting?
          </p>

          <div className="px-10 w-full">
            <Button block type="primary" danger size="large">
              Ask Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionComponent;

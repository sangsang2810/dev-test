import React from "react";
import {
  PlusOutlined,
  LeftOutlined,
  SwapOutlined,
  CloseOutlined,
} from "@ant-design/icons";

function PhoneHeader({ type, title, add, close }) {
  const ICN_STYLE = { fontSize: "24px", color: "#232323" };

  const handleAdd = () => {
    add();
  };

  const handleClose = () => {
    close();
  };

  const typeNormal = () => {
    return (
      <span className="flex justify-between">
        <LeftOutlined style={ICN_STYLE} />
        <span className="space-x-2">
          <PlusOutlined style={ICN_STYLE} onClick={handleAdd} />
          <SwapOutlined style={ICN_STYLE} rotate={270} />
        </span>
      </span>
    );
  };

  const typeClose = () => {
    return (
      <span className="flex justify-between">
        <CloseOutlined style={ICN_STYLE} onClick={handleClose} />
        <p className="m-0 text-base font-semibold neutral-8">{title}</p>
        <div className="w-6 h-6"></div>
      </span>
    );
  };

  return (
    <div className="p-4">{type === "normal" ? typeNormal() : typeClose()}</div>
  );
}

export default PhoneHeader;

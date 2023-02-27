import React from "react";

function IntroduceComponent({ introduce }) {
  const contentRender = (label, content) => {
    return (
      <div>
        <p className="font-semibold text-neutral-7">{label}</p>
        <p className="text-neutral-7 leading-relaxed">{content}</p>
      </div>
    );
  };

  return (
    <div className="sm:hidden bg-neutral-3 px-24 py-10 space-y-10">
      <p className="text-base text-neutral-7 font-semibold">
        {introduce.title}
      </p>
      {introduce.content.map((c, index) => (
        <div key={index}>{contentRender(c.title, c.content)}</div>
      ))}
    </div>
  );
}

export default IntroduceComponent;

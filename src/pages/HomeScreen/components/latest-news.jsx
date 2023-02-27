import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";

function LatestNewsComponent({ latestNews }) {
  return (
    <div>
      <div className="flex justify-between">
        <p className="text-base font-semibold pb-5">Latest News</p>
        <ArrowRightOutlined />
      </div>

      <div className="flex overflow-x-scroll hide-scroll-bar ">
        <div className="flex flex-nowrap space-x-10 pb-5">
          {latestNews.map(({ title, image, author, createdTime }, index) => (
            <div key={index} className="space-y-2">
              <img
                src={require(`../../../assets/latest/${image}`)}
                alt="logo"
              />
              <div className="space-y-2">
                <div className="max-w-[60px] p-2 bg-neutral-3 text-neutral-7 rounded-md">
                  <p>News</p>
                </div>
                <div className="space-y-2 text-neutral-8 ">
                  <p className="w-full text-sm text-neutral-8 break_line_2 ">
                    {title}
                  </p>
                </div>
                <div className="flex text-xs text-neutral-6 space-x-2">
                  <p className="">{author}</p>
                  <li className=" list-disc">{createdTime} ago</li>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LatestNewsComponent;

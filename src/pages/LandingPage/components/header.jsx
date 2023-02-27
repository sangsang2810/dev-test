import { Button, Divider } from "antd";
import React from "react";
import Icon, { SearchOutlined } from "@ant-design/icons";
import { IMAGES_URI_ENUM } from "../../../utils/enums";

function HeaderComponent() {
  const phoneSvg = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_89_1526)">
        <path
          d="M8.45563 11.4668C9.61535 12.6432 11.0186 13.5515 12.5667 14.1279L14.6612 12.4612C14.7233 12.4184 14.7969 12.3956 14.8723 12.3956C14.9477 12.3956 15.0213 12.4184 15.0834 12.4612L18.9723 14.9668C19.1199 15.0555 19.2449 15.1774 19.3374 15.3228C19.4298 15.4681 19.4872 15.633 19.505 15.8043C19.5227 15.9757 19.5004 16.1488 19.4398 16.3101C19.3792 16.4713 19.2819 16.6162 19.1556 16.7334L17.3334 18.5334C17.0725 18.7913 16.7517 18.9805 16.3998 19.0842C16.0479 19.188 15.6758 19.203 15.3167 19.1279C11.7346 18.3881 8.43293 16.6554 5.78897 14.1279C3.20368 11.5752 1.41467 8.32724 0.638967 4.77788C0.562337 4.42434 0.578331 4.05701 0.685398 3.71147C0.792466 3.36594 0.986976 3.05392 1.25008 2.80566L3.13897 0.983433C3.25586 0.863315 3.3984 0.771196 3.55594 0.713976C3.71347 0.656755 3.88191 0.635915 4.04864 0.653015C4.21537 0.670116 4.37607 0.724714 4.51871 0.812722C4.66135 0.900729 4.78223 1.01987 4.8723 1.16121L7.46119 5.0001C7.50584 5.06038 7.52995 5.13341 7.52995 5.20843C7.52995 5.28345 7.50584 5.35649 7.46119 5.41677L5.75563 7.46677C6.34762 8.98396 7.26993 10.3503 8.45563 11.4668Z"
          fill="#232323"
        />
      </g>
      <defs>
        <clipPath id="clip0_89_1526">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  const pinSvg = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.99996 16.6667H15C15.4583 16.6667 15.8333 17.0417 15.8333 17.5001C15.8333 17.9584 15.4583 18.3334 15 18.3334H4.99996C4.54163 18.3334 4.16663 17.9584 4.16663 17.5001C4.16663 17.0417 4.54163 16.6667 4.99996 16.6667ZM9.99996 5.83341C9.08329 5.83341 8.33329 6.58341 8.33329 7.50008C8.33329 8.41675 9.08329 9.16675 9.99996 9.16675C10.9166 9.16675 11.6666 8.41675 11.6666 7.50008C11.6666 6.58341 10.9166 5.83341 9.99996 5.83341ZM9.99996 1.66675C12.725 1.66675 15.8333 3.71675 15.8333 7.62508C15.8333 10.1084 14.0583 12.7251 10.5083 15.4501C10.2083 15.6834 9.79163 15.6834 9.49163 15.4501C5.94163 12.7167 4.16663 10.1084 4.16663 7.62508C4.16663 3.71675 7.27496 1.66675 9.99996 1.66675Z"
        fill="#232323"
      />
    </svg>
  );

  const mailSvg = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.125 3.125H1.875C1.5293 3.125 1.25 3.4043 1.25 3.75V16.25C1.25 16.5957 1.5293 16.875 1.875 16.875H18.125C18.4707 16.875 18.75 16.5957 18.75 16.25V3.75C18.75 3.4043 18.4707 3.125 18.125 3.125ZM16.5469 5.25195L10.3848 10.0469C10.2324 10.166 10.0195 10.166 9.86719 10.0469L3.70312 5.25195C3.67989 5.23402 3.66285 5.20927 3.65438 5.18116C3.64592 5.15306 3.64647 5.12301 3.65594 5.09523C3.66542 5.06745 3.68335 5.04333 3.70722 5.02625C3.73109 5.00918 3.75971 5 3.78906 5H16.4609C16.4903 5 16.5189 5.00918 16.5428 5.02625C16.5667 5.04333 16.5846 5.06745 16.5941 5.09523C16.6035 5.12301 16.6041 5.15306 16.5956 5.18116C16.5872 5.20927 16.5701 5.23402 16.5469 5.25195Z"
        fill="#232323"
      />
    </svg>
  );

  const PhoneIcon = (props) => <Icon component={phoneSvg} {...props} />;
  const PinIcon = (props) => <Icon component={pinSvg} {...props} />;
  const MailIcon = (props) => <Icon component={mailSvg} {...props} />;

  const groupContent = (icon, content1, content2) => {
    return (
      <div className="flex space-x-2 ">
        {icon}
        <span className="space-y-1">
          <p className="neutral-8 text-xs">{content1}</p>
          <p className="neutral-8 text-xs">{content2}</p>
        </span>
      </div>
    );
  };

  return (
    <div>
      <div className="sm:hidden ">
        <div className=" flex justify-between py-4 px-16">
          <div className="flex">
            {groupContent(
              <PinIcon />,
              "71 Ayer Rajah Crescent,",
              "#06-14, Singapore 139951"
            )}
            <Divider
              className=""
              type="vertical"
              style={{
                height: "40px",
                margin: "0px 20px 0px 20px",
              }}
            />
            {groupContent(
              <MailIcon />,
              "Email us at:",
              "hello@carbuyer.com.sg"
            )}
          </div>
          {groupContent(<PhoneIcon />, "+65 8808 7905", "+7 (700) 51 51 518")}
        </div>
        <div className=" flex justify-between items-center py-4 neutral-8-bg px-16">
          <img src={IMAGES_URI_ENUM.UCARS_LOGO} alt="logo" className="h-10" />
          <div className="flex space-x-4">
            <p className="text-white">New Cars</p>
            <p className="text-white">Used Cars</p>
            <p className="text-white">Reviews</p>
            <p className="text-white">News</p>
          </div>
          <Button className="px-2" type="primary" danger size="middle">
            <p className="px-10">Login</p>
          </Button>
        </div>
      </div>
      {/* phone */}
      <div className="md:hidden py-3 px-4">
        <div className="flex items-center justify-between">
          <img
            src={IMAGES_URI_ENUM.CB_BUYER_LOGO}
            alt="logo"
            className="h-10"
          />
          <SearchOutlined style={{ fontSize: "24px" }} />
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;

import { Button, Collapse, Divider, Input } from "antd";
import React from "react";
import Icon, { PhoneFilled, MailFilled } from "@ant-design/icons";
import IMAGES_URI_ENUM from "../../../utils/enums/images.enum";

function FooterComponent({ contact }) {
  const pinSvg = () => (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.42225 5.10938C7.97907 5.10938 7.56257 5.29062 7.24834 5.62187C7.09393 5.78418 6.97149 5.97708 6.88805 6.18945C6.80462 6.40183 6.76184 6.62951 6.76218 6.85938C6.76218 7.32656 6.9356 7.76562 7.24834 8.09688C7.40231 8.25965 7.58529 8.38873 7.78675 8.47668C7.98822 8.56464 8.20419 8.60973 8.42225 8.60938C8.86543 8.60938 9.28193 8.42656 9.59615 8.09688C9.91038 7.76562 10.0823 7.32656 10.0823 6.85938C10.0823 6.39219 9.91038 5.95312 9.59615 5.62187C9.28193 5.29062 8.86543 5.10938 8.42225 5.10938ZM13.5003 4.51719C13.2212 3.83888 12.8189 3.22472 12.316 2.70937C11.8114 2.18937 11.2166 1.77665 10.564 1.49375C9.88518 1.19687 9.16483 1.04688 8.42225 1.04688C7.67966 1.04688 6.95931 1.19688 6.28046 1.49219C5.62385 1.77812 5.03541 2.1875 4.5285 2.70781C4.02592 3.22345 3.62363 3.83753 3.34422 4.51562C3.05519 5.21875 2.90845 5.96562 2.90845 6.73438C2.90845 7.8375 3.15894 8.93594 3.65103 9.99531C4.04678 10.8469 4.59964 11.6766 5.29628 12.4656C6.48649 13.8125 7.7345 14.6359 8.08875 14.8562C8.1893 14.9189 8.30399 14.9518 8.42077 14.9516C8.53638 14.9516 8.65051 14.9203 8.75278 14.8562C9.10703 14.6359 10.355 13.8125 11.5453 12.4656C12.2419 11.6781 12.7948 10.8469 13.1905 9.99531C13.6856 8.9375 13.936 7.84062 13.936 6.73594C13.936 5.96719 13.7893 5.22031 13.5003 4.51719ZM8.42225 9.60938C6.98154 9.60938 5.81357 8.37813 5.81357 6.85938C5.81357 5.34062 6.98154 4.10938 8.42225 4.10938C9.86295 4.10938 11.0309 5.34062 11.0309 6.85938C11.0309 8.37813 9.86295 9.60938 8.42225 9.60938Z"
        fill="#232323"
      />
    </svg>
  );

  const instagramSvg = () => (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_6290_3094)">
        <path
          d="M20.8359 5.88005C20.789 4.81738 20.6172 4.0868 20.371 3.45374C20.1171 2.78176 19.7264 2.18014 19.2145 1.68002C18.7144 1.1721 18.1088 0.777435 17.4446 0.527447C16.8079 0.281274 16.0811 0.109427 15.0184 0.0625732C13.9478 0.0117516 13.6079 0 10.8926 0C8.17719 0 7.83731 0.0117516 6.77067 0.0586052C5.708 0.105459 4.97742 0.277459 4.34451 0.523479C3.67238 0.777435 3.07077 1.16814 2.57064 1.68002C2.06273 2.18014 1.66821 2.78573 1.41807 3.44992C1.1719 4.0868 1.00005 4.81341 0.953198 5.87609C0.902377 6.9467 0.890625 7.28658 0.890625 10.002C0.890625 12.7173 0.902377 13.0572 0.94923 14.1239C0.996084 15.1865 1.16808 15.9171 1.41426 16.5502C1.66821 17.2221 2.06273 17.8238 2.57064 18.3239C3.07077 18.8318 3.67635 19.2265 4.34054 19.4765C4.97742 19.7226 5.70403 19.8945 6.76686 19.9413C7.83335 19.9883 8.17338 19.9999 10.8887 19.9999C13.6041 19.9999 13.944 19.9883 15.0106 19.9413C16.0733 19.8945 16.8039 19.7226 17.4368 19.4765C18.7809 18.9568 19.8436 17.8941 20.3632 16.5502C20.6093 15.9133 20.7813 15.1865 20.8281 14.1239C20.875 13.0572 20.8867 12.7173 20.8867 10.002C20.8867 7.28658 20.8828 6.9467 20.8359 5.88005ZM19.0349 14.0457C18.9918 15.0225 18.8278 15.5499 18.691 15.9015C18.3549 16.7728 17.6634 17.4643 16.7921 17.8004C16.4405 17.9372 15.9093 18.1012 14.9363 18.1441C13.8814 18.1911 13.565 18.2027 10.8965 18.2027C8.22802 18.2027 7.90767 18.1911 6.85659 18.1441C5.87984 18.1012 5.3524 17.9372 5.00077 17.8004C4.56718 17.6402 4.17251 17.3862 3.85217 17.0541C3.52007 16.7298 3.26612 16.3391 3.10587 15.9055C2.96912 15.5539 2.80506 15.0225 2.76217 14.0497C2.71517 12.9948 2.70357 12.6783 2.70357 10.0097C2.70357 7.34122 2.71517 7.02087 2.76217 5.96995C2.80506 4.99319 2.96912 4.46575 3.10587 4.11412C3.26612 3.68038 3.52007 3.28586 3.85614 2.96536C4.18029 2.63327 4.571 2.37931 5.00473 2.21921C5.35636 2.08247 5.88778 1.9184 6.86056 1.87537C7.91545 1.82851 8.23198 1.81676 10.9003 1.81676C13.5728 1.81676 13.8892 1.82851 14.9403 1.87537C15.917 1.9184 16.4445 2.08247 16.7961 2.21921C17.2297 2.37931 17.6244 2.63327 17.9447 2.96536C18.2768 3.28967 18.5308 3.68038 18.691 4.11412C18.8278 4.46575 18.9918 4.99701 19.0349 5.96995C19.0817 7.02484 19.0935 7.34122 19.0935 10.0097C19.0935 12.6783 19.0817 12.9908 19.0349 14.0457Z"
          fill="#232323"
        />
        <path
          d="M10.8926 4.86426C8.0562 4.86426 5.75488 7.16543 5.75488 10.002C5.75488 12.8385 8.0562 15.1397 10.8926 15.1397C13.7292 15.1397 16.0303 12.8385 16.0303 10.002C16.0303 7.16543 13.7292 4.86426 10.8926 4.86426ZM10.8926 13.3347C9.05249 13.3347 7.55989 11.8422 7.55989 10.002C7.55989 8.16172 9.05249 6.66927 10.8926 6.66927C12.7329 6.66927 14.2253 8.16172 14.2253 10.002C14.2253 11.8422 12.7329 13.3347 10.8926 13.3347Z"
          fill="#232323"
        />
        <path
          d="M17.4334 4.66134C17.4334 5.3237 16.8964 5.86077 16.2339 5.86077C15.5715 5.86077 15.0344 5.3237 15.0344 4.66134C15.0344 3.99882 15.5715 3.46191 16.2339 3.46191C16.8964 3.46191 17.4334 3.99882 17.4334 4.66134Z"
          fill="#232323"
        />
      </g>
      <defs>
        <clipPath id="clip0_6290_3094">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0.855469)"
          />
        </clipPath>
      </defs>
    </svg>
  );
  const facebookSvg = () => (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_6290_3098)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.90888 10.0795V19.7494C7.90888 19.89 8.01889 20 8.15945 20H11.7468C11.8874 20 11.9974 19.89 11.9974 19.7494V9.92054H14.6008C14.7291 9.92054 14.8392 9.82274 14.8514 9.68826L15.1019 6.72983C15.1142 6.58313 14.998 6.45477 14.8514 6.45477H11.9974V4.35208C11.9974 3.85697 12.3946 3.45966 12.8896 3.45966H14.8942C15.0347 3.45966 15.1447 3.34963 15.1447 3.20905V0.250611C15.1447 0.110024 15.0347 0 14.8942 0H11.5024C9.51617 0 7.90277 1.61369 7.90277 3.60024V6.45477H6.10603C5.96547 6.45477 5.85547 6.56479 5.85547 6.70538V9.66381C5.85547 9.8044 5.96547 9.91442 6.10603 9.91442H7.90277V10.0795H7.90888Z"
          fill="#232323"
        />
      </g>
      <defs>
        <clipPath id="clip0_6290_3098">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0.855469)"
          />
        </clipPath>
      </defs>
    </svg>
  );
  const telegramSvg = () => (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_6290_3102)">
        <path
          d="M20.547 1.98685C20.3025 1.68808 19.9366 1.52344 19.5166 1.52344C19.288 1.52344 19.0461 1.57166 18.7974 1.66656L1.8677 8.1291C0.969269 8.47196 0.848268 8.98648 0.856049 9.26282C0.863831 9.539 1.01382 10.0459 1.93026 10.3373C1.93576 10.3392 1.94125 10.3407 1.94674 10.3424L4.321 11.0217L15.8841 5.11428C16.1722 4.96688 16.5252 5.08132 16.6725 5.36955C16.7881 5.59599 16.7418 5.86211 16.577 6.03728L16.5774 6.03773L10.1483 12.8689L9.9649 13.6122L12.2607 15.4609L15.4422 18.0227C15.4449 18.0248 15.4477 18.0271 15.4506 18.0293C15.8006 18.3009 16.183 18.4443 16.5564 18.4445C17.286 18.4445 17.8669 17.9045 18.0362 17.0689L20.81 3.37203C20.9213 2.82241 20.8279 2.33032 20.547 1.98685Z"
          fill="#232323"
        />
        <path
          d="M9.04706 12.4391C9.0704 12.3444 9.1174 12.254 9.18896 12.1779L13.4076 7.69531L5.57935 11.6946L7.35684 16.7781C7.45816 17.0677 7.60892 17.3143 7.79538 17.5073L9.04675 12.439L9.04706 12.4391Z"
          fill="#232323"
        />
        <path
          d="M8.88696 17.9775C9.30948 17.974 9.72467 17.7958 10.0884 17.4609L11.3889 16.2634L9.65494 14.8672L8.88696 17.9775Z"
          fill="#232323"
        />
      </g>
      <defs>
        <clipPath id="clip0_6290_3102">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0.855469)"
          />
        </clipPath>
      </defs>
    </svg>
  );
  const inSvg = () => (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_6290_3106)">
        <path
          d="M20.8505 19.9999V19.999H20.8555V12.664C20.8555 9.07569 20.083 6.31152 15.888 6.31152C13.8714 6.31152 12.518 7.41819 11.9655 8.46736H11.9072V6.64652H7.92969V19.999H12.0714V13.3874C12.0714 11.6465 12.4014 9.96319 14.5572 9.96319C16.6814 9.96319 16.713 11.9499 16.713 13.499V19.9999H20.8505Z"
          fill="#232323"
        />
        <path d="M1.1853 6.64746H5.33197V20H1.1853V6.64746Z" fill="#232323" />
        <path
          d="M3.25714 0C1.9313 0 0.855469 1.07583 0.855469 2.40167C0.855469 3.7275 1.9313 4.82583 3.25714 4.82583C4.58297 4.82583 5.6588 3.7275 5.6588 2.40167C5.65797 1.07583 4.58214 0 3.25714 0V0Z"
          fill="#232323"
        />
      </g>
      <defs>
        <clipPath id="clip0_6290_3106">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0.855469)"
          />
        </clipPath>
      </defs>
    </svg>
  );
  const youtubeSvg = () => (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_6290_3110)">
        <path
          d="M19.8343 5.31398C19.6183 4.51072 18.985 3.87752 18.1818 3.66122C16.7146 3.25977 10.8455 3.25977 10.8455 3.25977C10.8455 3.25977 4.9766 3.25977 3.50935 3.646C2.72166 3.86207 2.07289 4.51083 1.85683 5.31398C1.4707 6.78111 1.4707 9.82375 1.4707 9.82375C1.4707 9.82375 1.4707 12.8817 1.85683 14.3335C2.07312 15.1367 2.70621 15.7699 3.50947 15.9862C4.99205 16.3877 10.8457 16.3877 10.8457 16.3877C10.8457 16.3877 16.7146 16.3877 18.1818 16.0015C18.9851 15.7853 19.6183 15.1521 19.8346 14.349C20.2206 12.8817 20.2206 9.8392 20.2206 9.8392C20.2206 9.8392 20.236 6.78111 19.8343 5.31398ZM8.97688 12.6347V7.01286L13.8573 9.82375L8.97688 12.6347Z"
          fill="#232323"
        />
      </g>
      <defs>
        <clipPath id="clip0_6290_3110">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0.855469)"
          />
        </clipPath>
      </defs>
    </svg>
  );

  const PinIcon = (props) => <Icon component={pinSvg} {...props} />;
  const InstagramIcon = (props) => <Icon component={instagramSvg} {...props} />;
  const FacebookIcon = (props) => <Icon component={facebookSvg} {...props} />;
  const TelegramIcon = (props) => <Icon component={telegramSvg} {...props} />;
  const LinkinIcon = (props) => <Icon component={inSvg} {...props} />;
  const YoutubePinIcon = (props) => <Icon component={youtubeSvg} {...props} />;

  const iconWithInput = (icon, text, isMiddle = false) => (
    <div className="flex w-full">
      {icon}
      <div className={`items-center ${isMiddle && "w-full"}`}>
        <p className="text-center">{text}</p>
      </div>
    </div>
  );

  const groupItemsDummy = [
    {
      label: "About",
      items: ["About Us", "Contact Us", "Careers"],
    },
    {
      label: "Services",
      items: ["Buy Used Cars", "Buy New Cars", "Be a Dealer with UCARS"],
    },
    {
      label: "Resources",
      items: ["News", "Sell My Car", "COE Prices"],
    },
  ];

  const { Panel } = Collapse;
  // const { Option } = Select;

  return (
    <div>
      <div className="sm:hidden px-28 py-12 space-y-4">
        <div className="flex justify-between  ">
          <div className="space-y-2">
            <img
              src={IMAGES_URI_ENUM.CAR_BUYER_LOGO_LANDING}
              alt="CAR_BUYER_LOGO"
            />
            <div className="space-y-2 ">
              {iconWithInput(<PinIcon className="mr-1" />, contact.address)}
              {iconWithInput(<PhoneFilled className="mr-1" />, contact.phone1)}
              {iconWithInput(<MailFilled className="mr-1" />, contact.email)}
            </div>
          </div>

          {groupItemsDummy.map((i, index) => (
            <div key={index} className="space-y-4">
              <p className="text-base text-neutral-8 font-semibold">
                {i.label}
              </p>
              {i.items.map((item, index) => (
                <p key={index} className="text-sm text-neutral-7 text">
                  {item}
                </p>
              ))}
            </div>
          ))}

          <div className="space-y-3">
            <p className="text-sm">
              Get the <span className="text-car-buyer-primary">latest</span>{" "}
              automotive news sent to your inbox!
            </p>
            <Input.Group compact>
              <Input
                style={{ width: "calc(100% - 95px)" }}
                placeholder="Enter your email"
              />
              <Button type="primary" danger>
                Subscribe
              </Button>
            </Input.Group>
            <div className="flex items-center space-x-2">
              <p className="text-sm">Follow us</p>
              <InstagramIcon />
              <FacebookIcon />
              <TelegramIcon />
              <LinkinIcon />
              <YoutubePinIcon />
            </div>
          </div>
        </div>

        <div className="flex justify-between ">
          <div className="flex">
            <p>Advertising Terms and Conditions</p>
            <p> Platform Terms and Conditions </p>
            <p>Privacy Policy</p>
          </div>
          <p className="text-neutral-6 text-sm">© 2022. All rights reserved.</p>
        </div>

        <div className="flex items-center">
          <img
            className=" h-4 mr-2"
            src={IMAGES_URI_ENUM.UCARS_LOGO}
            alt="CAR_BUYER_LOGO"
          />
          <p>
            CarBuyer Pte Ltd and the CarBuyer Singapore brand are wholly owned
            by UCARS Pte Ltd
          </p>
        </div>
      </div>

      <div className="md:hidden px-4 py-3 ">
        <div className="space-y-6">
          <img
            className="ml-3 h-12"
            src={IMAGES_URI_ENUM.CAR_BUYER_LOGO_LANDING}
            alt="CAR_BUYER_LOGO"
          />
          <div className="space-y-6">
            {/* {tamp(<PinIcon className="mr-1" />, contact.address)} */}
            {iconWithInput(<PinIcon className="mr-1" />, contact.address, true)}
            {iconWithInput(
              <PhoneFilled className="mr-1" />,
              contact.phone1,
              true
            )}
            {iconWithInput(
              <MailFilled className="mr-1" />,
              contact.email,
              true
            )}
          </div>
        </div>
        <Divider />
        <Collapse expandIconPosition={"end"} bordered={false}>
          <Panel header={<p className="font-bold">About</p>} key="1">
            <p>Nothing</p>
          </Panel>
          <Panel header={<p className="font-bold">Services</p>} key="2">
            <p>Nothing</p>
          </Panel>
          <Panel header={<p className="font-bold">Resources</p>} key="3">
            <p>Nothing</p>
          </Panel>
          <Panel header={<p className="font-bold">Legal</p>} key="4">
            <p>Nothing</p>
          </Panel>
        </Collapse>
        <div className="space-y-3 pt-6">
          <p className="text-sm">
            Get the <span className="text-car-buyer-primary">latest</span>{" "}
            automotive news sent to your inbox!
          </p>
          <Input.Group size="large" compact>
            <Input
              style={{ width: "calc(100% - 100px)" }}
              placeholder="Enter your email"
            />
            <Button type="primary" danger size="large">
              Subscribe
            </Button>
          </Input.Group>
          <div className="flex items-center space-x-2">
            <p className="text-sm">Follow us</p>
            <InstagramIcon />
            <FacebookIcon />
            <TelegramIcon />
            <LinkinIcon />
            <YoutubePinIcon />
          </div>
        </div>
        <div className="flex items-center pt-5">
          <img
            className=" h-4 mr-2"
            src={IMAGES_URI_ENUM.UCARS_LOGO}
            alt="CAR_BUYER_LOGO"
          />
          <p className="text-xs text-center text-neutral-7">
            CarBuyer Pte Ltd and the CarBuyer Singapore brand are wholly owned
            by UCARS Pte Ltd
          </p>
        </div>
      </div>
      <div className="w-full bg-neutral-8 py-3">
        <p className="text-center text-xs text-white">
          © 2022. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default FooterComponent;

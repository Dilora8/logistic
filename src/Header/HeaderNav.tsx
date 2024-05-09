import logo from "./../assets/img/icon/logo.svg";
import sLogo from "./../assets/img/icon/logo.svg";
import time from "./../assets/img/time.svg";
import email from "./../assets/img/email.svg";
import phone from "./../assets/img/phone.svg";
import { useMediaQuery } from "react-responsive";
import MobileDrawer from "./MobileDrawer";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HeaderNav = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <div className="bg-[#091242] w-full h-40 ">
      <div className="container mx-auto h-40  flex md:justify-around justify-between items-center">
        <NavLink to="/">
          {" "}
          <img
            className="ml-5 md:mr-6"
            src={isMobile ? sLogo : logo}
            alt="logo"
          />
        </NavLink>
        {isMobile ? (
          <MobileDrawer />
        ) : (
          <div className="flex">
            <div className="flex items-center mr-6">
              <img src={time} alt="logo" />
              <span className="text-[#ffffff] w-[160px] text-sm ml-3">
                {t("time")}
              </span>
            </div>
            <div className="flex items-center mr-6">
              <img src={email} alt="logo" />
              <span className="text-[#ffffff] w-48 text-sm ml-3">
                {t("email")}
              </span>
            </div>
            <div className="flex items-center mr-2">
              {" "}
              <img src={phone} alt="logo" />
              <span className="text-[#ffffff] w-32 text-sm ml-3">
                {t("phone")}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderNav;

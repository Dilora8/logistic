import { useState } from "react";
import menu from "./../assets/img/icon/menu.svg";
import close from "./../assets/img/close.svg";
import logo from "./../assets/img/icon/smallLOgo.svg";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "../App";
import { Link } from "react-router-dom";

const MobileDrawer = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  function openMenu() {
    setOpen(!open);
  }
  return (
    <div>
      <div onClick={openMenu} style={{ marginRight: open ? "0" : "30px" }}>
        <img src={menu} alt="" />
        <div style={{ display: open ? "block" : "none" }}>
          {" "}
          <a className="text-white" href="">
          {t('home')}
          </a>
        </div>
      </div>
      <div
        onClick={(open) => open}
        className={`fixed top-0 right-0 h-screen text-white p-4 transform transition-transform ease-in-out duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        } bg-primary z-[9999]`}
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "#091242",
        }}
      >
        <div className="flex justify-between px-8 pb-8 cursor-pointer mt-8">
          <Link to="/">
            {" "}
            <img src={logo} alt="logo" />
          </Link>
          <img src={close} alt="" width={24} height={24} onClick={openMenu} />
        </div>
        <div className="flex h-[90%] justify-between items-center flex-col">
          <div className="links w-[353px]">
            <div className="flex justify-between items-center w-[95%] h-[48px] mx-auto rounded-md m-2 px-2">
              <Link to="/" onClick={openMenu}>
              {t('home')}
              </Link>
            </div>
            <div className="flex justify-between items-center w-[95%] h-[48px] mx-auto rounded-md m-2 px-2">
              <Link to="/about" onClick={openMenu}>
              {t('about')}
              </Link>
            </div>
            <div className="flex justify-between items-center w-[95%] h-[48px] mx-auto rounded-md m-2 px-2">
              <Link to="/services" onClick={openMenu}>
              {t('service')}
              </Link>
            </div>
            <div className="flex justify-between items-center w-[95%] h-[48px] mx-auto rounded-md m-2 px-2">
              <Link to="/products" onClick={openMenu}>
                {t("product")}
              </Link>
            </div>
            <div className="flex justify-between items-center w-[95%] h-[48px] mx-auto rounded-md m-2 px-2">
              <Link to="/news" onClick={openMenu}>
              {t('news')}
              </Link>
            </div>
            <div className="flex justify-between items-center w-[95%] h-[48px] mx-auto rounded-md m-2 px-2">
              <Link to="/contact" onClick={openMenu}>
              {t('contact')}
              </Link>
            </div>
          </div>
          <div className="w-full flex justify-end  items-end mb-8 px-8">
            <button
              className="py-[8px] px-[20px] text-[#fff] rounded-md hover:bg-secondary hover:text-primary"
              onClick={() => changeLanguage("tm")}
            >
              TM
            </button>
            <button
              className="py-[8px] px-[20px] text-[#fff] rounded-md hover:bg-secondary hover:text-primary"
              onClick={() => changeLanguage("ru")}
            >
              RU
            </button>
            <button
              className="py-[8px] px-[20px] text-[#fff] rounded-md hover:bg-secondary hover:text-primary"
              onClick={() => changeLanguage("en")}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileDrawer;

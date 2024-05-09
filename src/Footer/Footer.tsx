import { useTranslation } from "react-i18next";
import flogo from "./../assets/img/icon/logo.svg";
import femail from "./../assets/img/icon/fEmail.svg";
import fphone from "./../assets/img/icon/fPhone.svg";
import ftime from "./../assets/img/icon/fTime.svg";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  const {t} = useTranslation()
  return (
    <div>
      <div className="bg-[#091242] h-[110vh] md:h-[500px]">
        <div className="container mx-auto flex md:flex-row flex-col justify-evenly items-start md:items-center h-[85vh] md:h-[450px] w-[90%]">
          <div className="flex flex-col gap-6">
            <div>
              <img src={flogo} alt="" />
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex items-center">
                <img src={femail} alt="" />
                <p className="text-[#ffffff] ml-4">
                  <Link to="mailto:isakovadilora@gmail.com">
                   {t('address')}
                  </Link>
                </p>
              </div>
              <div className="flex items-center">
                <img src={fphone} alt="" />
                <p className="text-[#ffffff] ml-4">
                  <Link to="tel:+99365656565">{t('call')}</Link>
                </p>
              </div>
              <div className="flex items-center">
                <img src={ftime} alt="" />
                <p className="text-[#ffffff] ml-4">
                  {t('monday')}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-[#ffffff] gap-6">
            <NavLink to="/about">{t('about')}</NavLink>
            <NavLink to="/services">{t('service')}</NavLink>
            <NavLink to="/news">{t('news')}</NavLink>
            <NavLink to="/contact">{t('contact')}</NavLink>
          </div>
          <div className="flex flex-col">
            <input
              type="email"
              placeholder={t('Email')}
              className="pl-3 w-[365px] h-[45px] border border-[#666C89] bg-transparent"
            />
            <button className=" mt-4 sm:mt-6 w-44 md:w-64 h-11 md:h-14 bg-gradient-to-br from-[#ffbd32] to-[#ffd883] text-sm font-normal md:text-lg">
              {t('send')}
            </button>
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#4E5683]"></div>
        <div className="flex justify-center items-center w-[40%] mx-auto">
          <p className="text-[#ffffff] w-[50%] mx-auto mt-2 md:mt-4">
            {t('reserved')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import time from "./../assets/img/icon/oclock.svg";
import email from "./../assets/img/icon/email.svg";
import phone from "./../assets/img/icon/phone.svg";
import Client from "../components/Client";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const {t} = useTranslation()

  return (
    <div className="w-full h-[130vh] md:h-screen flex flex-col mt-10">
      <div className="flex justify-center md:flex-row flex-col w-[90%] mx-auto mb-20">
        <div className="flex flex-col w-[60%] ml-10">
          <div className="w-28 border-l-4 border-[#ffb629] bg-[#e8e8e8] bg-opacity-50 text-sm font-normal mb-4">
           {t('contacts')} 
          </div>
          <h1 className=" text-4xl mb-4">{t("us")}</h1>
          <div className="flex w-[250px] gap-2 mb-4">
            <img src={time} alt="" />
            <p>{t('monday')}</p>
          </div>
          <div className="flex w-[250px] gap-2 mb-4">
            <img src={email} alt="" />
            <p>{t('address')}</p>
          </div>
          <div className="flex w-[250px] gap-2 mb-4">
            <img src={phone} alt="" />
            <p>{t('call')}</p>
          </div>
        </div>
        <div className="w-[80%] mt-12">
          <div className="flex md:flex-row flex-col justify-center items-center md:justify-start md:items-start gap-4 mb-6">
            <input
              type="text"
              placeholder={t('name')}
              className="pl-3 w-[265px] h-[45px] border border-[#666C89]"
            />
            <input
              type="email"
              placeholder={t('Email')}
              className="pl-3 w-[265px] h-[45px] border border-[#666C89]"
            />
          </div>
          <div className="flex md:flex-row flex-col justify-center items-center md:justify-start md:items-start gap-4 mb-6">
            <input
              type="tel"
              placeholder={t('phones')}
              className="pl-3 w-[265px] h-[45px] border border-[#666C89]"
            />
            <input
              type="text"
              placeholder={t('country')}
              className="pl-3 w-[265px] h-[45px] border border-[#666C89]"
            />
          </div>
          <div>
            <textarea
              name=""
              id=""
              placeholder={t('comment')}
              className="md:ml-0 ml-[20px] pl-3 w-[300px] md:w-[547px] h-[100px] border border-[#666C89]"
            ></textarea>
          </div>
          <button className="md:ml-0 ml-5 mt-4 sm:mt-6 w-48 md:w-64 h-10 md:h-16 bg-gradient-to-br from-[#ffbd32] to-[#ffd883] text-sm font-normal md:text-lg">
            {t('send')}
          </button>
        </div>
      </div>
      <Client />
    </div>
  );
};

export default Contact;

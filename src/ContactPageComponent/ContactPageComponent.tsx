import email from "./../assets/img/icon/contactIcon/email.svg";
import photo from "./../assets/img/icon/contactIcon/phone.svg";
import oclock from "./../assets/img/icon/contactIcon/oclock.svg";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next";

const ContactPageComponent = () => {
  const {t} = useTranslation()

  const isMobile = useMediaQuery({query:'(max-width: 768px)'})

  const cols = isMobile ? 40 : 82
  return (
    <div className="w-full h-auto  md:h-screen flex flex-col justify-center items-start gap-8 my-8">
      <div className="w-[80%] md:w-[45%] mx-auto flex flex-col justify-center items-center">
        <h1 className="text-2xl md:text-4xl font-bold mb-6">{t('contactWithUs')}</h1>
        <p style={{display: isMobile ? 'none' : 'block'}}>
        {t('contactWithUsText')}
        </p>
      </div>
      <div className="flex gap-4 w-[80%] md:w-[47%] justify-center items-center mx-auto flex-col md:flex-row">
        <div className="flex justify-center items-center gap-4 flex-col w-[70%] md:w-[20%] pb-3 mx-auto">
          <img src={email} alt="" />
          <Link className="text-center text-[#111C55]" to="mailto:isakovadilora@gmail.com">{t('address')}</Link>
        </div>
        <div className="flex justify-center items-center gap-4 flex-col w-[70%] md:w-[20%] pb-3 mx-auto">
          <img src={photo} alt="" />
          <Link className="text-center text-[#111C55]" to="tel:+99363473444">{t('call')}</Link>
        </div>
        <div className="flex justify-center items-center gap-4 flex-col w-[70%] md:w-[25%] mx-auto">
          <img src={oclock} alt="" />
          <p className="text-center text-[#111C55]">{t('monday')}</p>
        </div>
      </div>
      <div className="flex justify-center items-center w-[50%] mx-auto flex-col gap-8 h-auto">
        <div className="flex gap-4 flex-col md:flex-row">
          <input
            type="text"
            placeholder={t('name')}
            className="pl-3 w-[350px] h-[50px] border border-[#666C89]"
          />
          <input
            type="email"
            placeholder={t('Email')}
            required
            className="pl-3 w-[350px] h-[50px] border border-[#666C89]"
          />
        </div>
        <div className="flex gap-4 justify-between flex-col md:flex-row">
          <input
            type="tel"
            placeholder={t('phones')}
            required
            className="pl-3 w-[350px] h-[50px] border border-[#666C89]"
          />
          <input
            type="text"
            placeholder={t('country')}
            className="pl-3 w-[350px] h-[50px] border border-[#666C89]"
          />
        </div>
        <div className="flex gap-4 flex-col justify-center items-center">
          <textarea
            name="comment"
            placeholder={t('comment')}
            cols={cols}
            rows={5}
            className="border border-[#666C89] pl-2"
          ></textarea>
        <button className=" mt-4 sm:mt-6 w-28 md:w-48 h-10 md:h-16 bg-gradient-to-br from-[#ffbd32] to-[#ffd883] text-sm font-normal md:text-base">
         {t('send')}
        </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPageComponent;

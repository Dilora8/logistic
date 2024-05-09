import man from "./../assets/img/123.svg";
import pattern from "./../assets/img/Pattern.svg";
import small from "./../assets/img/small.svg";
import arrow from "./../assets/img/icon/IconArrow.svg";
import phone from "./../assets/img/icon/ManPhone.svg";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const {t} = useTranslation()
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <div className="w-full h-[70vh] md:h-screen bg-[#F4F4F4] relative mt-20 md:mt-8">
      <div className="w-[100%] md:w-[90%] flex mx-auto justify-start items-start md:items-center h-full gap-4">
        <div style={{display:  isMobile ? 'none' : 'block' }} className="flex flex-col w-[65%] h-[50vh] gap-6 ml-4">
          <div className="w-28 border-l-4 border-[#ffb629] bg-[#e8e8e8] bg-opacity-50 text-sm font-normal">
            {t('FAQ')}
          </div>
          <h1 className="text-4xl font-semibold my-2">{t('questions')}</h1>
          <p>{t('how')}</p>
          <p className="w-[55%] my-6">
            Использование гибких фреймворков для предоставления надежного
            описания стратегии способствует совместному мышлению для дальнейшего
            развития общего ценностного предложения. Органично вырастить
            целостное мировоззрение подрывного характера.
          </p>
          <div className="w-[80%] flex flex-col gap-6">
            <div className="flex justify-between">
              <p>{t("payment")}</p>
              <img src={arrow} alt="" />
            </div>
            <div className="flex justify-between">
              <p>{t('options')}</p>
              <img src={arrow} alt="" />
            </div>
            <div className="flex justify-between">
              <p>{t('specify')}</p>
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>
  
       <div
          style={{ backgroundImage: `url(${man})`, backgroundSize:'cover' }}
          className="w-[100%] md:w-[75%] h-[40vh] md:h-[65vh] relative top-0 mr-0 md:mr-8"
        ></div>
        <div className="w-[430px] h-[370px] bg-[#091242] absolute left-[0] md:left-[40%] top-[50%] md:top-[35%] flex flex-col justify-around items-start">
          <div className="w-[70%] mx-auto flex flex-col justify-around">
            <div className="w-32 border-l-4 border-[#ffb629] bg-[#e8e8e8] bg-opacity-50 text-sm font-normal mb-4">
              {t('talk')}
            </div>
            <h1 className="text-[#ffffff] mb-4">
              {t('need')}
            </h1>
            <div className="flex justify-start items-center gap-4">
              <img src={phone} alt="phoneIcon" />
              <p className="text-[#ffffff]">{t("have")}</p>
            </div>
            <button className=" mt-4 sm:mt-6 w-28 md:w-48 h-8 md:h-16 bg-gradient-to-br from-[#ffbd32] to-[#ffd883] relative text-[7px] sm:text-[9px] font-normal md:text-sm">
              {t('with')}
              <img
                className="absolute right-0 bottom-0 "
                src={isMobile ? small : pattern}
                alt=""
              />
            </button>
          </div>
        </div>
    
      </div>
    </div>
  );
};

export default FAQ;

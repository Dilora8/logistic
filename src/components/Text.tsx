import { useMediaQuery } from "react-responsive";
import pattern from "./../assets/img/Pattern.svg";
import small from "./../assets/img/small.svg";
import { useTranslation } from "react-i18next";

const Text = () => {
  const {t} = useTranslation()
    const isMobile = useMediaQuery({query:'(max-width: 768px)'})
  return (
    <div className="absolute top-12 md:top-64 left-5 md:left-[160px] w-64 sm:w-80 md:w-[700px]">
      <div className="w-36 sm:w-44 sm:h-4 md:w-60 md:h-6 border-l-4 border-[#ffb629] bg-[#091242] bg-opacity-20 mb-1 sm:mb-4 md:mb-2">
        <p className="text-white text-[10px] sm:text-sm md:text-base text-center">
         {t('logistic')}
        </p>
      </div>
      <h1 className="text-2xl sm:text-3xl md:text-7xl text-white leading-8 md:leading-[70px] font-semibold md:font-bold">
        {t('best')}
      </h1>
      <p className="text-white text-xs sm:text-sm  md:text-base leading-6 md:leading-10 mb-0.5 sm:mb-2 md:mb-0">
       {t('textHome')}
      </p>
      <button className=" mt-4 sm:mt-6 w-28 md:w-48 h-8 md:h-16 bg-gradient-to-br from-[#ffbd32] to-[#ffd883] relative text-[7px] sm:text-[9px] font-normal md:text-sm">
       {t('button')}
        <img className="absolute right-0 bottom-0 " src={isMobile ? small : pattern} alt="" />
      </button>
    </div>
  );
};

export default Text;

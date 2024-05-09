import { useMediaQuery } from "react-responsive";
import cart from "./../assets/img/Rectangle 69.svg";
import cart1 from "./../assets/img/Rectangle 70.svg";
import cart2 from "./../assets/img/Rectangle 71.svg";
import cart3 from "./../assets/img/Rectangle 72.svg";
import cart4 from "./../assets/img/Rectangle 73.svg";
import cart5 from "./../assets/img/Rectangle 74.svg";
import scart from "./../assets/img/Rectangle 83.svg";
import scart1 from "./../assets/img/Rectangle 84.svg";
import scart2 from "./../assets/img/Rectangle 85.svg";
import scart3 from "./../assets/img/Rectangle 86.svg";
import scart4 from "./../assets/img/Rectangle 87.svg";
import scart5 from "./../assets/img/Rectangle 88.svg";
import { useTranslation } from "react-i18next";

const Product = () => {
  const {t} = useTranslation()
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <div className="w-full sm:h-[80vh] md:h-[120vh] container mx-auto">
      <div className="flex flex-col mt-10 gap-2 md:gap-4 w-[88%] h-14 mx-auto">
        <div className="w-28 border-l-4 border-[#ffb629] bg-[#e8e8e8] bg-opacity-50 text-sm font-normal">
          {t('products')}
        </div>
        <h1 className="text-2xl md:text-3xl font-bold mb-6">{t('types')}</h1>
      </div>
      <div className="flex flex-col justify-start md:justify-center items-center h-auto">
        <div className="grid grid-cols-2  md:grid-cols-3 gap-6 my-8">
          <img src={isMobile ? scart : cart} alt="" />
          <img src={isMobile ? scart1 : cart1} alt="" />
          <img src={isMobile ? scart2 : cart2} alt="" />
          <img src={isMobile ? scart3 : cart3} alt="" />
          <img src={isMobile ? scart4 : cart4} alt="" />
          <img src={isMobile ? scart5 : cart5} alt="" />
        </div>
        <button className=" mt-4 sm:mt-6 w-28 md:w-48 h-8 md:h-16 bg-gradient-to-br from-[#ffbd32] to-[#ffd883] text-[7px] sm:text-[9px] font-normal md:text-sm">
         {t('button')}
        </button>
      </div>
    </div>
  );
};

export default Product;

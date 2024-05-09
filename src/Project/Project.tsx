import { useMediaQuery } from "react-responsive";
import Swipers from "../common/Swipers";
import pat from "./../assets/img/p.svg";
import { useTranslation } from "react-i18next";


const Project = () => {
  const {t} = useTranslation()
  const isMobile = useMediaQuery({query:'(max-width: 768px)'})
  return (
    <div className="container w-[95%] md:w-full h-[80vh] md:h-[720px] mx-auto relative">
      <div className="flex flex-col justify-center items-center gap-4 mt-6">
        <h1 className="text-lg md:text-4xl mb-4 mx-auto font-semibold text-center">{t('shipping')}</h1>
         <div className="w-[80%] md:w-[100%] mx-auto flex flex-col justify-center items-center">
         <Swipers/>
         </div>
         <div style={{display: isMobile ? 'block' : 'none'}} className='w-full h-[400px] bg-[#F7901E] absolute top-[35%]'></div>
        <button className="mt-10 w-48 h-16 bg-[#091242] text-[white] relative font-normaltext-sm">
        {t('button')}
          <img className="absolute right-0 bottom-0 " src={pat} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Project;

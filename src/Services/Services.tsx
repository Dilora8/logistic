import boat from "./../assets/img/icon/boat.svg";
import airplane from "./../assets/img/icon/airplane.svg";
import container from "./../assets/img/icon/container.svg";
import car from "./../assets/img/icon/car.svg";
import { useTranslation } from "react-i18next";

const Services = () => {
    const {t} = useTranslation()

  return (
   <div className="container mx-auto w-full h-auto">
     <div className="flex md:flex-row flex-col gap-6 justify-center md:justify-around items-center h-[80vh] md:h-[550px] w-[88%] mx-auto">
     <div className=" flex flex-col">
     <div className="w-28 border-l-4 border-[#ffb629] bg-[#e8e8e8] bg-opacity-50 text-sm font-normal mb-4">
       {t('doing')}
        </div>
        <h1 className="text-2xl md:text-4xl font-semibold leading-10 w-72 md:w-[300px]">
        {t('solution')}
        </h1>
     </div>
     <div className="flex flex-col gap-10">
        <div className="flex justify-around w-72 md:w-96 gap-4">
            <img className="pr-2" src={boat} alt="" />
            <div className="text-2xl w-72 border-l-2 border-[#d8d8d8] pl-4">{t('marine')}</div>
        </div>
        <div className="flex justify-around w-72 md:w-96 gap-2">
            <img src={airplane} alt="" />
            <div className="text-2xl w-72 border-l-2 border-[#d8d8d8] pl-4">{t('air')}</div>
        </div>
     </div>
     <div className="flex flex-col gap-10">
        <div className="flex justify-around w-72 md:w-96 gap-4">
            <img src={container} alt="" />
            <div className="text-2xl w-72 border-l-2 border-[#d8d8d8] pl-4">{t('warehouse')}</div>
        </div>
        <div className="flex justify-around w-72 md:w-96 gap-2">
            <img src={car} alt="" />
            <div className="text-2xl w-72 border-l-2 border-[#d8d8d8] pl-4">{t('delivery')}</div>
        </div>
     </div>
    </div>
   </div>
  )
}

export default Services
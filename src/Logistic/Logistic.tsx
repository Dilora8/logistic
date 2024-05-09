import client from "./../assets/img/icon/logisticIcon/Client.svg";
import boat from "./../assets/img/icon/logisticIcon/boat.svg";
import box from "./../assets/img/icon/logisticIcon/container.svg";
import project from "./../assets/img/icon/logisticIcon/Project.svg";
import plane from "./../assets/img/icon/logisticIcon/plane.svg";
import car from "./../assets/img/icon/logisticIcon/car.svg";
import pattern from "./../assets/img/circleDark.svg";
import { useTranslation } from "react-i18next";

const Logistic = () => {
  const {t} = useTranslation()

  return (
    <div className="container mx-auto w-full h-[130vh] flex justify-center items-center flex-col gap-8">
      <div className="w-[90%] mx-auto">
        <div className="w-28 border-l-4 border-[#ffb629] bg-[#e8e8e8] bg-opacity-50 text-sm font-normal">
         {t('what')}
        </div>
        <h1 className="text-2xl md:text-3xl font-bold mb-6">
         {t('aboutlogistic')}
        </h1>
      </div>
      <div className="w-[90%] mx-auto flex flex-col gap-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div>
            <img src={boat} alt="" />
            <h1>{t('marines')}</h1>
            <p>
            {t('marineText')}
            </p>
          </div>
          <div>
            <img className="mb-2" src={box} alt="" />
            <h1>{t('wareHouse')}</h1>
            <p>
             {t('wareHouseText')}
            </p>
          </div>
          <div>
            <img src={plane} alt="" />
            <h1>{t('airs')}</h1>
            <p>
            {t('airText')}
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div>
            <img src={project} alt="" />
            <h1>{t('projects')}</h1>
            <p>
             {t('projectText')}
            </p>
          </div>
          <div>
            <img className="mb-3" src={car} alt="" />
            <h1>{t('locals')}</h1>
            <p>
              {t('localText')}
            </p>
          </div>
          <div>
            <img src={client} alt="" />
            <h1>{t('client')}</h1>
            <p>
            {t('clientText')}
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center w-[90%]">
          {" "}
          <button className=" mt-4 sm:mt-6 w-28 md:w-48 h-8 md:h-16 bg-[#091242] relative text-[white] text-[7px] sm:text-[9px] font-normal md:text-sm">
          {t('sent')}
            <img className="absolute right-0 bottom-0 " src={pattern} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logistic;

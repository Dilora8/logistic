import bg from "./../assets/img/ttern.svg";
import plan from "./../assets/img/plan.svg";
import cas from "./../assets/img/icon/case.svg";
import earth from "./../assets/img/icon/earth.svg";
import oclock from "./../assets/img/icon/oclock.svg";
import ship from "./../assets/img/icon/ship.svg";
import headphone from "./../assets/img/icon/headphone.svg";
import coin from "./../assets/img/icon/coin.svg";
import airplane from './../assets/img/icon/airplan.svg'
import { useTranslation } from "react-i18next";

const Features = () => {
  const {t} = useTranslation()
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex md:flex-row flex-col w-full h-[140vh] md:h-[100vh] mx-auto"
    >
      <div
        style={{
          backgroundImage: `url(${plan})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-[95%] md:w-[85%] h-[50vh] md:h-[70vh] ml-3 mx-auto mt-6 md:mt-4"
      >
      <div className="relative top-[80%] md:top-[86%] mx-auto w-[90%]">
      <p className="flex items-center w-[70%] md:w-[60%] h-20 bg-gradient-to-br from-[#F7901E] to-[#FFDA56] text-sm md:text-xl px-2 absolute left-10 md:left-32">
          <img className="mx-4" src={airplane} alt="" />{t('moving')}</p>
      </div>
      </div>
      <div className="flex flex-col w-[80%] mx-auto gap-6 mt-6 md:mt-4">
        <div className="w-[90%] mx-auto">
          <div className="w-36 border-l-4 border-[#ffb629] bg-[#e8e8e8] bg-opacity-50 text-sm font-normal mb-4">
            {t('why')}
          </div>
          <h1 className="text-lg md:text-4xl font-bold w-[300px] md:w-[430px] leading-10 mb-6">
           {t('potential')}
          </h1>
          <p className="text-xs md:text-base leading-6 mx-auto w-[300px] md:w-[480px] mb-10">
           {t('textPotential')}
          </p>
        </div>
        <div className="flex justify-center flex-col md:flex-row w-[90%] mx-auto gap-6">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <img src={cas} alt="" />
              <p>{t('safe')}</p>
            </div>
            <div className="flex items-center gap-3">
              <img src={earth} alt="" />
              <p>{t('global')}</p>
            </div>
            <div className="flex items-center gap-3">
              <img src={oclock} alt="" />
              <p>{t('timely')}</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <img src={ship} alt="" />
              <p>{t('everything')}</p>
            </div>
            <div className="flex items-center gap-3">
              <img src={headphone} alt="" />
              <p>{t('support')}</p>
            </div>
            <div className="flex items-center gap-3">
              <img src={coin} alt="" />
              <p>{t('pricing')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

import goodness from "./../assets/img/goodness.svg";
import box from "./../assets/img/icon/goodnessIcon/container.svg";
import security from "./../assets/img/icon/goodnessIcon/security.svg";
import environment from "./../assets/img/icon/goodnessIcon/environment.svg";
import { useTranslation } from "react-i18next";

const Goodness = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full h-[125vh] md:h-screen flex justify-start md:justify-center items-center flex-col gap-8 bg-[#F4F4F4]">
      <div className="w-[95%] mx-auto flex justify-center flex-col items-center gap-2">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">{t("work")}</h1>
      </div>
      <div className="flex flex-col md:flex-row w-full h-[70vh]">
        <div className="w-[90%] md:w-[40%] mx-auto">
          <img src={goodness} alt="" />
        </div>

        <div className="w-[90%] md:w-[50%] flex flex-col gap-8 mx-auto mt-8">
          <div className="flex gap-3">
            <div className="w-[20%]">
              <img src={box} alt="" className="w-[50px]" />
            </div>
            <div className="flex flex-col gap-2 w-[70%]">
              <h1 className="text-2xl">{t("wareHouse")}</h1>
              <p className="text-base">{t("wareHouseText")}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-[20%]">
              <img src={security} alt="" />
            </div>
            <div className="flex flex-col gap-2 w-[70%]">
              <h1 className="text-2xl">{t("safety")}</h1>
              <p>{t("safeText")}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-[20%]">
              <img src={environment} alt="" />
            </div>
            <div className="flex flex-col gap-2 w-[70%]">
              <h1 className="text-2xl">{t("environment")}</h1>
              <p>{t("environmentText")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goodness;

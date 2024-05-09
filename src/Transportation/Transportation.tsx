import { useTranslation } from "react-i18next";
import arrow from "./../assets/img/icon/Arrow.svg";

const Transportation = () => {
  const {t} = useTranslation()

  return (
    <div className="container mx-auto h-[70vh] flex justify-center items-center">
    <div className="w-[95%] mx-auto flex flex-col gap-8">
    <h1 className="text-4xl">{t('company')}</h1>
      <p className="text-[#666C89]">
       {t('forwarding')}
      </p>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <img src={arrow} alt="" />
          <p>{t('customer')}</p>
        </div>

        <div className="flex gap-4">
          <img src={arrow} alt="" />
          <p>{t('needs')}</p>
        </div>
        <div className="flex gap-4">
          <img src={arrow} alt="" />
          <p>{t('careful')}</p>
        </div>
        <div className="flex gap-4">
          <img src={arrow} alt="" />
          <p>{t('area')}</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Transportation;

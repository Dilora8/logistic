import { useTranslation } from "react-i18next";
import NavBar from "../Header/NavBar";
import bg from "./../assets/img/Background.svg";

const Ahome = () => {
  const {t} = useTranslation()
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-full h-72 md:h-screen"
    >
    <NavBar/>
    <div className="flex justify-start md:justify-center items-start flex-col w-[60%] md:w-[40%] pt-14 h-full md:h-screen ml-6 md:ml-36">
        <div className="w-28 border-l-4 border-[#ffb629] bg-[#e8e8e8] bg-opacity-50 text-base font-normal mb-4">
        {t('aboutUs')}
        </div>
        <h1 className="text-white text-2xl md:text-6xl">{t('our')}</h1>
    </div>
    </div>
  );
};

export default Ahome;

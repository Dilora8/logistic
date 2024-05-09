import bg from "./../assets/img/bg.svg";
import airplane from "./../assets/img/a.svg";
import girl from "./../assets/img/girl.svg";
import box from './../assets/img/icon/box.svg';
import cart from './../assets/img/icon/cart.svg';
import sgirl from './../assets/img/12.svg';
import sairplane from './../assets/img/13.svg';
import sbg from './../assets/img/14.svg';
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next";

const About = () => {
  const {t} = useTranslation()
  const isMobile = useMediaQuery({query:'(max-width: 768px)'})
  
  // 
  
  return (
    <div className="relative w-full h-[120vh] md:h-[120vh]">
      <div
        style={{ backgroundImage: isMobile ? `url(${sbg})` : `url(${bg})`, backgroundPosition:'center', backgroundSize:'cover'}}
        className="mx-auto w-full h-[400px] md:h-[500px]"
      ></div>
      <div className="w-[80%] md:w-[70%] bg-[#ffffff] absolute top-[25%] md:top-[30%] left-8 md:left-56 z-[9] flex">
        <div className="w-[95%] md:h-[600px] flex md:flex-row flex-col justify-center md:justify-around items-center gap-4 mx-auto">
          <div className="w-[90%] mx-auto flex flex-col justify-center items-start gap-4">
            <div className="ml-6 mt-8 w-32 border-l-4 border-[#ffb629] bg-[#e8e8e8] bg-opacity-50">
            {t('choose')}
            </div>
            <h1 className="text-lg md:text-4xl font-semibold text-[#1C1F35] w-[90%] ml-6 md:w-[450px]">
            {t('provide')}
            </h1>
            <p className="text-base w-[90%] ml-6 md:w-[450px]">
      {t('textprovide')}
            </p>
            <div className="flex items-center w-96 ml-4">
                <img src={box} alt="box icon" />
                <p className="pl-4">{t('deliveryTime')}</p>
            </div>
            <div className="flex items-center w-80 md:w-96 ml-4">
                <img src={cart} alt="icon cart" />
                <p className="pl-4">{t('optimized')}</p>
            </div>
          </div>
          <div
            style={{ backgroundImage: isMobile ?`url(${sairplane})` : `url(${airplane})`, backgroundSize:'cover' }}
            className="w-[320px] h-[245px] md:w-[460px] md:h-[400px] mr-0 ml-16 md:ml-0 md:mr-4"
          ></div>
        </div>
     <div style={{backgroundImage: isMobile ? `url(${sgirl})` : `url(${girl})`, backgroundSize:'cover'}} className="w-[180px] h-[120px] md:w-[280px] md:h-[200px] absolute top-[87%] md:top-[60%] left-[4%]  md:left-[45%] z-[99]"></div>
      </div>
    </div>
  );
};

export default About;

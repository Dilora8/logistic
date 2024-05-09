import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import cart1 from "./../assets/img/1.svg";
import cart2 from "./../assets/img/2.svg";
import cart3 from "./../assets/img/3.svg";
import cart4 from "./../assets/img/4.svg";
import cart5 from "./../assets/img/5.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next";
import { Autoplay } from "swiper/modules";

export default () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <div className="w-[90%] md:w-[100%]">
      {isMobile ? (
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          loop
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide className="flex flex-col">
            <img src={cart1} alt="" />
            <div className="absolute bottom-2 left-6">
              <p className="text-lg text-[#fff]">{t("transportation")}</p>
              <p className="text-[#FFB629]">{t("tankers")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={cart2} alt="" />
            <div className="absolute bottom-2 left-6">
              <p className="text-lg text-[#fff]">{t("packaging")}</p>
              <p className="text-[#FFB629]">{t("management")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={cart3} alt="" />
            <div className="absolute bottom-2 left-6">
              <p className="text-lg text-[#fff]">{t("contractLogistics")}</p>
              <p className="text-[#FFB629]">{t("road")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={cart4} alt="" />
            <div className="absolute bottom-2 left-6">
              <p className="text-lg text-[#fff]">{t("distribution")}</p>
              <p className="text-[#FFB629]">{t("large")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={cart5} alt="" />
            <div className="absolute bottom-2 left-6">
              <p className="text-lg text-[#fff]">{t("specialized")}</p>
              <p className="text-[#FFB629]">{t("ship")}</p>
            </div>
          </SwiperSlide>
        </Swiper>
      ) : (
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={5}
          loop
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img src={cart1} alt="" />
            <div className="absolute bottom-2 left-6">
              <p className="text-lg text-[#fff]">{t("transportation")}</p>
              <p className="text-[#FFB629]">{t("tankers")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={cart2} alt="" />
            <div className="absolute bottom-2 left-6">
              <p className="text-lg text-[#fff]">{t("packaging")}</p>
              <p className="text-[#FFB629]">{t("management")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={cart3} alt="" />
            <div className="absolute bottom-2 left-6">
              <p className="text-lg text-[#fff]">{t("contractlogistics")}</p>
              <p className="text-[#FFB629]">{t("road")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={cart4} alt="" />
            <div className="absolute bottom-2 left-6">
              <p className="text-lg text-[#fff]">{t("distribution")}</p>
              <p className="text-[#FFB629]">{t("large")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={cart5} alt="" />
            <div className="absolute bottom-2 left-6">
              <p className="text-lg text-[#fff]">{t("specialized")}</p>
              <p className="text-[#FFB629]">{t("ship")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={cart1} alt="" />
            <div className="absolute bottom-2 left-6">
              <p className="text-lg text-[#fff]">{t("transportation")}</p>
              <p className="text-[#FFB629]">{t("tankers")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={cart2} alt="" />
            <div className="absolute bottom-2 left-6">
              <p className="text-lg text-[#fff]">{t("packaging")}</p>
              <p className="text-[#FFB629]">{t("management")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={cart3} alt="" />
            <div className="absolute bottom-2 left-6">
              <p className="text-lg text-[#fff]">{t("contractlogistics")}</p>
              <p className="text-[#FFB629]">{t("road")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={cart4} alt="" />
            <div className="absolute bottom-2 left-6">
              <p className="text-lg text-[#fff]">{t("distribution")}</p>
              <p className="text-[#FFB629]">{t("large")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={cart5} alt="" />
            <div className="absolute bottom-2 left-6">
              <p className="text-lg text-[#fff]">{t("specialized")}</p>
              <p className="text-[#FFB629]">{t("ship")}</p>
            </div>
          </SwiperSlide>
        </Swiper>
      )}
    </div>
  );
};

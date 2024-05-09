import { useTranslation } from "react-i18next";
import news from "./../assets/img/1-news 1.svg";
import news1 from "./../assets/img/2 1.svg";
import news2 from "./../assets/img/Image (1).svg";
import news3 from "./../assets/img/images (2) 1.svg";
import news4 from "./../assets/img/six-post.svg";

const NewsContent = () => {
  const { t } = useTranslation();

  return (
    <div className="w-[80%] h-auto md:h-auto mx-auto flex justify-center items-center flex-col my-6">
      <h1 className="text-2xl md:text-4xl font-bold mb-6">{t("latest")}</h1>
      <div className="flex justify-center md:justify-around flex-col md:flex-row md:w-[80%] mx-auto gap-8">
        <div>
          <img src={news} alt="" />
        </div>
        <div className="flex flex-col gap-4 w-[90%] md:w-[40%]">
          <h2 className="font-bold">{t("firstPost")}</h2>
          <p>{t("firstPostText")}</p>
        </div>
      </div>
      <div className="flex justify-center md:justify-around flex-col md:flex-row md:w-[80%] mx-auto gap-8 mt-10">
        <div>
          <img src={news1} alt="" />
        </div>
        <div className="flex flex-col gap-4 w-[90%] md:w-[40%]">
          <h2 className="font-bold">{t("secondPost")}</h2>
          <p>{t("secondPostText")}</p>
        </div>
      </div>
      <div className="flex justify-center md:justify-around flex-col md:flex-row md:w-[80%] mx-auto gap-8 mt-10">
        <div>
          <img src={news2} alt="" />
        </div>
        <div className="flex flex-col gap-4 w-[90%] md:w-[40%]">
          <h2 className="font-bold">{t("thirdPost")}</h2>
          <p>{t("thirdPostText")}</p>
        </div>
      </div>
      <div className="flex justify-center md:justify-around flex-col md:flex-row md:w-[80%] mx-auto gap-8 mt-10">
        <div>
          <img src={news3} alt="" />
        </div>
        <div className="flex flex-col gap-4 w-[90%] md:w-[40%]">
          <h2 className="font-bold">{t("fourPost")}</h2>
          <p>{t("fourPostText")}</p>
        </div>
      </div>
      <div className="flex justify-center md:justify-around flex-col md:flex-row md:w-[80%] mx-auto gap-8 mt-10">
        <div>
          <img src={news4} alt="" />
        </div>
        <div className="flex flex-col gap-4 w-[90%] md:w-[40%]">
          <h2 className="font-bold">{t("fifthPost")}</h2>
          <p>{t("fifthPostText")}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsContent;

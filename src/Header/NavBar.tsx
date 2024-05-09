import search from "./../assets/img/search.svg";
import iconLG from "./../assets/img/languageIcon.svg";
import { useMediaQuery } from "react-responsive";
import { NavLink, useLocation } from "react-router-dom";
import { changeLanguage } from "../App";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useState } from "react";

const NavBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      // Здесь нужно заменить `/api/search` на ваш путь к API поиска
      const response = await axios.get(`/api/search?q=${query}`);
      setResults(response.data);
    } catch (error) {
      console.error("Ошибка при выполнении запроса:", error);
    }
  };
  const { t } = useTranslation();
  const location = useLocation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const [activeLink, setActiveLink] = useState<string>("");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div
      style={{ display: isMobile ? "none" : "block" }}
      className=" bg-[#091242] bg-opacity-20 w-full h-20 z-[9] absolute"
    >
      <div className="w-[90%] flex justify-around items-center h-20 ml-8">
        <div className="flex text-white gap-4 mr-0 md:mr-20">
          <li className="list-none border-r border-opacity-20 border-[#ffffff]">
            {" "}
            <NavLink
              className="mr-8 py-7 px-1"
              to="/"
              onClick={() => handleLinkClick("link1")}
              style={{
                borderBottom:
                  location.pathname === "/" ? "2px solid grey" : "none",
              }}
            >
              {t("home")}
            </NavLink>
          </li>

          <li className="list-none border-r border-opacity-20 border-[#ffffff]">
            {" "}
            <NavLink
              className="mr-8 py-7 px-2"
              to="/about"
              onClick={() => handleLinkClick("link2")}
              style={{
                borderBottom:
                  location.pathname === "/about" ? "2px solid grey" : "none",
              }}
            >
              {t("about")}
            </NavLink>
          </li>

          <li className="list-none border-r border-opacity-20 border-[#ffffff]">
            {" "}
            <NavLink
              className="mr-8 py-7 px-2"
              to="/services"
              onClick={() => handleLinkClick("link3")}
              style={{
                borderBottom:
                  location.pathname === "/services" ? "2px solid grey" : "none",
              }}
            >
              {t("service")}
            </NavLink>
          </li>

          <li className="list-none border-r border-opacity-20 border-[#ffffff]">
            {" "}
            <NavLink
              className="mr-8 py-7 px-2"
              to="/products"
              onClick={() => handleLinkClick("link4")}
              style={{
                borderBottom:
                  location.pathname === "/products" ? "2px solid grey" : "none",
              }}
            >
              {t("product")}
            </NavLink>
          </li>

          <li className="list-none border-r border-opacity-20 border-[#ffffff]">
            {" "}
            <NavLink
              className="mr-8 py-7 px-2"
              to="/news"
              onClick={() => handleLinkClick("link5")}
              style={{
                borderBottom:
                  location.pathname === "/news" ? "2px solid grey" : "none",
              }}
            >
              {t("news")}
            </NavLink>
          </li>

          <li className="list-none border-r border-opacity-20 border-[#ffffff]">
            <NavLink
              className="mr-8 py-7 px-2"
              to="/contact"
              onClick={() => handleLinkClick("link6")}
              style={{
                borderBottom:
                  location.pathname === "/contact" ? "2px solid grey" : "none",
              }}
            >
              {t("contact")}
            </NavLink>
          </li>
        </div>
        <div className="flex">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{background: 'none'}}

          />
          <img className="mr-6" src={search} alt="" onClick={handleSearch} />
          <div>
            <div>
              {results.map((result: any) => (
                <div key={result.id}>{result.name}</div> // Предполагается, что у вас есть поле "name" в объекте результатов
              ))}
            </div>
          </div>
          <div
            className="relative flex ml-7"
            onClick={() => setDropdownOpen(!isDropdownOpen)}
          >
            <img src={iconLG} alt="" />
            {isDropdownOpen && (
              <div className="absolute max-w-[98px] py-3 z-[1] rounded-md top-[20px]">
                <button
                  className="my-1 text-[#ffffff]"
                  onClick={() => changeLanguage("tm")}
                >
                  TM
                </button>
                <button
                  className="my-2 text-[#ffffff]"
                  onClick={() => changeLanguage("ru")}
                >
                  RU
                </button>

                <button
                  className="my-2 text-[#ffffff]"
                  onClick={() => changeLanguage("en")}
                >
                  EN
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

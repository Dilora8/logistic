
import { useState } from "react";
import Import from "./Import";
import Export from "./Export";
import { useTranslation } from "react-i18next";

const ProductComponent = () => {
  const { t } = useTranslation();

  const [activeButton, setActiveButton] = useState("import");

  const handleClick = (buttonName:string) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="w-full sm:h-[75vh] md:h-auto container mx-auto">
      <div className="mt-8 w-[90%] ml-5  md:w-[88%] md:ml-[75px]">
        <div className="flex w-[100%] h-8 gap-4">
          <button
            onClick={() => handleClick("import")}
            className={`w-20 ${
              activeButton === "import" ? "bg-[#e8e8e8]" : "bg-[#ffffff] bg-opacity-50"
            } text-base font-normal text-center`}
          >
            {t("import")}
          </button>
          <button
            onClick={() => handleClick("export")}
            className={`w-20 ${
              activeButton === "export" ? "bg-[#e8e8e8]" : "bg-[#ffffff] bg-opacity-50"
            } text-base font-normal text-center`}
          >
            {t("export")}
          </button>
        </div>
        <div className="w-[100%] mt-2">
          <hr style={{ border: "2px solid" }} />
        </div>
      </div>
      {activeButton === "import" ? <Import /> : <Export />}
    </div>
  );
};

export default ProductComponent;

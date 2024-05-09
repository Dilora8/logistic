import { useMediaQuery } from "react-responsive";
import cart from "./../assets/img/Rectangle 69.svg";
import cart1 from "./../assets/img/Rectangle 70.svg";
import cart2 from "./../assets/img/Rectangle 71.svg";
import cart3 from "./../assets/img/Rectangle 72.svg";
import cart4 from "./../assets/img/Rectangle 73.svg";
import cart5 from "./../assets/img/Rectangle 74.svg";
import cart7 from "./../assets/img/Rectangle 75.svg";
import cart8 from "./../assets/img/Rectangle 76.svg";
import cart9 from "./../assets/img/Rectangle 77.svg";
import cart10 from "./../assets/img/Rectangle 78.svg";
import cart11 from "./../assets/img/Rectangle 79.svg";
import cart12 from "./../assets/img/Rectangle 80.svg";
import scart from "./../assets/img/Rectangle 83.svg";
import scart1 from "./../assets/img/Rectangle 84.svg";
import scart2 from "./../assets/img/Rectangle 85.svg";
import scart3 from "./../assets/img/Rectangle 86.svg";
import scart4 from "./../assets/img/Rectangle 87.svg";
import scart5 from "./../assets/img/Rectangle 88.svg";

const Export = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <div className="flex flex-col justify-start md:justify-center items-center h-auto">
      <div className="grid grid-cols-2  md:grid-cols-3 gap-6 my-4">
      <img
          src={cart7}
          alt=""
          style={{ display: isMobile ? "none" : "block" }}
        />
        <img
          src={cart8}
          alt=""
          style={{ display: isMobile ? "none" : "block" }}
        />
        <img
          src={cart9}
          alt=""
          style={{ display: isMobile ? "none" : "block" }}
        />
        <img
          src={cart10}
          alt=""
          style={{ display: isMobile ? "none" : "block" }}
        />
        <img
          src={cart12}
          alt=""
          style={{ display: isMobile ? "none" : "block" }}
        />
        <img
          src={cart11}
          alt=""
          style={{ display: isMobile ? "none" : "block" }}
        />
        <img src={isMobile ? scart : cart} alt="" />
        <img src={isMobile ? scart1 : cart1} alt="" />
        <img src={isMobile ? scart2 : cart2} alt="" />
        <img src={isMobile ? scart3 : cart3} alt="" />
        <img src={isMobile ? scart4 : cart4} alt="" />
        <img src={isMobile ? scart5 : cart5} alt="" />
  
      </div>
    </div>
  );
};

export default Export;

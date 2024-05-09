import fimage from "./../assets/img/Image.svg";

const FooterContent = () => {
  return (
    <div
    style={{
      backgroundImage: `url(${fimage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    className="w-full h-[500px]"
  ></div>
  )
}

export default FooterContent
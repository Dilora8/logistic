import NavBar from "../Header/NavBar";
import Text from "../components/Text";

import banner from "./../assets/img/Photo.svg";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative w-full h-72 md:h-screen"
    >
      <NavBar />
      <Text />
    </div>
  );
};

export default Home;

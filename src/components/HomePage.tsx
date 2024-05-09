import About from "../About/About";
import Contact from "../HomeContactComponent/HomeContactComponent";
import Features from "../Features/Features";
import FooterContent from "./FooterContent";
import Home from "../Home/Home";
import Product from "../HomeProductsComponent/HomeProductComponent";
import Project from "../Project/Project";
import Services from "../Services/Services";

const HomePage = () => {
  return (
    <div>
      {" "}
      <Home />
      <Product />
      <Services />
      <About />
      <Project />
      <Features />
      <Contact />
      <FooterContent/>
    </div>
  );
};

export default HomePage;

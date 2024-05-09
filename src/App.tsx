import "./App.css";
import HeaderNav from "./Header/HeaderNav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer/Footer";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import i18n from "./common/language";
import News from "./components/NewsPage";
import Contact from "./components/ContactPage";
import Products from "./components/Products";



export function changeLanguage(lng:string){
  i18n.changeLanguage(lng);
  window.localStorage.setItem('language',lng)
}

function App() {


 
  return (
    <BrowserRouter>
      <HeaderNav />
      <div>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

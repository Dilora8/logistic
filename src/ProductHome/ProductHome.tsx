import { useMediaQuery } from 'react-responsive';
import NavBar from '../Header/NavBar'
import bg from './../assets/img/Background2.svg';
import smallbg from './../assets/img/productSmall.svg';
import photo from './../assets/img/contsctbg.svg';
import { useTranslation } from 'react-i18next';

const ServicesHome = () => { 
  const {t} = useTranslation()

   const isMobile = useMediaQuery({query:'(max-width: 768px)'})
   

  return (
    <div style={{backgroundImage: isMobile ? `url(${smallbg})` : `url(${photo})`, backgroundPosition:'center', backgroundSize:'cover'}} className="w-full h-72 md:h-screen">
        <NavBar/>
       <div style={{backgroundImage: `url(${bg})`, backgroundPosition: 'center', backgroundSize: 'cover'}} className='"w-full h-72 md:h-screen'>
       <div className="flex justify-start md:justify-center items-start flex-col w-[60%] md:w-[40%] pt-14 h-full md:h-screen ml-6 md:ml-36">
        <div className="w-20 md:w-28 border-l-4 border-[#ffb629] bg-[#e8e8e8] bg-opacity-50 text-base font-normal mb-4">
       {t('products')}
        </div>
        <h1 className="text-white text-2xl md:text-6xl">{t('type')}</h1>
    </div>
       </div>
    </div>
  )
}

export default ServicesHome
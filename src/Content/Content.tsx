import { useTranslation } from 'react-i18next';
import mask from './../assets/img/Mask.svg';

const Content = () => {
  const{t} =useTranslation()
  return (
    <div className='container mx-auto'>
      <div className='w-[95%] h-[60vh] md:h-[120vh] flex flex-col justify-center items-start mx-auto gap-6'>
        <h1 className="text-4xl">{t('project')}</h1>
        <p className="text-[#666C89]">
        {t('thanks')}
        </p>
        <img className='w-full h-[100%]' src={mask} alt="" />
      </div>
     
    </div>
  );
};

export default Content;

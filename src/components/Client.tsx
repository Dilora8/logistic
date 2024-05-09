import { useMediaQuery } from 'react-responsive';
import client1 from './../assets/img/cl1.svg';
import client2 from './../assets/img/cl2.svg';
import client3 from './../assets/img/cl3.svg';
import client4 from './../assets/img/cl4.svg';

const Client = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <div className="flex justify-center items-center">
    <img src={client1} alt="" />
    <img style={{display: isMobile ? 'none' : 'block'}} src={client2} alt="" />
    <img style={{display: isMobile ? 'none' : 'block'}} src={client3} alt="" />
    <img style={{display: isMobile ? 'none' : 'block'}} src={client4} alt="" />
</div>
  )
}

export default Client
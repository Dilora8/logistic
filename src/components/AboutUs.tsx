import Ahome from "../AboutHome/Ahome"
import Content from "../Content/Content"
import FAQ from "../FAQ/FAQ"
import Transportation from "../Transportation/Transportation"
import Client from "./Client"

const AboutUs = () => {
  return (
    <div>
      <Ahome/>
      <Transportation/>
      <Content/>
      <FAQ/>
     <div className="my-20">
     <Client/>
     </div>
    </div>
  )
}

export default AboutUs
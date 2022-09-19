import { Col, Row } from "react-bootstrap";
import ExploreServicesCard from "../components/ExploreServicesCard";
import BannerComponent from "../components/Home/BannerComponent";
import LogosComponent from "../components/Home/LogosComponent";
import StartUpComponent from "../components/Home/StartUpComponent";
import Navbar from "../components/Navbar";
import Paragraph from "../components/Paragraph";


export default function Home() {
  
  return (
    <div>
      <div className='sm:text-xs md:text-9xl '>
       <Navbar/>
       <BannerComponent/>
       <div className='mt-5 d-flex justify-content-center align-center'>

       <Paragraph content="Join the growing number of organizations experiencing the Copenned difference"/>

       </div>
       <LogosComponent/>
      <StartUpComponent/>
      </div>
    </div>
  )
}

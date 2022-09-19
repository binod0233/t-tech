import { Col, Row } from "react-bootstrap";
import ExploreServicesCard from "../components/ExploreServicesCard";
import BannerComponent from "../components/Home/BannerComponent";
import Navbar from "../components/Navbar";


export default function Home() {
  
  return (
    <div>
      <div className='sm:text-xs md:text-9xl '>
       <Navbar/>
       <BannerComponent/>
       
      </div>
    </div>
  )
}

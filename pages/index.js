import { Col, Row } from "react-bootstrap";
import ExploreServicesCard from "../components/ExploreServicesCard";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";


export default function Home() {
  
  return (
    <div>
      <div className='sm:text-xs md:text-9xl '>
       <Navbar/>
      <Hero/>
       <Footer/>
      </div>
    </div>
  )
}

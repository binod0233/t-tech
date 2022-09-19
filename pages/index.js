import { Col, Row } from "react-bootstrap";
import ExploreServicesCard from "../components/ExploreServicesCard";
import Navbar from "../components/Navbar";


export default function Home() {
  return (
    <div>
      <div className='sm:text-xs md:text-9xl '>
       <Navbar/>
       <Row style={{marginTop:'15vh'}} className='d-flex flex-wrap'>
<Col md={4}><ExploreServicesCard/></Col>
<Col md={4}><ExploreServicesCard/></Col>
<Col md={4}><ExploreServicesCard/></Col>
<Col className='mt-4' md={4}><ExploreServicesCard/></Col>
<Col className='mt-4' md={4}><ExploreServicesCard/></Col>
<Col className='mt-4' md={4}><ExploreServicesCard/></Col>
       </Row>
       
      </div>
    </div>
  )
}

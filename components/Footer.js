import Link from 'next/link'
import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <div className='sm-h-fit-content'>

      <div className='upperFooter container' style={{ background: "", color: '', padding: '4vh 0' }} >
        <Row>
          <div>
            <div className='h5' style={{fontWeight:'600'}} >Looking for a specific type of talent? </div>
          </div>
        </Row>
        <Row>
          <Col xl={6} md={12} >
            <Row>
              <Col sm={12} md={6} xl={6}>
                <Row className='mt-5 mb-3'>
                  <div style={{fontWeight:'600'}}> Developers</div>
                </Row>
                <div>
                  <Row><div className='mt-3'><Link href='#'>Angular Developers</Link></div></Row>
                  <Row><div className='mt-3'><Link href='#'>Angular Developers</Link></div></Row>
                  <Row><div className='mt-3'><Link href='#'>Angular Developers</Link></div></Row>
                  <Row><div className='mt-3'><Link href='#'>Angular Developers</Link></div></Row>
                  <Row><div className='mt-3'><Link href='#'>Angular Developers</Link></div></Row>
                  <Row><div className='mt-3'><Link href='#'>Angular Developers</Link></div></Row>
                  <Row><div className='mt-3'><Link href='#'>Angular Developers</Link></div></Row>
                  <Row><div className='mt-3'><Link href='#'>Angular Developers</Link></div></Row>
                  <Row><div className='mt-3'><Link href='#'>Angular Developers</Link></div></Row>
                </div>
              </Col>
              <Col sm={12} md={6} xl={6}>
                <Row className='mt-5 mb-3'>
                  <div style={{fontWeight:'600'}}>Digital Designers</div>
                </Row>
                <div>
                  <Row><div className='mt-3'><Link href='#'>Angular Developers</Link></div></Row>
                  <Row><div className='mt-3'><Link href='#'>Angular Developers</Link></div></Row>
                  <Row><div className='mt-3'><Link href='#'>Angular Developers</Link></div></Row>
                  <Row><div className='mt-3'><Link href='#'>Angular Developers</Link></div></Row>
                  <Row><div className='mt-3'><Link href='#'>Angular Developers</Link></div></Row>
                  <Row><div className='mt-3'><Link href='#'>Angular Developers</Link></div></Row>
                  <Row><div className='mt-3'><Link href='#'>Angular Developers</Link></div></Row>
                  <Row><div className='mt-3'><Link href='#'>Angular Developers</Link></div></Row>
                  <Row><div className='mt-3'><Link href='#'>Angular Developers</Link></div></Row>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xl={6} md={12}>
            <Row>
              <Col sm={12} md={6} xl={6}>
                <Row className='mt-5 mb-3'>
                  <div style={{fontWeight:'600'}} >
                    SEO Expertise
                  </div>
                </Row>
                <div>
                  <Row><div className='mt-3'><Link href='#'>Copywriter</Link></div></Row>
                  <Row><div className='mt-3'><Link href='#'>Content Writer</Link></div></Row>
                  <Row><div className='mt-3'><Link href='#'>Writer</Link></div></Row>
                  <Row><div className='mt-3'><Link href='#'>Resume Writer</Link></div></Row>
                  <Row><div className='mt-3'><Link href='#'>User Flow Design</Link></div></Row>
                  <Row><div className='mt-3'><Link href='#'>Prototype Design</Link></div></Row>
                  <Row><div className='mt-3'><Link href='#'>Interaction Design</Link></div></Row>
                  <Row><div className='mt-3'><Link href='#'>Graphic Design</Link></div></Row>
                  <Row><div className='mt-3'><Link href='#'>Motion Graphic Design</Link></div></Row>
                  <Row><div className='mt-3'><Link href='#'>Facebook Ad Design</Link></div></Row>
                  <Row><div className='mt-3'><Link href='#'>Instagram Ad Design</Link></div></Row>
                  <Row><div className='mt-3'><Link href='#'>Banner Design</Link></div></Row>
                </div>
              </Col>
              <Col sm={12} md={6} xl={6}>
                <Row className='mt-5 mb-3'>
                  <div style={{fontWeight:'600'}}>
                    Custom Engineering Solution
                  </div>
                </Row>
                <div>
                  <Row><div className='mt-3'><Link href='#'> Engineering Documentation</Link></div></Row>
                  <Row><div className='mt-3'><Link href='#'>Engineering Tender Preparation</Link></div></Row>
                  <Row><div className='mt-3'><Link href='#'>Engineering Drawing</Link></div></Row>
                  <Row><div className='mt-3'><Link href='#'>Engineering Simulation And Analysis</Link></div></Row>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className='lowerFooter ' style={{ background: "#152730", color: 'white', padding: '3vh 0' }} >
        <div className="container">

          <Row>
            <Col xl={6} md={12} >
              <Row>
                <Col sm={12} md={6} xl={6}>
                  <Row className='mt-5 mb-3'>
                    <div className='h2'> We build startups from scratch.</div>
                  </Row>
                  <hr />
                  <div>
                    <Row><div className='mt-1'><Link href='#'>CONTACT US</Link></div></Row>
                    <Row><div className='mt-1'><Link href='#'>+977 9826986729</Link></div></Row>
                    <Row><div className='mt-1'><Link href='#'>info@copenned.com</Link></div></Row>
                    <Row><div className='mt-1'><Link href='#'>MEET US IN</Link></div></Row>
                    <Row><div className='mt-1'><Link href='#'>Bhaktapur, Nepal</Link></div></Row>
                  </div>
                </Col>
                <Col sm={12} md={6} xl={6}>
                  <Row className='mt-5 mb-3'>
                    <div>COMPANY</div>
                  </Row>
                  <div>
                    <Row><div className='mt-1'><Link href='#'>About Us</Link></div></Row>
                    <Row><div className='mt-1'><Link href='#'>Career</Link></div></Row>
                    <Row><div className='mt-1'><Link href='#'>FAQs</Link> </div></Row>
                    <Row><div className='mt-1'><Link href='#'>Blog</Link></div></Row>
                    <Row><div className='mt-1'><Link href='#'>Contact Us</Link></div></Row>
                    <Row><div className='mt-1'><Link href='#'>Terms & Conditions</Link></div></Row>
                    <Row><div className='mt-1'><Link href='#'>Privacy Policy</Link></div></Row>

                  </div>
                </Col>
              </Row>
            </Col>
            <Col xl={6} md={12}>
              <Row>
                <Col sm={12} md={6} xl={6}>
                  <Row className='mt-5 mb-3'>
                    <div >
                      SERVICES
                    </div>
                  </Row>
                  <div>
                    <Row><div className='mt-1'><Link href='#'>Product Design</Link></div></Row>
                    <Row><div className='mt-1'><Link href='#'>Web Development</Link></div></Row>
                    <Row><div className='mt-1'><Link href='#'>Mobile Development</Link></div></Row>
                    <Row><div className='mt-1'><Link href='#'>Technical Writing</Link></div></Row>
                    <Row><div className='mt-1'><Link href='#'></Link>Quality Assurance</div></Row>
                    <Row><div className='mt-1'><Link href='#'>Cloud Application</Link></div></Row>
                    <Row><div className='mt-1'><Link href='#'>UI/UX Desgin</Link></div></Row>
                    <Row><div className='mt-1'><Link href='#'>MVP Development</Link></div></Row>
                    <Row><div className='mt-1'><Link href='#'>All Services</Link></div></Row>
                  </div>
                </Col>
                <Col sm={12} md={6} xl={6}>
                  <Row className='mt-5 mb-3'>
                    <div>
                      TECHNOLOGIES
                    </div>
                  </Row>
                  <div>
                    <Row><div className='mt-1'><Link href='#'>Angular</Link></div></Row>
                    <Row><div className='mt-1'><Link href='#'>React</Link></div></Row>
                    <Row><div className='mt-1'><Link href='#'>UI/UX</Link></div></Row>
                    <Row><div className='mt-1'><Link href='#'>Node.Js</Link></div></Row>
                    <Row><div className='mt-1'><Link href='#'>SQL</Link></div></Row>
                    <Row><div className='mt-1'><Link href='#'>Java</Link></div></Row>
                    <Row><div className='mt-1'><Link href='#'>PHP</Link></div></Row>
                    <Row><div className='mt-1'><Link href='#'>JavaScript</Link></div></Row>


                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

        </div>

      </div>
      <div className="copyright  " style={{ background: "#000D27", color: "white", padding: '2vh 0' }}>
        <div className='container'>
          <Row className=" ">
            <Col md={9} sm={12}>
              <Row>
                <Col md={5}><div>Copyright © 2022, All rights reserved</div></Col>
                <Col md={7}><div>Leading Marketplace for Startups, Enterprises and owners</div></Col>
              </Row>
            </Col>
            <Col md={3} sm={12}>
              <div>
                All rights reserved
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default Footer
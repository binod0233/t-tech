import Link from "next/link"
import React from "react"
import { Col, Row } from "react-bootstrap"
import Subtitle from "./Subtitle"
import Title from "./Title"

const Footer = () => {
  return (
    <div className="sm-h-fit-content">

      <div className="upperFooter container" style={{ background: "", color: "", padding: "4vh 0" }} >
        <Row>
          <Subtitle subtitle='Looking for a specific type of talent?'/>
        </Row>
        <Row>
          <Col xl={6} md={12} >
            <Row>
              <Col sm={12} md={6} xl={6}>
                <Row className="mt-5 mb-3">
                 <Subtitle subtitle='Developers'/>
                </Row>
                <div>
                  <Row><div className="text_paragraph mt-3"><Link href="/angdev"><a>Angular Developers</a></Link></div></Row>
                  <Row><div className="text_paragraph mt-3"><Link href="/recdev"><a>React Developers</a></Link></div></Row>
                  <Row><div className="text_paragraph mt-3"><Link href="/sqdev"><a>SQL Developers</a></Link></div></Row>
                  <Row><div className="text_paragraph mt-3"><Link href="/webdevv"><a>Web Developers</a></Link></div></Row>
                  <Row><div className="text_paragraph mt-3"><Link href="/fsdev"><a>Full-Stack Developers</a></Link></div></Row>
                  <Row><div className="text_paragraph mt-3"><Link href="/jd"><a>Java Developers</a></Link></div></Row>
                  <Row><div className="text_paragraph mt-3"><Link href="/nd"><a>Node.js Developers</a></Link></div></Row>
                  <Row><div className="text_paragraph mt-3"><Link href="/jd"><a>JavaScript Developers</a></Link></div></Row>
                  <Row><div className="text_paragraph mt-3"><Link href="/pd"><a>PHP Developers</a></Link></div></Row>
                </div>
              </Col>
              <Col sm={12} md={6} xl={6}>
                <Row className="text_paragraph mt-5 mb-3">
                 <Subtitle subtitle='Digital Designers '/>

                </Row>
                <div>
                  <Row><div className="text_paragraph mt-3"><Link href="/website"><a>Website UI/UX Design</a></Link></div></Row>
                  <Row><div className="text_paragraph mt-3"><Link href="/uiux"><a>Web App UI/UX Design</a></Link></div></Row>
                  <Row><div className="text_paragraph mt-3"><Link href="/mobile"><a>Mobile App UI/UX Design</a></Link></div></Row>
                  <Row><div className="text_paragraph mt-3"><Link href="/responsive"><a>Responsive Design</a></Link></div></Row>
                  <Row><div className="text_paragraph mt-3"><Link href="/flow"><a>User Flow Design</a></Link></div></Row>
                  <Row><div className="text_paragraph mt-3"><Link href="/prototype"><a>Prototype Design</a></Link></div></Row>
                  <Row><div className="text_paragraph mt-3"><Link href="/interaction"><a>Interaction Design</a></Link></div></Row>
                  <Row><div className="text_paragraph mt-3"><Link href="/illus"><a>Illustrators</a></Link></div></Row>
                  <Row><div className="text_paragraph mt-3"><Link href="/motion"><a>Motion Graphic Design</a></Link></div></Row>
                  <Row><div className="text_paragraph mt-3"><Link href="/fb"><a>Facebook Ad Design</a></Link></div></Row>
                  <Row><div className="text_paragraph mt-3"><Link href="/ig"><a>Instagram Ad Design</a></Link></div></Row>
                  <Row><div className="text_paragraph mt-3"><Link href="/banner"><a>Banner Design</a></Link></div></Row>

                </div>
              </Col>
            </Row>
          </Col>
          <Col xl={6} md={12}>
            <Row>
              <Col sm={12} md={6} xl={6}>
                <Row className="text_paragraph mt-5 mb-3">
                 
                 <Subtitle subtitle='SEO Expertise'/>

                </Row>
                <div>
                  <Row><div className="text_paragraph mt-3"><Link href="/copywrite"><a>Copywriter</a></Link></div></Row>
                  <Row><div className="text_paragraph mt-3"><Link href="/content"><a>Content Writer</a></Link></div></Row>
                  <Row><div className="text_paragraph mt-3"><Link href="/writer"><a>Writer</a></Link></div></Row>
                  <Row><div className="text_paragraph mt-3"><Link href="/resume"><a>Resume Writer</a></Link></div></Row>
                  <Row><div className="text_paragraph mt-3"><Link href="/userflow"><a>User Flow Design</a></Link></div></Row>
                  <Row><div className="text_paragraph mt-3"><Link href="/proto"><a>Prototype Design</a></Link></div></Row>
                  <Row><div className="text_paragraph mt-3"><Link href="/interact"><a>Interaction Design</a></Link></div></Row>
                  <Row><div className="text_paragraph mt-3"><Link href="/graphic"><a>Graphic Design</a></Link></div></Row>
                  <Row><div className="text_paragraph mt-3"><Link href="/motion"><a>Motion Graphic Design</a></Link></div></Row>
                  <Row><div className="text_paragraph mt-3"><Link href="/fbad"><a>Facebook Ad Design</a></Link></div></Row>
                  <Row><div className="text_paragraph mt-3"><Link href="/igad"><a>Instagram Ad Design</a></Link></div></Row>
                  <Row><div className="text_paragraph mt-3"><Link href="/ban"><a>Banner Design</a></Link></div></Row>
                </div>
              </Col>
              <Col sm={12} md={6} xl={6}>
                <Row className="text_paragraph mt-5 mb-3">
                  
                 <Subtitle subtitle='Custom Engineering Solution'/>

                </Row>
                <div>
                  <Row><div className="text_paragraph mt-3"><Link href="/tend"><a>Engineering Documentation</a></Link></div></Row>
                  <Row><div className="text_paragraph mt-3"><Link href="/tend"><a>Engineering Tender Preparation</a></Link></div></Row>
                  <Row><div className="text_paragraph mt-3"><Link href="/draw"><a>Engineering Drawing</a></Link></div></Row>
                  <Row><div className="text_paragraph mt-3"><Link href="/sim"><a>Engineering Simulation And Analysis</a></Link></div></Row>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className="text_paragraph lowerFooter " style={{ background: "#152730", color: "white", padding: "3vh 0" }} >
        <div className="text_paragraph container">

          <Row>
            <Col xl={6} md={12} >
              <Row>
                <Col sm={12} md={6} xl={6}>
                  <Row className=" mt-5 mb-3">
                  <Subtitle subtitle='We build startups from scratch.'/>
                  </Row>
                  <hr />
                  <div>
                    <Row><div className="text_paragraph mt-1"><a>CONTACT US</a></div></Row>
                    <Row><div className="text_paragraph mt-1"><a>+977 9826986729</a></div></Row>
                    <Row><div className="text_paragraph mt-1"><a>info@copenned.com</a></div></Row>
                    <Row><div className="text_paragraph mt-1"><a>MEET US IN</a></div></Row>
                    <Row><div className="text_paragraph mt-1"><a>Bhaktapur, Nepal</a></div></Row>
                  </div>
                </Col>
                <Col sm={12} md={6} xl={6}>
                  <Row className=" mt-5 mb-3">
                    <div>COMPANY</div>
                  </Row>
                  <div>
                    <Row><div className="text_paragraph mt-1"><Link href="/about"><a>About Us</a></Link></div></Row>
                    <Row><div className="text_paragraph mt-1"><Link href="/career"><a>Career</a></Link></div></Row>
                    <Row><div className="text_paragraph mt-1"><Link href="/faqs"><a>FAQs</a></Link> </div></Row>
                    <Row><div className="text_paragraph mt-1"><Link href="/blogs"><a>Blog</a></Link></div></Row>
                    <Row><div className="text_paragraph mt-1"><Link href="/contact"><a>Contact Us</a></Link></div></Row>
                    <Row><div className="text_paragraph mt-1"><Link href="/terms"><a>Terms & Conditions</a></Link></div></Row>
                    <Row><div className="text_paragraph mt-1"><Link href="/privacy"><a>Privacy Policy</a></Link></div></Row>

                  </div>
                </Col>
              </Row>
            </Col>
            <Col xl={6} md={12}>
              <Row>
                <Col sm={12} md={6} xl={6}>
                  <Row className=" mt-5 mb-3">
                    <div >
                      SERVICES
                    </div>
                  </Row>
                  <div>
                    <Row><div className="text_paragraph mt-1"><Link href="/prod"><a>Product Design</a></Link></div></Row>
                    <Row><div className="text_paragraph mt-1"><Link href="/webdev"><a>Web Development</a></Link></div></Row>
                    <Row><div className="text_paragraph mt-1"><Link href="/mobdev"><a>Mobile Development</a></Link></div></Row>
                    <Row><div className="text_paragraph mt-1"><Link href="/tech"><a>Technical Writing</a></Link></div></Row>
                    <Row><div className="text_paragraph mt-1"><Link href="/quality"><a>Quality Assurance</a></Link></div></Row>
                    <Row><div className="text_paragraph mt-1"><Link href="/cloud"><a>Cloud Application</a></Link></div></Row>
                    <Row><div className="text_paragraph mt-1"><Link href="/uiuxdes"><a>UI/UX Design</a></Link></div></Row>
                    <Row><div className="text_paragraph mt-1"><Link href="/mvp"><a>MVP Development</a></Link></div></Row>
                    <Row><div className="text_paragraph mt-1"><Link href="/services"><a>All Services</a></Link></div></Row>
                  </div>
                </Col>
                <Col sm={12} md={6} xl={6}>
                  <Row className=" mt-5 mb-3">
                    <div>
                      TECHNOLOGIES
                    </div>
                  </Row>
                  <div>
                    <Row><div className="text_paragraph mt-1"><Link href="/ang"><a>Angular</a></Link></div></Row>
                    <Row><div className="text_paragraph mt-1"><Link href="/react"><a>React</a></Link></div></Row>
                    <Row><div className="text_paragraph mt-1"><Link href="/uiuxx"><a>UI/UX</a></Link></div></Row>
                    <Row><div className="text_paragraph mt-1"><Link href="/node"><a>Node.Js</a></Link></div></Row>
                    <Row><div className="text_paragraph mt-1"><Link href="/sql"><a>SQL</a></Link></div></Row>
                    <Row><div className="text_paragraph mt-1"><Link href="/java"><a>Java</a></Link></div></Row>
                    <Row><div className="text_paragraph mt-1"><Link href="/php"><a>PHP</a></Link></div></Row>
                    <Row><div className="text_paragraph mt-1"><Link href="/js"><a>JavaScript</a></Link></div></Row>


                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

        </div>

      </div>
      <div className="copyright  " style={{ background: "#000D27", color: "white", padding: "2vh 0" }}>
        <div className="container">
          <Row className="text_paragraph ">
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
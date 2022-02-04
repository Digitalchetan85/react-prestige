import React from "react";
import {
  Col,
  Container,
  Image,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";
import Modals from "./Modals";
import Logo from "../../images/logo.png";
import image1 from "../../images/slider/aspen-greens/aspen-greens-2.png";

const TopMenuBar = () => {
  return (
    <div>
      <div className="header-top bg-warning">
        <Container>
          <Row>
            <Col
              md={4}
              className="text-white d-none d-md-block align-self-center"
            >
              <div className="">
                <i className="fa fa-map-marker-alt"></i> Sarjapura Road
                Bangalore.
              </div>
            </Col>
            <Col md={4} xs={5} className="align-self-center">
              <div className="text-center">
                <Modals name="Brochure" />
              </div>
            </Col>
            <Col md={4} xs={7} className="align-self-center">
              <div className="text-end">
                <a
                  href="tel:+918095999000"
                  className="anchor btn btn-transparent fw-bold text-white m-1"
                >
                  <i className="fa fa-phone-volume"></i> +91-80959 99000
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="Menubar">
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
          <Container>
            <Navbar.Brand href="/">
              <Image className="img-fluid" alt="" src={Logo} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#overview">Overview</Nav.Link>
                <NavDropdown
                  className="d-block d-md-none"
                  title="The Prestige City Projects"
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  className="d-none d-md-block menu-area"
                  title="The Prestige City Projects"
                  id="collasible-nav-dropdown"
                >
                  <Container>
                    <Row className="text-center">
                      <Col md={3}>
                        <NavDropdown.Item href="/aspen-greens" className="fs-5 fw-bold text-primary">
                          Aspen Greens
                        </NavDropdown.Item>
                        <div className="position-relative">
                          <a
                            className="text-decoration-none"
                            href="/aspen-greens"
                          >
                            <Image className="img-fluid" alt="" src={image1} />
                            <span className="position-absolute top-0 end-0 badge rounded-pill bg-danger m-1">
                              Coming Soon
                            </span>
                            <p className="text-dark m-0 py-2">Excl. 3 Bed Apartments</p>
                          </a>
                        </div>
                      </Col>
                      
                      <Col md={3}>
                        <NavDropdown.Item href="/aspen-greens" className="fs-5 fw-bold text-primary">
                          Aspen Greens
                        </NavDropdown.Item>
                        <div className="position-relative">
                          <a
                            className="text-decoration-none"
                            href="/aspen-greens"
                          >
                            <Image className="img-fluid" alt="" src={image1} />
                            <span className="position-absolute top-0 end-0 badge rounded-pill bg-danger m-1">
                              Coming Soon
                            </span>
                            <p className="text-dark m-0 py-2">Excl. 3 Bed Apartments</p>
                          </a>
                        </div>
                      </Col>
                      
                      <Col md={3}>
                        <NavDropdown.Item href="/aspen-greens" className="fs-5 fw-bold text-primary">
                          Aspen Greens
                        </NavDropdown.Item>
                        <div className="position-relative">
                          <a
                            className="text-decoration-none"
                            href="/aspen-greens"
                          >
                            <Image className="img-fluid" alt="" src={image1} />
                            <span className="position-absolute top-0 end-0 badge rounded-pill bg-danger m-1">
                              Coming Soon
                            </span>
                            <p className="text-dark m-0 py-2">Excl. 3 Bed Apartments</p>
                          </a>
                        </div>
                      </Col>
                      
                      <Col md={3}>
                        <NavDropdown.Item href="/aspen-greens" className="fs-5 fw-bold text-primary">
                          Aspen Greens
                        </NavDropdown.Item>
                        <div className="position-relative">
                          <a
                            className="text-decoration-none"
                            href="/aspen-greens"
                          >
                            <Image className="img-fluid" alt="" src={image1} />
                            <span className="position-absolute top-0 end-0 badge rounded-pill bg-danger m-1">
                              Coming Soon
                            </span>
                            <p className="text-dark m-0 py-2">Excl. 3 Bed Apartments</p>
                          </a>
                        </div>
                      </Col>
                      
                      <Col md={3}>
                        <NavDropdown.Item href="/aspen-greens" className="fs-5 fw-bold text-primary">
                          Aspen Greens
                        </NavDropdown.Item>
                        <div className="position-relative">
                          <a
                            className="text-decoration-none"
                            href="/aspen-greens"
                          >
                            <Image className="img-fluid" alt="" src={image1} />
                            <span className="position-absolute top-0 end-0 badge rounded-pill bg-danger m-1">
                              Coming Soon
                            </span>
                            <p className="text-dark m-0 py-2">Excl. 3 Bed Apartments</p>
                          </a>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </NavDropdown>
                <Nav.Link href="#master-plan">Master Plan</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <Nav.Link href="#about-developer">About Developer</Nav.Link>
              </Nav>
              {/* <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
              </Nav> */}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default TopMenuBar;

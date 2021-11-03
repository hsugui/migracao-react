import React from 'react'
import { Container, Breadcrumb, Nav, Row, Col, Card, ListGroup } from 'react-bootstrap';
import '../../assets/css/style.css';
import Template2 from "../../assets/images/template2.jpg";
import Template1 from "../../assets/images/template1.jpg";

function Blocks(props) {
    return (
        <>
            {/* <!-- main content start --> */}
            <div className="main-content">

                {/* <!-- content --> */}
                <Container fluid className="content-top-gap">

                    {/* <!-- breadcrumbs --> */}
                    <Nav aria-label="breadcrumb" className="mb-4">
                        <Breadcrumb className="my-breadcrumb">
                            <Breadcrumb.Item><a href="index.html">Home</a></Breadcrumb.Item>
                            <Breadcrumb.Item><a href="#">Elements</a></Breadcrumb.Item>
                            <Breadcrumb.Item className="active" aria-current="page">Content Blocks</Breadcrumb.Item>
                        </Breadcrumb>
                    </Nav>
                    {/* <!-- //breadcrumbs --> */}

                    {/* <!-- card heading --> */}
                    <div className="cards__heading">
                        <h3>Content Blocks</h3>
                    </div>
                    {/* <!-- //card heading --> */}

                    {/* <!-- content block style 1--> */}
                    <Card className="card_border p-lg-5 p-3 mb-4">
                        <Card.Body className="card-body py-3 p-0">
                            <Row>
                                <Col lg={6} className="align-self pr-lg-4">
                                    <h3 className="block__title mb-lg-4">About Content Block</h3>
                                    <p className="mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusa ntium corrupti
                                        neque sunt labore veritatis. </p>
                                    <p className="mb-lg-5 mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusa ntium corrupti
                                        neque sunt
                                        praesentium aut, labore veritatis. Eaque, similique aspernatur. Perferendis doloremque ut
                                        praesentium vel voluptatum quasi dolor explicabo nobis ex?</p>
                                    <a href="#read" className="btn btn-style btn-primary"> Read More</a>
                                </Col>
                                <Col lg={6} className="pl-lg-4 mt-lg-0 mt-4">
                                    <img src={Template2} alt="" className="img-fluid rounded" />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    {/* <!-- //content block style 1--> */}

                    {/* <!-- content block style 2--> */}
                    <Card className="card_border p-lg-5 p-3 mb-4">
                        <Card.Body className="py-3 p-0">
                            <Row>
                                <Col lg={6} className="pr-lg-4">
                                    <img src={Template1} alt="" className="img-fluid rounded" />
                                </Col>
                                <Col lg={6} className="align-self pl-lg-4 mt-lg-0 mt-4">
                                    <h3 className="block__title mb-lg-4">Content Block with 2 buttons</h3>
                                    <p className="mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusa ntium corrupti neque
                                        sunt
                                        praesentium aut, labore veritatis. Eaque, similique aspernatur. Perferendis doloremque ut
                                        praesentium vel voluptatum quasi dolor explicabo nobis ex?</p>
                                    <p className="mb-lg-5 mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusa ntium corrupti
                                        neque sunt labore veritatis.</p>
                                    <a href="#read" className="btn btn-style btn-primary mr-2"> Read More</a>
                                    <a href="#more" className="btn btn-style border-btn"> Contact Us</a>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    {/* <!-- //content block style 2--> */}

                    {/* <!-- content block style 6 --> */}
                    <Card className="card_border p-lg-5 p-3 mb-4">
                        <Card.Body className="py-3 p-0">
                            <h3 className="block__title mb-lg-4">Content Block Features</h3>
                            <Row className="feature-3 text-center">
                                <Col md={4} className="three-grids-columns mt-5">
                                    <span className="fa fa-laptop icon-fea" aria-hidden="true"></span>
                                    <a href="#">
                                        <h4>Web Design</h4>
                                    </a>
                                    <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.</p>
                                    <a href="#" className="actionbg">Read More</a>
                                </Col>
                                <Col md={4} className="three-grids-columns mt-5">
                                    <span className="fa fa-paint-brush icon-fea" aria-hidden="true"></span>
                                    <a href="#">
                                        <h4>Graphic Design</h4>
                                    </a>
                                    <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.</p>
                                    <a href="#" className="actionbg">Read More</a>
                                </Col>
                                <Col md={4} className="three-grids-columns mt-5">
                                    <span className="fa fa-signal icon-fea" aria-hidden="true"></span>
                                    <a href="#">
                                        <h4>Web Development</h4>
                                    </a>
                                    <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.</p>
                                    <a href="#" className="actionbg">Read More</a>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    {/* <!-- //content block style 6 --> */}

                    {/* <!-- content block style 7 --> */}
                    <Card className="w3l-about1 card_border p-lg-5 p-3 mb-4">
                        <Card.Body className="py-3 p-0">
                            <h3 className="block__title mb-lg-4">Content Block Features with photo</h3>
                            <Row className="row cwp23-content">
                                <Col md={6} className="cwp23-text">
                                    <Row className="cwp23-text-cols">
                                        <Col md={6} className="column mt-4">
                                            <span className="fa fa-laptop icon-fea" aria-hidden="true"></span>
                                            <a href="#url">Web design</a>
                                            <p>Type your text here... Lorem ipsum dolor sit amet. </p>
                                        </Col>
                                        <Col md={6} className="column mt-4">
                                            <span className="fa fa-paint-brush icon-fea" aria-hidden="true"></span>
                                            <a href="#url">Graphic design</a>
                                            <p>Type your text here... Lorem ipsum dolor sit amet. </p>
                                        </Col>
                                        <Col md={6} className="column mt-4">
                                            <span className="fa fa-signal icon-fea" aria-hidden="true"></span>
                                            <a href="#url">Web development</a>
                                            <p>Type your text here... Lorem ipsum dolor sit amet. </p>
                                        </Col>
                                        <Col md={6} className="column mt-4">
                                            <span className="fa fa-laptop icon-fea" aria-hidden="true"></span>
                                            <a href="#url">Webdesign</a>
                                            <p>Type your text here... Lorem ipsum dolor sit amet. </p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={6} className="mt-md-0 mt-5 cwp23-img">
                                    <img src={Template2} className="img-fluid rounded" alt="" />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    {/* <!-- //content block style 7 --> */}

                </Container>
                {/* <!-- //content --> */}

            </div>
            {/* <!-- main content end--> */}

        </>
    )
}

export default Blocks
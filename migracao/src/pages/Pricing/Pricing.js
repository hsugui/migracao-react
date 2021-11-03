import React from 'react'
import { Link } from "react-router-dom";
import { Container, Breadcrumb, Nav, Row, Col, Card, ListGroup } from 'react-bootstrap';
import '../../assets/css/style.css';

function Pricing(props) {
    return (
        <>
            {/* <!-- main content start --> */}
            <div className="main-content">

                {/* <!-- content --> */}
                <Container fluid className="content-top-gap">

                    {/* <!-- breadcrumbs --> */}
                    <Nav aria-label="breadcrumb" className="mb-4">
                        <Breadcrumb className="my-breadcrumb">
                            <Breadcrumb.Item><Link to={'/index'}>Home</Link></Breadcrumb.Item>
                            <Breadcrumb.Item className="active" aria-current="page">Pricing Tables</Breadcrumb.Item>
                        </Breadcrumb>
                    </Nav>
                    {/* <!-- //breadcrumbs --> */}

                    {/* <!-- pricing --> */}
                    <section className="pricing">
                        <Card className="card_border mb-5">
                            <div className="cards__heading">
                                <h3>Pricing Tables -<span> Version 1</span></h3>
                            </div>
                            <Card.Body>
                                {/* <!-- pricing version 1 --> */}

                                {/* <!--//BLOCK ROW END--> */}

                                <section className="w3l-pricing1">
                                    <Row className="px-2">
                                        <Col md={4} className="px-2">
                                            <div className="mb-4 price-card price-card1 p-lg-4 p-md-3 p-4">
                                                <Card.Header className="p-0 card-heading">
                                                    <h4 className="mb-4">Free</h4>
                                                </Card.Header>
                                                <Card.Body className="p-0">
                                                    <h1 className="card-title pricing-card-title my-price-title">$0<small
                                                        className="text-dull">/month</small>
                                                    </h1>
                                                    <p>There are many variations of passages of Lorem Ipsum available.</p>
                                                    <ul className="list-unstyled list-pricing mt-3 mb-4">
                                                        <li>1 Domain</li>
                                                        <li>10 users included</li>
                                                        <li>2 GB of storage</li>
                                                        <li>Email support</li>
                                                        <li>Help center access</li>
                                                    </ul>
                                                    <div className="mt-4">
                                                        <Link to={'#'} className="btn btn-lg btn-outline-primary btn-style border-btn">Sign up for free</Link>
                                                    </div>
                                                </Card.Body>
                                            </div>
                                        </Col>
                                        <Col md={4} className="px-2">
                                            <div className="mb-4 price-card price-card2 p-lg-4 p-md-3 p-4 recomemded-price">
                                                <Card.Header className="p-0 card-heading">
                                                    <h4 className="mb-4">Regular <span className="label label-popular">Popular</span></h4>
                                                </Card.Header>
                                                <Card.Body className="p-0">
                                                    <h1 className="card-title pricing-card-title my-price-title">$49<small
                                                        className="text-dull">/month</small>
                                                    </h1>
                                                    <p>There are many variations of passages of Lorem Ipsum available.</p>
                                                    <ul className="list-unstyled list-pricing mt-3 mb-4">
                                                        <li>10 Domain</li>
                                                        <li>20 users included</li>
                                                        <li>10 GB of storage</li>
                                                        <li>Priority email support</li>
                                                        <li>Help center access</li>
                                                    </ul>
                                                    <div className="mt-4">
                                                        <Link to={'#'} className="btn btn-lg btn-primary btn-style">Get started</Link>
                                                    </div>
                                                </Card.Body>
                                            </div>
                                        </Col>
                                        <Col md={4} className="px-2">
                                            <div className="mb-4 price-card price-card3 p-lg-4 p-md-3 p-4">
                                                <Card.Header className="p-0 card-heading">
                                                    <h4 className="mb-4">Premium</h4>
                                                </Card.Header>
                                                <Card.Body className="p-0">
                                                    <h1 className="card-title pricing-card-title my-price-title">$199<small
                                                        className="text-dull">/month</small>
                                                    </h1>
                                                    <p>There are many variations of passages of Lorem Ipsum available.</p>
                                                    <ul className="list-unstyled list-pricing mt-3 mb-4">
                                                        <li>30 Domain</li>
                                                        <li>30 users included</li>
                                                        <li>15 GB of storage</li>
                                                        <li>Phone and email support</li>
                                                        <li>Help center access</li>
                                                    </ul>
                                                    <div className="mt-4">
                                                        <Link to={'#'} className="btn btn-lg btn-outline-primary btn-style border-btn">Contact us</Link>
                                                    </div>
                                                </Card.Body>
                                            </div>
                                        </Col>
                                    </Row>
                                </section>
                            </Card.Body>
                        </Card>

                        {/* <!--BLOCK ROW START--> */}

                        {/* <!-- //pricing version 1 --> */}

                        {/* <!-- pricing version 2 --> */}
                        <div className="pricing-version-2">
                            <Card className="card_border mb-5">
                                <div className="cards__heading">
                                    <h3>Pricing Tables -<span> Version 2</span></h3>
                                </div>
                                <Card.Body>
                                    <Row className="px-2">
                                        {/* <!-- Table #1  --> */}
                                        <Col lg={4} md={6} className="px-2 mb-4">
                                            <Card className="text-center card__hover">
                                                <Card.Header>
                                                    <h3 className="display-4"><span className="currency">$</span>19<span className="period">/month</span></h3>
                                                </Card.Header>
                                                <div className="card-block">
                                                    <h4 className="card-title">
                                                        Basic Plan
                                                    </h4>
                                                    <ListGroup>
                                                        <ListGroup.Item>1 Domain</ListGroup.Item>
                                                        <ListGroup.Item>Ultimate Features</ListGroup.Item>
                                                        <ListGroup.Item>Responsive Ready</ListGroup.Item>
                                                        <ListGroup.Item>Editor Ready Builder</ListGroup.Item>
                                                        <ListGroup.Item>Limited UI Blocks</ListGroup.Item>
                                                        <ListGroup.Item>24/7 Support System</ListGroup.Item>
                                                    </ListGroup>
                                                    <Link to={'#'} className="btn btn-style btn-primary mt-4">Choose Plan</Link>
                                                </div>
                                            </Card>
                                        </Col>

                                        {/* <!-- Table #2  --> */}
                                        <Col lg={4} md={6} className="px-2 mb-4">
                                            <Card className="text-center card__hover">
                                                <Card.Header>
                                                    <h3 className="display-4"><span className="currency">$</span>29<span className="period">/month</span></h3>
                                                </Card.Header>
                                                <div className="card-block">
                                                    <h4 className="card-title">
                                                        Regular Plan
                                                    </h4>
                                                    <ListGroup>
                                                        <ListGroup.Item>10 Domain</ListGroup.Item>
                                                        <ListGroup.Item>Ultimate Features</ListGroup.Item>
                                                        <ListGroup.Item>Responsive Ready</ListGroup.Item>
                                                        <ListGroup.Item>Editor Ready Builder</ListGroup.Item>
                                                        <ListGroup.Item>Unlimited UI Blocks</ListGroup.Item>
                                                        <ListGroup.Item>24/7 Support System</ListGroup.Item>
                                                    </ListGroup>
                                                    <Link to={'#'} className="btn btn-style btn-primary mt-4">Choose Plan</Link>
                                                </div>
                                            </Card>
                                        </Col>

                                        {/* <!-- Table #3  --> */}
                                        <Col lg={4} md={6} className="px-2 mb-4">
                                            <Card className="text-center card__hover">
                                                <Card.Header>
                                                    <h3 className="display-4"><span className="currency">$</span>39<span className="period">/month</span></h3>
                                                </Card.Header>
                                                <div className="card-block">
                                                    <h4 className="card-title">
                                                        Premium Plan
                                                    </h4>
                                                    <ListGroup>
                                                        <ListGroup.Item>15 Domain</ListGroup.Item>
                                                        <ListGroup.Item>Ultimate Features</ListGroup.Item>
                                                        <ListGroup.Item>Responsive Ready</ListGroup.Item>
                                                        <ListGroup.Item>Editor Ready Builder</ListGroup.Item>
                                                        <ListGroup.Item>Unlimited UI Blocks</ListGroup.Item>
                                                        <ListGroup.Item>24/7 Support System</ListGroup.Item>
                                                    </ListGroup>
                                                    <Link to={'#'} className="btn btn-style btn-primary mt-4">Choose Plan</Link>
                                                </div>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </div>
                        {/* <!-- //pricing version 2 --> */}
                    </section>
                    {/* <!-- //pricing --> */}

                </Container>
                {/* <!-- //content --> */}

            </div>
            {/* <!-- main content end--> */}
        </>
    )
}

export default Pricing
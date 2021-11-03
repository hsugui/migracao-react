import React from 'react';
import { Link } from "react-router-dom";
import { Container, Breadcrumb, Nav, Row, Col, Card } from 'react-bootstrap';
import '../../assets/css/style.css';
import Cart from "../../assets/images/cart.jpg";
import Template2 from "../../assets/images/template2.jpg";
import Dashboard from "../../assets/images/dashboard.jpg";
import Desk from "../../assets/images/desk.jpg";

function Cards(props) {

    return (
        <>
            {/* <!-- main content start --> */}
            <div className="main-content">
                {/* <!-- content --> */}
                <Container fluid classNameName="content-top-gap">
                    {/* <!-- breadcrumbs --> */}
                    <Nav aria-label="breadcrumb" className="mb-4">
                        <Breadcrumb className="my-breadcrumb">
                            <Breadcrumb.Item><Link to={'/index'}>Home</Link></Breadcrumb.Item>
                            <Breadcrumb.Item><Link to={'#'}>Elements</Link></Breadcrumb.Item>
                            <Breadcrumb.Item className="active" aria-current="page">Cards</Breadcrumb.Item>
                        </Breadcrumb>
                    </Nav>
                    {/* <!-- //breadcrumbs --> */}
                    {/* <!-- cards --> */}
                    <section className="template-cards">
                        {/* <!-- Card Columns --> */}
                        <Card className="card_border mb-5">
                            <div className="cards__heading">
                                <h3>Card Columns</h3>
                            </div>
                            <Card.Body>
                                <div class="card-columns">
                                    <Card>
                                        <img src={Cart} className="card-img-top" alt="..." />
                                        <Card.Body>
                                        <h5 className ="card-title">Card title that wraps to a new line</h5>
                                        <p className ="card-text mb-4">This is a longer card with supporting text below as a natural lead-in to
                                        additional content.This content is a little bit longer.</p>
                                        </Card.Body>
                                    </Card>
                                    <Card className="p-3">
                                        <blockquote className="blockquote mb-0 card-body">
                                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                                                ante.
                                            </p>
                                            <footer className="blockquote-footer">
                                                <small className="text-muted">
                                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                                </small>
                                            </footer>
                                        </blockquote>
                                    </Card>
                                    <Card>
                                        <img src={Template2} className="card-img-top" alt="..." />
                                        <Card.Body>
                                        <h5 className ="card-title">Card title</h5>
                                        <p className ="card-text  mb-4">This card has supporting text below as a natural lead-in to additional
                                        content.
                                        </p>
                                        <p className ="card-text"><small className ="text-muted">Last updated 3 mins ago</small></p>
                                        </Card.Body>
                                    </Card>
                                    <Card className="bg-primary text-white text-center p-3">
                                        <blockquote className="blockquote mb-0">
                                            <p className="text-white mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                                erat.
                                            </p>
                                            <footer className="blockquote-footer text-white">
                                                <small>
                                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                                </small>
                                            </footer>
                                        </blockquote>
                                    </Card>
                                    <Card className="text-center">
                                        <Card.Body>
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text  mb-4">This card has a regular title and short paragraphy of text below it.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <img src={Dashboard} className="card-img-top" alt="..." />
                                    </Card>
                                    <Card className="p-3 text-right">
                                        <blockquote className="blockquote mb-0">
                                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                                                ante.
                                            </p>
                                            <footer className="blockquote-footer">
                                                <small className="text-muted">
                                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                                </small>
                                            </footer>
                                        </blockquote>
                                    </Card>
                                    <Card>
                                        <Card.Body>
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text  mb-4">This is another card with title and supporting text below. This card has
                                                some
                                                additional content to make it slightly taller overall.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Card.Body>
                        </Card>
                        {/* <!-- /Card Columns --> */}

                        {/* <!-- Grid Columns --> */}
                        <Card className="card_border mb-5">
                            <div className="cards__heading">
                                <h3>Grid Columns</h3>
                            </div>
                            <Card.Body>
                                <Row className="row-cols-1 row-cols-md-2">
                                    <Col className="mb-4">
                                        <Card>
                                            <img src={Template2} className="card-img-top" alt="..." />
                                            <Card.Body>
                                            <h5 className ="card-title">Card title</h5>
                                            <p className ="card-text">This is a longer card with supporting text below as a natural lead-in to
                                            additional
                                            content.This content is a little bit longer.</p>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col className="mb-4">
                                        <Card>
                                            <img src={Desk} className="card-img-top" alt="..." />
                                            <Card.Body>
                                            <h5 className ="card-title">Card title</h5>
                                            <p className ="card-text">This is a longer card with supporting text below as a natural lead-in to
                                            additional
                                            content.This content is a little bit longer.</p>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col className="mb-4">
                                        <Card>
                                            <img src={Cart} className="card-img-top" alt="..." />
                                            <Card.Body>
                                            <h5 className ="card-title">Card title</h5>
                                            <p className ="card-text">This is a longer card with supporting text below as a natural lead-in to
                                            additional
                                            content.</p>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col className="mb-4">
                                        <Card>
                                            <img src={Dashboard} className="card-img-top" alt="..." />
                                            <Card.Body>
                                            <h5 className ="card-title">Card title</h5>
                                            <p className ="card-text">This is a longer card with supporting text below as a natural lead-in to
                                            additional
                                            content.This content is a little bit longer.</p>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        {/* <!-- /Grid Columns --> */}

                    </section>
                    {/* <!-- //cards --> */}

                </Container>
                {/* <!-- //content --> */}
            </div>
            {/* <!-- main content end--> */}
        </>
    )
}

export default Cards
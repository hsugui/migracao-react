import React from 'react'
import { Container, Breadcrumb, Nav, Row, Col, Card } from 'react-bootstrap';
import '../../assets/css/style.css';

function Index(props) {

    return (
        <>
            {/* <!-- main content start --> */}
            <div className="main-content">

                {/* <!-- content --> */}
                <Container fluid className="content-top-gap">

                    <Nav aria-label="breadcrumb">
                        <Breadcrumb className="my-breadcrumb">
                            <Breadcrumb.Item className=""><a href="index.html">Home</a></Breadcrumb.Item>
                            <Breadcrumb.Item className="active" aria-current="page">Dashboard</Breadcrumb.Item>
                        </Breadcrumb>
                    </Nav>
                    <div className="welcome-msg pt-3 pb-4">
                        <h1>Hi <span className="text-primary">John</span>, Welcome back</h1>
                        <p>Very detailed & featured admin.</p>
                    </div>

                    {/* <!-- statistics data --> */}
                    <div className="statistics">
                        <Row>
                            <Col xl={6} className="pr-xl-2">
                                <Row>
                                    <Col sm={6} className="pr-sm-2 statistics-grid">
                                        <Card className="card_border border-primary-top p-4">
                                            <i className="lnr lnr-users"> </i>
                                            <h3 className="text-primary number">29.75 M</h3>
                                            <p className="stat-text">Total Users</p>
                                        </Card>
                                    </Col>
                                    <Col sm={6} className="pl-sm-2 statistics-grid">
                                        <Card className="card_border border-primary-top p-4">
                                            <i className="lnr lnr-eye"> </i>
                                            <h3 className="text-secondary number">51.25 K</h3>
                                            <p className="stat-text">Daily Visitors</p>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                            <div className="col-xl-6 pl-xl-2">
                                <Row>
                                    <Col sm={6} className="pr-sm-2 statistics-grid">
                                        <Card className="card_border border-primary-top p-4">
                                            <i className="lnr lnr-cloud-download"> </i>
                                            <h3 className="text-success number">166.89 M</h3>
                                            <p className="stat-text">Downloads</p>
                                        </Card>
                                    </Col>
                                    <Col sm={6} className="pl-sm-2 statistics-grid">
                                        <Card className="card_border border-primary-top p-4">
                                            <i className="lnr lnr-cart"> </i>
                                            <h3 className="text-danger number">1,250k</h3>
                                            <p className="stat-text">Purchased</p>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>
                        </Row>
                    </div>
                    {/* <!-- //statistics data --> */}

                    {/* <!-- charts --> */}
                    <div className="chart">
                        <Row>
                            <Col lg={6} className="pr-lg-2 chart-grid">
                                <Card className="text-center card_border">
                                    <Card.Header className="chart-grid__header">
                                        Bar Chart
                                    </Card.Header>
                                    <Card.Body>
                                        {/* <!-- bar chart --> */}
                                        <div id="container">
                                            <canvas id="barchart"></canvas>
                                        </div>
                                        {/* <!-- //bar chart --> */}
                                    </Card.Body>
                                    <Card.Footer className="text-muted chart-grid__footer">
                                        Updated 2 hours ago
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col lg={6} className="pl-lg-2 chart-grid">
                                <Card className="text-center card_border">
                                    <Card.Header className="chart-grid__header">
                                        Line Chart
                                    </Card.Header>
                                    <Card.Body>
                                        {/* <!-- line chart --> */}
                                        <div id="container">
                                            <canvas id="linechart"></canvas>
                                        </div>
                                        {/* <!-- //line chart --> */}
                                    </Card.Body>
                                    <Card.Footer className="text-muted chart-grid__footer">
                                        Updated just now
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                    {/* <!-- //charts --> */}

                </Container>
                {/* <!-- //content --> */}
            </div>
            {/* <!-- main content end--> */}
        </>
    )
}

export default Index
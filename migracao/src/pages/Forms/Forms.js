import React from 'react'
import { Container, Breadcrumb, Nav, Card, Form } from 'react-bootstrap';
import '../../assets/css/style.css';

function Forms(props) {
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
                            <Breadcrumb.Item className="active" aria-current="page">Forms</Breadcrumb.Item>
                        </Breadcrumb>
                    </Nav>
                    {/* <!-- //breadcrumbs --> */}
                    {/* <!-- forms --> */}
                    <section className="forms">
                        {/* <!-- forms 1 --> */}
                        <Card className="card_border py-2 mb-4">
                            <div className="cards__heading">
                                <h3>Forms <span></span></h3>
                            </div>
                            <Card.Body>
                                <Form action="#" method="post">
                                    <Form.Group className="mb-3">
                                        <Form.Label for="exampleInputEmail1" className="input__label">Email address</Form.Label>
                                        <Form.Control type="email" className="input-style" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="Enter email" />
                                        <small id="emailHelp" className ="form-text text-muted">We'll never share your email with
                                        anyone else.</small>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label for="exampleInputPassword1" className="input__label">Password</Form.Label>
                                        <Form.Control type="password" className="input-style" id="exampleInputPassword1"
                                            placeholder="Password" />
                                    </Form.Group>
                                    <Form.Check className="check-remember check-me-out">
                                        <Form.Control type="checkbox" className="form-check-input checkbox" id="exampleCheck1" />
                                        <Form.Label className ="form-check-label checkmark" for="exampleCheck1">Check me out</Form.Label>
                                    </Form.Check>
                                    <button type="submit" className="btn btn-primary btn-style mt-4">Submit</button>
                                </Form>
                            </Card.Body>
                        </Card>
                        {/* <!-- //forms 1 --> */}

                        {/* <!-- forms 2 --> */}
                        <Card className="card_border py-2 mb-4">
                            <Card.Body>
                                <Form action="#" method="post">
                                    <div className="form-row">
                                        <Form.Group className="col-md-6 mb-3">
                                            <Form.Label for="inputEmail4" className="input__label">Email</Form.Label>
                                            <Form.Control type="email" className="input-style" id="inputEmail4" placeholder="Email" />
                                        </Form.Group>
                                        <Form.Group className="col-md-6 mb-3">
                                            <Form.Label for="inputPassword4" className="input__label">Password</Form.Label>
                                            <Form.Control type="password" className="input-style" id="inputPassword4" placeholder="Password" />
                                        </Form.Group>
                                    </div>
                                    <Form.Group className="mb-3">
                                        <Form.Label for="inputAddress" className="input__label">Address</Form.Label>
                                        <Form.Control type="text" className="input-style" id="inputAddress" placeholder="1234 Main St" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label for="inputAddress2" className="input__label">Address 2</Form.Label>
                                        <Form.Control type="text" className="input-style" id="inputAddress2"
                                            placeholder="Apartment, studio, or floor" />
                                    </Form.Group>
                                    <div className="form-row mb-3">
                                        <Form.Group className="col-md-6">
                                            <Form.Label for="inputCity" className="input__label">City</Form.Label>
                                            <Form.Control type="text" className="input-style" id="inputCity" />
                                        </Form.Group>
                                        <Form.Group className="col-md-4 mb-3">
                                            <Form.Label for="inputState" className="input__label">State</Form.Label>
                                            <Form.Select id="inputState" className="form-control input-style">
                                                <option selected>Choose...</option>
                                                <option>...</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group className="col-md-2 mb-3">
                                            <Form.Label for="inputZip" className="input__label">Zip</Form.Label>
                                            <Form.Control type="text" className="input-style" id="inputZip" />
                                        </Form.Group>
                                    </div>
                                    <Form.Check className="form-check check-remember check-me-out">
                                        <Form.Control className="form-check-input checkbox" type="checkbox" id="gridCheck" />
                                        <Form.Label className ="form-check-label checkmark" for="gridCheck">
                                        Check me out
                                        </Form.Label>
                                    </Form.Check>
                                    <button type="submit" className="btn btn-primary btn-style mt-4">Sign in</button>
                                </Form>
                            </Card.Body>
                        </Card>
                        {/* <!-- //forms 2 --> */}
                    </section>
                    {/* <!-- //forms  --> */}

                </Container>
                {/* <!-- //content --> */}

            </div>
            {/* <!-- main content end--> */}
        </>
    )
}

export default Forms
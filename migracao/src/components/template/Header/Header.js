import React from 'react'
import '../../../assets/css/style.css';
import Profile from '../../../assets/images/profileimg.jpg'
import { Nav, Navbar, Container, NavDropdown, Form, ListGroup, Button } from 'react-bootstrap';

function Header(props) {

    return (
        <>
            <div className="header sticky-header">
                <div className="menu-right">
                    <Nav className="user-panel-top mt-2 py-1">
                        <div className="search-box">
                            <Form action="#search-results.html" method="get">
                                <Form.Control className="search-input" placeholder="Search Here..." type="search" id="search" />
                                <Button className="search-submit" value=""><span className="fa fa-search"></span></Button>
                            </Form>
                        </div>
                        <div className="profile_details mx-4">
                            <ListGroup>
                                <ListGroup.Item className="profile_details_drop profile_imagem_custom">
                                    <div className="profile_img">
                                        <img src={Profile} className="rounded-circle" alt="" />
                                        <div className="user-active">
                                            <span></span>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </div>
                    </Nav>
                </div>
            </div>
        </>
    )
}

export default Header
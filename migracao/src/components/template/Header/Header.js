import React from 'react'
import { Form, Button, Nav, ListGroup } from 'react-bootstrap';
import '../../../assets/css/style.css';
import Profile from '../../../assets/images/profileimg.jpg'

function Header(props) {

    return (
        <>
            <div className="header sticky-header">
                <div className="menu-right">
                    <Nav className="user-panel-top">
                        <div className="search-box">
                            <Form action="#search-results.html" method="get">
                                <Form.Control className="search-input" placeholder="Search Here..." type="search" id="search" />
                                <Button className="search-submit" value=""><span className="fa fa-search"></span></Button>
                            </Form>
                        </div>
                        <div className="profile_details">
                            <ListGroup>
                                <ListGroup.Item className="dropdown profile_details_drop">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" id="dropdownMenu3" aria-haspopup="true"
                                        aria-expanded="false">
                                        <div className="profile_img">
                                            <img src={Profile} className="rounded-circle" alt="" />
                                            <div className="user-active">
                                                <span></span>
                                            </div>
                                        </div>
                                    </a>
                                    <ListGroup className="dropdown-menu drp-mnu" aria-labelledby="dropdownMenu3">
                                        <ListGroup.Item className="user-info">
                                            <h5 className="user-name">John Deo</h5>
                                            <span className="status ml-2">Available</span>
                                        </ListGroup.Item>
                                        <ListGroup.Item> <a href="#"><i className="lnr lnr-user"></i>My Profile</a> </ListGroup.Item>
                                        <ListGroup.Item> <a href="#"><i className="lnr lnr-users"></i>1k Followers</a> </ListGroup.Item>
                                        <ListGroup.Item> <a href="#"><i className="lnr lnr-cog"></i>Setting</a> </ListGroup.Item>
                                        <ListGroup.Item> <a href="#"><i className="lnr lnr-heart"></i>100 Likes</a> </ListGroup.Item>
                                        <ListGroup.Item className="logout"> <a href="#sign-up.html"><i className="fa fa-power-off"></i> Logout</a> </ListGroup.Item>
                                    </ListGroup>
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
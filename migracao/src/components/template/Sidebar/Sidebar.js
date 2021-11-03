import React from 'react'
import { ListGroup } from 'react-bootstrap';
import '../../../assets/css/style.css';
import Logo from '../../../assets/images/logo.png';

function Sidebar(props) {

    return (
        <>
            <section>
                {/* <!-- sidebar menu start --> */}
                <div class="sidebar-menu sticky-sidebar-menu">

                    {/* <!-- logo start --> */}
                    <div class="logo">
                        <h1><a href="">Collective</a></h1>
                    </div>

                    {/* <!-- //image logo --> */}
                    <div class="logo-icon text-center">
                        <a href="index.html" title="logo"><img src={Logo} alt="logo-icon" /> </a>
                    </div>
                    {/* <!-- //logo end --> */}

                    <div class="sidebar-menu-inner">

                        {/* <!-- sidebar nav start --> */}
                        <ListGroup class="nav nav-pills nav-stacked custom-nav">
                            <ListGroup.Item><a href="index"><i class="fa fa-tachometer"></i><span> Dashboard</span></a></ListGroup.Item>
                            <ListGroup.Item><a href="cards"><i class="fa fa-cogs"></i> <span>Default cards</span></a></ListGroup.Item>
                            <ListGroup.Item><a href="pricing"><i class="fa fa-table"></i> <span>Pricing tables</span></a></ListGroup.Item>
                            <ListGroup.Item><a href="blocks"><i class="fa fa-th"></i> <span>Content blocks</span></a></ListGroup.Item>
                            <ListGroup.Item><a href="forms"><i class="fa fa-file-text"></i> <span>Forms</span></a></ListGroup.Item>
                        </ListGroup>
                        {/* <!-- //sidebar nav end --> */}
                        {/* <!-- toggle button start --> */}
                        <a class="toggle-btn" onclick="toggleMenu()">
                            <i class="fa fa-angle-double-left menu-collapsed__left"><span>Collapse Sidebar</span></i>
                            <i class="fa fa-angle-double-right menu-collapsed__right"></i>
                        </a>
                        {/* <!-- //toggle button end --> */}
                    </div>
                </div>
                {/* <!-- //sidebar menu end --> */}
            </section>
        </>
    )
}

export default Sidebar
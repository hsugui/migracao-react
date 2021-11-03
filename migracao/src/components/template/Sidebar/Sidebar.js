import React from 'react'
import { ListGroup } from 'react-bootstrap';
import '../../../assets/css/style.css';
import Logo from '../../../assets/images/logo.png';
import Toggle from './Toggle';

function toggleMenu() {
    let body = document.querySelector("body");
    let hasCollapsed = body.classList.contains("sidebar-menu-collapsed");
    if(hasCollapsed) {
     body.classList.remove("sidebar-menu-collapsed");
     body.classList.add("noscroll");
    } else {
      body.classList.remove("noscroll");
      body.classList.add("sidebar-menu-collapsed");
    };
  }

function Sidebar(props) {

    return (
        <>
        <body class="sidebar-menu-collapsed">
            <section>
                {/* <!-- sidebar menu start --> */}
                <div class="sidebar-menu sticky-sidebar-menu">

                    {/* <!-- logo start --> */}
                    <div class="logo">
                        <h1><a href="index">Collective</a></h1>
                    </div>

                    {/* <!-- //image logo --> */}
                    <div class="logo-icon text-center">
                        <a href="index" title="logo"><img src={Logo} alt="logo-icon" /> </a>
                    </div>
                    {/* <!-- //logo end --> */}

                    <div class="sidebar-menu-inner">

                        {/* <!-- sidebar nav start --> */}
                        <ul class="nav nav-pills nav-stacked custom-nav">
                            <li><a href="index"><i class="fa fa-tachometer"></i><span> Dashboard</span></a></li>
                            <li><a href="cards"><i class="fa fa-cogs"></i> <span>Default cards</span></a></li>
                            <li><a href="pricing"><i class="fa fa-table"></i> <span>Pricing tables</span></a></li>
                            <li><a href="blocks"><i class="fa fa-th"></i> <span>Content blocks</span></a></li>
                            <li><a href="forms"><i class="fa fa-file-text"></i> <span>Forms</span></a></li>
                        </ul>
                        {/* <!-- //sidebar nav end --> */}
                        {/* <!-- toggle button start --> */}
                        <a class="toggle-btn" onclick={ () => this.toggleMenu()}>
                            <i class="fa fa-angle-double-left menu-collapsed__left"><span>Collapse Sidebar</span></i>
                            <i class="fa fa-angle-double-right menu-collapsed__right"></i>
                        </a>
                        {/* <!-- //toggle button end --> */}
                    </div>
                </div>
                {/* <!-- //sidebar menu end --> */}
            </section>
        </body>
        </>
    )
}

export default Sidebar
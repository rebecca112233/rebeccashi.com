import React from 'react';
import './customnavbar.css';
import {Link} from 'react-scroll';
import {Nav, Navbar, NavbarBrand} from 'react-bootstrap';

export default class CustomNavbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {dropdownOpen: false};
    }

    dropdownOnClick = () => {
        this.setState({
            dropdownOpen: (this.state.dropdownOpen === false) ? true : false
        })
    }

    render(){
        let dropdown_class = this.state.dropdownOpen ? "main-nav": "main-nav-gone";
        return(
            <div id="customNav">
                <span className="navbar-toggle" id="js-navbar-toggle">
                    <i className="fas fa-bars" onClick={this.dropdownOnClick}></i>
                </span>
                <a href="/" className="logo">Rebecca Shi</a>
                <ul className={dropdown_class} id="js-menu">
                    <li><a href="/about" className="nav-links">About</a></li>
                    <li><a href="/resume" className="nav-links">Resume</a></li>
                    <li><a href="#" className="nav-links">Portfolio</a></li>
                </ul>
            </div>
        )
    }
}
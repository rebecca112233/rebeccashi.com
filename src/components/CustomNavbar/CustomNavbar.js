import React from 'react';
import './navbar.css';
import {Link} from 'react-scroll';

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
                <Link to="home" smooth={true}><a className="logo">Rebecca Shi</a></Link>
                <ul className={dropdown_class} id="js-menu">
                    <Link to="about" smooth={true}><li className="nav-links">About</li></Link>
                    <Link to="resume" smooth={true}><li className="nav-links">Resume</li></Link>
                    <li className="nav-links">Portfolio</li>
                </ul>
            </div>
        )
    }
}
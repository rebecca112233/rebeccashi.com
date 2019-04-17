import React from 'react';
import './customnavbar.css';

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
        return this.state.dropdownOpen ?
        (
            <div id="customNav">
                <span className="navbar-toggle" id="js-navbar-toggle">
                    <i className="fas fa-bars" onClick={this.dropdownOnClick}></i>
                </span>
                <a href="/" className="logo">Rebecca Shi</a>
                <ul className="main-nav" id="js-menu">
                    {/* <li><a href="/" className="nav-links">Home</a></li> */}
                    <li><a href="/about" className="nav-links">About</a></li>
                    <li><a href="/resume" className="nav-links">Resume</a></li>
                    <li><a href="#" className="nav-links">Portfolio</a></li>
                </ul>
            </div>
        ):
        (
            <div id="customNav">
                <span className="navbar-toggle" id="js-navbar-toggle">
                    <i className="fas fa-bars" onClick={this.dropdownOnClick}></i>
                </span>
                <a href="/" className="logo">Rebecca Shi</a>
                <ul className="main-nav-gone" id="js-menu">
                    {/* <li><a href="/" className="nav-links">Home</a></li> */}
                    <li><a href="/about" className="nav-links">About</a></li>
                    <li><a href="/resume" className="nav-links">Resume</a></li>
                    <li><a href="#" className="nav-links">Portfolio</a></li>
                </ul>
            </div>
        )
    }
    
}
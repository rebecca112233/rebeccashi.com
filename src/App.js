import React from 'react';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap';
import HomePage from './pages/homepage/HomePage';
import AboutPage from './pages/aboutpage/AboutPage';

const App = () => (
  <>
    <div className="App">
      <div id="nav">
        <Navbar fixed="top" bg="dark">
          <Navbar.Brand href="#home">
            Rebecca
          </Navbar.Brand>
          <Nav.Link href="#" style={{color:'white'}}>Home</Nav.Link>
          <Nav.Link href="#" style={{color:'white'}}>About</Nav.Link>
          <Nav.Link href="#" style={{color:'white'}}>Resume</Nav.Link>
          <Nav.Link href="#" style={{color:'white'}}>Portfolio</Nav.Link>
        </Navbar>
      </div>
      <div id="pageWrapper">
        <HomePage />
        <AboutPage />
      </div>
    </div>
  </>
)
export default App;

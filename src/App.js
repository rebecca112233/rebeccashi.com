import React from 'react';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap';
import HomePage from './pages/homepage/homepage';
import AboutPage from './pages/aboutpage/aboutpage';
import CustomNavbar from './components/CustomNavbar/CustomNavbar';

const App = () => (
  <>
    <div className="App">
      <div id="nav">
        <CustomNavbar />
      </div>
      <div id="pageWrapper">
        <HomePage />
        <AboutPage />
      </div>
    </div>
  </>
)
export default App;

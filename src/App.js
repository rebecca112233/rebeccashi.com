import React from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
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

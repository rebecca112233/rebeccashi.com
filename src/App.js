import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import AboutPage from './pages/aboutpage/aboutpage';
import CustomNavbar from './components/CustomNavbar/CustomNavbar';

const App = () => (
  <>
    <div className="App">
      <CustomNavbar />
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
        </div>
      </Router>
    </div>
  </>
)
export default App;

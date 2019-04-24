import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import HomePage from './pages/home/Home';
import AboutPage from './pages/about/About';
import ResumePage from './pages/resume/resume';
import CustomNavbar from './components/CustomNavbar/CustomNavbar';

const App = () => (
  <>
    <div className="App">
      <CustomNavbar />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/resume" component={ResumePage} />
        </Switch>
      </Router>
    </div>
  </>
)
export default App;

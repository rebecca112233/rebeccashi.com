import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import AboutPage from './pages/aboutpage/aboutpage';
import ResumePage from './pages/resumepage/resumepage';
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

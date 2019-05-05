import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Template from './components/Template';
// import Navbar from './components/Navbar';
import Home from './containers/Home';
import CaseStudyOne from './containers/CaseStudyOne';

function App() {
  return (
    <Router>
      <Switch>
        {/* <Template>
          <Navbar />
        </Template> */}
        <Route path="/" exact component={Home} />
        <Route path="/case-study-1" component={CaseStudyOne} />
      </Switch>
    </Router>
  );
}

export default App;
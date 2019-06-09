import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './containers/Home';
import Emapta from './containers/Emapta';
import Zigzag from './containers/Zigzag';
import Filsupport from './containers/Filsupport';

const reload = () => window.location.reload();

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/robots.txt" onEnter={reload} />
        <Route path="/" exact component={Home} />
        <Route path="/job-scope-and-projects/emapta" component={Emapta} />
        <Route path="/job-scope-and-projects/zigzag" component={Zigzag} />
        <Route path="/job-scope-and-projects/filsupport" component={Filsupport} />
      </Switch>
    </Router>
  );
}

export default App;

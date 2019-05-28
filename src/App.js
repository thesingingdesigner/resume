import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './containers/Home';
import Emapta from './containers/Emapta';
import Zigzag from './containers/Zigzag';
import Filsupport from './containers/Filsupport';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/job-scope-and-contributions/emapta" component={Emapta} />
        <Route path="/job-scope-and-contributions/zigzag" component={Zigzag} />
        <Route path="/job-scope-and-contributions/filsupport" component={Filsupport} />
      </Switch>
    </Router>
  );
}

export default App;

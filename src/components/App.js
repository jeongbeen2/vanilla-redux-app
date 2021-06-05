import React from 'react';
import Home from '../route/Home';
import Detail from '../route/Detail';
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home}></Route>
      <Route path="/:id" exact component={Detail}></Route>
    </Router>
  );
}

export default App;

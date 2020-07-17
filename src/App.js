import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import essayForm from './Components/essayForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={essayForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  IndexRoute,
  Switch,
} from "react-router-dom";
import App from './App';
import ViewPage from './Component/viewPage/viewPage';


ReactDOM.render(
  <Router>
    <Switch>
      <Route path exact='/'>
      <App />
      </Route>
      <Route path ='/view-auction'>
      <ViewPage />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);


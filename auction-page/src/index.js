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
import SellAnItem from './Component/sell-an-item/sell-an-item';


ReactDOM.render(
  <Router>
    <Switch>
      <Route path exact='/'>
      <App />
      </Route>
      <Route path ='/view-auction'>
      <ViewPage />
      </Route>
      <Route path ='/sell-an-item'>
      <SellAnItem />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { MuiThemeProvider } from 'material-ui/styles';

import RestaurantMenu from '~/src/pages/customer/restaurant-menu';

// import registerServiceWorker from './registerServiceWorker';
import { theme } from './theme';
import './index.css';

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route path='/brazero' component={RestaurantMenu} />
        <Redirect to="/brazero" />
      </Switch>
    </Router>
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

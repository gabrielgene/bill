import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { MuiThemeProvider } from 'material-ui/styles';

import RestaurantMenu from '~/src/pages/customer/restaurant-menu';

// import registerServiceWorker from './registerServiceWorker';
import { theme } from './theme';
import './index.css';

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <div>
        <Route exact path='/' render={() => <Redirect to="/brazero" />} />
        <Route path='/brazero' component={RestaurantMenu} />
      </div>
    </Router>
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

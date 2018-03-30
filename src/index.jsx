import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MuiThemeProvider } from 'material-ui/styles';

import Home from '~/src/pages/customer/home';

import registerServiceWorker from './registerServiceWorker';
import { apolloClient } from './apollo-client';
import { theme } from './theme';
import './index.css';

const App = () => (
  <MuiThemeProvider theme={theme}>
    <ApolloProvider client={apolloClient}>
      <Router>
        <div>
          <Route path="/" component={Home} />
        </div>
      </Router>
    </ApolloProvider>
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

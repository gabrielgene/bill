import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { MuiThemeProvider } from 'material-ui/styles';

import DefaultRoute from '~/src/routes/default';
import Home from '~/src/pages/customer/home';
import SearchPage from '~/src/pages/customer/search';

import registerServiceWorker from './registerServiceWorker';
import { apolloClient } from './apollo-client';
import { theme } from './theme';
import './index.css';

const App = () => (
  <MuiThemeProvider theme={theme}>
    <ApolloProvider client={apolloClient}>
      <Router>
        <Switch>
          <DefaultRoute path="/search" component={SearchPage} />
          <DefaultRoute path="/" component={Home} />
        </Switch>
      </Router>
    </ApolloProvider>
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

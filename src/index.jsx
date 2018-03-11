import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';

import registerServiceWorker from './registerServiceWorker';

import WalterHome from './pages/waiter/home';
import PendingOrders from './pages/waiter/pending-orders';
import Notifications from './pages/waiter/notifications';
import './index.css';

const theme = createMuiTheme({
  palette: {
    primary: { main: purple[500] },
    secondary: { main: green[200] },
  },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <div>
        <Route exact path="/" component={WalterHome} />
        <Route path="/pedidos-pendentes" component={PendingOrders} />
        <Route path="/notificacoes" component={Notifications} />
      </div>
    </Router>

  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

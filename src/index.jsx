import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';

import registerServiceWorker from './registerServiceWorker';

import Tables from './pages/waiter/tables';
import PendingOrders from './pages/waiter/pending-orders';
import Notifications from './pages/waiter/notifications';
import TablePage from './pages/waiter/table';
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
        <Route exact path="/" component={Tables} />
        <Route path="/pedidos-pendentes" component={PendingOrders} />
        <Route path="/notificacoes" component={Notifications} />
        <Route path="/mesas/:name" component={TablePage} exact />
      </div>
    </Router>
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

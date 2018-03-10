import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

import registerServiceWorker from './registerServiceWorker';

import WalterHome from './pages/waiter/home';
import PendingOrders from './pages/waiter/pending-orders';
import Notifications from './pages/waiter/notifications';
import './index.css';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={WalterHome} />
      <Route path="/pedidos-pendentes" component={PendingOrders} />
      <Route path="/notificacoes" component={Notifications} />
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

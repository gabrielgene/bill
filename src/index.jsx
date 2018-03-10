import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

import registerServiceWorker from './registerServiceWorker';

import WalterHome from './pages/waiter/home';
import ViewTable from './pages/waiter/view-table';
import Notifications from './pages/waiter/notifications';
import ProductMenu from './pages/waiter/product-menu';
import PendingOrders from './pages/waiter/pending-orders';
import './index.css';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={WalterHome} />
      <Route path="/pedidos-pendentes" component={PendingOrders} />
      <Route path="/notificacoes" component={Notifications} />
      <Route path="/visualizar/:table_name" component={ViewTable} exact />
      <Route path="/visualizar/:table_name/menu" component={ProductMenu} />
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

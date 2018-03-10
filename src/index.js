import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";

import WalterHome from './pages/waiter/home';
import AllOrders from './pages/waiter/all-orders';
import ViewTable from './pages/waiter/view-table';
import Notifications from './pages/waiter/notifications';
import ProductMenu from './pages/waiter/product-menu';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={WalterHome} />
      <Route path="/todos-pedidos" component={AllOrders} />
      <Route path="/notificacoes" component={Notifications} />
      <Route path="/visualizar/:table_name" component={ViewTable} exact />
      <Route path="/visualizar/:table_name/menu" component={ProductMenu} />
    </div>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

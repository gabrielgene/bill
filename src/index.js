import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";

import WalterHome from './pages/waiter/home';
import AllOrders from './pages/waiter/all-orders';
import ViewTable from './pages/waiter/view-table';
import Notifications from './pages/waiter/notifications';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={WalterHome} />
      <Route path="/todos-pedidos" component={AllOrders} />
      <Route path="/notificacoes" component={Notifications} />
      <Route path="/adicionar-pedido/:table_name" component={ViewTable} />
    </div>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
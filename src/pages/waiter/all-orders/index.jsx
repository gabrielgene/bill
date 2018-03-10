import React, { Component } from 'react';
import TopBar from '../../../components/topbar';
import BottomBar from '../../../components/bottom-bar';


class AllOrders extends Component {

  render() {
    return (
      <div>
        <TopBar title="Todos Pedidos" />
        <h1>Todos os pedidos aqui</h1>
        <BottomBar />
      </div>
    )
  }
}

export default AllOrders;

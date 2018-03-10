import React, { Component } from 'react';
import TopBar from '../../../components/topbar';
import BottomBar from '../../../components/bottom-bar';


class Notifications extends Component {

  render() {
    return (
      <div>
        <TopBar title="Notificações" />
        <h1>Todas as notificações aqui</h1>
        <BottomBar />
      </div>
    )
  }
}

export default Notifications;

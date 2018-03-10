import React, { Component } from 'react';
import SwipeNavigation from '../../../components/swipe-navigation';
import TopBar from '../../../components/topbar';
import BottomBar from '../../../components/bottom-bar';


class Home extends Component {

  render() {
    return (
      <div>
        <TopBar title="Mesas" />
        <SwipeNavigation />
        <BottomBar />
      </div>
    )
  }
}

export default Home;

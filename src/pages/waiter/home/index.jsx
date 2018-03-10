import React from 'react';
import SwipeNavigation from '../../../components/swipe-navigation';
import TopBar from '../../../components/topbar';
import BottomBar from '../../../components/bottom-bar';

const Home = () => (
  <div>
    <TopBar title="Mesas" />
    <SwipeNavigation />
    <BottomBar />
  </div>
)

export default Home;

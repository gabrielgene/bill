import React from 'react';
import { Route } from 'react-router-dom';

import Banner from '~/src/components/banner';
import RestaurantList from '~/src/components/restaurant-list';
import RestaurantView from '../restaurant-view';

const categories = [
  "5ac9bfe2c19dd239e8a432ee",
];

const Home = () => (
  <div>
    <Banner />
    {categories.map(c => (<RestaurantList key={c} category={c} />))}
    <Route path="/r/:restaurantSlug" component={RestaurantView} />
  </div>
);

export default Home;

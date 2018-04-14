import React from 'react';

import Banner from '~/src/components/banner';
import RestaurantList from '~/src/components/restaurant-list';

import { withIndexStyle } from './styles';

const categories = [
  "5ac9bfe2c19dd239e8a432ee",
];

const Home = ({ classes }) => (
  <div>
    <Banner />
    <div className={classes.root}>
      {categories.map(c => (<RestaurantList key={c} category={c} />))}
    </div>
  </div>
);

export default withIndexStyle(Home);

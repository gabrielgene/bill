import React from 'react';

import Banner from '~/src/components/banner';
import RestaurantList from '~/src/components/restaurant-list';

import { withIndexStyle } from './styles';

const categories = [
  "5ab6d4326e53a53319622baf",
  "5ab6d87bc77a70332cc709e2",
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

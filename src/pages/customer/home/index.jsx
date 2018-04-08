import React from 'react';

import Banner from '~/src/components/banner';
import RestaurantList from '~/src/components/restaurant-list';

const categories = [
  "5ab6d4326e53a53319622baf",
  "5ab6d87bc77a70332cc709e2",
];

const Home = () => (
  <div>
    <Banner />
    {categories.map(c => (<RestaurantList key={c} category={c} />))}
  </div>
);

export default Home;

import React from 'react';

import TopBar from '~/src/components/topbar';
import Banner from '~/src/components/banner';
import RestaurantList from '~/src/components/restaurant-list';
import RestaurantView from '../restaurant-view';

import { withIndexStyle } from './styles';

const categories = [
  "5ab6d4326e53a53319622baf",
  "5ab6d87bc77a70332cc709e2",
];

const Home = ({ classes }) => {
  declare var category;

  return (
    <div className={classes.root}>
      <TopBar title="Bill" />
      <main className={classes.main}>
        <RestaurantView open />
        <Banner />
        <For each="category" of={categories}>
          <RestaurantList key={category.id} category={category} />
        </For>
      </main>
    </div>
  );
};

export default withIndexStyle(Home);

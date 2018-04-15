import React from 'react';
import { compose } from 'recompose';
import { graphql } from 'react-apollo';
import { Route } from 'react-router-dom';

import Banner from '~/src/components/banner';
import RestaurantList from '~/src/components/restaurant-list';
import RestaurantView from '../restaurant-view';
import { queryGetCategories } from './graphql';
import { withIndexStyle } from './styles';

const Home = ({ classes, data: { restaurantCategories } }) => {
  const categories = restaurantCategories || [];

  return (
    <div>
      <Banner />
      <div className={classes.root}>
        {categories.map(({ id }) => (<RestaurantList key={id} category={id} />))}
      </div>
      <Route path="/r/:restaurantSlug" component={RestaurantView} />
    </div>
  );
};

export default compose(
  withIndexStyle,
  graphql(queryGetCategories),
)(Home);

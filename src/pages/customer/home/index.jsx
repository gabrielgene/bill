import React from 'react';
import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import Banner from '~/src/components/banner';
import RestaurantList from '~/src/components/restaurant-list';

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
    </div>
  );
};

export default compose(
  withIndexStyle,
  graphql(queryGetCategories),
)(Home);

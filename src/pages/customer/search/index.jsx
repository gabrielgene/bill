import React from 'react';
import qs from 'query-string';
import { withRouter } from 'react-router';
import { compose } from 'recompose';

import RestaurantList from '~/src/components/restaurant-list';

import { withIndexStyle } from './styles';


const SearchPage = ({ location, classes }) => (
  <div className={classes.root}>
    <RestaurantList query={qs.parse(location.search).q || ''} />
  </div>
);

export default compose(
  withRouter,
  withIndexStyle,
)(SearchPage);

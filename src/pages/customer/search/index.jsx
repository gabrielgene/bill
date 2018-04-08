import React from 'react';
import qs from 'query-string';
import { withRouter } from 'react-router';

import RestaurantList from '~/src/components/restaurant-list';

const SearchPage = ({ location }) => (
  <RestaurantList query={qs.parse(location.search).q || ''} />
);

export default withRouter(SearchPage);

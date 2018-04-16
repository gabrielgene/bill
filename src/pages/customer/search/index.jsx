import React from 'react';
import qs from 'qs';
import { withRouter } from 'react-router';
import { compose } from 'recompose';
import { Icon, Typography } from 'material-ui';
import { Link } from 'react-router-dom';

import RestaurantList from '~/src/components/restaurant-list';

import { withIndexStyle } from './styles';

const SearchPage = ({ location: { search }, classes }) => {
  const query = qs.parse(search.slice(1)).q || '';
  return (
    <div className={classes.root}>
      <Typography variant="body2" component="div" className={classes.category}>
        <div className={classes.searchInfo}>
          <Link className={classes.link} to="/">
            <Icon className={classes.iconSearch}>home</Icon>
          </Link>
          <Icon className={classes.iconSearch}>keyboard_arrow_right</Icon>
          {`Buscando por "${query}"`}
        </div>
      </Typography>
      <RestaurantList query={query} />
    </div>
  );
};

export default compose(
  withRouter,
  withIndexStyle,
)(SearchPage);

import React from 'react';
import { compose } from 'recompose';
import { graphql } from 'react-apollo';
import { get } from 'lodash';
import { GridList, GridListTile, GridListTileBar, Typography } from 'material-ui';

import { queryByCategory } from './graphql';
import { withIndexStyle } from './styles';

const cardHeight = 160;

const RestaurantList = ({ classes, data: { category } }) => (
  <div>
    <Typography variant="title">{get(category, 'name')}</Typography>
    <GridList cellHeight={cardHeight} spacing={4} className={classes.gridList}>
      <For each="restaurant" of={get(category, 'restaurants', [])}>
        <GridListTile classes={{ root: classes.gridListTile }} key={restaurant.id}>
          <img src={restaurant.flyerUrl} alt={restaurant.name} />
          <GridListTileBar
            title={restaurant.name}
            titlePosition="bottom"
            className={classes.titleBar}
          />
        </GridListTile>
      </For>
    </GridList>
  </div>
);

export default compose(
  withIndexStyle,
  graphql(queryByCategory, {
    options: ({ category }) => ({ variables: { category } }),
  }),
)(RestaurantList);

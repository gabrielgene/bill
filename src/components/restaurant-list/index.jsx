import React from 'react';
import { compose } from 'recompose';
import { graphql } from 'react-apollo';
import { get } from 'lodash';
import { GridList, GridListTile, GridListTileBar, Typography } from 'material-ui';

import { queryByCategory, queryByTerm } from './graphql';
import { withIndexStyle } from './styles';

const cardHeight = 160;

const RestaurantList = ({ classes, query, data: { category, restaurants } }) => (
  <div>
    <Typography variant="title">{get(category, 'name', query)}</Typography>
    <GridList cellHeight={cardHeight} spacing={4} className={classes.gridList}>
      <For each="restaurant" of={get(category, 'restaurants', restaurants || [])}>
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
    skip: ({ category }) => !category,
  }),
  graphql(queryByTerm, {
    options: ({ query }) => ({ variables: { term: query }, skip: !query }),
    skip: ({ query }) => !query,
  }),
)(RestaurantList);

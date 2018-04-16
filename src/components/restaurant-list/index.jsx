import React from 'react';
import { compose } from 'recompose';
import { graphql } from 'react-apollo';
import { get } from 'lodash';
import { Icon, Typography } from 'material-ui';
import Card, { CardMedia } from 'material-ui/Card';
import { withRouter } from 'react-router-dom';

import { queryByCategory, queryByTerm } from './graphql';
import { withIndexStyle } from './styles';

const RestaurantList = ({ classes, history, query, data: { restaurantCategory, restaurants } }) => (
  <div>
    <If condition={!query}>
      <Typography variant="title" className={classes.restaurants}>
        {get(restaurantCategory, 'name', query)}
      </Typography>
    </If>

    <div className={classes.root}>
      <For each="restaurant" of={get(restaurantCategory, 'restaurants', restaurants || [])}>
        <Card
          key={restaurant.id}
          className={classes.card}
          onClick={() => history.push(`/r/${restaurant.slug}`)}
        >
          <Typography component="div" variant="title" title={restaurant.name} className={classes.cardTitle}>
            {restaurant.name}
          </Typography>
          <CardMedia
            className={classes.cardMedia}
            image={get(restaurant, 'flyer.url', null)}
          />
          <Typography component="div" className={classes.infoWrapper}>
            <div className={classes.cardInfo} title={restaurant.address}>
              <Icon className={classes.icon}>location_on</Icon>
              <div className={classes.cardInfoAddress}>{restaurant.address}</div>
            </div>
            <div className={classes.cardInfo} title="Horário de funcionamento">
              <Icon className={classes.icon}>access_time</Icon>
              11:00 às 22:00
            </div>
          </Typography>
        </Card>
      </For>
    </div>
  </div>
);

export default compose(
  withIndexStyle,
  withRouter,
  graphql(queryByCategory, {
    options: ({ category }) => ({ variables: { category } }),
    skip: ({ category }) => !category,
  }),
  graphql(queryByTerm, {
    options: ({ query }) => ({ variables: { term: query }, skip: !query }),
    skip: ({ query }) => !query,
  }),
)(RestaurantList);

import React from 'react';
import { compose } from 'recompose';
import { graphql } from 'react-apollo';
import { get } from 'lodash';
import { Icon, Typography } from 'material-ui';
import Card, { CardMedia } from 'material-ui/Card';
import { Link } from 'react-router-dom';

import { queryByCategory, queryByTerm } from './graphql';
import { withIndexStyle } from './styles';

const RestaurantList = ({ classes, query, data: { category, restaurants } }) => (
  <div>
    <Choose>
      <When condition={query}>
        <Typography variant="body2" component="div" className={classes.category}>
          <div className={classes.searchInfo}>
            <Link className={classes.link} to="/">
              <Icon className={classes.iconSearch}>home</Icon>
            </Link>
            <Icon className={classes.iconSearch}>keyboard_arrow_right</Icon>
            {`Buscando por "${get(category, 'name', query)}"`}
          </div>
        </Typography>
      </When>
      <Otherwise>
        <Typography variant="title" className={classes.restaurants}>
          {get(category, 'name', query)}
        </Typography>
      </Otherwise>
    </Choose>

    <div className={classes.root}>
      <For each="restaurant" of={get(category, 'restaurants', restaurants || [])}>
        <Card key={restaurant.id} className={classes.card}>
          <Typography component="div" variant="title" className={classes.title}>
            {restaurant.name}
          </Typography>
          <CardMedia
            className={classes.media}
            image={restaurant.flyerUrl}
          />
          <Typography component="div" className={classes.infoWrapper}>
            <div className={classes.info} title="Localização">
              <Icon className={classes.icon}>location_on</Icon>
              Rua Odilon Santos - Rio Vermelho
            </div>
            <div className={classes.info} title="Horário de funcionamento">
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
  graphql(queryByCategory, {
    options: ({ category }) => ({ variables: { category } }),
    skip: ({ category }) => !category,
  }),
  graphql(queryByTerm, {
    options: ({ query }) => ({ variables: { term: query }, skip: !query }),
    skip: ({ query }) => !query,
  }),
)(RestaurantList);

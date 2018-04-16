import React from 'react';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import { get } from 'lodash';

import { withHeaderStyle } from './styles';

const RestaurantHeader = ({ classes, restaurant }) => (
  <div className={classes.root}>
    <div className={classes.title}>
      <Typography variant="display1" noWrap className={classes.name}>
        {restaurant.name}
      </Typography>
      <For each="category" of={restaurant.categories || []}>
        <Typography variant="headline" className={classes.category}>
          {category.name}
        </Typography>
      </For>
    </div>
    <Avatar
      alt="Imagem do restaurante"
      src={get(restaurant, 'flyer.url')}
      className={classes.avatar}
    />
  </div>
);

export default withHeaderStyle(RestaurantHeader);

import React from 'react';
import { ListItem, ListItemText } from 'material-ui';

import { withMenuItemStyles } from './styles';

const formatCurrency = value => `R$ ${value.toFixed(2).replace('.', ',')}`;

const RestaurantMenuItem = ({ classes, item: { url, name, price, promo } }) => (
  <ListItem>
    <img className={classes.img} src={url} />
    <ListItemText
      primary={name}
      secondary={(
        <span>
          <span className={classes.value}>{formatCurrency(promo || price)}</span>
          <If condition={!!promo}>
            <span className={classes.dash}>{formatCurrency(price)}</span>
          </If>
        </span>
      )}
    />
  </ListItem>
);

export default withMenuItemStyles(RestaurantMenuItem);

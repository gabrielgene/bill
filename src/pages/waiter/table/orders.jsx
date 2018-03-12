import React from 'react';
import Order from '~/src/components/order';
import List from 'material-ui/List';
import { withIndexStyle } from './style';

const Orders = (props) => {
  const { classes, orders, filteredBy } = props;
  return (
    <List className={classes.orders}>
      {
        (filteredBy ? orders.filter(({ status }) => status === filteredBy) : orders)
          .map(props => (<Order key={props.id} {...props} />))
      }
    </List>
  );
};

export default withIndexStyle(Orders);

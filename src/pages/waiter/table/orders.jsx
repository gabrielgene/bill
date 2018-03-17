import React from 'react';
import OrderItem from '~/src/components/order-item';
import List from 'material-ui/List';
import { withIndexStyle } from './styles';


const Orders = ({ orders, filteredBy, classes }) => (
  <List className={classes.orders}>
    {
      (filteredBy ? orders.filter(({ status }) => status === filteredBy) : orders)
        .map(props => (<OrderItem key={props.id} {...props} />))
    }
  </List>
);

export default withIndexStyle(Orders);

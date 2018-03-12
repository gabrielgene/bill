import React from 'react';
import Order from '~/src/components/order';
import List from 'material-ui/List';
import { If } from 'babel-plugin-jsx-control-statements';
import { withIndexStyle } from './style';

const Orders = (props) => {
  const { classes, orders, filteredBy } = props;
  return (
    <If condition={orders !== undefined}>
      <List className={classes.orders}>
        {
          (filteredBy ? orders.filter(({ status }) => status === filteredBy) : orders)
            .map(props => (<Order key={props.id} {...props} />))
        }
      </List>
    </If>
  );
};

export default withIndexStyle(Orders);

import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Icon from 'material-ui/Icon';

const PaymentItem = ({ icon, name, price }) => (
  <ListItem>
    <ListItemIcon>
      <Icon>{icon}</Icon>
    </ListItemIcon>
    <ListItemText primary={name} secondary={`R$ ${price}`} />
  </ListItem>
);

export default PaymentItem;

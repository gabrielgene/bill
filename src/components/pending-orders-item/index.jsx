import React from 'react';
import { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import Button from 'material-ui/Button';
import { withIndexStyle } from './styles';

const PendingOrdersItem = ({ tableName, orderName, classes }) => (
  <ListItem>
    <ListItemText primary={orderName} secondary={tableName} />
    <ListItemSecondaryAction>
      <Button
        variant="raised"
        color="secondary"
        className={classes.button}
      >
        Entregue
      </Button>
    </ListItemSecondaryAction>
  </ListItem>
);

export default withIndexStyle(PendingOrdersItem);

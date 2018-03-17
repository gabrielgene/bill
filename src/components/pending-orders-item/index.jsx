import React from 'react';
import { ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import { withIndexStyle } from './styles';

const PendingOrdersItem = ({ tableName, orderName, classes }) => (
  <ListItem>
    <ListItemIcon>
      <Icon>local_bar</Icon>
    </ListItemIcon>
    <ListItemText primary={orderName} secondary={tableName} />
    <ListItemSecondaryAction>
      <Button
        variant="raised"
        color="primary"
        className={classes.button}
        size="small"
      >
        <Icon>done</Icon>
      </Button>
    </ListItemSecondaryAction>
  </ListItem>
);

export default withIndexStyle(PendingOrdersItem);

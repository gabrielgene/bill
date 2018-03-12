import React from 'react';
import { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { Icon } from 'material-ui'
import { Link } from 'react-router-dom';


const Item = ({ target, itemClass, avatarClass, icon, primaryText, secondaryText, secondaryAction }) => (
  <ListItem component={Link} to={target} className={itemClass}>

    <Avatar className={avatarClass}>
      <Icon>{icon}</Icon>
    </Avatar>

    <ListItemText primary={primaryText} secondary={secondaryText} />

    <ListItemSecondaryAction>
      {secondaryAction}
    </ListItemSecondaryAction>

  </ListItem>
);

export default Item;

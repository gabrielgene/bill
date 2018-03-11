import React from 'react';
import { ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import { Icon } from 'material-ui';

import { withIndexStyle } from './styles';

const statusMap = {
  free: {
    label: 'Livre',
    icon: 'lock_open',
  },
  idle: {
    label: 'Ocupada',
    icon: 'lock',
  },
  waiting: {
    label: 'Aguardando pedidos',
    icon: 'autorenew',
  },
  calling: {
    label: 'Solicitando atenção',
    icon: 'warning',
  },
};

const Table = ({ classes, status, name }) => {
  const lowerCaseStatus = status.toLowerCase();
  const { label, icon } = statusMap[lowerCaseStatus];

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar className={classes[lowerCaseStatus]}>
          <Icon>{icon}</Icon>
        </Avatar>
      </ListItemAvatar>

      <ListItemText
        primary={name}
        secondary={label}
      />

      <ListItemSecondaryAction>
        <IconButton aria-label="Delete">
          <Icon>arrow_right</Icon>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default withIndexStyle(Table);

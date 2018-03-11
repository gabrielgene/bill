import React from 'react';
import { ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
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
    <ListItem component={Link} to={`visualizar/${name}`} className={classNames(classes.root, classes[lowerCaseStatus])}>
      <ListItemAvatar>
        <Avatar className={classes[`${lowerCaseStatus}Avatar`]}>
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

import React from 'react';
import { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import { Icon } from 'material-ui';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
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

const TableItem = (props) => {
  const { name, status, classes } = props;
  const lowerCaseStatus = status.toLowerCase();
  const { icon, label } = statusMap[lowerCaseStatus];

  return (
    <ListItem
      component={Link}
      to={`mesas/${name.toLowerCase()}`}
      className={classNames(classes.root, classes[lowerCaseStatus])}
    >

      <Avatar className={classes[`${lowerCaseStatus}Avatar`]}>
        <Icon>{icon}</Icon>
      </Avatar>

      <ListItemText primary={name} secondary={label} />

      <ListItemSecondaryAction>
        <IconButton aria-label="Open">
          <Icon>arrow_right</Icon>
        </IconButton>
      </ListItemSecondaryAction>

    </ListItem >
  );
};

export default withIndexStyle(TableItem);

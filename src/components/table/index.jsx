import React from 'react';
import classNames from 'classnames';
import List, { ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import LockOpenIcon from 'material-ui-icons/LockOpen';
import LockOutlineIcon from 'material-ui-icons/LockOutline';
import WarningIcon from 'material-ui-icons/Warning';
import AutorenewIcon from 'material-ui-icons/Autorenew';
import ArrowRightIcon from 'material-ui-icons/KeyboardArrowRight';
import IconButton from 'material-ui/IconButton';

import { withIndexStyle } from './styles';

const statusText = {
  open: {
    text: 'Aberta',
    icon: <LockOpenIcon />,
  },
  closed: {
    text: 'Fechada',
    icon: <LockOutlineIcon />,
  },
  waiting: {
    text: 'Aguardando',
    icon: <AutorenewIcon />,
  },
  calling: {
    text: 'Chamando',
    icon: <WarningIcon />,
  },
};

const Table = ({ classes, status, name }) => {
  const statusBorderClass = status.toLowerCase();
  const statusColorClass = statusBorderClass + 'Color';
  return (
    <div className={classNames(classes.root, classes[statusBorderClass])}>
      <List dense={false} >
        <ListItem >
          <ListItemAvatar>
            <Avatar>
              {statusText[statusBorderClass].icon}
            </Avatar>
          </ListItemAvatar>

          <ListItemText
            primary={name}
            secondary={statusText[statusBorderClass].text}
            classes={{ secondary: classes[statusColorClass] }}
          />

          <ListItemSecondaryAction>
            <IconButton aria-label="Delete">
              <ArrowRightIcon />
            </IconButton>
          </ListItemSecondaryAction>

          <ListItemSecondaryAction>
            <IconButton aria-label="Delete">
              <ArrowRightIcon />
            </IconButton>
          </ListItemSecondaryAction>

        </ListItem>
      </List>
    </div>
  );
};

export default withIndexStyle(Table);

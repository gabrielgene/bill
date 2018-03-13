import React from 'react';
import classNames from 'classnames';
import { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Checkbox from 'material-ui/Checkbox';
import { Icon } from 'material-ui';
import { compose, withStateHandlers } from 'recompose';
import { categories, getDataByName } from '~/src/utils/fakeData';
import { orderStatusLabel } from '~/src/utils/mappings';
import { withIndexStyle } from './style';

const Order = ({ classes, name, status, category, setStatus }) => {
  const lowerCaseStatus = status.toLowerCase();
  const categoryData = getDataByName(category, categories);

  return (
    <ListItem className={classNames(classes.root, classes[lowerCaseStatus])}>
      <Avatar className={classes[`${lowerCaseStatus}Avatar`]}>
        <Icon>{categoryData.icon}</Icon>
      </Avatar>
      <ListItemText primary={name} secondary={orderStatusLabel[status]} />

      <ListItemSecondaryAction>
        <Checkbox
          onChange={setStatus}
          checked={status === 'DELIVERED'}
          value={status === 'DELIVERED' ? 'PENDING' : 'DELIVERED'}
        />
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default compose(
  withIndexStyle,
  withStateHandlers(
    ({ status }) => ({ status }),
    { setStatus: () => e => ({ status: e.target.value }) },
  ),
)(Order);

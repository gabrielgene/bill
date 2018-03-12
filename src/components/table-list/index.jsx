import React from 'react';
import List from 'material-ui/List';
import classNames from 'classnames';
import Item from '~/src/components/item';
import IconButton from 'material-ui/IconButton';
import { Icon } from 'material-ui';
import { fakeTables } from '~/src/fakeData';

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

// REMIND - Remove filter, fetch the data normalized
const TableList = ({ classes, filteredBy }) => (
  <List className={classes.root}>
    {
      (filteredBy ? fakeTables.filter(({ status }) => status === filteredBy) : fakeTables)
        .map(props => {
          const { name, status } = props;
          const lowerCaseStatus = status.toLowerCase();
          const { icon, label } = statusMap[lowerCaseStatus];

          const target = `mesas/${name.toLowerCase()}`;
          const itemClass = classNames(classes.item, classes[lowerCaseStatus]);
          const avatarClass = classes[`${lowerCaseStatus}Avatar`];
          const primaryText = name;
          const secondText = label;
          const secondaryAction = (
            <IconButton aria-label="Open">
              <Icon>arrow_right</Icon>
            </IconButton>
          );

          const ItemProps = {
            target,
            itemClass,
            icon,
            avatarClass,
            primaryText,
            secondText,
            secondaryAction,
          };

          return (
            <Item key={props.name} {...ItemProps} />
          );
        })
    }
  </List>
);

export default withIndexStyle(TableList);

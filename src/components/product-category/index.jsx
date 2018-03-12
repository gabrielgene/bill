import React from 'react';
import { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Icon from 'material-ui/Icon';
import classNames from 'classnames';

import { withIndexStyle } from './styles';

const ProductCategory = ({ classes, name, icon, color, onSelectCategory }) => (
  <div className={classNames(classes.root, classes[color])}>
    <ListItem
      onClick={onSelectCategory}
      className={classes.button}
      button
    >
      <Icon> {icon} </Icon>
      <ListItemText primary={name} />
      <Icon> keyboard_arrow_right </Icon>
    </ListItem>
    <Divider />
  </div>
);

export default withIndexStyle(ProductCategory);

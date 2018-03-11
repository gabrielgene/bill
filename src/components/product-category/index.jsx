import React from 'react';
import { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Icon from 'material-ui/Icon';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { withIndexStyle } from './styles';

const ProductCategory = ({ classes, name, icon, color }) => (
  <div className={classNames(classes.root, classes[color])}>
    <ListItem
      component={Link}
      to={name}
      className={classNames(classes.button, classes.subheading)}
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
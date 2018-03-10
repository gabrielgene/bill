import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Icon from 'material-ui/Icon';

import FreeBreakfastIcon from 'material-ui-icons/FreeBreakfast';
import { withIndexStyle } from './styles'

const ProductCategory = ({ classes, name, icon }) => (
  <div className={classes.root}>
    <ListItem button>
      <Icon>
        {icon}
      </Icon>
      <ListItemText primary={name} />
      <Icon>
        keyboard_arrow_right
      </Icon>
    </ListItem>
  </div>
)

export default withIndexStyle(ProductCategory);
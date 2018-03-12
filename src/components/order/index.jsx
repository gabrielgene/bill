import React, { Component } from 'react';
import classNames from 'classnames';
import { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Checkbox from 'material-ui/Checkbox';
import { Icon } from 'material-ui';
import autoBind from 'auto-bind';
import { categories, getDataByName } from '~/src/fakeData';
import { withIndexStyle } from './style';

class Order extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      checked: false,
    };
  }

  handleToggle() {
    this.setState({ checked: !this.state.checked });
  }

  render() {
    const { classes, name, status, category } = this.props;
    const { checked } = this.state;

    const lowerCaseStatus = status.toLowerCase();
    const categoryData = getDataByName(category, categories);
    return (
      <ListItem key={name} className={classNames(classes.root, classes[lowerCaseStatus])}>
        <Avatar className={classes[`${lowerCaseStatus}Avatar`]}>
          <Icon>{categoryData.icon}</Icon>
        </Avatar>
        <ListItemText primary={name} secondary={status} />

        <ListItemSecondaryAction>
          <Checkbox
            onChange={this.handleToggle}
            checked={checked}
          />
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

export default withIndexStyle(Order);

import React, { Component } from 'react';
import classNames from 'classnames';
import Order from '~/src/components/order';
import Item from '~/src/components/item';
import autoBind from 'react-autobind';
import List from 'material-ui/List';
import { If } from 'babel-plugin-jsx-control-statements';
import { withIndexStyle } from './style';

class Orders extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      orders: [],
    };
  }

  componentWillMount() {
    this.setState({ orders: this.props.orders });
  }

  render() {
    const { orders } = this.state;
    const { classes, filteredBy } = this.props;
    return (
      <If condition={orders !== undefined}>
        <List className={classes.orders}>
          {
            (filteredBy ? orders.filter(({ status }) => status === filteredBy) : orders)
              .map(props => {
                const { id, name, status, category } = props;
                // const lowerCaseStatus = checked ? 'delivery' : 'pending';
                // const itemClass = classNames(classes.item, classes[])
                const primaryText = name;

                const ItemProps = {
                  // itemClass,
                  // icon,
                  // avatarClass,
                  primaryText,
                  // secondText,
                  // secondaryAction,
                };

                return (
                  <Item key={id} {...ItemProps} />
                );
              })
          }
        </List>
      </If>

    );
  }
}

export default withIndexStyle(Orders);

import React from 'react';
import OrderItem from '~/src/components/order-item';
import List from 'material-ui/List';
import { withIndexStyle } from './style';


const Orders = ({ orders, filteredBy, classes }) => (
  <List className={classes.orders}>
    {
      (filteredBy ? orders.filter(({ status }) => status === filteredBy) : orders)
        .map(props => (<OrderItem key={props.id} {...props} />))
    }
  </List>
);

export default withIndexStyle(Orders);

// render() {
//   const { orders } = this.state;
//   const { classes, filteredBy } = this.props;
//   return (
//     <If condition={orders !== undefined}>
//       <List className={classes.orders}>
//         {
//           (filteredBy ? orders.filter(({ status }) => status === filteredBy) : orders)
//             .map(props => {
//               const { id, name, status, category, check } = props;
//               const lowerCaseStatus = status.toLowerCase();
//               const categoryData = getDataByName(category, categories);

//               const itemClass = classNames(classes.item, classes[lowerCaseStatus]);
//               const icon = categoryData.icon;
//               const primaryText = name;
//               const avatarClass = classes[`${lowerCaseStatus}Avatar`];
//               const secondaryText = mapStatus[status];
//               const secondaryAction = (
//                 <Checkbox
//                   onChange={this.handleToggle}
//                   checked={check}
//                   value={String(id)}
//                 />
//               );

//               const ItemProps = {
//                 itemClass,
//                 icon,
//                 avatarClass,
//                 primaryText,
//                 secondaryText,
//                 secondaryAction,
//               };

//               return (
//                 <Item key={id} {...ItemProps} />
//               );
//             })
//         }
//       </List>
//     </If>

//   );
// }
// }

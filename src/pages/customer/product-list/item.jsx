import React from 'react';
import { ListItem } from 'material-ui/List';
import Typography from 'material-ui/Typography';

import { withItemStyle } from './styles';

const ProductItem = ({ classes, item }) => (
  <ListItem className={classes.root} >
    <Typography variant="title" className={classes.title}> {item.name} nnnn </Typography>
    <Typography variant="subheading" className={classes.description}> {item.description} </Typography>
    <Typography variant="subheading" className={classes.price}> R$ {item.price} </Typography>
  </ListItem>
);

export default withItemStyle(ProductItem);

import React from 'react';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';

import { withIndexStyle } from './styles';

const ProductList = ({ classes, items, itemCategories }) => (
  <List className={classes.root} subheader={<li />}>
    <For each="section" of={itemCategories}>
      <li key={`section-${section.label}`} className={classes.listSection}>
        <ul className={classes.ul}>
          <ListSubheader className={classes.sectionLabel}> <strong> {section.name} </strong> </ListSubheader>
          <Divider className={classes.divider} />
          <For each="product" of={items}>
            <ListItem className={classes.product} key={`item-${section.label}-${product.name}`}>
              <Typography variant="title" className={classes.productTitle}> {product.name} </Typography>
              <Typography variant="subheading" className={classes.productDescription}> {product.description} </Typography>
              <Typography variant="subheading" className={classes.productPrice}> R$ {product.price} </Typography>
            </ListItem>
            <Divider className={classes.divider} />
          </For>
        </ul>
      </li>
    </For>
  </List>
);

export default withIndexStyle(ProductList);

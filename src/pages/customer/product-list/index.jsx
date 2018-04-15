import React from 'react';
import ListSubheader from 'material-ui/List/ListSubheader';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';

import ProductItem from './item';
import { withIndexStyle } from './styles';

const ProductList = ({ classes, itemCategories }) => (
  <List className={classes.root} subheader={<li />}>
    <For each="section" of={itemCategories}>
      <li key={`section-${section.label}`}>
        <ul className={classes.section}>
          <ListSubheader className={classes.sectionName}>
            <strong> {section.name} </strong>
          </ListSubheader>
          <Divider className={classes.divider} />
          <For each="product" of={section.items}>
            <ProductItem item={product} key={`item-${product.name}`} />
            <Divider className={classes.divider} />
          </For>
        </ul>
      </li>
    </For>
  </List>
);

export default withIndexStyle(ProductList);

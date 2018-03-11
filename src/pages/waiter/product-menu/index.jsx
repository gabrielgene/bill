import React from 'react';

import List from 'material-ui/List';
import { withIndexStyle } from './styles';
import ProductCategory from '../../../components/product-category';

const mockProductCategories = [
  {
    name: 'Cervejas',
    icon: 'free_breakfast',
    color: 'orange',
  },
  {
    name: 'Drinks',
    icon: 'local_bar',
    color: 'red',
  },
  {
    name: 'Fast Food',
    icon: 'local_pizza',
    color: 'yellow',
  },
  {
    name: 'Tortas',
    icon: 'pie_chart',
    color: 'green',
  },
  {
    name: 'Sobremesas',
    icon: 'cake',
    color: 'blue',
  },
]

const ProductMenuList = ({ classes }) => (
  // thinking of having a state here that will change on list item
  // selection and render the different product groups, is that alright to do,
  // considering the data fetching?
  <List className={classes.root}>
    <For each="product" of={mockProductCategories} index="idx">
      <ProductCategory key={idx} {...product} />
    </For>
  </List>
);

export default withIndexStyle(ProductMenuList);

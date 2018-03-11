import React from 'react';

import List from 'material-ui/List';
import { withIndexStyle } from './styles';
import ProductCategory from '../../../components/product-category';

const mockProductCategories = [
  {
    name: 'Cervejas',
    icon: 'free_breakfast',
  },
  {
    name: 'Drinks',
    icon: 'local_bar',
  },
  {
    name: 'Fast Food',
    icon: 'local_pizza',
  },
  {
    name: 'Tortas',
    icon: 'pie_chart',
  },
  {
    name: 'Sobremesas',
    icon: 'cake',
  },
]

const ProductMenuList = ({ match, classes }) => (
  // thinking of having a state here that will change on list item
  // selection and render the different product groups, is that alright to do,
  // considering the data fetching?
  <List className={classes.padding}>
    <For each="product" of={mockProductCategories} index="idx">
      <ProductCategory match={match} key={idx} index={idx} name={product.name} icon={product.icon} />
    </For>
  </List>
);

export default withIndexStyle(ProductMenuList);

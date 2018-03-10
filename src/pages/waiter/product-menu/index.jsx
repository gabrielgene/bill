import React, { Component } from 'react';
import classNames from 'classnames';
import TopBar from '../../../components/topbar';

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
    icon: 'local pizza',
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

const ProductMenuList = () => (
  <List>
    <ProductCategory />
  </List>
)

export default withIndexStyle(ProductMenuList);

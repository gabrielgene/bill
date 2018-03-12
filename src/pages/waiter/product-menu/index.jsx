import React from 'react';
import autoBind from 'react-autobind';

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

class ProductMenuList extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      selectedCategory: '',
    };
  }

  onSelectCategory(category) {
    this.setState({
      selectedCategory: category,
    });
  }

  render() {
    const { selectedCategory } = this.state;
    return (
      <Choose>
        <When condition={selectedCategory === 'Cervejas'}>
          <h1> Cervejas </h1>
        </When>
        <When condition={selectedCategory === 'Drinks'}>
          <h1> Drinks </h1>
        </When>
        <When condition={selectedCategory === 'Fast Food'}>
          <h1> Fast Food </h1>
        </When>
        <When condition={selectedCategory === 'Tortas'}>
          <h1> Tortas </h1>
        </When>
        <When condition={selectedCategory === 'Sobremesas'}>
          <h1> Sobremesas </h1>
        </When>
        <Otherwise>
          <List className={this.props.classes.root}>
            <For each="category" of={mockProductCategories} index="idx">
              <ProductCategory
                key={idx}
                onSelectCategory={() => this.onSelectCategory(category.name)}
                {...category}
              />
            </For>
          </List>
        </Otherwise>
      </Choose>
    );
  }
}


export default withIndexStyle(ProductMenuList);

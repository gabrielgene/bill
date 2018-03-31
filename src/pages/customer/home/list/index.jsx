import React from 'react';
import autoBind from 'react-autobind';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';

import { withIndexStyle } from './styles';

const items = [
  {
    label: 'Sanduíches',
    items: [
      {
        label: 'Madagascar',
        description: 'Pão De Hamburguer, Hamburguer Artesanal 180g, Mussarela',
        price: 9.5,
      },
      {
        label: 'B.R.T',
        description: 'Burguer, rúcula, tomate, mussarela, bacon e maionese da casa',
        price: 10.5,
      },
      {
        label: 'The fitz',
        description: 'Burguer, cheddar, cebula caramelizada e cebola roxa',
        price: 14.5,
      },
      {
        label: 'Jelly',
        description: 'Burguer, cream cheese, queijo brie e geleia de damasco',
        price: 14.5,
      },
      {
        label: 'Basílico',
        description: 'Burguer, mussarela de búfala, tomate e pesto de manjericão',
        price: 14.5,
      },
    ]
  },
  {
    label: 'Acompanhamentos',
    items: [
      {
        label: 'Madagascar',
        description: 'Pão De Hamburguer, Hamburguer Artesanal 180g, Mussarela',
        price: 9.5,
      },
      {
        label: 'B.R.T',
        description: 'Burguer, rúcula, tomate, mussarela, bacon e maionese da casa',
        price: 10.5,
      },
      {
        label: 'The fitz',
        description: 'Burguer, cheddar, cebula caramelizada e cebola roxa',
        price: 14.5,
      },
      {
        label: 'Jelly',
        description: 'Burguer, cream cheese, queijo brie e geleia de damasco',
        price: 14.5,
      },
      {
        label: 'Basílico',
        description: 'Burguer, mussarela de búfala, tomate e pesto de manjericão',
        price: 14.5,
      },
    ]
  },
  {
    label: 'Bebidas',
    items: [
      {
        label: 'Madagascar',
        description: 'Pão De Hamburguer, Hamburguer Artesanal 180g, Mussarela',
        price: 9.5,
      },
      {
        label: 'B.R.T',
        description: 'Burguer, rúcula, tomate, mussarela, bacon e maionese da casa',
        price: 10.5,
      },
      {
        label: 'The fitz',
        description: 'Burguer, cheddar, cebula caramelizada e cebola roxa',
        price: 14.5,
      },
      {
        label: 'Jelly',
        description: 'Burguer, cream cheese, queijo brie e geleia de damasco',
        price: 14.5,
      },
      {
        label: 'Basílico',
        description: 'Burguer, mussarela de búfala, tomate e pesto de manjericão',
        price: 14.5,
      },
    ]
  },
  {
    label: 'Vinhos',
    items: [
      {
        label: 'Madagascar',
        description: 'Pão De Hamburguer, Hamburguer Artesanal 180g, Mussarela',
        price: 9.5,
      },
      {
        label: 'B.R.T',
        description: 'Burguer, rúcula, tomate, mussarela, bacon e maionese da casa',
        price: 10.5,
      },
      {
        label: 'The fitz',
        description: 'Burguer, cheddar, cebula caramelizada e cebola roxa',
        price: 14.5,
      },
      {
        label: 'Jelly',
        description: 'Burguer, cream cheese, queijo brie e geleia de damasco',
        price: 14.5,
      },
      {
        label: 'Basílico',
        description: 'Burguer, mussarela de búfala, tomate e pesto de manjericão',
        price: 14.5,
      },
    ]
  },
];

class ProductList extends React.Component {

  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    const { classes } = this.props;

    return (

      <List className={classes.root} subheader={<li />}>
        <For each="section" of={items}>
          <li key={`section-${section.label}`} className={classes.listSection}>
            <ul className={classes.ul}>
              <ListSubheader className={classes.sectionLabel}> <strong> {section.label} </strong> </ListSubheader>
              <Divider style={{ margin: '8px' }} />
              <For each="product" of={section.items}>
                <ListItem className={classes.product} key={`item-${section.label}-${product.label}`}>
                  <Typography className={classes.productTitle} variant="product name"> {product.label} </Typography>
                  <Typography className={classes.productDescription} variant="product description"> {product.description} </Typography>
                  <Typography className={classes.productPrice} variant="product price"> R$ {product.price} </Typography>
                  {/* <ListItemText primary={product.label} /> */}
                </ListItem>
                <Divider style={{ margin: '8px' }} />
              </For>
            </ul>
          </li>
        </For>
      </List>
    );

  }
}



export default withIndexStyle(ProductList);

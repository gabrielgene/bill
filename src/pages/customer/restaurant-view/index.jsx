import React from 'react';
import Typography from 'material-ui/Typography';
import Modal from 'material-ui/Modal';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import { compose } from 'recompose';
import { graphql } from 'react-apollo';
import { withRouter } from 'react-router-dom';

import ProductList from '~/src/pages/customer/product-list';

import RestaurantHeader from './header';
import { query } from './graphql';
import { withIndexStyle } from './styles';

const RestaurantView = ({ classes, history, data: { restaurant = {} } }) =>  {
  const onClose = () => history.replace('/');
  return (
    <Modal open onClose={onClose}>
      <div className={classes.modal}>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <IconButton onClick={onClose} className={classes.toolbarButton}>
              <Icon>close</Icon>
            </IconButton>
          </Toolbar>
        </AppBar>
        <div className={classes.modalContent}>
          <RestaurantHeader restaurant={restaurant} />
          <div>
            <Typography variant="subheading" className={classes.restaurantDescription}>
              {restaurant.description}
            </Typography>
          </div>
        </div>
        <Divider className={classes.divider} />
        <ProductList
          items={restaurant.items || []}
          itemCategories={restaurant.itemCategories || []}
        />
      </div>
    </Modal>
  );
};

export default compose(
  withIndexStyle,
  withRouter,
  graphql(query, {
    options: ({ match }) => ({ variables: match.params }),
  }),
)(RestaurantView);

import React from 'react';
import Typography from 'material-ui/Typography';
import Modal from 'material-ui/Modal';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton'
import Divider from 'material-ui/Divider';
import { compose } from 'recompose';
import { graphql } from 'react-apollo';
import { withRouter } from 'react-router-dom';

import RestaurantHeader from './header';
import ProductList from '../product-list';

import { query } from './graphql';
import { withIndexStyle } from './styles';

const RestaurantView = ({ classes, history, data: { restaurant = {} } }) =>  (
  <Modal open>
    <div className={classes.modal}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar >
          <IconButton onClick={() => history.replace('/')} className={classes.toolbarButton} >
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
          <Typography variant="subheading" className={classes.restaurantMoreInfo}>
            Mais informações {/* TODO: break into component handle click to show more info */}
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

export default compose(
  withIndexStyle,
  withRouter,
  graphql(query, {
    options: ({ match }) => ({ variables: match.params }),
  }),
)(RestaurantView);

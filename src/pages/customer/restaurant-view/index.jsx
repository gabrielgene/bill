import React from 'react';
import Typography from 'material-ui/Typography';
import Modal from 'material-ui/Modal';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton'
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';

import ProductList from '../product-list';

import { withIndexStyle } from './styles';

const fakeData = {
  restaurantName: 'Burger do Bahiano',
  restaurantCategory: 'Lanches',
  restaurantDescription: 'O sabor do dendê no seu hamburguer gourmê',
  restaurantImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP7vlOuIVWK-Z5vgTJlAh3aqivE1DubNjly3QicDgzpGAirm1u',
};

const RestaurantView = ({ classes, handleClose, open }) =>  (
  <Modal
    open={open}
    onClose={handleClose}
  >
    <div className={classes.modal}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar >
          <IconButton onClick={handleClose} className={classes.toolbarButton} >
            <Icon>close</Icon>
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.modalContent}>
        <div className={classes.restaurantHeader}>
          <div className={classes.restaurantHeaderTitle} >
            <Typography variant="display1" noWrap className={classes.restaurantName}>
              {fakeData.restaurantName}
            </Typography>
            <Typography variant="headline" className={classes.restaurantCategory}>
              {fakeData.restaurantCategory}
            </Typography>
          </div>
          <Avatar
            alt="Restaurant avatar"
            src={fakeData.restaurantImg}
            className={classes.avatar}
          />
        </div>
        <div>
          <Typography variant="subheading" className={classes.restaurantDescription}>
            {fakeData.restaurantDescription}
          </Typography>
          <Typography variant="subheading" className={classes.restaurantMoreInfo}>
            Mais informações
            {/* TODO: handle click to show more info */}
          </Typography>
        </div>
      </div>
      <Divider className={classes.divider} />
      <ProductList />
    </div>
  </Modal>
);

export default withIndexStyle(RestaurantView);

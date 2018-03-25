import React from 'react';
import Typography from 'material-ui/Typography';
import Modal from 'material-ui/Modal';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton'
import Avatar from 'material-ui/Avatar';
import classNames from 'classnames';


import { withIndexStyle } from './styles';

class SimpleModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const { classes, onClose } = this.props;

    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.props.open}
        onClose={this.props.handleClose}
      >
        <div className={classes.modal}>
          <AppBar className={classes.appBar} position="static" color="red">
            <Toolbar >
              <IconButton onClick={onClose} className={classes.toolbarButton} >
                <Icon>close</Icon>
              </IconButton>
              {/* <Typography variant="title" color="inherit">
                Tokai
              </Typography> */}
            </Toolbar>
          </AppBar>
          <div className={classes.modalContent}>
            <div className={classes.restaurantHeader}>
              <div
                className={classes.restaurantHeaderTitle}
              >
                <Typography noWrap className={classes.restaurantName} variant="title" id="modal-title">
                  Burger do bahiano
                </Typography>
                <Typography className={classes.restaurantCategory} variant="title" id="modal-title">
                  Lanches
                </Typography>
              </div>
              <Avatar
                alt="Adelle Charles"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP7vlOuIVWK-Z5vgTJlAh3aqivE1DubNjly3QicDgzpGAirm1u"
                className={classNames(classes.avatar, classes.bigAvatar)}
              />
            </div>
            <div>
              <Typography className={classes.restaurantDescription}>
                O sabor do dendê no seu hamburguer gourmê
              </Typography>
              <Typography className={classes.restaurantMoreInfo}>
                Mais informações
              </Typography>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default withIndexStyle(SimpleModal);

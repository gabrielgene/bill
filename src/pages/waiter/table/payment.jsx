import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import autoBind from 'react-autobind';
import List from 'material-ui/List';
import { Link } from 'react-router-dom';
import PaymentItem from '~/src/components/payment-item';
import { orders, categories, getDataByName } from '~/src/utils/fakeData';
import { withIndexStyle } from './styles';


class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    autoBind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit() {
    this.props.addPayment(this.state.value);
    this.setState({ value: '' });
  }

  render() {
    const { value } = this.state;
    const { classes, disabled } = this.props;
    return (
      <div className={classes.payment}>
        <TextField
          id="payment"
          label="Pagamento"
          fullWidth
          type="number"
          value={value}
          onChange={this.handleChange}
        />
        <Button
          fullWidth
          variant="raised"
          color="primary"
          className={classes.paymentButton}
          onClick={this.handleSubmit}
        >
          Adicionar pagamento
        </Button>
        <List component="nav" className={classes.paymentList}>
          {
            orders.filter(o => o.status === 'DELIVERED')
              .map(o => (<PaymentItem
                key={o.id}
                name={o.name}
                price={o.price}
                icon={getDataByName(o.category, categories).icon}
              />))
          }
        </List>
        <Button
          fullWidth
          variant="raised"
          color="primary"
          disabled={disabled}
          component={Link}
          to="/"
        >
          Fechar Mesa
        </Button>
      </div>
    );
  }
}

export default withIndexStyle(Payment);

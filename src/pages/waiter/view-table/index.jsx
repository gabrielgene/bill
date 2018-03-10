import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import { withIndexStyle } from './style';

import TopBar from '../../../components/topbar';
import BottomBar from '../../../components/bottom-bar';


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}


class ViewTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div>
        <TopBar title={this.props.match.params.table_name} />
        <div className={classes.root}>
          <AppBar position="static" color="default" >
            <Tabs
              value={value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              fullWidth
            >
              <Tab label="Pagamentos" />
              <Tab label="Pedidos" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer>Pagamentos</TabContainer>}
          {value === 1 &&
            <TabContainer>
              Pedidos
            </TabContainer>
          }
        </div>
      </div>
    )
  }
}

export default withIndexStyle(ViewTable);

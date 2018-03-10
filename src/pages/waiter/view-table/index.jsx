import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom';

import { withIndexStyle } from './style';
import Zoom from 'material-ui/transitions/Zoom';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import EditIcon from 'material-ui-icons/ModeEdit';

import TopBar from '../../../components/topbar';
import BottomBar from '../../../components/bottom-bar';


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}


{/* TODO: refactor, this is way to link the components just so development is clearer */}
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
    const { classes, match } = this.props;
    const tableName = match.params.table_name;
    const { value } = this.state;

    const fabs = [
      {
        color: 'primary',
        className: classes.fab,
        icon: <AddIcon />,
      },
      {
        color: 'secondary',
        className: classes.fab,
        icon: <EditIcon />,
      },
    ];

    return (
      <div>
        <TopBar title={tableName} />
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
          {fabs.map((fab, index) => (
          <Zoom
            key={fab.color}
            in={this.state.value === index}
            style={{
              transitionDelay: this.state.value === index ? classes.transitionDuration.exit : 0,
            }}
            unmountOnExit
          >
            <Button component={Link} to={`/visualizar/${tableName}/menu`} variant="fab" className={fab.className} color={fab.color}>
              {fab.icon}
            </Button>
          </Zoom>
        ))}
        </div>
      </div>
    )
  }
}

export default withIndexStyle(ViewTable);

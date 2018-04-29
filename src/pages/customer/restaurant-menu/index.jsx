import React from 'react';
import { items } from '~/src/utils/menuBrazero';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemText } from 'material-ui/List';
import { withIndexStyle } from './styles';

declare var item;
declare var bear;

const PromoLabel = (classes, value, promo) => (
  <span>
    <Choose>
      <When condition={!!promo}>
        <span className={classes.value}>R${promo}0</span>
        <span className={classes.dash}>R${value}0</span>
      </When>
      <Otherwise>
        <span className={classes.value}>R${value}0</span>
      </Otherwise>
    </Choose>
  </span>
);

const RestaurantMenu = ({ classes }) => (
  <div>
    <AppBar position="static" className={classes.app}>
      <Toolbar className={classes.bar}>
        <Typography className={classes.title} variant="title" color="inherit">
          <img
            className={classes.titleImage}
            src="https://d30y9cdsu7xlg0.cloudfront.net/png/153732-200.png"
          />
          Brazero
        </Typography>
      </Toolbar>
    </AppBar>
    <List className={classes.list} subheader={<li />}>
      <For each="item" of={items}>
        <li key={item.type} className={classes.listSection}>
          <ul className={classes.ul}>
            <ListSubheader
              classes={{
                sticky: classes.subheader,
              }}
            >
              {item.type}
            </ListSubheader>
            <For each="bear" of={item.bears}>
              <div key={bear.name}>
                <ListItem>
                  <img className={classes.img} src={bear.url} />
                  <ListItemText
                    primary={bear.name}
                    secondary={PromoLabel(classes, bear.price, bear.promo)}
                  />
                </ListItem>
              </div>
            </For>
          </ul>
        </li>
      </For>
    </List>
  </div>
);

export default withIndexStyle(RestaurantMenu);

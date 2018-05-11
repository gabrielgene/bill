import React from 'react';
import { items } from '~/src/utils/menuBrazero';
import { AppBar, Toolbar, Typography, ListSubheader, List } from 'material-ui';
import { groupBy } from 'lodash';

import Item from './item';
import { withIndexStyle } from './styles';

const RestaurantMenu = ({ classes }) => {
  declare var item;

  const grouped = groupBy(items, 'brand');

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.toolbarTitle} variant="title" color="inherit">
            <img
              className={classes.toolbarTitleImage}
              src="https://d30y9cdsu7xlg0.cloudfront.net/png/153732-200.png"
            />
            Brazero
          </Typography>
        </Toolbar>
      </AppBar>
      <List className={classes.list} subheader={<li />}>
        <For each="brand" of={Object.keys(grouped)}>
          <li key={brand} className={classes.listSection}>
            <ul className={classes.listSectionUl}>
              <ListSubheader classes={{ sticky: classes.listSectionSubheader }}>
                {brand}
              </ListSubheader>
              <For each="item" of={grouped[brand]}>
                <Item item={item} key={item.id} />
              </For>
            </ul>
          </li>
        </For>
      </List>
    </div>
  );
};

export default withIndexStyle(RestaurantMenu);

import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { virtualize } from 'react-swipeable-views-utils';
import Button from 'material-ui/Button';
import { compose, withState } from 'recompose';

import DefaultLayout from '~/src/layouts/default';
import TableList from '~/src/components/table-list';

import { withIndexStyle } from './styles';

const filters = [
  { status: null, label: 'Todas' },
  { status: 'FREE', label: 'Disponíveis' },
  { status: 'CALLING', label: 'Solicitando atenção' },
  { status: 'WAITING', label: 'Aguardando pedido' },
];

const Tables = ({ classes }) => {
  declare var filter;

  const topbarAction = (
    <div>
      <IconButton
        aria-owns={filterAnchor && 'menu-appbar'}
        onClick={e => setFilterAnchor(e.target)}
        aria-haspopup="true"
        color="inherit"
      >
        <FilterListIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={filterAnchor}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        onClose={() => setFilterAnchor(null)}
        open={open}
      >
        <For each="filter" of={filters}>
          <MenuItem onClick={() => setFilter(filter.status)}>{filter.label}</MenuItem>
        </For>
      </Menu>
    </div>
  );

  return (
    <DefaultLayout topbarProps={{ title: 'Mesas', action: topbarAction }}>
      <TableList filteredBy={filter} />
    </DefaultLayout>
  );
};

export default compose(
  withIndexStyle,
  withState('filterAnchor', 'setFilterAnchor', null),
  withState('filter', 'setFilter', null),
)(Tables);

import React from 'react';
import { compose, withStateHandlers } from 'recompose';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import { Icon } from 'material-ui';

import DefaultLayout from '~/src/layouts/default';
import TableList from '~/src/components/table-list';

import { withIndexStyle } from './styles';

const filters = [
  { status: null, label: 'Todas' },
  { status: 'IDLE', label: 'Ocupadas' },
  { status: 'FREE', label: 'Disponíveis' },
  { status: 'WAITING', label: 'Aguardando pedido' },
  { status: 'CALLING', label: 'Solicitando atenção' },
];

const Tables = ({
  selectedFilter, filterAnchor,
  setFilter, setFilterAnchor, unsetFilterAnchor,
}) => {
  declare var filter;

  const topBarAction = (
    <div>
      <IconButton
        aria-owns={filterAnchor && 'menu-appbar'}
        onClick={setFilterAnchor}
        aria-haspopup="true"
        color="inherit"
      >
        <Icon>filter_list_icon</Icon>
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={filterAnchor}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        onClose={unsetFilterAnchor}
        open={!!filterAnchor}
      >
        <For each="filter" of={filters}>
          <MenuItem key={filter.label} onClick={setFilter} data-value={filter.status}>
            {filter.label}
          </MenuItem>
        </For>
      </Menu>
    </div>
  );

  return (
    <DefaultLayout topBarProps={{ title: 'Mesas', action: topBarAction }}>
      <TableList filteredBy={selectedFilter} />
    </DefaultLayout>
  );
};

export default compose(
  withIndexStyle,
  withStateHandlers(
    { selectedFilter: null, filterAnchor: null },
    {
      setFilterAnchor: () => e => ({ filterAnchor: e.target }),
      unsetFilterAnchor: () => () => ({ filterAnchor: null }),
      setFilter: () => e => ({ selectedFilter: e.target.dataset.value, filterAnchor: null }),
    },
  ),
)(Tables);

import React from 'react';
import DefaultLayout from '~/src/layouts/default';
import List from 'material-ui/List';
import PedingOrdersItem from '~/src/components/pending-orders-item';
import { fakeTables } from '~/src/utils/fakeData';

const PendingOrders = () => (
  <DefaultLayout bottomBar topBarProps={{ title: 'Pedidos' }}>
    <List>
      {
        fakeTables.map(table =>
          table.orders.filter(o => o.status === 'PENDING')
            .map(o =>
              (<PedingOrdersItem
                key={table.name + o.id}
                tableName={table.name}
                orderName={o.name}
              />)))
      }

    </List>
  </DefaultLayout>
);

export default PendingOrders;

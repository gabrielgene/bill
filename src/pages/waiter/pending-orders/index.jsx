import React from 'react';
import DefaultLayout from '~/src/layouts/default';

const PendingOrders = () => (
  <DefaultLayout topBarProps={{ title: 'Pedidos' }}>
    <h1>Todos os pedidos pendentes aqui</h1>
  </DefaultLayout>
);

export default PendingOrders;

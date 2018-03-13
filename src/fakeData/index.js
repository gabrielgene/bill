export const orders = [
  {
    id: 1,
    name: 'Skol Beats',
    status: 'PENDING',
    category: 'Cervejas',
  },
  {
    id: 2,
    name: 'KFC',
    status: 'DELIVERED',
    category: 'Fast Food',
  },
  {
    id: 3,
    name: 'Skol Beats',
    status: 'PENDING',
    category: 'Cervejas',
  },
  {
    id: 4,
    name: 'Torta de Presunto',
    status: 'PENDING',
    category: 'Tortas',
  },
  {
    id: 5,
    name: 'Vodka',
    status: 'DELIVERED',
    category: 'Drinks',
  },
  {
    id: 6,
    name: 'Pizza',
    status: 'PENDING',
    category: 'Fast Food',
  },
  {
    id: 7,
    name: 'Pizza',
    status: 'PENDING',
    category: 'Fast Food',
  },
  {
    id: 8,
    name: 'Bolo de Cenoura',
    status: 'DELIVERED',
    category: 'Sobremesas',
  },
  {
    id: 9,
    name: 'Torta de Presunto',
    status: 'PENDING',
    category: 'Tortas',
  },
];

export const fakeTables = [
  {
    name: 'Mesa 01',
    status: 'IDLE',
    orders: [...orders],
  },
  {
    name: 'Mesa 02',
    status: 'FREE',
    orders: [],
  },
  {
    name: 'Mesa 03',
    status: 'WAITING',
    orders: [...orders],
  },
  {
    name: 'Mesa 04',
    status: 'CALLING',
    orders: [...orders],
  },
  { name: 'Mesa 05', status: 'FREE' },
  { name: 'Mesa 06', status: 'IDLE' },
  { name: 'Mesa 07', status: 'CALLING' },
  { name: 'Mesa 08', status: 'FREE' },
  { name: 'Mesa 09', status: 'IDLE' },
  { name: 'Mesa 10', status: 'WAITING' },
  { name: 'Mesa 12', status: 'CALLING' },
  { name: 'Mesa 13', status: 'FREE' },
  { name: 'Mesa 14', status: 'CALLING' },
  { name: 'Mesa 15', status: 'IDLE' },
  { name: 'Mesa 16', status: 'CALLING' },
];

export const categories = [
  {
    name: 'Cervejas',
    icon: 'free_breakfast',
    color: 'orange',
  },
  {
    name: 'Drinks',
    icon: 'local_bar',
    color: 'red',
  },
  {
    name: 'Fast Food',
    icon: 'local_pizza',
    color: 'yellow',
  },
  {
    name: 'Tortas',
    icon: 'pie_chart',
    color: 'green',
  },
  {
    name: 'Sobremesas',
    icon: 'cake',
    color: 'blue',
  },
];

export const getDataByName = (name, data) => {
  const value = data.find((el) => {
    if (el.name.toLowerCase() === name.toLowerCase()) {
      return true;
    }
  });
  return value;
};

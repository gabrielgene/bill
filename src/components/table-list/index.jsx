import React from 'react';
import Table from '../table';
import { withIndexStyle } from './styles';

const fakeTables = [
  { name: 'Mesa 01', status: 'CLOSED' },
  { name: 'Mesa 02', status: 'OPEN' },
  { name: 'Mesa 03', status: 'WAITING' },
  { name: 'Mesa 04', status: 'CALLING' },
  { name: 'Mesa 05', status: 'OPEN' },
  { name: 'Mesa 06', status: 'CLOSED' },
  { name: 'Mesa 07', status: 'CALLING' },
  { name: 'Mesa 08', status: 'OPEN' },
  { name: 'Mesa 09', status: 'CLOSED' },
  { name: 'Mesa 10', status: 'WAITING' },
  { name: 'Mesa 12', status: 'CALLING' },
  { name: 'Mesa 13', status: 'OPEN' },
  { name: 'Mesa 14', status: 'CALLING' },
  { name: 'Mesa 15', status: 'CLOSED' },
  { name: 'Mesa 16', status: 'CALLING' },
];

// REMIND - Remove filter, fetch the data normalized

const TableList = ({ classes, filteredBy }) => (
  <div className={classes.root}>
    {
      fakeTables.filter(({ status }) =>
        filteredBy === undefined
          ? true
          : status === filteredBy
      ).map(({ name, status }) => (
        <Table key={name} name={name} status={status} />
      ))
    }
  </div>
);

export default withIndexStyle(TableList);

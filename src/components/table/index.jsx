import React from 'react';
import classNames from 'classnames';
import { Paper, Typography } from 'material-ui';

import { withIndexStyle } from './styles';

const Table = ({ classes, name, status }) => (
  <Paper className={classNames(classes.root, classes[status.toLowerCase()])}>
    <Typography className={classes.name} variant="display3">{name}</Typography>
  </Paper>
);

export default withIndexStyle(Table);

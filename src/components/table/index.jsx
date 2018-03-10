import React from 'react';
import classNames from 'classnames';
import { Paper, Typography } from 'material-ui';
import { Link } from 'react-router-dom';

import { withIndexStyle } from './styles';

const Table = ({ classes, name, status }) => (
    <Paper className={classNames(classes.root, classes[status.toLowerCase()])}>
      <Link style={{ display: 'inline-block', textDecoration: 'none' }} to={`visualizar/${name}`}>
        <Typography className={classes.name} variant="display1">{name}</Typography>
      </Link>
    </Paper>
);

export default withIndexStyle(Table);

import React from 'react';
import { Card, CardMedia } from 'material-ui';

import { withIndexStyle } from './styles';

const Banner = ({ classes }) => (
  <div className={classes.root}>
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image="https://empiretur.com.br/wp-content/uploads/2017/10/salvador.jpg"
      />
    </Card>
  </div>
);

export default withIndexStyle(Banner);

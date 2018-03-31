import { withStyles } from 'material-ui';

export const withIndexStyle = withStyles(theme => {

  return {
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      position: 'relative',
      overflow: 'auto',
      maxHeight: '800px',
    },
    sectionLabel: {
      fontSize: 24,
      color: 'rgba(0, 0, 0, 0.8)',
    },
    listSection: {
      backgroundColor: 'inherit',
    },
    ul: {
      backgroundColor: 'inherit',
      padding: 0,
    },
    product: {
      display: 'block',
    },
    productTitle: {
      fontSize: 20,
      lineHeight: 1,
      marginBottom: '8px',
    },
    productDescription: {
      fontSize: 20,
      color: 'grey',
      marginBottom: '8px',
    },
    productPrice: {
      fontSize: 20,
      color: 'red',
    },
    divider: {
      margin: theme.spacing.unit,
    }
  };
}, { withTheme: true });

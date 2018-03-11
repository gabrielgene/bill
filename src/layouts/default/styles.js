import { withStyles } from 'material-ui';

const topbarHeight = {
  big: 64,
  small: 56,
  tiny: 48,
};

export const withIndexStyle = withStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  main: {
    paddingTop: topbarHeight.small,
    overflow: 'auto',
    flexGrow: 1,
    '@media (min-width:0px) and (orientation: landscape)': {
      paddingTop: topbarHeight.tiny,
    },
    '@media (min-width:600px)': {
      paddingTop: topbarHeight.big,
    },
  },
});

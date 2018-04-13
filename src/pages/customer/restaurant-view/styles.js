import { withStyles } from 'material-ui';
import { red } from 'material-ui/colors';

const horizontalPadding = 16;
const avatarMargin = 10;
const avatarSize = 60;


export const withHeaderStyle = withStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    width: `calc(100% - ${avatarSize + avatarMargin + horizontalPadding}px)`,
  },
  name: {
    color: theme.palette.text.primary,
  },
  category: {
    color: theme.palette.text.secondary,
  },
  avatar: {
    margin: avatarMargin,
    width: avatarSize,
    height: avatarSize,
  },
}));


export const withIndexStyle = withStyles(theme => {
  return {
    appBar: {
      boxShadow: 'none',
      color: 'white',
    },
    toolbarButton: {
      color: red[500],
      marginLeft: '-12px',
    },
    modal: {
      position: 'absolute',
      backgroundColor: 'white',
      width: '100%',
      height: '100vh',
    },
    modalContent: {
      padding: `0px ${horizontalPadding}px`,
    },
    restaurantMoreInfo: {
      color: red[500],
    },
    divider: {
      margin: theme.spacing.unit,
    }
  };
});

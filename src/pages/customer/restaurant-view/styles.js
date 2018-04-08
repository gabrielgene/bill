import { withStyles } from 'material-ui';
import { red } from 'material-ui/colors';

export const withIndexStyle = withStyles(theme => {
  const spacer = theme.spacing.unit;
  const horizontalPadding = spacer * 2;
  const avatarMargin = 10;
  const avatarSize = 60;

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
    restaurantHeader: {
      display: 'flex',
      alignItems: 'center',
    },
    restaurantHeaderTitle: {
      width: `calc(100% - ${avatarSize + avatarMargin + horizontalPadding}px)`,
    },
    restaurantName: {
      color: theme.palette.text.primary,
    },
    restaurantCategory: {
      color: theme.palette.text.secondary,
    },
    restaurantMoreInfo: {
      color: red[500],
    },
    avatar: {
      margin: avatarMargin,
      width: avatarSize,
      height: avatarSize,
    },
    divider: {
      margin: theme.spacing.unit,
    }
  };
});

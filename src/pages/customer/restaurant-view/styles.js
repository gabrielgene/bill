import { withStyles } from 'material-ui';

export const withIndexStyle = withStyles(theme => {
  const spacer = theme.spacing.unit;
  const horizontalPadding = spacer * 2;
  const avatarMargin = 10;
  const bigAvatar = 60;

  return {
    appBar: {
      boxShadow: 'none',
      color: 'white',
    },
    toolbarButton: {
      color: 'red',
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
      width: `calc(100% - ${bigAvatar + avatarMargin + horizontalPadding}px)`,
    },
    restaurantName: {
      fontSize: 36,
    },
    restaurantCategory: {
      fontSize: 16,
      color: 'grey',
      lineHeight: 2,
    },
    restaurantDescription: {
      fontSize: 16,
    },
    restaurantMoreInfo: {
      color: 'red',
    },
    avatar: {
      margin: avatarMargin,
    },
    bigAvatar: {
      width: bigAvatar,
      height: bigAvatar,
    },
    divider: {
      margin: theme.spacing.unit,
    }
  };
}, { withTheme: true });

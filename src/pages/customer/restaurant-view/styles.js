import { withStyles } from 'material-ui';
import { red } from 'material-ui/colors';

const horizontalPadding = 16;

export const withHeaderStyle = withStyles(theme => {
  const avatarMargin = theme.spacing.unit * 2;
  const avatarSize = theme.spacing.unit * 8;
  return {
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
  };
});


export const withIndexStyle = withStyles((theme) => {
  const { white } = theme.palette.common;
  const desktopModalWidth = '80%';
  return {
    appBar: {
      boxShadow: 'none',
      color: white,
    },
    toolbarButton: {
      color: white,
      marginLeft: `-${theme.spacing.unit * 2}`,
    },
    modal: {
      position: 'absolute',
      backgroundColor: white,
      width: '100%',
      height: '100vh',
      [theme.breakpoints.up('md')]: {
        width: desktopModalWidth,
        right: 0,
        animation: 'slideIn 0.25s normal ease-in-out',
      },
    },
    modalContent: {
      padding: `0 ${horizontalPadding}px`,
    },
    restaurantMoreInfo: {
      color: red[500],
    },
    divider: {
      margin: theme.spacing.unit,
    },
    ['@keyframes slideIn']: {
      '0%': { transform: `translateX(${desktopModalWidth})` },
      '100%': { transform: 'translateX(0)' }
    },
  };
});

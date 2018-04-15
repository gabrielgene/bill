import { withStyles } from 'material-ui';

export const withIndexStyle = withStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  restaurants: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit,
  },
  card: {
    width: theme.spacing.unit * 36,
    height: theme.spacing.unit * 28,
    marginRight: theme.spacing.unit,
    marginTop: theme.spacing.unit,
    cursor: 'pointer',
  },
  cardTitle: {
    padding: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 2,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    width: theme.spacing.unit * 33,
    whiteSpace: 'nowrap',
  },
  cardMedia: {
    width: '100%',
    height: theme.spacing.unit * 15,
  },
  infoWrapper: {
    padding: theme.spacing.unit,
  },
  cardInfo: {
    display: 'flex',
    marginBottom: theme.spacing.unit,
  },
  cardInfoAddress: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    width: theme.spacing.unit * 33,
    whiteSpace: 'nowrap',
  },
  icon: {
    fontSize: 18,
    marginRight: theme.spacing.unit,
  },
}));

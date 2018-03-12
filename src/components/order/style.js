import { withStyles } from 'material-ui';
import { lightGreen, amber } from 'material-ui/colors';

export const withIndexStyle = withStyles({
  root: { borderLeft: '3px solid' },
  delivery: { color: lightGreen[500] },
  pending: { color: amber[500] },
  deliveryAvatar: { backgroundColor: lightGreen[500] },
  pendingAvatar: { backgroundColor: amber[500] },
});

import {StyleSheet} from 'pr-unit';
import {colors, metrics} from '../../../assets/config';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: metrics.body.padding,
    backgroundColor: colors.background,
  },
  keyboard: {
    flexGrow: 1,
  },
  scroll: {
    flexGrow: 1,
  },
  header: {
    flex: 0.3,
    alignItems: 'center',
  },
  body: {
    flex: 1,
  },
  recoveryAccount: {
    alignSelf: 'flex-end',
    color: colors.primary,
  },
  createdAccount: {alignSelf: 'center'},
});

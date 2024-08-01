import {StyleSheet} from 'pr-unit';
import {colors, metrics} from '../../../assets/config';

export default StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: metrics.body.padding,
    backgroundColor: 'transparent',
  },
  keyboard: {
    flexGrow: 1,
  },
  scroll: {
    flexGrow: 1,
  },
  header: {
    flex: 0.3,
    alignItems: 'flex-end',
  },
  body: {
    flex: 1,
  },
  accessAccount: {
    fontWeight: '700',
    alignSelf: 'center',
  },
  recoveryAccount: {
    alignSelf: 'center',
    color: colors.text.color,
    fontWeight: '700',
  },
  createdAccount: {
    alignSelf: 'center',
    fontFamily: 'DMSans-Regular',
    fontWeight: '500',
  },
});

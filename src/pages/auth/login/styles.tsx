import {StyleSheet} from 'pr-unit';
import {colors, metrics} from '../../../assets/config';
import LinearGradient from 'react-native-linear-gradient';
import {Text, View} from 'react-native';

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

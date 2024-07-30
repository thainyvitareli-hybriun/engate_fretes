import {StyleSheet} from 'pr-unit';
import {colors, metrics} from '../../../assets/config';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: metrics.body.padding,
  },
});

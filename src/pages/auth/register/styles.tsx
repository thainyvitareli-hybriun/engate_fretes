import {StyleSheet} from 'pr-unit';
import {colors, metrics} from '../../../assets/config';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  keyboard: {flexGrow: 1},
  scroll: {
    flexGrow: 1,
  },
  body: {
    flex: 1,
    paddingHorizontal: metrics.body.padding,
  },
  footer: {
    paddingVertical: metrics.body.padding,
  },
});

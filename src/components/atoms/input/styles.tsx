import {StyleSheet} from 'pr-unit';
import {colors, metrics} from '../../../assets/config';

export default StyleSheet.create({
  container: {
    borderWidth: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: colors.input.border,
    borderRadius: metrics.input.radius,
    backgroundColor: colors.input.active,
  },
  error: {
    borderColor: colors.input.error,
  },
  focus: {
    borderColor: colors.primary,
  },
  input: {
    flex: 1,
    height: metrics.input.height,
    borderRadius: metrics.input.radius,
    paddingVertical: metrics.input.paddingVertical,
    paddingHorizontal: metrics.input.paddingHorizontal,
  },
  showPassword: {
    paddingHorizontal: metrics.input.paddingHorizontal,
  },
});

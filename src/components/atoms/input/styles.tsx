import {StyleSheet} from 'pr-unit';
import {colors, metrics} from '../../../assets/config';

export default StyleSheet.create({
  gradient: {
    flex: 1,
    borderRadius: 10,
  },
  container: {
    borderWidth: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: colors.input.border,
    borderRadius: metrics.input.radius,
    backgroundColor: 'transparent',
    // elevation: 3, // Sombra para Android
    // shadowColor: '#8E95AE', // Sombra para iOS
    // shadowOffset: {width: 0, height: 0},
    // shadowOpacity: 1,
    // shadowRadius: 8,
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
  showUserIcon: {
    paddingHorizontal: metrics.input.paddingHorizontal,
  },
});

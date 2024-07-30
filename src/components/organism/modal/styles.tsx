import {StyleSheet} from 'pr-unit';
import {colors, metrics} from '../../../assets/config';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  containerModal: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: metrics.modal.padding,
    backgroundColor: colors.background,
    borderRadius: metrics.modal.radius,
  },
  paragraph: {
    textAlign: 'center',
  },
});

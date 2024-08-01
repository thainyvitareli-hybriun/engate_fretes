import {StyleSheet} from 'pr-unit';
import {colors, metrics} from '../../../assets/config';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    zIndex: 9999,
    margin: 0,
  },

  containerModal: {
    width: '100%',
    backgroundColor: colors.background,
    borderRadius: metrics.modal.radius,
    maxHeight: '90%',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

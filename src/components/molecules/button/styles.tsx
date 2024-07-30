import {StyleSheet} from 'pr-unit';
import {metrics} from '../../../assets/config';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    borderWidth: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: metrics.button.radius * 10,
  },
});

import {StyleSheet} from 'pr-unit';
import {metrics} from '../../../assets/config';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    border: '1px solid #000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: metrics.button.radius * 50,
  },
});

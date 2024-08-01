import {StyleSheet} from 'pr-unit';
import {colors} from '../../../assets/config';

export default StyleSheet.create({
  content: {
    padding: 25,
  },
  logo: {
    width: 300,
    resizeMode: 'contain',
  },

  textCenter: {
    textAlign: 'center',
  },
  cell: {
    width: 100,
    height: 70,
    lineHeight: 38,
    fontSize: 24,
    borderBottomWidth: 5,
    borderColor: colors.secondary,
  },

  focusCell: {
    borderColor: colors.divider.line,
  },
});

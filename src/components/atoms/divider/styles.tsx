// @ts-nocheck
import {StyleSheet} from 'pr-unit';
import {colors} from '../../../assets/config';

const horizontal = {
  xs: {
    marginHorizontal: 5,
  },
  sm: {
    marginHorizontal: 10,
  },
  md: {
    marginHorizontal: 10 * 1.5,
  },
  lg: {
    marginHorizontal: 10 * 2,
  },
  xl: {
    marginHorizontal: 10 * 3,
  },
  biggest: {
    marginHorizontal: 10 * 5,
  },
};

const vertical = {
  xs: {
    marginVertical: 5,
  },
  sm: {
    marginVertical: 10,
  },
  md: {
    marginVertical: 10 * 1.5,
  },
  lg: {
    marginVertical: 10 * 2,
  },
  xl: {
    marginVertical: 10 * 3,
  },
  biggest: {
    marginVertical: 10 * 5,
  },
};

export default StyleSheet.create({
  horizontal,
  vertical,
  line: {
    height: 3,
    backgroundColor: colors.divider.line,
  },
});

import {StyleSheet} from 'pr-unit';
import {metrics} from '../../../assets/config';

export default StyleSheet.create({
  fontFamily: {
    fontFamily: 'Ariel',
  },
  paragraph: {
    fontSize: metrics.font.paragraph,
  },
  small: {
    fontSize: metrics.font.small,
  },
  title: {
    fontWeight: 'bold',
    fontSize: metrics.font.title,
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: metrics.font.subtile,
  },
});

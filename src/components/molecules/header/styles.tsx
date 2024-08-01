import {StyleSheet} from 'pr-unit';
import {metrics} from '../../../assets/config';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: metrics.body.padding,
    justifyContent: 'space-between',
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 32,
    alignSelf: 'flex-start',
  },
  userName: {
    fontSize: 32,
    fontWeight: '700',
  },
  settings: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 32,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

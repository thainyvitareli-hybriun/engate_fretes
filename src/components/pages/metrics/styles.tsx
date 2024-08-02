import {StyleSheet} from 'pr-unit';
import {colors, metrics} from '../../../assets/config';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  alignStart: {
    alignItems: 'flex-start',
    gap: metrics.body.gap,
  },
  hexagonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
  },
  hexagonTextContainer: {
    position: 'absolute',
    marginTop: 60,
    gap: 10,
  },
  hexagonText: {
    textAlign: 'center',
    color: 'white',
  },
  seePlans: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginTop: -25,
    borderRadius: 40,
  },
});

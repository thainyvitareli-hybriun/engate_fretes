import {StyleSheet} from 'pr-unit';
import {colors, metrics} from '../../../assets/config';

export default StyleSheet.create({
  slide: {
    flex: 1,
    backgroundColor: 'white',
  },

  scroll: {
    flexGrow: 1,
  },

  slideImage: {
    width: '100%',
    height: '30%',
    resizeMode: 'contain',
  },

  slideContent: {
    padding: metrics.body.padding,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textCenter: {
    textAlign: 'center',
  },

  pagination: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },

  paginationItem: {
    borderRadius: 100,
    width: 40,
    height: 40,
    backgroundColor: '#D2D2D2',
    marginRight: 30,
  },

  paginationItemSelected: {
    borderRadius: 100,
    width: 40,
    height: 40,
    backgroundColor: colors.primary,
    marginRight: 30,
  },

  footer: {
    bottom: 0,
    position: 'absolute',
    width: '100%',
    padding: metrics.body.padding,
  },
});

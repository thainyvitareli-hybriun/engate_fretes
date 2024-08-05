import {StyleSheet} from 'pr-unit';
import {colors, metrics} from '../../../assets/config';

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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: metrics.body.padding,
  },

  altContainer: {
    padding: metrics.body.padding,
    backgroundColor: '#252A38',
  },
  altUserName: {
    fontSize: 28,
    color: colors.secondary,
    marginLeft: 150,
    marginTop: 50,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: colors.secondary,
    resizeMode: 'cover',
  },
});

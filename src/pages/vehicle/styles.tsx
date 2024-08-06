import {StyleSheet} from 'pr-unit';
import {metrics} from '../../assets/config';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    // backgroundColor: 'yellow',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: metrics.body.gap,
  },
  item: {
    width: '100%',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: metrics.modal.radius,
    marginBottom: 30,
    padding: 30,
    gap: 50,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    // Shadow for Android
    elevation: 5,
  },
  textModel: {
    fontSize: 14,
    fontWeight: '700',
  },
  textDescription: {
    fontSize: 12,
    fontWeight: '700',
  },
  gap: {
    gap: 20,
  },
  image: {
    // width: 100,
    // height: 100,
    // resizeMode: 'contain',
  },
  badge: {
    borderRadius: metrics.button.radius * 5,
    alignItems: 'center',
    paddingHorizontal: metrics.padding.md,
    paddingVertical: metrics.padding.xl,
  },
});

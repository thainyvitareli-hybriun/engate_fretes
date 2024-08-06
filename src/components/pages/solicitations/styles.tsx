import {StyleSheet} from 'pr-unit';
import {metrics} from '../../../assets/config';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  item: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: metrics.modal.radius,
    padding: 30,
    gap: 20,
    flexDirection: 'column',
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    // Shadow for Android
    elevation: 5,
  },
  itemDate: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  itemStatus: {
    borderRadius: 50,
    padding: 5,
    width: 300,
    alignItems: 'center',
  },
  itemAddress: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
  },
  itemVehicleBox: {
    flexDirection: 'column',
  },
  itemVehicleRow: {
    flexDirection: 'row',
    gap: 30,
  },
  itemVehicleImage: {
    resizeMode: 'cover',
  },
  emptyList: {
    padding: 50,
    gap: 30,
    alignItems: 'center',
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  alignCenter: {
    alignItems: 'center',
  },
});

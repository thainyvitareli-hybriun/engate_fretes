import {StyleSheet} from 'pr-unit';
import {colors, metrics} from '../../../assets/config';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 200,
    marginTop: -120,
    alignSelf: 'flex-end',
    marginEnd: 50,
    borderWidth: 3,
    borderColor: colors.secondary,
  },
  user: {
    flexDirection: 'column',
    width: '100%',
    alignItems: 'flex-end',
  },
  typeUser: {
    padding: 10,
    marginEnd: 50,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 30,
  },
  spaceBetween: {},
  cardInfo: {
    width: '100%',
    backgroundColor: 'white',
    padding: 40,
    gap: metrics.body.gap,
    alignSelf: 'center',
    borderRadius: metrics.modal.radius,
  },
  section: {
    width: '90%',
    alignSelf: 'center',
    margin: 20,
  },
  status: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
    padding: 70,
    // flexWrap: 'wrap',
    width: '90%',
    justifyContent: 'space-between',
  },

  input: {
    borderWidth: 0,
  },
  modalPictureCloseIcon: {
    alignSelf: 'flex-end',
  },
  updateIcons: {
    flexDirection: 'row',
  },
  keyboard: {
    flexGrow: 1,
  },
});

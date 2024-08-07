import {StyleSheet} from 'pr-unit';
import {metrics} from '../../../../assets/config';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboard: {
    flexGrow: 1,
  },
  scroll: {
    flexGrow: 1,
  },
  form: {
    width: '90%',
    alignSelf: 'center',
    gap: metrics.body.gap,
    marginTop: 30,
  },
  formTitle: {
    alignSelf: 'center',
    fontWeight: '600',
    marginBottom: 60,
  },
  docImageWrapper: {
    flex: 1,
    height: 300,
    margin: 10,
    position: 'relative',
  },
  docImageIcon: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: 'white',
    position: 'absolute',
    marginTop: 5,
    // alignSelf: 'end',
    alignSelf: 'flex-end',
  },

  unselectedDocImage: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#95B7F1',
    borderRadius: metrics.tabBar.borderRadios,
    borderStyle: 'dashed',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },

  borderError: {
    borderColor: 'red',
  },
  docImage: {
    height: '100%',
    resizeMode: 'cover',
    borderRadius: metrics.tabBar.borderRadios,
  },
  textCenter: {
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
  },
  contentImage: {
    gap: 20,
  },
});

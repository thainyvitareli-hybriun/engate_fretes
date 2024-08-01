import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../../assets/config';

export default StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '85%',
    padding: metrics.tabBar.padding,
    alignSelf: 'center',
    borderTopRightRadius: metrics.tabBar.borderRadios,
    borderTopLeftRadius: metrics.tabBar.borderRadios,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  tabItem: {
    // backgroundColor: `yellow`,
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchTab: {
    backgroundColor: 'orange',
    borderRadius: 50,
  },
  iconWrapper: {
    position: 'relative',
  },
  underline: {
    position: 'absolute',
    bottom: -15,
    width: '80%',
    height: 4,
    borderRadius: metrics.button.radius,
    backgroundColor: colors.secondary,
  },
  label: {
    fontSize: 12,
    color: colors.icons.color,
  },
  focusedLabel: {
    color: colors.icons.focused,
  },
});

import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import styles from './styles';

const CustomTabBar = ({state, descriptors, navigation}: any) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route: any, index: any) => {
        console.log(route.key);
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;
        const icon = options?.tabBarIcon({focused: isFocused});
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <>
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              style={[
                styles.tabItem,
                route.name === 'Search' && styles.searchTab,
              ]}>
              <View style={styles.iconWrapper}>{icon}</View>
              <Text style={[styles.label, isFocused && styles.focusedLabel]}>
                {options.tabBarLabel({focused: isFocused})}
              </Text>
              {isFocused && <View style={styles.underline} />}
            </TouchableOpacity>
          </>
        );
      })}
    </View>
  );
};

export default CustomTabBar;

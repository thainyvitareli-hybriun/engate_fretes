import * as React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import {Icons} from '../assets/svg';
import {colors} from '../assets/config';
import {Home, News} from '../pages';

const OPTIONS = [
  {
    name: 'Home',
    icon: <Icons.Home fill={'white'} />,
    component: Home,
    label: 'Início',
  },
];

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.primary,
        },
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarActiveTintColor: '#FFFFFF',
      }}>
      {OPTIONS.map((option, index) => (
        <Tab.Screen
          key={index}
          options={{tabBarIcon: ({}) => option.icon, tabBarLabel: option.label}}
          name={option.name}
          component={option.component}
        />
      ))}
    </Tab.Navigator>
  );
};

const AppRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <Stack.Screen name="Main" component={TabNavigator} />
      <Stack.Screen
        name="News"
        options={{
          headerShown: true,
          headerTitle: '',
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        component={News}
      />
    </Stack.Navigator>
  );
};

export default AppRoutes;

import * as React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import {Icons} from '../assets/svg';
import {colors} from '../assets/config';
import {Home, News} from '../pages';
import Appointments from '../pages/app/appointments';
import Search from '../pages/app/search';
import Chat from '../pages/app/chat';
import {Text} from '../components/atoms';
import TabBar from '../components/atoms/custom-tab';

import InfoSolicitation from '../pages/app/solicitation';
import Plans from '../pages/app/plans';

const OPTIONS = [
  {
    name: 'Home',
    icon: (fill: string) => <Icons.Home fill={fill} />,
    component: Home,
    label: '',
  },
  {
    name: 'Calendar',
    icon: (fill: string) => <Icons.Calendar fill={fill} />,
    component: Appointments,
    label: '',
  },
  {
    name: 'Chat',
    icon: (fill: string) => <Icons.Chat fill={fill} />,
    component: Chat,
    label: '',
  },
  {
    name: 'Search',
    icon: (fill: string) => <Icons.Search fill={fill} />,
    component: Search,
    label: '',
  },
];

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      {OPTIONS.map((option: any, index) => (
        <Tab.Screen
          key={index}
          options={{
            tabBarIcon: ({focused}) =>
              option.icon(focused ? colors.icons.focused : colors.icons.color),

            tabBarLabel: ({focused}) => (
              <Text
                type="small"
                weight="500"
                color={focused ? colors.icons.focused : colors.icons.color}>
                {option.label}
              </Text>
            ),
          }}
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
      <Stack.Screen name="Solicitation" component={InfoSolicitation} />
      <Stack.Screen name="Plans" component={Plans} />
    </Stack.Navigator>
  );
};

export default AppRoutes;

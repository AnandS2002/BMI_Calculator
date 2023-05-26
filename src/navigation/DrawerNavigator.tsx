import React from 'react';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomePage from '../components/home';
import {DrawerPosition} from 'react-native-gesture-handler';
import {LoginStackNavigation, MainStackNavigation} from './StackNavigtion';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ED1E79',
        },
        drawerPosition: 'left',
        headerLeftContainerStyle: {paddingTop: 10, paddingLeft: 20},
        headerTintColor: 'white',
        headerTitleStyle: {
          paddingTop: 8,
          fontSize: 25,
        },
        drawerContentStyle: {
          backgroundColor: 'lavender',
          padding: 10,
          paddingTop: 50,
        },
        drawerLabelStyle: {
          fontSize: 20,
        },
      }}>
      <Drawer.Screen name="Home" component={HomePage} />
      <Drawer.Screen
        name="Sign Up"
        component={LoginStackNavigation}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Login"
        component={MainStackNavigation}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

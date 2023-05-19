import React from 'react';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomePage from '../components/home';
import MainStackNavigation from './StackNavigtion';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ED1E79',
        },
      }}>
      <Drawer.Screen name="Home" component={HomePage} />
      <Drawer.Screen name="Login" component={MainStackNavigation} />

      {/* <Drawer.Screen name="Home" component={YourApp}/> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

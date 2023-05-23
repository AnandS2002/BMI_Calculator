import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import YourApp from '../components/data';
import Result from '../components/result';
import Login from '../components/login';
import List from '../components/list';
import Details from '../components/details';
import SignUp from '../components/signup';
import CurrentUser from '../components/person';
import HomePage from '../components/home';

export const MainStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login">
        <Stack.Screen name='SignUp' component={LoginStackNavigation}/>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CurrentUser" component={CurrentUser} />
      <Stack.Screen name="Data" component={YourApp} />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Result" component={Result} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};
export const LoginStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="SignUp">
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={MainStackNavigation} />
    </Stack.Navigator>
  );
};

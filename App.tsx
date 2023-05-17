import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import YourApp from './src/components/data';
import result from './src/components/result';
import Login from './src/components/login';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import list from './src/components/list';
const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'default'} backgroundColor={'black'} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={YourApp} />
          <Stack.Screen name="List" component={list} />
          <Stack.Screen name="Result" component={result} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
export default App;

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import YourApp from './src/components/data';
import Result from './src/components/result';
import Login from './src/components/login';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import List from './src/components/list';
import Details from './src/components/details';
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
          <Stack.Screen name="List" component={List} />
          <Stack.Screen name="Result" component={Result} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaView>
  );
};
export default App;

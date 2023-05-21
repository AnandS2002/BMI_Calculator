import React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigation from './src/navigation/StackNavigtion';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import DrawerNavigation from './src/navigation/DrawerNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  async function setCredentials() {
    let username = "Anand";
    let password = '1234'
    AsyncStorage.setItem('user',username);
    AsyncStorage.setItem('pass',password);

    
  }
  useEffect(()=>{
    setCredentials()
  },[]);
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'default'} backgroundColor={'black'} />
      <NavigationContainer>
        <DrawerNavigation/>
      </NavigationContainer>
    </SafeAreaView>
  );
};
export default App;

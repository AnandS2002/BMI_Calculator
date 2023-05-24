import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import DrawerNavigation from './src/navigation/DrawerNavigator';
import {SplashScreenNavigation} from './src/navigation/SplashScreenNavigation';
const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'default'} backgroundColor={'black'} />
      <NavigationContainer>
        <SplashScreenNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
};
export default App;

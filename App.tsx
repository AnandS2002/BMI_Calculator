import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {SplashScreenNavigation} from './src/navigation/SplashScreenNavigation';
import { store } from './src/redux/store'
import { Provider } from 'react-redux';
import { ApiCall } from './src/components/apicall';
const App = () => {
  return (
    <Provider store={store}>
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'default'} backgroundColor={'black'} />
      <NavigationContainer>
        <ApiCall/>
        {/* <SplashScreenNavigation /> */}
      </NavigationContainer>
    </SafeAreaView>
    </Provider>
  );
};
export default App;

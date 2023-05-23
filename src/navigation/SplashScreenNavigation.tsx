import React ,{useEffect}from 'react';
import SplashScreen from '../components/splash';
import DrawerNavigation from './DrawerNavigator';
import { Stack } from './StackNavigtion';
import { useNavigation,StackActions } from '@react-navigation/native';


export function SplashScreenNavigation(): React.JSX.Element {
  const navigation = useNavigation();

  useEffect(() => {
    const timeout=setTimeout(() => {
      navigation.dispatch(StackActions.replace('Drawer'));
    }, 2000);
    return()=>clearTimeout(timeout); 
  }, []);
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown:false
    }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Drawer" component={DrawerNavigation} />
    </Stack.Navigator>
  );
}

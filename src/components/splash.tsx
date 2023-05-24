import React from 'react';
import {View, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = () => {
  return (
    <LinearGradient colors={['#ED1E79', '#662D8C']} style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={{
              maxHeight: 70,
              maxWidth: 147,
            }}
            source={require('../assets/Logo.png')}
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 40,
          }}>
          <Text style={{fontSize: 50, textAlign: 'center'}}>
            BMI{'\n'}Calculator
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};
export default SplashScreen;

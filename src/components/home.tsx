import React from 'react';
import {Text, View, Image} from 'react-native';
import 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const HomePage = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
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
        <View style={{flex: 1.5, padding: 30}}>
          <Text
            style={{
              fontSize: 25,
              color: 'aqua',
              textAlign: 'center',
              lineHeight: 40,
            }}>
            We're here to help you understand and track your Body Mass Index
            (BMI) for better health and wellness. BMI is a measure that assesses
            your body composition based on your weight and height.
            {'\n\n'}
          </Text>
          <Text style={{fontSize: 35, textAlign: 'center', fontWeight: '700'}}>
            Start your journey now
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
};
export default HomePage;

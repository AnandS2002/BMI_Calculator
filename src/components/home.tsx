import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const HomePage = () => {
  return (
    <LinearGradient colors={['#ED1E79', '#662D8C']} style={{flex: 1}}>

    <ScrollView
      >
        <View style={{ justifyContent: 'center', }}>
          <View style={{justifyContent: 'center', alignItems: 'center',}}>
            <Image
              style={{
                maxHeight: 50,
                maxWidth: 107,
                marginTop:20,

              }}
              source={require('../assets/Logo.png')}
            />
            <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
            }}>
            <Text style={{fontSize: 20, textAlign: 'center',color:'white',fontWeight:'800'}}>
              BMI Calculator
            </Text>
          </View>
          </View>
          
        </View>
        <View style={{flex: 1.5, padding: 30}}>
          <Text
            style={{
              fontSize: 22,
              color: 'aqua',
              textAlign: 'center',
              lineHeight: 40,
            }}>
            We're here to help you understand and track your Body Mass Index
            (BMI) for better health and wellness. BMI is a measure that assesses
            your body composition based on your weight and height.
            {'\n\n'}
          </Text>
          <Text style={{fontSize: 30, textAlign: 'center', fontWeight: '700',color:'white'}}>
            Start your journey now
          </Text>
        </View>
    </ScrollView>
    </LinearGradient>

  );
};
export default HomePage;

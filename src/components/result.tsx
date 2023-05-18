import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, Pressable} from 'react-native';
import YourApp from './data';
import LinearGradient from 'react-native-linear-gradient';
function displayy(bmi) {
  if (bmi < 18) {
    return (
      <View style={style.results}>
        <View>
          <Image source={require('../assets/underweight.png')} />
        </View>
        <Text
          style={{
            padding: 20,
            fontWeight: 700,
            fontSize: 20,
          }}>
          {bmi}
        </Text>
        <View>
          <Text
            style={{
              color: 'blue',
              fontSize: 25,
              fontWeight:'800',
            }}>
            YOU ARE UNDER WEIGHT !!
          </Text>
        </View>
      </View>
    );
  } else if (bmi < 25) {
    return (
      <View style={style.results}>
        <View>
          <Image source={require('../assets/healthy.png')} />
        </View>
        <Text
          style={{
            padding: 20,
            fontWeight: 700,
            fontSize: 20,
          }}>
          {bmi}
        </Text>
        <View>
          <Text
            style={{
              color: 'green',
              fontSize: 25,
              fontWeight: '800',
            }}>
            YOU ARE HEALTHY ✨✨
          </Text>
        </View>
      </View>
    );
  } else {
    return (
      <View style={style.results}>
        <View>
          <Image source={require('../assets/overweight.png')} />
        </View>
        <Text
          style={{
            padding: 20,
            fontWeight: 700,
            fontSize: 20,
          }}>
          {bmi}
        </Text>
        <View>
          <Text
            style={{
              color: 'white',
              fontSize: 25,
              fontWeight: '800',
            }}>
            YOU ARE OVER WEIGHT 🚨🚨
          </Text>
        </View>
      </View>
    );
  }
}
const result = ({route}: {route: any}) => {
  const [bmi, getBmi] = useState(route.params.bmi);
  return (
    <View style={{flex: 1}}>
      <LinearGradient colors={['#ED1E79', '#662D8C']} style={style.gradient}>
        <View style={style.text}>
          <Text
            style={{
              padding: 20,
              fontWeight: 700,
              fontSize: 20,
            }}>
            Your BMI
          </Text>
          {displayy(bmi)}
        </View>
      </LinearGradient>
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 100,
  },
  results: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  gradient: {
    flex: 1,
  },
});
export default result;

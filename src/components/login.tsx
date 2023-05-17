import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet, View, Text, TextInput, Pressable,Image} from 'react-native';

const Login = ({navigation}) => {
  const [name, getName] = useState('');
  function passname() {
    console.log(name);
    navigation.navigate('Home', {name});
  }
  return (
    <View style={style.body}>
      <LinearGradient colors={['#ED1E79', '#662D8C']} style={style.gradient}>
        <View style={style.bodycontent}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}>
              <View>
          
          <Image
          style={{
            maxHeight:70,
            maxWidth:147,
          }}
          source={require('../assets/Logo.png')}/>
        </View>
            <Text
              style={{
                fontSize: 50,
                fontWeight:600,
                justifyContent: 'center',
                alignItems: 'center',
                color: '#662D8C',
              }}>
              BMI
            </Text>
            <Text
              style={{
                fontSize: 50,
                fontWeight:600,
                justifyContent: 'center',
                alignItems: 'center',
                color: '#662D8C',
              }}>
              {' '}
              CALCULATOR
            </Text>
          </View>
          
          <View style={style.namebox}>
            <TextInput
              style={style.name}
              placeholder='  Name'
              onChangeText={value => getName(value)}>
            </TextInput>
          </View>
          <View>
            <Pressable style={style.button} onPress={passname}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'white',
                }}>
                Proceed 👉
              </Text>
            </Pressable>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};
const style = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  body: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  bodycontent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  namebox: {
    width: 350,
  },
  name: {
    display: 'flex',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    fontSize: 30,
    color: 'black',
    padding:20
  },
  button: {
    padding: 10,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#662D8C',
    elevation: 30,
    shadowColor: '#ED1E79',
  },
});
export default Login;

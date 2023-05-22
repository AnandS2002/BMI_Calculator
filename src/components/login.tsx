import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  Alert,
} from 'react-native';

const Login = ({navigation}: {navigation: any}) => {
  const [name, getName] = useState('');
  const [password, getPassWord] = useState('');
  const passname = async () => {
    try {
      await AsyncStorage.setItem('username', name);
      await AsyncStorage.setItem('password', password);

      const existingUsers = await AsyncStorage.getItem('users');
      console.log(existingUsers);
      if (existingUsers) {
        // If there are existing users, parse the JSON and find the matching user
        const users = JSON.parse(existingUsers);

        const matchedUser = users.find(user => user.username == name);
        console.log(matchedUser);

        if (matchedUser) {
          Alert.alert('You are Logged In');
          navigation.navigate('Data');
          // console.log('User credentials are valid. User is authenticated.');
        } else {
          Alert.alert('Wrong Credentials');
          console.log('Invalid username or password. Authentication failed.');
          return;
        }
      } else {
        Alert.alert('User Not Registered');

        console.log('No registered users found. Authentication failed.');
      }
      // if (val1 == name && val2 == password) {
      //   Alert.alert('You are Logged In');
      //   navigation.navigate('Data');
      // } else {
      //   Alert.alert('Wrong Credentials');
      // }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <KeyboardAwareScrollView contentContainerStyle={style.body}>
      <LinearGradient colors={['#ED1E79', '#662D8C']} style={style.gradient}>
        <View
          style={{
            padding: 20,
            marginTop: 40,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}>
          <View>
            <Image
              style={{
                maxHeight: 70,
                maxWidth: 147,
              }}
              source={require('../assets/Logo.png')}
            />
          </View>
          <Text
            style={{
              fontSize: 40,
              fontWeight: 600,
              justifyContent: 'center',
              alignItems: 'center',
              color: '#fff',
            }}>
            BMI
          </Text>
          <Text
            style={{
              fontSize: 40,
              fontWeight: 600,
              justifyContent: 'center',
              alignItems: 'center',
              color: '#fff',
            }}>
            {' '}
            CALCULATOR
          </Text>
        </View>

        <View style={style.namebox}>
          <View>
            <TextInput
              style={style.name}
              placeholder="  Name"
              onChangeText={value => getName(value)}></TextInput>
          </View>
          <Text>{'\n'}</Text>
          <View>
            <TextInput
              style={style.name}
              placeholder="  Password"
              secureTextEntry={true}
              onChangeText={value => getPassWord(value)}></TextInput>
          </View>
        </View>
        <View style={{margin: 30, alignItems: 'center'}}>
          <Pressable style={style.button} onPress={passname}>
            <Text
              style={{
                fontSize: 20,
                color: 'white',
              }}>
              LOGIN 👉
            </Text>
          </Pressable>
        </View>
      </LinearGradient>
    </KeyboardAwareScrollView>
  );
};
const style = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  body: {
    flex: 1,
    color: 'black',
    backgroundColor: '',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  bodycontent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'space-around',
    alignItems: 'center',
  },
  namebox: {
    padding: 20,
    width: 400,
    display: 'flex',
    alignSelf: 'center',
  },
  name: {
    display: 'flex',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    fontSize: 30,
    color: 'black',
    padding: 20,
  },
  button: {
    padding: 20,
    borderWidth: 0.5,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#662D8C',
    elevation: 10,
    shadowColor: '#ED1E79',
    width: 150,
  },
});
export default Login;

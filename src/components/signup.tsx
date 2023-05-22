import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomePage from './home';
import Login from './login';
let cred = [];
const SignUp = ({navigation}: {navigation: any}) => {
  const [username, getName] = useState('');
  const [pass, getPass] = useState('');
  const [confirmpass, getConfirmPass] = useState('');
  const storeUserCredentials = async () => {
    // await AsyncStorage.clear();
    try {
      const existingUsers = await AsyncStorage.getItem('users');
      let users = [];

      if (existingUsers) {
        // If there are existing users, parse the JSON and add them to the array
        users = JSON.parse(existingUsers);
        const userExists = users.some(user => user.username === username);

        if (userExists) {
          Alert.alert('Username Already Exist');
          console.log(
            'User already exists. Cannot store duplicate user credentials.',
          );
          return;
        } else {
          Alert.alert('Successfully Registered');
        }
      }
      console.log(existingUsers);
      users.push({username, pass});
      navigation.navigate('Login');

      // Store the updated array of users
      await AsyncStorage.setItem('users', JSON.stringify(users));
      console.log('User credentials stored successfully.');
    } catch (error) {
      console.log('Error storing user credentials:', error);
    }
  };
  return (
    <LinearGradient colors={['#ED1E79', '#662D8C']} style={{flex: 1}}>
      <KeyboardAwareScrollView style={style.body}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image style={style.logo} source={require('../assets/Logo.png')} />
          <View style={style.header}>
            <Text style={style.headertext}>BMI Calculator</Text>
          </View>
        </View>
        <View style={style.namebox}>
          <View>
            <TextInput
              style={style.name}
              placeholder="  Name"
              onChangeText={value => getName(value)}></TextInput>
          </View>
          <View>
            <TextInput
              style={style.name}
              placeholder="  Password"
              secureTextEntry={true}
              onChangeText={value => getPass(value)}></TextInput>
          </View>
          <View>
            <TextInput
              style={style.name}
              placeholder=" Confirm Password"
              secureTextEntry={true}
              onChangeText={value => getConfirmPass(value)}></TextInput>
          </View>
        </View>
        <View style={style.buttonbox}>
          <Pressable style={style.button}>
            <Text style={style.headertext} onPress={storeUserCredentials}>
              Register
            </Text>
          </Pressable>
        </View>
      </KeyboardAwareScrollView>
    </LinearGradient>
  );
};
const style = StyleSheet.create({
  body: {
    flex: 1,
  },
  logo: {
    maxHeight: 50,
    maxWidth: 107,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headertext: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '900',
    color: '#fff',
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
    padding: 15,
    margin: 10,
  },
  buttonbox: {alignItems: 'center', justifyContent: 'center', padding: 40},
  button: {
    padding: 15,
    borderWidth: 0.5,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#662D8C',
    elevation: 10,
    shadowColor: '#ED1E79',
    width: 120,
  },
});

export default SignUp;

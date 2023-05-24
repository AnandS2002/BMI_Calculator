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
import {useFocusEffect} from '@react-navigation/native';
let cred = [];
const SignUp = ({navigation}: {navigation: any}) => {
  const [username, getName] = useState('');
  const [pass, getPass] = useState('');
  const [confirmpass, getConfirmPass] = useState('');
  const storeUserCredentials = async () => {
    await AsyncStorage.clear();
    if (confirmpass === pass) {
      try {
        const existingUsers = await AsyncStorage.getItem('users');
        let users = [];

        if (existingUsers) {
          users = JSON.parse(existingUsers);
          const userExists = users.some(user => user.username === username);

          if (userExists) {
            Alert.alert('Username Already Exist');

            return;
          } else {
            Alert.alert('Successfully Registered');
          }
        }
        users.push({username, pass});
        navigation.navigate('Login');

        await AsyncStorage.setItem('users', JSON.stringify(users));
        console.log('User credentials stored successfully.');
      } catch (error) {
        console.log('Error storing user credentials:', error);
      }
    } else {
      Alert.alert('Please Confirm entered Password');
      return;
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      getName('');
      getPass('');
      getConfirmPass('');
    }, []),
  );
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
              value={username}
              onChangeText={value => getName(value)}></TextInput>
          </View>
          <View>
            <TextInput
              style={style.name}
              placeholder="  Password"
              value={pass}
              secureTextEntry={true}
              onChangeText={value => getPass(value)}></TextInput>
          </View>
          <View>
            <TextInput
              style={style.name}
              placeholder=" Confirm Password"
              value={confirmpass}
              secureTextEntry={true}
              onChangeText={value => getConfirmPass(value)}></TextInput>
          </View>
          <View style={style.header}>
            <Text
              style={{fontSize: 18}}
              onPress={() => navigation.navigate('Login')}>
              Already have an account?
            </Text>
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
    padding: 10,
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
  buttonbox: {alignItems: 'center', justifyContent: 'center', padding: 20},
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

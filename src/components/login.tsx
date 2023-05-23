import React, {useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
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
        const users = JSON.parse(existingUsers);

        const matchedUser = users.find(
          user => user.username == name && user.pass == password,
        );

        if (matchedUser) {
          Alert.alert('You are Logged In');
          navigation.navigate('CurrentUser');
        } else {
          Alert.alert('Wrong Credentials');
          return;
        }
      } else {
        Alert.alert('User Not Registered');
      }
    } catch (error) {
      console.log(error);
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      getName('');
      getPassWord('');
    }, []),
  );
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
              value={name}
              placeholder="  Name"
              onChangeText={value => getName(value)}></TextInput>
          </View>
          <Text>{'\n'}</Text>
          <View>
            <TextInput
              style={style.name}
              placeholder="  Password"
              value={password}
              secureTextEntry={true}
              onChangeText={value => getPassWord(value)}></TextInput>
          </View>
        </View>
        <View
          style={{padding: 10, justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{fontSize: 18}}
            onPress={() => navigation.navigate('SignUp')}>
            Don't have an account?
          </Text>
        </View>
        <View style={{padding: 20, alignItems: 'center'}}>
          <Pressable style={style.button} onPress={passname}>
            <Text
              style={{
                fontSize: 20,
                color: 'white',
              }}>
              LOGIN
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
    padding: 15,
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

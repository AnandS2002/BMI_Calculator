import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Image,
} from 'react-native';

const Login = ({navigation}: {navigation: any}) => {
  const [name, getName] = useState('');
  const [password,getPassWord]=useState('');
  function passname() {
    navigation.navigate('Data', {name,password});
  }
  return (
    <KeyboardAwareScrollView contentContainerStyle={style.body}>
      <LinearGradient colors={['#ED1E79', '#662D8C']} style={style.gradient}>
        {/* <View style={style.bodycontent}> */}
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
              fontSize: 50,
              fontWeight: 600,
              justifyContent: 'center',
              alignItems: 'center',
              color: '#662D8C',
            }}>
            BMI
          </Text>
          <Text
            style={{
              fontSize: 50,
              fontWeight: 600,
              justifyContent: 'center',
              alignItems: 'center',
              color: '#662D8C',
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
        {/* </View> */}
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

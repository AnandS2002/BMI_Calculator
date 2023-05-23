import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  StyleSheet,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';

const CurrentUser = ({navigation}: {navigation: any}) => {
  const [currentUserName, getCurrentName] = useState('');

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
            <Text style={{fontSize: 30, color: 'violet', fontWeight: '600'}}>
              {' '}
              Who Am I ?{'\n'}
            </Text>
          </View>
          <View>
            <TextInput
              style={style.name}
              placeholder="  Name"
              onChangeText={value => getCurrentName(value)}></TextInput>
          </View>
        </View>

        <View style={style.buttonbox}>
          <Pressable style={style.button}>
            <Text
              style={style.headertext}
              onPress={() => navigation.navigate('Data', {currentUserName})}>
              Proceed
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
export default CurrentUser;
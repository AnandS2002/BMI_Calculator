import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
var ImagePicker = require('react-native-image-picker');
const CurrentUser = ({navigation}: {navigation: any}) => {
  const [currentUserName, getCurrentName] = useState('');
  const [url, setImage] = useState('');
  const selectFile = async () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
      allowsEditing: true,
      aspect: [1, 1],
    };
    ImagePicker.launchImageLibrary(options, async selectedImage => {
      if (selectedImage.didCancel) {
        console.log('User cancelled image picker');
      } else if (selectedImage.error) {
        console.log('ImagePicker Error: ', selectedImage.error);
      } else if (selectedImage.customButton) {
        console.log('User tapped custom button: ', selectedImage.customButton);
      } else {
        console.log(selectedImage);
        const source = {uri: selectedImage.assets[0].uri};
        setImage(source.uri);
        const response = await fetch(selectedImage.assets[0].uri);
        const filename = selectedImage.assets[0].uri.substring(
          selectedImage.assets[0].uri,
        );
        console.log(`hey this is your url `, filename);
      }
    });
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
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={{paddingBottom: 20}}>
            <Image
              source={{uri: url}}
              style={{height: 100, width: 100, borderRadius: 50}}
            />
          </View>
          <TouchableOpacity
            style={{borderWidth: 1, borderRadius: 10}}
            onPress={selectFile}>
            <Text style={{padding: 15, fontSize: 20}}>Choose Image</Text>
          </TouchableOpacity>
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

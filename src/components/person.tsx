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
  PermissionsAndroid,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
var ImagePicker = require('react-native-image-picker');
const CurrentUser = ({navigation}: {navigation: any}) => {
  const [currentUserName, getCurrentName] = useState('');
  const [url, setImage] = useState('');
  const selectFile = async (ch: number) => {
    const options = {
      mediaType: 'photo',
      quality: 1,
      allowsEditing: true,
      aspect: [1, 1],
    };
    if (ch == 1) {
      ImagePicker.launchImageLibrary(
        options,
        async (selectedImage: {
          didCancel: any;
          error: any;
          customButton: any;
          assets: {uri: any}[];
        }) => {
          if (selectedImage.didCancel) {
            console.log('User cancelled image picker');
          } else if (selectedImage.error) {
            console.log('ImagePicker Error: ', selectedImage.error);
          } else if (selectedImage.customButton) {
            console.log(
              'User tapped custom button: ',
              selectedImage.customButton,
            );
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
        },
      );
    } else if (ch == 2) {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA).then(
        result => {
          if (result === PermissionsAndroid.RESULTS.GRANTED) {
            ImagePicker.launchCamera(
              options,
              (response: {
                didCancel: any;
                error: any;
                assets: {uri: any}[];
              }) => {
                if (response.didCancel) {
                  console.log('User cancelled camera');
                } else if (response.error) {
                  console.log('ImagePicker Error: ', response.error);
                } else {
                  const source = {uri: response.assets[0].uri};
                  console.log(source);
                  setImage(source.uri);
                }
              },
            );
          }
        },
      );
    } else {
    }
  };

  return (
    <LinearGradient colors={['#ED1E79', '#662D8C']} style={{flex: 1}}>
      <KeyboardAwareScrollView style={style.body}>
       <View ><View
          style={{
            justifyContent: 'center',
            // marginTop:35,
            alignItems: 'center',
          }}>
          <Image style={style.logo} source={require('../assets/Logo.png')} />
          <View style={style.header}>
            <Text style={style.headertext}>BMI Calculator</Text>
          </View>
        </View>
        </View> 
        <View style={{justifyContent: 'center', alignItems: 'center',}}>
          <Text style={{paddingBottom: 20, fontSize: 25}}>
            Choose Profile Image
          </Text>
          <View style={{paddingBottom: 20}}>
            {url ? (
              <Image
                source={{uri: url}}
                style={{height: 120, width: 120, borderRadius: 60}}
              />
            ) : (
              <Image
                source={require('../assets/user.png')}
                style={{height: 120, width: 120, borderRadius: 60}}
              />
            )}
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              style={{borderWidth: 1, borderRadius: 10}}
              onPress={() => selectFile(1)}>
              <Text style={{padding: 15, fontSize: 20}}>Open Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{borderWidth: 1, borderRadius: 10}}
              onPress={() => selectFile(2)}>
              <Text style={{padding: 15, fontSize: 20}}>Open Camera</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.namebox}>
          <View>
            <Text style={{fontSize: 30, color: 'violet', fontWeight: '600'}}>
              {'\n\t'}
              Who Am I ?{''}
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
              onPress={() =>
                navigation.navigate('Data', {currentUserName, url})
              }>
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
    // padding: 10,
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
  buttonbox: {alignItems: 'center', justifyContent: 'center',},
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

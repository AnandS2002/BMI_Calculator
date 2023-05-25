import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {update} from '../redux/slice';
import {
  Button,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
const Welcome = (props: {
  welcom:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  return (
    <Text style={{fontSize: 28, color: 'black'}}>
      Hello , {props.welcom} 👋
    </Text>
  );
};
let username;

const YourApp = ({route, navigation}: {route: any; navigation: any}) => {
  const [username, setUsername] = useState(null);
  const [password, getPassWord] = useState('');
  const [currentUserName, getCurrentUser] = useState(
    route.params.currentUserName,
  );
  const [profilepic, getPic] = useState(route.params.url);
  const [age, setAge] = useState(2);
  const [height, getHeight] = useState('');
  const [weight, getWeight] = useState('');
  const [gender, setGender] = useState('');
  const dispatch = useDispatch();

  var bmi;

  const simpleAlert = () => {
    Alert.alert('Calculating your BMI...');
  };

  useEffect(() => {
    const retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem('username');
        const value2 = await AsyncStorage.getItem('password');
        if (value !== null) {
          setUsername(value);
          getPassWord(value2);
        }
      } catch (error) {
        console.log('Error retrieving data: ', error);
      }
    };
    retrieveData();
  }, []);

  async function calculate() {
    const w = parseInt(weight);
    const h = parseInt(height);
    bmi = (w / ((h / 100) * (h / 100))).toFixed(5);
    dispatch(update(bmi));
    try {
      let list = [];
      var currentusers = await AsyncStorage.getItem('userdetails');
      if (currentusers) {
        list = JSON.parse(currentusers);

        const userExists = list.some(
          user => user.currentUserName === currentUserName,
        );
        if (userExists) {
          Alert.alert('BMI already calculated.Please Check the list');
          return;
        } else {
          Alert.alert('Calculating BMI...');
          navigation.navigate('Result', {bmi});
        }
      }
      list.push({
        currentUserName,
        bmi,
        gender,
        height,
        weight,
        age,
        profilepic,
      });

      await AsyncStorage.setItem('userdetails', JSON.stringify(list));
    } catch (error) {
      console.log('ERROR', error);
    }
  }
  function list() {
    navigation.navigate('List');
  }
  return (
    <LinearGradient colors={['#ED1E79', '#662D8C']} style={style.gradient}>
      <KeyboardAwareScrollView style={style.body}>
        <View style={style.headingbox}>
          <View
            style={{
              display: 'flex',
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              alignSelf: 'stretch',
            }}>
            <View>
              <Text style={style.headingtext}>BMI Calculator </Text>
            </View>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                padding: 7,
                borderRadius: 15,
                borderColor: 'silver',
              }}
              onPress={() => navigation.navigate('Login')}>
              <Image source={require('../assets/logout.png')} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <View>
              <Welcome welcom={username} />
            </View>
            <View>
              <TouchableOpacity onPress={list}>
                <View>
                  <Image source={require('../assets/menu.png')} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text style={style.text}>{'\t\t'}What you are?</Text>
        <View style={style.genderbox}>
          <TouchableOpacity onPress={() => setGender('Male')}>
            <View style={style.male}>
              <Text style={style.text}>Male</Text>
              <View></View>
              <Image
                style={{
                  width: 70,
                  height: 70,
                }}
                source={require('../assets/men.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setGender('Female')}>
            <View style={style.female}>
              <Text style={style.text}>Female</Text>
              <Image
                style={{
                  width: 70,
                  height: 70,
                }}
                source={require('../assets/femenine.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={style.text}>{'\t\t'}What's your age?</Text>
          <View>
            <View style={style.agebox}>
              <Text style={style.age}>{age > 1 ? age : 1}</Text>
              <View style={style.agebutton}>
                <View>
                  <Button title="+" onPress={() => setAge(age + 1)} />
                </View>
                <View>
                  <Button
                    title="-"
                    onPress={() =>
                      setAge(age => {
                        if (age <= 2) return 2;
                        else return age - 1;
                      })
                    }
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={style.heightweightbox}>
          <View style={style.heightweighttitle}>
            <Text style={style.text}>What's your height</Text>
            <Text style={style.text}>What's your weight</Text>
          </View>
        </View>
        <View style={style.heightweightbox}>
          <View style={style.heightweight}>
            <TextInput
              style={style.height}
              maxLength={3}
              onChangeText={value => getHeight(value)}
              keyboardType="phone-pad"></TextInput>
            <Text style={style.unit}>cm</Text>
          </View>
          <View style={style.heightweight}>
            <TextInput
              style={style.weight}
              maxLength={3}
              onChangeText={value => getWeight(value)}
              keyboardType="phone-pad"
            />
            <Text style={style.unit}>kg</Text>
          </View>
        </View>
        <View style={{padding: 20}}>
          <Pressable style={style.button} onPress={calculate}>
            <Text style={style.text}>Find</Text>
          </Pressable>
        </View>
      </KeyboardAwareScrollView>
    </LinearGradient>
  );
};

const style = StyleSheet.create({
  test: {
    backgroundColor: 'yellow',
  },
  body: {
    flex: 1,
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
  },
  gradient: {
    flex: 1,
  },
  unit: {
    fontSize: 30,
    color: 'black',
  },
  text: {
    padding: 10,
    fontSize: 20,
    color: 'white',
  },
  headingbox: {
    padding: 20,
    borderBottomWidth: 0.2,
    borderBottomColor: 'silver',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingtext: {
    textAlign: 'justify',
    color: 'gold',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 15,
  },
  genderbox: {
    paddingBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomColor: 'silver',
    borderBottomWidth: 0.2,
  },
  male: {
    width: 150,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingBottom: 20,
    paddingRight: 20,
    borderRadius: 10,
    backgroundColor: 'dodgerblue',
    borderColor: 'silver',
  },
  female: {
    width: 150,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingBottom: 20,
    paddingRight: 20,
    borderRadius: 10,
    backgroundColor: 'fuchsia',
    borderColor: 'silver',
  },
  agebox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 0.2,
    borderBottomColor: 'silver',
  },
  age: {
    height: 100,
    width: 100,
    padding: 20,
    marginLeft: 30,
    fontSize: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    borderColor: 'pink',
  },
  agebutton: {
    justifyContent: 'space-around',
    width: 50,
    marginRight: 70,
  },
  heightweightbox: {
    padding: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  heightweighttitle: {
    padding: 0,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  heightweight: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  height: {
    padding: 20,
    borderBottomWidth: 1,
    height: 100,
    width: 120,
    borderRadius: 10,
    fontSize: 50,
    color: 'black',
    borderBottomColor: 'silver',
  },
  weight: {
    padding: 20,
    borderBottomWidth: 1,
    height: 100,
    width: 120,
    borderRadius: 10,
    fontSize: 50,
    color: 'black',
    borderBottomColor: 'silver',
  },
  button: {
    display: 'flex',
    width: '30%',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'orange',
  },
});

export default YourApp;

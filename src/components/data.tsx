import React, {useState} from 'react';
import 'react-native-gesture-handler';
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
  return <Text style={style.text}>Hello ,{props.welcom} 👋</Text>;
};

const YourApp = ({route, navigation}: {route: any; navigation: any}) => {
  const [name, setName] = useState(route.params.name);
  const [password,getPassWord]=useState(route.params.password);
  const [age, setAge] = useState(2);
  const [height, getHeight] = useState('');
  const [weight, getWeight] = useState('');
  const [gender, setGender] = useState('');
  var bmi;
  const simpleAlert = () => {
    Alert.alert('Calculating your BMI...');
  };
  function calculate() {
    console.log(gender);
    const w = parseInt(weight);
    const h = parseInt(height);
    bmi = (w / ((h / 100) * (h / 100))).toFixed(5);
    console.log(bmi);
    navigation.navigate('Result', {bmi});
  }
  function list() {
    const list = [];
    list.push({
      name: name,
      bmi: bmi,
      gender: gender,
      height: height,
      weight: weight,
      age: age,
    });
    console.log(list);
    navigation.navigate('List', {list});
  }
  return (
    <KeyboardAwareScrollView style={style.body}>
      <LinearGradient colors={['#ED1E79', '#662D8C']} style={style.gradient}>
        <View style={style.headingbox}>
          <View
            style={{
              display: 'flex',
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <TouchableOpacity>
            <View>
              <Image source={require('../assets/menu.png')} />
            </View>
            </TouchableOpacity>
            <View>
              <Text style={style.headingtext}>BMI Calculator </Text>
            </View>
            <TouchableOpacity onPress={list}>
              <View>
                <Image source={require('../assets/list.png')} />
              </View>
            </TouchableOpacity>
          </View>
          <Welcome welcom={name} />
        </View>
        <Text style={style.text}>What you are?</Text>
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
          <Text style={style.text}>What's your age?</Text>
          <View>
            <View style={style.agebox}>
              <Text style={style.age}>{age > 1 ? age : 1}</Text>
              <View style={style.agebutton}>
                <Button title="+" onPress={() => setAge(age + 1)} />
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
        <View style={style.heightweightbox}>
          <View style={style.heightweightbox}>
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
        <Pressable style={style.button} onPress={calculate}>
          <Text>Find</Text>
        </Pressable>
      </LinearGradient>
    </KeyboardAwareScrollView>
  );
};

const style = StyleSheet.create({
  test: {
    backgroundColor: 'yellow',
  },
  body: {
    flex: 1,
    color: 'black',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
  },
  gradient: {
    flex: 1,
  },
  unit: {
    fontSize: 25,
    color: 'olive',
  },
  text: {
    padding: 10,
    fontSize: 20,
    color: 'black',
  },
  headingbox: {
    padding: 20,
    borderBottomWidth: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingtext: {
    textAlign: 'justify',
    color: 'orange',
    fontSize: 40,
    padding:15,
  },
  genderbox: {
    paddingBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomColor: 'black',
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
  },
  agebox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    // backgroundColor: 'red',
    borderBottomWidth: 0.2,
    borderBottomColor: 'black',
  },
  age: {
    height: 100,
    width: 100,
    padding: 20,
    marginLeft: 30,
    // backgroundColor:'red',
    fontSize: 50,
    borderWidth: 0.2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
  },
  agebutton: {
    justifyContent: 'center',
    width: 50,
    marginRight: 70,
  },
  heightweightbox: {
    padding: 0,
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
  },
  weight: {
    padding: 20,
    borderBottomWidth: 1,
    height: 100,
    width: 120,
    borderRadius: 10,
    fontSize: 50,
    color: 'black',
  },
  button: {
    marginTop: 5,
    marginBottom: 170,
    display: 'flex',
    width: 200,
    padding: 15,
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'orange',
  },
});

export default YourApp;

import {CurrentRenderContext} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
var newList = [];
var detailedList: {id: any}[] = [];
const showDetails = ({item, navigation}: {item: any; navigation: any}) => {
  console.log(item);

  // detailedList.

  console.log(detailedList);
  navigation.navigate('Details', {item});
};
const list = ({route, navigation}: {route: any; navigation: any}) => {
  console.log(JSON.stringify(route.params.list));
  const [details, getList] = useState(route.params.list);
  // const [detailedList,getDetails]=useState([]);

  newList.push({
    id: newList.length + 1,
    name: details[0].name,
    bmi: details[0].bmi,
    gender: details[0].gender,
    height: details[0].height,
    weight: details[0].weight,
    age: details[0].age,
  });

  console.log(details[0].bmi);
  return (
    <View style={style.test}>
      <LinearGradient colors={['#ED1E79', '#662D8C']} style={style.gradient}>
        <View style={{padding: 10, marginBottom: 50}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              padding: 20,
            }}>
            <Text
              style={{
                fontSize: 50,
              }}>
              List
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              padding: 20,
            }}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: '900',
                color: 'white',
              }}>
              Name
            </Text>
            <Text
              style={{
                fontSize: 25,
                fontWeight: '900',
                color: 'orange',
              }}>
              BMI
              {'         '}
            </Text>
          </View>
          <SafeAreaView
            style={{borderWidth: 1, borderRadius: 10, borderColor: 'silver'}}>
            <FlatList
              style={style.item}
              data={newList}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => showDetails({item, navigation})}>
                  <View
                    style={{
                      margin: 5,
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      backgroundColor: 'white',
                      borderRadius: 10,
                    }}>
                    <View>
                      <Text
                        style={{
                          fontSize: 20,
                          color: 'black',
                          padding: 10,
                          marginVertical: 10,
                        }}>
                        {item.name}
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: 20,
                          color: 'black',
                          padding: 10,
                          marginVertical: 10,
                        }}>
                        {item.bmi}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </SafeAreaView>
        </View>
      </LinearGradient>
    </View>
  );
};
const style = StyleSheet.create({
  test: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  item: {
    display: 'flex',
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 8,
    borderRadius: 20,
  },
});
export default list;

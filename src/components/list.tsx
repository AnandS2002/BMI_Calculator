import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
var newList = [];
const list = ({route} = {route: any}) => {
  // console.log(JSON.stringify(route.params.list));
  const [details, getList] = useState(route.params.list);

  newList.push({
    name: details[0].name,
    bmi: details[0].bmi,
  });

  console.log(details[0].bmi);
  return (
    <View style={style.test}>
      <LinearGradient colors={['#ED1E79', '#662D8C']} style={style.gradient}>
        <View
          style={{
            display:'flex',
            flexDirection:'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 50,
            }}>
            List
          </Text>
          {/* <View>
            <TouchableOpacity>
            <Image source={require('../assets/refresh.png')} />
            </TouchableOpacity>
          </View> */}
          
        </View>
        <View style={{
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-around'
        }}>
            <Text
            style={{
              fontSize:20
            }}>
              Name
            </Text>
            <Text
             style={{
              fontSize:20
            }}>BMI</Text>
          </View>
        <View>
          <FlatList
            style={style.item}
            data={newList}
            renderItem={({item}) => (
              <Text
                style={{
                  fontSize: 20,
                  color:'black'
                }}>
                {item.name}        {item.bmi}
              </Text>
            )}
          />
        </View>
      </LinearGradient>
    </View>
  );
};
const style = StyleSheet.create({
  test: {
    flex: 1,
    backgroundColor: 'red',
  },
  gradient: {
    flex: 1,
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical:10,
    marginHorizontal: 8,
    borderRadius: 20,
    elevation: 15,
    shadowColor: 'blue',
    shadowOpacity: 10,
  },
});
export default list;

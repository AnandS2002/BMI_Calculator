import AsyncStorage from '@react-native-async-storage/async-storage';
import {CurrentRenderContext} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
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
const showDetails = ({item, navigation}: {item: any; navigation: any}) => {
  navigation.navigate('Details', {item});
};

const List = ({navigation}: {navigation: any}) => {
  const [newList, getnewList] = useState([]);

  useEffect(() => {
    async function getList() {
      console.log('outside');

      const existingUsers = await AsyncStorage.getItem('userdetails');
      if (existingUsers) {
        console.log('inside');
        const users = JSON.parse(existingUsers);
        getnewList(users);
      }
    }
    getList();
  }, []);
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
                        {item.currentUserName}
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
export default List;

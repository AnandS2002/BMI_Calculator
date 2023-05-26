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
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import YourApp from './data';
const showDetails = ({item, navigation}: {item: any; navigation: any}) => {
  navigation.navigate('Details', {item});
};

const List = ({navigation}: {navigation: any}) => {
  const [newList, getnewList] = useState([]);
  const [refresh, toRefresh] = useState([]);
  useEffect(() => {
    async function getList() {
      const existingUsers = await AsyncStorage.getItem('userdetails');
      if (existingUsers) {
        const users = JSON.parse(existingUsers);
        getnewList(users);
        toRefresh(users);
      }
    }
    getList();
  }, [refresh]);
  const deleteDetail = async ({item}) => {
    const existingUsers = await AsyncStorage.getItem('userdetails');
    const users = JSON.parse(existingUsers);

    const index = users.findIndex(
      value => value.currentUserName == item.currentUserName,
    );
    users.splice(index, 1);
    await AsyncStorage.setItem('userdetails', JSON.stringify(users));
    Alert.alert('Data Deleted !!');

    toRefresh(users);

    // navigation.navigate(YourApp);
  };
  return (
    // <View style={style.test}>
    <LinearGradient colors={['#ED1E79', '#662D8C']} style={style.gradient}>
      <View style={{padding: 10, marginBottom: 50}}>
        <View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
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
            <Text style={{color: 'yellow', padding: 10}}>
              (Long press to Remove data)
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              padding: 20,
              paddingLeft: 40,
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
            </Text>
          </View>
        </View>
        <SafeAreaView
          style={{
            maxHeight: '70%',
            borderWidth: 1,
            borderRadius: 10,
            borderColor: 'silver',
            display: 'flex',
          }}>
          <FlatList
            style={style.item}
            data={newList}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => showDetails({item, navigation})}
                onLongPress={() => deleteDetail({item})}>
                <View
                  style={{
                    marginVertical: 5,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    backgroundColor: 'white',
                    borderRadius: 10,
                  }}>
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                      source={{uri: item.profilepic}}
                      style={{height: 40, width: 40, borderRadius: 20}}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-around',
                      width: '35%',
                    }}>
                    <Text
                      style={{
                        fontSize: 20,
                        color: 'black',
                        padding: 10,
                        marginVertical: 10,
                      }}>
                      {/* {'\t\t\t\t\t'} */}
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
    // </View>
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

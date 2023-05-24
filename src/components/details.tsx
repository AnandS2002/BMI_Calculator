import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Details = ({route}: {route: any}) => {
  console.log(route.params.item);
  return (
    <View style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
      <LinearGradient colors={['#ED1E79', '#662D8C']} style={style.gradient}>
        <View
          style={{
            padding: 50,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 50, color: 'blue'}}>Details</Text>
        </View>
        <View style={{margin: 10}}>
          <View
            style={{
              padding: 25,
              display: 'flex',
              flexDirection: 'column',
              marginTop: 40,
              borderWidth: 1,
              borderRadius: 10,
            }}>
            <View
              style={{
                alignItems: 'center',
                borderBottomWidth: 1,
                padding: 10,
                borderBottomColor: 'silver',
              }}>
              {route.params.item.profilepic ? (
                <Image
                  source={{uri: route.params.item.profilepic}}
                  style={{height: 150, width: 150, borderRadius: 75}}
                />
              ) : (
                <Image
                  source={require('../assets/user.png')}
                  style={{height: 150, width: 150, borderRadius: 75}}
                />
              )}
            </View>
            <View>
              <Text style={{padding: 10, fontSize: 30, fontWeight: '800'}}>
                Name :
                <Text style={{fontSize: 25, fontWeight: '400', color: 'white'}}>
                  {'     '}
                  {route.params.item.currentUserName}
                </Text>
              </Text>
            </View>
            <View>
              <Text style={{padding: 10, fontSize: 30, fontWeight: '800'}}>
                Age{'    '}:
                <Text style={{fontSize: 25, fontWeight: '400', color: 'white'}}>
                  {'     '}
                  {route.params.item.age}
                </Text>
              </Text>
            </View>
            <View>
              <Text style={{padding: 10, fontSize: 30, fontWeight: '800'}}>
                Sex{'     '}:
                <Text style={{fontSize: 25, fontWeight: '400', color: 'white'}}>
                  {'     '}
                  {route.params.item.gender}
                </Text>
              </Text>
            </View>
            <View>
              <Text style={{padding: 10, fontSize: 30, fontWeight: '800'}}>
                Height:
                <Text style={{fontSize: 25, fontWeight: '400', color: 'white'}}>
                  {'     '}
                  {route.params.item.height}
                </Text>
              </Text>
            </View>
            <View>
              <Text style={{padding: 10, fontSize: 30, fontWeight: '800'}}>
                Weight:
                <Text style={{fontSize: 25, fontWeight: '400', color: 'white'}}>
                  {'     '}
                  {route.params.item.weight}
                </Text>
              </Text>
            </View>
            <View>
              <Text style={{padding: 10, fontSize: 30, fontWeight: '800'}}>
                BMI{'     '}:
                <Text style={{fontSize: 25, fontWeight: '400', color: 'white'}}>
                  {'     '}
                  {route.params.item.bmi}
                </Text>
              </Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              {route.params.item.bmi < 18 ? (
                <Text
                  style={{
                    color: 'blue',
                    fontSize: 25,
                    fontWeight: '800',
                  }}>
                  UNDERWEIGHT
                </Text>
              ) : route.params.item.bmi < 25 ? (
                <Text
                  style={{
                    color: 'green',
                    fontSize: 25,
                    fontWeight: '800',
                  }}>
                  NORMAL
                </Text>
              ) : (
                <Text
                  style={{
                    color: 'red',
                    fontSize: 25,
                    fontWeight: '800',
                  }}>
                  OVERWEIGHT
                </Text>
              )}
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const style = StyleSheet.create({
  gradient: {
    flex: 1,
  },
});
export default Details;

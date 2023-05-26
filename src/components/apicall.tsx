import React, {useEffect, useState} from 'react';
import {View, Text, FlatList,Button} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {fetchData, post} from '../services/apicalls';

export const ApiCall = () => {
  const [data, getData] = useState(null);

  useEffect(() => {
    const fetchAPI = async () => {
      const resp = await fetchData();
      getData(resp);
    };

    fetchAPI();
  }, []);
  const PUT =async()=>{
    const rep=await post('anu','anu@gmail.com')
    console.log(rep)
  }
  return (
    <LinearGradient colors={['#ED1E79', '#662D8C']} style={{flex: 2}}>
      {data && (
        <View style={{height: '99%'}}>
          <Text style={{padding: 20, textAlign: 'center', fontSize: 25}}>
            THE LIST
          </Text>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <View
                style={{margin: 20, padding: 10, backgroundColor: 'skyblue',borderRadius:15}}>
                <Text>
                  <Text style={{fontSize: 20, fontWeight: '900'}}>
                    {item.title}
                  </Text>
                  {'\n'}ID:{item.id}
                  {'\n'}BODY:{item.body}
                </Text>
              </View>
            )}
          />
          <View>
            <Button title='put' onPress={PUT}/>
          </View>
        </View>
      )}
    </LinearGradient>
  );
};

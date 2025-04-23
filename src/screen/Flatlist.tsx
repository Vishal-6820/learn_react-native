import {StyleSheet, Text, TouchableOpacity, View, FlatList} from 'react-native';
import React, {useState} from 'react';

export default function Flatlist() {
  const [data, setData] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const onSelect = (index: number) => {
    const tempData = [];
    data.map((item, i) => {
      //   //multi selection
      //   if (i === index) {
      //     tempData.push(!item);
      //   } else {
      //     tempData.push(item);
      //   }
      //single selection
      if (i === index) {
        item == true ? tempData.push(false) : tempData.push(true);
      } else {
        item == true ? tempData.push(true) : tempData.push(false);
      }
    });
    setData(tempData);
  };
  return (
    <View style={{flex: 1}}>
      {/* <Text>FlatList</Text> */}
      <View style={{marginTop: 50}}>
        <FlatList
          data={data}
          renderItem={({item, index}: any) => {
            return (
              <TouchableOpacity
                style={{
                  width: '100%',
                  height: 70,
                  borderColor: '#8e8e8e',
                  borderWidth: 0.2,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: item ? 'green' : 'white',
                }}
                onPress={() => {
                  onSelect(index);
                }}>
                <Text style={{fontSize: 30}}>{`Item ${index + 1}`}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

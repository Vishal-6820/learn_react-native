import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useRef} from 'react';

import Slider from '../components/Slider';
export default function Friends() {
  return (
    <View style={{flex: 1}}>
      {/* <Text>Friends</Text> */}
      <Slider />
    </View>
  );
}

const styles = StyleSheet.create({});

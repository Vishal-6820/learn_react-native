import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Flatlist from './screen/Flatlist';

function App(): React.JSX.Element {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Flatlist />
    </View>
  );
}

const styles = StyleSheet.create({});

export default App;

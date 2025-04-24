import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Flatlist from './screen/Flatlist';
import DrawerNavigation from './navigation/DrawerNavigation';

function App(): React.JSX.Element {
  return (
    <View
      style={{
        flex: 1,
      }}>
      {/* <Flatlist /> */}
      <DrawerNavigation />
    </View>
  );
}

const styles = StyleSheet.create({});

export default App;

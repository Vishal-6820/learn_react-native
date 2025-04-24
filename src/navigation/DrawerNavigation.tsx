import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';

export default function DrawerNavigation() {
  const [menuShow, setMenuShow] = useState(false);
  const moveToRight = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;

  const drawerNavigationHandle = () => {
    Animated.timing(scale, {
      toValue: menuShow ? 1 : 0.7, // 0 to 1
      duration: 300,
      useNativeDriver: true,
    }).start();
    Animated.timing(moveToRight, {
      toValue: menuShow ? 0 : 230, // 0 to 1
      duration: 300,
      useNativeDriver: true,
    }).start();
    setMenuShow(!menuShow);
  };
  return (
    <View style={{flex: 1, backgroundColor: 'green'}}>
      {/* Menu design */}
      <View style={{flex: 1, backgroundColor: '#6600ff'}}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 50,
          }}>
          <Image
            source={require('../assets/images/drawer.png')}
            style={{width: 70, height: 70, borderRadius: 35, marginLeft: 20}}
          />
        </View>
      </View>
      {/* Home Design */}
      <Animated.View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
          transform: [{scale: scale}, {translateX: moveToRight}],
          borderRadius: menuShow ? 20 : 0,
        }}>
        <View style={{flexDirection: 'row', marginTop: 50}}>
          <TouchableOpacity
            style={{marginLeft: 20}}
            onPress={() => drawerNavigationHandle()}>
            <Image
              source={require('../assets/images/drawer.png')}
              style={{height: 40, width: 40}}
            />
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({});

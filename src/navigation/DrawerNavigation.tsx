import {
  Animated,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
type Props = NativeStackScreenProps<RootStackParamList, 'DrawerNavigation'>;

export default function DrawerNavigation() {
  const navigation = useNavigation();
  const [menuShow, setMenuShow] = useState(false);
  const moveToRight = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);
  const menu: any = [
    {
      name: 'Home',
      icon: require('../assets/images/home.png'),
    },
    {
      name: 'Explore',
      icon: require('../assets/images/compass.png'),
    },
    {
      name: 'Library',
      icon: require('../assets/images/open-book.png'),
    },
    {
      name: 'Friends',
      icon: require('../assets/images/friends.png'),
    },
    {
      name: 'Chat',
      icon: require('../assets/images/chat.png'),
    },
    {
      name: 'AddFriends',
      icon: require('../assets/images/add-friend.png'),
    },
  ];

  const drawerNavigationHandle = () => {
    Animated.timing(scale, {
      toValue: menuShow ? 1 : 0.7, // 0 to 1
      duration: 300,
      useNativeDriver: true,
    }).start();
    Animated.timing(moveToRight, {
      toValue: menuShow ? 0 : 250, // 0 to 1
      duration: 300,
      useNativeDriver: true,
    }).start();
    setMenuShow(!menuShow);
  };
  const renderItem = ({item, index}: any) => {
    return (
      <TouchableOpacity
        style={{
          width: 200,
          marginLeft: 20,
          height: 50,
          marginTop: 20,
          backgroundColor: selectedMenuIndex == index ? '#fff' : '#6600ff',
          borderRadius: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}
        onPress={() => {
          setSelectedMenuIndex(index);
          navigation.navigate(item.name);
        }}>
        <Image
          source={item.icon}
          style={{
            marginLeft: 15,
            width: 20,
            height: 20,
            tintColor: selectedMenuIndex == index ? 'black' : '#fff',
          }}
        />
        <Text
          style={{
            fontSize: 18,
            marginLeft: 20,
            color: selectedMenuIndex == index ? 'black' : '#fff',
          }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: '#6600ff'}}>
        {/* Menu design */}
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 50,
          }}>
          <Image
            source={require('../assets/images/myProfile.jpeg')}
            style={{width: 70, height: 70, borderRadius: 35, marginLeft: 20}}
          />
          <View style={{marginLeft: 20}}>
            <Text style={{fontSize: 24, fontWeight: '800', color: '#fff'}}>
              Vishal Parmar
            </Text>
            <Text style={{fontSize: 12, color: '#fff'}}>
              {` React Native Developer`}
            </Text>
          </View>
        </View>

        <View style={{flex: 1, backgroundColor: '#6600ff'}}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 50,
            }}>
            {/* <Image
              source={require('../assets/images/drawer.png')}
              style={{width: 70, height: 70, borderRadius: 35, marginLeft: 20}}
            /> */}
            <FlatList data={menu} renderItem={renderItem} />
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
            <Text style={{fontSize: 20, marginLeft: 20}}>
              {menu[selectedMenuIndex].name}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              width: '100%',
              height: 60,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              position: 'absolute',
              bottom: 20,
              backgroundColor: '#ffbe33',
            }}>
            <TouchableOpacity
              style={{
                width: '20%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/images/home.png')}
                style={{height: 30, width: 30}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '20%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/images/compass.png')}
                style={{height: 30, width: 30}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '20%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/images/open-book.png')}
                style={{height: 30, width: 30}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '20%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/images/chat.png')}
                style={{height: 30, width: 30}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '20%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/images/friends.png')}
                style={{height: 30, width: 30}}
              />
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

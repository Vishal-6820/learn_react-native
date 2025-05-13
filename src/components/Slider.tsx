import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  View,
} from 'react-native';
import React, {use, useRef} from 'react';

const {width, height} = Dimensions.get('window');
const ITEM_WIDTH = width * 0.7;
const ITEM_HEIGHT = height * 0.5; // Responsive height

export default function Slider() {
  const scrollX = useRef(new Animated.Value(0)).current;

  const imageData = [
    {image: require('../assets/images/slider1.jpg')},
    {image: require('../assets/images/slider2.jpg')},
    {image: require('../assets/images/slider3.jpg')},
    {image: require('../assets/images/slider4.jpg')},
    {image: require('../assets/images/slider5.jpg')},
  ];

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={imageData}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{alignItems: 'center'}}
        renderItem={({item, index}) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [-width * 0.7, 0, width * 0.7],
          });
          return (
            <View style={styles.slide}>
              <View style={styles.imageWrapper}>
                <Animated.Image
                  source={item.image}
                  style={[styles.image, {transform: [{translateY}]}]}
                  resizeMode="cover"
                />
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    borderRadius: 10,
    borderColor: '#FFF',
    borderWidth: 8,
    shadowOpacity: 20,
    shadowRadius: 18,
    shadowOffset: {width: 0, height: 0},
    shadowColor: '#000',
    elevation: 15,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

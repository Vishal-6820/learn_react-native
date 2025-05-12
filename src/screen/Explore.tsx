import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ShimmerEffect from './ShimmerEffect';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
type Props = NativeStackScreenProps<RootStackParamList, 'Explore'>;
export default function Explore(props: Props) {
  const x = useSharedValue(10);
  const boxValue = useSharedValue(0);
  const inpterPolateXInput = [0, 150];
  const animatedGestureHandler = useAnimatedGestureHandler({
    onActive: (event, ctx) => {
      console.log('onActive', event.translationX, event.translationY);
      // if (event.translationX > 0) {
      //   console.log('onActive', event.translationX, event.translationY);
      //   x.value = -event.translationX;
      // } else {
      x.value = event.translationX;
      // }
    },
    onEnd: (event, ctx) => {
      console.log('onEnd', event.translationX, event.translationY);
      if (x.value > 150) {
        x.value = withSpring(230);
      } else {
        x.value = withSpring(10);
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: x.value,
        },
      ],
    };
  });

  const textStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        x.value,
        inpterPolateXInput,
        [0.8, 0],
        Extrapolation.CLAMP,
      ),
      transform: [
        {
          translateX: interpolate(
            x.value,
            inpterPolateXInput,
            [0, 150],
            Extrapolation.CLAMP,
          ),
        },
      ],
    };
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
      }}>
      <View
        style={{
          width: 300,
          height: 60,
          backgroundColor: '#ffbf80',
          justifyContent: 'center',
          paddingLeft: 10,
          paddingRight: 10,
          alignItems: 'center',
        }}>
        <PanGestureHandler onGestureEvent={animatedGestureHandler}>
          <Animated.View
            style={[
              {
                width: 50,
                height: 50,
                backgroundColor: '#ff8000',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                left: 0,
                position: 'absolute',
              },
              animatedStyle,
            ]}>
            <Image
              source={require('../assets/images/drawer.png')}
              style={{height: 30, width: 30, tintColor: '#fff'}}
            />
          </Animated.View>
        </PanGestureHandler>
        <Animated.Text
          style={[
            {
              fontSize: 20,
              color: '#fff',
            },
            textStyle,
          ]}>{` >> Swipe right to order`}</Animated.Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

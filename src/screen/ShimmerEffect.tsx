import {StyleSheet, Text, View, Animated} from 'react-native';
import React from 'react';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

export default function ShimmerEffect() {
  // Handle animation
  const avatarRef: any = React.createRef();
  const firstLineRef: any = React.createRef();
  const secondLineRef: any = React.createRef();
  const thirdLineRef: any = React.createRef();

  React.useEffect(() => {
    const facebookAnimated = Animated.stagger(400, [
      avatarRef.current.getAnimated(),
      Animated.parallel([
        firstLineRef.current.getAnimated(),
        secondLineRef.current.getAnimated(),
        thirdLineRef.current.getAnimated(),
      ]),
    ]);
    Animated.loop(facebookAnimated).start();
  }, []);

  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <ShimmerPlaceholder ref={avatarRef} stopAutoRun />
        <View style={{justifyContent: 'space-between'}}>
          <ShimmerPlaceholder ref={firstLineRef} stopAutoRun />
          <ShimmerPlaceholder ref={secondLineRef} stopAutoRun />
          <ShimmerPlaceholder ref={thirdLineRef} stopAutoRun />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

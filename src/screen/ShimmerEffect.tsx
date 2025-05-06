import {StyleSheet, View, FlatList, Animated} from 'react-native';
import React, {useRef, useEffect} from 'react';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const ItemPlaceholder = () => {
  const avatarRef = useRef<Animated.View>(null);
  const firstLineRef = useRef<Animated.View>(null);
  const secondLineRef = useRef<Animated.View>(null);
  const thirdLineRef = useRef<Animated.View>(null);

  useEffect(() => {
    const facebookAnimated = Animated.stagger(400, [
      avatarRef.current?.getAnimated(),
      Animated.parallel([
        firstLineRef.current?.getAnimated(),
        secondLineRef.current?.getAnimated(),
        thirdLineRef.current?.getAnimated(),
      ]),
    ]).start();

    return () => {
      facebookAnimated?.stop();
    };
  }, []);

  return (
    <View style={styles.itemContainer}>
      <ShimmerPlaceholder ref={avatarRef} style={styles.avatar} stopAutoRun />
      <View style={styles.textContainer}>
        <ShimmerPlaceholder
          ref={firstLineRef}
          style={styles.line}
          stopAutoRun
        />
        <ShimmerPlaceholder
          ref={secondLineRef}
          style={[styles.line, {width: '70%'}]}
          stopAutoRun
        />
        <ShimmerPlaceholder
          ref={thirdLineRef}
          style={[styles.line, {width: '40%'}]}
          stopAutoRun
        />
      </View>
    </View>
  );
};

export default function ShimmerListEffect() {
  const data = [1, 2, 3, 4, 5, 11, 21, 13, 14, 15];

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.toString()} // Simple key extractor
        renderItem={() => <ItemPlaceholder />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  line: {
    width: '100%',
    height: 12,
    borderRadius: 6,
    marginVertical: 5,
  },
});

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screen/Home';
import Flatlist from '../screen/Flatlist';
import DrawerNavigation from './DrawerNavigation';
import ShimmerEffect from '../screen/ShimmerEffect';
import Explore from '../screen/Explore';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'DrawerNavigation'}
          component={DrawerNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'Home'}
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'Flatlist'}
          component={Flatlist}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'Library'}
          component={ShimmerEffect}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'Explore'}
          component={Explore}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

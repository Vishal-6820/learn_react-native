import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {myStore} from './redux/store/Store';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={myStore}>
        <AppNavigator />
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;

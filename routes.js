import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import { store, persistor } from './src/store';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/views/Home';

const { Navigator, Screen } = createStackNavigator();

export default function routes() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Navigator>
            <Screen
              options={{ headerShown: false }}
              name="Home"
              component={Home}
            />
          </Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

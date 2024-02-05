import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PersistGate} from 'redux-persist/es/integration/react';
// import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import UITest from '../screens/UITest';
import Profile from '../screens/Profile';
import BottomNavigation from './BottomNavigation';
import storeConfig from '../store';
import {Provider} from 'react-redux';

const {persistor, store} = storeConfig();

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Login" component={Login} />
            {/* <Stack.Screen name="Dashboard" component={UITest} /> */}
            <Stack.Screen name="Dashboard" component={BottomNavigation} />
            <Stack.Screen name="Profile" component={Profile} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default StackNavigation;

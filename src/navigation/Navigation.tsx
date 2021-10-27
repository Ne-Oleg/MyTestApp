import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {LoginScreen} from '../screens/LoginScreen';
import {FeedScreen} from '../screens/FeedScreen';
import {ProfileScreen} from '../screens/ProfileScreen';
import { observer } from 'mobx-react';
import { LoadingScreen } from '../screens/LoadingScreen';

const Stack = createNativeStackNavigator();

const Top = createMaterialTopTabNavigator();

const TopNavigator = () => {
  return (
    <Top.Navigator initialRouteName={'Feed'} >
      <Top.Screen name={'Feed'} component={FeedScreen} />
      <Top.Screen name={'Profile'} component={ProfileScreen} />
    </Top.Navigator>
  );
};

export const Navigator = observer(() => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false, gestureEnabled: false}} initialRouteName={'Loading'}>
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={TopNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
});

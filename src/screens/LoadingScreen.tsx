import React, {useEffect} from 'react';
import {ActivityIndicator, View} from 'react-native';
import rootStore from '../state/RootState';

export const LoadingScreen = ({navigation}: any) => {
  useEffect(() => {
    if (rootStore.userIsLogin) {
      navigation.navigate('Main');
    } else {
      navigation.navigate('Login');
    }
  }, []);
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  );
};

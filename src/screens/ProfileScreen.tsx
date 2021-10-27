import {observer} from 'mobx-react';
import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import {Button} from '../componets/Botton';
import rootStore from '../state/RootState';
import {ProfileScreenStyle} from '../styles/screens/ProfileScreenStyle';

export const ProfileScreen = observer(({navigation}: any) => {
  const [user, setUser] = useState({avatar: '', first_name: '', last_name: ''});
  const onLogout = () => {
    rootStore.setIsLogin(false);
    navigation.navigate('Login');
  };

  const getAvatar = async () => {
    try {
      const response = await fetch('https://reqres.in/api/users/2', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      });
      const result = await response.json();
      setUser(result.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getAvatar();
  }, []);

  return (
    <View style={ProfileScreenStyle.container}>
      <View style={ProfileScreenStyle.userBox}>
        <Image
          source={{uri: user.avatar}}
          style={ProfileScreenStyle.imageStyle}
        />
        <View style={ProfileScreenStyle.textContainer}>
          <Text>Name: {user.first_name + ' ' + user.last_name}</Text>
          <Text>Email: {rootStore.userEmail}</Text>
        </View>
      </View>
      <View style={ProfileScreenStyle.buttonBox}>
        <Button title={'Logout'} onPress={() => onLogout()} />
      </View>
    </View>
  );
});

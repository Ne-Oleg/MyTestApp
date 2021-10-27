import {observer} from 'mobx-react';
import React, { useState} from 'react';
import { Text, View} from 'react-native';
import {Button} from '../componets/Botton';
import {Input} from '../componets/Input';
import rootStore from '../state/RootState';
import {LoginScreenStyle} from '../styles/screens/LoginScreenStyle';

export const LoginScreen = observer(({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPass, setIsValidPass] = useState(true);
  
  const onLoginPress = async () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email)){
       setIsValidEmail(true);
    }
    else{
       setIsValidEmail(false);
    }
    if(pass.length < 8){
        setIsValidPass(false);
    } else{
        setIsValidPass(true)
    }
    if(reg.test(email) && pass.length > 8){
        rootStore.setIsLogin(true);
        rootStore.setEmail(email);
        navigation.navigate('Main');
    }
  };
  const onChangeEmail = (email: string) => {
    setEmail(email);
  };
  const onChangePassword = (password: string) => {
    setPass(password);
  };
  return (
    <View style={LoginScreenStyle.container}>
      <View style={LoginScreenStyle.inputContainer}>
        <Input
          onChangeText={(text: string) => onChangeEmail(text)}
          placeholder={'Email'}
          secret={false}
          value={email}
        />
        {!isValidEmail && <Text style={LoginScreenStyle.errorText}>Email is not valid</Text>}
      </View>
      <View style={LoginScreenStyle.inputContainer}>
        <Input
          onChangeText={(text: string) => onChangePassword(text)}
          placeholder={'Password'}
          secret={true}
          value={pass}
        />
        {!isValidPass && <Text style={LoginScreenStyle.errorText}>Password length min 8 chars</Text>}
      </View>
      <Button title={'Login'} onPress={() => onLoginPress()} />
    </View>
  );
});

import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import { ButtonStyle } from '../styles/components/ButtonStyle';

interface ButtonProps {
  onPress: () => void;
  title: string;
}

export const Button = (props: ButtonProps) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={ButtonStyle.container}>
      <Text style={ButtonStyle.textStyle}>{props.title}</Text>
    </TouchableOpacity>
  );
};

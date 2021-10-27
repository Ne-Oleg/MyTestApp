import React from "react";
import { TextInput } from "react-native";
import { InputStyle } from "../styles/components/InputStyle";

interface TextInputProps {
    placeholder: string;
    onChangeText: (text: string) => void;
    secret: boolean;
    value: string;
}

export const Input = (props: TextInputProps) => {
    return(
        <TextInput 
            style={InputStyle.container}
            placeholder={props.placeholder}
            onChangeText={props.onChangeText}
            secureTextEntry={props.secret}
            value={props.value}
        />
    )
}
import React, { useState } from "react";
import {View,Text, TextInput} from "react-native";

const InputEvent = () => {
    const [text, setText] = useState('');
    const mOnChange = event => setText(event.nativeEvent.text);

    return (
        <View>
            <Text style = {{
                margin : 10, fontSize : 30
            }}>text : {text}</Text>
            <TextInput 
                style = {{borderWidth : 1, padding : 10, fontSize : 20}}
                placeholder = "Enter Text"
                onChange = {mOnChange}>
            </TextInput>
        </View>
    );
}

export default InputEvent;
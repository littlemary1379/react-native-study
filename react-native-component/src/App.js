import React from "react";
import { View, Text, Button } from "react-native";
import MyButton from "../component/myButton";
import Counter from "../component/Counter";
import EventButton from "../component/EventButton";
import InputEvent from "../component/InputEvent";


const App = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <InputEvent/>
          </View>
    );
}

export default App;
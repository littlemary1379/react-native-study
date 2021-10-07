import React from "react";
import {StyleSheet, View, Text} from "react-native";
import { viewStyle, textStyle } from "./styles";

const App = () => {
    return (
        <View style = {viewStyle.container}>
            <Text style = {textStyle.text}>
                text containr style - black
            </Text>
            <Text style = {[textStyle.text, textStyle.error]}>
                text contaier style - red
            </Text>
        </View>
    );
};

// const style = StyleSheet.create({
//     container : {
//         flex : 1,
//         backgroundColor : '#fff',
//         alignItems : 'center',
//         justifyContent : 'center',
//     },
//     text : {
//         padding : 10,
//         fontSize : 26,
//         color : 'black'
//     },
//     error : {
//         fontSize : 24,
//         color : 'red'
//     },

// });

export default App;
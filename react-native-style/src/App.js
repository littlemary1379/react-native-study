import React from "react";
import {StyleSheet, View, Text} from "react-native";
import { viewStyle, textStyle } from "./styles";
import { Contents, Footer, Header } from "../component/Layout";
import EventButton from "../component/EventButton";

const App = () => {
    return (
        <View style = {viewStyle.container}>
            <Header />
            <Contents />
            <Footer />
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
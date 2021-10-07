import { StyleSheet } from "react-native";

export const viewStyle = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#fff',
        alignItems : 'center',
        justifyContent : 'center',
    },
});

export const textStyle = StyleSheet.create({
    text : {
        padding : 10,
        fontSize : 26,
        color : 'black'
    },
    error : {
        fontSize : 24,
        color : 'red'
    },
});
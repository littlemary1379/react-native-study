import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Header = () => {
    return (
        <View style={[styles.container, styles.header]}>
            <Text style={styles.text}>header</Text>
        </View>
    );
};

export const Contents = () => {
    return (
        <View style= {[styles.container, styles.contents]}>
            <Text style={styles.text}>contents</Text>
        </View> 
    );
};

export const Footer = () => {
    return (
        <View style = {[styles.container, styles.footer]}>
            <Text style={styles.text}>Footer</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        width : '100%',
        alignItems : 'center',
        justifyContent : 'center',
        height : 80,
    },
    header : {
        backgroundColor : '#f1c40f',
    },
    contents : {
        backgroundColor : '#1abc9c',
        flex : 1,
    },
    footer : {
        backgroundColor : '#3498db',
    },
    text : {
        fontSize : 26,
    },
});
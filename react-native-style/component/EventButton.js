import React from "react";
import { TouchableOpacity, Text } from "react-native";

const EventButton = () => {
    const _onPressIn = () => console.log('press In \n');
    const _onPressOut = () => console.log('press Out \n');
    const _onPress = () => console.log('press \n');
    const _onLongPress = () => console.log('press Long \n');

    return (
        <TouchableOpacity
            style = {{
                backgroundColor : '#f1c40f',
                padding : 16,
                margin : 10,
                borderRadius : 10,
            }}
            onPressIn = {_onPressIn}
            onLongPress = {_onLongPress}
            onPressOut = {_onPressOut}
            onPress = {_onPress}
        >
            <Text style = {{color : 'white', fontSize : 24}}Press></Text>
        </TouchableOpacity>
    );
};

export default EventButton;
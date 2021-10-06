import React from "react";
import { Pressable,Text } from "react-native";

const EventButton = () => {
    const mOnPressIn = () => console.log('press in\n')
    const mOnLongPress = () => console.log('long press\n')
    const mOnPressOut = () => console.log('press out\n')
    const mOnPress = () => console.log('press\n')
    return (
        <Pressable
            style = {{
                backgroundColor : "#999999",
                padding : 16,
                margin : 10,
                borderRadius : 5,
            }}
            onPressIn = {mOnPressIn}
            onLongPress = {mOnLongPress}
            onPressOut = {mOnPressOut}
            onPress = {mOnPress}

            delayLongPress = {2000} 
            >
                <Text style={{color: 'white', fontSize : 24}}>Press</Text>
        </Pressable>
    );
}

export default EventButton;
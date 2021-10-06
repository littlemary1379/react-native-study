import React from "react";
import { Pressable, Text, TouchableOpacity } from "react-native";
import PropTypes from 'prop-types'

const MyButton = props => {
        return (
        <Pressable
        style = {{
            backgroundColor : '#aaaaaa',
            padding : 16,
            margin: 10,
            borderRadius : 5,
        }}
        onPress = {() => props.onPress()}>
            <Text style={{fontSize : 24, color : '#ffffff'}}>{props.children||props.title}</Text>
        </Pressable>
    );
};

MyButton.defaultProps = {
    title : "Default Props",
}

MyButton.propTypes = {

    onPress : PropTypes.func.isRequired,
}

export default MyButton;
import React from "react";
import { TouchableOpacity } from "react-native";
import styled from 'styled-components/native';
import PropsTypes from 'prop-types';
import { images } from "../image";

const Icon = styled.Image`
    width: 30px;
    height: 30px;
    margin: 10px;
`

const IconButton = ({ type, onPressOut }) => {
    return (
        <TouchableOpacity onPressOut={onPressOut}>
            <Icon source={type} />
        </TouchableOpacity>
    );
}

IconButton.PropsTypes = {
    type: PropsTypes.oneOf(Object.values(images)).isRequired,
    onPressOut: PropsTypes.func,
}

export default IconButton;
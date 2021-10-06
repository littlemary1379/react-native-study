import React from "react";
import {View, Text} from "react-native";

const App = () => {
    return (
        <View
            style = {{
                flex : 1,
                backgroundColor : '#fff',
                alignItems : 'center',
                justifyContent : 'center',
            }}
        >
            <Text
                style = {{
                    padding : 10,
                    fontSize : 26,
                    color : 'black'
                }}
            >
                Inline style - black
            </Text>
            <Text
                style = {{
                    padding : 10,
                    fontSize : 24,
                    color : 'red'
                }}
            >
                Inline style - red
            </Text>
        </View>
    );
}

export default App;
import React, { useState } from "react";
import {StyleSheet, View, Text} from "react-native";
import { viewStyle, textStyle } from "./styles";
import { Contents, Footer, Header } from "../component/Layout";
import ShadowBox from "../component/ShadowBox";
import { ColumnExample } from "../component/Flex";
import EventButton from "../component/EventButton";
import styled, { ThemeProvider } from "styled-components/native";
import Button from "../component/Button";
import Input from "../component/Input";
import { darkTheme, lightTheme, theme } from "../component/Theme";
import { Switch } from "react-native";


const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.background};
    align-items: center;
    justify-content: center;
`;

const App = () => {

    const [isDark, setIsDark] = useState(false);
    const toggleSwitch = () => setIsDark(!isDark)

    return (
        <ThemeProvider theme = {isDark ? darkTheme : lightTheme}>
            <Container>
                <Switch value= {isDark} onValueChange = {toggleSwitch} />
                <Button title="Mary"/>
                <Button title="React Native"/>
                <Input borderColor = "#3498db"/>
                <Input borderColor = "#9b59b6"/>
            </Container>
        </ThemeProvider>
    );
};

// const App = () => {
//     return (
//         <Container>
//             <Button title="Mary"/>
//             <Button title="React Native"/>
//             <Input borderColor = "#3498db"/>
//             <Input borderColor = "#9b59b6"/>
//         </Container>
//     );
// };


// const App = () => {
//     return (
//         <Container>
//             <Button title="Mary"/>
//             <Button title="React Native"/>
//         </Container>
//     );
// };

// const App = () => {
//     return (
//         <View style = {viewStyle.container}>
//             <ShadowBox />
//         </View>
//     );
// };

// const App = () => {
//     return (
//         <View style = {viewStyle.container}>
//             <ColumnExample />
//         </View>
//     );
// };

// const App = () => {
//     return (
//         <View style = {viewStyle.container}>
//             <Header />
//             <Contents />
//             <Footer />
//         </View>
//     );
// };

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
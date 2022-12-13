import React from "react";
import { View, Text, Button } from "react-native";
import MyButton from "../component/myButton";
import Counter from "../component/Counter";
import EventButton from "../component/EventButton";
import InputEvent from "../component/InputEvent";
import { Header, Contents, Footer} from './component/Layout'


const App = () => {
    return (
        <View style = {viewStyles.container}>
          <Header />
          <Contents />
          <Footer />
        </View>
    );
}

export default App;
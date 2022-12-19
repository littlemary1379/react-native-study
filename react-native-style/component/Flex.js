import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const ColumnExample = () => {
    return (
        <View style={[styles.flexDirectionColumn]}>
            <View style = {[styles.boxDesign1, styles.boxColor1]}>
                <Text>
                    A
                </Text>
            </View>

            <View style = {[styles.boxDesign2, styles.boxColor2]}>
                <Text>
                    B
                </Text>
            </View>

            <View style = {[styles.boxDesign3, styles.boxColor3]}>
                <Text>
                    C
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    flexDirectionColumn : {
        width: '100%',
        // flexDirection: "column",
        // flexDirection: "column-reverse",
        flexDirection: "row",
        // flexDirection: "row-reverse",
        //justifyContent: "flex-start",
        // justifyContent: "flex-end",
        justifyContent: "center",
        // justifyContent: "space-between",
        // justifyContent: "space-around",
        // justifyContent: "space-evenly",
        // alignItems: "flex-start",
        // alignItems: "flex-end",
        // alignItems: "center",
        // alignItems: "stretch",
         alignItems: "baseline",

    },

    boxDesign1 : {
        width : 50,
        height : 50,
    },

    boxDesign2 : {
        width : 50,
        height : 80,
    },

    boxDesign3 : {
        width : 50,
        height : 65,
    },

    boxColor1 : {
        backgroundColor: '#A9A0FC',
    },

    boxColor2 : {
        backgroundColor: '#ffafd8',
    },

    boxColor3 : {
        backgroundColor: '#ACB890',
    },
});
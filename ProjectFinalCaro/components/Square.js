import React from "react";
import {View, Text, TouchableWithoutFeedback, StyleSheet} from "react-native";

export default function Square({onPress, value}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.square}>
                <Text style={styles.squareText}>{value}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    square: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: "black",
        justifyContent: "center",
        alignItems: "center",
    },
    squareText: {
        fontSize: 24,
    },
});

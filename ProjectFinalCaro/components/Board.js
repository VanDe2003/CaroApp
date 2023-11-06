import React from "react";
import {View, StyleSheet} from "react-native";

import Square from "./Square";

export default function Board({squares, onClick}) {
    const renderSquares = (nums) => {
        return nums.map((num) => <Square key={num} value={squares[num]} onPress={() => onClick(num)} />);
    };

    return (
        <View>
            <View style={styles.boardRow}>{renderSquares([0, 1, 2])}</View>
            <View style={styles.boardRow}>{renderSquares([3, 4, 5])}</View>
            <View style={styles.boardRow}>{renderSquares([6, 7, 8])}</View>
        </View>
    );
}

const styles = StyleSheet.create({
    boardRow: {
        flexDirection: "row",
    },
});

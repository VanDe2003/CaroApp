import React, {useState} from "react";
import {View, Text, Button, StyleSheet} from "react-native";

import Board from "./components/Board";

export default function App() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const handleClick = (i) => {
        const newSquares = squares.slice(); // Create a copy of squares
        if (newSquares[i] || checkWinner(newSquares)) {
            // If the square is already filled or there's a winner
            return;
        }

        newSquares[i] = xIsNext ? "X" : "O";
        setSquares(newSquares);
        setXIsNext(!xIsNext);

        if (checkWinner(newSquares)) {
            // If there's a winner, reset the game
            // resetGame();
            status = "Next player: " + (xIsNext ? "X" : "O");
        }
    };

    const resetGame = () => {
        setSquares(Array(9).fill(null));
        setXIsNext(true);
    };

    const isTie = squares.every((square) => square !== null);
    const winner = checkWinner(squares);

    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else if (isTie) {
        status = "It's a tie!";
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }

    return (
        <View style={styles.game}>
            <View style={styles.gameBoard}>
                <Board squares={squares} onClick={(i) => handleClick(i)} />
            </View>
            <View style={styles.gameInfo}>
                <Text>{status}</Text>
                {winner || isTie ? (
                    <View style={styles.resetButton}>
                        <Button title="Reset Game" onPress={resetGame} />
                    </View>
                ) : null}
            </View>
        </View>
    );
}

function checkWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

const styles = StyleSheet.create({
    game: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    gameBoard: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    gameInfo: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    resetButton: {
        marginTop: 20,
    },
});

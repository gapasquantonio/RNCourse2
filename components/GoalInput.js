import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";


function GoatInput(props) {
    const { onAddGoal, onCancel, visible } = props
    const [enteredGoalText, setEnteredGoalText] = useState(``)

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText)
    }

    function addGoalHandler() {
        onAddGoal(enteredGoalText);
        setEnteredGoalText("")
    }
    function cancelGoalHandler() {
        setEnteredGoalText("");
        onCancel()
    }

    return (
        <Modal visible={visible} animationType="slide ">
            <View style={styles.inputContainer}>
                <Image
                    source={require('../assets/images/goal.png')}
                    style={styles.image}
                />
                <TextInput
                    value={enteredGoalText}
                    style={styles.textInput}
                    placeholder="Your course goal"
                    onChangeText={goalInputHandler} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Cancel'
                            onPress={cancelGoalHandler}
                            color="#f31282" />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title='Add Goal'
                            onPress={addGoalHandler}
                            color="#b180f0" />
                    </View>
                </View>
            </View>
        </Modal >
    )
}

export default GoatInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        padding: 16,
        backgroundColor: "#311b6b"
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#efd0ff',
        padding: 16,
        width: "100%",
        backgroundColor: '#efd0ff',
        color: "#120438",
        borderRadius: 6
    },
    buttonContainer: {
        flexDirection: "row",
        marginTop: 16
    },
    button: {
        width: 100,
        marginHorizontal: 8
    }
})
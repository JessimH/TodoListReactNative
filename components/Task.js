import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Task = (props) => {
    return (
        <View>
            <Text>{props.text ? "props.text" : "Task components"}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default Task
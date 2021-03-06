import React, { useState } from "react";
import {
  Switch,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from "react-native";

const TodoItem = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <Switch
          style={styles.checkbox}
          trackColor={{ false: "red", true: "black" }}
          thumbColor={props.todo.completed ? "lime" : "lightgreen"}
          value={props.todo.completed}
          onValueChange={props.markComplete.bind(this, props.todo.id)}
        />
        <Text style={props.todo.completed ? styles.label : styles.label2}>
          {props.todo.title}
        </Text>
        <TouchableOpacity
          onPress={props.delTodo.bind(this, props.todo.id)}
          id={props.todo.id}
          style={{
            backgroundColor: "red",
            flex: 0.09,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 100 / 2,
          }}
        >
          <Text style={{ fontSize: 15, color: "#fff" }}> X </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default TodoItem;

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: "#ff0000",
    color: "#fff",
    borderWidth: 0,
    borderRadius: 50,
    alignItems: "center",
  },
  container: {
    justifyContent: "center",
    width: "98%",
    marginLeft: 5,
    backgroundColor: "#f4f4f4",
    padding: 3,
    borderColor: "#ccc",
    borderWidth: 1,
    borderStyle: "dotted",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 10,
  },
  checkbox: {
    flex: 0.13,
    color: "red",
    marginLeft: 0,
  },
  label: {
    margin: 8,
    flex: 0.75,
    textDecorationLine: "line-through",
    paddingLeft: 10,
  },
  label2: {
    margin: 8,
    flex: 0.75,
    textDecorationLine: "none",
    paddingLeft: 10,
  },
});

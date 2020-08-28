import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function SimpleButton(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.buttonWrap, props.style, { backgroundColor: props.color }]}
    >
      <Text style={[styles.text, { color: props.textColor }]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

SimpleButton.defaultProps = {
  title: "",
  color: "tomato",
  textColor: "white",
  onPress: () => {},
};

const styles = StyleSheet.create({
  buttonWrap: {
    backgroundColor: "tomato",
    padding: 10,
    borderRadius: 5,
  },
  text: {
    textAlign: "center",
    color: "white",
  },
});

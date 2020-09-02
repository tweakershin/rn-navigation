import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default class IconTextInput extends React.Component {
  render() {
    return (
      <View style={[styles.iconTextWrap, this.props.wrapStyle]}>
        <Ionicons
          name={this.props.iconProps.name}
          size={35}
          color={this.props.iconProps.color}
        />
        <TextInput
          autoCapitalize={this.props.autoCapitalize || "none"}
          autoCorrect={false}
          style={styles.textInput}
          secureTextEntry={this.props.secure}
          placeholder={this.props.placeholder}
          onChangeText={this.props.onChangeText}
          value={this.props.value}
        />
      </View>
    );
  }
}

IconTextInput.defaultProps = {
  iconProps: {
    name: "ios-person",
    color: "gray",
  },
  wrapStyle: {},
  secure: false,
  placeholder: "",
  onChangeText: () => { },
};

const styles = StyleSheet.create({
  iconTextWrap: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "gray",

    width: 300,
    height: 48,
    paddingLeft: 5,
    paddingRight: 5,
  },
  textInput: {
    height: 40,
    marginLeft: 10,
    width: 280,
  },
});

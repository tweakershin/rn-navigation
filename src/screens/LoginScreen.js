import React from "react";
import { View, KeyboardAvoidingView, StyleSheet } from "react-native";

import Header from "../components/Header";

import IconTextInput from "../components/IconTextInput";

export default class LoginScreen extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View>
          <Header text="CAR AUCTION" />
        </View>
        <IconTextInput
          iconProps={{
            name: "ios-person",
            color: "gray",
          }}
          wrapStyle={{ marginTop: 5, marginBottom: 5 }}
        />

        <IconTextInput
          iconProps={{
            name: "ios-lock",
            color: "gray",
          }}
          wrapStyle={{ marginTop: 5, marginBottom: 5 }}
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    maxWidth: 500,
    backgroundColor: "#fff",
  },
});

import React from "react";

import { View, StyleSheet } from "react-native";
// import IconPractice from "./practices/IconPractice";
import LoginScreen from "./screens/LoginScreen";

export default class Root extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

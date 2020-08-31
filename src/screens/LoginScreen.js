import React from "react";
import { View, KeyboardAvoidingView, StyleSheet } from "react-native";

import Header from "../components/Header";

import IconTextInput from "../components/IconTextInput";
import SimpleButton from "../components/SimpleButton";

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
          placeholder="유저ID"
        />

        <IconTextInput
          iconProps={{
            name: "ios-lock",
            color: "gray",
          }}
          wrapStyle={{ marginTop: 5, marginBottom: 5 }}
          secure={true}
          placeholder="비밀번호"
        />

        <SimpleButton
          title="로그인"
          style={{ width: 300, marginTop: 5, marginBottom: 5 }}
        />
        <SimpleButton
          title="회원가입"
          style={{ width: 300, marginTop: 5, marginBottom: 5 }}
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: 500,
    backgroundColor: "#fff",
  },
});

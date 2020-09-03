import React from "react";
import { View, KeyboardAvoidingView, StyleSheet } from "react-native";

import Header from "../components/Header";
import IconTextInput from "../components/IconTextInput";
import SimpleButton from "../components/SimpleButton";

import { registerUser, loginUser } from '../services/auth';
import AuthToken from '../utils/AuthToken';
import { AuthContext } from '../contexts/auth'

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }
  render() {
    return (
      <AuthContext.Consumer>
        {({ isLogined, token, login, logout }) => {
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
                autoCapitalize={"none"}
                value={this.state.email}
                onChangeText={(text) => this.setState({ email: text })}
                wrapStyle={{ marginTop: 5, marginBottom: 5 }}
                placeholder="유저ID"
              />

              <IconTextInput
                iconProps={{
                  name: "ios-lock",
                  color: "gray",
                }}
                autoCapitalize={"none"}
                value={this.state.password}
                onChangeText={(text) => this.setState({ password: text })}
                wrapStyle={{ marginTop: 5, marginBottom: 5 }}
                secure={true}
                placeholder="비밀번호"
              />

              <SimpleButton
                title="로그인"
                style={{ width: 300, marginTop: 5, marginBottom: 5 }}
                onPress={async () => {
                  const data = await loginUser(this.state.email, this.state.password)
                  // console.log(data);
                  if (data.result === 'success') {
                    AuthToken.save(data.token);
                    login(data.token)
                  }
                  else if (data.message) {
                    alert(data.message);
                  }

                }}
              // login구현.
              />
              <SimpleButton
                title="회원가입"
                style={{ width: 300, marginTop: 5, marginBottom: 5 }}
                onPress={async () => {
                  const data = await registerUser(this.state.email, this.state.password);
                  console.log(data);
                  alert("회원가입이 완료되었습니다.")
                }}
              />
            </KeyboardAvoidingView>
          )
        }}

      </AuthContext.Consumer>
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

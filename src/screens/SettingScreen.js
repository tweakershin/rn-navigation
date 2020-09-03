import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

import AuthToken from '../utils/AuthToken'
import { AuthContext } from '../contexts/auth';

export default class SettingScreen extends Component {

  render() {
    return (
      <AuthContext.Consumer>
        {({ isLogined, token, login, logout }) => {
          return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Button title="로그아웃" onPress={() => {
                AuthToken.remove();
                logout();
                // 로그 아웃 액션
                // this.props.navigation.navigate('AuthStack', {
                //   screen: 'Login'
                // })
              }} />
            </View>
          )
        }}

      </AuthContext.Consumer>
    )
  }
}

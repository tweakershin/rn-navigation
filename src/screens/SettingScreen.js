import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class SettingScreen extends Component {

  render() {
    console.log(this.props)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title="로그아웃" onPress={() => {
          // 로그 아웃 액션
          // this.props.navigation.navigate('AuthStack', {
          //   screen: 'Login'
          // })
        }} />
      </View>
    )
  }
}

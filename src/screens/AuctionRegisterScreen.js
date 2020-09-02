import React, { Component } from 'react';
import { Text, StyleSheet, View, KeyboardAvoidingView } from 'react-native';

import IconTextInput from '../components/IconTextInput';
import SimpleButton from '../components/SimpleButton';
import { registerAuction } from '../services/car'


// iconProps: {
//   name: "ios-person",
//   color: "gray",
// },
// wrapStyle: {},
// secure: false,
// placeholder: "",
// onChangeText: () => { },
export default class AuctionRegisterScreen extends Component {
  constructor(props) {
    super(props);

    const car = this.props.route.params.car
    this.state = {
      car: car,
      desc: '',
      minPrice: ''
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>

        <IconTextInput
          iconProps={{ name: 'ios-list', color: 'gray' }}
          placeholder="설명 입력"
          wrapStyle={styles.componentMargin}
          value={this.state.desc}
          onChangeText={(text) => { this.setState({ desc: text }) }}
        />
        <IconTextInput
          iconProps={{ name: "ios-pricetag", color: 'gray' }}
          placeholder="경매 시작가"
          wrapStyle={styles.componentMargin}
          value={this.state.minPrice}
          onChangeText={(text) => { this.setState({ minPrice: text }) }}
        />
        <View>
          <SimpleButton
            title="등록 하기"
            style={styles.componentMargin}
            onPress={async () => {
              await registerAuction(this.state.car.id, this.state.minPrice, this.state.desc);
              this.props.navigation.goBack();
            }} />
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  componentMargin: {
    marginBottom: 20,
  }
})

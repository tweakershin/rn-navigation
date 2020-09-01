import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class CarStatusInfo extends Component {
  static defaultProps = {
    auctionState: 'none' //
  }

  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.auctionState === 'bidding') {
      // 경매 O
      return (
        <View style={styles.statusInfoWrap}>
          {/* {this.props.auctionState ? (<Text />) : (<Text />)} */}
          <Text style={{ color: 'tomato' }}> 경매 진행중 </Text>
        </View>
      )
    } else {
      // 경매 X
      return (
        <View style={styles.statusInfoWrap}>
          <Text style={{ color: '#333' }}> 진행중인 경매가 없습니다. </Text>
        </View>
      )
    }

  }
}

const styles = StyleSheet.create({
  statusInfoWrap: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

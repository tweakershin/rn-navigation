import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class CarInfo extends Component {
  static defaultProps = {
    id: '',
    image: '',
    vin: '',
    manufacturer: '',
    year: ''
  }

  render() {
    return (
      <View>
        <Text> CAR INFO </Text>
      </View>
    )
  }
}

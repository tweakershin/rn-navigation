import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import CarInfo from '../components/car/CarInfo';

export default class CarDetailScreen extends Component {
  constructor(props) {
    super(props);

    const car = this.props.route.params.car
    // console.log("----")
    // console.log(this.props.route.params)
    this.state = {
      car: car
    }
  }

  render() {
    return (
      <View>
        <CarInfo {...this.state.car} />

        <Text> textInComponent </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({})

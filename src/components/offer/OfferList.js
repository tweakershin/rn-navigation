import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native';

const OfferListItem = (props) => {
  return (
    <View>

    </View>
  )
}

export default class OfferList extends Component {
  static defaultProps = {
    bidList: []
  }

  renderItem({ item }) {
    return (
      <OfferListItem {...item} />
    )
  }

  render() {
    return (
      <FlatList renderItem={this.renderItem.bind(this)} />
    )
  }
}

const styles = StyleSheet.create({})

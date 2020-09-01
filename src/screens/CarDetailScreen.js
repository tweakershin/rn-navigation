import React, { Component } from 'react'
import { Text, FlatList, StyleSheet, View, ScrollView, RefreshControl } from 'react-native'

import SimpleButton from '../components/SimpleButton';
import CarInfo from '../components/car/CarInfo';
import CarStatusInfo from '../components/car/CarStatusInfo';
// import OfferList from '../components/offer/OfferList';

import { fetchCarDetail } from '../services/car';
import OfferListItem from '../components/offer/OfferListItem'

export default class CarDetailScreen extends Component {
  constructor(props) {
    super(props);

    const car = this.props.route.params.car
    // console.log("----")
    // console.log(this.props.route.params)
    this.state = {
      car: car,
      auctionState: 'none',
      bidList: [],
      refreshing: false,
    }
  }

  componentDidMount() {
    this.refreshData();
  }

  refreshData() {
    const car = fetchCarDetail(this.state.car.id);
    this.setState({ car: car, auctionState: car.auctionState, bidList: car.bidList })
  }

  renderItem({ item }) {
    return (
      <OfferListItem {...item} />
    )
  }

  render() {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.refreshData.bind(this)}
          />
        }
      >
        <CarInfo {...this.state.car} />
        <CarStatusInfo auctionState={this.state.auctionState} />
        {
          this.state.auctionState === 'bidding' ?
            (<FlatList
              data={this.state.bidList}
              renderItem={this.renderItem.bind(this)}
              keyExtractor={(item, index) => (index.toString())}
              ItemSeparatorComponent={
                () => (<View style={{
                  width: '100%',
                  height: StyleSheet.hairlineWidth,
                  backgroundColor: 'gray',

                }} />)
              }
            />) :
            (<SimpleButton title="경매 등록하기." onPress={() => { }} />)
        }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({})

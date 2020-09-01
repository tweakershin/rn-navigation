import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, RefreshControl } from 'react-native'

import SimpleButton from '../components/SimpleButton';
import CarInfo from '../components/car/CarInfo';
import CarStatusInfo from '../components/car/CarStatusInfo';
import OfferList from '../components/offer/OfferList';

import { fetchCarDetail } from '../services/car';


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
            (<OfferList bidList={this.state.bidList} />) :
            (<SimpleButton title="경매 등록하기." onPress={() => { }} />)
        }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({})

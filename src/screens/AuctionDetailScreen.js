import React, { Component } from 'react'
import { Text, FlatList, StyleSheet, View, ScrollView, RefreshControl } from 'react-native'

import CarInfo from '../components/car/CarInfo';
import CarStatusInfo from '../components/car/CarStatusInfo';
// import OfferList from '../components/offer/OfferList';

import { fetchCarDetail } from '../services/car';
import OfferListItem from '../components/offer/OfferListItem'
import SimpleButton from '../components/SimpleButton';

export default class AuctionDetailScreen extends Component {
  constructor(props) {
    super(props);

    const auction = this.props.route.params.auction;
    // console.log("----")
    // console.log(this.props.route.params)
    this.state = {
      auction: auction,
      auctionState: 'none',
      bidList: [],
      refreshing: false,
    }
  }

  componentDidMount() {
    this.refreshData();
  }

  refreshData() {
    const auction = fetchCarDetail(this.state.auction.id);
    this.setState({ auction: auction, auctionState: auction.auctionState, bidList: auction.bidList })
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
        <CarInfo {...this.state.auction} />

        <CarStatusInfo auctionState={this.state.auctionState} />

        <SimpleButton title="경매 입찰" onPress={() => { }} />

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
            (<SimpleButton title="경매 등록하기." onPress={() => {
              this.props.navigation.push('auctionRegister', {
                car: this.state.car
              })
            }} />)
        }


      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({})

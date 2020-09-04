import React, { Component } from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import { fetchAuctionList } from "../services/car";

import AuctionListItem from '../components/auction/AuctionListItem';

export default class AuctionListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auctionList: [],
      refreshing: false,
    };
  }

  componentDidMount() {
    this.refreshAuction();
  }
  renderAuction({ item }) {
    return (
      <AuctionListItem
        {...item.car}
        displayPrice={item.minPrice}
        onPress={() => {
          this.props.navigation.push('AuctionDetail', { auction: item })
        }} />
    );
  }

  async refreshAuction() {
    const auctionList = await fetchAuctionList();

    this.setState({ auctionList });
  }

  render() {
    return (
      <View style={styles.container} >
        <FlatList
          data={this.state.auctionList}
          renderItem={this.renderAuction.bind(this)}
          refreshing={this.state.refreshing}
          onRefresh={this.refreshAuction.bind(this)}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={(props) => {
            return (
              <View
                style={{
                  height: StyleSheet.hairlineWidth,
                  width: '100%',
                  backgroundColor: '#999'
                }} />
            )
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "#fff",
    // alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: 'stretch',
    paddingLeft: 5,
    paddingRight: 5
  },
});

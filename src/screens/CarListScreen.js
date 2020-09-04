import React, { Component } from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import { fetchCarDetail, fetchCarList } from "../services/car";

import CarListItem from '../components/CarListItem';

export default class CarListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carList: [],
      refreshing: false,

    };
  }

  componentDidMount() {
    this.refreshCar();
  }
  renderCar({ item }) {
    return (
      <CarListItem  {...item} onPress={() => {
        this.props.navigation.push('MyCarDetail', { car: item })
      }} />
    );
  }

  async refreshCar() {
    const carList = await fetchCarList();
    console.log(carList)
    this.setState({ carList });
  }

  render() {

    return (
      <View style={styles.container} >
        <FlatList
          data={this.state.carList}
          renderItem={this.renderCar.bind(this)}
          refreshing={this.state.refreshing}
          onRefresh={this.refreshCar.bind(this)}
          keyExtractor={(item) => item.vin}
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

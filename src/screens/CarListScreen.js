import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { fetchCarDetail, fetchCarList } from "../services/car";
import { FlatList } from "react-native-gesture-handler";

export default class CarListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carList: [],
    };
  }

  componentDidMount() {
    const carList = fetchCarList();
    this.setState({ carList });
  }
  renderCar({ item }) {
    return (
      <View>
        <Text>{item.modelName}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.state.carList} renderItem={this.renderCar} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

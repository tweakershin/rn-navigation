import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default class SampleHomeScreen extends Component {
  render() {
    return (
      <View>
        <Text style={[styles.textStyle, { color: "red" }]}> 홈스크린 </Text>

        <TouchableOpacity
          onPress={(e) => {
            this.props.navigation.navigate("sampleDetail");
          }}
        >
          <Text style={[styles.textStyle, { color: "green" }]}>디테일가기</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

SampleHomeScreen.navigationOptions = {
  // tabBarLabel: "홈",
  tabBarLabel: () => {
    return <Text style={{ marginBottom: 10, fontSize: 30 }}>홈</Text>;
  },
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 50,
  },
});

import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default class SampleDetailScreen extends Component {
  constructor(props) {
    super(props);

    let pageId = props.navigation.getParam("pageId");
    if (!pageId) {
      pageId = 1;
    }
    this.state = {
      pageId: pageId,
    };
  }

  render() {
    return (
      <View>
        <Text style={styles.textStyle}> 상세스크린! {this.state.pageId}</Text>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.push("sampleDetail", {
              pageId: this.state.pageId + 1,
            })
          }
        >
          <Text style={[styles.textStyle, { color: "blue" }]}>
            디테일의 디테일 가기
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Text style={[styles.textStyle, { color: "yellow" }]}>뒤로가기</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.popToTop()}>
          <Text style={[styles.textStyle, { color: "pink" }]}>
            처음으로 가기
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate("sampleDtail", {
              pageId: this.state.pageId + 1,
            })
          }
        >
          <Text style={[styles.textStyle, { color: "red" }]}>디테일 가기</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 50,
  },
});

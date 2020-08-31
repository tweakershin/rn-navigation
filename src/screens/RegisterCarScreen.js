import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';

// import Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';

export default class RegisterCarScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraGranted: null,
      type: Camera.Constants.Type.front,
      image: null,
    };
  }

  async componentDidMount() {
    let { status, expires } = await Permissions.getAsync(Permissions.CAMERA);
    if (status !== "granted") {
      const grant = await Permissions.askAsync(Permissions.CAMERA);
      status = grant.status;
    }

    this.setState({ hasCameraGranted: status });
    console.log(status);
  }

  snap = async () => {
    if (this.camera) {
      const pic = await this.camera.takePictureAsync();
      console.log(pic);
      this.setState({ image: pic })
      return pic;
    }
    return null;
  };

  changeType = () => {
    if (this.state.type == Camera.Constants.Type.back) {
      this.setState({ type: Camera.Constants.Type.front });
    } else {
      this.setState({ type: Camera.Constants.Type.back });
    }
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Camera
          ref={ref => (this.camera = ref)}
          type={this.state.type}
          style={{ flex: 1 }}
        >
          <View style={{ flex: 1, justifyContent: 'row', backgroundColor: "transparent" }}>
            <TouchableOpacity onPress={this.changeType}>
              <Text style={{ fontSize: 25, color: "black", marginTop: 200 }}>
                카메라 전환
            </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.snap}>
              <Text style={{ fontSize: 25, color: "black", marginTop: 200 }}>
                찍기
            </Text>
            </TouchableOpacity>
          </View>
        </Camera>
        <View style={{ flex: 1 }}>
          {this.state.image ? (<Image style={{ flex: 1 }} source={this.state.image} />) : (<></>)}
        </View>
      </View >
    );
  }
  // render() {
  //   return (
  //     <View>
  //       <Text> textInComponent </Text>
  //     </View>
  //   )
  // }
}

const styles = StyleSheet.create({})

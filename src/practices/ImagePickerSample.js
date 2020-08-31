import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import SimpleButton from '../components/SimpleButton';
import { TapGestureHandler } from 'react-native-gesture-handler';


export default class ImagePickerSample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: {}
    }
  }

  async componentDidMount() {
    let { status } = await Permissions.getAsync(Permissions.CAMERA_ROLL);
    console.log(status)
    if (status !== 'granted') {
      let { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      console.log(status);
    }
  }

  async snapPicture() {
    // 카메라 기본 앱 실행
    const picture = await ImagePicker.launchCameraAsync();
    console.log("snap")
    console.log(picture);
    console.log(picture.uri)
    this.setState({ image: picture })
  }

  async getPicture() {
    const picture = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All
    });
    console.log(picture)
    this.setState({ image: picture })
  }

  render() {
    return (
      <View>
        <SimpleButton title="사진찍기" onPress={this.snapPicture.bind(this)} color="blue" />
        <SimpleButton title="사진 가져오기" onPress={this.getPicture.bind(this)} color="blue" />
        <Image source={this.state.image} />
        <Text> textInComponent </Text>
      </View>
    )
  }
}

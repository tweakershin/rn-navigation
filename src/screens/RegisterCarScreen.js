import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';

// import Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';

import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

import SimpleButton from '../components/SimpleButton';
import IconTextInput from '../components/IconTextInput';
import { registerCar } from '../services/car';

export default class RegisterCarScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carImage: {},
      modelName: '',
      year: '',
      manufacturer: '',
      vin: ''
    }
  }

  componentDidMount = async () => {
    let { status } = await Permissions.getAsync(Permissions.CAMERA_ROLL);
    if (status !== 'granted') {
      const result = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      status = result.status;
    }
  }

  async getPicture() {
    const picture = await ImagePicker.launchImageLibraryAsync();
    this.setState({ carImage: picture });
  }


  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <TouchableOpacity onPress={this.getPicture.bind(this)}>
          <View style={{ width: 114, height: 85, backgroundColor: 'gray', marginBottom: 10 }}>
            <Image style={{ width: 114, height: 85 }} source={this.state.carImage} />
          </View>
        </TouchableOpacity>

        <IconTextInput
          wrapStyle={styles.inputStyle}
          iconProps={{ name: 'logo-model-s' }}
          placeholder="모델명"
          onChangeText={(text) => {
            this.setState({ modelName: text })
          }}
          value={this.state.modelName}
        />
        <IconTextInput
          wrapStyle={styles.inputStyle}
          iconProps={{ name: 'ios-calendar' }}
          placeholder="연식"
          onChangeText={(text) => {
            this.setState({ year: text })
          }}
          value={this.state.year}
        />
        <IconTextInput
          wrapStyle={styles.inputStyle}
          iconProps={{ name: 'ios-business' }}
          placeholder="제조사"
          onChangeText={(text) => {
            this.setState({ manufacturer: text })
          }}
          value={this.state.manufacturer}
        />
        <IconTextInput
          wrapStyle={styles.inputStyle}
          iconProps={{ name: 'ios-barcode' }}
          placeholder="VIN"
          onChangeText={(text) => {
            this.setState({ vin: text })
          }}
          value={this.state.vin}
        />

        <SimpleButton title="등록" onPress={
          async () => {
            const { modelName, year, manufacturer, vin, carImage } = this.state;

            const data = await registerCar(modelName, year, manufacturer, vin, carImage);
            console.log(data);
            this.props.navigation.goBack();
          }
        } />
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10
  },
  inputStyle: {
    marginBottom: 10
  }
})

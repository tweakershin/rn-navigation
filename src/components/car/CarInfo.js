import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default class CarInfo extends Component {
  static defaultProps = {
    id: '',
    image: '',  // uri
    modelName: '',
    vin: '',
    manufacturer: '',
    year: ''
  }

  render() {
    return (
      <View style={styles.container} >
        <Image
          source={{ uri: this.props.image }}
          style={styles.carImage} />

        <View style={styles.descWrap}>
          <View style={styles.dividerBar} />

          <View style={styles.columnWrap}>
            <View style={styles.iconText}>
              <Ionicons name="ios-barcode"
                color="#bbb"
                size={20}
                style={styles.icon} />
              <Text>{this.props.vin}</Text>
            </View>

            <View style={styles.iconText}>
              <Ionicons name="ios-construct" color="#bbb" size={20} style={styles.icon} />
              <Text>{this.props.manufacturer}</Text>
            </View>

          </View>

          <View style={styles.columnWrap}>
            <View style={styles.iconText}>
              <Ionicons name="ios-car" color="#bbb" size={20} style={styles.icon} />
              <Text>{this.props.modelName}</Text>
            </View>
            <View style={styles.iconText}>
              <Ionicons name="ios-calendar" color="#bbb" size={20} style={styles.icon} />
              <Text>{this.props.year}</Text>
            </View>
          </View>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
  carImage: {
    width: '100%',
    height: 150,
    // resizeMode: 'contain'
    resizeMode: 'cover'
  },
  descWrap: {
    marginTop: 10,
    height: 60
  },
  iconText: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 4
  },
  icon: {
    paddingLeft: 20,
    paddingRight: 10
  },
  columnWrap: {
    flexDirection: 'row',
    width: '50%',
    alignItems: 'center'
  },
  dividerBar: {
    position: 'absolute',
    height: '70%',
    width: 1,
    top: "5%",
    left: "50%",
    backgroundColor: '#aaa'
  }
})
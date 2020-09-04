import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class AuctionListItem extends React.Component {
  static defaultProps = {
    image: '', // uri
    modelName: '',
    year: '',
    vin: '',
    manufacturer: '',
    displayPrice: '',
  }

  render() {
    console.log(this.props.image)
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={{ height: 90, flexDirection: 'row', flex: 1, alignItems: 'center' }}
      >
        <Image
          source={
            this.props.image ?
              { uri: this.props.image } :
              require('../../../assets/splash.png')
          }
          style={{
            height: 90,
            width: 90,
            marginRight: 10,
            resizeMode: 'contain'
          }} />

        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ fontSize: 22, color: '#333', fontWeight: 'bold' }}>
              {this.props.modelName}
            </Text>

            <View style={{ flexDirection: 'row' }}>
              <Ionicons name="ios-calendar" size={15} style={{ marginRight: 6 }} color='#666' />
              <Text
                style={{
                  marginRight: 6,
                  fontSize: 12,
                  color: '#666'
                }}>
                {this.props.manufacturer}
              </Text>
              <Text style={{
                marginRight: 6,
                fontSize: 12,
                color: '#666'
              }}>
                {this.props.year}
              </Text>
            </View>

          </View>


          <Text style={{
            flexGrow: 0.5,
            textAlign: 'right',
            fontSize: 20,
            fontWeight: '400'

          }}>$ {this.props.displayPrice}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}
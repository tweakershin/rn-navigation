import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native';
import moment from 'moment';
import "moment/locale/ko";
moment.locale('ko');

const OfferListItem = (props) => {

  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10
    }}>
      <View>
        <Text style={{ fontSize: 25 }}>${props.price}</Text>
      </View>

      <View style={{ flexDirection: 'column', }}>
        <Text style={{ fontSize: 12 }}>
          {props.username}
        </Text>
        <Text style={{ fontSize: 12 }}>
          {moment(props.createdDate).toNow()}
        </Text>
      </View>
    </View>
  )
}
export default OfferListItem

// export default class OfferList extends Component {
//   static defaultProps = {
//     bidList: []
//   }

//   renderItem({ item }) {
//     return (
//       <OfferListItem {...item} />
//     )
//   }

//   render() {
//     return (
//       <FlatList
//         data={this.props.bidList}
//         renderItem={this.renderItem.bind(this)}
//         keyExtractor={(item, index) => (index.toString())}
//         ItemSeparatorComponent={
//           () => (<View style={{
//             width: '100%',
//             height: StyleSheet.hairlineWidth,
//             backgroundColor: 'gray',

//           }} />)
//         }
//       />
//     )
//   }
// }

const styles = StyleSheet.create({})

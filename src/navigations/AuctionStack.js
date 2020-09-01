import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DefaultScreen from '../screens/DefaultScreen';
import AuctionListScreen from '../screens/AuctionListScreen';

const Stack = createStackNavigator();
const defaultScreenOptions = {
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: "tomato"
  },
  headerTitleAlign: 'center',
  headerBackTitleVisible: true
}

function AuctionStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="AuctionList"
      screenOptions={defaultScreenOptions} >

      <Stack.Screen
        name="AuctionList"
        component={AuctionListScreen}
        options={{
          title: '경매 목록',
        }}
      />
      <Stack.Screen
        name="AuctionDetail"
        component={DefaultScreen}
        options={{
          title: '경매 상품'
        }}
      />

    </Stack.Navigator>
  )
}

export default AuctionStack;
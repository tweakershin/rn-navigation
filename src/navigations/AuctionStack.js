import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DefaultScreen from '../screens/DefaultScreen';

const Stack = createStackNavigator();

function AuctionStack(props) {
  return (
    <Stack.Navigator initialRouteName="AuctionList" >
      <Stack.Screen name="AuctionList" component={DefaultScreen} />
      <Stack.Screen name="AuctionDetail" component={DefaultScreen} />
    </Stack.Navigator>
  )
}

export default AuctionStack;
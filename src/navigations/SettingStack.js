import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DefaultScreen from '../screens/DefaultScreen';

const Stack = createStackNavigator();

function SettingStack(props) {
  return (
    <Stack.Navigator initialRouteName="SettingHome">
      <Stack.Screen
        name="SettingHome"
        component={DefaultScreen} />
      <Stack.Screen
        name="SettingEdit"
        component={DefaultScreen} />
    </Stack.Navigator>
  )
}

export default SettingStack;
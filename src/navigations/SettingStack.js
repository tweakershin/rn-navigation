import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DefaultScreen from '../screens/DefaultScreen';
import SettingScreen from '../screens/SettingScreen'

const Stack = createStackNavigator();
const defaultScreenOptions = {
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: "tomato"
  },
  headerTitleAlign: 'center',
  headerBackTitleVisible: true
}


function SettingStack(props) {
  return (
    <Stack.Navigator
      nitialRouteName="SettingHome"
      screenOptions={defaultScreenOptions}
    >
      <Stack.Screen
        name="SettingHome"
        component={SettingScreen}
        options={{
          title: "환경설정"
        }}
      />
      <Stack.Screen
        name="SettingEdit"
        component={DefaultScreen}
        options={{
          title: "환경설정변경"
        }}
      />
    </Stack.Navigator>
  )
}

export default SettingStack;
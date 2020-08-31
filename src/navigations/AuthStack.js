import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DefaultScreen from '../screens/DefaultScreen';

const Stack = createStackNavigator();

function AuthStack(props) {
  return (
    <Stack.Navigator initialRouteName="Login" >
      <Stack.Screen name="Login" component={DefaultScreen} />
      <Stack.Screen name="Register" component={DefaultScreen} />
    </Stack.Navigator>
  )
}
export default AuthStack;
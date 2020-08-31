import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DefaultScreen from '../screens/DefaultScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();
const defaultScreenOptions = {
  // headerTitle: "차 목록",
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: "tomato"
  },
  // headerRight: MyCarHeaderRight,
  headerTitleAlign: 'center',
  headerBackTitleVisible: true
}

function AuthStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={defaultScreenOptions}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: '로그인/회원가입'
        }} />
      <Stack.Screen
        name="Register"
        component={DefaultScreen}
        options={{
          title: '로그인/회원가입'
        }} />
    </Stack.Navigator>
  )
}
export default AuthStack;
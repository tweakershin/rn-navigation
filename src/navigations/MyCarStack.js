import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { createStackNavigator } from '@react-navigation/stack';
import DefaultScreen from '../screens/DefaultScreen';

// 컴포넌트 두 개 반환 (Stack.Navigator, Stack.Screen)
const Stack = createStackNavigator();

const defaultScreenOptions = {
  // headerTitle: "차 목록",
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: "tomato"
  },
  headerRight: MyCarHeaderRight
}

function MyCarHeaderRight({ navigation, ...props }) {
  console.log("MyCarHeader")
  console.log(navigation)
  return (
    <TouchableOpacity
      style={{ paddingRight: 15 }}
      onPress={() => {
        navigation.navigate('registerCar')
      }}>

      <Ionicons name="ios-add" size={40} color="white" />
    </TouchableOpacity>
  )
}


function MyCarStack({ navigation, ...props }) {
  // navigation 전달받음.

  return (
    <Stack.Navigator
      initialRouteName="MyCarList"
      screenOptions={defaultScreenOptions}>

      <Stack.Screen
        name="MyCarList"
        component={DefaultScreen}
        options={{
          title: "차 목록",
          headerRight: (props) => {
            return (
              <MyCarHeaderRight navigation={navigation} {...props} />
            )
          }
        }}
      />

      <Stack.Screen
        name="MyCarDetail"
        component={DefaultScreen}
        options={{
          title: "차 상세조회",
          headerRight: (props) => {
            return (
              <MyCarHeaderRight navigation={navigation} {...props} />
            )
          }
        }}
      />

      <Stack.Screen
        name="registerCar"
        component={DefaultScreen}
        options={{
          title: "차 등록",
        }}
      />

    </Stack.Navigator>
  )
}

export default MyCarStack;
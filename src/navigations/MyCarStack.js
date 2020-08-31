import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import DefaultScreen from '../screens/DefaultScreen';

// 컴포넌트 두 개 반환 (Stack.Navigator, Stack.Screen)
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

function MyCarHeaderRight({ navigation, ...props }) {
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
      screenOptions={defaultScreenOptions}
      mode="modal"
    >

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
          },
          headerTitle: (props) =>
            (<Text {...props}>{navigation.getParam('car').modelName}</Text>),
          // headerLeft: (props) => {
          //   return (
          //     <HeaderBackButton />
          //   )
          // },
          headerBackTitleVisible: true
        }}
      />

      <Stack.Screen
        name="registerCar"
        component={DefaultScreen}
        options={{
          title: "차 등록",
          // headerLeft: (props) => {
          //   return (
          //     <HeaderBackButton {...props} onPress={() => navigation.goBack()} />
          //   )
          // },
          headerBackTitleVisible: true
        }}
      />

    </Stack.Navigator>
  )
}

export default MyCarStack;
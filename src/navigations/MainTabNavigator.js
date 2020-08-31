import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'

import AuctionStack from './AuctionStack';
import MyCarStack from './MyCarStack';
import SettingStack from './SettingStack';

// Tab.Navigator, Tab.screen
const Tab = createBottomTabNavigator();

const defaultTabBarOptions = {
  activeTintColor: "tomato", // 활성탭 색상
  inactiveTintColor: 'gray', // 비활성탭 색상

  activeBackgroundColor: "white", // 활성탭 배경색
  inactiveBackgroundColor: "white" // 비활성탭 배경색
}

function MainTabNavigator(props) {
  return (
    <Tab.Navigator
      initialRouteName="MyCarStack"
      tabBarOptions={defaultTabBarOptions}>

      <Tab.Screen
        name="MyCarStack"
        component={MyCarStack}
        options={{
          title: "마이 카",
          tabBarIcon:
            ({ focused, size, color }) =>
              (<Ionicons name="ios-car" color={color} size={size} focused={focused} />)
        }}
      />

      {/* 
      title: "경매"
      icon: ios-cash 
      */}
      <Tab.Screen
        name="AuctionStack"
        component={AuctionStack}
        options={{
          title: '경매',
          tabBarIcon:
            ({ focused, size, color }) =>
              (<Ionicons name="ios-cash" size={size} color={color} focused={focused} />)
        }}
      />

      {/* 
      title: 환경설정
      icon: ios-settings 
      */}
      <Tab.Screen
        name="SettingStack"
        component={SettingStack}
        options={{
          title: "환경설정",
          tabBarIcon: ({ focused, size, color }) =>
            (<Ionicons name="ios-settings" size={size} color={color} focused={focused} />)
        }}
      />
    </Tab.Navigator>
  )
}

export default MainTabNavigator
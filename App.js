import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Root from './src/Root';

export default function App() {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  )
}



// import React from "react";



// import { View, StyleSheet } from "react-native";
// // import IconPractice from "./practices/IconPractice";
// // import LoginScreen from "./screens/LoginScreen";
// import SampleHomeScreen from "./src/screens/SampleHomeScreen";
// import SampleDetailScreen from "./src/screens/SampleDetailScreen";

// import { createAppContainer, createSwitchNavigator } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";

// import { createBottomTabNavigator } from "react-navigation-tabs";

// import DefaultScreen from "./src/screens/DefaultScreen";
// import LoginScreen from "./src/screens/LoginScreen";
// import CarListScreen from "./src/screens/CarListScreen";

// const carStackNavigator = createStackNavigator(
//   {
//     CarList: CarListScreen,
//     CarDetail: DefaultScreen,
//   },
//   {
//     initialRouteName: "CarList",
//   }
// );
// const settingNavigator = createStackNavigator(
//   {
//     SettingList: DefaultScreen,
//     EditInfo: DefaultScreen,
//   },
//   {
//     initialRouteName: "SettingList",
//   }
// );

// const tabNavigator = createBottomTabNavigator(
//   {
//     Car: carStackNavigator,
//     Setting: settingNavigator,
//   },
//   { initialRouteName: "Car" }
// );
// const AppNavigator = createSwitchNavigator(
//   {
//     Main: tabNavigator,
//     Login: LoginScreen,
//   },
//   { initialRouteName: "Main" }
// );


// const AppContainer = createAppContainer(AppNavigator);
// export default AppContainer;

// // const AppNaviagator = createBottomTabNavigator(
// //   {
// //     SampleHome: SampleHomeScreen,
// //     SampleDetail: SampleDetailScreen,
// //   },
// //   { initialRouteName: "SampleHome" }
// // );

// // const AppNaviagator = createStackNavigator(
// //   {
// //     sampleHome: SampleHomeScreen,
// //     sampleDetail: SampleDetailScreen,
// //   },
// //   { initialRouteName: "sampleHome" }
// // );

// // const AppContainer = createAppContainer(AppNaviagator);
// // export default AppContainer;

// // import { StatusBar } from "expo-status-bar";
// // import React from "react";
// // import { StyleSheet, Text, View } from "react-native";

// // import Root from "./src/Root";

// // export default function App() {
// //   return (
// //     <View style={styles.container}>
// //       <Root />
// //       <StatusBar style="auto" />
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#fff",
// //     alignItems: "center",
// //     justifyContent: "center",
// //   },
// // });

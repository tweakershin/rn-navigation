import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

import MainTabNavigator from './navigations/MainTabNavigator';
import AuthStack from './navigations/AuthStack';

const isLogined = true
// const isLogined = false;



// export default function Root(props) {
//   return (
//     <React.Fragment>
//       {isLogined ? (<MainTabNavigator />) : (<AuthStack />)}
//     </React.Fragment>
//   )
// }

export default class Root extends React.Component {
  render() {
    return (
      <React.Fragment>
        {isLogined ? (<MainTabNavigator />) : (<AuthStack />)}
      </React.Fragment>
    )
  }
}




// import React from "react";

// import { View, StyleSheet } from "react-native";
// // import IconPractice from "./practices/IconPractice";
// // import LoginScreen from "./screens/LoginScreen";
// import SampleHomeScreen from "./screens/SampleHomeScreen";
// import SampleDetailScreen from "./screens/SampleDetailScreen";

// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";

// const AppNaviagator = createStackNavigator(
//   {
//     sampleHome: SampleHomeScreen,
//     sampleDetail: SampleDetailScreen,
//   },
//   { initialRouteName: "sampleHome" }
// );

// const AppContainer = createAppContainer(AppNaviagator);
// export default class Root extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         {/* <LoginScreen /> */}
//         {/* <SampleHomeScreen /> */}
//         <AppContainer />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: "100%",
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

import React from 'react';

import MainTabNavigator from './navigations/MainTabNavigator';
import AuthStack from './navigations/AuthStack';

import AuthToken from './utils/AuthToken';

// const isLogined = true;
// const isLogined = false;



// export default function Root(props) {
//   return (
//     <React.Fragment>
//       {isLogined ? (<MainTabNavigator />) : (<AuthStack />)}
//     </React.Fragment>
//   )
// }

export const AuthContext = React.createContext({
  token: '',
  isLogiend: false,
});

export default class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogined: false,
      token: null
    }
  }

  async loginCheck() {
    const token = await AuthToken.get();
    if (token) {
      this.setState({
        isLogined: true,
        token: token
      })
    } else {
      this.setState({
        isLogined: false,
        token: null
      })
    }
  }

  login(token) {
    this.setState({ isLogined: true, token: token })
  }
  logout() {
    this.setState({ isLogined: false, token: null })
  }

  componentDidMount() {
    this.loginCheck();
  }

  render() {
    return (
      <React.Fragment>
        {this.state.isLogined ?
          (<MainTabNavigator login={this.login.bind(this)} logout={this.logout.bind(this)} />) :
          (<AuthStack login={this.login.bind(this)} logout={this.logout.bind(this)} />)}
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

import React from 'react';

import MainTabNavigator from './navigations/MainTabNavigator';
import AuthStack from './navigations/AuthStack';

import AuthToken from './utils/AuthToken';
import { AuthContext } from './contexts/auth';

export default class Root extends React.Component {
  constructor(props) {
    super(props);

    this.login = (token) => {
      this.setState({
        token: token,
        isLogined: true
      })
    }

    this.logout = () => {
      this.setState({
        token: null,
        isLogined: false
      })
    }

    this.state = {
      isLogined: false,
      token: null,
      logout: this.logout,
      login: this.login
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

  // login(token) {
  //   this.setState({ isLogined: true, token: token })
  // }
  // logout() {
  //   this.setState({ isLogined: false, token: null })
  // }

  componentDidMount() {
    this.loginCheck();
  }

  render() {
    return (
      <React.Fragment>
        <AuthContext.Provider value={this.state}>
          {this.state.isLogined ?
            (<MainTabNavigator />) :
            (<AuthStack />)}
        </AuthContext.Provider>
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

import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./src/Screens/Home";
import Settings from "./src/Screens/Settings";

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: "Home"
      }
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        title: "Settings"
      }
    }
  },
  {
    initialRouteName: "Home"
    // headerLayoutPreset: "center"
  }
);

const App = createAppContainer(MainNavigator);

export default App;

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import React from "react";
import { View, Text } from "react-native";

import Landing from "./screens/Landing";
import LoginPage from "./screens/LoginPage";
import SignupPage from "./screens/SignupPage";
import UploadPage from "./screens/UploadPage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={Landing} />



      </Stack.Navigator>
    </NavigationContainer>
  );
}

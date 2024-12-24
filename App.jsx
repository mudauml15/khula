import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import React from "react";


import Landing from "./screens/Landing";
import LoginPage from "./screens/LoginPage";
import SignupPage from "./screens/SignupPage";
import UploadPage from "./screens/UploadPage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="SignupPage" component={SignupPage} />
        <Stack.Screen name="UploadPage" component={UploadPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

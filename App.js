/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import "react-native-gesture-handler";

import React from "react";
import type { Node } from "react";
import {
  StyleSheet,
} from "react-native";

import { DrawerNavigation } from "./src/navigator/DrawerNavigation";
import { AuthProvider } from "./src/context/AuthContext";
import { NavigationContainer } from "@react-navigation/native";


const App: () => Node = () => {


  return (
    <NavigationContainer>
      <AppState>
        <DrawerNavigation />
      </AppState>
    </NavigationContainer>

  );
};
const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
};


export default App;

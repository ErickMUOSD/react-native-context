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
import { NavigationContainer } from "@react-navigation/native";


const App: () => Node = () => {


  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>

  );
};


export default App;

import { Text, View } from "react-native";
import React, { useContext } from "react";
import {AuthContext} from '../context/AuthContext';
export const Settings = () => {

  const {authState}= useContext( AuthContext );

  return (
    <View>
      <Text>Settings</Text>
      <Text>{authState.textInput}</Text>
    </View>
  );
};

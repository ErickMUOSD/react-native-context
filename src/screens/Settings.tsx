import {Text, View} from "react-native";
import React, {useContext} from "react";
import {AuthContext} from '../context/AuthContext';
import {TouchableIcon} from "../components/TouchableIcon";

export const Settings = () => {

    const {authState} = useContext(AuthContext);

    return (
        <View>
            <Text>Settings</Text>
            <Text>{authState.textInput}</Text>
            <Text>{authState.userName}</Text>
            <Text>{authState.isLoggedIn}</Text>
            <Text>{authState.favoriteIcons}</Text>
            <View  style={{  flexDirection:'row', flexWrap: 'wrap' }}>
                <TouchableIcon iconName='rocket'/>
                <TouchableIcon iconName='body'/>
                <TouchableIcon iconName='flag'/>
                <TouchableIcon iconName='book'/>
                <TouchableIcon iconName='beer'/>
                <TouchableIcon iconName='boat'/>
                <TouchableIcon iconName='add'/>
                <TouchableIcon iconName='bulb'/>
                <TouchableIcon iconName='bug'/>
            </View>

        </View>
    );
};


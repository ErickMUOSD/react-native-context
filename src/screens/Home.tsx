import {Text, View, Button} from "react-native";
import React, {useEffect, useContext} from "react";
import {AuthContext} from "../context/AuthContext";
import Icon from 'react-native-vector-icons/Ionicons';
export const Home = () => {
    const {signIn,authState, logout}= useContext( AuthContext );

    // useEffect(() => {
    //
    // }, []);
    console.log(authState.isLoggedIn);
    return (
        <View>
            <Text>Home</Text>
            {authState.isLoggedIn
                ? <Button title='Log out' onPress={logout}></Button>
                :   <Button title='Log in' onPress={signIn}></Button>

            }
            {
                authState.favoriteIcons &&
                <Icon name={authState.favoriteIcons} size={120} color="#1fc7d1" />

            }
        </View>
    );
};



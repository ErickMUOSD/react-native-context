import {Text, View, Button} from "react-native";
import React, {useEffect, useContext} from "react";
import {AuthContext} from "../context/AuthContext";
import Icon from 'react-native-vector-icons/Ionicons';
export const Home = () => {
    const {signIn,authState}= useContext( AuthContext );

    // useEffect(() => {
    //
    // }, []);
    console.log(authState.isLoggedIn);
    return (
        <View>
            <Text>Home</Text>
            {authState.isLoggedIn
                ? <Text>Home</Text>
                :   <Button title='Change state' onPress={signIn}></Button>

            }

            {
                authState.favoriteIcons &&
                <Icon name={authState.favoriteIcons} size={120} color="#1fc7d1" />

            }
        </View>
    );
};



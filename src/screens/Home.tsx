import {Text, View, Button} from "react-native";
import React, {useEffect, useContext} from "react";
import {AuthContext} from "../context/AuthContext";

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

        </View>
    );
};

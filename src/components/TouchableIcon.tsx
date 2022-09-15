import React, {useContext} from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from "react-native-gesture-handler";
import {AuthContext} from "../context/AuthContext";

interface Props{
    iconName: string;
}

export const TouchableIcon = ({iconName} : Props) => {
    const {authState, addIcon} = useContext(AuthContext);


    return (
        <TouchableOpacity onPress={(e) => addIcon(iconName)}>
            <Icon name={iconName} size={120} color="#1fc7d1" />
        </TouchableOpacity>
    )
}

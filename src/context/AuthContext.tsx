import React, {createContext, useReducer} from "react";
import {authReducer} from "./AuthReducer";

// Definir como luce que información tendre aqui
export interface AuthState {
    isLoggedIn: boolean;
    userName?: string;
    favoriteIcon?: string;
    textInput?: string;
    // favoriteIcons?: string[];
    favoriteIcons?: string;
}

//EStado inicial
export const authInitialState: AuthState = {
    isLoggedIn: false,
    userName: undefined,
    favoriteIcon: undefined,
    textInput: 'nothing to show',
    favoriteIcons: ''
};

//lo usaremos para decirle a react como luce y que expone el context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    addIcon: (iconName: string) => void;
    logout: () => void;
}

//componnete provedor del estado


export const AuthProvider = ({children}: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState);
    const signIn = () => {
        dispatch({type: 'signIn'})
    }
    const addIcon = (iconName: string) => {
        dispatch({type: 'addIcon',payload: iconName})
    }
    const logout = () => {
        dispatch({type: 'logout'})
    }

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            addIcon,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const AuthContext = createContext({} as AuthContextProps);

import React, { createContext } from "react";

// Definir como luce que información tendre aqui
export interface AuthState {
  isLoggedIn: boolean;
  userName?: string;
  favoriteIcon?: string;
}

//EStado inicial
export const authInitialState: AuthState = {
  isLoggedIn: false,
  userName: undefined,
  favoriteIcon: undefined
};

//lo usaremos para decirle a react como luce y que expone el context
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
}

//componnete provedor del estado


export const AuthProvider = ({ children }: any) => {
  return (
    <AuthContext.Provider value={{
      authState: authInitialState,
      signIn: () => {
      }
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const AuthContext = createContext({} as AuthContextProps);

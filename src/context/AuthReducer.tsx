import {AuthState} from './AuthContext';

type  AuthAction = { type: 'signIn' } | { type: 'addIcon', payload: string };
export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case "signIn":
            return  {
                ...state,
                isLoggedIn: true,
                userName: 'no-username-yet',
                textInput: 'xddddddddddddddddddddddd'
            }
        case "addIcon":
            return  {
                ...state,
                // favoriteIcons:[...state.favoriteIcons, action.payload]
                favoriteIcons: action.payload
            }

        default:
            return state;
    }

}

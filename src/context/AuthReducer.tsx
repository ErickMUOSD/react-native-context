import {AuthState} from './AuthContext';

type  AuthAction = { type: 'signIn' } | { type: 'addIcon', payload: string } | { type: 'logout' };
export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case "signIn":
            return  {
                ...state,
                isLoggedIn: true,
                userName: 'no-username-yet',
                textInput: 'not input to show'
            }
        case "addIcon":
            return  {
                ...state,
                // favoriteIcons:[...state.favoriteIcons, action.payload]
                favoriteIcons: action.payload
            }
        case "logout":
            return {
                ...state,
                isLoggedIn: false,
                userName: undefined,
                favoriteIcons: undefined,
            }
        default:
            return state;
    }

}

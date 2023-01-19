import {createContext} from 'react';
import {State} from './authReducer';

export type AuthContextProps = {
	user: State;
	dispatch: React.Dispatch<any>;
};
// | {user: State};

export const AuthContext = createContext({} as AuthContextProps);

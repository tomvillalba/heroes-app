import {useEffect, useReducer} from 'react';
import {AuthContext, AuthContextProps} from './auth/authContext';
import {AppRouter} from './routers/AppRouter';
import {authReducer} from './auth/authReducer';

const init = () => {
	const userData = localStorage.getItem('user');
	return userData ? JSON.parse(userData) : {logged: false};
};

interface props {
	children: JSX.Element | JSX.Element[];
}

export const HeroesApp = () => {
	// @ts-ignore
	const [user, dispatch] = useReducer(authReducer, {}, init);

	useEffect(() => {
		if (!user) return;
		localStorage.setItem('user', JSON.stringify(user));
	}, [user]);

	return (
		<AuthContext.Provider value={{user, dispatch}}>
			<AppRouter />;
		</AuthContext.Provider>
	);
};

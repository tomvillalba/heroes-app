import {types} from "../types";

export type Action =
	| {
			type: types.login;
			payload: {
				name: string;
				email: string;
			};
	  }
	| {
			type: types.logout;
	  };

export type State = {
	name: string;
	logged: boolean;
};

export const authReducer = (state: State, action: Action) => {
	switch (action.type) {
		case types.login:
			return {
				...action.payload,
				logged: true,
			};
		case types.logout:
			return {
				logged: false,
			};

		default:
			return state;
	}
};
